/** @format */

import React from "react";

const data = {
  email: "dev.blueforest@gmail.com",
  data: {
    contact_name: "Robert James",
    contact_email: "robertjames1804@gmail.com",
    contact_message: "Test message from bluetree.dev",
  },
};
export default function Form() {
  const HandleClick = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(
        "https://emailapi-eqc5em4yea-oa.a.run.app/mail",
        options
      );
      if (response.ok) {
        console.log("Success");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <button
        className="bg-green-500 p-5 rounded text-white"
        onClick={HandleClick}
      >
        Submit
      </button>
    </div>
  );
}
