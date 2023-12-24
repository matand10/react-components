import classes from "./Input.module.css";

const Input = () => {
  return (
    <div className={classes.red}>
      <label htmlFor="input">Input from shared component</label>
      <input type="text" />
    </div>
  );
};

export default Input;
