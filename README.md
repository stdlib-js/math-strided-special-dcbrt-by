<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# dcbrtBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [cube root][@stdlib/math/base/special/cbrt] of each element retrieved from a double-precision floating-point strided array via a callback function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-strided-special-dcbrt-by
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var dcbrtBy = require( '@stdlib/math-strided-special-dcbrt-by' );
```

#### dcbrtBy( N, x, strideX, y, strideY, clbk\[, thisArg] )

Computes the [cube root][@stdlib/math/base/special/cbrt] of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy( x.length, x, 1, out, 1, accessor );
// out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float64Array`][@stdlib/array/float64].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float64Array`][@stdlib/array/float64].
-   **strideY**: index increment for `y`.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback function is provided four arguments:

-   **value**: input array element.
-   **idx**: iteration index (zero-based).
-   **indices**: input and output array strided indices `[ix, iy]` (computed according to `offset + idx*stride`).
-   **arrays**: input and output arrays `[x, y]`.

To set the callback execution context, provide a `thisArg`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function accessor( v ) {
    this.count += 1;
    return v;
}

var context = {
    'count': 0
};

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy( x.length, x, 1, out, 1, accessor, context );
// out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]

var cnt = context.count;
// returns 5
```

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0, -9.14 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy( 3, x, 2, out, -1, accessor );
// out => <Float64Array>[ -5.0, -3.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float64] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function accessor( v ) {
    return v;
}

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0, -9.14 ] );
var out0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*3 ); // start at 4th element

dcbrtBy( 3, x1, -2, out1, 1, accessor );
// out0 => <Float64Array>[ 0.0, 0.0, 0.0, ~-2.091, ~4.327, ~2.08 ]
```

#### dcbrtBy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, clbk\[, thisArg] )

Computes the [cube root][@stdlib/math/base/special/cbrt] of each element retrieved from an input double-precision floating-point strided array via a callback function and assigns each result to an element in an output double-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy.ndarray( x.length, x, 1, 0, out, 1, 0, accessor );
// out => <Float64Array>[ 1.0, ~2.08, -3.0, ~4.327, -5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float64] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

function accessor( v ) {
    return v;
}

var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0, -9.14 ] );
var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dcbrtBy.ndarray( 3, x, 2, 1, out, -1, out.length-1, accessor );
// out => <Float64Array>[ 0.0, 0.0, 0.0, ~-2.091, ~4.327, ~2.08 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.

    ```javascript
    var Float64Array = require( '@stdlib/array-float64' );

    function accessor() {
        // No-op...
    }

    var x = new Float64Array( [ 1.0, 9.0, -27.0, 81.0, -125.0 ] );
    var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

    dcbrtBy( x.length, x, 1, out, 1, accessor );
    // out => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random-base-uniform' ).factory;
var filledarray = require( '@stdlib/array-filled' );
var filledarrayBy = require( '@stdlib/array-filled-by' );
var dcbrtBy = require( '@stdlib/math-strided-special-dcbrt-by' );

function accessor( v, i ) {
    if ( (i%3) === 0 ) {
        // Simulate a "missing" value...
        return;
    }
    return v;
}

var x = filledarrayBy( 10, 'float64', uniform( -10.0, 10.0 ) );
console.log( x );

var out = filledarray( null, 10, 'float64' );
console.log( out );

dcbrtBy.ndarray( x.length, x, 1, 0, out, -1, out.length-1, accessor );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-strided/special/cbrt`][@stdlib/math/strided/special/cbrt]</span><span class="delimiter">: </span><span class="description">compute the cube root of each element in a strided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-strided-special-dcbrt-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-strided-special-dcbrt-by

[test-image]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-strided-special-dcbrt-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-strided-special-dcbrt-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-strided-special-dcbrt-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-strided-special-dcbrt-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-strided-special-dcbrt-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-strided-special-dcbrt-by/main/LICENSE

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math-base-special-cbrt

<!-- <related-links> -->

[@stdlib/math/strided/special/cbrt]: https://github.com/stdlib-js/math-strided-special-cbrt

<!-- </related-links> -->

</section>

<!-- /.links -->
