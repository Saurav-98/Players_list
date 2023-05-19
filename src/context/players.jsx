import { createContext, useState } from "react";

const PlayersContext = createContext();

const Provider = ({ children }) => {
  const [count, setCount] = useState(2);

  const valueToShare = {
    count,
    increment: () => {
      setCount((prev) => prev + 1);
    },
  };

  return (
    <PlayersContext.Provider value={valueToShare}>
      {children}
    </PlayersContext.Provider>
  );
};

export { Provider };
export default PlayersContext;
