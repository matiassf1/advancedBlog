import React, { useRef } from "react";
import styles from "@/styles/Auth.module.css";
import { useForm } from "@/hooks/useForm";

type typeInitialValue = {
  email: string;
  password: string;
};

const initialValue: typeInitialValue = {
  email: "",
  password: "",
};


const Index = () => {
  //TODO: check if the user is logged

  const { onInputChange, email, password} = useForm(initialValue);

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
            title="Email"
            name="email"
            id="email"
            value={email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={onInputChange}
            placeholder="  Email"
            className={styles.login__input}
            required
          />
        </div>
        <div className={styles.login__inputContainer}>
          <input
            type="password"
            title="Password"
            id="password"
            placeholder="  Password"
            className={`${styles.login__input} ${styles.valid} ${styles.invalid} `}
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}"
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
