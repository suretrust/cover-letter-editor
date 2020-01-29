import searchAndSave from '../utilities/searchAndSave';

test('replaces all instances of "a" with "b" in the string', () => {
  const string =
    'I am a [new] project and no matter how [old] you think I am, users are gonna like my [new]';

  expect(searchAndSave(string)).toEqual(['[new]', '[old]']);
});
