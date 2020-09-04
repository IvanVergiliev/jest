/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as mock from './mock';

console.log(`loading ${__filename}`);
console.log(require.main?.id);

export const one = mock.one;

export const two = 2;
