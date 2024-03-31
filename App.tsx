import React, { useEffect, useState } from "react";
import FileExplorer from "./FileExplorer";
import FileItem from "./FileItem";
import FileViewer from "./FileViewer";
import useLog from "./useLog";

export default function App() {
  const [isOn, dispatch] = useLog("App");

  return (
    <div style={{ backgroundColor: "yellow" }} onClick={dispatch}>
      MyApp{" " + isOn}
      <FileExplorer>
        <FileItem />
      </FileExplorer>
      <FileViewer />
    </div>
  );
}
