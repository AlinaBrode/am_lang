15 sep 2025
# Base-2 representation

## First column (summary)
* Number can be written in binary format
* [wiki](https://en.wikipedia.org/wiki/Binary_number)

## Second column (text)

In [one of the previous posts](https://am-lang.web.app/ru/small_etudes/swap) we discussed the solution for the "swap two values within three variables" problem which uses "xor" operator. Here I want to do one step back in order to explain what is going on in this approach. I'm not going to describe here in details, how positional representation of number with base 2 works, one can read wiki. But I want to highlight main ideas:
* every number can be written as a sequence of "0" and "1" digits
* we can convert binary representation into decimal and back

If we want to convert a binary number into decimal, we are to sum up 0s and 1s with their weights. From right to left they are: 1 2 4 8 16 and so on. Let's check: 101 = 1 * 4 + 0 * 2 + 1 * 1 = 5; 011 = 0 * 4 + 1 * 2 + 1 * 1 = 3.

This way we can build a table:

| binary | decimal |
| - | - |
| 000 | 0 |
| 001 | 1 |
| 010 | 2 |
| 011 | 3 |
| 100 | 4 |
| 101 | 5 |
| 110 | 6 |
| 111 | 7 |

If we want to convert from decimal to binary, we can find our decimal number in the right column of this table and take the binary representation from the left column in the same row.


## Third column (picture)
binary.webp
