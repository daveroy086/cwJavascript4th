function rangeExtraction(arr) {
     
    let outputArray = [];
    let inASequence = false;
    let firstNumberInSequence = -Infinity;
    let endOfSequence = Infinity;

    for(let i = 0; i < arr.length; i++) {

        if(!inASequence){    // is lone element or beginning of sequence
            if((arr[i + 1] == arr[i] + 1) && (arr[i + 2] == arr[i] + 2)) {
                // is beginning of sequence
                firstNumberInSequence = arr[i];
                inASequence = true;
            } else {    // is lone element
                outputArray.push(arr[i].toString());
            } 
        } else {    // in a sequence
            if((arr[i + 1] > arr[i] + 1) || (i == arr.length - 1)) {
                endOfSequence = arr[i];
                outputArray.push(firstNumberInSequence.toString() + '-' + endOfSequence.toString());
                firstNumberInSequence = -Infinity;
                endOfSequence = Infinity;
                inASequence = false;
            }
        }

    }    // end for
    return outputArray;    // add '.join() to output a string        
    
}    // end rangeExtraction