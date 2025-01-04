// // import { createContext, useContext, useState, useEffect } from 'react';

// // const AuthContext = createContext()

// // export function AuthProvider({ children }) {
// //   const [user, setUser] = useState(() => {
// //     const savedUser = localStorage.getItem('user')
// //     return savedUser ? JSON.parse(savedUser) : null
// //   })

// //   useEffect(() => {
// //     if (user) {
// //       localStorage.setItem('user', JSON.stringify(user))
// //     } else {
// //       localStorage.removeItem('user')
// //     }
// //   }, [user])

// //   const login = (userData) => {
// //     setUser(userData)
// //   }

// //   const logout = () => {
// //     setUser(null)
// //   }

// //   return (
// //     <AuthContext.Provider value={{ user, login, logout }}>
// //       {children}
// //     </AuthContext.Provider>
// //   )
// // }

// // export function useAuth() {
// //   return useContext(AuthContext)
// // }

// import { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext({
//   user: null,
//   login: () => {},
//   logout: () => {},
// });

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(() => {
//     try {
//       const savedUser = localStorage.getItem('user');
//       return savedUser ? JSON.parse(savedUser) : null;
//     } catch (error) {
//       console.error("Failed to parse user data from localStorage:", error);
//       return null;
//     }
//   });

//   useEffect(() => {
//     try {
//       if (user) {
//         localStorage.setItem('user', JSON.stringify(user));
//       } else {
//         localStorage.removeItem('user');
//       }
//     } catch (error) {
//       console.error("Failed to update localStorage:", error);
//     }
//   }, [user]);

//   const login = (userData) => {
//     setUser(userData);
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// }


import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useAuth() {
  return useContext(AuthContext);
}
