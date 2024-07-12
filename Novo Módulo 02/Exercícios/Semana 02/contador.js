function contador() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  let contador1 = contador();
  console.log(contador1());
  console.log(contador1()); 
  console.log(contador1()); 
  
  let contador2 = contador();
  console.log(contador2()); 
  console.log(contador2()); 
  