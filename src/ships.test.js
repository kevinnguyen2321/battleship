import { Ship } from './ships';

test('ship class to have properties', () => {
  expect(Ship()).toContain('damageTaken')
});
