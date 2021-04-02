import React from "react";
import { AnimatePresence } from "framer-motion";

import "./src/styles/style.scss";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
