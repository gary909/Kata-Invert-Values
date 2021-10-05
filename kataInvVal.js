function invert(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if(array[i] == 0) {
            arr.push(-0);
        } else {
            var temp = array[i] * -1;
            arr.push(temp);
        }
    }
    return arr;
 }

 console.log(invert([0])); // returns -1,-2,-3,-4,-5
 console.log('***********************************************'); // returns -1,-2,-3,-4,-5
 console.log(invert([1,-2,3,-4,5])); // returns -1,2,-3,4,-5 arr.push(parseInt(-array[i]));