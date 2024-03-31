import React, { useEffect, useState } from "react";
import useLog from "./useLog";

export default function FileViewer() {
  const [isOn, dispatch] = useLog("FileViewer");
  return (
    <div style={{ backgroundColor: "greenyellow" }} onClick={dispatch}>
      File Viewer {" " + isOn}
    </div>
  );
}
