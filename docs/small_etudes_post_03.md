# Swap two values

## First column (summary)
* swap(a, b) - takes value from a and places to b, value from b goes to a
* common approach - to use three variables
* tricky - two variables are enough

## Second column (text)
So far we have just discussed placing values into variables and it seems like nothing exciting can be done here. But here comes a famous question: how to swap values of two variables? It is an important part of sorting algorithms. Try to thing about it. You have two variables:
```
let a = 5, b = 8;
...
console.log("a=", a, "b=", b);
```
your task is to place a code instead of ..., so output is: a=8, b=5. Of course, you are to make the solution generic and use assignments between variables. Note that statements like a = b or b = a immediately ruin your game because after them one of values is gone. You can avoid this pifall by introducing the third variable. Try to write your own program and test it in the console of your browser.

The code you got is a famous "swap" function one can find in libraries. The harder and not so well-known problem is how to swap values without introducing the third variable. Here you can think about other operations beside the pure assignment.

If you get stuck, you can check answers on our github page: [three](https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_three.js), [minus](https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_minus.js) and [xor](https://github.com/AlinaBrode/js_snippets_blog/blob/main/swap/swap_xor.js).

Also you can play in our swap simulator "ref".

## Third column (picture)