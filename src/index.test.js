// Импортируем функцию, которую будем тестировать
import { moveGnome } from './index'; // Предполагаем, что функция находится в index.js

describe('Gnome Movement Tests', () => {
    test('should move gnome to the right', () => {
        const initialPosition = { x: 0, y: 0 };
        const direction = 'right';
        const expectedPosition = { x: 1, y: 0 };

        const newPosition = moveGnome(initialPosition, direction);
        
        expect(newPosition).toEqual(expectedPosition);
    });

    test('should move gnome to the left', () => {
        const initialPosition = { x: 1, y: 0 };
        const direction = 'left';
        const expectedPosition = { x: 0, y: 0 };

        const newPosition = moveGnome(initialPosition, direction);
        
        expect(newPosition).toEqual(expectedPosition);
    });

    test('should move gnome up', () => {
        const initialPosition = { x: 0, y: 0 };
        const direction = 'up';
        const expectedPosition = { x: 0, y: 1 };

        const newPosition = moveGnome(initialPosition, direction);
        
        expect(newPosition).toEqual(expectedPosition);
    });

    test('should move gnome down', () => {
        const initialPosition = { x: 0, y: 1 };
        const direction = 'down';
        const expectedPosition = { x: 0, y: 0 };

        const newPosition = moveGnome(initialPosition, direction);
        
        expect(newPosition).toEqual(expectedPosition);
    });

    test('should not move gnome for invalid direction', () => {
        const initialPosition = { x: 0, y: 0 };
        const direction = 'invalid';
        const expectedPosition = { x: 0, y: 0 }; // Позиция должна остаться прежней

        const newPosition = moveGnome(initialPosition, direction);
        
        expect(newPosition).toEqual(expectedPosition);
    });
});
