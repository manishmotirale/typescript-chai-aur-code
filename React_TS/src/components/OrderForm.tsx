import { useState } from "react";

interface orderFormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export const OrderForm = ({ onSubmit }: orderFormProps) => {
  const [name, setname] = useState("Masala");
  const [cups, setcups] = useState(1);

  function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups });
  }

  return (
    <form onSubmit={handleSumbit}>
      <label>Chai Name</label>
      <input
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setname(e.target.value)
        }
      />

      <label>Cups</label>
      <input
        value={cups}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setcups(Number(e.target.value))
        }
      />

      <button type="submit">Place Order</button>
    </form>
  );
};
