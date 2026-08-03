import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} data-revealed={revealed}>
      {children}
    </div>
  );
}
