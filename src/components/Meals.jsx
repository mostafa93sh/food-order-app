import { useEffect, useState } from "react";
import MealItem from "./MealItem";

function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  // Fetch meals from a local server
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        // Handle error
        console.log("some thing went wrong");
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
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

export default Meals;
