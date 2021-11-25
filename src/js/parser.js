/** @module json
 * Format ArrayBuffer to string
 * @returns {Promise} Promise object represents conversion to String from ArrayBuffer
 */
export default function json(data) {
  return new Promise((resolve, reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}
