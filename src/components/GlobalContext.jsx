import React, {createContext, useState} from 'react';

export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
  const [refresh, setRefresh] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        refresh,
        setRefresh,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
