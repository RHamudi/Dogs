import { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USE_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate])

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token invalido");
          await getUser(token);
        } catch (err) {
           await userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  async function getUser(token) {
    const { url, options } = USE_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
        setError(null);
        setLoading(true);
    const { url, options } = TOKEN_POST({ username, password });
    const tokenres = await fetch(url, options);
    if(!tokenres.ok) throw new Error(`Error: ${tokenres.statusText}`)
    const { token } = await tokenres.json();
    window.localStorage.setItem("token", token);
    await getUser(token);
    navigate('/conta');
    } catch (err) {
        setError(err.message);
        setLogin(false);
    } finally {
        setLoading(false);
    }
  }

  

  return (
    <UserContext.Provider value={{ userLogin, data, userLogout, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
}
