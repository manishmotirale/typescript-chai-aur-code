import { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState<number>(0);

  return (
    <div>
      <p>Cups Orderd: {count}</p>

      <button onClick={() => setcount((c) => c + 1)}>Order one more</button>
    </div>
  );
};
