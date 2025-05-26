import {useState} from 'react';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/login`;

const useAuth = () => {
    const [token, setToken] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (user) => {
        const isLogin = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const data = await isLogin.json();

        if (data.isLogin) {
          setToken(data.token);
          return true;
        }

        return false;
    };

  const logout = () => {
    setToken("");
    setIsLoggedIn(false);
  };

  return {
    token,
    isLoggedIn,
    login,
    logout,
    setIsLoggedIn
  };
}

export default useAuth;