var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
// write your code here...
var sum = Object.keys(fruit)
var total = 0;
for (sum in fruit){
    total += fruit[sum]
}
console.log(total);