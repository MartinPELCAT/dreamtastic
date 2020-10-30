import {
  GetCurrentUserQuery,
  useGetCurrentUserQuery,
} from "apollo/__generated__";
import React, { createContext, FC, useEffect, useState } from "react";

type ContextUser = GetCurrentUserQuery["getCurrentUser"];

type ContextType = {
  user?: ContextUser;
};

export const AuthenticationContext = createContext<ContextType>(undefined);

export const AuthenticationContextProvider: FC = ({ children }) => {
  const { data } = useGetCurrentUserQuery();
  const [user, setUser] = useState<ContextUser>();

  useEffect(() => {
    setUser(data ? data.getCurrentUser : null);
  }, [data]);

  return (
    <AuthenticationContext.Provider value={{ user }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
