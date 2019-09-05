import React from 'react';
import { storiesOf } from '@storybook/react'; // eslint-disable-line
import { action } from '@storybook/addon-actions'; // eslint-disable-line
import SearchInput from '.';

storiesOf('SearchInput', module)
  .add('basic search', () => (
    <SearchInput label="Label" placeholder="Placeholder" onChange={action('Search value')} />
  ));
