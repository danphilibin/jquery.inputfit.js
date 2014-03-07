#jquery.inputfit.js
Plugin that makes the input fit the value or the value fit the input.
See the [demo](http://vxsx.github.io/jquery.inputfit.js/)
Plugin fits text by either changing the font-size or the width of the
input, depending on your settings. You can set min and max font-size
and width values values. If you don't specify max font-size, plugin
assumes current font-size is maximum.


Requires

*  jquery 1.6.2 or higher (why wouldn't you use latest anyway)

Default options

``` javascript
minSize    : 10
maxSize    : false
resizeType : "font-size" // or "width"
```

Using:

``` html
<input type="text" name="younameit" id="input">
<input type="text" name="younameit" id="input-width">
<script type="text/javascript">
    $('#input').inputfit();
    $('#input-width').inputfit({ resizeType: "width" });
</script>
```

Note
-------
I just needed this functionality for our company's project, it works
alright with some potential tweaking in *all* browsers (IE6+, CHR, SAF,
FF3+, O10+ etc.). Please, file an issue if something is broken, I
promise I'll look in to it)



TODO:
-----

* fix jumps in some cases


License
-------

The MIT License

Copyright (c) 2013 Vadim Sikora

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
