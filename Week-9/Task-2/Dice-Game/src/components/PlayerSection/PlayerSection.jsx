import { useState } from 'react';
import "./PlayerSection.css";

const PlayerSection = ({ name, diceValue, isEditable, onNameChange, isEditing, setIsEditing }) => {
  const [editedName, setEditedName] = useState(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameChange(editedName);
  };

  return (
    <div className="player-section">
      {isEditable && isEditing ? (
        <form onSubmit={handleSubmit} className="name-edit-form">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            autoFocus
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <h2 className="player-name" onClick={() => isEditable && setIsEditing(true)}>
          {name}
          {isEditable && <span className="edit-icon">✎</span>}
        </h2>
      )}
      <div className="dice">
        <img 
          src={`../../../public/images/dice${diceValue}.png`} 
          alt={`Dice showing ${diceValue}`}
          className="dice-image"
        />
      </div>
    </div>
  );
};

export default PlayerSection;