import * as styles from './Member.css'
import { TextField } from '@/shared/components/TextField/TextField'
import { TEXT_FIELD_TYPES } from '@/shared/constants/textField'
import { Button } from '@/shared/components/Button/Button'
import { BUTTON_VARIANTS } from '@/shared/constants/button'
import { Info } from '@/shared/components/Info/Info'
import { useState } from 'react'

const Member = () => {
  const [memberId, setMemberId] = useState("")

  const handleMemberIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberId(e.target.value)
  }

  const handleSearch = () => {
    // TODO: API 호출
    console.log('Search member:', memberId)
  }

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

      <div className={styles.resultContainer}>
        <Info label="이름" value="임지성" />
        <Info label="아이디" value="wltjd6300" />
        <Info label="이메일" value="wltjd6300@naver.com" />
        <Info label="나이" value={23} />
      </div>
    </div>
  )
}

export default Member
