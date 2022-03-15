// SWITCHER
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

// MOBILE MENU 
document.getElementById("mobileTrigger").addEventListener('click', function(e){   
	e.stopPropagation();

	if (document.querySelector(".mobileTrigger").contains(e.target) ) {	
		document.querySelector(".header__nav").classList.toggle("mobiled");
		document.querySelector(".header__nav__list").classList.toggle("mobiled");
		document.querySelector("body").classList.toggle("blocked");
	}
});
