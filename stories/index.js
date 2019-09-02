import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import { Button } from '@storybook/react/demo'; // eslint-disable-line

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
