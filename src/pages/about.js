import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link> <Link to="/contact/">Contact</Link>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)
