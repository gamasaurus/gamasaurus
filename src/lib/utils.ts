export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatSectionNumber(num: number): string {
  return num.toString().padStart(2, '0');
}
