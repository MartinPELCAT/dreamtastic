import React, { FC } from "react";
import AuthenticationContextProvider from "./AuthenticationContext";

export const AppContext: FC = ({ children }) => {
  return (
    <AuthenticationContextProvider>{children}</AuthenticationContextProvider>
  );
};
