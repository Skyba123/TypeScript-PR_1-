/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * @param {number[]} numbers
 * @returns {number}
 */
function multiplyArray(numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

/**
 * @param {number[]} numbers
 * @returns {number}
 */
function maxInArray(numbers) {
    return Math.max(...numbers);
}

/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @param {number} n
 * @returns {boolean}
 */
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * @param {number[]} numbers
 * @returns {boolean}
 */
function allEven(numbers) {
    return numbers.every(num => num % 2 === 0);
}

/**
 * @param {Object[]} items
 * @param {string} key
 * @returns {string[]}
 */
function extractValuesByKey(items, key) {
    return items.map(item => item[key]);
}

/**
 * @param {string[]} strings
 * @param {string} term
 * @returns {boolean}
 */
function containsString(strings, term) {
    return strings.includes(term);
}

/**
 * @param {boolean} value
 * @returns {string}
 */
function booleanToString(value) {
    return value ? 'true' : 'false';
}

/**
 * @param {number} num
 * @returns {string}
 */
function numberToString(num) {
    return num.toString();
}

/**
 * @param {string} numStr
 * @returns {number}
 */
function stringToNumber(numStr) {
    return parseInt(numStr, 10);
}

/**
 * @param {string[]} strings
 * @returns {string}
 */
function joinStrings(strings) {
    return strings.join(' ');
}

/**
 * @param {string[]} names
 * @returns {string[]}
 */
function capitalizeNames(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function sumOfSquares(nums) {
    return nums.reduce((sum, num) => sum + num * num, 0);
}

/**
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * @param {string[]} words
 * @returns {number}
 */
function longestWordLength(words) {
    return words.reduce((max, word) => Math.max(max, word.length), 0);
}

/**
 * @param {number} num
 * @returns {string}
 */
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num.toString();
}

/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function squareNumbers(nums) {
    return nums.map(num => num * num);
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function average(nums) {
    const total = nums.reduce((sum, num) => sum + num, 0);
    return total / nums.length;
}

/**
 * @param {string} str
 * @returns {string}
 */
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function productOfArray(nums) {
    return nums.reduce((product, num) => product * num, 1);
}

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function filterOdds(nums) {
    return nums.filter(num => num % 2 === 0);
}

/**
 * @param {string[]} strings
 * @returns {string[]}
 */
function sortStrings(strings) {
    return strings.sort();
}

/**
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
function uniqueValues(arr) {
    return [...new Set(arr)];
}

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function anagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

/**
 * @param {Array} arr
 * @returns {*}
 */
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/**
 * @param {Object} obj
 * @returns {Object}
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * @param {Array} arr
 * @param {*} value
 * @returns {number}
 */
function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

/**
 * @param {string} hex
 * @returns {number[]}
 */
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

/**
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {string}
 */
function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}