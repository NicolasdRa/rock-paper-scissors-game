import React, { createContext, useState } from 'react';

export type GlobalContext = {
  score: number;
  setScore: (score: number) => void;
  pick: string;
  setPick: (pick: string) => void;
};

export const DataContext = createContext<GlobalContext>({
  score: 0,
  setScore: () => {},
  pick: '',
  setPick: () => {},
});

interface Props {
  children?: React.ReactNode;
}

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [score, setScore] = useState(12);
  const [pick, setPick] = useState('');

  return (
    <DataContext.Provider value={{ score, setScore, pick, setPick }}>
      {children}
    </DataContext.Provider>
  );
};
