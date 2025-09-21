import {
  getGooglePoints,
  getPlayersPoints,
} from '../../../core/state-manager.js';

export function ResultPanelComponent() {
  const element = document.createElement('div');
  element.classList.add('result__panel');

  const googlePoints = getGooglePoints();
  const player1Points = getPlayersPoints(1);
  const player2Points = getPlayersPoints(2);

  element.append(
    `Player: ${player1Points}, Player: ${player2Points}, Google: ${googlePoints}`
  );
  return element;
}
