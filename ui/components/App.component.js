import { SettingsComponent } from './Settings/Settings.component.js';
import { ResultPanelComponent } from './ResultPanel/ResultPanel.component.js';
import { GridComponent } from './Grid/Grid.component.js';

export function AppComponent() {
  const element = document.createElement('div');

  render(element);

  return { element };
}

async function render(element) {
  const settingsComponent = await SettingsComponent();
  const resultComponent = await ResultPanelComponent();
  const gridComponent = await GridComponent();

  element.append(
    settingsComponent.element,
    resultComponent.element,
    gridComponent.element
  );
}
