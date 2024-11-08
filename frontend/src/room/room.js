import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

function RoomPage() {
  const { roomId } = useParams();
  const elementRef = useRef(null);

  useEffect(() => {
    if (!roomId) return; // Early return if no roomId

    const meeting = async () => {
      const appID = 676163634;
      const serverSecret = "d4c9cd6d68574aa1b2a2aeac5199cf2c";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Type Your Name"
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: elementRef.current,
        sharedLinks: [
          {
            name: "Copy Link",
            url: `http://localhost:3000/room/${roomId}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false,
        showRoomTimer: true,
      });
    };

    meeting();
  }, [roomId]);

  return (
    <div>
      <div ref={elementRef} className="w-[100vw] h-[100vh] "></div>
    </div>
  );
}

export default RoomPage;
