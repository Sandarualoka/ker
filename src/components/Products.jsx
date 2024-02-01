import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <p>
        Products<Link to="/">Go to Dashboard </Link>
      </p>
    </div>
  );
};

export default Products;
