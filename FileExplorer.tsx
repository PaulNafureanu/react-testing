import React, { Fragment, useEffect, useState } from "react";
import useLog from "./useLog";

interface Props {
  children?: React.JSX.Element;
}

export default function FileExplorer({ children }: Props) {
  const { InnerChild, dispatch } = useLog("FileExplorer", "pink");

  return (
    <div style={{ backgroundColor: "pink" }} onClick={dispatch}>
      <Fragment>
        <InnerChild />
        {children}
      </Fragment>
    </div>
  );
}
