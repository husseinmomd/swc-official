import { createBrowserRouter } from "react-router-dom";
import { Layout, RegisterPageLayout } from "./layout";
import {
  About,
  Apply,
  Home,
  Blog,
  Profile,
  Jobs,
  CreateJob,
  Blogs,
  CreateBlog,
} from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/jobs/create", element: <CreateJob /> },
      { path: "/profile/:id", element: <Profile /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blogs/create", element: <CreateBlog /> },
      { path: "/blog/:id", element: <Blog /> },
    ],
  },
  {
    path: "register",
    element: <RegisterPageLayout />,
    children: [{ path: "/register", element: <Apply /> }],
  },
]);
