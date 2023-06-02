import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./pages/LogInPage";
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
    <div className=" bg-gray-950 h-screen w-screen">
      <LoginPage />
      {/* {isLoggedIn && <RouterProvider router={router} />}0 */}
    </div>
  );
}

export default App;
