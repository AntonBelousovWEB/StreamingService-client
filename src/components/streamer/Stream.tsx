import { useParams } from "react-router-dom";

export default function Stream() {
    const { stream } = useParams<{ stream?: string }>();

    return (
        <h1>{stream}</h1>
    )
}