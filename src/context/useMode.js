import { useContext } from "react";
import { ThemeProvider } from "./GlobalProvider";

const useMode = () => {
  return useContext(ThemeProvider);
};

export default useMode;
