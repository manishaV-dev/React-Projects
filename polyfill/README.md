# Polyfill for Map

## 1. Approach

        function myMap(cb) {
        let self = this;
        let output = [];

        for (let i = 0; i < self.length; i++) {
            output[i] = cb(self[i], i, self);
        }

        return output;
        }

#### // to make it available for array we have to use prototype
Array.prototype.myMap = myMap;


### Testing : 
const result = [1, 2, 3].myMap((el) => {
  return el * 2;
});

console.log(result); // [ 2, 4, 6 ]


#### To ensure that the polyfill is available everywhere in the app, import it in your index.js or main.jsx file.

### 📌 Modify index.js or main.jsx

        import './mapPolyfill.js' // Ensure this is imported before the app starts
        import React from "react";
        import ReactDOM from "react-dom";
        import App from "./App";

        ReactDOM.render(<App />, document.getElementById("root"));


-  Now, everywhere in your app, you can use .myMap() just like .map().


## 2. Alternative: Use a Utility Function Instead of Array.prototype

If you don't want to modify global prototypes, define a utility function instead:


        // src/utils/customMap.js

        export const customMap = (array, callback) => {
        let newArr = [];
        for (let i = 0; i < array.length; i++) {
            newArr.push(callback(array[i], i, array));
        }
        return newArr;
        };

### 📌 Import it wherever needed:

        // src/app.jsx

        import { customMap } from "./utils/customMap";

        let arr = [1, 2, 3];
        const newArr = customMap(arr, (el) => el * 2);
        console.log(newArr);


## 🚀 Which Approach is Better?
    Approach	                                Use Case
    Extending Array.prototype                   When you want to make the polyfill available everywhere automatically. Best for fixing missing methods in old browsers.
    (Global Polyfill)	

    Utility Function (customMap)	            When you don't want to modify global objects and prefer explicit imports in components.



## 🔥 Final Thoughts
- If you need global availability, go with Array.prototype.myMap inside a polyfills.js file.

- If you prefer scoped control, use a utility function like customMap in a separate file.