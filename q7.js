// 7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

// Shallow Copy:
const original = { a: 1, b: { c: 2 } };

const shallowCopy = Object.assign({}, original);

shallowCopy.b.c = 3;
console.log(original.b.c);

// Deep Copy:
function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(item => deepCopy(item));
    }
    
    const copy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
}

const original1 = { a: 1, b: { c: 2 } };
const deepCopied = deepCopy(original1);

deepCopied.b.c = 3;
console.log(original1.b.c);

//  Reference Copy:
const original2 = { a: 1, b: { c: 2 } };
const referenceCopy = original2;

referenceCopy.b.c = 3;
console.log(original2.b.c); 