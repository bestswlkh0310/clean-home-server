export function uuidByHeaders(header) {
  return header.authorization.split(' ')[1];
}