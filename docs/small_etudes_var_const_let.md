# Let, const and var

## Long version
Keywords var, let, const allow one to create a new variable and to give it an initial value. var is an old construction and is obsolete now. In order to create a variable with a constant value one should use "const". With changing value - let. You are to be aware of "Primitive" or "Object" nature of your value. const a = 5 totally forbids to change anything becuase 5 is a primitive type and statement "value 5 is stored in variable a" is valid. But const b = [5] forbids something like b = [6], but allows to change values in the array, like b[0] = 777. It is because the value of b is the reference to an array and we use this variable for reading the value and later access through index.

## Short version
* var - old, depricated
* let, const - modern
* let: modification of a value
* const: modification of value is prohibited
* const + primitive = nothing can be changed
* const + Object = no new object, current object can be changed