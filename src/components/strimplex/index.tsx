import { useEffect, useState } from "react";
import Header from "../gui/Header/Header";
import axios from "axios";
import Streamer from "../streamer/Streamer";

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
                {streams.map((stream) => (
                    <Streamer key={stream} stream={stream}/> 
                ))}
            </div>
            
        </div>
    );
}