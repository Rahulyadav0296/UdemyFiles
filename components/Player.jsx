import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    // setIsEditing(true);
    // setIsEditing(isEditing ? false : true)   - wrong way to express
    setIsEditing((editing) => !editing); // Guranteed Changes tht result which is developer by react
    if(isEditing){
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;
  //    let buttonCaption = 'Edit'
  if (isEditing) {
    editableplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // buttonCaption="Save"
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {/* {!isEditing ? <span className="player-name">{name}</span> : <input />} */}
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        {/* <button onClick={handleEditClick}>{buttonCaption}</button> */}
        {/* <button onClick={handleEditClick}>Edit</button> */}
      </span>
    </li>
  );
}
