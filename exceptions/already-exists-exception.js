export default class AlreadyExistsException extends Error {
  constructor(message) {
    super(message);
  }
}
