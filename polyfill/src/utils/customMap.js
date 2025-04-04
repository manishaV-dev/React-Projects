export const customMap = (arr, cb) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i], i, arr));
  }

  return newArr;
};
