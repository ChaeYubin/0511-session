// 아이템
//레스토랑 메뉴 페이지를 만드는 코드
//메뉴 배열에 메뉴 항목을 나타내는 객체가 포함
//각 객체는 id, title, category, price, img 및 desc와 같은 여러 속성을 가짐
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./img/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./img/item-7.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
//카테고리에 따라 메뉴 항목을 필터링하기 위한 단추
const sectionContainer = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

/* DOMContentLoaded
  - HTML 문서의 생명주기에 관여하는 주요 이벤트 중 하나
  - 브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생한다.
  - DOM이 준비된 것을 확인한 후, 원하는 DOM 노드를 찾아 핸들러를 등록해 인터페이스를 초기화할 때 활용할 수 있다.
  */

// 아이템 로드
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

// 메뉴 아이템들을 보여주는 함수입니다.
function displayMenuItems(menuItems) { //메뉴 항목의 배열을 인수로 사용
  let displayMenu = menuItems.map((item) => { //맵 메서드를 사용하여 각 메뉴 항목에 대한 HTML 문자열을 만들기
                                             //결과 HTML 문자열 배열은 displayMenu 변수에 저장
    // 1. map 함수를 활용하여 카테고리에 맞는 아이템들을 보여주는 코드를 작성하세요.
    // 아래 displayMenuButtons 함수에서 categoryBtns 함수를 참고하세요.
    //각 메뉴 항목의 HTML 문자열에는 이미지, 항목 제목, 가격 및 설명이 포함
    return `<article class="menu-item"> 
    <img src=${item.img} class="photo" alt=${item.title} /> 
    <div class="item-info">
      <header>
        <h4>${item.title}</h4> 
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
  });


//displayMenuItems 함수에서 생성한 HTML 문자열을 이용하여 sectionContainer 요소에 삽입
  displayMenu = displayMenu.join(""); // map 함수 결과는 배열이므로, 이를 문자열로 변환
  sectionContainer.innerHTML = displayMenu; // sectionContainer에 HTML을 삽입
}

// 메뉴 버튼을 보여주는 함수
//reduce() 메서드는 배열의 각 요소에 대해 주어진 콜백 함수를 실행하면서 하나의 결과값을 만드는 메서드
function displayMenuButtons() {
  // 2. reduce 함수를 활용해서 menu 배열에서 category를 읽어와 저장하는 코드를 작성하세요.
  // 이때 category는 중복 저장되지 않아야 합니다.
  // menu의 아이템들 중에는 'all'이라는 카테고리를 가진 아이템이 없으므로 초깃값으로는 'all'을 가지고 있어야 합니다.
  // categories는 최종적으로 ['all', 'breakfast', 'lunch', 'shakes', 'dinner']이 되어야 합니다.

  //reduce() 메서드는 첫 번째 매개변수로 콜백 함수를 받음
  //(ex) menu 배열에서 category: "breakfast" 값이 있다면, categories 배열에 breakfast 값이 포함되어 있는지 확인하고, 없으면 categories 배열에 breakfast 값을 추가
  //->menu 배열의 모든 항목에 대해 반복하여, categories 배열을 최종적으로 구성
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) { //콜백 함수에서는 값 배열에 현재 항목의 범주가 이미 포함되어 있는지 확인
        values.push(item.category); //그렇지 않으면 범주를 값 배열로 push
      }
      return values; //menu 배열의 모든 항목에 대해 반복하여, categories 배열을 최종적으로 구성한 뒤 반환
    },
    ["all"] //두 번째 매개변수는 콜백 함수에서 사용될 초기값을 설정하는 것. 생략 가능

  );

  const categoryBtns = categories //categories 배열을 이용하여 HTML 버튼을 생성
    .map(function (category) { //각 버튼을 클릭할 때 해당 카테고리에 속하는 메뉴를 필터링하여 보여주는 함수
      return `<button class="filter-btn" type="button" id="${category}">${category}</button>`;
    })
    .join(""); //배열을 문자열로 다 합쳐줌
              //join() 메서드를 이용하여 모든 문자열을 하나의 문자열로 연결

  btnContainer.innerHTML = categoryBtns; // 카테고리 버튼 그려주기
                                        //연결된 문자열을 버튼 컨테이너의 HTML 내용으로 설정하여 화면에 버튼을 생성

  // 카테고리별로 필터링하기
  const filterBtns = btnContainer.querySelectorAll(".filter-btn"); // 버튼 컨테이너 내부에서 .filter-btn 클래스를 가지는 모든 요소를 선택
  // 각 요소에 대해 클릭 이벤트 핸들러를 등록
  filterBtns.forEach(function (btn) { //버튼 클릭되면
    btn.addEventListener("click", function (e) {
      console.log(e);
      const category = e.target.id; // 선택된 버튼의 카테고리 이름 가져오기

      // 선택된 카테고리의 메뉴들만 보여주기, 해당 카테고리에 속하는 메뉴를 추출
      const menuCategory = menu.filter(function (menuItem) {
        // 3. filter 함수를 활용하여 선택된 카테고리에 해당하는 메뉴들만 보여주는 코드를 작성하세요.
       // menuItem 개체를 매개 변수로 사용하고 category 속성이 클릭한 단추의 category와 일치하는 경우 menuItem 개체를 반환
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      // 선택된 카테고리가 all인 경우 모든 메뉴를, all이 아닌 경우 menuCategory에 담긴 메뉴를 보여줍니다.
      if (category === "all") {
        displayMenuItems(menu); //선택된 카테고리가 "all"인 경우 전체 메뉴 배열을 displayMenuItems() 함수에 전달하여 모든 메뉴 항목이 표시

      } else {//그렇지 않으면 필터링된 menuCategory 배열이 displayMenuItems() 함수로 전달되어 선택한 범주에 속하는 메뉴 항목만 표시

        displayMenuItems(menuCategory);
      }
    });
  });
}