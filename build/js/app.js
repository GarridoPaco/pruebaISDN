/**
 * Change the content of the title and subtitle depending on the screen width
 */
function updateContentTitle() {
    const screenWidth = window.innerWidth;

    const descriptionTitle = document.querySelector('.container__description__header__headline__title');
    const descriptionSubTitle = document.querySelector('.container__description__header__headline__subtitle');

    if (screenWidth >= 1024) {

        descriptionTitle.innerText = 'Cruelty free';

        descriptionSubTitle.textContent = 'Development';

    } else { 

        descriptionTitle.innerText = 'Cruelty';

        descriptionSubTitle.textContent = 'Free';
    }
}

updateContentTitle();

window.addEventListener('resize', updateContentTitle);

/**
 * Select the hidden posts and display the next 12 or the remaining ones
 */
function paginate() {
    const flavourCards = document.querySelectorAll('.container__flavours__slider__card');

    // Select
    const hiddenFlavourCards = Array.from(flavourCards).filter(card => {
        return window.getComputedStyle(card).display === 'none';
    });

    // Show
    if (hiddenFlavourCards.length > 0) {
        for (let i = 0; i < 12 && i < hiddenFlavourCards.length; i++) {
            hiddenFlavourCards[i].style.display = 'block'
        }
    }

}

const paginateBtn = document.querySelector('.container__flavours__btn');

paginateBtn.addEventListener('click', paginate);