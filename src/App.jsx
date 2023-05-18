import React, { useState } from "react";
import PlayerCreate from "./Components/PlayerCreate";
import PlayerList from "./Components/PlayerList";

const App = () => {
  // const playersArray = [
  //   { id: 1, player_name: "Shubhman Gill" },
  //   { id: 2, player_name: "Yashasvi Jaiswal" },
  //   { id: 3, player_name: "Virat Kohli" },
  //   { id: 4, player_name: "Surya kumar yadav" },
  //   { id: 5, player_name: "Cameron Green" },
  //   { id: 6, player_name: "Riku Singh" },
  //   { id: 7, player_name: "Rashid Khan" },
  //   { id: 8, player_name: "Sunil Naraine" },
  //   { id: 9, player_name: "Ishant Sharma" },
  //   { id: 10, player_name: "Trent Boult" },
  //   { id: 11, player_name: "Mohd Shami" },
  // ];

  const [players, setPlayers] = useState([]);

  const createPlayer = (player_name) => {
    console.log("Need to add a Player : ", player_name);
    const unId = Math.random() * player_name.length * Math.random();
    setPlayers((prev) => [
      ...prev,
      {
        id: unId,
        player_name,
      },
    ]);
  };
  const deletePlayerById = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
  };

  const updatePlayerName = (newName, id) => {
    const updatedPlayers = players.map((player) =>
      player.id === id ? { ...player, player_name: newName } : player
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
