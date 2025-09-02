5 sep 2025
# Three-variable swap simulator

## First column (summary)
* React simulator of three-variable swap
* [Link](https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/) to try
* SVG to align circles

## Second column (text)

In previous posts we discussed the famous problem of swapping the values of two variables. Here we present a [simulator](https://alinabrode.github.io/js_snippets_blog/swap_abt_simple/) for three variables. Three circles represent variables, and their colors show the values. Six buttons cover the assignments a=b, b=a, b=t, t=b, a=t and t=a. Press a button and the assignment happens immediately.

We used React to create this application and Vite to build it. There were a few interesting points, which we will share later. Let's start with the problem: how to arrange three circles at the vertices of an equilateral triangle?

There are several possible approaches:
* Grid with fixed cell sizes — pros: easy; cons: not straightforward and probably approximate
* Canvas — pros: allows exact coordinates; cons: elements are not clickable and the canvas is raster
* SVG — pros: coordinates, clickable elements, concise code
So we went with SVG. You can check the [code](https://github.com/AlinaBrode/js_snippets_blog/blob/76e15ef2cfc35e148ac9b27a78d08adbdcfb8a56/swap_abt_simple/src/App.tsx#L20).
That's it for today; later we will explain how this technology works.


## Third column (picture)
crane_swap.webp
