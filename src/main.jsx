import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import HeaderComponent from "./components/HeaderComponent.jsx";

import ArchievesPage from "./pages/archieves";
import BacklogsPage from "./pages/backlogs";
import DashboardPage from "./pages/dashboard";
import RoomsPage from "./pages/rooms";
import RoomsAdd from "./components/rooms/RoomsAdd";
import RoomsEdit from "./components/rooms/RoomsEdit";
import RoomsDescription from "./components/rooms/RoomsDescription";
import UsersPage from "./pages/users";
import UserAdd from "./components/users/UserAdd";
import UserEdit from "./components/users/userEdit";
import UserSchedulePage from "./pages/userSchedule";
import Root from "./pages/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },

      {
        path: "User Schedule",
        element: <UserSchedulePage />,
      },

      {
        path: "users",
        element: <UsersPage />,
      },

      {
        path: "user_add",
        element: <UserAdd />,
      },
      {
        path: "user_edit",
        element: <UserEdit />,
      },

      {
        path: "backlogs",
        element: <BacklogsPage />,
      },

      {
        path: "archieves",
        element: <ArchievesPage />,
      },
      {
        path: "rooms",
        element: <RoomsPage />,
      },
      {
        path: "rooms_add",
        element: <RoomsAdd />,
      },
      {
        path: "rooms_edit",
        element: <RoomsEdit />,
      },
      {
        path: "rooms_description",
        element: <RoomsDescription />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>
);
