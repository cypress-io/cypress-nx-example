import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'h9wsvo',
  component: nxComponentTestingPreset(__filename, { bundler: 'vite' }),
});
