// 로컬 스토리지에서 가져오기
let membersData = JSON.parse(localStorage.getItem('membersData'));
const tbody = document.querySelector('.table-body');

membersData.forEach((member) => {
  const tr = document.createElement('tr');
  
  // 체크박스 td
  const checkboxTd = document.createElement('td');
  checkboxTd.className = 'table-list-data';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkboxTd.appendChild(checkbox);
  tr.appendChild(checkboxTd);

  // 이름 td
  const nameTd = document.createElement('td');
  nameTd.className = 'table-list-data';
  nameTd.textContent = member.name;
  tr.appendChild(nameTd);

  // 영문 이름 td
  const englishNameTd = document.createElement('td');
  englishNameTd.className = 'table-list-data';
  englishNameTd.textContent = member.englishName;
  tr.appendChild(englishNameTd);

  // 깃허브 td
  const githubTd = document.createElement('td');
  githubTd.className = 'table-list-data';
  githubTd.textContent = member.github;
  tr.appendChild(githubTd);

  // 성별 td
  const genderTd = document.createElement('td');
  genderTd.className = 'table-list-data';
  genderTd.textContent = member.gender === 'male' ? '남자' : '여자';
  tr.appendChild(genderTd);

  // 역할 td
  const roleTd = document.createElement('td');
  roleTd.className = 'table-list-data';
  roleTd.textContent = member.role;
  tr.appendChild(roleTd);

  // 금잔디조 td
  const teamTd = document.createElement('td');
  teamTd.className = 'table-list-data';
  teamTd.textContent = member.codeReviewGroup;
  tr.appendChild(teamTd);

  // 나이 td
  const ageTd = document.createElement('td');
  ageTd.className = 'table-list-data';
  ageTd.textContent = member.age;
  tr.appendChild(ageTd);

  // tr을 tbody에 추가
  tbody.appendChild(tr);
})