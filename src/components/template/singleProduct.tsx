import React from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
  const params = useParams();
  console.log(params);
  return (
    <div className="bg-white text-xl text-center">
      singleProduct {params?.id}
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}
