import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Função de login simples com credenciais fixas para teste
  const login = (email, password) => {
    if (email === "teste@teste.com" && password === "123456") {
      setUser({ email });
    } else {
      alert("Credenciais inválidas");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
