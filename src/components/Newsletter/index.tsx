import styles from "./Newsletter.module.css";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";

const Newsletter = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Inscreva-se para ganhar descontos!</h2>
      <div className={styles["input-wrapper"]}>
        <Fieldset variant="primary">
          <InputText placeholder="Digite seu melhor email" />
        </Fieldset>
        <Button variant="default">Inscrever</Button>
      </div>
    </section>
  );
};

export default Newsletter;
