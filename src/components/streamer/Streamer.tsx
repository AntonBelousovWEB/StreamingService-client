import { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

const Streamer = ({ stream }: { stream: string }) => {
  const playerRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (playerRef.current) {
      const video = playerRef.current;
      const hls = new Hls();
      const url = `http://192.168.1.248:8000/live/${stream}/index.m3u8`;

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
          <div className="offline_box">
            <p>{message}</p>
          </div>
        }
        {!message ? (
            <video
              width={300}
              height={200}
              ref={playerRef}
              autoPlay={true}
              muted={true}
            />
        ) : null}
      </div>
    </div>
  );
};

export default Streamer;