import * as styles from "./Member.css";
import { TextField } from "@/shared/components/TextField/TextField";
import { TEXT_FIELD_TYPES } from "@/shared/constants/textField";
import { Button } from "@/shared/components/Button/Button";
import { BUTTON_VARIANTS } from "@/shared/constants/button";
import { Info } from "@/shared/components/Info/Info";
import { useState } from "react";
import { getUserById } from "@/apis/apis";
import type { User } from "@/apis/types/user.types";

const Member = () => {
  const [memberId, setMemberId] = useState("");
  const [memberData, setMemberData] = useState<User | null>(null);

  const handleMemberIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberId(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await getUserById(Number(memberId));
      console.log("회원 조회 성공:", response);
      setMemberData(response);
    } catch (error) {
      console.error("회원 조회 실패:", error);
      setMemberData(null);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>회원 조회</h2>
      <div className={styles.searchContainer}>
        <TextField
          type={TEXT_FIELD_TYPES.TEXT}
          label="회원 ID"
          placeholder="회원 ID를 입력하세요"
          value={memberId}
          onChange={handleMemberIdChange}
        />
        <Button
          variant={BUTTON_VARIANTS.CONFIRM}
          onClick={handleSearch}
          disabled={memberId.trim() === ""}
        >
          확인
        </Button>
      </div>

      {memberData && (
        <div className={styles.resultContainer}>
          <Info label="이름" value={memberData.name} />
          <Info label="아이디" value={memberData.username} />
          <Info label="이메일" value={memberData.email} />
          <Info label="나이" value={memberData.age} />
        </div>
      )}
    </div>
  );
};

export default Member;
