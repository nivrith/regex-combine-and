# regex-combine-and

[![CircleCI](https://circleci.com/gh/nivrith/regex-combine-and/tree/master.svg?style=svg)](https://circleci.com/gh/nivrith/regex-combine-and/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/regex-combine-and.svg)](https://www.npmjs.com/package/regex-combine-and)
[![node](https://img.shields.io/node/v/regex-combine-and.svg)](https://www.npmjs.com/package/regex-combine-and)
[![License MIT](https://img.shields.io/github/license/nivrith/regex-combine-and.svg)](https://github.com/nivrith/regex-combine-and/blob/master/LICENSE)

Combines multiple regexes into a single regex using lookaheads emulating `AND` behaviour

## Highlights

- Written in Typescript

- Matches multiline strings

- Matches only if all match phrases exists in test string irrepective of order

## Usage

> Combines multiple regexes into a single regex using lookaheads

Obviously, you can use the | (pipe?) to represent OR, but there is no AND
operator in regex. But we can emulate an AND behaviour by using lookaheads.

This lets you match paragraphs of text that contain ALL of a certain phrase,
but in no particular order

```js

  const regexCombineAnd = require('regex-combine-and');

  combinedRegex = regexCombineAnd([/a/, /quick/, /brown/]); // /^(?=[\s\S]*a)/(?=[\s\S]*quick)(?=[\s\S]*brown)[\s\S]*$/m

  combinedRegex.test('a cat is quick but a brown fox is faster'); // true
  combinedRegex.test('a cat is \n quick but a \n brown \n fox is faster'); // true

  combinedRegex.test('a quick fox'); // false
  combinedRegex.test('a quick brown'); //true
  combinedRegex.test('a brown quick'); // true

```

## License

MIT © [Nivrith](https://github.com/nivrith)
