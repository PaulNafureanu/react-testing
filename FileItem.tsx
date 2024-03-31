import React, { useEffect, useState } from "react";
import useLog from "./useLog";

export default function FileItem() {
  const [isOn, dispatch] = useLog("FileItem");

  return (
    <div style={{ backgroundColor: "blueviolet" }} onClick={dispatch}>
      File Item {" " + isOn}
    </div>
  );
}
