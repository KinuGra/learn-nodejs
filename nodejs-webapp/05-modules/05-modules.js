'use strict'

// CommonJS形式
const greet = require('./greet');
greet('Yamada');

// ESMを使うにはpackage.jsonを使ったり、.mjsにする方法がある
/*
NOTE:

CommonJS（CJS）
設定不要で動く

ES Modules（ESM）
package.jsonに"type": "module"もｓくは.mjsにする必要がある
フロントのモダン構成と統一するならこっち
*/