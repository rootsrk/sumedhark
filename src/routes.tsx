import { BrowserRouter, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Error } from "./pages/Error";

export const Router = () => (
  <BrowserRouter>
    <Route path="/" element={<Landing />} />
    <Route path="/error" element={<Error />} />
  </BrowserRouter>
);
