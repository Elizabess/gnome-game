import './style.css';

const board = document.getElementById('game-board');
const gnomeImage = 'gnome-game/src'; // Путь к изображению гнома
   // Создаем игровое поле
   for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
}

// Функция для случайного перемещения гнома
function moveGnome() {
    const cells = document.querySelectorAll('.cell');
    const randomIndex = Math.floor(Math.random() * cells.length);
    
    // Создаем элемент img, если он еще не создан
    if (!document.getElementById('gnome')) {
        const gnome = document.createElement('img');
        gnome.id = 'gnome';
        gnome.src = gnomeImage;
        cells[randomIndex].appendChild(gnome);
    } else {
        const currentCell = document.getElementById('gnome').parentNode;
        let newCell;

        do {
            newCell = cells[Math.floor(Math.random() * cells.length)];
        } while (newCell === currentCell);

        newCell.appendChild(document.getElementById('gnome'));
        currentCell.removeChild(document.getElementById('gnome'));
        newCell.appendChild(document.getElementById('gnome'));
    }
}

setInterval(moveGnome, 1000); // Перемещаем гнома каждую секунду

