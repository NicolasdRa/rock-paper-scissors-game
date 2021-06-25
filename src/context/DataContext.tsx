import React, { createContext, useState } from "react";

export type GlobalContext = {
  score: number;
  setScore: (score: number) => void;
  pick: string;
  setPick: (pick: string) => void;
};

export const DataContext = createContext<GlobalContext>({
  score: 0,
  setScore: () => {},
  pick: "",
  setPick: () => {},
});

const initialScore = (): number => {
  const savedScore = localStorage.getItem("score");

  if (savedScore) {
    return parseInt(savedScore);
  }

  return 0;
};

interface Props {
  children?: React.ReactNode;
}

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [score, setScore] = useState(initialScore());
  const [pick, setPick] = useState("");

  return (
    <DataContext.Provider value={{ score, setScore, pick, setPick }}>
      {children}
    </DataContext.Provider>
  );
};
