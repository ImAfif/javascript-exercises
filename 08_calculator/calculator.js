const add = function(num1, num2) {

  return num1 + num2
	
};

const subtract = function(num1, num2) {

  return num1 - num2
	
};

const sum = function(numbers) {

  let answer = 0;

  for (let i = 0; i < numbers.length; i++){
    answer = answer + numbers[i]
  }

  return answer
	
};

const multiply = function(numbers) {
  let answer = 1;

  for (let i = 0; i < numbers.length; i++){
    if (numbers.length > 2) {
      answer = answer * numbers[i]
    } else  {
      answer = numbers[0] * numbers[i]
    }
  }

  return answer

};

const power = function(num1, num2) {

  return Math.pow(num1, num2)
	
};

const factorial = function(num) {

  if (num == 0 || num == 1 ) {
  
    return 1
  
  } else {
  
    for (let i = num - 1 ; i >= 1; i--) {
  
      num = num * i 
  
    }
  
  }
	return num 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
