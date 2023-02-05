import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import Videos from "./page/Video/Videos";
import Root from "./Root";
import SearchResult from "./page/Video/SearchResult";
import VideoDetail from "./page/Video/VideoDetail";

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
      { path: "/videos/:videoId", element: <SearchResult /> },
      { path: "/videos/videoDetail/:videoId", element: <VideoDetail /> },
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
