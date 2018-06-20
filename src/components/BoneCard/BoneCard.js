import React from "react";
import "./BoneCard.css";

// props.onClick
const BoneCard = props => (
  <div className="card" onClick={() => props.onBoneClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default BoneCard;
