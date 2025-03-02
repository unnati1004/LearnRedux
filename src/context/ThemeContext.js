import React from "react";

export const ThemeContext = createContext();

export const ThemeProvider = () => {
  const [theme, setTheme] = useState(false);

  const toggleMode = () => {
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={(theme, toggleMode)}>
      {chiildren}
    </ThemeContext.Provider>
  );
};
