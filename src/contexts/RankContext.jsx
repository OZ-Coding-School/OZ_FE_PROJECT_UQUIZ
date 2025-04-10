import { createContext, useContext, useState } from "react";

const RANK_CONTEXT = createContext();

export const RankContextProvider = ({ children }) => {
  const [rankItems, setRankItems] = useState([]);
  const updateRank = (newValue) => {
    setRankItems((prev) => [...prev, newValue]);
  };

  return (
    <RANK_CONTEXT.Provider value={{ rankItems, updateRank }}>
      {children}
    </RANK_CONTEXT.Provider>
  );
};

export const useRank = () => {
  const context = useContext(RANK_CONTEXT);
  if (!context) {
    throw new Error("Rank Context 에러");
  }
  return context;
};
