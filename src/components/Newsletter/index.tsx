import styles from "./Newsletter.module.css";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../InputText";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.title}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputText placeholder="Digite seu melhor email" />
        </Fieldset>
        <Button variant="default" type="submit">
          Inscrever
        </Button>
      </form>
    </section>
  );
};

export default Newsletter;
