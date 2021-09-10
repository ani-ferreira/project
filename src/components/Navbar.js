import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div className="links">
        <Link to="/">INICIO</Link>

        <Link to="/blog" className="recetas-btn">
          RECETAS
        </Link>
      </div>
    </nav>
  )
}
