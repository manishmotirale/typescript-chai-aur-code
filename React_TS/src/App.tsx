import "./App.css";
import { ChaiCard } from "./components/ChaiCard.tsx";
import ChaiList from "./components/ChaiList.tsx";
import { Counter } from "./components/Counter.tsx";
import { OrderForm } from "./components/OrderForm.tsx";
import type { Chai } from "./types.ts";
import { Card } from "./components/Card.tsx";

const menu: Chai[] = [
  { id: 1, name: "Masala Chai", price: 20 },
  { id: 2, name: "Adrak Chai", price: 30 },
  { id: 3, name: "Ginger Chai", price: 40 },
];

const App = () => {
  return (
    <>
      <div>
        <h1>HII</h1>
        <ChaiCard name="HeadPhones" price={5000} />
      </div>

      <div>
        <Counter />
      </div>

      <div>
        <ChaiList items={menu} />
      </div>

      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed:", order.name, order.cups);
          }}
        />
      </div>

      <div>
        <Card title="Chai Aur TS" footer={<button>Order Now</button>} />
      </div>
    </>
  );
};

export default App;
