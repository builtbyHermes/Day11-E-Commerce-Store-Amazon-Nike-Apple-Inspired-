import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const AuthContext = createContext();

const STORAGE_KEY = "shopsphere-auth";

export function AuthProvider({ children }) {

  const [auth, setAuth] = useState(() => {

    const savedAuth = localStorage.getItem(STORAGE_KEY);

    return savedAuth
      ? JSON.parse(savedAuth)
      : {
          user: null,
          token: null
        };

  });

  useEffect(() => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(auth)
    );

  }, [auth]);

  const login = ({ email, password }) => {

    // Demo authentication
    // Later this will be replaced with an API request.

    const demoUser = {

      id: 1,

      firstName: "John",

      lastName: "Doe",

      email,

      avatar: ""

    };

    setAuth({

      user: demoUser,

      token: "shopsphere-demo-token"

    });

  };

  const register = ({
    firstName,
    lastName,
    email,
    password
  }) => {

    // Demo registration

    const newUser = {

      id: Date.now(),

      firstName,

      lastName,

      email,

      avatar: ""

    };

    setAuth({

      user: newUser,

      token: "shopsphere-demo-token"

    });

  };

  const logout = () => {

    setAuth({

      user: null,

      token: null

    });

  };

  const isAuthenticated = !!auth.token;

  return (

    <AuthContext.Provider

      value={{

        user: auth.user,

        token: auth.token,

        isAuthenticated,

        login,

        register,

        logout

      }}

    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(AuthContext);

}