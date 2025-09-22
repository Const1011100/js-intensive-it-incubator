import {
  getGooglePoints,
  getPlayersPoints,
} from '../../../core/state-manager.js';

export function ResultPanelComponent() {
  const element = document.createElement('div');
  element.classList.add('result__panel');

  render(element);

  return { element };
}

async function render(element) {
  const googlePoints = await getGooglePoints();
  const player1Points = await getPlayersPoints(1);
  const player2Points = await getPlayersPoints(2);

  element.append(
    `Player: ${player1Points}, Player: ${player2Points}, Google: ${googlePoints}`
  );
}
