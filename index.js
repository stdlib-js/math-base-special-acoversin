// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.sqrt,n=.7853981633974483;return function(r){return function(r){var t,f,i,u,o;if(function(e){return e!=e}(r))return NaN;if(r>0?i=r:(t=!0,i=-r),i>1)return NaN;if(i>.625)u=(f=1-i)*function(e){var n,r;return 0===e?.08333333333333809:((e<0?-e:e)<=1?(n=28.536655482610616+e*(e*(6.968710824104713+e*(.002967721961301243*e-.5634242780008963))-25.56901049652825),r=342.43986579130785+e*(e*(147.0656354026815+e*(1*e-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(e=1/e)*(e*(6.968710824104713+e*(28.536655482610616*e-25.56901049652825))-.5634242780008963),r=1+e*(e*(147.0656354026815+e*(342.43986579130785*e-383.8770957603691))-21.947795316429207)),n/r)}(f),f=e(f+f),o=n-f,o-=f=f*u-6123233995736766e-32,o+=n;else{if(i<1e-8)return r;o=(f=i*i)*function(e){var n,r;return 0===e?.16666666666666713:((e<0?-e:e)<=1?(n=e*(19.562619833175948+e*(e*(5.444622390564711+e*(.004253011369004428*e-.6019598008014124))-16.262479672107002))-8.198089802484825,r=e*(139.51056146574857+e*(e*(70.49610280856842+e*(1*e-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(e=1/e)*(e*(5.444622390564711+e*(e*(19.562619833175948+-8.198089802484825*e)-16.262479672107002))-.6019598008014124),r=1+e*(e*(70.49610280856842+e*(e*(139.51056146574857+-49.18853881490881*e)-147.1791292232726))-14.740913729888538)),n/r)}(f),o=i*o+i}return t?-o:o}(1-r)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).acoversin=n();
//# sourceMappingURL=index.js.map
