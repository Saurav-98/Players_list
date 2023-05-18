import React, { useState } from "react";

const PlayerCreate = ({ onCreate }) => {
  const [playerName, setPlayerName] = useState("");
  const handleChange = (event) => setPlayerName(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(playerName);
    setPlayerName("");
  };
  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="player_name">Enter Player Name</label>
        <input
          className="input"
          type="text"
          id="player_name"
          onChange={handleChange}
          value={playerName}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default PlayerCreate;
