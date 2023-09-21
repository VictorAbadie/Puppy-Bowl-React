import { useState } from "react";
import { fetchAllPlayers } from "../API";

const COHORT = "2306-ftb-et-web-am"
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`

const NewPlayerForm = () => {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [error, setError] = useState(null);

async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify({name, breed}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        fetchAllPlayers()
    } catch (error) {
        setError(error.message)
    }
}

    return ( 
        <>
        <div className="npr">
            <h2 className="new-player">New Player Registration:</h2>
            <form onSubmit={handleSubmit}>
                <label className="name">
                    Name: <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                </label>
                <label className="breed">
                    Breed: <input value={breed} onChange={(e) => setBreed(e.target.value)} placeholder="Breed"/>
                </label>
                <br />
                <br />
                <button className="submit" type="submit">Submit</button>
            </form>
            </div>
        </>
    );
}
 
export default NewPlayerForm;