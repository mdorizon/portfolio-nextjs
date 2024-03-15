// TEXT COPY
const textCopy = document.querySelectorAll('.text-copy');
textCopy.forEach((copy) => {
  copy.addEventListener('click', () => {
    const emailAddress = copy.textContent.trim();
    navigator.clipboard.writeText(emailAddress);
  })
})

// NAVMENU BURGER
const sidenav = document.querySelector(".sidenav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const navItems = document.querySelectorAll('.burger-nav-item');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    sidenav.classList.remove("active");
  })
})
openBtn.addEventListener('click', () => {
  sidenav.classList.toggle("active");
})
closeBtn.addEventListener('click', () => {
  sidenav.classList.remove("active");
})

// PROJECT SORTING
const sortButtons = document.querySelectorAll('.sort-button');
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.classList.add('d-none');
})
for (let i = 0; i < 3; i++) {
  const card = cards[i];
  card.classList.remove('d-none');
}
sortButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // changing class active sort buttons
    const buttonActive = document.querySelector('.sort-button.active');
    buttonActive.classList.remove('active');
    button.classList.add('active');

    // sorting cards
    switch (button.id) {
      case 'all':
        cards.forEach((card) => {
          card.classList.add('d-none');
        })
        for (let i = 0; i < 3; i++) {
          const card = cards[i];
          card.classList.remove('d-none');
        }
        break;
      case 'integration':
        cards.forEach((card) => {
          card.classList.remove('d-none');
          if (!card.classList.contains('integration')) {
            card.classList.add('d-none');
          }
        })
        break;
      case 'webdesign':
        cards.forEach((card) => {
          card.classList.remove('d-none');
          if (!card.classList.contains('webdesign')) {
            card.classList.add('d-none')
          }
        })
        break;
      case 'php':
        cards.forEach((card) => {
          card.classList.remove('d-none');
          if (!card.classList.contains('php')) {
            card.classList.add('d-none')
          }
        })
        break;
      case 'perso':
      cards.forEach((card) => {
        card.classList.remove('d-none');
        if (!card.classList.contains('perso')) {
          card.classList.add('d-none')
        }
      })
      break;
    }
  })
})