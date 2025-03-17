import React from "react";
import LoadingIndicator from "./LoadingIndicator.tsx";
import logo from "./logo.png";

export default function LogoLoadingIndicator() {
  return <LoadingIndicator secondary placeholder={<img src={logo} />} />;
}
