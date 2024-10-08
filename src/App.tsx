import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/layout/Layout";
import { Home } from "@/pages/Home";
import { Products } from "./pages/Products";
import { TermsAndConditions } from "./pages/TermsAndConditions";

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
