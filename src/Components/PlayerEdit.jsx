import React, { useState } from "react";

const PlayerEdit = ({ player, onSubmit }) => {
  const [title, setTitle] = useState(player.player_name);

  const handleChange = (event) => setTitle(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New Title is", title);
    // onUpdatePlayer(title, player.id);
    // onSubmit();
    onSubmit(title, player.id);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={title}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default PlayerEdit;
