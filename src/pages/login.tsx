import React, { useRef } from "react";
import styles from "@/styles/Auth.module.css";
import { useForm } from "@/hooks/useForm";

type typeInitialValue = {
  email: string;
  password: string;
};

type typeFormValidations = {
  email: [(value: string) => boolean, string];
  password: [(value: string) => boolean, string];
};

const initialValue: typeInitialValue = {
  email: "",
  password: "",
};

const formValidations: typeFormValidations = {
  email: [
    (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
    "Email is required",
  ],
  password: [
    (value: string) =>
      /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/.test(
        value
      ),
    "Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long",
  ],
};

const Index = () => {
  //TODO: check if the user is logged

  const { onInputChange, email, password, isFormValid, emailValid, passwordValid } = useForm(initialValue, formValidations);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Submitting form...");
    // TODO: Implement authentication logic here
  };

  return (
    <div className={styles.login}>
      <h3 className={styles.login__title}>Login</h3>
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <div className={styles.login__inputContainer}>
          <input
            type="text"
            title="Username"
            name="username"
            value={email}
            onChange={onInputChange}
            placeholder="  Username"
            className={styles.login__input}
            required
          />
        </div>
        <div className={styles.login__inputContainer}>
          <input
            type="password"
            title="Password"
            placeholder="  Password"
            className={styles.login__input}
            name="password"
            value={password}
            onChange={onInputChange}
            required
          />
        </div>
        <button type="submit" className={styles.login__button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Index;
