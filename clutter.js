function is_blocked(required_tasks, task_from, task_to) {
  var hashTable = {};
  for (var i = 0; i < task_to.length; i++) {
    hashTable[task_to[i]] = [task_from[i], ""];
  }

  for (var j = 0; j < required_tasks.length; j++) {

    for(var l = 0; l < required_tasks.length; l++){
      if (hashTable[required_tasks[l]] && hashTable[hashTable[required_tasks[l]][1]] === "done") {
        hashTable[required_tasks[l]][1] = "done";
      }
      if(!hashTable[required_tasks[l]]){

      }
    }
  }

  for (var k = 0; k < task_to.length; k++) {

    if(hashTable[task_to[k]][1]!='done'){
      return false;
    }
  }
  return true;

}



function is_blocked(required_tasks, task_from, task_to) {
  var hashTable = {};
  for (var i = 0; i < task_to.length; i++) {
    hashTable[task_to[i]] = [task_from[i], ""];
  }

  for (var j = 0; j < required_tasks.length; j++) {

    if (hashTable[required_tasks[j]] && hashTable[hashTable[required_tasks[j]][1]] === "done") {
      hashTable[required_tasks[j]][1] = "done";
    }

  }

  for (var k = 0; k < task_to.length; k++) {

    if(hashTable[task_to[k]][1]!='done'){
      return false;
    }
  }
  return true;

}
