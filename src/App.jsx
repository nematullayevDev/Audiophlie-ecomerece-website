import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Detail from "./page/Detail";
import Home from "./page/Home";
import Headphones from "./page/Headphones";
import Speakers from "./page/Speakers";
import Earphones from "./page/Earphones";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/headphones",
          element: <Headphones />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <Earphones />,
        },
        {
          path: "detail/:name",
          element: <Detail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
