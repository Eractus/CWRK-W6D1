// sum
function sum1(){
  let arr = Array.from(arguments);
  let total = 0;

  arr.forEach( (el) => {
    total = total + el;
  });
  return total;
}

// console.log(sum1(1, 2, 3, 4, 5));

function sum2(...args) {
  let total = 0;
  args.forEach( (el) => {
    total = total + el;
  });
  return total;
}

// console.log(sum2(2, 4, 6, 8, 10));

// myBind
Function.prototype.myBind = function bindd() {
  let args = Array.from(arguments);
  let context = args[0];
  args = args.slice(1);
  let that = this;

  return funct = function() {
    let moreArgs = Array.from(arguments);
    return that.apply(context, args.concat(moreArgs));
  };
};

Function.prototype.myBind2 = function bindd (...args) {
  let bindArgs = args;
  let context = args[0];
  bindArgs = bindArgs.slice(1);

  return (...args2) => {
    let callArgs = args2;
    return this.apply(context, bindArgs.concat(callArgs));
  };
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// markov.says.myBind2(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// markov.says.myBind2(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// markov.says.myBind2(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// const notMarkovSays2 = markov.says.myBind2(breakfast);
// notMarkovSays2("meow", "me");
// Breakfast says meow to me!
// true
//
// // curriestSum
function curriedSum(numArgs) {
  let numbers = [];
  let total = 0;

  const _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      numbers.forEach((n) => {total += n;});
      console.log(total);
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

// const sum = curriedSum(4);
// sum(5)(30)(20)(1);


Function.prototype.curry = function (numArgs) {
  let args = [];
  let that = this;

  const _curry = function(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      debugger;
      return that.apply(args[0], args.slice(1));
    } else {
      return _curry;
    }
  };

  return _curry;
};

const hi = markov.says.curry(3);
console.log(hi(breakfast)('meow')('me'));
//should say Breakfast says meow to me

//
//
//
//
