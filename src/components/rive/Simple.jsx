/** @format */
import React from "react";
import { useRive } from "@rive-app/react-canvas";

export default function Simple({ animation }) {
  const { RiveComponent: RiveComponentPlayer } = useRive({
    src: animation,
    artboard: "loader",
    autoplay: true,
  });
  const { RiveComponent: RiveComponent } = useRive({
    src: animation,
    artboard: "burger",
    stateMachines: "state",
    autoplay: true,
  });
  const { RiveComponent: RiveComponentTwo } = useRive({
    src: animation,
    artboard: "atom",
    autoplay: true,
  });

  return (
    <div className="min-w-[100px] w-[250px] h-[250px] hover:cursor-pointer ">
      <RiveComponentPlayer />
      <RiveComponent />

      <RiveComponentTwo />
    </div>
  );
}
