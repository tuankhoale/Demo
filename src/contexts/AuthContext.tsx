import React, { createContext, useContext, useState, useEffect } from 'react';
import { fakeUsers, User } from '../fakeDb';

interface AuthContextType {
  user: Omit<User, 'password'> | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Omit<User, 'password'> | null>(null);

  // ---- LOGIN ----
  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500)); // fake delay

    const found = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      localStorage.setItem('user', JSON.stringify(safeUser));
      return true;
    }

    return false;
  };

  // ---- REGISTER ----
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check email tồn tại chưa
    const exists = fakeUsers.find((u) => u.email === email);
    if (exists) return false;

    const newUser: User = {
      id: String(fakeUsers.length + 1),
      name,
      email,
      password,
      role: 'Bệnh nhân',
    };

    fakeUsers.push(newUser);
    return true;
  };

  // ---- LOGOUT ----
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // ---- LOAD USER SAU KHI REFRESH ----
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register, // 👉 thêm ở đây
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
