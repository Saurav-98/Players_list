import React from "react";
import PlayerShow from "./PlayerShow";
import { useContext } from "react";
import PlayersContext from "../context/players";

const PlayerList = ({ players, onDelete, onUpdatePlayer }) => {
  const { count, increment } = useContext(PlayersContext);

  return (
    <div className="book-list">
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      {players.map((player) => (
        <PlayerShow
          key={player.id}
          player={player}
          onDelete={onDelete}
          onUpdatePlayer={onUpdatePlayer}
        />
      ))}
    </div>
  );
};

export default PlayerList;
