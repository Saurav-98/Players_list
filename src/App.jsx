import React, { useState, useEffect } from "react";
import PlayerCreate from "./Components/PlayerCreate";
import PlayerList from "./Components/PlayerList";
import axios from "axios";

const App = () => {
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    const response = await axios.get("http://localhost:3001/players");

    setPlayers(response.data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  // Create  a New Player
  const createPlayer = async (player_name) => {
    //Connecting to JSOn Server and adding Player to Players Database
    const response = await axios.post("http://localhost:3001/players", {
      player_name,
    });

    // Getting the New Player Data from Response
    setPlayers((prev) => [...prev, response.data]);
  };

  const deletePlayerById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/players/${id}`);
    console.log(response);

    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
  };

  const updatePlayerName = async (newName, id) => {
    const response = await axios.put(`http://localhost:3001/players/${id}`, {
      player_name: newName,
    });
    console.log(response);

    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, ...response.data } : player
    );

    setPlayers(updatedPlayers);
  };

  return (
    <div className="app">
      <h1>Players List</h1>
      <PlayerList
        players={players}
        onDelete={deletePlayerById}
        onUpdatePlayer={updatePlayerName}
      />
      <PlayerCreate onCreate={createPlayer} />
    </div>
  );
};

export default App;
