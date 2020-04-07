import React from "react";

export const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312",
};

export const PreferredColorContext = React.createContext(colors.red);

export const DateContext = React.createContext(new Date());
