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

# Arccoversine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Compute the [inverse coversed sine][inverse-coversed-sine].

<section class="intro">

The [inverse coversed sine][inverse-coversed-sine] is defined as

<!-- <equation class="equation" label="eq:arccoversine" align="center" raw="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" alt="Inverse coversed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" data-equation="eq:arccoversine">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/special/acoversin/docs/img/equation_arccoversine.svg" alt="Inverse coversed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-acoversin
```

</section>

<section class="usage">

## Usage

```javascript
var acoversin = require( '@stdlib/math-base-special-acoversin' );
```

#### acoversin( x )

Computes the [inverse coversed sine][inverse-coversed-sine].

```javascript
var v = acoversin( 0.0 );
// returns ~1.5708

v = acoversin( 3.141592653589793/2.0 );
// returns ~-0.6075

v = acoversin( 3.141592653589793/6.0 );
// returns ~0.4966
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = acoversin( -1.0 );
// returns NaN

v = acoversin( 3.14 );
// returns NaN

v = acoversin( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-linspace' );
var acoversin = require( '@stdlib/math-base-special-acoversin' );

var x = linspace( 0.0, 2.0, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
    console.log( acoversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-acoversin.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-acoversin

[test-image]: https://github.com/stdlib-js/math-base-special-acoversin/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-acoversin/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-acoversin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-acoversin?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-acoversin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-acoversin/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-acoversin/main/LICENSE

[inverse-coversed-sine]: https://en.wikipedia.org/wiki/Versine

</section>

<!-- /.links -->
