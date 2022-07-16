module.exports = function check(str, bracketsConfig) {
  let example = bracketsConfig.flat().join('');
  let arr = Array.from(str);
  if (str.length % 2 !==0) {
    return false;
  } else {
    for (let i = 0; i < 30; i++) {
    for (let i = 0; i < example.length; i += 2) {
      for (let j = 0; j < str.length; j += 1) {
        if (str.slice(j, j + 2) === example.slice(i, i + 2)) {
          str = (str.substring(0, j)).concat(str.substring(j + 2, str.length));
        }
      }
      }
    };
    
  if (str.length === 0) {
      return true;
    } else if (str.length === 2){
      for (let i = 0; i < example.length; i += 2) {
        if (str === example.slice(i, i + 2)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
};
