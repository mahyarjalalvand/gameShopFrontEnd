import { useRoutes } from "react-router-dom";
// import HomePage from "./components/template/HomePage";
// import Layout from "./layouts/Layout";
import routes from "./routes";

function App() {
  let router = useRoutes(routes);

  return <>{router}</>;
}

export default App;
