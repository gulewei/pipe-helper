# A Borwser Compative Pipeline Function, Write In ES5

```js
var pipe = require('pipeline')

var a = function (_) { return _ + 'a' }

var b = function (_) { return _ + 'b' }

var pipeFn = pipe(a, b)
pipe('1') // '1ab'
pipe('2') // '2ab'

var c = function (x, y) { return x + y }

var pipeFn2 = pipe(c, a, b)
pipe(1, 2) // '3ab'
pipe(2, 4) // '6ab'

```