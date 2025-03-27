import React from "react";
import Layout from "../../layouts/Layout";
import { Link, useParams } from "react-router-dom";

function HomePage() {
  const params = useParams();
  console.log(params);
  return (
    <Layout>
      {/* <div className="bg-white">
        homepage
        <br />
        <Link to="/product/2">Back to single 2</Link>
      </div> */}
    </Layout>
  );
}

export default HomePage;
