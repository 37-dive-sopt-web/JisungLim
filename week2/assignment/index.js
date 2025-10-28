// 로컬 스토리지에서 가져오기
let membersData = JSON.parse(localStorage.getItem("membersData"));
const tbody = document.querySelector(".table-body");

// 페이지 로드 시 파트원 목록 리스트 렌더링
refreshMemberList(membersData);

// 검색 필터 적용, 초기화 버튼 로직
const filterForm = document.querySelector(".filter-form");
filterForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 페이지 새로고침 방지
  applyFilter();
});
filterForm.addEventListener("reset", (event) => {
  // reset()은 페이지 새로고침 없으므로 preventDefault() 필요 없음
  refreshMemberList(membersData);
});

// 파트원 목록 삭제
const deleteMemberBtn = document.querySelector(".list-delete-button");
deleteMemberBtn.addEventListener("click", () => {
  const checkedBoxesIds = [
    ...document.querySelectorAll(".table-checkbox:checked"),
  ].map((box) => Number(box.id)); // Number로 변환 꼭 필요...!

  const filteredMember = membersData.filter(
    (member) => !checkedBoxesIds.includes(member.id)
  );

  membersData = filteredMember
  localStorage.setItem("membersData", JSON.stringify(membersData));
  refreshMemberList(membersData);
});

// 체크박스 전체 선택, 해제 로직
const headerCheckbox = document.querySelector(".table-header-checkbox");
headerCheckbox.addEventListener("change", (event) => {
  const isChecked = event.target.checked;
  const checkBoxes = document.querySelectorAll(".table-checkbox");
  if (isChecked) {
    checkBoxes.forEach((box) => (box.checked = true));
  } else {
    checkBoxes.forEach((box) => (box.checked = false));
  }
});

// 모달창
const openModalBtn = document.querySelector(".list-add-button"); // 모달창 열기
const closeModalBtn = document.querySelector(".close-modal-button"); // 모달창 닫기
const modal = document.querySelector(".modal"); // 모달창 불투명 배경
const addMemberBtn = document.querySelector(".modal-add-member-button"); // 모달창 '추가' 버튼

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
addMemberBtn.addEventListener("click", addMember);

// 검색 필터 적용
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

  // 3. 필터링된 리스트로 파트원 목록 refresh
  refreshMemberList(filteredData);
}

// 파트원 목록 테이블 refresh 함수
function refreshMemberList(data) {
  // 기존 tbody 내용 비우기
  tbody.innerHTML = "";

  // 새로운 데이터로 렌더링
  data.forEach((member) => {
    const tr = document.createElement("tr");

    // 체크박스 td
    const checkboxTd = document.createElement("td");
    checkboxTd.classList.add("table-list-data");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("table-checkbox");
    checkbox.id = member.id;
    checkboxTd.appendChild(checkbox);
    tr.appendChild(checkboxTd);

    // 이름 td
    const nameTd = document.createElement("td");
    nameTd.classList.add("table-list-data");
    nameTd.textContent = member.name;
    tr.appendChild(nameTd);

    // 영문 이름 td
    const englishNameTd = document.createElement("td");
    englishNameTd.classList.add("table-list-data");
    englishNameTd.textContent = member.englishName;
    tr.appendChild(englishNameTd);

    // 깃허브 td
    const githubTd = document.createElement("td");
    const githubUrl = document.createElement("a");
    githubUrl.href = `https://github.com/${member.github}`;
    githubUrl.target = "_blank";
    githubUrl.rel = "noopener noreferrer";
    githubUrl.classList.add("githubUrl");
    githubUrl.textContent = member.github;
    githubTd.classList.add("table-list-data");
    githubTd.appendChild(githubUrl);
    tr.appendChild(githubTd);

    // 성별 td
    const genderTd = document.createElement("td");
    genderTd.classList.add("table-list-data");
    genderTd.textContent = member.gender === "male" ? "남자" : "여자";
    tr.appendChild(genderTd);

    // 역할 td
    const roleTd = document.createElement("td");
    roleTd.classList.add("table-list-data");
    roleTd.textContent = member.role;
    tr.appendChild(roleTd);

    // 금잔디조 td
    const teamTd = document.createElement("td");
    teamTd.classList.add("table-list-data");
    teamTd.textContent = member.codeReviewGroup;
    tr.appendChild(teamTd);

    // 나이 td
    const ageTd = document.createElement("td");
    ageTd.classList.add("table-list-data");
    ageTd.textContent = member.age;
    tr.appendChild(ageTd);

    // tr을 tbody에 추가
    tbody.appendChild(tr);
  });
}

function addMember() {
  const memberInfo = {
    id: Date.now(),
    name: document.getElementById("member-name").value,
    englishName: document.getElementById("member-english-name").value,
    github: document.getElementById("member-github").value,
    gender: document.getElementById("member-gender").value,
    role: document.getElementById("member-role").value,
    codeReviewGroup: Number(document.getElementById("member-team").value),
    age: Number(document.getElementById("member-age").value),
  };

  for (let info in memberInfo) {
    if (info === "id") continue;

    if (!memberInfo[info]) {
      alert("모든 항목을 입력해주세요");
      return;
    }
  }

  // 기존 리스트에 추가 및 리렌더링
  membersData.push(memberInfo);
  refreshMemberList(membersData);

  // localStorage에 저장
  localStorage.setItem("membersData", JSON.stringify(membersData));

  modal.style.display = "none";
}

function deleteMember() {
  // 1. 선택된 체크박스 배열값 가져오기
  // 2. 해당 item 찾아서 삭제될 때까지 반복문 돌기
  // 3. 리스트 리렌더링
}
