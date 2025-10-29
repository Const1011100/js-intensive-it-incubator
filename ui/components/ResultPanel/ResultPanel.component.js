import { EVENTS } from '../../../core/constants.js';
import {
  getGooglePoints,
  getPlayersPoints,
  subscribe,
  unsubscribe,
} from '../../../core/state-manager.js';

export function ResultPanelComponent() {
  const element = document.createElement('div');
  element.classList.add('result__panel');

  const observer = (e) => {
    if (e.name === EVENTS.SCORES_CHANGED) {
      render(element);
    }
  };

  subscribe(observer);

  render(element);

  return {
    element,
    cleanup: () => {
      unsubscribe(observer);
    },
  };
}

async function render(element) {
  element.innerHTML = '';
  const googlePoints = await getGooglePoints();
  const player1Points = await getPlayersPoints(1);
  const player2Points = await getPlayersPoints(2);

  element.append(
    `Player: ${player1Points}, Player: ${player2Points}, Google: ${googlePoints}`
  );
}
