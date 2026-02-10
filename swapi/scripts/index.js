import { getCharacters, pushCharacters } from './data/characters.js';
import fetchData from './modules/api.js';
import { renderCharacters, setupPagination } from './modules/gui.js';
import { setNmbrOfCharacters, updatePaginationDisplay } from './modules/pagination.js';

pageSetup();

async function pageSetup() {
    const characters = await fetchData('https://swapi.info/api/people');
    pushCharacters(characters);
    setNmbrOfCharacters(getCharacters().length);
    setupPagination();
    updatePaginationDisplay();
    renderCharacters();
}