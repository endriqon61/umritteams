function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14) return 1;
  else return 1 - v;
}
export {
  cubicOut as c,
  sineIn as s
};
