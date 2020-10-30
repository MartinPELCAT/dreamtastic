import { GetCurrentUserQuery } from "apollo/__generated__";
import React, { createContext, PropsWithChildren } from "react";

type ContextType = {
  user?: GetCurrentUserQuery["getCurrentUser"];
};

export const AuthenticationContext = createContext<ContextType>(undefined);

export default function AuthenticationContextProvider(
  props: PropsWithChildren<{}>
) {
  return (
    <AuthenticationContext.Provider
      value={{ user: undefined }}
    >
      {props.children}
    </AuthenticationContext.Provider>
  );
}
