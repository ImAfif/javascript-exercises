const sumAll = function(start, finish) {
    let answer = 0 


    if (start < 0 || finish < 0 || !(typeof start == "number") || !(typeof finish == "number") ) {
    return "ERROR"
    }
     if (start > finish) {

        for (let step = finish; step <= start; step++) {
        answer = step + answer
    } 
 } else if (start < finish) {

        for (let step = start; step <= finish; step++) {
            answer = step + answer
        }


 }
    return answer
}
// Do not edit below this line
module.exports = sumAll