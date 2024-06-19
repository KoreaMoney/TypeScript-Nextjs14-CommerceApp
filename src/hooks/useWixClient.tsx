"use client";

import React, { useContext } from "react";
import { WixClientContext } from "@/context/wixContext";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
