"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export default function CustomDropdown({
  label,
  placeholder,
  options,
  value,
  onChange,
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-left transition-all hover:border-gray-300 focus:outline-none"
        style={open ? { borderColor: "#e879a0" } : {}}
      >
        <span className={value ? "text-gray-800 font-medium" : "text-gray-400"}>
          {value || placeholder}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden max-h-52 overflow-y-auto">
          {/* Placeholder option */}
          <button
            type="button"
            onClick={() => { onChange(""); setOpen(false); }}
            className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100"
          >
            {placeholder}
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 transition-colors"
              style={value === opt ? { backgroundColor: "#fce4ef", color: "#e879a0", fontWeight: 600 } : {}}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
