import React, { Fragment, useEffect, useState } from "react";
import FileExplorer from "./FileExplorer";
import FileItem from "./FileItem";
import FileViewer from "./FileViewer";
import useLog from "./useLog";

export default function App() {
  const { InnerChild, dispatch } = useLog("App", "yellow");

  return (
    <div style={{ backgroundColor: "yellow" }} onClick={dispatch}>
      <Fragment>
        <InnerChild />
        <FileExplorer>
          <FileItem />
        </FileExplorer>
        <FileViewer />
      </Fragment>
    </div>
  );
}
