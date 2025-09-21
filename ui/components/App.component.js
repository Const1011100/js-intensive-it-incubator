import { SettingsComponent } from './Settings/Settings.component.js';
import { ResultPanelComponent } from './ResultPanel/ResultPanel.component.js';
import { GridComponent } from './Grid/Grid.component.js';

export function AppComponent() {
  const element = document.createElement('div');

  const settingsElement = SettingsComponent();
  const resultElement = ResultPanelComponent();
  const gridElement = GridComponent();

  element.append(settingsElement, resultElement, gridElement);

  return element;
}
