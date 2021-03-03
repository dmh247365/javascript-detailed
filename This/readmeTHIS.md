## This

Makes sense when you understand whats it does.

Firstly we need to be aware that his behaves differently between `strict` and `non-strict` mode.

Most of the time the value of `this` is determined by how the function is called (runtime binding).

We do have some caveats in that:-
1. the `bind()` method can be used to set the value of `this` irrespective of how its called.

2. ES2015 introduced `arrow functions` which don't have their own `this` binding, instead it retains the `this` value of the enclosing lexical content).






It all depends how you call the function in question.

`this` is set to the object on which the function/method is being called, ie the right hands side of the dot.

