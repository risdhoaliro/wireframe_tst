// import React, { createContext, useContext, useState } from 'react';
// import { User, AuthState } from '../types/auth';

// interface AuthContextType extends AuthState {
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [authState, setAuthState] = useState<AuthState>({
//     isAuthenticated: false,
//     user: null,
//     loading: false,
//     error: null
//   });

//   const login = async (email: string, password: string) => {
//     setAuthState(prev => ({ ...prev, loading: true, error: null }));
//     try {
//       const user = await new Promise<User | null>((resolve) => {
//         // Simulate API call
//         setTimeout(() => {
//           if (email === 'demo@example.com') {
//             resolve({
//               id: '1',
//               email: 'demo@example.com',
//               name: 'Demo User',
//               avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop'
//             });
//           } else {
//             resolve(null);
//           }
//         }, 1000);
//       });

//       if (user) {
//         setAuthState({
//           isAuthenticated: true,
//           user,
//           loading: false,
//           error: null
//         });
//       } else {
//         throw new Error('Invalid credentials');
//       }
//     } catch (error) {
//       setAuthState(prev => ({
//         ...prev,
//         loading: false,
//         error: 'Invalid credentials'
//       }));
//     }
//   };

//   const logout = () => {
//     setAuthState({
//       isAuthenticated: false,
//       user: null,
//       loading: false,
//       error: null
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ ...authState, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

import React, { createContext, useContext, useState } from 'react';
import { User, AuthState } from '../types/auth';
import { validateCredentials } from '../data/dummyUsers';


interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null
  });

  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const user = await new Promise<User | null>((resolve) => {
        // Simulate API call
        setTimeout(() => {
          const validatedUser = validateCredentials(email, password);
          resolve(validatedUser);
        }, 1000);
      });

            if (user) {
        setAuthState({
          isAuthenticated: true,
          user,
          loading: false,
          error: null
        });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error: Error) {
      console.error(error.message);
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: error.message
      }));
    }
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null
    });
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};