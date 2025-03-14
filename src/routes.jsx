import HomePage from "./components/template/HomePage";
import SingleProduct from "./components/template/singleProduct";

let routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/prodact",
    element: (
      <div className="bg-white">
        <h1>prodact</h1>
      </div>
    ),
  },
  {
    path: "/prodact/:id",
    element: <SingleProduct />,
  },
];
export default routes;
