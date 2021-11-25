import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('works with async/await', async () => {
  read.mockReturnValue(
    Promise.resolve(new Uint16Array([74, 83])),
  );
  expect.assertions(1);
  const data = await GameSavingLoader.load();
  expect(data).toEqual('JS');
});

test('error handling', async () => {
  read.mockReturnValue(Promise.reject(new Error('Ошибка!')));
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual(Error('Ошибка!'));
  }
});
