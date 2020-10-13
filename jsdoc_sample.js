/**
 * 
 * @param {number} number 는 숫자
 * @return {...number} 숫자로 된 배열을 반환 
 */
function getDivisors(number) {
    let divisors = []
    for(let i = 1; i <= number; i++) {
        if(number % i === 0) {
            divisors.push(i)
        }
    }
    return divisors
}

/**
 * x를 n번 곱한 수를 반환함
 *
 * @param {number} x 거듭제곱할 숫자
 * @param {number} n 곱할 횟수, 반드시 자연수여야 함
 * @return {Object key: number} x의 n 거듭제곱을 반환함
 */
function pow(x, n) {
    let result = 1
    for(let i = 0; i < n; i++) {
        result *= x
    }
    return result
  }

  /**
 * @param {string=} somebody - Somebody's name.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}

/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}

/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
 */
function sum(num) {
    var i = 0, n = arguments.length, t = 0;
    for (; i < n; i++) {
        t += arguments[i];
    }
    return t;
}