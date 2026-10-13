import { lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

const Frant = lazy(() => import("./pages/Frant").then((m) => ({ default: m.Frant })));
const DealsHub = lazy(() => import("./pages/DealsHub").then((m) => ({ default: m.DealsHub })));
const MoveEase = lazy(() => import("./pages/MoveEase").then((m) => ({ default: m.MoveEase })));

/** Case pages load on demand. The placeholder keeps the footer from jumping up while they load. */
function Page({ children }: { children: ReactNode }) {
  return <Suspense fallback={<div className="min-h-screen bg-[#f5f4ef]" />}>{children}</Suspense>;
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/frant" element={<Page><Frant /></Page>} />
          <Route path="/deals-hub" element={<Page><DealsHub /></Page>} />
          <Route path="/moveease" element={<Page><MoveEase /></Page>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
