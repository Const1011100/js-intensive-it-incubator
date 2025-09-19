import { getGooglePoints, getPlayersPoints } from '../core/state-manager.js';

const rootElement = document.getElementById('root');
rootElement.innerHTML = '';

const googlePoints = getGooglePoints();
const player1Points = getPlayersPoints(1);
const player2Points = getPlayersPoints(2);

rootElement.append(
  `Player: ${player1Points}, Player: ${player2Points}, Google: ${googlePoints}`
);
