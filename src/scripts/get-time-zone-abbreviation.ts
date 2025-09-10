export function getTimeZoneAbbreviation(date: Date): string {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	return date.toLocaleTimeString(undefined, {
    timeZoneName: 'short',
    timeZone
  }).split(' ').pop() ?? '';
};
