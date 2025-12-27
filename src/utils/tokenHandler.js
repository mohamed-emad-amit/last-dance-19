export function getTokenFromLocalStroage() {
  return JSON.parse(localStorage.getItem("userData"))?.accessToken;
}
