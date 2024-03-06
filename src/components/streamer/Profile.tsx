import { useState, useContext } from "react"
import Header from "../gui/Header/Header"
import { AuthContext } from "../../contexts/AuthContext"

export default function Profile() {
    const { user } = useContext(AuthContext);
    const [showStreamKey, setShowStreamKey] = useState(false);

    const toggleStreamKeyVisibility = () => {
        setShowStreamKey(!showStreamKey);
    };

    return (
        <div>
            <Header />
            <h1 className="user_name">{user?.name}</h1>
            {showStreamKey ? (
                <h1>Stream Key:
                    <span 
                        className="stream_key">
                            {user?.streamKey}
                    </span>
                </h1>
            ) : (
                <button 
                    className="button_show" 
                    onClick={toggleStreamKeyVisibility}>
                        Show Stream Key
                </button>
            )}
        </div>
    )
}