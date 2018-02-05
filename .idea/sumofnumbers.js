let myList = [1, 2, 3, 4, 5];

function sumFor(list){
  let sum = 0;
    for(let i = 0; i < list.length; i++){
        sum += list[i];
    }
    return sum;
}

function sumWhile(list){
  let sum = 0;
  let i = 0;
    while(i < list.length){
        sum+= list[i];
        i++;
    }
    return sum;
}

function sumRecursion(list, sizeof){
    if(sizeof <= 0)
        return 0;
    return(sumRecursion(list, sizeof-1) + list[sizeof-1]);
}

function sumTheSimpleWay(list){
    return _.reduce(list, function(memo, num){ return memo + num; }, 0);
}

console.log(sumFor(myList));
console.log(sumWhile(myList));
console.log(sumRecursion(myList, 5));
console.log(sumTheSimpleWay(myList));