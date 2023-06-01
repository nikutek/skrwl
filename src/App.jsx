import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import OptionsPage from "./pages/OptionsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/options", element: <OptionsPage /> },
    ],
  },
]);

function App() {
  return (
    <div className=" bg-zinc-100 w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
