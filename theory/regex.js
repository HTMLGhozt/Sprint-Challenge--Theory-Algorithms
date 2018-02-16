/** Antelopes */
const antelope = (str) => {
  return /antelopes?/.test(str);
};
/** A goat in a moat */
const goatMoat = (str) => {
  return /[g|m]oat/.test(str);
};
const notBoat = (str) => {
  return /[^b]oat/.test(str);
};
/** What is a date? */
const isDate = (str) => {
  return /[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,2}/.test(str);
};
/** VT-100 */
const vtEsc = (str) => {
  // alternatively replace ESC[ with \e
  return /ESC\[([0-9]+);([0-9]+)f|ESC\[[0-9]m/.test(str);
};