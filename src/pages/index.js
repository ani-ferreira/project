import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Title</h2>
          <h3>subtitle</h3>

          <Link className={btn} to="/contact">
            CTA boton
          </Link>
        </div>
      </section>
    </Layout>
  )
}
