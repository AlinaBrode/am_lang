20 sep 2025
# The Proof of swap 

## First column (summary)
* With initial values a0 and b0 one can strictly proof that XOR algorithm of swap is correct

## Second column (text)

[Earlier](https://am-lang.web.app/ru/small_etudes/xor) we demonstrated that swap algorithm with XOR works. We used XOR table and checked example. It's a demonstration, nor a rigorous proof. Today let's try to explain how this solution works in a slightly more strict way.

First of all, let's check how operation a ^ b works. First, we write down "a" in binary form. Then we don't touch digits, where "0" in "b". But what's with digits, corresponding to "1" in "b"? We invert them. So, when we perform operation a^b^b we invert the same bits twice. The result is very simple and intuitive: everything is as it was before. Therefore a^b^b = a.

Now let us assume that in variables a and b there are initial values a0 and b0:
let a = a0, b = b0;

After the first step, a = a^b:
a = a0^b0, b = b0

Second step, b = a ^ b:
a = a0^b0, b = b0 ^ (a0 ^ b0)
but now we can use magical property of xor and cancel out b0, so a = a0^b0, b = a0

And the last step, a = a ^ b
a = a0^b0^a0, b = a0
again, after simplification we have a = b0,b = a0

One can see that values are swapped and this time we considered the common case and provided the strict proof that this method always works.

## Third column (picture)
strict_proof.webp
