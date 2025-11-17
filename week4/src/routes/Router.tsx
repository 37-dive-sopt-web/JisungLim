import { createBrowserRouter } from "react-router";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import MyPage from "../pages/mypage/MyPage";

export const router = createBrowserRouter([
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/mypage",
    Component: MyPage,
  },
]);