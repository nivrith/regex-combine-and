
import regexCombineAnd from '../src/index';
import {expect} from 'chai';

const regex = [/a/, /quick/, /brown/, /fox/, /jumped/, /over/, /the/, /lazy/, /dog/];
const combinedRegex = /^(?=[\s\S]*a)(?=[\s\S]*quick)(?=[\s\S]*brown)(?=[\s\S]*fox)(?=[\s\S]*jumped)(?=[\s\S]*over)(?=[\s\S]*the)(?=[\s\S]*lazy)(?=[\s\S]*dog)[\s\S]*$/m;
const testString = 'a dog jumped quickly over the lazy brown fox';
const testString2 = 'a cat is quick but a brown fox is faster than a lazy dog. a human being could have jumped over the obstacles if needed';

describe('Regex Combine And', ()=>{

  it('expects combined regex to match expected when passed as n arguments', () => {
    expect(regexCombineAnd(...regex).toString()).to.be.equal(combinedRegex.toString());
  });

  it('expects combined regex to match expected when array of regexes is passed', () => {
    expect(regexCombineAnd(regex).toString()).to.be.equal(combinedRegex.toString());
  });

  it('expects test string to pass the regex test', () => {
    expect(combinedRegex.test(testString)).to.be.true;
  });

  it('expects a jumbled test string to pass the regex test', () => {
    expect(combinedRegex.test(testString2)).to.be.true;
  });
})