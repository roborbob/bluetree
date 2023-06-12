/** @format */

import React, { useState, useEffect, useRef } from "react";
import { getDevice, getMedia } from "../../utils/media";

function GetCamera() {
  const VideoRef = useRef();
  // const video = document.getElementById("video");
  // const capture = document.getElementById("capture");
  // const canvas = document.getElementById("canvas");
  // const download = document.getElementById("download");

  const CaptureImage = () => {
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL("image/jpeg");
    download.href = image_data_url;
  };
  useEffect(() => {
    const getMedia = async () => {
      let stream = null;

      stream = await window.navigator.mediaDevices.getUserMedia({
        video: { facingMode: { exact: "environment" } },
      });
      VideoRef.current.srcObject = stream;
      VideoRef.current.onloadedmetadata = () => {
        VideoRef.current.play();
      };

      // pdf = new jsPDF("l", "pt", [video.videoWidth, video.videoHeight]);
      // pdf.addImage(
      //   image_data_url,
      //   "JPEG",
      //   0,
      //   0,
      //   video.videoWidth,
      //   video.videoHeight,
      //   "",
      //   "NONE"
      // );
      // var blob = pdf.output("blob");
      // var newurl = window.URL.createObjectURL(blob);
      // console.log(newurl);
      // pdf.addPage();
      // console.log(pdf);
    };
    getMedia();
  }, []);

  return (
    <>
      <div className="relative gap-5 justify-center items-center">
        <video ref={VideoRef} id="video" className="w-full" controls={false}>
          <source type="video/webm" />
        </video>
        <div className="absolute bottom-3 left-0 right-0 flex flex-row justify-evenly">
          <button
            onClick={() => CaptureImage()}
            id="capture"
            className="p-3 rounded border-none bg-red-200 h-fit"
          >
            Capture
          </button>
          <button className="p-3 rounded border-none bg-blue-200 h-fit">
            <a id="download" download="snap" href="">
              Download
            </a>
          </button>
          <button className="p-3 rounded border-none bg-green-200 h-fit">
            <a id="upload" download="snap" href="">
              Upload
            </a>
          </button>
        </div>
      </div>
      <canvas id="canvas" className="w-full h-auto"></canvas>
    </>
  );
}

export default function Upload() {
  const [device, setDevice] = useState(false);
  useEffect(() => {
    async function CheckDevice() {
      const mobile = await getDevice();
      setDevice(mobile);
    }
    CheckDevice();
  }, []);

  return (
    <div className="relative px-5">
      {device ? <GetCamera /> : <p>This is not a mobile device</p>}
    </div>
  );
}
