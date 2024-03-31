import React, { Fragment, useEffect, useState } from "react";
import useLog from "./useLog";

interface Props {
  children?: React.JSX.Element;
}

export default function FileExplorer({ children }: Props) {
  const { InnerChild, WrapperComponent } = useLog("FileExplorer", "pink");

  return (
    <WrapperComponent>
      <Fragment>
        <InnerChild />
        {children}
      </Fragment>
    </WrapperComponent>
  );
}
