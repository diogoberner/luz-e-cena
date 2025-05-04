import classNames from "classnames";
import styles from "./Tag.module.css";
import { Category, Censorship } from "../../types";

interface TagProps {
  value: Category | Censorship;
}

const tagClass = {
  Livre: styles.free,
  "10 anos": styles.ten,
  "12 anos": styles.twelve,
  "14 anos": styles.fourteen,
  "16 anos": styles.sixteen,
  "2D": styles.twoD,
  "3D": styles.threeD,
};

const Tag = ({ value }: TagProps) => {
  return (
    <span className={classNames(styles.tag, tagClass[value])}>{value}</span>
  );
};

export default Tag;
