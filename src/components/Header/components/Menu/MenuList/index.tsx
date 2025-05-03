import styles from "./MenuList.module.css";

const MenuList = ({ children }: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <nav>
      <ul className={styles.nav}>{children}</ul>
    </nav>
  );
};

export default MenuList;
