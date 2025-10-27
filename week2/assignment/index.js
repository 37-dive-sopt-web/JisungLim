// 로컬 스토리지에서 가져오기
let membersData = JSON.parse(localStorage.getItem("membersData"));
const tbody = document.querySelector(".table-body");

// 페이지 로드 시 파트원 목록 리스트 렌더링
refreshMemberList(membersData);

const filterForm = document.querySelector(".filter-form");
filterForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 페이지 새로고침 방지
  applyFilter();
});
filterForm.addEventListener("reset", (event) => {
  // reset()은 페이지 새로고침 없으므로 preventDefault() 필요 없음
  refreshMemberList(membersData);
});

function applyFilter() {
  // 1. 값이 존재하는 input 필드의 value 가져오기
  const selectedFilters = {
    name: document.getElementById("filter-name").value,
    englishName: document.getElementById("filter-english-name").value,
    github: document.getElementById("filter-github").value,
    gender: document.getElementById("filter-gender").value,
    role: document.getElementById("filter-role").value,
    team: document.getElementById("filter-team").value,
    age: document.getElementById("filter-age").value,
  };

  // 2. 현재 리스트의 적절한 속성을 value값과 비교, 필터링 적용
  const filteredData = membersData.filter((member) => {
    // 각 필터 조건을 체크 (값이 있을 때만 체크)
    if (selectedFilters.name && !member.name.includes(selectedFilters.name))
      return false;
    if (
      selectedFilters.englishName &&
      !member.englishName.includes(selectedFilters.englishName)
    )
      return false;
    if (
      selectedFilters.github &&
      !member.github.includes(selectedFilters.github)
    )
      return false;
    if (selectedFilters.gender && member.gender !== selectedFilters.gender)
      return false;
    if (selectedFilters.role && member.role !== selectedFilters.role)
      return false;
    if (
      selectedFilters.team &&
      member.codeReviewGroup !== Number(selectedFilters.team)
    )
      // input의 type은 number이지만, .value로 값을 가져오면 문자열로 반환되므로 형변환 필요함
      return false;
    if (selectedFilters.age && member.age !== Number(selectedFilters.age))
      return false;

    return true; // 모든 조건을 통과하면 포함
  });

  // 3. 필터링된 리스트로 다시 목록 refresh
  refreshMemberList(filteredData);
}

// 테이블에 멤버 데이터를 렌더링하는 함수
function refreshMemberList(data) {
  // 기존 tbody 내용 비우기
  tbody.innerHTML = "";

  // 새로운 데이터로 렌더링
  data.forEach((member) => {
    const tr = document.createElement("tr");

    // 체크박스 td
    const checkboxTd = document.createElement("td");
    checkboxTd.className = "table-list-data";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxTd.appendChild(checkbox);
    tr.appendChild(checkboxTd);

    // 이름 td
    const nameTd = document.createElement("td");
    nameTd.className = "table-list-data";
    nameTd.textContent = member.name;
    tr.appendChild(nameTd);

    // 영문 이름 td
    const englishNameTd = document.createElement("td");
    englishNameTd.className = "table-list-data";
    englishNameTd.textContent = member.englishName;
    tr.appendChild(englishNameTd);

    // 깃허브 td
    const githubTd = document.createElement("td");
    githubTd.className = "table-list-data";
    githubTd.textContent = member.github;
    tr.appendChild(githubTd);

    // 성별 td
    const genderTd = document.createElement("td");
    genderTd.className = "table-list-data";
    genderTd.textContent = member.gender === "male" ? "남자" : "여자";
    tr.appendChild(genderTd);

    // 역할 td
    const roleTd = document.createElement("td");
    roleTd.className = "table-list-data";
    roleTd.textContent = member.role;
    tr.appendChild(roleTd);

    // 금잔디조 td
    const teamTd = document.createElement("td");
    teamTd.className = "table-list-data";
    teamTd.textContent = member.codeReviewGroup;
    tr.appendChild(teamTd);

    // 나이 td
    const ageTd = document.createElement("td");
    ageTd.className = "table-list-data";
    ageTd.textContent = member.age;
    tr.appendChild(ageTd);

    // tr을 tbody에 추가
    tbody.appendChild(tr);
  });
}
