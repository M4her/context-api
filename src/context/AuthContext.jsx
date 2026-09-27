import { createContext, useState, useMemo } from "react";
export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [ userInfo, setUserInfo]  = useState({
    name: "Maher",
    age: 20,
    address: "Gazipur",
  });

  const contextValue = useMemo(
    () => ({
      userInfo,
      setUserInfo,
    }),
    [userInfo, setUserInfo],
  );

  return (
    <authContext.Provider value={contextValue}>
        {children}
        </authContext.Provider>
  );
};

export default AuthProvider;
