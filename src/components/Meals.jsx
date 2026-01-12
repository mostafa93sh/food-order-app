import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";
import Error from "./UI/Error";

const intialConfig = {};

function Meals() {
  // Fetch meals from a local server
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", intialConfig);

  if (!loadedMeals) {
    if (error) return <Error title={`Fail to Load Meals`} message={error} />;

    if (isLoading) return <p className="center">LOADING ....</p>;
    return <p>there is no meals now</p>;
  }
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
