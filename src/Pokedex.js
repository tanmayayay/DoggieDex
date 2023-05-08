// src/Pokedex.js
import React from "react";
import "./Pokedex.css";

const Pokedex = ({ children, onControlPadClick }) => {
  return (
    <div className="pokedex">
      <div className="pokedex-top">
        <div className="pokedex-buttons">
          <div className="pokedex-button pokedex-button-red" />
          <div className="pokedex-button pokedex-button-green" />
          <div className="pokedex-button pokedex-button-blue" />
        </div>
        <div className="pokedex-hinge" />
      </div>
      <div className="pokedex-screen">{children}</div>
      <div className="pokedex-bottom">
        <div className="pokedex-control-pad" onClick={onControlPadClick}>
          <div className="pokedex-control-pad-inner" />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
