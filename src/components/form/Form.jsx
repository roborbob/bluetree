/** @format */

import React from "react";

export default function Form() {
  const HandleClick = async () => {
    console.log("click");
  };
  return (
    <div>
      <button
        className="bg-green-500 p-5 rounded text-white"
        onClick={() => HandleClick()}
      >
        Submit
      </button>
    </div>
  );
}
