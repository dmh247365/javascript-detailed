## __proto__

The double underscore proto property, or dunda proto dunda property as its known is not to be confused with the protoype property.
It's easy to do as the JS gods have not been kind to us on the naming convention front.

Even worse in the spec of JavaScript its called `[[prototype]]`, which would be even more confusing with the `prototype` property.

Taking a step back, we create functions for tasks that we want to repeat, so if we wanted to create a number of objects we could manually create then, assigning properties and methods to each one. Say we had an application with 5,000 users, not only would this be a long laborious task, if each user where to have functionality then we would have wasted memory due to duplicated methods.

So the solution is to have a constructor function, which we can use to create our objects but also link back to for methods.
Thus not only removing method duplication but also giving us better control over functions as only one location to update if necessary.

Object.create // way to create an object that has a bond (aka link).
the argument that Object.create excepts is always what will be stored in the proto property.
-- creates a blank object
-- the blank object has a hidden property called dunda proto dunda (just called proto from now on) who's value is the link to the object whose methods/properties we want to access.
-- the proto property is hidden, but not completely in that we can see it in the chrome dev tools.

note we also have an implicit (ie automatically filled in for us) parameter called `this`.

JavaScript has its prototypal feature which basically says don't worry if you can't find the function/method on the object your currently in, I will go off up the proto and try and find it.


Object have a connection to other objects through their proto property



Demonstrating by walking through the code below

![prt1-png](png/prt1.png)

blah blah

### Frame 1
![frame1-svg](svg/Frame1.svg)


blah blah

### Frame 2
![frame2-svg](svg/Frame2.svg)


blah blah

### Frame 3
![frame3-svg](svg/Frame3.svg)

blah blah

### Frame 4
![frame4-svg](svg/Frame4.svg)

blah blah

### Frame 5
![frame5-svg](svg/Frame5.svg)

blah blah

### Frame 6
![frame6-svg](svg/Frame6.svg)



So in summary this is somewhat convoluted, in in order for us to set the dunda proto property value we have to:-  
1. - blah blah
2. - blah
3. - blah
4. - blah
5. - blah


Surely there is a better way??????

The JavaScript gods have given us the `new` keyword...


