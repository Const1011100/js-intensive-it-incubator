const _state = {
  points: {
    google: 12,
    players: [5, 7],
  },
};

export function getGooglePoints() {
  return _state.points.google;
}

/**
 * @param {number} playerNumber - one-based index of player
 * @returns {number} number of points
 */
export function getPlayersPoints(playerNumber) {
  const playerIndex = playerNumber - 1;

  if (playerIndex < 0 || playerIndex > _state.points.players.length - 1) {
    throw new Error('Incorrect player number');
  }

  return _state.points.players[playerIndex];
}
