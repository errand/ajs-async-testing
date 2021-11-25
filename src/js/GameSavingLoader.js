import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

/** @module GameSavingLoader
 * Class creating GameSavingLoader.
 */
export default class GameSavingLoader {
  /**
   * Load buffer into the memory as Uint16Array using Promises
   */
  // eslint-disable-next-line consistent-return
  static async load() {
    try {
      const response = await read();
      const jsonData = await json(response);
      const saving = await new GameSaving(JSON.parse(jsonData));
      return saving;
    } catch (error) {
      console.log(error.message);
    }
  }
}
