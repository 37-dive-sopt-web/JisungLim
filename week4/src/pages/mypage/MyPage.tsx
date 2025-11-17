import Header from "@/pages/mypage/components/header/Header";
import { Outlet } from "react-router";

const MyPage = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};

export default MyPage;
