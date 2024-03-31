import React, { Fragment, useEffect, useState } from "react";
import useLog from "./useLog";

export default function FileItem() {
  const { InnerChild, dispatch } = useLog("FileItem", "blueviolet");

  return (
    <div style={{ backgroundColor: "blueviolet" }} onClick={dispatch}>
      <Fragment>
        <InnerChild />
      </Fragment>
    </div>
  );
}
