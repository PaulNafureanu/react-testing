import React, { Fragment, useEffect, useState } from "react";
import useLog from "./useLog";

export default function FileViewer() {
  const { InnerChild, dispatch } = useLog("FileViewer", "greenyellow");

  return (
    <div style={{ backgroundColor: "greenyellow" }} onClick={dispatch}>
      <Fragment>
        <InnerChild />
      </Fragment>
    </div>
  );
}
