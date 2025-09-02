29 aug 2025
# Operators

## First column (summary)
* React simulator of three variable swap
* [Link](https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/) to try
* svg for align circles

## Second column (text)

In previous posts we discussed a famous problem of swapping two values of two variables. Here we present a [simulator](https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/) of this task. There are three circles - variables. Colors of circles are values of variables. There are six buttons which cover six possible asssignments: a=b, b=a, b=t, t=b, a=t, t=a. When one presses a button, corresponding assignment occurs and it is immediately visible.

We used React to create this application, Vue to build it. The were a few interesting moments and we are going to share them later. Let's start with the problem: how to arrange three circles in vertices of equilateral triangle?

There are several possible approaches:
* grid and set sizes of cells - pro: easy, cons: not straightforward and probably approximate
* canvas - pro: one can use coordinates and therefore make exact arrangement, cons: elements are not clicable, it is a raster element
* svg - pro: coordinates, elements are clickable, concise code
So, we decided to use this approach and you can check the [code](https://github.com/AlinaBrode/js_snippets_blog/blob/76e15ef2cfc35e148ac9b27a78d08adbdcfb8a56/swap_abt_simple/src/App.tsx#L20)
That's it for today, later we will tell you how exactly this technology works.


## Third column (picture)
crane_swap.webp
