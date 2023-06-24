import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./storage/store";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import OptionsPage from "./pages/OptionsPage";
import TrainingPage from "./pages/TrainingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/options", element: <OptionsPage /> },
      { path: "/training", element: <TrainingPage /> },
    ],
  },
]);

function App() {
  return (
    <div className=" h-screen w-screen overflow-hidden bg-gray-950">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
