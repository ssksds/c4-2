import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");
  const toggle = () => {
    setIsAuth(!isAuth);
  };
  const loginUser = (email) => {
    setEmail(email);

    setIsAuth(true);
  };
  return (
    <AppContext.Provider value={{ isAuth, email, toggle, loginUser }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppContextProvider };
