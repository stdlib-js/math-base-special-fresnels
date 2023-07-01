// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{assign as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.0.7-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.0.8-esm/index.mjs";var r=[0,0];function i(i){var a,m,o,d,l,c,p;return(a=(m=t(i))*m)<2.5625?o=m*a*function(e){var t,s;return 0===e?.5235987755982989:((e<0?-e:e)<=1?(t=318016297876.5678+e*(e*(2548908805.7337637+e*(e*(708840.0452577386+e*(0*e-2991.8191940101983))-62974148.62058625))-44297951805.96978),s=607366389490.0846+e*(22441179564.534092+e*(419320245.8981112+e*(5173438.887700964+e*(45584.78108065326+e*(281.3762688899943+1*e)))))):(t=0+(e=1/e)*(e*(708840.0452577386+e*(e*(2548908805.7337637+e*(318016297876.5678*e-44297951805.96978))-62974148.62058625))-2991.8191940101983),s=1+e*(281.3762688899943+e*(45584.78108065326+e*(5173438.887700964+e*(419320245.8981112+e*(22441179564.534092+607366389490.0846*e)))))),t/s)}(c=a*a):m>36974?o=.5:(p=1/((c=n*(a=m*m))*c),c=1/c,d=1-p*function(e){var t,s;return 0===e?2.999999999999634:((e<0?-e:e)<=1?(t=3.763297112699879e-20+e*(13428327623306275e-32+e*(17201074326816183e-29+e*(1.0230451416490724e-10+e*(3.055689837902576e-8+e*(46361374928786735e-22+e*(.000345017939782574+e*(.011522095507358577+e*(.1434079197807589+e*(.4215435550436775+0*e))))))))),s=1.2544323709001127e-20+e*(45200143407412973e-33+e*(5887545336215784e-29+e*(36014002958937136e-27+e*(1.1269922476399903e-8+e*(18462756734893055e-22+e*(.00015593440916415301+e*(.0064405152650885865+e*(.11688892585919138+e*(.7515863983533789+1*e)))))))))):(t=0+(e=1/e)*(.4215435550436775+e*(.1434079197807589+e*(.011522095507358577+e*(.000345017939782574+e*(46361374928786735e-22+e*(3.055689837902576e-8+e*(1.0230451416490724e-10+e*(17201074326816183e-29+e*(13428327623306275e-32+3.763297112699879e-20*e))))))))),s=1+e*(.7515863983533789+e*(.11688892585919138+e*(.0064405152650885865+e*(.00015593440916415301+e*(18462756734893055e-22+e*(1.1269922476399903e-8+e*(36014002958937136e-27+e*(5887545336215784e-29+e*(45200143407412973e-33+1.2544323709001127e-20*e)))))))))),t/s)}(p),l=c*function(e){var t,s;return 0===e?1:((e<0?-e:e)<=1?(t=18695871016278324e-38+e*(8363544356306774e-34+e*(1375554606332618e-30+e*(10826804113902088e-28+e*(4.4534441586175015e-10+e*(9.828524436884223e-8+e*(11513882611188428e-21+e*(.0006840793809153931+e*(.018764858409257526+e*(.1971028335255234+e*(.5044420736433832+0*e)))))))))),s=18695871016278324e-38+e*(8391588162831187e-34+e*(13879653125957886e-31+e*(11027321506624028e-28+e*(4.6068072814652043e-10+e*(1.0431458965757199e-7+e*(12754507566772912e-21+e*(.0008146791071843061+e*(.02536037414203388+e*(.33774898912002+e*(1.4749575992512833+1*e))))))))))):(t=0+(e=1/e)*(.5044420736433832+e*(.1971028335255234+e*(.018764858409257526+e*(.0006840793809153931+e*(11513882611188428e-21+e*(9.828524436884223e-8+e*(4.4534441586175015e-10+e*(10826804113902088e-28+e*(1375554606332618e-30+e*(8363544356306774e-34+18695871016278324e-38*e)))))))))),s=1+e*(1.4749575992512833+e*(.33774898912002+e*(.02536037414203388+e*(.0008146791071843061+e*(12754507566772912e-21+e*(1.0431458965757199e-7+e*(4.6068072814652043e-10+e*(11027321506624028e-28+e*(13879653125957886e-31+e*(8391588162831187e-34+18695871016278324e-38*e))))))))))),t/s)}(p),e(c=s*a,r,1,0),o=.5-(d*r[1]+l*r[0])/(c=n*m)),i<0&&(o=-o),o}export{i as default};
//# sourceMappingURL=index.mjs.map
