const _state = {
  settings: {
    gridSize: {
      rowsCount: 4,
      columnCount: 4,
    },
  },
  points: {
    google: 12,
    players: [5, 7],
  },
};

export async function getGooglePoints() {
  return _state.points.google;
}

/**
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise<number>} number of points
 */
export async function getPlayersPoints(playerNumber) {
  const playerIndex = playerNumber - 1;

  if (playerIndex < 0 || playerIndex > _state.points.players.length - 1) {
    throw new Error('Incorrect player number');
  }

  return _state.points.players[playerIndex];
}

export async function getGridSize() {
  return { ..._state.settings.gridSize };
}
