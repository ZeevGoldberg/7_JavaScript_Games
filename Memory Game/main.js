const cardArray = [
    {
        name: 'Bread',
        img: 'Memory Game/images/bread.jpg',
    },
    {
        name: 'Burger',
        img: 'Memory Game/images/burger.gif',
    },
    {
        name: 'Donut',
        img: 'Memory Game/images/donut.jpg',
    },
    {
        name: 'Oats',
        img: 'Memory Game/images/outs.gif',
    },
    {
        name: 'Pancakes',
        img: 'Memory Game/images/pancakes.jpg',
    },
    {
        name: 'Pizza',
        img: 'Memory Game/images/pizza.png',
    },
]
cardArray.sort(() => 0.5 - Math.random())//זאת דרך מצוינת לערבב את הסדר של כל אריי
const gridDisplay = document.querySelector('#grid')

function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'Memory Game/images/american.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
        console.log(card, i);

    }
}
createBoard()

function flipCard(){
    const cardId = this.getAttribute('data-id');
}