import API from './api.js';
const api = new API();


const $characterContainer = document.querySelector('.character');

class Character {
    constructor({name, image}) {
        this.name = name;
        this.image = image;
        this.render(); // Al hacer el constructor de Character y agregar this.render automaticamente hará la función
    }

    build() {
        return `
        <article class="character">
            <div class="character-grid">
                <h2>${this.name}</h2>
                <img src="${this.image}" alt="img">
            </div>
        </article>
        `;
    }

    render() {
        $characterContainer.innerHTML = this.build();
    }
}



async function initApp(initCharacterId) {
    const characterData = await api.getCharacter(initCharacterId)
    console.log(characterData);
    
    // const rick = new Character(characterData);
}

initApp(1);