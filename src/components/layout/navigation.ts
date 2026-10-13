import { useLocation, useNavigate } from "react-router-dom";
import { scrollBehavior } from "../../lib/usePageMeta";

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return function goToSection(id: string) {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
    } else {
      navigate(`/#${id}`);
    }
  };
}
