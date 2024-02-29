import { useRef, useEffect, useState } from "react";
import '../styles/App.css';
import Hls from "hls.js";

const User = () => {
  const playerRef = useRef(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (playerRef.current) {
      const video = playerRef.current;
      const hls = new Hls();
      const url = "http://192.168.1.248:8000/live/hello/index.m3u8";

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
          <div id="videoWrapper">
            <video
              className="videoCanvas"
              ref={playerRef}
              autoPlay={true}
              controls
            />
          </div>
        ) : null}
        <div className="streamer_info">
          <div className="follow_wrap">
            <h1 className="streamer_name">Adolf Romanovich</h1>
            <button className="follow_button">Follow</button>
          </div>
          <h1 className="streamer_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolorem provident sapiente sint explicabo est earum temporibus repellendus laborum aliquid minima quas debitis, veniam impedit consequatur numquam ipsa suscipit fugiat?</h1>
        </div>
      </div>
    </div>
  );
};

export default User;