import { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { StreamerP } from "../../interfaces/streamer.interface";

const Streamer = ({ 
    streamURL, 
    widthV = 300, 
    heightV = 200, 
    mutedV = false, 
    controlV = true }: StreamerP) => {
  const playerRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (playerRef.current) {
      const video = playerRef.current;
      const hls = new Hls();
      const url = `http://192.168.1.248:8000/live/${streamURL}/index.m3u8`;

      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() { 
        video.play(); 
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        setMessage("Streamer is offline now");
      });

      return () => {
        hls.destroy();
      };
    }
  }, []);

  return (
    <div>
      <div className="steam_wrap">
        {message && 
          <div 
            style={{maxWidth: widthV, height: heightV}} 
            className="offline_box">
              <p>{message}</p>
          </div>
        }
        {!message ? (
            <video
              width={widthV}
              height={heightV}
              ref={playerRef}
              autoPlay={true}
              controls={controlV}
              muted={mutedV}
            />
        ) : null}
      </div>
    </div>
  );
};

export default Streamer;