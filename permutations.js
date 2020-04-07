function aFunction(replaced, val){
    let output = [];
    for(a = 0; a < replaced.length; a++){
        for (b = 0; b <= replaced[a].length; b++){
            let toAdd = replaced[a].slice(0, b).concat(val).concat(replaced[a].slice(b));
            if(!output.includes(toAdd)){
                output.push(toAdd);
            }
        }//end for b
    }//end for a
    return output;
}//end aFunction()
    
    
function perm(aString){
    let anArray = [];     
    if ((typeof aString) == 'string'){
        anArray = aString.split("");
    }else{
        anArray = aString;
    }
    if(anArray.length == 1){
        return anArray;
    }
    for(i = 0; i < anArray.length; i++){
        let aValue = anArray[i];
        let subArray = anArray.slice(0, i).concat(anArray.slice(i + 1));
        let returned = perm(subArray);
        someOutput = aFunction(returned, aValue);
        return someOutput;
    }//end for i
    return someOutput;
}//end perm()

console.log(perm('abab'));
