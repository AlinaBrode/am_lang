29 aug 2025
# Operators

## First column (summary)
* arithmetic operators: + - * / %
* logical operators: || && !
* bitwise operators: | & ^ ~

## Second column (text)

To solve real-world problems, we must perform operations on numbers. In JS we use "*" for multiplication, "/" for division and "+", "-" for addition and subtraction respectively. Open the console in your browser and enter expressions like 2*2, 5-3, 8/4, 6*6. In C++ and Python there are tricky rules to determine the result of a non-integer division. In JS such results are floating-point numbers. If you want to round them, use Math.ceil or Math.floor functions.

To write complex programs that make non-trivial decisions, we combine simple logical statements into more complex constructions. For instance, if we want to detect when x is either too small or too big, we combine (x < 4) with (x > 7). Each of these statements has the boolean type. To combine simple boolean expressions into a complex one, we use logical operators: "||" - or, "&&" - and, "!" - not. Therefore, our expression can be written as (x < 4) || (x > 7).

If you want to pack data into a variable and work on the bit level, bitwise operators "|", "&", "^", "~" are handy. It's quite a high-level trick and you will not use it every day, but sometimes these operations can save the day.

## Third column (picture)

operators_on_the_wall.webp
