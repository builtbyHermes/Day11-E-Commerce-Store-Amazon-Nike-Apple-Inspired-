import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import styles from "./PasswordInput.module.css";

function PasswordInput({value,onChange,placeholder = "Password",name = "password", id, error, ...props}) {

  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className={styles.container}>

      <label
        htmlFor={id}
        className={styles.label}
      >
        Password
      </label>

      <div className={styles.inputWrapper}>

        <input

          id={id}

          name={name}

          type={showPassword ? "text" : "password"}

          value={value}

          onChange={onChange}

          placeholder={placeholder}

          className={`${styles.input} ${
            error ? styles.errorInput : ""
          }`}

          {...props}

        />

        <button

          type="button"

          className={styles.toggleButton}

          onClick={() =>
            setShowPassword(prev => !prev)
          }

          aria-label={
            showPassword
              ? "Hide password"
              : "Show password"
          }

        >

          {
            showPassword

              ? <FiEyeOff />

              : <FiEye />

          }

        </button>

      </div>

      {

        error &&

        <p className={styles.error}>

          {error}

        </p>

      }

    </div>

  );

}

export default PasswordInput;