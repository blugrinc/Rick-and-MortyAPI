import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../app/pages/HomePage/HomePage";
import { CharactersPage } from "../app/pages/CharactersPage/CharactersPage";
import ErrorPage from "../app/components/ErrorPage/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/characters",
    element: <CharactersPage />,
  },
]);

export default function RootRouter() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
