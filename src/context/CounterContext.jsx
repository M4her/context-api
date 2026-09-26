import { createContext, useState, useMemo } from "react";
export const counterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(17);
  const username = "John Doe";

  const contextValue = useMemo(() => ({
      count,
      setCount,
      username,
    }),
    [count, setCount, username],
  );

  return (
    <counterContext.Provider value={contextValue}>
      {children}
      </counterContext.Provider>
  );
};

export default CounterProvider;
