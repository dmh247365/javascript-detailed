## Callbacks

Can be extremely confusing when you first start off, as they can be used for synchronous and asynchronous operations.

When used synchronously, the callback is ultimately part of the JS single thread of execution `(TOE)`, in fact we don't step out of it.

When used asynchronously, we in effect step out of the JS thread of execution, this is done by means of invoking a node API, which outside of the JS single thread goes and does its thing, then via the event loop is brought back to the JS single thread of execution.

Infact until the advent of promises they where the only way to handle asychronous operations.


#### Remember what do we mean by async operations
The whole purpose it that need the result of an operations such as getting a file etc, the operation will take sometime. We can either wait, ie handle the operations synchronously, this will however block our single threaded code from doing anything else while the operation to complete.  
Or  
We let the operation go off (away from our single thread) do its thing and get the result, in the meantime the our single thread continues with the other code, then at a later stage we bring back the result and use it.  


Callbacks key features:-
- Its used for results of asynchronous operations 
- A callback is a function
- It is passed into another function as an argument
- The callback should contain some error checking within it, and if necessary be able to generate an error object  
&nbsp;

### Example 1 - Used for asynchronous operation
   
&nbsp;

![cb-png](carbonFinal.png)

How to identify what is going on:-  

1. Line 2 is a function, how do we know?
   - it takes in arguments
   - if we howver over it with cursor, VScode will tell us it is
   - if we look up its name, on line 7 it tells us it is  
2. Into the getUser function, the final argument we pass in is a function
   - function are first class objects (they have all the features of an object)
   - getUser takes in a function thus it's a HOF (higher order function)
3. HOF also follow DRY, ie we could pass in any function as the argument to getUser.
   -  provided its 


&nbsp;
real life example of map function behind the scenes


### Example 2 - Used for synchronous operation

Remember in this script everything is done within the JS environment running in Node, that is to say we are not stepping out of it and using any Node API's thus no engagement of the `Callback queue` or the `Event loop`.


We have a simple function which 

reminder: 
1. - JS is single threaded - it runs one command at a time
2. - JS is synchronously executed - each line is run in order it appears, and each line must be completed before moving on.

Aside - the event loop is in charge of determining what function is next allowed on the call stack and thus will be ran.

Call Stack - how JS keeps track of what function is currently being ran, ie its the one that is top of the Call Stack.



&nbsp;
![cb2-svg](/svg/cb2.svg)

So walking through the code in detail:-

### Frame1
![frame1-svg](/svg/Frame1.svg)

1. The global execution context (GEC) is created by default, and is put on the base of the `Call Stack`.

2. Now because `global` is top of the Call Stack a global execution context is created, which consists of two areas, one being the JS thread of execution area and the other being the memory associated with the execution context.  
   Into global memory is loaded the variables and their values, example the variable `multiplyBy2` is loaded and its value is a function, so all the function code is loaded in.

3. The variable `result` is declared, but at this stage it has not been assigned a value so its `unitialised`.

So in summary:-
The variable on line 11 and the functions on lines 1 & 9 are loaded into the `global memory`. xxxxxxx is this hoisting??? xxxxxxx
awaiting the JS thread of execution to start.

### Frame2
![frame2-svg](/svg/Frame2.svg)

Now the JS parser starts going through the code from top to bottom, on line 11 it comes across a call to execute the `copyArrayAndManipulate` function, so the following occurs:-

1. The `copyArrayAndManipulate()` function is placed on the `Call Stack`. 

2. This then creates an execution context and populates its corresponding local memory with:-
   the variable `array`, whose value is an array of three integers and comes from the first argument passed in.
   the variable `instructions`, whose value is a function which comes from the second argument passed in (multiplyBy2 function).
   the variable `output` which is a blank array, which is derived from within the function block.


Everytime a function is executed an execution context for that function is created (FEC), which basically means it creates a local execution context and local memory allocation to store variables, parameters and function declarations.


### Frame3
![frame3-svg](/svg/Frame3.svg)


### Frame3-0
![fram3-0-svg](/svg/Frame3-0.svg)

1. - The `TOE` hits line 3 the `for statement`, and sets up a loop with three expressions (initial, conditional & increment).


### Frame3-1
![fram3-1-svg](/svg/Frame3-1.svg)

Now we enter the code block of the `for statement`.
1. - on line 4 we have an object, method & function combination. We invoke the `multiplyBy2` function, thus its placed on top of the call stack.
2. - We now create a local execution context for the function which is on top of the call stack. Into its 

### Frame3-2
![frame3-2-svg](/svg/Frame3-2.svg)

this is a challenge

### Frame3-3
![frame3-3-svg](/svg/Frame3-3.svg)

this is a challenge

### Frame3-4
![frame3-5-svg](/svg/Frame3-4.svg)

this is a challenge

### Frame3-5
![frame3-6-svg](/svg/Frame3-6.svg)

this is a challenge

### Frame4
![frame4-svg](/svg/Frame4.svg)


this is a challenge  

### Frame5
![frame5-svg](/svg/Frame5.svg)


this is a challenge  
