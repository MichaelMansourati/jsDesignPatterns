exports.hello = function() {
  return "Hello";
}

exports.callThisFunction = () => {
  console.log("you're calling a function within mymodule.js");
}

exports.literally_just_x = 'x'

exports.this = this.literally_just_x // why am I like this

// console.log('exports: ', exports);

// console.log('module: ' + exports.hello);