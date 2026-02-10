const characters = [];

export function getCharacters() {
    return characters;
}

export function pushCharacters(list) {
    for(let item of list) {
        characters.push(item);
    }
}