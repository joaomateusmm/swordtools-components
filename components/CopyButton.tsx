"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  textToCopy: string;
  initialText?: string;
  copiedText?: string;
  className?: string;
}

export const CopyButton = ({
  textToCopy,
  initialText = "Copy",
  copiedText = "Copied!",
  className = "",
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        group flex items-center gap-2 cursor-pointer 
        px-4 py-2 rounded-full 
        bg-white/5 border border-white/10 
        text-sm font-bold text-white 
        transition-all duration-300 
        hover:bg-white/10 hover:border-white/20 
        active:scale-95
        ${className}
      `}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <Copy
          className={`absolute w-full h-full text-neutral-400 transition-all duration-300 ${
            copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <Check
          className={`absolute w-full h-full text-white transition-all duration-300 ${
            copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
      </div>

      <span
        className={`transition-opacity duration-300 ${copied ? "text-white" : "text-neutral-300 group-hover:text-white"}`}
      >
        {copied ? copiedText : initialText}
      </span>
    </button>
  );
};

export default CopyButton;
