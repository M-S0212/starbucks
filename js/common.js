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

//몇년도인지 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021