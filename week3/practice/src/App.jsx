import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Search from "./components/Search";
import { members } from "./members";
import useSearch from "./useSearch";

function App() {
  // handle: 컴포넌트 내부에서 정의한 함수, 실제 로직 처리 함수
  // on: props로 전달받을때 사용(부모 -> 자식으로 전달하는 이벤트 핸들러)
  // 아래 작성한 것처럼 사용하면 됨

  const { name, filteredName, handleSearchChange, handleSearch } =
    useSearch(members);

  return (
    <>
      <Header title="웹계인 파트원" />
      <Search onChange={handleSearchChange} />
      <section style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredName.map((member) => (
          <Card
            key={member.id}
            name={member.name}
            github={member.github}
            englishName={member.englishName}
          />
        ))}
      </section>
    </>
  );
}

export default App;
