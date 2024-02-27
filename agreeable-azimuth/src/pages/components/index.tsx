import React, { useRef, useEffect, useState } from "react";
import Hls from "hls.js";

const Home = () => {
  const playerRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const video = playerRef.current;
    const hls = new Hls();
    const url = "http://192.168.1.248:8000/live/hello/index.m3u8";

    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() { video.play(); });

    hls.on(Hls.Events.ERROR, (event, data) => {
      setMessage("Streamer is offline now");
    });

    return () => {
      hls.destroy();
    };
  }, []);

  return (
    <div>
      {message && <p>{message}</p>}
      {!message ? (
        <video
          width="500"
          height="300"
          className="videoCanvas"
          ref={playerRef}
          autoPlay={true}
          controls
        />
      ) : null}
    </div>
  );
};

export default Home;