import React from "react";

interface GhostButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GhostButton = ({ children, ...props }: GhostButtonProps) => {
  return (
    <button
      className="px-6 py-2 border border-neutral-600 text-neutral-400 font-medium rounded hover:text-white hover:border-white transition-all duration-300 bg-transparent active:scale-95"
      {...props}
    >
      {children}
    </button>
  );
};
