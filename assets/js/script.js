
let open_button = document.getElementById('mobile-menu-open-button');
let close_button = document.getElementById('mobile-menu-close-button');
let mobile_menu  = document.getElementById('site-hat__menu');


open_button.addEventListener('click', function() {
  mobile_menu.classList.toggle('hidden');
  console.log('Кнопка открытия меню нажата');
});

close_button.addEventListener('click', function() {
    mobile_menu.classList.toggle('hidden');
    console.log('Кнопка открытия меню отжата');
});

