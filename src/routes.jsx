import HomePage from "./components/template/HomePage";
import SingleProduct from "./components/template/singleProduct";

let routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/product",
    element: (
      <div className="bg-white">
        <h1>product</h1>
      </div>
    ),
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
];
export default routes;
