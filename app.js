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

