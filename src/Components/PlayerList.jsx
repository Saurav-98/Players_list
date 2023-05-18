import React from "react";
import PlayerShow from "./PlayerShow";

const PlayerList = ({ players, onDelete, onUpdatePlayer }) => {
  return (
    <div className="book-list">
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
