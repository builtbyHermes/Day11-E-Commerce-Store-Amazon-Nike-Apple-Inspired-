import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";

function useLoginForm() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {

    const newErrors = {};

    if (!email.trim()) {

      newErrors.email = "Email is required";

    }

    if (!password.trim()) {

      newErrors.password = "Password is required";

    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {

      // Fake API delay

      await new Promise(resolve => setTimeout(resolve, 700));

      login({
        email,
        password
      });

      navigate("/profile");

    } finally {

      setLoading(false);

    }

  };

  return {

    email,

    password,

    setEmail,

    setPassword,

    loading,

    errors,

    handleSubmit

  };

}

export default useLoginForm;