var func = function () {
    console.log('hello');
}

func;

var duc = { 'something': 'seomthing' };

console.log('hasOwnProperty' in duc);


var s = "PubSub.subscribe(\"cc_salesman_intspinswipe\", handleGlobalIntSpinSwipe);"
var i = s.indexOf('PubSub.subscribe(')+17;
console.log(s.slice(i, s.indexOf(',')).replace(/"/g,""));
