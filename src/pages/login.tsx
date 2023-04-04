import React from "react";
import styles from "@/styles/Auth.module.css";
import { useForm } from "@/hooks/useForm";
import { IUsers, typeInitialValue } from "@/types/loginTypes";


interface ILogin {}

const initialValue: typeInitialValue = {
  email: "admin@email.com",
  password: "admin123",
};

const users: IUsers = {
  admin: {
    email: 'admin@email.com',
    password: 'admin123',
    subject: 'admin'
  },
  author: {
    email: 'author@email.com',
    password: 'author123',
    subject: 'author'
  },
  reader: {
    email: 'user@email.com',
    password: 'user123',
    subject: 'reader'
  }
}

const login: React.FunctionComponent<ILogin> = () => {
  //TODO: check if the user is logged

  const { onInputChange, email, password} = useForm(initialValue);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Submitting form...");
    // TODO: Implement authentication logic here
    for (const account of Object.entries(users)) {
      console.log(account);
      
    }

  };

  return (
    <div className={styles.login}>
      <h3 className={styles.login__title}>Login</h3>
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <div className={styles.login__inputContainer}>
          <input
            type="text"
            title="Insert an valid email"
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
            title="Insert an valid password"
            id="password"
            placeholder="  Password"
            className={`${styles.login__input} ${styles.valid} ${styles.invalid} `}
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <button type="submit" className={styles.login__button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default login;
