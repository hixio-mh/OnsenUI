 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {Select} from '../dist/react-onsenui.js';
import TestUtils from 'react-dom/test-utils';
import rendersToComponent from './testUtil.js';

describe('Select', function() {
  rendersToComponent(
    <Select />,
    'ons-select'
  );
});