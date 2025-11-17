import * as styles from "./Info.css";

interface Props {
  label: string;
  value: string | number;
}

export const Info = ({ label, value }: Props) => {
  return (
    <div className={styles.infoContainer}>
      <span className={styles.infoLeft}>{label}</span>
      <span className={styles.infoRight}>{value}</span>
    </div>
  );
};
