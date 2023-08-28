// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?
const me = {
    getName: function() {
      return "yanish";
    }
  };
  
  const name = me.getName?.();
  console.log(name);