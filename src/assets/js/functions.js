let checkbox = document.querySelector(".switcher__checkbox");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.querySelector(".header__top__info__currency__oc:first-child").classList.toggle("active");
    document.querySelector(".header__top__info__currency__oc:last-child").classList.toggle("active");
  } else {
    document.querySelector(".header__top__info__currency__oc:first-child").classList.toggle("active");
    document.querySelector(".header__top__info__currency__oc:last-child").classList.toggle("active");
  }
});