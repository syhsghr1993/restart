var immer = require("immer");

const { produce } = immer;
const currentState = { test: 1 };
const newState = produce(currentState, draft => {
  draft.test = 2;
});
console.log(newState);

var obj = new Proxy(
  {},
  {
    get: function(target, key, receiver) {
      console.log(`target ${target}!`);
      return Reflect.get(target, key, receiver);
    },
    set: function(target, key, value, receiver) {
      console.log(`target ${target}!`);
      return Reflect.set(target, key, value, receiver);
    }
  }
);

obj.count = 1;
