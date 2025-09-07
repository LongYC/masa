export const updateTime = (date: Date, localTimeElementId: string, utcTimeElementId: string) => () => {
  const local = document.getElementById(localTimeElementId);
  if (local) {
    local.textContent = date.toString();
  }
  const utc = document.getElementById(utcTimeElementId);
  if (utc) {
    utc.textContent = date.toUTCString();
  }
};
