import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "pretendard/dist/web/variable/pretendardvariable.css"; // Pretendard Variable Font

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
