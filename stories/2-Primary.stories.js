import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import App from '../example/src/App'

export default {
  title: 'App',
  component: Welcome,
};

export const ToStorybook = () => <App  />;

ToStorybook.story = {
  name: 'to Storybook',
};
