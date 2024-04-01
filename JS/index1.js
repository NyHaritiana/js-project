const headingElement = document.getElementById('text1');
const subHeadingElement = document.getElementById('text2');
const cursorElement = document.getElementById('cursor');
const namesElement = document.getElementById('names');
const headingText = "Bienvenue sur notre Projet DHTML";
const subHeadingText = "Ce Projet est réalisé par:";
const names = "2915 Tahiry, 2903 Ny Aina, 2858 Jeremiah, 2796 Dani";
let index = 0;

function typeText() {
  if (index < headingText.length) {
    headingElement.textContent += headingText.charAt(index);
    index++;
    setTimeout(typeText, 100);
  } else {
    showSubHeading();
  }
}

function showSubHeading() {
  let subIndex = 0;
  let nameIndex = 0;
  const interval = setInterval(() => {
    if (subIndex < subHeadingText.length) {
      subHeadingElement.textContent += subHeadingText.charAt(subIndex);
      subIndex++;
      cursorElement.style.display = 'inline-block';
    } else {
      clearInterval(interval);
      cursorElement.style.display = 'none';
    }
  }, 100);
  
  const nameInterval = setInterval(() => {
    if (nameIndex < names.length) {
        namesElement.textContent += names.charAt(nameIndex);
        nameIndex++;
    } else {
        clearInterval(nameInterval);
        cursorElement.style.display = 'none';
    }
  }, 100);
}


typeText();
