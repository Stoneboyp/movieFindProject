import React, { createContext, useState, ReactNode } from "react";

interface AppContextType {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchCount: number | null;
  setSearchCount: React.Dispatch<React.SetStateAction<number | null>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType>({
  searchValue: "",
  setSearchValue: () => null,
  searchCount: null,
  setSearchCount: () => null,
  currentPage: 1,
  setCurrentPage: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchCount, setSearchCount] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const contextValue: AppContextType = {
    searchValue,
    searchCount,
    currentPage,
    setSearchValue,
    setSearchCount,
    setCurrentPage,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
