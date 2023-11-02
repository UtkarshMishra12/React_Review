import { useState } from "react";

const Player = ({initialName, symbol}) => {
    const [isEditing, setIsEditing]= useState(false);
    const [playerName, setPlayerName]= useState(initialName);

    function handleEditClick(){
        setIsEditing((editing)=> !editing);
    }

    function handleChange(event){
      setPlayerName(event.target.value);
    }
    let eidtablePlayerName =  <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';
    if(isEditing){
       eidtablePlayerName= <input type="text" required value={playerName} onChange={handleChange}/>
        //btnCaption="Save"
    }
  return (
    <li>
      <span className="player">
        {eidtablePlayerName}
        <span className="palyer-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
