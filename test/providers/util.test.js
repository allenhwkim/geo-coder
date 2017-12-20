import {serialize} from '../../src/providers/util.js'

it('serialize', () => {
  expect(serialize({a:1, b:2})).toBe('a=1&b=2');
  expect(serialize({a:'foo bar', b:'bar foo'})).toBe('a=foo%20bar&b=bar%20foo');
});
