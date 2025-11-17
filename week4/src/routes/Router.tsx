import { createBrowserRouter } from "react-router";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import MyPage from "../pages/mypage/MyPage";
import MyInfo from "@/pages/mypage/components/my-info/MyInfo";
import Member from "@/pages/mypage/components/member/Member";
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
    children: [
      {
        index: true,
        Component: MyInfo, // /mypage 접속 시 기본으로 MyInfo 표시
      },
      {
        path: "info",
        Component: MyInfo,
      },
      {
        path: "member",
        Component: Member,
      },
    ],
  },
]);
