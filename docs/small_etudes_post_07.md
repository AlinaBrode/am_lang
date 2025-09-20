20 sep 2025
# XOR operation

## First column (summary)
* Bitwise XOR combines two numbers into a third
* Useful identity: a ^ b ^ a = b
* Common notations: ⊕, ^, xor; on bits it is “sum mod 2” (either A or B, not both)
* Properties: associative (a^(b^c)=(a^b)^c), commutative (a^b=b^a), self-inverse (x^a^a=x)
* [Wikipedia](https://en.wikipedia.org/wiki/Exclusive_or)

## Second column (text)

[Earlier](https://am-lang.web.app/en/small_etudes/swap-simulator) we mentioned a slightly “mystical” way of swapping two values using the XOR operator. To explain this mystery, we first [introduced](https://am-lang.web.app/en/small_etudes/binary-base-2) the binary system and a conversion table between base‑2 and base‑10. Now let’s master the XOR operation itself.

It is a very useful operation, which is why it has several notations: ⊕, ^, xor. On single bits it behaves like “sum mod 2”: the result is 0 when the arguments are equal and 1 when they are different. The truth table for two bits is 0110.

The most interesting part for us is that we can combine whole numbers using the bitwise version of this operation. “Bitwise” means we take the binary representation of two integers, apply XOR to each pair of corresponding bits, and collect the result back into a number.

Example: compute 5 ^ 3. In binary: 101 ^ 011. Column‑wise: 1^0=1, 0^1=1, 1^1=0 → 110, which is 6. Try it in a browser console: console.log(5 ^ 3).

Using this logic, we can build the 8×8 XOR table for values 0…7:

|   | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| 1 | 1 | 0 | 3 | 2 | 5 | 4 | 7 | 6 |
| 2 | 2 | 3 | 0 | 1 | 6 | 7 | 4 | 5 |
| 3 | 3 | 2 | 1 | 0 | 7 | 6 | 5 | 4 |
| 4 | 4 | 5 | 6 | 7 | 0 | 1 | 2 | 3 |
| 5 | 5 | 4 | 7 | 6 | 1 | 0 | 3 | 2 |
| 6 | 6 | 7 | 4 | 5 | 2 | 3 | 0 | 1 |
| 7 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |

Let’s check the classic XOR‑swap algorithm using this table. Let a = 5, b = 4. Trace the values after each assignment:

```
a = a ^ b  // a = 5 ^ 4 = 1, b = 4
b = a ^ b  // a = 1, b = 1 ^ 4 = 5
a = a ^ b  // a = 1 ^ 5 = 4, b = 5
```

We can see the algorithm works; the values are swapped without a temporary variable.


## Third column (picture)
xor_operation.webp
