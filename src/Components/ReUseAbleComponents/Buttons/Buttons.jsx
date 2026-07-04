export const PrimaryButton = ({ buttonName, onClick, className = "" }) => {
  return (
    <button
      className={`bg-[var(--purple)] text-[var(--white)] px-4 py-2 font-bold text-center border-2 border-[var(--purple)] hover:bg-[var(--white)] hover:text-[var(--purple)] active:scale-95 active:bg-transparent active:text-[var(--purple)] cursor-pointer sm:transition-all sm:duration-300 ease-in-out rounded-br-2xl rounded-tl-2xl
        ${className} 
      `}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export const SecondaryButton = ({ buttonName, onClick, className = "" }) => {
  return (
    <button
      className={`bg-[var(--black)] text-[var(--white)] px-4 py-2 font-bold text-center border-2 border-[var(--black)] hover:bg-[var(--white)] hover:text-[var(--black)] active:scale-95 active:bg-transparent active:text-[var(--black)] cursor-pointer sm:transition-all sm:duration-300 ease-in-out rounded-bl-2xl rounded-tr-2xl
        ${className} 
      `}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};
