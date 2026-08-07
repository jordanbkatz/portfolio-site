import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Edge-case: top of page (hero section)
      if (window.scrollY < 100) {
        setActiveId("");
        return;
      }

      // Edge-case: bottom of page (highlight last section if scrolled to bottom)
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Target threshold point: middle of the viewport (50% screen threshold)
      const targetY = window.scrollY + windowHeight * 0.5;
      let currentActive = "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (targetY >= top && targetY < top + height) {
            currentActive = id;
            break;
          }
        }
      }

      if (currentActive) {
        setActiveId(currentActive);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return activeId;
}
