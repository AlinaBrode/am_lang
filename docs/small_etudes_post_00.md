# Variables, types

## First column (conspect)
* DEF type is a way of interpreting values in computer memory
* JS types: 
  * Primitive: Number, String, Boolean, Undefined, Null
    * "There is a value in a variable" - OK
  * NonPrimitive (Reference): Object, Array, Function
    * "There is a reference in a variable"

```
let a = 5;
let b = a;
b = 8;
console.log(a,b)
```
5, 8

```
let a=[5];
let b=a;
b[0] = 8;
console.log(a, b)
```

[8], [8]


## Second column (text)
The memory of a computer contains zeroes and ones. In order to perform calculations, draw pictures and send messages, we are to attribute some sense to zeroes and ones. Bit is either zero or one. Eight bits is one byte. Groups of bytes can store characters, numbers, true or false values etc. Type tolds us what sense we put into a group of bites.

There are primitive types in Java Script: Number, String, Boolean, Undefined, Null. When we work with them, one can say "The value is in a variable" and results of operations are predictable. "a=b" one can read as "we take a value from b, and a copy of it we place into a"

Also there are NonPrimitive types like Object, Array, Function. In this case a variable contains the reference to an object which is somewhere in the memmory of a computer. "a=b" should be readed as "now 'a' references to the same object as 'b'" and, therefore when we make changes through 'b' value of 'a' is also affected.


## Third column (picture)
primitive_reference.webp

