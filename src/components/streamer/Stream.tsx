import { useParams } from "react-router-dom";
import Streamer from "./Streamer";
import Header from "../gui/Header/Header";

export default function Stream() {
    const { stream } = useParams<{ stream?: string }>();

    return (
        <div>
            <Header />
            {stream ? (
                <Streamer streamURL={stream} widthV={600} heightV={400} />
            ) : null}
        </div>
    )
}