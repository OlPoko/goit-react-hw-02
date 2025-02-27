import styles from "./Description.module.css";
const Description = ({ message }) => {
  return (
    <div className={styles.description}>
      <p>{message}</p>
    </div>
  );
};

export default Description;
