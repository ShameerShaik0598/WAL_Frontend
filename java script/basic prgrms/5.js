let ar = [9, 10, 45, 78, 34, 15];
let result = ar.map(function(element)
{
if (element < 10) return element + 5;
if (element >= 21 && element <= 30) return element + 7;
if (element > 30) return element + 10;
else return element;
});
console.log(result);
