import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "px-6 py-3 rounded-full text-sm font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-red-600 text-white hover:bg-red-700"
      : "border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white";

  return (
    <button
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
