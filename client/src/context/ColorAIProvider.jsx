import React, { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
export const ColorAIContext = createContext();

export const ColorAIProvider = (props) => {
  const [user, setUser] = useState();
  const [test, setTest] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState();
  const [clientContext, setClientContext] = useState();

  useEffect(() => {
    const tokenLocal = window.localStorage.getItem("token");
    setToken(tokenLocal);
    if (tokenLocal) {
      let user_id = jwtDecode(tokenLocal).user.id;
    
      axios
        .get(`http://localhost:4000/users/oneUser/${user_id}`)
        .then((res) => {console.log(res);
          setUser(res.data.resultUser[0]);
        })
        .catch((err) => {console.log(err)});
    }
  }, [isLogged]);

  return (
    <ColorAIContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        isLogged,
        setIsLogged,
        test,
        setTest,
        clientContext,
        setClientContext,
      }}
    >
      {props.children}
    </ColorAIContext.Provider>
  );
};
