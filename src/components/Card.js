import React from "react"
import "../styles/card.css"

const Card = ({ title, description }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-title">
          <h3> {title}</h3>
        </div>
        <div className="card-description">
          <p> Fecha: {description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
