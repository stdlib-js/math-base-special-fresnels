<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# fresnels

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [Fresnel integral][fresnel-integral] S(x).

<section class="intro">

The [Fresnel integral][fresnel-integral] S(x) is defined as

<!-- <equation class="equation" label="eq:fresnel_integral" align="center" raw="S(x) = \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." alt="Fresnel integral S(x)"> -->

<div class="equation" align="center" data-raw-text="S(x) = \int_0^x \sin\left(\frac{\pi}{2} t^2\right)\,\mathrm{d}t." data-equation="eq:fresnel_integral">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/fresnels/docs/img/equation_fresnel_integral.svg" alt="Fresnel integral S(x)">
    <br>
</div>

<!-- </equation> -->

Some sources define S(x) using t<sup>2</sup> for the argument of the sine. To get this function, multiply the computed integral by `√(π/2)` and multiply the argument `x` by `√(2/π)`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-fresnels
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var fresnels = require( '@stdlib/math-base-special-fresnels' );
```

#### fresnels( x )

Computes the [Fresnel integral][fresnel-integral] S(x).

```javascript
var v = fresnels( 0.0 );
// returns ~0.0

v = fresnels( 1.0 );
// returns ~0.438

v = fresnels( Infinity );
// returns ~0.5

v = fresnels( -Infinity );
// returns ~-0.5

v = fresnels( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var fresnels = require( '@stdlib/math-base-special-fresnels' );

var x = linspace( 0.0, 10.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( fresnels( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/fresnel`][@stdlib/math/base/special/fresnel]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integrals S(x) and C(x).</span>
-   <span class="package-name">[`@stdlib/math/base/special/fresnelc`][@stdlib/math/base/special/fresnelc]</span><span class="delimiter">: </span><span class="description">compute the Fresnel integral C(x).</span>

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

## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-fresnels.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-fresnels

[test-image]: https://github.com/stdlib-js/math-base-special-fresnels/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-fresnels/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-fresnels/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-fresnels?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-fresnels.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-fresnels/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-fresnels/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-fresnels/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-fresnels/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-fresnels/blob/main/branches.md

[fresnel-integral]: https://en.wikipedia.org/wiki/Fresnel_integral

<!-- <related-links> -->

[@stdlib/math/base/special/fresnel]: https://github.com/stdlib-js/math-base-special-fresnel

[@stdlib/math/base/special/fresnelc]: https://github.com/stdlib-js/math-base-special-fresnelc

<!-- </related-links> -->

</section>

<!-- /.links -->
