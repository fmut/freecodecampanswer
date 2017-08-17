function pairwise(arr, arg) {
 var sum = 0;
 var pairArr = arr.slice();

 for(ex1 = 0; ex1 < pairArr.length; ex1++) {
   for(ex2 = ex1 + 1; ex2 < pairArr.length; ex2++) {
     if(pairArr[ex1] + pairArr[ex2] == arg) {
       sum += ex1 + ex2;
       pairArr[ex1] = pairArr[ex2] = NaN;
     }
   }
 }
 return sum;
}

// test here
pairwise([1,4,2,3,0,5], 7);
