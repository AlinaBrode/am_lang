# Operations

## First column (summary)
* arithmetic operators: + - / * %
* logical operators: || && !
* bitwise operations: | & ^ ~

## Second column (text)

In order to solve problems of the real world it is necessary to perform operations on numbers. In JS one can use "*" for multiplication, "/" for division and "+", "-" for summation and subtraction correspondingly. Try to open console in your browser and put there expressions like 2*2, 5-3, 8/4, 6*6. In C++ and Python there are some tricky rules to determine the result of non-integer fraction. In JS such results are floating point numbers. If you want to round them, you have to use Math.ceil or Math.floor functions.

To write complex programs which make non-trivial decisions one should combine simple logical statements into much more complex constructions. For instance, if we want to detect a situation when x is either too small, or too big we are to combine (x < 4) statement with the (x > 7). Each of these statements has the boolean type. In order to combine simple boolean expressions into a complex one, we use logical operators: "||" - or, "&&" - and, "!" - not. Therefore, our expression can be written as (x < 4) or (x > 7).

If you want to pack data into a variable and work on bit level bitwise operations "|", "&", "^" are handy. It's quite a hi-level trick and you will not use this every day, but sometimes these operations can save your day.

## Third column (picture)

operators_on_the_wall.webp
