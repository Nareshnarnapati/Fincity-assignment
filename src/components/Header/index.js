import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

const Header = () => {
  return (
    <div className="bg-con">
      <h1>Madelyn Torff</h1>

      <div className="category">

        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/addProject">Add Project</Link>
      </div>
    </div>
  );
};

export default Header;
