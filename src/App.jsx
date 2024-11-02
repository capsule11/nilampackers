import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<div>No Routes currently</div>} />
    </>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
