"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(k,l){
function P(e){var r,a,s;return e===0?.5235987755982989:(e<0?r=-e:r=e,r<=1?(a=3180162978765678e-4+e*(-4429795180596978e-5+e*(25489088057337637e-7+e*(-6297414862058625e-8+e*(708840.0452577386+e*(-2991.8191940101983+e*0))))),s=6073663894900846e-4+e*(22441179564534092e-6+e*(4193202458981112e-7+e*(5173438887700964e-9+e*(45584.78108065326+e*(281.3762688899943+e*1)))))):(e=1/e,a=0+e*(-2991.8191940101983+e*(708840.0452577386+e*(-6297414862058625e-8+e*(25489088057337637e-7+e*(-4429795180596978e-5+e*3180162978765678e-4))))),s=1+e*(281.3762688899943+e*(45584.78108065326+e*(5173438887700964e-9+e*(4193202458981112e-7+e*(22441179564534092e-6+e*6073663894900846e-4)))))),a/s)}l.exports=P
});var p=v(function(w,c){
function S(e){var r,a,s;return e===0?2.999999999999634:(e<0?r=-e:r=e,r<=1?(a=3763297112699879e-35+e*(13428327623306275e-32+e*(17201074326816183e-29+e*(10230451416490724e-26+e*(3055689837902576e-23+e*(46361374928786735e-22+e*(.000345017939782574+e*(.011522095507358577+e*(.1434079197807589+e*(.4215435550436775+e*0))))))))),s=12544323709001127e-36+e*(45200143407412973e-33+e*(5887545336215784e-29+e*(36014002958937136e-27+e*(11269922476399903e-24+e*(18462756734893055e-22+e*(.00015593440916415301+e*(.0064405152650885865+e*(.11688892585919138+e*(.7515863983533789+e*1)))))))))):(e=1/e,a=0+e*(.4215435550436775+e*(.1434079197807589+e*(.011522095507358577+e*(.000345017939782574+e*(46361374928786735e-22+e*(3055689837902576e-23+e*(10230451416490724e-26+e*(17201074326816183e-29+e*(13428327623306275e-32+e*3763297112699879e-35))))))))),s=1+e*(.7515863983533789+e*(.11688892585919138+e*(.0064405152650885865+e*(.00015593440916415301+e*(18462756734893055e-22+e*(11269922476399903e-24+e*(36014002958937136e-27+e*(5887545336215784e-29+e*(45200143407412973e-33+e*12544323709001127e-36)))))))))),a/s)}c.exports=S
});var y=v(function(z,q){
function b(e){var r,a,s;return e===0?1:(e<0?r=-e:r=e,r<=1?(a=18695871016278324e-38+e*(8363544356306774e-34+e*(1375554606332618e-30+e*(10826804113902088e-28+e*(44534441586175015e-26+e*(9828524436884223e-23+e*(11513882611188428e-21+e*(.0006840793809153931+e*(.018764858409257526+e*(.1971028335255234+e*(.5044420736433832+e*0)))))))))),s=18695871016278324e-38+e*(8391588162831187e-34+e*(13879653125957886e-31+e*(11027321506624028e-28+e*(46068072814652043e-26+e*(10431458965757199e-23+e*(12754507566772912e-21+e*(.0008146791071843061+e*(.02536037414203388+e*(.33774898912002+e*(1.4749575992512833+e*1))))))))))):(e=1/e,a=0+e*(.5044420736433832+e*(.1971028335255234+e*(.018764858409257526+e*(.0006840793809153931+e*(11513882611188428e-21+e*(9828524436884223e-23+e*(44534441586175015e-26+e*(10826804113902088e-28+e*(1375554606332618e-30+e*(8363544356306774e-34+e*18695871016278324e-38)))))))))),s=1+e*(1.4749575992512833+e*(.33774898912002+e*(.02536037414203388+e*(.0008146791071843061+e*(12754507566772912e-21+e*(10431458965757199e-23+e*(46068072814652043e-26+e*(11027321506624028e-28+e*(13879653125957886e-31+e*(8391588162831187e-34+e*18695871016278324e-38))))))))))),a/s)}q.exports=b
});var I=v(function(B,F){
var m=require('@stdlib/math-base-special-sincos/dist').assign,A=require('@stdlib/math-base-special-abs/dist'),G=require('@stdlib/constants-float64-half-pi/dist'),g=require('@stdlib/constants-float64-pi/dist'),H=o(),L=p(),_=y(),u=[0,0];function d(e){var r,a,s,n,f,i,t;return a=A(e),r=a*a,r<2.5625?(i=r*r,s=a*r*H(i)):a>36974?s=.5:(r=a*a,i=g*r,t=1/(i*i),i=1/i,n=1-t*L(t),f=i*_(t),i=G*r,m(i,u,1,0),i=g*a,s=.5-(n*u[1]+f*u[0])/i),e<0&&(s=-s),s}F.exports=d
});var h=I();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map