// document는 html 돋보기 눌러도 늘어나게 만드는 부분
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {

  //Logic...
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // searchInputEl에다가 html 속성 지정
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // searchInputEl에다가 html 속성 지정
  searchInputEl.setAttribute('placeholder', '');
});

//스크롤 내리면 뱃지 사라지게 하기
const badgeEl = document.querySelector('header .badges');
//to-top 찾기
const toTopEl = document.querySelector('#to-top');

// 스크롤 할 때마다 실행되는 함수 최소화
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else {
    // 배지 보여주기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100
      });
  }
}, 300));
// _.throttle(함수, 시간)

//화면 올라가는 버튼 누르면 화면 올라가게 하기
toTopEl.addEventListener('click', function() {
  // window는 화면 자체, 창 
  gsap.to(window, 0.7, {
    scrollTo: 0
  })
});



//순차적으로 이미지 나타나게 하기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 0.7초 뒤에 애니메이션 작동, 1.4초 뒤에 애니메이션 작동....
    opacity: 1
  });
});

//함수 생성
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  //객체 데이터는 {} 이용
  direction: 'vertical' ,
  autoplay: true,
  //반복 재생
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // 기본값으로 horizontal이 들어가있음.
  // direction: 'horizontal'
  // 한번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백
  spaceBetween: 10,
  // 1번 슬라이드가 가운데 보이기
  centeredSlides: true,
  loop: true,
  autoplay: {
    // 5초에 한 번씩
    delay: 5000
  },
  // 페이지 번호 요소 선택자
  pagination: {
    el: '.promotion .swiper-pagination',
    //사용자의 페이지 번호 요소 제어 가능 여부
    clickable: true
  },
  navigation: {
    // 이전 슬라이드
    prevEl: '.promotion .swiper-prev',
    // 다음 슬라이드
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  //기본값
  //direction: 'horizontal'
  autoplay: true,
  loop: true,
  //사이 여백
  spaceBetween: 30,
  //하나의 화면에 몇개의 슬라이드를 보여줄것인지
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  // !는 반대
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//숫자만 쓰면 모르니까 딜레이와 사이즈 추가
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, //선택자
    random(1.5, 2.5), { // 애니메이션 동작 시간
        //옵션
    y: size,
    repeat: -1,
    //한번 재생된 애니메이션을 다시 하도록 한다
    yoyo: true,
    //gsap easing 다른건 다 똑같다! 옵션만 확인하기
    ease: Power1.easeInOut,
    delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

//section이라는 곳에 scroll-spy라는게 있으면!
const spyEls = document.querySelectorAll('section.scroll-spy')
//반복될 함수 지정
spyEls.forEach(function (spyEl) {
  //Scene는 메소드니까 ()가 필요하다.
  //setClassToggle 는 Class를 지정할것인데 넣었다 빼었다 할 것이다.
  //addTo는 컨트롤 역할
  //{}는 객체데이터
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

//몇년도인지 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021