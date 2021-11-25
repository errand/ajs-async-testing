import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const response = await GameSavingLoader.load();
    console.log(response);
  } catch {
    console.log('error');
  }
})();
