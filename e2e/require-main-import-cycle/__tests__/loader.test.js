/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const loader = require('../loader');

jest.mock('../mock');

test('loader should load a module', () => {
  const module = loader('../module.ts');
  const mock = loader('../mock.ts');
  console.log(module.one);
  console.log(mock.arr);
});
