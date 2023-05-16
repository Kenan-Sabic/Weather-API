export function convertToUnixTimestamp(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }
  