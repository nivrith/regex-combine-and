/*!
 * regex-combine-and <https://github.com/nivrith/regex-combine-and>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */

export function regexCombineAnd(...regexes: RegExp[]): RegExp;
export function regexCombineAnd(regexes: RegExp[]): RegExp;

export function regexCombineAnd(regexes: any): RegExp {
  let combinedStr = '^';
  let end = '[\s\S]*$'
  if (arguments.length > 1) {
     regexes = [...arguments];
  }
  for (const [index, re] of regexes.entries()) {
    const wrapped = `\(?=[\s\S]*${re.source}\)`;
    if (index === regexes.length - 1) {
      combinedStr += wrapped;
    } else {
      combinedStr += wrapped;
    }
  }
  let result = new RegExp(combinedStr + end, 'm');

  return result;

}
export default regexCombineAnd