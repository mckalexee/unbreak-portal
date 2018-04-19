export function hashCode(inputString: string) {
  let hash = 0;
  if (inputString.length === 0) {
    return hash;
  }
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash;
}
