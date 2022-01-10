import styles from './Button.module.scss';

const Button = ({ children, changeTimer }) => {
  return (
    <button className={styles.button} onClick={changeTimer}>
      {children}
    </button>
  );
};

export default Button;
