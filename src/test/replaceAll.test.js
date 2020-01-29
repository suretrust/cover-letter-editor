import replaceAll from '../utilities/replaceAll';

test('replaces all instances of "a" with "b" in the string', () => {
  const string =
    'I am a [new] project and no matter how [new] you think I am, users are gonna like my [new]';

  expect(replaceAll(string, '[new]', 'old')).toEqual(
    'I am a old project and no matter how old you think I am, users are gonna like my old'
  );
});
