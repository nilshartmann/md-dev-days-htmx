import React from "react";
import logo from "./logo.png";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";

export default function LogoLoadingIndicator() {
  return (
    <LoadingIndicator
      secondary
      placeholder={<img alt="Logo" src={logo.src} />}
    />
  );
}
