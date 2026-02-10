import getCharacterDetails from "../components/characterDetails.js";
import getHomeworldDetails from '../components/homeworldDetails.js';
import { getCharacters } from "../data/characters.js";
import { addClass, createElement, getElement } from "../utils/domUtils.js";
import fetchData from "./api.js";
import { getCurrentPage, nextPage, prevPage } from "./pagination.js";

export function renderCharacters() {
    const characters = getCharacters();
    const charactersPerPage = 8;
    const startIndex = (getCurrentPage() - 1) * charactersPerPage;
    const endIndex = startIndex + 8;
    const displayedCharacters = characters.slice(startIndex, endIndex);

    const listRef = getElement('#charactersList');
    listRef.innerHTML = '';

    for(let i = 0; i < displayedCharacters.length; i++) {
        const characterRef = createCharacterItem(displayedCharacters[i]);
        listRef.appendChild(characterRef);
    }
}

function createCharacterItem(character) {
    const characterRef = createElement('li');
    addClass(characterRef, 'characters__list-item');
    characterRef.textContent = character.name;
    characterRef.addEventListener('click', () => {
        renderDetails(character);
    });

    return characterRef;
}

async function renderDetails(character) {
    console.log(character);
    const homeworld = await fetchData(character.homeworld)
    getElement('#characterDetails').innerHTML = getCharacterDetails(character);
    getElement('#homeworldDetails').innerHTML = getHomeworldDetails(homeworld);
}

export function setupPagination() {
    getElement('.fa-chevron-left').addEventListener('click', () => {
        prevPage();
        renderCharacters();
    });
    
    getElement('.fa-chevron-right').addEventListener('click', () => {
        nextPage();
        renderCharacters();
    });
}