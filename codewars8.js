function toCamelCase(str){ 
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
      let letter = arr[i];
      if(letter == '_' || letter == '-') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        arr[i] = '';
      } 
    }
    return arr.join('');
  }
console.log(toCamelCase("the-stealth-warrior"))
toCamelCase("The-stealth-warrior")