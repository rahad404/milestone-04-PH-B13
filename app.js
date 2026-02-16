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