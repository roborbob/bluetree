/** @format */
import React from "react";
import { useRive } from "@rive-app/react-canvas";

export default function RivePlayer({ animation, artboard }) {
  const { RiveComponent: RiveComponentPlayer } = useRive({
    src: animation,
    artboard: artboard,
    // stateMachines: "state",
    autoplay: "true",
  });

  return (
    <div className="w-[200px] h-[200px] hover:cursor-pointer ">
      <RiveComponentPlayer />
    </div>
  );
}
