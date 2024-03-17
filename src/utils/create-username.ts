export function createUsername(name: string) {
  const username = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '_')
    .toLocaleLowerCase()

  return username
}
