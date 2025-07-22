import { useState, useEffect } from "react";

export default function Card({ name, handleClick }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.sprites.other["official-artwork"].front_default);
      });
  }, []);
  return (
    <>
      <div className="card">
        <img src={image} onClick={handleClick} name={name} />
        <span className="caption">{name}</span>
      </div>
    </>
  );
}
