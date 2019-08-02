import {shuffle} from 'lodash-es';
import {CARDS} from './cards.js';

const currentCardEl = document.getElementById('current-card-container');
const nextCardBtnEl = document.getElementById('next-card-btn');

const [page_one, page_two, ...rest_of_the_deck] = CARDS;

let cardsQueue = shuffle(rest_of_the_deck);
let nextImage = new Image();
nextImage.src = page_two;

currentCardEl.onclick = function() {
    currentCardEl.replaceChild(nextImage, currentCardEl.querySelector('img'));

    nextImage = new Image();
    nextImage.src = cardsQueue.pop();
};