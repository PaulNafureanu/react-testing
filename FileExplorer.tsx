import React, { useEffect, useState } from "react";
import useLog from "./useLog";

interface Props {
  children?: React.JSX.Element;
}

export default function FileExplorer({ children }: Props) {
  const [isOn, dispatch] = useLog("FileExplorer");

  return (
    <div style={{ backgroundColor: "pink" }} onClick={dispatch}>
      File Explorer {" " + isOn}
      {children}
    </div>
  );
}
