console.log('Question 1');
var wineGrapes = []; //empty array
wineGrapes.push("Cabernet Sauvignon", "Syrah", "Merlot", "Grenache");
console.log(wineGrapes);

console.log('Question 2');
var wineGrapes = ['Cabernet Sauvignon', 'Syrah', 'Merlot', 'Grenache'];
wineGrapes.unshift('Cabernet Franc');
console.log(wineGrapes);

console.log('Question 3');
var newWineGrapes = wineGrapes.splice(1, 2);
console.log(newWineGrapes);

console.log('Question 4');
var newWineGrapes = ['Cabernet Sauvignon', 'Syrah'];
newWineGrapes.splice(2,0,'Zinfandel','Chardonnay');
console.log(newWineGrapes);

console.log('Question 5');
console.log('The current length of the array is ' + newWineGrapes.length);

console.log('Question 6');
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
things[2] = 'keyboard';
console.log(things);

console.log('Question 7');
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
var joinThings = things.join();
console.log(joinThings);

console.log('Question 8');//didnt work-came out with 4
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
var lastItem = [things.pop(), things.push()];
console.log(lastItem);
lastItem.push('pencil');
lastItem.pop('eraser');
console.log(lastItem);


console.log('Question 17');
//Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"];
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"];
var array3 = ["White", "Black", "Spotted", "Tri-color"];
var array4 = [array1, array2, array3];
console.log(array4);

console.log('Question 18');
array1.pop();//there's only 1 array1 this is looking at array1 via array4.
array3.shift();//there's only 1 array3 this is looking at array1 via array4.
console.log(array4);

var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
// Goal:
var array2 = ['plant', 17, 2, 'Bill', 'dog'];

array2 = array1;

console.log('equal', array1 === array2);
