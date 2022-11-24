import { myAction } from "./Redux_items/action.js";
import { myStore } from "./Redux_items/Store.js";


var storeData = myStore.getState();

console.log(storeData);

myAction(10);

var storeData = myStore.getState();
console.log(storeData);