import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
// const req = require.context('../src/*', true, /\.stories\.js$/);
// const req = require.context('../src/atomic.ui/*.*/*', true, /\.stories\.js$/);
function loadStories() {
  // req.keys().forEach(filename => req(filename));
  require('../src/atomic.ui/atoms/Button/index.story');
  require('../src/atomic.ui/atoms/Input/index.story');
  require('../src/atomic.ui/molecules/Select/index.story');
  require('../src/atomic.ui/atoms/Checkbox/index.story');
  require('../src/atomic.ui/atoms/Label/index.story');
  require('../src/atomic.ui/molecules/Task/index.story');
}

configure(loadStories, module);
