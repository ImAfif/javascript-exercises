const ftoc = function(temp) {
let answer = (temp - 32) * 5/9

return Number(answer.toFixed(1))

};

const ctof = function(temp) {

  let answer = (temp * 9/5) + 32

  return Number(answer.toFixed(1))

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
