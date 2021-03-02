## Closures

Think of closures as `closed over variable environment`.

JavaScript is lexically (aka statically) scoped. Which means when a function is defined (ie where it is written), it gets a hidden property called `[[ scope ]]` that references the `local Memory` (ie variable environment - proper name) where the function has been defined, thus determining the available variables.

So basically when a function is defined inside another function the inner function via `[[scope]]` gets access to the outer functions `local Memory` in regards of any variables its going to need.


So using below we can see this in action:-

![cl1-png](png/cl1.png)


Taking the 10,000 foot view of above, it can be seen that the:-
1. - `outer` function is a `HOF` higher order function, in that it returns another function `incrementCounter`.
2. - `incrementCounter` function needs the `counter` variable as it increments it, hmmmmmm. guess it just looks up the scope chain...... WRONG - 
3. - On line 9, we invoke `outer` function, which returns the inner function `incrementCounter` and assigns it to the variable `myNewFunction`, so if we then created a new line and invoked `myNewFunction` then if we were solely reliant upon the prototypal chain then we would look up the stack, the next execution context is `global`. It can be seen that `counter` is not defined there, so it would fail, it doesn't so what is going on?.

The answer is its down to our `closed over variable environment` ie `closure`.

So the order is 
a. - look in our functions local memory, if not there then
b. - look in its `backpack` if not there then
c. - look up the call stack 


repeating again... as its important:-  

When a function is defined, it gets a hidden property called `[[ scope ]]` that references  `local Memory` (ie variable environment - proper name) in which it, the function has been defined.

So basically when a function is defined inside another function the inner function via `[[scope]]` gets access to the outer functions `local Memory` in regards of any variables its going to need, in our case `counter`.


so with `closure` our functions get `memories`, which we can use for:-
1. - once - ie we want the function to run once, so now we have that ability
2. ie memoize - ie we can info in the `backpack` so we don't have to run the function again, ie 1000's prime etc.





Lexical scope

The Function is popped off the call stack and prior to the local Memory data being garbage collected,JS goes 'oh no' another function needs access to this data, so I need to store it in the backpack, but only data that is referenced, anything that is not later required is garbage collected.


