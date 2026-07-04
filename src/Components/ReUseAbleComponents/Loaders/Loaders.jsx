import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center min-h-screen">
      <div className="w-20 h-20 border-4 border-transparent text-[var(--primary-blue)] text-4xl animate-spin flex items-center justify-center border-t-[var(--primary-blue)] rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-[var(--primary-green)] text-2xl animate-spin flex items-center justify-center border-t-[var(--primary-green)] rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
