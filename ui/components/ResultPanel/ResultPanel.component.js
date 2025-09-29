import {
  getGooglePoints,
  getPlayersPoints,
  subscribe,
} from '../../../core/state-manager.js';

export function ResultPanelComponent() {
  const element = document.createElement('div');
  element.classList.add('result__panel');

  subscribe(() => {
    render(element);
  });

  render(element);

  return { element };
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
