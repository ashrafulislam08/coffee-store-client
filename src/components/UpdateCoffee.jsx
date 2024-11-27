import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  return <div>UpdateCoffee</div>;
};

export default UpdateCoffee;
