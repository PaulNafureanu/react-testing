import { useEffect, useState } from "react";

export default function useLog(name: string) {
  const [isOn, setIsOn] = useState(false);

  console.log(`[${name}.Rendering](${isOn}): Rendering`);
  useEffect(() => {
    console.log(`[${name}.Effect](${isOn}): Mounting`);

    return () => {
      console.log(`[${name}.Effect](${isOn}): Unmounting`);
    };
  });

  const dispatch = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOn(!isOn);
  };

  return [isOn, dispatch] as const;
}
