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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Arccoversine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [inverse coversed sine][inverse-coversed-sine].

<section class="intro">

The [inverse coversed sine][inverse-coversed-sine] is defined as

<!-- <equation class="equation" label="eq:arccoversine" align="center" raw="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" alt="Inverse coversed sine."> -->

```math
\mathop{\mathrm{acoversin}}(\theta) = \arcsin(1-\theta)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{acoversin}(\theta) = \arcsin(1-\theta)" data-equation="eq:arccoversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/acoversin/docs/img/equation_arccoversine.svg" alt="Inverse coversed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import acoversin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-acoversin@deno/mod.js';
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
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@deno/mod.js';
import acoversin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-acoversin@deno/mod.js';

var x = linspace( 0.0, 2.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( acoversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/acovercos`][@stdlib/math/base/special/acovercos]</span><span class="delimiter">: </span><span class="description">compute the inverse coversed cosine.</span>
-   <span class="package-name">[`@stdlib/math-base/special/aversin`][@stdlib/math/base/special/aversin]</span><span class="delimiter">: </span><span class="description">compute the inverse versed sine.</span>
-   <span class="package-name">[`@stdlib/math-base/special/coversin`][@stdlib/math/base/special/coversin]</span><span class="delimiter">: </span><span class="description">compute the coversed sine.</span>
-   <span class="package-name">[`@stdlib/math-base/special/versin`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-acoversin.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-acoversin

[test-image]: https://github.com/stdlib-js/math-base-special-acoversin/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-acoversin/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-acoversin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-acoversin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-acoversin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-acoversin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-acoversin/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-acoversin/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-acoversin/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-acoversin/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-acoversin/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-acoversin/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-acoversin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-acoversin/main/LICENSE

[inverse-coversed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/acovercos]: https://github.com/stdlib-js/math-base-special-acovercos/tree/deno

[@stdlib/math/base/special/aversin]: https://github.com/stdlib-js/math-base-special-aversin/tree/deno

[@stdlib/math/base/special/coversin]: https://github.com/stdlib-js/math-base-special-coversin/tree/deno

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math-base-special-versin/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
