export default (diff) => {
  const formString = (sym, key, value) => [`  ${sym} ${key}: ${value}`];
  const resultToString = (array) => `{\n${array.join('\n')}\n}`.toString();

  const result = diff.map((item) => {
    const [sym, key, value] = item;
    return formString(sym, key, value);
  });

  return resultToString(result);
};
