
function asyncOperation() {
  let result;
  setTimeout(() => {
    result = `Async operation completed`;
    console.log(result); // Async operation completed
  }, 1000);

  return function () {
    console.log(result); // undefined
  };
}

const asynCallback = asyncOperation();
asynCallback();


// order of execution ==> undefined ----> Async operation completed