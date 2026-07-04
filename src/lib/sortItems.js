/**
 * Sort content rows so items with an explicit order (sort_order > 0) come
 * first (ascending), and items with no order (sort_order 0 / null) fall to
 * the end. Ties are broken by created_at (oldest first).
 */
export function sortByOrder(rows = []) {
  const rank = (r) => (Number(r?.sort_order) > 0 ? Number(r.sort_order) : Infinity);
  return [...rows].sort((a, b) => {
    const ra = rank(a);
    const rb = rank(b);
    if (ra !== rb) return ra - rb;
    return new Date(a?.created_at || 0) - new Date(b?.created_at || 0);
  });
}
