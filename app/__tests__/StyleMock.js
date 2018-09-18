import StyleMock from '../style.mock';

test('expect StyleMock to be an empty Object', () => {
  expect(typeof StyleMock).toBe('object');
  expect(StyleMock).toMatchObject({});
});
