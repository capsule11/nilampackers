import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout";
import ProductPage from "./pages/product-page";
import Contact from "./pages/contact";
import { ToastContainer } from "react-toastify";
import Specs from "./pages/product-page/specs";
import NotFoundPage from "./pages/page-not-found";
// import AboutPage from "./pages/about";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="products/:prdName" element={<Specs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="about" element={<AboutPage />} /> */}

    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" theme="light" />
    </>
  );
};

export default App;
