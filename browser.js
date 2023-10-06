// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(e){return"number"==typeof e}function t(e){var r,n="";for(r=0;r<e;r++)n+="0";return n}function i(e,r,n){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=n?e+t(a):t(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,t,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,c=parseInt(t,10),!isFinite(c)){if(!n(t))throw new Error("invalid integer. Value: "+t);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(t=(-c).toString(r),e.precision&&(t=i(t,e.precision,e.padRight)),t="-"+t):(t=c.toString(r),c||e.precision?e.precision&&(t=i(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var u=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),e.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,h,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===l.call(e.specifier)?l.call(t):s.call(t)}function A(e){var r,n="";for(r=0;r<e;r++)n+=" ";return n}function _(e,r,n){var t=r-e.length;return t<0?e:e=n?e+A(t):A(t)+e}var E=String.fromCharCode,U=isNaN,I=Array.isArray;function S(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,n,t,a,o,u,s,l,p;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,l=0;l<e.length;l++)if(f(t=e[l]))u+=t;else{if(r=void 0!==t.precision,!(t=S(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,U(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,U(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!U(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=U(o)?String(t.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),u+=t.arg||"",s+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,n,t,i;for(n=[],i=0,t=x.exec(e);t;)(r=e.slice(i,x.lastIndex-t[0].length)).length&&n.push(r),n.push(N(t)),i=x.lastIndex,t=x.exec(e);return(r=e.slice(i)).length&&n.push(r),n}function j(e){return"string"==typeof e}function T(e){var r,n,t;if(!j(e))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(n=new Array(arguments.length))[0]=r,t=1;t<n.length;t++)n[t]=arguments[t];return k.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,n){var t,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(e,r)||W.call(e,r)?(t=e.__proto__,e.__proto__=O,delete e[r],e[r]=n.value,e.__proto__=t):e[r]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,n.get),o&&G&&G.call(e,r,n.set),e};function L(e,r,n){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var P,R=2147483647,Z=2146435072,M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"",B=M&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,i,a;if(null==e)return X.call(e);n=e[q],a=q,r=null!=(i=e)&&Y.call(i,a);try{e[q]=void 0}catch(r){return X.call(e)}return t=X.call(e),r?e[q]=n:delete e[q],t}:function(e){return X.call(e)},D="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var e,r,n;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(D&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?K:function(){throw new Error("not implemented")};var Q,ee=P,re="function"==typeof Float64Array,ne="function"==typeof Float64Array?Float64Array:null,te="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var e,r,n;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,NaN]),n=r,e=(re&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?te:function(){throw new Error("not implemented")};var ie,ae=Q,oe="function"==typeof Uint8Array,ce="function"==typeof Uint8Array?Uint8Array:null,fe="function"==typeof Uint8Array?Uint8Array:void 0;ie=function(){var e,r,n;if("function"!=typeof ce)return!1;try{r=new ce(r=[1,3.14,-3.14,256,257]),n=r,e=(oe&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")};var ue,se=ie,le="function"==typeof Uint16Array,pe="function"==typeof Uint16Array?Uint16Array:null,ye="function"==typeof Uint16Array?Uint16Array:void 0;ue=function(){var e,r,n;if("function"!=typeof pe)return!1;try{r=new pe(r=[1,3.14,-3.14,65536,65537]),n=r,e=(le&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ye:function(){throw new Error("not implemented")};var ge,de={uint16:ue,uint8:se};(ge=new de.uint16(1))[0]=4660;var he=52===new de.uint8(ge.buffer)[0],ve=!0===he?1:0,we=new ae(1),be=new ee(we.buffer);function me(e){return we[0]=e,be[ve]}var Ae,_e,Ee=!0===he?0:1,Ue=new ae(1),Ie=new ee(Ue.buffer);!0===he?(Ae=1,_e=0):(Ae=0,_e=1);var Se={HIGH:Ae,LOW:_e},ke=new ae(1),xe=new ee(ke.buffer),Ne=Se.HIGH,Fe=Se.LOW;function je(e,r){return xe[Ne]=e,xe[Fe]=r,ke[0]}var Te,Oe,Ve=Math.floor,$e=Number.POSITIVE_INFINITY,Ge=Number.NEGATIVE_INFINITY;function He(e){return e!=e}function We(e){return e===$e||e===Ge}!0===he?(Te=1,Oe=0):(Te=0,Oe=1);var Ce={HIGH:Te,LOW:Oe},Le=new ae(1),Pe=new ee(Le.buffer),Re=Ce.HIGH,Ze=Ce.LOW;function Me(e,r,n,t){return Le[0]=e,r[t]=Pe[Re],r[t+n]=Pe[Ze],r}function Xe(e){return Me(e,[0,0],1,0)}L(Xe,"assign",Me);var Ye=[0,0];function ze(e){return Math.abs(e)}function qe(e,r,n,t){return He(e)||We(e)?(r[t]=e,r[t+n]=0,r):0!==e&&ze(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}L((function(e){return qe(e,[0,0],1,0)}),"assign",qe);var Be=[0,0],De=[0,0];function Je(e,r){var n,t,i,a,o,c;return 0===r||0===e||He(e)||We(e)?e:(qe(e,Be,1,0),r+=Be[1],r+=function(e){var r=me(e);return(r=(r&Z)>>>20)-1023|0}(e=Be[0]),r<-1074?(i=0,a=e,Xe.assign(i,Ye,1,0),o=Ye[0],o&=R,c=me(a),je(o|=c&=2147483648,Ye[1])):r>1023?e<0?Ge:$e:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,Xe.assign(e,De,1,0),n=De[0],n&=2148532223,t*je(n|=r+1023<<20,De[1])))}function Ke(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var Qe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],er=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],rr=16777216,nr=5.960464477539063e-8,tr=Ke(20),ir=Ke(20),ar=Ke(20),or=Ke(20);function cr(e,r,n,t,i,a,o,c,f){var u,s,l,p,y,g,d,h,v;for(p=a,v=t[n],h=n,y=0;h>0;y++)s=nr*v|0,or[y]=v-rr*s|0,v=t[h-1]+s,h-=1;if(v=Je(v,i),v-=8*Ve(.125*v),v-=d=0|v,l=0,i>0?(d+=y=or[n-1]>>24-i,or[n-1]-=y<<24-i,l=or[n-1]>>23-i):0===i?l=or[n-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,u=0,y=0;y<n;y++)h=or[y],0===u?0!==h&&(u=1,or[y]=16777216-h):or[y]=16777215-h;if(i>0)switch(i){case 1:or[n-1]&=8388607;break;case 2:or[n-1]&=4194303}2===l&&(v=1-v,0!==u&&(v-=Je(1,i)))}if(0===v){for(h=0,y=n-1;y>=a;y--)h|=or[y];if(0===h){for(g=1;0===or[a-g];g++);for(y=n+1;y<=n+g;y++){for(f[c+y]=Qe[o+y],s=0,h=0;h<=c;h++)s+=e[h]*f[c+(y-h)];t[y]=s}return cr(e,r,n+=g,t,i,a,o,c,f)}}if(0===v)for(n-=1,i-=24;0===or[n];)n-=1,i-=24;else(v=Je(v,-i))>=rr?(s=nr*v|0,or[n]=v-rr*s|0,i+=24,or[n+=1]=s):or[n]=0|v;for(s=Je(1,i),y=n;y>=0;y--)t[y]=s*or[y],s*=nr;for(y=n;y>=0;y--){for(s=0,g=0;g<=p&&g<=n-y;g++)s+=er[g]*t[y+g];ar[n-y]=s}for(s=0,y=n;y>=0;y--)s+=ar[y];for(r[0]=0===l?s:-s,s=ar[0]-s,y=1;y<=n;y++)s+=ar[y];return r[1]=0===l?s:-s,7&d}function fr(e,r,n,t){var i,a,o,c,f,u,s;for((a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),u=a-(o=t-1),s=o+4,f=0;f<=s;f++)tr[f]=u<0?0:Qe[u],u+=1;for(f=0;f<=4;f++){for(i=0,u=0;u<=o;u++)i+=e[u]*tr[o+(f-u)];ir[f]=i}return cr(e,r,4,ir,c,4,a,o,tr)}var ur=Math.round;function sr(e,r,n){var t,i,a,o,c;return a=e-1.5707963267341256*(t=ur(.6366197723675814*e)),o=6077100506506192e-26*t,c=r>>20|0,n[0]=a-o,c-(me(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,c-(me(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var lr=1.5707963267341256,pr=6077100506506192e-26,yr=2*pr,gr=3*pr,dr=4*pr,hr=[0,0,0],vr=[0,0];function wr(e,r){var n,t,i,a,o,c,f;if((i=me(e)&R|0)<=1072243195)return r[0]=e,r[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?sr(e,i,r):i<=1073928572?e>0?(f=e-lr,r[0]=f-pr,r[1]=f-r[0]-pr,1):(f=e+lr,r[0]=f+pr,r[1]=f-r[0]+pr,-1):e>0?(f=e-2*lr,r[0]=f-yr,r[1]=f-r[0]-yr,2):(f=e+2*lr,r[0]=f+yr,r[1]=f-r[0]+yr,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?sr(e,i,r):e>0?(f=e-3*lr,r[0]=f-gr,r[1]=f-r[0]-gr,3):(f=e+3*lr,r[0]=f+gr,r[1]=f-r[0]+gr,-3):1075388923===i?sr(e,i,r):e>0?(f=e-4*lr,r[0]=f-dr,r[1]=f-r[0]-dr,4):(f=e+4*lr,r[0]=f+dr,r[1]=f-r[0]+dr,-4);if(i<1094263291)return sr(e,i,r);if(i>=Z)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return Ue[0]=e,Ie[Ee]}(e),f=je(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)hr[o]=0|f,f=16777216*(f-hr[o]);for(hr[2]=f,a=3;0===hr[a-1];)a-=1;return c=fr(hr,vr,t,a),e<0?(r[0]=-vr[0],r[1]=-vr[1],-c):(r[0]=vr[0],r[1]=vr[1],c)}var br=-.16666666666666632;function mr(e,r,n,t,i){var a,o,c,f,u;return o=.00833333333332249+(u=e*e)*(27557313707070068e-22*u-.0001984126982985795)+u*(f=u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),c=u*e,n[i]=0===r?e+c*(br+u*o):e-(u*(.5*r-c*o)-r-c*br),o=u*(.0416666666666666+u*(2480158728947673e-20*u-.001388888888887411)),o+=f*f*(u*(2.087572321298175e-9+-11359647557788195e-27*u)-2.7557314351390663e-7),f=1-(a=.5*u),n[i+t]=f+(1-f-a+(u*o-e*r)),n}var Ar=[0,0];function _r(e,r,n,t){var i,a;if(i=me(e),(i&=R)<=1072243195)return i<1044381696&&0==(0|e)&&(r[t]=e,r[t+n]=0),mr(e,0,r,n,t);if(i>=Z)return r[t]=NaN,r[t+n]=NaN,r;switch(a=wr(e,Ar),mr(Ar[0],Ar[1],r,n,t),3&a){case 1:return i=r[t+n],r[t+n]=-r[t],r[t]=i,r;case 2:return r[t]*=-1,r[t+n]*=-1,r;case 3:return i=-r[t+n],r[t+n]=r[t],r[t]=i,r;default:return r}}L((function(e){return _r(e,[0,0],1,0)}),"assign",_r);var Er=3.141592653589793,Ur=[0,0];return function(e){var r,n,t,i,a,o,c;return(r=(n=ze(e))*n)<2.5625?t=n*r*function(e){var r,n;return 0===e?.5235987755982989:((e<0?-e:e)<=1?(r=318016297876.5678+e*(e*(2548908805.7337637+e*(e*(708840.0452577386+e*(0*e-2991.8191940101983))-62974148.62058625))-44297951805.96978),n=607366389490.0846+e*(22441179564.534092+e*(419320245.8981112+e*(5173438.887700964+e*(45584.78108065326+e*(281.3762688899943+1*e)))))):(r=0+(e=1/e)*(e*(708840.0452577386+e*(e*(2548908805.7337637+e*(318016297876.5678*e-44297951805.96978))-62974148.62058625))-2991.8191940101983),n=1+e*(281.3762688899943+e*(45584.78108065326+e*(5173438.887700964+e*(419320245.8981112+e*(22441179564.534092+607366389490.0846*e)))))),r/n)}(o=r*r):n>36974?t=.5:(c=1/((o=Er*(r=n*n))*o),o=1/o,i=1-c*function(e){var r,n;return 0===e?2.999999999999634:((e<0?-e:e)<=1?(r=3.763297112699879e-20+e*(13428327623306275e-32+e*(17201074326816183e-29+e*(1.0230451416490724e-10+e*(3.055689837902576e-8+e*(46361374928786735e-22+e*(.000345017939782574+e*(.011522095507358577+e*(.1434079197807589+e*(.4215435550436775+0*e))))))))),n=1.2544323709001127e-20+e*(45200143407412973e-33+e*(5887545336215784e-29+e*(36014002958937136e-27+e*(1.1269922476399903e-8+e*(18462756734893055e-22+e*(.00015593440916415301+e*(.0064405152650885865+e*(.11688892585919138+e*(.7515863983533789+1*e)))))))))):(r=0+(e=1/e)*(.4215435550436775+e*(.1434079197807589+e*(.011522095507358577+e*(.000345017939782574+e*(46361374928786735e-22+e*(3.055689837902576e-8+e*(1.0230451416490724e-10+e*(17201074326816183e-29+e*(13428327623306275e-32+3.763297112699879e-20*e))))))))),n=1+e*(.7515863983533789+e*(.11688892585919138+e*(.0064405152650885865+e*(.00015593440916415301+e*(18462756734893055e-22+e*(1.1269922476399903e-8+e*(36014002958937136e-27+e*(5887545336215784e-29+e*(45200143407412973e-33+1.2544323709001127e-20*e)))))))))),r/n)}(c),a=o*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=18695871016278324e-38+e*(8363544356306774e-34+e*(1375554606332618e-30+e*(10826804113902088e-28+e*(4.4534441586175015e-10+e*(9.828524436884223e-8+e*(11513882611188428e-21+e*(.0006840793809153931+e*(.018764858409257526+e*(.1971028335255234+e*(.5044420736433832+0*e)))))))))),n=18695871016278324e-38+e*(8391588162831187e-34+e*(13879653125957886e-31+e*(11027321506624028e-28+e*(4.6068072814652043e-10+e*(1.0431458965757199e-7+e*(12754507566772912e-21+e*(.0008146791071843061+e*(.02536037414203388+e*(.33774898912002+e*(1.4749575992512833+1*e))))))))))):(r=0+(e=1/e)*(.5044420736433832+e*(.1971028335255234+e*(.018764858409257526+e*(.0006840793809153931+e*(11513882611188428e-21+e*(9.828524436884223e-8+e*(4.4534441586175015e-10+e*(10826804113902088e-28+e*(1375554606332618e-30+e*(8363544356306774e-34+18695871016278324e-38*e)))))))))),n=1+e*(1.4749575992512833+e*(.33774898912002+e*(.02536037414203388+e*(.0008146791071843061+e*(12754507566772912e-21+e*(1.0431458965757199e-7+e*(4.6068072814652043e-10+e*(11027321506624028e-28+e*(13879653125957886e-31+e*(8391588162831187e-34+18695871016278324e-38*e))))))))))),r/n)}(c),_r(o=1.5707963267948966*r,Ur,1,0),t=.5-(i*Ur[1]+a*Ur[0])/(o=Er*n)),e<0&&(t=-t),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).fresnels=r();
//# sourceMappingURL=browser.js.map
