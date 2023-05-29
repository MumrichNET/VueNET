export type Enum = { [s: number]: string };

export function enumToArray(e: Enum): string[] {
  return Object.keys(e).filter((k) => isNaN(Number(k)));
}
