import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const elementRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const generateToken = async (tokenServerUrl, userID) => {
    const response = await fetch(
      `${tokenServerUrl}/access_token?userID=${userID}&expired_ts=7200`
    );
    const data = await response.json();
    return data.token;
  };

  const randomID = (len = 5) => {
    const chars = "a3b88bc1aa0e51635aa7f3b3a24322a1";
    let result = "";
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const getUrlParams = (url) => {
    const urlSearchParams = new URLSearchParams(url.split("?")[1]);
    return Object.fromEntries(urlSearchParams.entries());
  };

  const init = async () => {
    const roomID = getUrlParams(window.location.href)["roomID"] || randomID(5);
    const userID = randomID(5);
    const userName = randomID(5);

    const token = await generateToken(
      "https://nextjs-token.vercel.app/api",
      userID
    );

    const KitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction(
      1484647939, // Replace with your actual app ID
      token,
      roomID,
      userID,
      userName
    );

    const zp = ZegoUIKitPrebuilt.create(KitToken);

    zp.joinRoom({
      container: elementRef.current,
      maxUsers: 4,
      branding: {
        logoURL:
          "https://www.zegocloud.com/_nuxt/img/zegocloud_logo_white.ddbab9f.png",
      },
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: true, // Enables screen sharing
    });
  };

  useEffect(() => {
    init();
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setRecordedChunks((prevChunks) => [...prevChunks, blob]);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "screen-recording.webm";
      a.click();
    };

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setRecording(false);
  };

  return (
    <div>
      <div ref={elementRef} className="w-[100vw] h-[100vh]"></div>
      <div className="fixed mt-[-60px] mx-20 justify-center items-center flex">
        {!recording ? (
          <button
            onClick={startRecording}
            className="bg-green-800 text-white px-4 py-2 rounded"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop Recording
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomPage;
