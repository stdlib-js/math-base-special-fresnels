// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).fresnels=n()}(this,(function(){"use strict";var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return r&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,t=e;var o=function(r){return t.call(r)},f=Object.prototype.hasOwnProperty;var u=function(r,n){return null!=r&&f.call(r,n)},i="function"==typeof Symbol?Symbol.toStringTag:"",a=u,c=i,y=e;var v=o,l=function(r){var n,e,t;if(null==r)return y.call(r);e=r[c],n=a(r,c);try{r[c]=void 0}catch(n){return y.call(r)}return t=y.call(r),n?r[c]=e:delete r[c],t},p=n()?l:v,A=p,s="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,w=function(r){return s&&r instanceof Uint32Array||"[object Uint32Array]"===A(r)},d=b;var h=function(){var r,n;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),r=w(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var U="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){throw new Error("not implemented")},N=h()?U:m,I=p,g="function"==typeof Float64Array;var F="function"==typeof Float64Array?Float64Array:null,S=function(r){return g&&r instanceof Float64Array||"[object Float64Array]"===I(r)},H=F;var O=function(){var r,n;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),r=S(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var T="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},E=O()?T:j,G=p,L="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null,M=function(r){return L&&r instanceof Uint8Array||"[object Uint8Array]"===G(r)},x=W;var P=function(){var r,n;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,256,257]),r=M(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var V="function"==typeof Uint8Array?Uint8Array:void 0,Y=function(){throw new Error("not implemented")},_=P()?V:Y,k=p,q="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null,B=function(r){return q&&r instanceof Uint16Array||"[object Uint16Array]"===k(r)},C=z;var D=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=B(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J,K="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:D()?K:Q,uint8:_};(J=new R.uint16(1))[0]=4660;var X=52===new R.uint8(J.buffer)[0],Z=N,$=!0===X?1:0,rr=new E(1),nr=new Z(rr.buffer);var er=function(r){return rr[0]=r,nr[$]},tr=N,or=!0===X?0:1,fr=new E(1),ur=new tr(fr.buffer);var ir,ar,cr=function(r){return fr[0]=r,ur[or]};!0===X?(ir=1,ar=0):(ir=0,ar=1);var yr=N,vr={HIGH:ir,LOW:ar},lr=new E(1),pr=new yr(lr.buffer),Ar=vr.HIGH,sr=vr.LOW;var br=function(r,n){return pr[Ar]=r,pr[sr]=n,lr[0]},wr=br,dr=Math.floor,hr=Number.POSITIVE_INFINITY,Ur=Number.NEGATIVE_INFINITY;var mr=function(r){return r!=r},Nr=hr,Ir=Ur;var gr,Fr,Sr=function(r){return r===Nr||r===Ir};!0===X?(gr=1,Fr=0):(gr=0,Fr=1);var Hr=N,Or={HIGH:gr,LOW:Fr},Tr=new E(1),jr=new Hr(Tr.buffer),Er=Or.HIGH,Gr=Or.LOW;var Lr=function(r,n){return Tr[0]=n,r[0]=jr[Er],r[1]=jr[Gr],r};var Wr=function(r,n){return 1===arguments.length?Lr([0,0],r):Lr(r,n)},Mr=Wr,xr=er,Pr=wr,Vr=[0,0];var Yr=function(r){return Math.abs(r)},_r=Sr,kr=mr,qr=Yr;var zr=function(r,n){return kr(n)||_r(n)?(r[0]=n,r[1]=0,r):0!==n&&qr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Br=function(r,n){return 1===arguments.length?zr([0,0],r):zr(r,n)},Cr=er;var Dr=function(r){var n=Cr(r);return(n=(2146435072&n)>>>20)-1023|0},Jr=hr,Kr=Ur,Qr=mr,Rr=Sr,Xr=function(r,n){var e,t;return Mr(Vr,r),e=Vr[0],e&=2147483647,t=xr(n),Pr(e|=t&=2147483648,Vr[1])},Zr=Br,$r=Dr,rn=Wr,nn=wr,en=[0,0],tn=[0,0];var on=function(r,n){var e,t;return 0===n||0===r||Qr(r)||Rr(r)?r:(Zr(en,r),n+=en[1],(n+=$r(r=en[0]))<-1074?Xr(0,r):n>1023?r<0?Kr:Jr:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,rn(tn,r),e=tn[0],e&=2148532223,t*nn(e|=n+1023<<20,tn[1])))};var fn=function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e};var un=dr,an=on,cn=function(r){return fn(0,r)},yn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ln=16777216,pn=5.960464477539063e-8,An=cn(20),sn=cn(20),bn=cn(20),wn=cn(20);function dn(r,n,e,t,o,f,u,i,a){var c,y,v,l,p,A,s,b,w;for(l=f,w=t[e],b=e,p=0;b>0;p++)y=pn*w|0,wn[p]=w-ln*y|0,w=t[b-1]+y,b-=1;if(w=an(w,o),w-=8*un(.125*w),w-=s=0|w,v=0,o>0?(s+=p=wn[e-1]>>24-o,wn[e-1]-=p<<24-o,v=wn[e-1]>>23-o):0===o?v=wn[e-1]>>23:w>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<e;p++)b=wn[p],0===c?0!==b&&(c=1,wn[p]=16777216-b):wn[p]=16777215-b;if(o>0)switch(o){case 1:wn[e-1]&=8388607;break;case 2:wn[e-1]&=4194303}2===v&&(w=1-w,0!==c&&(w-=an(1,o)))}if(0===w){for(b=0,p=e-1;p>=f;p--)b|=wn[p];if(0===b){for(A=1;0===wn[f-A];A++);for(p=e+1;p<=e+A;p++){for(a[i+p]=yn[u+p],y=0,b=0;b<=i;b++)y+=r[b]*a[i+(p-b)];t[p]=y}return dn(r,n,e+=A,t,o,f,u,i,a)}}if(0===w)for(e-=1,o-=24;0===wn[e];)e-=1,o-=24;else(w=an(w,-o))>=ln?(y=pn*w|0,wn[e]=w-ln*y|0,o+=24,wn[e+=1]=y):wn[e]=0|w;for(y=an(1,o),p=e;p>=0;p--)t[p]=y*wn[p],y*=pn;for(p=e;p>=0;p--){for(y=0,A=0;A<=l&&A<=e-p;A++)y+=vn[A]*t[p+A];bn[e-p]=y}for(y=0,p=e;p>=0;p--)y+=bn[p];for(n[0]=0===v?y:-y,y=bn[0]-y,p=1;p<=e;p++)y+=bn[p];return n[1]=0===v?y:-y,7&s}var hn=function(r,n,e,t){var o,f,u,i,a,c,y;for(4,(f=(e-3)/24|0)<0&&(f=0),i=e-24*(f+1),c=f-(u=t-1),y=u+4,a=0;a<=y;a++)An[a]=c<0?0:yn[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*An[u+(a-c)];sn[a]=o}return 4,dn(r,n,4,sn,i,4,f,u,An)},Un=Math.round,mn=er;var Nn=er,In=cr,gn=wr,Fn=hn,Sn=function(r,n,e){var t,o,f,u,i;return f=r-1.5707963267341256*(t=Un(.6366197723675814*r)),u=6077100506506192e-26*t,i=n>>20|0,e[0]=f-u,i-(mn(e[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((o=f)-(f=o-(u=6077100506303966e-26*t))-u),e[0]=f-u,i-(mn(e[0])>>20&2047)>49&&(u=84784276603689e-45*t-((o=f)-(f=o-(u=20222662487111665e-37*t))-u),e[0]=f-u)),e[1]=f-e[0]-u,t},Hn=1.5707963267341256,On=6077100506506192e-26,Tn=2*On,jn=3*On,En=4*On,Gn=[0,0,0],Ln=[0,0];var Wn=function(r,n){var e,t,o,f,u,i,a;if((o=2147483647&Nn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Sn(r,o,n):o<=1073928572?r>0?(a=r-Hn,n[0]=a-On,n[1]=a-n[0]-On,1):(a=r+Hn,n[0]=a+On,n[1]=a-n[0]+On,-1):r>0?(a=r-2*Hn,n[0]=a-Tn,n[1]=a-n[0]-Tn,2):(a=r+2*Hn,n[0]=a+Tn,n[1]=a-n[0]+Tn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Sn(r,o,n):r>0?(a=r-3*Hn,n[0]=a-jn,n[1]=a-n[0]-jn,3):(a=r+3*Hn,n[0]=a+jn,n[1]=a-n[0]+jn,-3):1075388923===o?Sn(r,o,n):r>0?(a=r-4*Hn,n[0]=a-En,n[1]=a-n[0]-En,4):(a=r+4*Hn,n[0]=a+En,n[1]=a-n[0]+En,-4);if(o<1094263291)return Sn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=In(r),a=gn(o-((t=(o>>20)-1046)<<20|0),e),u=0;u<2;u++)Gn[u]=0|a,a=16777216*(a-Gn[u]);for(Gn[2]=a,f=3;0===Gn[f-1];)f-=1;return i=Fn(Gn,Ln,t,f),r<0?(n[0]=-Ln[0],n[1]=-Ln[1],-i):(n[0]=Ln[0],n[1]=Ln[1],i)},Mn=-.16666666666666632;var xn=er,Pn=Wn,Vn=function(r,n,e){var t,o,f,u,i;return o=.00833333333332249+(i=n*n)*(27557313707070068e-22*i-.0001984126982985795)+i*(u=i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),f=i*n,r[0]=0===e?n+f*(Mn+i*o):n-(i*(.5*e-f*o)-e-f*Mn),o=i*(.0416666666666666+i*(2480158728947673e-20*i-.001388888888887411)),o+=u*u*(i*(2.087572321298175e-9+-11359647557788195e-27*i)-2.7557314351390663e-7),u=1-(t=.5*i),r[1]=u+(1-u-t+(i*o-n*e)),r},Yn=[0,0];var _n=function(r,n){var e,t;if(e=xn(n),(e&=2147483647)<=1072243195)return e<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),Vn(r,n,0);if(e>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(t=Pn(n,Yn),Vn(r,Yn[0],Yn[1]),3&t){case 1:return e=r[1],r[1]=-r[0],r[0]=e,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return e=-r[1],r[1]=r[0],r[0]=e,r;default:return r}};var kn=function(r,n){return 1===arguments.length?_n([0,0],r):_n(r,n)};var qn=kn,zn=Yr,Bn=3.141592653589793,Cn=function(r){var n,e;return 0===r?.5235987755982989:((r<0?-r:r)<=1?(n=318016297876.5678+r*(r*(2548908805.7337637+r*(r*(708840.0452577386+r*(0*r-2991.8191940101983))-62974148.62058625))-44297951805.96978),e=607366389490.0846+r*(22441179564.534092+r*(419320245.8981112+r*(5173438.887700964+r*(45584.78108065326+r*(281.3762688899943+1*r)))))):(n=0+(r=1/r)*(r*(708840.0452577386+r*(r*(2548908805.7337637+r*(318016297876.5678*r-44297951805.96978))-62974148.62058625))-2991.8191940101983),e=1+r*(281.3762688899943+r*(45584.78108065326+r*(5173438.887700964+r*(419320245.8981112+r*(22441179564.534092+607366389490.0846*r)))))),n/e)},Dn=function(r){var n,e;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(n=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),e=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(n=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),e=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),n/e)},Jn=function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),e=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(n=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),e=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),n/e)},Kn=[0,0];return function(r){var n,e,t,o,f,u,i;return(n=(e=zn(r))*e)<2.5625?t=e*n*Cn(u=n*n):e>36974?t=.5:(i=1/((u=Bn*(n=e*e))*u),u=1/u,o=1-i*Dn(i),f=u*Jn(i),qn(Kn,u=1.5707963267948966*n),t=.5-(o*Kn[1]+f*Kn[0])/(u=Bn*e)),r<0&&(t=-t),t}}));
//# sourceMappingURL=bundle.js.map