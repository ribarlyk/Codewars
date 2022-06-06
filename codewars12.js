function validParentheses(parens) {

    let isTrue = false;
    

    if ( parens.length >= 0 && parens.length % 2 === 0) {
        isTrue = true;
      for(let i = 0;i<parens.length;i+=2){
if(parens[i] === '('&& parens[i+1] === ')' || parens[i] === '(' && parens[i+1] === '('){
isTrue = true;
}
      
      }
    }
    return isTrue;
  
  }
console.log(validParentheses('(())'))
/*"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true*/
