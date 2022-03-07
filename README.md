# remark_slides_template

Template repository for [remark](https://www.remarkjs.com) slides.

## Using this repo.

From the GitHub web interface, click `Use this template` and follow the instructions.

## Hints

### Reusing JavaScript code

If you want to define a JavaScript function to reuse over and over:

* Define the function in its own module.
* Source it in a standalone `script` block.

### Using static graphics

It is usually best if the file is a `.png` format.
Use standard markdown syntax with relative paths to link to it: `![](path/to/file.png)`.

### Making a slideshow 100% self-contained

The `.css` files need to be brought into a `style` block:

```html
<style>

Place contents of CSS files here.

</style>
```

### Exporting slides to PDF

Use a Chrome-based browser:

```sh
brave-browser --headless --print-to-pdf slides.html
```

Caveats:

* Embedded content from [Observable](https://www.observablehq.com) will be lost.
* Nice font ligatures in code blocks are also likely lost.
* Visual artifacts may appear on some slides.
