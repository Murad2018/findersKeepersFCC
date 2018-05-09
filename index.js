function findElement(arr, func) {
    var num ;
    num = arr.filter(func).shift();      
    return num;
  }

findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; });