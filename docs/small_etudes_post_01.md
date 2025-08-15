15 aug 2025
# Let, var, const

## First column (conspect)
* var – old, deprecated
* let, const – modern
* let: value can change
* const: value can't be reassigned
* const + primitive = nothing can be changed
* const + Object = no new object; existing object can change

## Second column (text)
Keywords **var**, **let**, and **const** let you create a new variable and give it an initial value. `var` is an old construction and is now obsolete. To create a variable with a constant value, use `const`. For a variable whose value changes, use `let`. Be aware whether your value is a *Primitive* or an *Object*. `const a = 5` completely forbids any change because `5` is a primitive type and the statement "value `5` is stored in variable `a`" remains true. But `const b = [5]` forbids writing `b = [6]` yet allows changing the array’s elements, like `b[0] = 777`. That's because the value of `b` is a reference to an array; we use this variable to read the reference and then access the array by index.

## Third column (picture)
let_var_const_musketeers.webp
