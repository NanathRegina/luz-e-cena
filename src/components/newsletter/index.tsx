import Button from "../button"
import FieldSet from "../fieldSet"
import InputText from "../inputText"
import styles from "./newsletter.module.css"

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <FieldSet>
          <InputText placeholder="Digite seu melhor email"/>
        </FieldSet>
        <Button variant="default" type="submit">
          Inscreva-se
        </Button>
      </form>
    </section>
  )
}

export default Newsletter