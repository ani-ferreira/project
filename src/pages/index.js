import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.title}>
          <h2>
            "Una de las mejores cosas de la vida es que debemos interrumpir
            regularmente cualquier labor y concentrarnos en la comida"
            <br />
            <span className="autor">-Luciano Pavarotti</span>
          </h2>
        </div>
      </section>
      <section></section>
    </Layout>
  )
}
