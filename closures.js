export function parent() {
    const message = 'Hello World Closure';
 
    function child() {
       alert (message);
    }
 
    return child;
 }