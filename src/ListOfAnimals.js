import { useState, useEffect } from "react";

import animalPicker from "./utils/animal-picker";

function ListOfAnimals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    setAnimals(animalPicker());
  }, []);

  return (
    <div>
      <h2>Here are some animals!</h2>
      {animals.map((animal) => (
        <div key={animal}>{animal}</div>
      ))}
    </div>
  );
}

export default ListOfAnimals;
