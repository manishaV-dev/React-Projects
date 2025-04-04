function myMap(cb) {
  let self = this;
  let output = [];

  for (let i = 0; i < self.length; i++) {
    output[i] = cb(self[i], i, self);
  }

  return output;
}

// to make it available for array we have to use prototype

Array.prototype.myMap = myMap;

const result = [1, 2, 3].myMap((el) => {
  return el * 2;
});

console.log(result); // [ 2, 4, 6 ]


// Que - How can you make it available for the entire react project

// Solution - 1