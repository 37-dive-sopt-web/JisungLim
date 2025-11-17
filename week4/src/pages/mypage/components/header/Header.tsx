import { Button } from "@/shared/components/Button/Button";
import * as styles from "./Header.css";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";
import { deleteAccount, getUserById } from "@/apis/apis";
import { getUserId, clearUserId } from "@/shared/utils/auth";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = getUserId();
        if (!userId) {
          navigate(ROUTES.LOGIN);
          return;
        }

        const userData = await getUserById(userId);
        setUserName(userData.name);
      } catch (error) {
        console.error("사용자 정보 조회 실패:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleMyInfoClick = () => {
    navigate(ROUTES.MYPAGE_INFO);
  };
  const handleMemberClick = () => {
    navigate(ROUTES.MYPAGE_MEMBER);
  };

  const handleLogout = () => {
    const confirmed = window.confirm("로그아웃 하시겠습니까?");
    if (confirmed) {
      clearUserId();
      navigate(ROUTES.LOGIN);
    }
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm("정말로 회원 탈퇴하시겠습니까?");

    if (!confirmed) return;

    try {
      const userId = getUserId(); // localStorage에서 가져옴
      if (!userId) {
        alert("userId를 찾을 수 없스비다.");
        navigate(ROUTES.LOGIN);
        return;
      }

      await deleteAccount(userId);
      clearUserId();
      alert("회원 탈퇴가 완료되었습니다.");
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error("회원 탈퇴 실패:", error);
      alert("회원 탈퇴에 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>마이페이지</h1>
        <p className={styles.subtitle}>
          안녕하세요, {userName}님
        </p>
      </div>

      <div className={styles.tabContainer}>
        <Button variant={BUTTON_VARIANTS.DEFAULT} onClick={handleMyInfoClick}>
          내 정보
        </Button>
        <Button variant={BUTTON_VARIANTS.DEFAULT} onClick={handleMemberClick}>
          회원 조회
        </Button>
        <Button variant={BUTTON_VARIANTS.DEFAULT} onClick={handleLogout}>
          로그아웃
        </Button>
        <Button variant={BUTTON_VARIANTS.DEFAULT} onClick={handleDeleteAccount}>
          회원탈퇴
        </Button>
      </div>
    </div>
  );
};

export default Header;
