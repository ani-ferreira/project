import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import About from "../components/about"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>titulo</h2>
          <h3>subtitle</h3>

          <Link className={btn} to="/contact">
            CTA boton
          </Link>
        </div>
      </section>
      <section>
        <About />
      </section>
    </Layout>
  )
}
