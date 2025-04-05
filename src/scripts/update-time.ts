export const updateTime = (localTimeElementId: string, utcTimeElementId: string) => () => {
  const now = new Date();
  const local = document.getElementById(localTimeElementId);
  if (local) {
    local.textContent = now.toString();
  }
  const utc = document.getElementById(utcTimeElementId);
  if (utc) {
    utc.textContent = now.toUTCString();
  }
};
