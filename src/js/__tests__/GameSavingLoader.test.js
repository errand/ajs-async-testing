import GameSavingLoader from '../GameSavingLoader';

test('the data is exact object', () => {
  const data = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  return expect(GameSavingLoader.load()).resolves.toEqual(data);
});

test('the data is exact object', () => {
  const data = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitmand', level: 10, points: 2000,
    },
  };
  return expect(GameSavingLoader.load()).resolves.not.toEqual(data);
});

test('the parser fails with an error', () => {
  const data = {
    2: 1546300800,
    id: 1,
    name: 'Hitman',
    level: 10,
    points: 2000,
  };
  return GameSavingLoader.load().catch(e => expect(e).toMatch('error'));
});
