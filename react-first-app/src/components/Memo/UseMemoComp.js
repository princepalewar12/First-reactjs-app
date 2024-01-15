import React, { useMemo, useState } from "react";

const UseMemoComp = ({ number1, number2 }) => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    let sum = 0;
    sum = number1 + number2;
    return sum;
  }, [number1, number2]);
  return (
    <div>
      <h1>UseMemoComp</h1>
      <h3>result:{result}</h3>
      <h4>Count:{count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increment
      </button>
    </div>
  );
};

export default UseMemoComp;
