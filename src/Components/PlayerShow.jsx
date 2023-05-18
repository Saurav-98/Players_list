import React, { useState } from "react";
import PlayerEdit from "./PlayerEdit";

const PlayerShow = ({ player, onDelete, onUpdatePlayer }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(player.id);
    //
  };
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onUpdatePlayer(id, newTitle);
  };
  const handleShowEdit = () => {
    setShowEdit((prev) => !prev);
  };
  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${player.id}/200/300`}
        alt="players pictures"
      />
      {showEdit ? (
        <PlayerEdit player={player} onSubmit={handleSubmit} />
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
