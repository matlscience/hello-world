import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link> 
      <h2>Gatsby Default Starter</h2>
      <div>Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.</div>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}

