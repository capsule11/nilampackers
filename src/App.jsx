import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout";
import ProductPage from "./pages/product-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductPage />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;