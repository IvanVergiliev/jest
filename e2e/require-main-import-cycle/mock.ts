/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as module from './module';

console.log(`loading ${__filename}`);
console.log(require.main?.id);

export const one = 1;

export const two = module.two;

export const arr = [1, 2, 3];
