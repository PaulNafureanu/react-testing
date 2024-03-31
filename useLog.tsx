import React from "react";
import { useEffect, useState } from "react";

export default function useLog(name: string, color?: string) {
  const [isOn, setIsOn] = useState(false);

  const red = "\x1b[7m\x1b[41m%s\x1b[0m";
  const blue = "\x1b[7m\x1b[44m%s\x1b[0m";
  const magenta = "\x1b[7m\x1b[45m%s\x1b[0m";
  const cyan = "\x1b[7m\x1b[46m%s\x1b[0m";

  const strIsOn = ` ${isOn} `;

  console.log(cyan, strIsOn, `[${name}.Rendering]`);
  useEffect(() => {
    console.log(blue, strIsOn, `[${name}.RunEffect]`);

    return () => {
      console.log(red, strIsOn, `[${name}.ClearEffect]`);
    };
  });

  const dispatch = (e: React.SyntheticEvent) => {
    console.log(magenta, strIsOn, `[${name}.HandleEvent]`);
    e.stopPropagation();
    e.preventDefault();
    setIsOn(!isOn);
  };

  const InnerChild = () => (
    <div>
      {name + " "}
      <span style={{ backgroundColor: "white", color: "black" }}>
        {String(isOn)}
      </span>
    </div>
  );

  return { InnerChild, dispatch } as const;
}
