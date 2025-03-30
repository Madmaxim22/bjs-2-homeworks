function getArrayParams(...arr) { 
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  arr.forEach(element => {
    min = element < min ? element : min;
    max = element > max ? element : max;
    sum += element;
  });

  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce(
    (currentSum, currentNumber) => currentSum + currentNumber, 0
  );
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length < 1) return 0;

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return max- min;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length < 1) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  arr.forEach(element => {
    if(element % 2 == 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  });

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length < 1) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  arr.forEach(element => {
    if(element % 2 == 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  });

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  arrOfArr.forEach(element => {
    const res = func(...element);
    maxWorkerResult = res > maxWorkerResult ? res : maxWorkerResult;
  });

  return maxWorkerResult;
}
