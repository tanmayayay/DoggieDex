// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokedex from "./Pokedex";
import "./App.css";
import logo from "./logo.png"; // Import the logo

function App() {
  const [breedList, setBreedList] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breedImage, setBreedImage] = useState("");

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    setBreedList(Object.keys(response.data.message));
  };

  const fetchBreedImage = async (breed) => {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    setBreedImage(response.data.message);
  };

  const handleBreedSelect = (e) => {
    setSelectedBreed(e.target.value);
    fetchBreedImage(e.target.value);
  };

  const handleControlPadClick = () => {
    if (selectedBreed) {
      fetchBreedImage(selectedBreed);
    }
  };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="DoggieDex Logo" />
      <h1>DoggieDex</h1>
      <Pokedex onControlPadClick={handleControlPadClick}>
        <div className="pokedex-content">
          <select className="breed-select" value={selectedBreed} onChange={handleBreedSelect}>
            <option value="">Select a breed</option>
            {breedList.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          {breedImage && <img className="breed-image" src={breedImage} alt={selectedBreed} />}
        </div>
      </Pokedex>
    </div>
  );
}

export default App;
