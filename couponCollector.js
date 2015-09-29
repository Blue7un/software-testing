/**
 * Created by Hà on 29/09/2015.
 */
function couponCollector(number) {
    var collected = [];

    for(var i=0; i < number; i++) {
        collected[i] = false;
    }

    var iteration = 0, unique = 0;
    var random;
    while(unique < number) {
        random = Math.floor(number * Math.random());
        if(!collected[random]) {
            unique++;
            collected[random] = true;
        }
        iteration++;
    }
    return iteration;
}


