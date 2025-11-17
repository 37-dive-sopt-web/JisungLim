import { createBrowserRouter } from "react-router";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import MyPage from "../pages/mypage/MyPage";
import { ROUTES } from "@/routes/paths";

export const router = createBrowserRouter([
  {
    path: ROUTES.SIGNUP,
    Component: SignUp,
  },
  {
    path: ROUTES.LOGIN,
    Component: Login,
  },
  {
    path: ROUTES.MYPAGE,
    Component: MyPage,
  },
]);
