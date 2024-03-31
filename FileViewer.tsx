import React, { Fragment, useEffect, useState } from "react";
import useLog from "./useLog";

export default function FileViewer() {
  const { InnerChild, WrapperComponent } = useLog("FileItem", "greenyellow");

  return (
    <WrapperComponent>
      <Fragment>
        <InnerChild />
      </Fragment>
    </WrapperComponent>
  );
}
