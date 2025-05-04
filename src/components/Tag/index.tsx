import classNames from "classnames";
import styles from "./Tag.module.css";

type Category = "2D" | "3D";
type Censorship = "Livre" | "10 Anos" | "12 Anos" | "14 Anos" | "16 Anos";

interface TagProps {
  value: Category | Censorship;
}

const tagClass = {
  Livre: styles.free,
  "10 Anos": styles.ten,
  "12 Anos": styles.twelve,
  "14 Anos": styles.fourteen,
  "16 Anos": styles.sixteen,
  "2D": styles.twoD,
  "3D": styles.threeD,
};

const Tag = ({ value }: TagProps) => {
  return (
    <span className={classNames(styles.tag, tagClass[value])}>{value}</span>
  );
};

export default Tag;
