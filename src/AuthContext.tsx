import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  user: any;
  setUser: (user: any) => void;
}
interface AuthProviderProps {
    children: ReactNode; // Explicitly define children
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
