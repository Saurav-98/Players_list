import React, { useState } from "react";
import PlayerEdit from "./PlayerEdit";

const PlayerShow = ({ player, onDelete, onUpdatePlayer }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(player.id);
    //
  };
  const handleShowEdit = () => {
    setShowEdit((prev) => !prev);
  };
  return (
    <div className="book-show">
      {showEdit ? (
        <PlayerEdit player={player} onUpdatePlayer={onUpdatePlayer} />
      ) : (
        player.player_name
      )}
      <div className="actions">
        <button className="edit" onClick={handleShowEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PlayerShow;
