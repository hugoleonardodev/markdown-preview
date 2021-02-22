import { StrictMode } from "react";
import ReactDOM from "react-dom";

import MarkdownPreview from "./MarkdownPreview";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MarkdownPreview />
  </StrictMode>,
  rootElement
);
