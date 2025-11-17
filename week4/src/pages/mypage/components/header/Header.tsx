import { Button } from "@/shared/components/Button/Button";
import * as styles from "./Header.css";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { useNavigate } from "react-router";
import { ROUTES } from "@/routes/paths";

const Header = () => {
  const navigate = useNavigate();
  const handleMyInfoClick = () => {
    navigate(ROUTES.MYPAGE_INFO);
  };
  const handleMemberClick = () => {
    navigate(ROUTES.MYPAGE_MEMBER);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>마이페이지</h1>
        <p className={styles.subtitle}>안녕하세요, 임지성님</p>
      </div>

      <div className={styles.tabContainer}>
        <Button variant={BUTTON_VARIANTS.DEFAULT} onClick={handleMyInfoClick}>
          내 정보
        </Button>
        <Button variant={BUTTON_VARIANTS.DEFAULT} onClick={handleMemberClick}>
          회원 조회
        </Button>
        <Button variant={BUTTON_VARIANTS.DEFAULT}>로그아웃</Button>
        <Button variant={BUTTON_VARIANTS.DEFAULT}>회원탈퇴</Button>
      </div>
    </div>
  );
};

export default Header;
