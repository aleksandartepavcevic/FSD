const exitConfigurator1 = document.getElementById('exit-configurator-1');
const exitConfigurator2 = document.getElementById('exit-configurator-2');
const exitConfigurator3 = document.getElementById('exit-configurator-3');
const exitConfigurator4 = document.getElementById('exit-configurator-4');
const configurator1 = document.getElementById('configurator-1');
const configurator2 = document.getElementById('configurator-2');
const configurator3 = document.getElementById('configurator-3');
const configurator4 = document.getElementById('configurator-4');
const configuratorModal1 = document.getElementById('configurator-modal-1');
const configuratorModal2 = document.getElementById('configurator-modal-2');
const configuratorModal3 = document.getElementById('configurator-modal-3');
const configuratorModal4 = document.getElementById('configurator-modal-4');
const backgroundDimmer = document.getElementById('background-dimmer');
const checkboxes = document.querySelectorAll('.checkbox');

configurator1.addEventListener('click', () => {
  configuratorModal1.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

configurator2.addEventListener('click', () => {
  configuratorModal2.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

configurator3.addEventListener('click', () => {
  configuratorModal3.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

configurator4.addEventListener('click', () => {
  configuratorModal4.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

exitConfigurator1.addEventListener('click', () => {
  configuratorModal1.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

exitConfigurator2.addEventListener('click', () => {
  configuratorModal2.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

exitConfigurator3.addEventListener('click', () => {
  configuratorModal3.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

exitConfigurator4.addEventListener('click', () => {
  configuratorModal4.classList.toggle('open');
  backgroundDimmer.classList.toggle('open');
});

const db = [
  {
    name: 'Q3',
    id: 'cp1',
    startingPrice: 29999,
  },
  {
    name: 'A4',
    id: 'cp2',
    startingPrice: 24999,
  },
  {
    name: 'A3',
    id: 'cp3',
    startingPrice: 19999,
  },
  {
    name: 'Q7',
    id: 'cp4',
    startingPrice: 39999,
  },
];

const getPriceValue = (checkboxID, cpID) => {
  const priceValue = document.querySelectorAll('.price-product--equipment');
  let temp;
  [...priceValue].forEach((price) => {
    if (price.id === checkboxID) {
      temp = price.innerHTML.replace(',', '.').replace('EUR', '').trim();
      db.forEach((el) => {
        if (el.id === cpID.id) {
          const round = el.startingPrice + Number(temp);
          el.startingPrice = Math.round(round * 1000) / 1000;
        }
      });
    }
  });
};

const updateCarPrice = (priceEl) => {
  const carPrice = document.querySelectorAll('.car-price');
  [...carPrice].forEach((carPrice) => {
    if (carPrice.id === priceEl.id) {
      db.forEach((el) => {
        if (el.id === priceEl.id) {
          carPrice.innerHTML = el.startingPrice + ' €';
        }
      });
    }
  });
};

const checkboxesArray = [...checkboxes];

checkboxesArray.forEach((checkbox) => {
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      switch (checkbox.id) {
        case 'c1':
          break;

        case 'c2':
          getPriceValue(checkbox.id, cp1);
          updateCarPrice(cp1);
          break;

        case 'c3':
          getPriceValue(checkbox.id, cp1);
          updateCarPrice(cp1);
          break;

        case 'c4':
          getPriceValue(checkbox.id, cp1);
          updateCarPrice(cp1);
          break;

        case 'c5':
          getPriceValue(checkbox.id, cp1);
          updateCarPrice(cp1);
          break;

        case 'c21':
          break;

        case 'c22':
          getPriceValue(checkbox.id, cp2);
          updateCarPrice(cp2);
          break;

        case 'c23':
          getPriceValue(checkbox.id, cp2);
          updateCarPrice(cp2);
          break;

        case 'c24':
          getPriceValue(checkbox.id, cp2);
          updateCarPrice(cp2);
          break;

        case 'c25':
          getPriceValue(checkbox.id, cp2);
          updateCarPrice(cp2);
          break;

        case 'c31':
          break;

        case 'c32':
          getPriceValue(checkbox.id, cp3);
          updateCarPrice(cp3);
          break;

        case 'c33':
          getPriceValue(checkbox.id, cp3);
          updateCarPrice(cp3);
          break;

        case 'c34':
          getPriceValue(checkbox.id, cp3);
          updateCarPrice(cp3);
          break;

        case 'c35':
          getPriceValue(checkbox.id, cp3);
          updateCarPrice(cp3);
          break;

        case 'c41':
          break;

        case 'c42':
          getPriceValue(checkbox.id, cp4);
          updateCarPrice(cp4);
          break;

        case 'c43':
          getPriceValue(checkbox.id, cp4);
          updateCarPrice(cp4);
          break;

        case 'c44':
          getPriceValue(checkbox.id, cp4);
          updateCarPrice(cp4);
          break;

        case 'c45':
          getPriceValue(checkbox.id, cp4);
          updateCarPrice(cp4);
          break;
      }
    }
  });
});
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const slides = document.getElementsByClassName('mySlides');

leftArrow.addEventListener('click', () => {
  plusSlides(-1);
});

rightArrow.addEventListener('click', () => {
  plusSlides(1);
});

const showSlides = (n) => {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
};

let slideIndex = 1;
showSlides(slideIndex);

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
