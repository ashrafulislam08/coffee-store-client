import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  return (
    <div className="m-20">
      <h3 className="text-4xl text-center text-red-500 font-bold">
        Coffee Store: {coffees.length}
      </h3>

      <section className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </section>
    </div>
  );
}

export default App;
