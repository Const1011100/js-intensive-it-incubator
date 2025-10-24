import { MOVING_DIRECTIONS } from '../../../core/constants.js';
import {
  getGridSize,
  movePlayer,
  subscribe,
  unsubscribe,
} from '../../../core/state-manager.js';
import { CellComponent } from './Cell/Cell.component.js';

export function GridComponent() {
  const localState = { cleanupFunctions: [] };

  const keyupObserver = (e) => {
    console.log(e.code);
    switch (e.code) {
      // Player1
      case 'ArrowUp':
        movePlayer(1, MOVING_DIRECTIONS.UP);
        break;
      case 'ArrowDown':
        movePlayer(1, MOVING_DIRECTIONS.DOWN);
        break;
      case 'ArrowLeft':
        movePlayer(1, MOVING_DIRECTIONS.LEFT);
        break;
      case 'ArrowRight':
        movePlayer(1, MOVING_DIRECTIONS.RIGHT);
        break;

      // Player2
      case 'KeyW':
        movePlayer(2, MOVING_DIRECTIONS.UP);
        break;
      case 'KeyS':
        movePlayer(2, MOVING_DIRECTIONS.DOWN);
        break;
      case 'KeyA':
        movePlayer(2, MOVING_DIRECTIONS.LEFT);
        break;
      case 'KeyD':
        movePlayer(2, MOVING_DIRECTIONS.RIGHT);
        break;
    }
  };
  document.addEventListener('keyup', keyupObserver);

  const element = document.createElement('table');
  element.classList.add('grid');

  render(element, localState);

  return {
    element,
    cleanup: () => {
      localState.cleanupFunctions.forEach((cf) => cf());
      document.removeEventListener('keyup', keyupObserver);
    },
  };
}

async function render(element, localState) {
  localState.cleanupFunctions.forEach((cf) => cf());
  localState.cleanupFunctions = [];

  const gridSizePromise = getGridSize();
  const gridSize = await gridSizePromise;

  for (let y = 0; y < gridSize.rowsCount; y++) {
    const rowElement = document.createElement('tr');

    for (let x = 0; x < gridSize.columnCount; x++) {
      const cellComponent = CellComponent(x, y);
      localState.cleanupFunctions.push(cellComponent.cleanup);
      rowElement.append(cellComponent.element);
    }

    element.append(rowElement);
  }
}
