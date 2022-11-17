# 오작뀨 :: 탄생석 악세사리 주문제작 쇼핑몰

<div></div>
<img src="https://user-images.githubusercontent.com/116103097/202362136-6d2b113d-9b86-4ae0-ab76-cfb6cc5dacf4.png" />

<br />

## 1. 프로젝트 소개

#### 세상에 하나뿐인 추억을 선물할 수 있는 탄생석 악세서리 주문 제작 쇼핑몰입니다.

1. 제품을 탄생석별 / 악세사리 별로 확인 할 수 있습니다
2. 원하는 문구를 이니셜로 각인할 수 있는 서비스를 제공합니다
3. 회원 가입을 하지 않아도 상품을 구경하고 장바구니에 넣을 수 있습니다.

<br />

### 1-1. 데모

### [오작뀨 악세사리 쇼핑몰 바로가기](http://www.ojakkyu.com/)

#### 관리자 계정 테스트

| 이메일   | admin@test.com |
| -------- | -------------- |
| 비밀번호 | 12341234       |

<br />

### 1-2. API 문서

### https://www.notion.so/7-api-ffeb14283ada40e2bbd8a3f930abcd90

<br>

### 1-3. 와이어프레임

### [오작뀨 와이어프레임 바로가기](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/5c1666b0cdc453c648f8246fe4c8ffbc/7%ED%8C%80_%EC%98%A4%EC%9E%91%EB%80%A8_%EC%99%80%EC%9D%B4%EC%96%B4%ED%94%84%EB%A0%88%EC%9E%84.png)

<br>

### 1-4. 컨벤션

#### https://www.notion.so/elice/278a7a6fc0e84e54975798502803fae9

<br>

## 2. 기술 스택

<img src="https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/3f0935427734d2d6a6102f089a7c5693/tech_stack.png" width="640" />

<br>

| 포지션 | 스택                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------- |
| FE     | HTML, CSS, JavaScript, [Font-Awesome](https://fontawesome.com), [다음 주소 API](https://postcode.map.daum.net/guide), ... |
| BE     | NodeJS, ExpressJS, MongoDB, Mongoose, Babel                                                                               |
| Deploy | PM2, NGINX, Goggle Domains                                                                                                |

<br>

## 3. 페이지별 UI 및 기능 설명

<details><summary>회원가입 / 로그인 페이지</summary>

![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/cd543580b46caa2397655257187e47ef/%E1%84%92%E1%85%AC%E1%84%8B%E1%85%AF%E1%86%AB%E1%84%80%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%B8_%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%8B%E1%85%B5%E1%86%AB.png)

</details>
<details><summary>홈페이지</summary>

|                                                                                                                                       |
| :-----------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/0495077ed3fc35961f4ea223f0cb4c44/home_1.png) |
|                                                              홈페이지 ⓵                                                               |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/cc89ec2f496796a92134bd75402ecf2a/home_2.png) |
|                                                              홈페이지 ⓶                                                               |

</details>
<details><summary>제품 관련 페이지</summary>

|                                                                                                                                               |
| :-------------------------------------------------------------------------------------------------------------------------------------------: |
|  ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/6705cb9285460a3be6a7eefd86101ba9/product_list.png)  |
|                                                              제품 리스트 페이지                                                               |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/74cabf4819b970cce7d10fa686779b97/product_detail.png) |
|                                                               제품 상세 페이지                                                                |
|      ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/48f3fac53d45d0f040c44d70c09535ad/cart.png)      |
|                                                                장바구니 페이지                                                                |

</details>
<details><summary>주문 / 결제 페이지</summary>

|                                                                                                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/1ce9a92334d7ba6c8b8a04d6f2655b34/order.png) |
|                                                             주문 페이지                                                              |

</details>
<details><summary>개인 정보 페이지</summary>

|                                                                                                                                                                                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                       ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/44ba128e9e7b1cc6e33222377906faeb/mypage.png)                                                                       |
|                                                                                                                                 개인 페이지 메인                                                                                                                                  |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/22c8dbe9f6a36ef7ae32371624452884/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.14.png) |
|                                                                                                                                     주문 조회                                                                                                                                     |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/df11346661a345ab3fae1e9f7c6d4adf/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.19.png) |
|                                                                                                                               개인정보 조회 / 수정                                                                                                                                |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/bf27be038f2b47f43ab0e45943072a8f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.24.png) |
|                                                                                                                                     회원 탈퇴                                                                                                                                     |

</details>
<details><summary>관리자 페이지</summary>

|                                                                                                                                                                                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/ab3a3ebcc922552d7f3278b1d0059f28/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.30.png) |
|                                                                                                                                관리자 페이지 메인                                                                                                                                 |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/143e5b1e80dd40014ec6883d8596e263/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.36.png) |
|                                                                                                                                     상품 추가                                                                                                                                     |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/843746212ec8fbf0b32a640165fb364e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.40.png) |
|                                                                                                                                 상품 수정 / 삭제                                                                                                                                  |

</details>
<details><summary>기타</summary>

|                                                                                                                                                                                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![image](https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu/uploads/d69f5fbd84698000190d377dff7432a9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-11-15_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.46.46.png) |
|                                                                                                                                    404 페이지                                                                                                                                     |

</details>

<br />

## 4. 인프라 구조

![image](https://i.ibb.co/9tGxmx0/image.png)<br />

### 4-1. 디렉토리 구조

- FE: `src/views` 폴더
- BE: src/views 이외 폴더 전체

```bash
src
├──.db
│	├──models
│	└──schemas
├──middlewares
├──routers
├──services
│
├──views
│	├──login
│	├──register
│	├──account
│	├──admin
│	├── ...
│	├──components
│	├──styles
│	└──utils
│
└─app.js
```

<br />

## 5. 제작자

| 이름         | 포지션 | 담당 업무                                     |
| ------------ | ------ | --------------------------------------------- |
| 유의석(팀장) | BE     | - 팀 스케줄 관리, 제품관련api, DB, 서버, 배포 |
| 정지헌       | BE     | - 사용자 api, 주문 api, DB                                            |
| 이다노       | FE     | - 메인페이지 제품리스트, 제품 상세페이지, 제품 카테고리별 리스트, 카테고리 제품 상세페이지, 장바구니, Api연동 및 전체적인 Html 구조 , CSS|
| 이유정       | FE     | 웹 페이지 와이어프레임, CSS                   |
| 김진영       | FE     | 로그인/회원가입, 마이페이지                   |

<br />

## 6. 실행 방법

### 6.1 데모 웹 사이트 방문

### http://www.ojakkyu.com

<br />

### 6.2 로컬 환경 실행

```bash
1. Git Clone
git clone https://kdt-gitlab.elice.io/sw_track/class_03/web_project/team7/ojakkyu.git

2. Node Package 설치
npm install

3. .env(환경 변수) 파일 설정
MONGODB_URL=<몽고DB URL>
PORT=3000

4. express 앱 실행
npm start
```

<br>

## 7. 버전

### 1.0.0 : 최초 배포 22.11.11
