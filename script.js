let burgerButton = document.querySelector('.burger-button');
let burgerMenu = document.querySelector('.burger-menu')
let burgerMenuList = document.querySelector('.burger-menu-list')
burgerButton.addEventListener('click',function(){
  burgerMenu.classList.toggle("burger-menu_active");
});
burgerMenuList.addEventListener('click',function(){
  burgerMenu.classList.toggle("burger-menu_active");
});