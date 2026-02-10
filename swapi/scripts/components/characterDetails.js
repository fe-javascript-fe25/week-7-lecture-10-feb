import { firstCaseToUpper } from '../utils/utils.js';

export default function getCharacterDetails(character) {
    return `
        <h3 class="details__subtitle">${character.name}</h3>
        <p class="details__info">Height: ${character.height} cm</p>
        <p class="details__info">Mass: ${character.mass} kg</p>
        <p class="details__info">Hair color: ${firstCaseToUpper(character.hair_color)}</p>
        <p class="details__info">Skin color: ${firstCaseToUpper(character.skin_color)}</p>
        <p class="details__info">Eye color: ${firstCaseToUpper(character.eye_color)}</p>
        <p class="details__info">Birth year: ${character.birth_year}</p>
        <p class="details__info">Gender: ${firstCaseToUpper(character.gender)}</p>
    `;
}