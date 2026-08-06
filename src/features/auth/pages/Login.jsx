import { Link } from "react-router-dom";

import AuthForm from "../components/AuthForm/AuthForm";
import PasswordInput from "../components/PasswordInput/PasswordInput";

import useLoginForm from "../hooks/useLoginForm";

import styles from "./Login.module.css";


function Login() {


  const {email, password, setEmail, setPassword, loading, errors, handleSubmit} = useLoginForm();


  return (

    <AuthForm

      title="Welcome Back"
      subtitle="Sign in to continue shopping"
      onSubmit={handleSubmit}
      footer={

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Create one
          </Link>
        </p>

      } >

     <div className={styles.field}>


        <label htmlFor="email">

          Email

        </label>


        <input

          id="email"

          type="email"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

          placeholder="Enter your email"

        />


        {
          errors.email &&

          <span className={styles.error}>
            {errors.email}
          </span>
        }

      </div>

      <PasswordInput

        id="password"

        value={password}


        onChange={(e)=>
          setPassword(e.target.value)
        }


        placeholder="Enter your password"


        error={errors.password}


      />

     <div className={styles.options}>

        <label>

          <input

            type="checkbox"

          />

          Remember me

        </label>

       <Link to="/forgot-password">

          Forgot password?

        </Link>


      </div>


      <button

        type="submit"

        disabled={loading}

        className={styles.submitButton}

      >

        {
          loading

          ? "Signing in..."

          : "Sign In"

        }


      </button>



    </AuthForm>

  );

}


export default Login;