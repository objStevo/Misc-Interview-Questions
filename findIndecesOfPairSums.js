
var pairSumFinder = (numList ,pairSum) => {
    var pairSumList = [];
    var hashTable = {};
    
    for(i=0;i<numList.length;i++){

        if (hashTable[pairSum-numList[i]]!==undefined){

            for(j=0;j<hashTable[pairSum-numList[i]].length;j++){
                pairSumList.push([hashTable[pairSum-numList[i]][j],i]); 
            }       
        }
        if (hashTable[numList[i]]===undefined){
            hashTable[numList[i]]=[];
        }
        hashTable[numList[i]].push(i);
    }
    return pairSumList;
}


var testNumList = [1,2,4,1];
var testPairSum = 2;

console.log(pairSumFinder(testNumList,testPairSum));

