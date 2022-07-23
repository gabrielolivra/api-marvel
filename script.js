const timeStamp = '1658575887';
const apiKey = 'b270e8f99bf17eeb882e5f584ae16666'
const md5 = '69d7e87b1da64d4fe529a273cb9fa6cc'

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100
`).then((response) => {
    return response.json();
}).then((jsonParsed) => {

    const divHero = document.querySelector('#herois');

    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name
        const btnHero = element.btn

        createDivHero(srcImage, nameHero, divHero, btnHero);
    });
    console.log(jsonParsed);
})

function createDivHero(srcImage, nameHero, divToAppend) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')
    const btn = document.createElement('button')
    btn.textContent ="Enviar"
    textName.textContent = nameHero
    img.src = srcImage


    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divFilho.appendChild(btn)
    divToAppend.appendChild(divPai)
    divFilho.classList.add('btn-add')
    divPai.classList.add("personagem");

}

