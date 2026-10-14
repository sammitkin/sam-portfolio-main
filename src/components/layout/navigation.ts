import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollBehavior } from "../../lib/usePageMeta";

/** Links to a homepage section. On the homepage it scrolls; elsewhere it navigates to "/#id". */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return function goToSection(id: string, event?: MouseEvent) {
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)) return;
    event?.preventDefault();
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: scrollBehavior() });
      window.history.replaceState(null, "", `/#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };
}
