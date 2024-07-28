// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,h,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,v,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,f,u,s,l,p,v,g,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,v=n.width,g=n.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+m(y):m(y)+p)),f+=n.arg||"",u+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var N=Object.prototype,j=N.toString,T=N.__defineGetter__,O=N.__defineSetter__,V=N.__lookupGetter__,$=N.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function H(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=2147483647,C=2146435072;var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var P=Object.prototype.toString;var R=Object.prototype.hasOwnProperty;var Z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof Z?Z.toStringTag:"";var X=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return P.call(r);t=r[M],a=M,e=null!=(i=r)&&R.call(i,a);try{r[M]=void 0}catch(e){return P.call(r)}return n=P.call(r),e?r[M]=t:delete r[M],n}:function(r){return P.call(r)},Y="function"==typeof Uint32Array;var z="function"==typeof Uint32Array?Uint32Array:null;var q,B="function"==typeof Uint32Array?Uint32Array:void 0;q=function(){var r,e,t;if("function"!=typeof z)return!1;try{e=new z(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Y&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D=q,J="function"==typeof Float64Array;var K="function"==typeof Float64Array?Float64Array:null;var Q,rr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,NaN]),t=e,r=(J&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,tr="function"==typeof Uint8Array;var nr="function"==typeof Uint8Array?Uint8Array:null;var ir,ar="function"==typeof Uint8Array?Uint8Array:void 0;ir=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,256,257]),t=e,r=(tr&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,cr="function"==typeof Uint16Array;var fr="function"==typeof Uint16Array?Uint16Array:null;var ur,sr="function"==typeof Uint16Array?Uint16Array:void 0;ur=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(cr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr={uint16:ur,uint8:or};(lr=new pr.uint16(1))[0]=4660;var vr=52===new pr.uint8(lr.buffer)[0],gr=!0===vr?1:0,yr=new er(1),dr=new D(yr.buffer);function hr(r){return yr[0]=r,dr[gr]}var wr,br,mr=1048575,Ar=!0===vr?0:1,_r=new er(1),Er=new D(_r.buffer);!0===vr?(wr=1,br=0):(wr=0,br=1);var Ur={HIGH:wr,LOW:br},Sr=new er(1),Ir=new D(Sr.buffer),kr=Ur.HIGH,xr=Ur.LOW;function Fr(r,e){return Ir[kr]=r,Ir[xr]=e,Sr[0]}var Nr=Math.floor,jr=Number.POSITIVE_INFINITY,Tr=Number.NEGATIVE_INFINITY,Or=1023,Vr=1023,$r=-1023,Gr=-1074;function Hr(r){return r!=r}function Wr(r){return r===jr||r===Tr}var Cr,Lr,Pr=2147483648;!0===vr?(Cr=1,Lr=0):(Cr=0,Lr=1);var Rr={HIGH:Cr,LOW:Lr},Zr=new er(1),Mr=new D(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,t,n){return Zr[0]=r,e[n]=Mr[Xr],e[n+t]=Mr[Yr],e}function qr(r){return zr(r,[0,0],1,0)}H(qr,"assign",zr);var Br=[0,0];var Dr=22250738585072014e-324;function Jr(r){return Math.abs(r)}var Kr=4503599627370496;function Qr(r,e,t,n){return Hr(r)||Wr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Jr(r)<Dr?(e[n]=r*Kr,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}H((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=2220446049250313e-31,ee=2148532223,te=[0,0],ne=[0,0];function ie(r,e){var t,n,i,a,o,c;return 0===e||0===r||Hr(r)||Wr(r)?r:(Qr(r,te,1,0),r=te[0],e+=te[1],e+=function(r){var e=hr(r);return(e=(e&C)>>>20)-Or|0}(r),e<Gr?(i=0,a=r,qr.assign(i,Br,1,0),o=Br[0],o&=W,c=hr(a),Fr(o|=c&=Pr,Br[1])):e>Vr?r<0?Tr:jr:(e<=$r?(e+=52,n=re):n=1,qr.assign(r,ne,1,0),t=ne[0],t&=ee,n*Fr(t|=e+Or<<20,ne[1])))}function ae(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var oe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ce=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fe=16777216,ue=5.960464477539063e-8,se=ae(20),le=ae(20),pe=ae(20),ve=ae(20);function ge(r,e,t,n,i,a,o,c,f){var u,s,l,p,v,g,y,d,h;for(p=a,h=n[t],d=t,v=0;d>0;v++)s=ue*h|0,ve[v]=h-fe*s|0,h=n[d-1]+s,d-=1;if(h=ie(h,i),h-=8*Nr(.125*h),h-=y=0|h,l=0,i>0?(y+=v=ve[t-1]>>24-i,ve[t-1]-=v<<24-i,l=ve[t-1]>>23-i):0===i?l=ve[t-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,u=0,v=0;v<t;v++)d=ve[v],0===u?0!==d&&(u=1,ve[v]=16777216-d):ve[v]=16777215-d;if(i>0)switch(i){case 1:ve[t-1]&=8388607;break;case 2:ve[t-1]&=4194303}2===l&&(h=1-h,0!==u&&(h-=ie(1,i)))}if(0===h){for(d=0,v=t-1;v>=a;v--)d|=ve[v];if(0===d){for(g=1;0===ve[a-g];g++);for(v=t+1;v<=t+g;v++){for(f[c+v]=oe[o+v],s=0,d=0;d<=c;d++)s+=r[d]*f[c+(v-d)];n[v]=s}return ge(r,e,t+=g,n,i,a,o,c,f)}}if(0===h)for(t-=1,i-=24;0===ve[t];)t-=1,i-=24;else(h=ie(h,-i))>=fe?(s=ue*h|0,ve[t]=h-fe*s|0,i+=24,ve[t+=1]=s):ve[t]=0|h;for(s=ie(1,i),v=t;v>=0;v--)n[v]=s*ve[v],s*=ue;for(v=t;v>=0;v--){for(s=0,g=0;g<=p&&g<=t-v;g++)s+=ce[g]*n[v+g];pe[t-v]=s}for(s=0,v=t;v>=0;v--)s+=pe[v];for(e[0]=0===l?s:-s,s=pe[0]-s,v=1;v<=t;v++)s+=pe[v];return e[1]=0===l?s:-s,7&y}function ye(r,e,t,n){var i,a,o,c,f,u,s;for(4,(a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),u=a-(o=n-1),s=o+4,f=0;f<=s;f++)se[f]=u<0?0:oe[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=r[u]*se[o+(f-u)];le[f]=i}return 4,ge(r,e,4,le,c,4,a,o,se)}var de=Math.round,he=.6366197723675814,we=1.5707963267341256,be=6077100506506192e-26,me=6077100506303966e-26,Ae=20222662487959506e-37,_e=20222662487111665e-37,Ee=84784276603689e-45,Ue=2047;function Se(r,e,t){var n,i,a,o,c;return a=r-(n=de(r*he))*we,o=n*be,c=e>>20|0,t[0]=a-o,c-(hr(t[0])>>20&Ue)>16&&(o=n*Ae-((i=a)-(a=i-(o=n*me))-o),t[0]=a-o,c-(hr(t[0])>>20&Ue)>49&&(o=n*Ee-((i=a)-(a=i-(o=n*_e))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ie=0,ke=16777216,xe=1.5707963267341256,Fe=6077100506506192e-26,Ne=2*Fe,je=3*Fe,Te=4*Fe,Oe=598523,Ve=1072243195,$e=1073928572,Ge=1074752122,He=1074977148,We=1075183036,Ce=1075388923,Le=1075594811,Pe=1094263291,Re=[0,0,0],Ze=[0,0];function Me(r,e){var t,n,i,a,o,c,f;if((i=hr(r)&W|0)<=Ve)return e[0]=r,e[1]=0,0;if(i<=Ge)return(i&mr)===Oe?Se(r,i,e):i<=$e?r>0?(f=r-xe,e[0]=f-Fe,e[1]=f-e[0]-Fe,1):(f=r+xe,e[0]=f+Fe,e[1]=f-e[0]+Fe,-1):r>0?(f=r-2*xe,e[0]=f-Ne,e[1]=f-e[0]-Ne,2):(f=r+2*xe,e[0]=f+Ne,e[1]=f-e[0]+Ne,-2);if(i<=Le)return i<=We?i===He?Se(r,i,e):r>0?(f=r-3*xe,e[0]=f-je,e[1]=f-e[0]-je,3):(f=r+3*xe,e[0]=f+je,e[1]=f-e[0]+je,-3):i===Ce?Se(r,i,e):r>0?(f=r-4*xe,e[0]=f-Te,e[1]=f-e[0]-Te,4):(f=r+4*xe,e[0]=f+Te,e[1]=f-e[0]+Te,-4);if(i<Pe)return Se(r,i,e);if(i>=C)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return _r[0]=r,Er[Ar]}(r),f=Fr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Re[o]=0|f,f=(f-Re[o])*ke;for(Re[2]=f,a=3;Re[a-1]===Ie;)a-=1;return c=ye(Re,Ze,n,a),r<0?(e[0]=-Ze[0],e[1]=-Ze[1],-c):(e[0]=Ze[0],e[1]=Ze[1],c)}var Xe=-.16666666666666632,Ye=.00833333333332249,ze=-.0001984126982985795,qe=27557313707070068e-22,Be=-2.5050760253406863e-8,De=1.58969099521155e-10,Je=.0416666666666666,Ke=-.001388888888887411,Qe=2480158728947673e-20,rt=-2.7557314351390663e-7,et=2.087572321298175e-9,tt=-11359647557788195e-27;function nt(r,e,t,n,i){var a,o,c,f,u;return o=Ye+(u=r*r)*(ze+u*qe)+u*(f=u*u)*(Be+u*De),c=u*r,t[i]=0===e?r+c*(Xe+u*o):r-(u*(.5*e-c*o)-e-c*Xe),o=u*(Je+u*(Ke+u*Qe)),o+=f*f*(rt+u*(et+u*tt)),f=1-(a=.5*u),t[i+n]=f+(1-f-a+(u*o-r*e)),t}var it=1072243195,at=1044381696,ot=[0,0];function ct(r,e,t,n){var i,a;if(i=hr(r),(i&=W)<=it)return i<at&&0==(0|r)&&(e[n]=r,e[n+t]=0),nt(r,0,e,t,n);if(i>=C)return e[n]=NaN,e[n+t]=NaN,e;switch(a=Me(r,ot),nt(ot[0],ot[1],e,t,n),3&a){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}H((function(r){return ct(r,[0,0],1,0)}),"assign",ct);var ft=3.141592653589793;var ut=[0,0];function st(r){var e,t,n,i,a,o,c;return(e=(t=Jr(r))*t)<2.5625?n=t*e*function(r){var e,t;return 0===r?.5235987755982989:((r<0?-r:r)<=1?(e=318016297876.5678+r*(r*(2548908805.7337637+r*(r*(708840.0452577386+r*(0*r-2991.8191940101983))-62974148.62058625))-44297951805.96978),t=607366389490.0846+r*(22441179564.534092+r*(419320245.8981112+r*(5173438.887700964+r*(45584.78108065326+r*(281.3762688899943+1*r)))))):(e=0+(r=1/r)*(r*(708840.0452577386+r*(r*(2548908805.7337637+r*(318016297876.5678*r-44297951805.96978))-62974148.62058625))-2991.8191940101983),t=1+r*(281.3762688899943+r*(45584.78108065326+r*(5173438.887700964+r*(419320245.8981112+r*(22441179564.534092+607366389490.0846*r)))))),e/t)}(o=e*e):t>36974?n=.5:(c=1/((o=ft*(e=t*t))*o),o=1/o,i=1-c*function(r){var e,t;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(e=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),t=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(e=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),t=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),e/t)}(c),a=o*function(r){var e,t;return 0===r?1:((r<0?-r:r)<=1?(e=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),t=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(e=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),t=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),e/t)}(c),ct(o=1.5707963267948966*e,ut,1,0),n=.5-(i*ut[1]+a*ut[0])/(o=ft*t)),r<0&&(n=-n),n}export{st as default};
//# sourceMappingURL=mod.js.map
