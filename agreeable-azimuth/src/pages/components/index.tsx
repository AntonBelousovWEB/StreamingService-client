import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

const Home = () => {
  const playerRef = useRef(null);

  useEffect(() => {
    console.log('hello');
    const video = playerRef.current;
    const hls = new Hls();
    const url = "http://192.168.1.248:8000/live/hello/index.m3u8";

    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() { video.play(); });

    return () => {
      hls.destroy();
    };
  }, []);

  return (
    <video
      className="videoCanvas"
      ref={playerRef}
      autoPlay={true}
    />
  );
};

export default Home;