export default function getHomeworldDetails(homeworld) {
    return `
        <h3 class="details__subtitle">${homeworld.name}</h3>
        <p class="details__info">Rotation period: ${homeworld.rotation_period}h</p>
        <p class="details__info">Orbital period: ${homeworld.oribital_period} days</p>
        <p class="details__info">Diameter: ${homeworld.diameter} km</p>
        <p class="details__info">Climate: ${homeworld.climate}</p>
        <p class="details__info">Gravity: ${homeworld.gravity}</p>
        <p class="details__info">Terrain: ${homeworld.terrain}</p>
    `;
}