import { getElement, addClass, removeClass } from '../utils/domUtils.js';

let currentPage = 1;
const charactersPerPage = 8;
let nmbrOfCharacters = 0;
let totalPages = 0;

export function getCurrentPage() {
    return currentPage;
}

export function setNmbrOfCharacters(nmbr) {
    nmbrOfCharacters = nmbr;
    totalPages = Math.ceil(nmbrOfCharacters / charactersPerPage);
}

export function prevPage() {
    if(currentPage !== 1) {
        currentPage--;
        updatePaginationDisplay();
    }
}

export function nextPage() {
    if(currentPage < totalPages) {
        currentPage++;
        updatePaginationDisplay();
    }    
}

export function updatePaginationDisplay() {
    getElement('#pageIndicator').textContent = `Page ${currentPage} / ${totalPages}`;    

    if(currentPage === 1) {
        removeClass(getElement('.fa-chevron-left'), 'active');
    } else {
        addClass(getElement('.fa-chevron-left'), 'active');
    }
    
    if (currentPage === totalPages) {
        removeClass(getElement('.fa-chevron-right'), 'active');
    } else {
        addClass(getElement('.fa-chevron-right'), 'active');
    }
}
