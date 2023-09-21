import { useNavigate } from "react-router-dom";

export default function PlayerListName({player}) {
    const navigate = useNavigate();
    // console.log(player.id)
    return (
        <>
        <div className="card">
        <h2 key={player.id}>{player.name}</h2>
        {/* <h3>{player.breed}</h3> */}
        <button onClick={() => navigate(`/${player.id}`)} player={player}>More info about: <br /> {player.name}</button>
        </div>
        </>
    )
}