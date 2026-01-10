import { useEffect, useState } from "react";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  // Fetch meals from a local server
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("https://localhost:3000/meals");
      if (!response.ok) {
        // Handle error
      } else {
        const data = await response.json();
        setLoadedMeals(data);
      }
    }
    fetchMeals();
  }, []);
  return (
    // Render the list of meals
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

export default Meals;
