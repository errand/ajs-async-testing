/** @module GameSaving
 * Class creating GameSaving.
 */

export default class GameSaving {
  /**
   * Create a point. Constructor only creates new object using data from Parser
   */
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {
      id: data.userInfo.id,
      name: data.userInfo.name,
      level: data.userInfo.level,
      points: data.userInfo.points,
    };
  }
}
