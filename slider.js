
const blockHeaderLinkMenu = document.querySelectorAll(".menu");
const sliderDots = document.querySelectorAll(".point");
const flesheNext = document.querySelector(".next");
const fleshePrev = document.querySelector(".prev");
const pointNext = document.getElementById("plus");
const pointPrev = document.getElementById("moin");
const salons = document.querySelectorAll(".salons");
const workDetails = document.querySelectorAll(".work_details");
let currentIndex = 0;
const details = [
  {
      city: 'Rostov-on-Don LCD Admiral',
      area: '81 m2',
      time: '3.5 months'
  },
  {
      city: 'Sochi Thieves',
      area: '105 m2',
      time: '4 months'
  },
  {
      city: 'Rostov-on-Don Patriotic',
      area: '93 m2',
      time: '3 months'  
  },
];

function updateData(index) {
workDetails[0].textContent = details[index].city;
workDetails[1].textContent = details[index].area;
workDetails[2].textContent = details[index].time;
}

for (let i = 0; i < blockHeaderLinkMenu.length; i++) {
blockHeaderLinkMenu[i].addEventListener("click", function () {
    updateActiveClasses(i);
});

sliderDots[i].addEventListener("click", function () {
    updateActiveClasses(i);
});
}

fleshePrev.addEventListener('click', function () {
salons[currentIndex].classList.remove('salons-active');
currentIndex--;
if (currentIndex < 0) {
    currentIndex = salons.length - 1;
}
salons[currentIndex].classList.add('salons-active');
updateActiveClasses(currentIndex);
});

flesheNext.addEventListener('click', function () {
salons[currentIndex].classList.remove('salons-active');
currentIndex++;
if (currentIndex >= salons.length) {
    currentIndex = 0;
}
salons[currentIndex].classList.add('salons-active');
updateActiveClasses(currentIndex);
});

pointPrev.addEventListener('click', function () {
salons[currentIndex].classList.remove('salons-active');
currentIndex--;
if (currentIndex < 0) {
    currentIndex = salons.length - 1;
}
salons[currentIndex].classList.add('salons-active');
updateActiveClasses(currentIndex);
});

pointNext.addEventListener('click', function () {
salons[currentIndex].classList.remove('salons-active');
currentIndex--;
if (currentIndex < 0) {
    currentIndex = salons.length - 1;
}
salons[currentIndex].classList.add('salons-active');
updateActiveClasses(currentIndex);
});

function updateActiveClasses(index) {
for (let j = 0; j < blockHeaderLinkMenu.length; j++) {
    blockHeaderLinkMenu[j].classList.remove("menu-active");
}

for (let j = 0; j < sliderDots.length; j++) {
    sliderDots[j].classList.remove("point_active");
}

blockHeaderLinkMenu[index].classList.add("menu-active");
sliderDots[index].classList.add("point_active");

salons[currentIndex].classList.remove('salons-active');
currentIndex = index;
salons[currentIndex].classList.add('salons-active');
updateData(index);
}

