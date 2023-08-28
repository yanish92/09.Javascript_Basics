// 5. Explain the concept of "closures" in JavaScript and provide an example of their practical use.
function counter() {
    let count = 5; 
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counterInstance = counter();
  counterInstance.increment();
  counterInstance.increment();
  console.log(counterInstance.getCount()); 
  