import React, { Fragment, useEffect, useState } from "react";
import useLog from "./useLog";

export default function FileItem() {
  const { InnerChild, WrapperComponent } = useLog("FileItem", "blueviolet");

  return (
    <WrapperComponent>
      <Fragment>
        <InnerChild />
      </Fragment>
    </WrapperComponent>
  );
}
