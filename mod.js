// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var t="function"==typeof Symbol?Symbol.toStringTag:"";var o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,f,u,a,i;if(null==r)return n.call(r);f=r[t],i=t,o=null!=(a=r)&&e.call(a,i);try{r[t]=void 0}catch(e){return n.call(r)}return u=n.call(r),o?r[t]=f:delete r[t],u}:function(r){return n.call(r)},f="function"==typeof Uint32Array;var u="function"==typeof Uint32Array?Uint32Array:null;var a,i="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,n,e;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(f&&e instanceof Uint32Array||"[object Uint32Array]"===o(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?i:function(){throw new Error("not implemented")};var c=a,y="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var l,p="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,n,e;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),e=n,r=(y&&e instanceof Float64Array||"[object Float64Array]"===o(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A=l,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var U,h="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,n,e;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,256,257]),e=n,r=(w&&e instanceof Uint8Array||"[object Uint8Array]"===o(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var s=U,m="function"==typeof Uint16Array;var N="function"==typeof Uint16Array?Uint16Array:null;var d,I="function"==typeof Uint16Array?Uint16Array:void 0;d=function(){var r,n,e;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,65536,65537]),e=n,r=(m&&e instanceof Uint16Array||"[object Uint16Array]"===o(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var F,S={uint16:d,uint8:s};(F=new S.uint16(1))[0]=4660;var g=52===new S.uint8(F.buffer)[0],H=!0===g?1:0,O=new A(1),E=new c(O.buffer);function j(r){return O[0]=r,E[H]}var T,G,L=!0===g?0:1,W=new A(1),M=new c(W.buffer);!0===g?(T=1,G=0):(T=0,G=1);var P={HIGH:T,LOW:G},V=new A(1),Y=new c(V.buffer),_=P.HIGH,k=P.LOW;function x(r,n){return Y[_]=r,Y[k]=n,V[0]}var q,z,B=Math.floor,C=Number.POSITIVE_INFINITY,D=Number.NEGATIVE_INFINITY;function J(r){return r!=r}function K(r){return r===C||r===D}!0===g?(q=1,z=0):(q=0,z=1);var Q={HIGH:q,LOW:z},R=new A(1),X=new c(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,n){return R[0]=n,r[0]=X[Z],r[1]=X[$],r}function nr(r,n){return 1===arguments.length?rr([0,0],r):rr(r,n)}var er=[0,0];function tr(r){return Math.abs(r)}function or(r,n){return J(n)||K(n)?(r[0]=n,r[1]=0,r):0!==n&&tr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var fr=[0,0],ur=[0,0];function ar(r,n){var e,t,o,f,u;return 0===n||0===r||J(r)||K(r)?r:(function(r,n){1===arguments.length?or([0,0],r):or(r,n)}(fr,r),n+=fr[1],n+=function(r){var n=j(r);return(n=(2146435072&n)>>>20)-1023|0}(r=fr[0]),n<-1074?(o=r,nr(er,0),f=er[0],f&=2147483647,u=j(o),x(f|=u&=2147483648,er[1])):n>1023?r<0?D:C:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,nr(ur,r),e=ur[0],e&=2148532223,t*x(e|=n+1023<<20,ur[1])))}function ir(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var cr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],vr=5.960464477539063e-8,lr=ir(20),pr=ir(20),Ar=ir(20),wr=ir(20);function br(r,n,e,t,o,f,u,a,i){var c,y,v,l,p,A,w,b,U;for(l=f,U=t[e],b=e,p=0;b>0;p++)y=vr*U|0,wr[p]=U-16777216*y|0,U=t[b-1]+y,b-=1;if(U=ar(U,o),U-=8*B(.125*U),U-=w=0|U,v=0,o>0?(w+=p=wr[e-1]>>24-o,wr[e-1]-=p<<24-o,v=wr[e-1]>>23-o):0===o?v=wr[e-1]>>23:U>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<e;p++)b=wr[p],0===c?0!==b&&(c=1,wr[p]=16777216-b):wr[p]=16777215-b;if(o>0)switch(o){case 1:wr[e-1]&=8388607;break;case 2:wr[e-1]&=4194303}2===v&&(U=1-U,0!==c&&(U-=ar(1,o)))}if(0===U){for(b=0,p=e-1;p>=f;p--)b|=wr[p];if(0===b){for(A=1;0===wr[f-A];A++);for(p=e+1;p<=e+A;p++){for(i[a+p]=cr[u+p],y=0,b=0;b<=a;b++)y+=r[b]*i[a+(p-b)];t[p]=y}return br(r,n,e+=A,t,o,f,u,a,i)}}if(0===U)for(e-=1,o-=24;0===wr[e];)e-=1,o-=24;else(U=ar(U,-o))>=16777216?(y=vr*U|0,wr[e]=U-16777216*y|0,o+=24,wr[e+=1]=y):wr[e]=0|U;for(y=ar(1,o),p=e;p>=0;p--)t[p]=y*wr[p],y*=vr;for(p=e;p>=0;p--){for(y=0,A=0;A<=l&&A<=e-p;A++)y+=yr[A]*t[p+A];Ar[e-p]=y}for(y=0,p=e;p>=0;p--)y+=Ar[p];for(n[0]=0===v?y:-y,y=Ar[0]-y,p=1;p<=e;p++)y+=Ar[p];return n[1]=0===v?y:-y,7&w}function Ur(r,n,e,t){var o,f,u,a,i,c,y;for(4,(f=(e-3)/24|0)<0&&(f=0),a=e-24*(f+1),c=f-(u=t-1),y=u+4,i=0;i<=y;i++)lr[i]=c<0?0:cr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=u;c++)o+=r[c]*lr[u+(i-c)];pr[i]=o}return 4,br(r,n,4,pr,a,4,f,u,lr)}var hr=Math.round;function sr(r,n,e){var t,o,f,u,a;return f=r-1.5707963267341256*(t=hr(.6366197723675814*r)),u=6077100506506192e-26*t,a=n>>20|0,e[0]=f-u,a-(j(e[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((o=f)-(f=o-(u=6077100506303966e-26*t))-u),e[0]=f-u,a-(j(e[0])>>20&2047)>49&&(u=84784276603689e-45*t-((o=f)-(f=o-(u=20222662487111665e-37*t))-u),e[0]=f-u)),e[1]=f-e[0]-u,t}var mr=1.5707963267341256,Nr=6077100506506192e-26,dr=2*Nr,Ir=4*Nr,Fr=[0,0,0],Sr=[0,0];function gr(r,n){var e,t,o,f,u,a,i;if((o=2147483647&j(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?sr(r,o,n):o<=1073928572?r>0?(i=r-mr,n[0]=i-Nr,n[1]=i-n[0]-Nr,1):(i=r+mr,n[0]=i+Nr,n[1]=i-n[0]+Nr,-1):r>0?(i=r-2*mr,n[0]=i-dr,n[1]=i-n[0]-dr,2):(i=r+2*mr,n[0]=i+dr,n[1]=i-n[0]+dr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?sr(r,o,n):r>0?(i=r-3*mr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*mr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?sr(r,o,n):r>0?(i=r-4*mr,n[0]=i-Ir,n[1]=i-n[0]-Ir,4):(i=r+4*mr,n[0]=i+Ir,n[1]=i-n[0]+Ir,-4);if(o<1094263291)return sr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return W[0]=r,M[L]}(r),i=x(o-((t=(o>>20)-1046)<<20|0),e),u=0;u<2;u++)Fr[u]=0|i,i=16777216*(i-Fr[u]);for(Fr[2]=i,f=3;0===Fr[f-1];)f-=1;return a=Ur(Fr,Sr,t,f),r<0?(n[0]=-Sr[0],n[1]=-Sr[1],-a):(n[0]=Sr[0],n[1]=Sr[1],a)}var Hr=-.16666666666666632;function Or(r,n,e){var t,o,f,u,a;return o=.00833333333332249+(a=n*n)*(27557313707070068e-22*a-.0001984126982985795)+a*(u=a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),f=a*n,r[0]=0===e?n+f*(Hr+a*o):n-(a*(.5*e-f*o)-e-f*Hr),o=a*(.0416666666666666+a*(2480158728947673e-20*a-.001388888888887411)),o+=u*u*(a*(2.087572321298175e-9+-11359647557788195e-27*a)-2.7557314351390663e-7),u=1-(t=.5*a),r[1]=u+(1-u-t+(a*o-n*e)),r}var Er=[0,0];function jr(r,n){var e,t;if(e=j(n),(e&=2147483647)<=1072243195)return e<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),Or(r,n,0);if(e>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(t=gr(n,Er),Or(r,Er[0],Er[1]),3&t){case 1:return e=r[1],r[1]=-r[0],r[0]=e,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return e=-r[1],r[1]=r[0],r[0]=e,r;default:return r}}var Tr=3.141592653589793;var Gr=[0,0];function Lr(r){var n,e,t,o,f,u,a;return(n=(e=tr(r))*e)<2.5625?t=e*n*function(r){var n,e;return 0===r?.5235987755982989:((r<0?-r:r)<=1?(n=318016297876.5678+r*(r*(2548908805.7337637+r*(r*(708840.0452577386+r*(0*r-2991.8191940101983))-62974148.62058625))-44297951805.96978),e=607366389490.0846+r*(22441179564.534092+r*(419320245.8981112+r*(5173438.887700964+r*(45584.78108065326+r*(281.3762688899943+1*r)))))):(n=0+(r=1/r)*(r*(708840.0452577386+r*(r*(2548908805.7337637+r*(318016297876.5678*r-44297951805.96978))-62974148.62058625))-2991.8191940101983),e=1+r*(281.3762688899943+r*(45584.78108065326+r*(5173438.887700964+r*(419320245.8981112+r*(22441179564.534092+607366389490.0846*r)))))),n/e)}(u=n*n):e>36974?t=.5:(a=1/((u=Tr*(n=e*e))*u),u=1/u,o=1-a*function(r){var n,e;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(n=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),e=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(n=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),e=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),n/e)}(a),f=u*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),e=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(n=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),e=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),n/e)}(a),function(r,n){1===arguments.length?jr([0,0],r):jr(r,n)}(Gr,u=1.5707963267948966*n),t=.5-(o*Gr[1]+f*Gr[0])/(u=Tr*e)),r<0&&(t=-t),t}export{Lr as default};
//# sourceMappingURL=mod.js.map
