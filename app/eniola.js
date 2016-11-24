

function aritGeo(arr) {
    var minRatio = 1/0,
        maxRatio = -1/0,
        minDiff  = 1/0,
        maxDiff  = -1/0,

        //this ensures and corrects float inaccuracy
        floatCorrectorCheck  = 0.0001,
        i,
        ratio,
        diff;

    if (arr.length == 0) {
        return arr.length ;
    }

    //for each iteration check if min and max diff or ratio is constant
    for (i = 1; i < arr.length; ++i) {
        diff  = arr[i] - arr[i - 1];
        ratio = arr[i] / arr[i - 1];
        minDiff  = Math.min(diff, minDiff);
        maxDiff  = Math.max(diff, maxDiff);
        minRatio = Math.min(ratio, minRatio);
        maxRatio = Math.max(ratio, maxRatio);
    }

    if (Math.abs(minDiff - maxDiff) < floatCorrectorCheck) {
        return "Arithmetic";
    }

    if (Math.abs(minRatio - maxRatio) < floatCorrectorCheck) {
        return "Geometric";
    }

    return -1;
}

function findMinMax(arr) {
  var minRatio = 1/0,
      maxRatio = -1/0,
      min  = 1/0,
      max  = -1/0,

      min  = arr[0];
      max = arr[0];
  for (i = 1; i < arr.length; ++i) {

      min  = Math.min(min, arr[i]);
      max  = Math.max(max, arr[i]);

  }
  if(min == max){
      return [min];
  }else{
    return [min,max];
  }

}



function fizzBuzz(number){
  fizz = number%3;
  buzz = number%5;

  if(fizz == 0 && buzz == 0){
    return "FizzBuzz";
  }
  if(fizz == 0){
    return "Fizz";
  }

  if(buzz == 0){
    return "Buzz";
  }

  return number;


}
