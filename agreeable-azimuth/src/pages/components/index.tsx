import React, { useRef } from "react";
import ReactHlsPlayer from 'react-hls-player';

export default function Home() {
    const playerRef = useRef(null);

    return (
        <div>
            <ReactHlsPlayer
                playerRef={playerRef}
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                autoPlay={false}
                controls={true}
                width="100%"
                height="auto"
            />
        </div>
    )
}