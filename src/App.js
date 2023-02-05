import { QueryClient, QueryClientProvider } from "react-query";
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
