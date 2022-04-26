import React from "react";
import { AnimatePresence } from "framer-motion";

import "./src/styles/style.scss";
// import { ModalContext } from "./src/components/layout";
import { ModalProvider } from "./src/components/modalcontext";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

export const wrapRootElement = ({ element }) => (
  <ModalProvider>{element}</ModalProvider>
);
