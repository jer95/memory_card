import { useState } from "react";
import "./App.css";
import Card from "./card";
import { shuffle, scoreCheck } from "./utils";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [pokedex, setPokedex] = useState([
    "charizard",
    "charmander",
    "caterpie",
    "squirtle",
    "wartortle",
    "ivysaur",
    "bulbasaur",
    "pidgey",
    "rattata",
    "raticate",
    "kakuna",
    "weedle",
  ]);
  console.log(bestScore, selected);

  function handleClick(e) {
    setSelected((prevSelected) => [...prevSelected, e.target.name]);
    console.log(selected);
    scoreCheck(e.target.name, selected, setScore, setBestScore, setSelected);
    const shuffled = shuffle(pokedex);
    setPokedex(shuffled);
  }

  return (
    <>
      <div className="flex-wrapper">
        <h1>Pokemon Card Memory Game</h1>
        <span>
          Get points by clicking on an image but don't click on any more than
          once!
        </span>
        <div className="column">
          <div className="score">Best score: {bestScore}</div>
          <div className="score">Score: {score}</div>
        </div>
      </div>
      <div className="grid-container">
        {pokedex.map((pokemon) => {
          return (
            <Card key={pokemon} name={pokemon} handleClick={handleClick} />
          );
        })}
      </div>
    </>
  );
}

export default App;
