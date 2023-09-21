import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {fetchSinglePlayer} from "../API"
import { useNavigate } from "react-router-dom";

export default function SinglePlayer () {
    // console.log(id);
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState()
    const {id} = useParams()
    const navigate = useNavigate();
    const backButton = () => {
        navigate(-1);
    }

    useEffect(() => {
        async function getSinglePlayer() {
            const response = await fetchSinglePlayer(id);
            if (response.success) {
                setPlayer(response.data.player);
            } else {
                setError(response.error.message);
            }
        }

        getSinglePlayer()
    }, [])

    return (
        <>
        <h1>{player && player.name}</h1>
        <h2 className="h2spf">{player && player.breed}</h2>
        
        <img src={player && player.imageUrl} alt="Puppy" />
                <br />
                <br />
            <button onClick={backButton}>Back to all players</button>
        </>
    )

} 