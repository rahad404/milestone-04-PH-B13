// getElementById()
const title = document.getElementById('main-heading');
console.log(title);
console.log(title.innerText);

// getElementByClassName()
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);

for(const item of listItems){
    console.log(item.innerText);
}

// getElementByTagName()
const allList = document.getElementsByTagName('li');
console.log(allList);

for(const item of allList){
    console.log(item);
}

// change some style 
const logoStyle = document.getElementById('logo');
logoStyle.style.fontWeight = 'bold';
logoStyle.style.color = '#d80000';
logoStyle.style.padding = '5px 10px';
logoStyle.style.borderRadius = '5px';
logoStyle.style.backgroundColor = '#160000';

// add new elemnt with java script 
const newAnime = document.createElement('li');
newAnime.innerText = "Monster";

const animeList = document.getElementById('anime-list');
animeList.appendChild(newAnime);

//-------------<new element>---------------
// add new elemnt with java script 2
//      1.get parent element
const main = document.querySelector('main');

//      2.create element to add
const newAnimeSection = document.createElement('section');

//      --> create element for section
const newAnimeH1 = document.createElement('h1');
newAnimeH1.innerText = 'New Released Anime';

const newAnimeUl = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Chainsaw Man';
const li2 = document.createElement('li');
li2.innerText = 'Sakamoto Days';
const li3 = document.createElement('li');
li3.innerText = 'Dan Da Dan';

newAnimeUl.appendChild(li1);
newAnimeUl.appendChild(li2);
newAnimeUl.appendChild(li3);

//      --> add element to section
newAnimeSection.appendChild(document.createElement('br'));
newAnimeSection.appendChild(newAnimeH1);
newAnimeSection.appendChild(newAnimeUl);

//      3.append element to parent eement
main.appendChild(newAnimeSection);

//----------<write raw html>------------
// add new elemnt with java script 2
const imdbSection = document.createElement('section');

imdbSection.innerHTML = `
    <br>
    <h1>IMDB Top 3</h1>
    <ul>
        <li>Fullmetal Alchemist</li>
        <li>Attack on Titan</li>
        <li>Death Note</li>
    </ul>
`
main.appendChild(imdbSection);