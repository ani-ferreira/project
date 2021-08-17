import React from "react"
import "../styles/card.css"
import { Link } from "gatsby"
import { btn } from "../styles/home.module.css"

const Card = ({ title, description, body }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-title">
          <h3> {title}</h3>
        </div>
        <div className="card-description">
          <p> {description}</p>
        </div>
        <Link className={btn} to="/contact">
          Ver más
        </Link>
      </div>
    </div>
  )
}

export default Card
