import React from "react";
import { useEffect, useState } from "react";

export default function useLog(name: string, color: string) {
  const [isOn, setIsOn] = useState(false);

  const cyan = "\x1b[36m%s\x1b[0m";
  const red = "\x1b[31m%s\x1b[0m";
  const blue = "\x1b[34m%s\x1b[0m";

  console.log(cyan, isOn, `[${name}.Rendering]`);
  useEffect(() => {
    console.log(blue, isOn, `[${name}.RunEffect]`);

    return () => {
      console.log(red, isOn, `[${name}.ClearEffect]`);
    };
  });

  const InnerChild = () => (
    <div>
      {name + " "}
      <span style={{ backgroundColor: "white", color: "black" }}>
        {String(isOn)}
      </span>
    </div>
  );
  const WrapperComponent = ({ children }: { children: React.JSX.Element }) => (
    <div style={{ backgroundColor: color }} onClick={dispatch}>
      {children}
    </div>
  );

  const dispatch = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOn(!isOn);
  };

  return { isOn, dispatch, InnerChild, WrapperComponent } as const;
}
