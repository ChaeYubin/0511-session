// 아이템
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
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // 1. map 함수를 활용하여 카테고리에 맞는 아이템들을 보여주는 코드를 작성하세요.
    // 아래 displayMenuButtons 함수에서 categoryBtns 함수를 참고하세요.
  });

  displayMenu = displayMenu.join(""); // map 함수 결과는 배열이므로, 이를 문자열로 변환합니다.
  sectionContainer.innerHTML = displayMenu; // sectionContainer에 HTML을 삽입합니다.
}

// 메뉴 버튼을 보여주는 함수
function displayMenuButtons() {
  // 2. reduce 함수를 활용해서 menu 배열에서 category를 읽어와 저장하는 코드를 작성하세요.
  // 이때 category는 중복 저장되지 않아야 합니다.
  // menu의 아이템들 중에는 'all'이라는 카테고리를 가진 아이템이 없으므로 초깃값으로는 'all'을 가지고 있어야 합니다.
  // categories는 최종적으로 ['all', 'breakfast', 'lunch', 'shakes', 'dinner']이 되어야 합니다.
  const categories = menu.reduce();

  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" id="${category}">${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns; // 카테고리 버튼 그려주기

  // 카테고리별로 필터링하기
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e);
      const category = e.target.id; // 선택된 버튼의 카테고리 이름 가져오기

      // 선택된 카테고리의 메뉴들만 보여주기
      const menuCategory = menu.filter(function (menuItem) {
        // 3. filter 함수를 활용하여 선택된 카테고리에 해당하는 메뉴들만 보여주는 코드를 작성하세요.
      });

      // 선택된 카테고리가 all인 경우 모든 메뉴를, all이 아닌 경우 menuCategory에 담긴 메뉴를 보여줍니다.
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
