module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  
  let stack = [];
  let flag = false;
  let num;
  for ( let i = 0; i < arr.length; i++ ) {//look all str el
    // console.log('i = ' + i);

    for ( var j = 0; j < bracketsConfig.length; j++ ){ //compare with Config
      //console.log('j = ' + j);
      //console.log('look' + arr[i]+' '+ bracketsConfig[j][0]);
      
      if ( arr[i] == bracketsConfig[j][0] && stack[0]!= arr[i] ) {//check for ( [ && not equal
        flag = true;
        num = j;
        //console.log('flag true');
      }
    } 
    if (flag)  {
     // console.log(num);
      //console.log('unshift ' + bracketsConfig[num][1]);
        
        stack.unshift(bracketsConfig[num][1]); 
        //console.log('stack = ' + stack);
    } else {
        if (arr[i] === stack[0] ) {//if )]
          //console.log('shift ' + arr[i] + '&' + stack[0] );
          stack.shift();
         // console.log('stack = ' + stack);
        } else {
          return false;
        }
      }

      flag = false;
      num = 0;
      //console.log('flag false');

  }
    if (stack == '' ) { 
      return true;
    } else { 
      return false;
    }

}
