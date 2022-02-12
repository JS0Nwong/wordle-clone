//KEY PRESS EVENTS

const keys = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'enter',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', '<i class="fas fa-backspace"></i>'
];

//CREATE TILES THAT APPEAR ON THE SCREEN
const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
]

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

guessRows.forEach((guessRows, rowIndex) => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    rowElement.classList.add('guess-row')
    rowElement.setAttribute('id', 'guessRow-' + rowIndex);

    guessRows.forEach((guessRow, tileIndex) => {
        const tile = document.createElement('div');
        tile.setAttribute('id', 'guessRow-' + rowIndex + '-tile-' + tileIndex);
        tile.classList.add('box');
        rowElement.append(tile);
    });
    guess.append(rowElement);
});

//KEYBOARD EVENT LISTENER

document.addEventListener('keydown', (e) => {
    if(e.key.match(/^[a-z]+$/i))
    {
        addLetter(e.key);
        console.log(e.key);
    }
    if(e.key === 'Backspace')
    {
        deleteLetter();
    }
});

let key = document.querySelectorAll('.key');

for(let i = 0; i < key.length; i++)
{
    key[i].addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
        handleClick(key[i].innerHTML);
    });
}

const handleClick = (key) => {
    if(!isGameOver)
    {
        if(key === '<i class="fas fa-backspace"></i>')
        {
            deleteLetter();
            return;
        }
        if(key === 'enter')
        {
            checkRow();
            return;
        }
        addLetter(key);
    }
}

const addLetter = (key) =>
{
    if(currentTile < 5 && currentRow < 6)
    {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = key;
        guessRows[currentRow][currentTile] = key;
        tile.setAttribute('data', key);
        currentTile++;
    }
}

const deleteLetter = () => {
    if(currentTile > 0)
    {   
        currentTile--;
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = '';
        guessRows[currentRow][currentTile] = '';
        tile.setAttribute('data', '');
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('');

    if(currentTile > 4)
    {
        
    }
}

