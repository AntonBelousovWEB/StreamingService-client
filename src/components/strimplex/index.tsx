import { useEffect, useState } from "react";
import Header from "../gui/Header/Header";
import axios from "axios";
import Streamer from "../streamer/Streamer";
import { Link } from "react-router-dom";

export default function Main() {
    const [streams, setStreams] = useState<Array<string>>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/streams', {
            headers: {
                Authorization: 'Basic ' + btoa('admin:admin')
            }
        })
        .then(response => {
            const data = response.data.live;
            const keys = Object.keys(data);
            setStreams(keys);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);

    return (
        <div>
            <Header />
            <div className="streams_wrap">
                {streams.length > 0 ? (
                    streams.map((stream) => (
                        <Link to={`/stream/${stream}`}>
                            <Streamer key={stream} stream={stream}/> 
                        </Link>
                    ))
                ) : (
                    <p>Currently, no one is streaming. Be the first to start 
                        <Link className="link" to={"/profile"}> streaming!</Link>
                    </p>
                )}
            </div>
        </div>
    );
}