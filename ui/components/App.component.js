import { SettingsComponent } from './Settings/Settings.component.js';
import { ResultPanelComponent } from './ResultPanel/ResultPanel.component.js';
import { GridComponent } from './Grid/Grid.component.js';
import { LoseComponent } from './Lose/Lose.component.js';
import { StartComponent } from './Start/Start.component.js';
import { getGameStatus } from '../../core/state-manager.js';
import { GAME_STATUSES } from '../../core/constants.js';

export function AppComponent() {
  const element = document.createElement('div');

  render(element);

  return { element };
}

async function render(element) {
  const gameStatus = await getGameStatus();
  switch (gameStatus) {
    case GAME_STATUSES.SETTINGS: {
      const settingsComponent = await SettingsComponent();
      const startComponent = StartComponent();
      element.append(settingsComponent.element, startComponent.element);
      break;
    }

    case GAME_STATUSES.IN_PROGRESS:
      const settingsComponent = await SettingsComponent();
      const resultComponent = await ResultPanelComponent();
      const gridComponent = await GridComponent();
      element.append(
        settingsComponent.element,
        resultComponent.element,
        gridComponent.element
      );
      break;
    case GAME_STATUSES.LOSE:
      const loseComponent = await LoseComponent();
      element.append(loseComponent.element);
      break;
    default:
      throw new Error('not implemented');
  }
}
