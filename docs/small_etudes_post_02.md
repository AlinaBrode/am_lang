# Hoisting

## First column (summary)
* Hoisting moves variable declaraions up to the top of their scope
* for var variable is accessible before its declaration (value is undefined)
* for let and const variable is inaccessible before it is declared
* TDZ - Temporal Dead Zone - patch to ensure this behavior

## Second column (text)
In some programming languages like C++, Java and Go it's just impossible to use a variable before it was declared.
JS performs two scans of .js file. It starts with executing all variable declarations in the first run. In the second
run it executes the whole program. This leads to "hoisting" - "lifting up" all declarations. Therefore  [program](https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/trap.js) executes and shows "undefined" value for the variable. It looks tricky and Temporal Dead Zone
was introduced to fix this issue. For [let](https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/let.js) and [const](https://github.com/AlinaBrode/js_snippets_blog/blob/main/hoisting/const.js) there will be an error and it is much more predictable scenario.

