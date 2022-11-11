import * as Api from '/utils/api.js';

// login
const utilContents = document.querySelector('.utilContents');
const token = sessionStorage.getItem('token');

// gnb
const gnbContents = document.querySelector('.gnbContents');
let isAdmin = false;

await drawCategory();

async function drawCategory() {
  if (!token) {
    utilContents.innerHTML = `
            <li><a href="/login">로그인</a></li>
            <li><a href="/register">회원가입</a></li>
            <li><a href="/cart">장바구니</a></li>
        `;
  } else {
    try {
      const { role } = await Api.get('/api/users/myInfo');
      if (role === 'admin-user') isAdmin = true;
    } catch (err) {
      alert(`${err}`);
    }

    utilContents.innerHTML = `
              ${
                isAdmin
                  ? `<li id="adminAdd"><a href="/product/add">상품 추가하기</a></li>
                  <li><a href="/admin">페이지관리</a></li>`
                  : ``
              }
              <li class="logout"><a href="">로그아웃</a></li>
              <li><a href="/account">마이페이지</a></li>
              <li><a href="/cart">장바구니</a></li>
              `;

    // 로그아웃
    const logout = document.querySelector('.logout');
    logout.addEventListener('click', () => {
      sessionStorage.removeItem('token');
      location.href = '/';
    });
  }

  gnbContents.innerHTML = `
            <li>팔찌</li>
            <li>반지</li>
            <li>목걸이</li>            
        `;
}

function moveCategory(e) {
  if (e.target.tagName === 'LI') {
    if (e.target.innerText === '팔찌')
      location.href = `/product/category/bracelet`;
    if (e.target.innerText === '반지') location.href = `/product/category/ring`;
    if (e.target.innerText === '목걸이')
      location.href = `/product/category/necklace`;
  }
}
gnbContents.addEventListener('click', moveCategory);

const adminAdd = document.querySelector('#adminAdd');
let toggleBoolean = true;

if (isAdmin) {
  window.setInterval(function () {
    toggleBoolean
      ? (adminAdd.classList.toggle('rotate'), (toggleBoolean = !toggleBoolean))
      : (adminAdd.classList.toggle('rotate'), (toggleBoolean = !toggleBoolean));
  }, 4000);
}
