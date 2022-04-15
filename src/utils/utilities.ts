export function timeout(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getTimeDiff(start: Date, end: Date): string {
  const diffInSec = (end.getTime() - start.getTime()) / 1000;
  let returnStr = `${diffInSec}sec ago`;
  if (diffInSec > 60 && diffInSec < 3600) {
    returnStr = `${Math.floor(diffInSec / 60)}min ago`
  } else if (diffInSec > 3600 && diffInSec < 86400) {
    returnStr = `${Math.floor(diffInSec / 3600)}hour ago`
  } else if (diffInSec > 86400) {
    returnStr = `${Math.floor(diffInSec / 86400)}day ago`
  }
  return returnStr;
}