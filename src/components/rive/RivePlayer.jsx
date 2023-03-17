/** @format */
import React from "react";
import { useRive } from "@rive-app/react-canvas";

export const RivePlayerOne = ({ animation, artboard }) => {
  const { RiveComponent: RiveComponentPlayer } = useRive({
    src: animation,
    artboard: artboard,
    autoplay: "true",
  });

  return (
    <div className="w-full md:w-[200px] h-[300px] md:h-[200px] hover:cursor-pointer ">
      <RiveComponentPlayer />
    </div>
  );
};

export const RivePlayerTwo = ({ animation, artboard, stateMachine }) => {
  const { RiveComponent: RiveComponentPlayer } = useRive({
    src: animation,
    artboard: artboard,
    stateMachines: stateMachine,
    autoplay: "true",
  });

  return <RiveComponentPlayer />;
};

export const RivePlayerThree = ({ animation, artboard, stateMachine }) => {
  const { RiveComponent: RiveComponentPlayer } = useRive({
    src: animation,
    artboard: artboard,
    stateMachines: stateMachine,
    autoplay: "true",
  });

  return (
    <div className="w-full md:w-[600px] h-[600px] hover:cursor-pointer ">
      <RiveComponentPlayer />
    </div>
  );
};
