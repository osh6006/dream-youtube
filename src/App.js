import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Videos from "./page/Video/Videos";
import Whatch from "./page/Video/Whatch";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Not Found</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      { path: "/videos/:videoId", element: <Whatch /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
