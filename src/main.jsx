import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Protected,
  Login,
  Signup,
  AllPost,
  AddPost,
  EditPost,
  Post,
} from "./components/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={true}>
            <Login />
          </Protected>
        ),
      },
      {
        path: "/signup",
        element: (
          // <Protected authentication={true}>
          <Signup />
          // </Protected>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Protected authentication>
            {" "}
            <AllPost />
          </Protected>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication>
            {" "}
            <AddPost />
          </Protected>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication>
            {" "}
            <EditPost />
          </Protected>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
