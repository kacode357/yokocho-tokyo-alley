(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ol="187",Su=0,Ol=1,yu=2,ar=1,wu=2,sr=3,ns=0,pn=1,Vt=2,ts=0,ui=1,bn=2,zl=3,Bl=4,bu=5,Rs=100,Tu=101,Eu=102,Au=103,Ru=104,Cu=200,Pu=201,Lu=202,Du=203,rh=204,oh=205,Iu=206,Nu=207,Uu=208,Fu=209,Ou=210,zu=211,Bu=212,Gu=213,ku=214,ua=0,fa=1,da=2,dr=3,pa=4,ma=5,ga=6,xa=7,ah=0,Hu=1,Vu=2,Kn=0,lh=1,ch=2,hh=3,uh=4,fh=5,dh=6,ph=7,mh=300,Ls=301,pr=302,Co=303,Po=304,is=1e3,fi=1001,va=1002,Wt=1003,Wu=1004,Ar=1005,sn=1006,Lo=1007,Yn=1008,_n=1009,gh=1010,xh=1011,mr=1012,al=1013,Jn=1014,Ln=1015,jt=1016,ll=1017,cl=1018,Ds=1020,vh=35902,Mh=35899,_h=1021,Sh=1022,qn=1023,ki=1026,zi=1027,hl=1028,ul=1029,ss=1030,fl=1031,dl=1033,ro=33776,oo=33777,ao=33778,lo=33779,Ma=35840,_a=35841,Sa=35842,ya=35843,wa=36196,ba=37492,Ta=37496,Ea=37488,Aa=37489,fo=37490,Ra=37491,Ca=37808,Pa=37809,La=37810,Da=37811,Ia=37812,Na=37813,Ua=37814,Fa=37815,Oa=37816,za=37817,Ba=37818,Ga=37819,ka=37820,Ha=37821,Va=36492,Wa=36494,Xa=36495,Ya=36283,qa=36284,po=36285,Za=36286,Xu=3200,Ka=0,Yu=1,hi="",vn="srgb",mo="srgb-linear",go="linear",Ct="srgb",Do=7680,qu=519,Zu=512,Ku=513,Ju=514,yh=515,Qu=516,ju=517,wh=518,bh=519,Th=35044,Gl="300 es",Dn=2e3,gr=2001;function $u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){const i=xo("canvas");return i.style.display="block",i}const kl={};function vo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Eh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function tt(...i){i=Eh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function bt(...i){i=Eh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Cs(...i){const e=i.join(" ");e in kl||(kl[e]=!0,tt(...i))}function tf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const nf={[ua]:ua,[da]:ga,[pa]:pa,[dr]:ma,[fa]:fa,[ga]:da,[xa]:xa,[ma]:dr};class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hl=1234567;const lr=Math.PI/180,Is=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function pl(i,e){return(i%e+e)%e}function sf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rf(i,e,t){return i!==e?(t-i)/(e-i):0}function cr(i,e,t){return(1-t)*i+t*e}function of(i,e,t,n){return cr(i,e,1-Math.exp(-t*n))}function af(i,e=1){return e-Math.abs(pl(i,e*2)-e)}function lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uf(i,e){return i+Math.random()*(e-i)}function ff(i){return i*(.5-Math.random())}function df(i){i!==void 0&&(Hl=i);let e=Hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pf(i){return i*lr}function mf(i){return i*Is}function gf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ah(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ml(i,e){if(e.constructor===Float32Array)return i;const t=bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function gl(i,e){if(e.constructor===Float32Array)return i;const t=bo(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const Oi={DEG2RAD:lr,RAD2DEG:Is,generateUUID:Si,clamp:mt,euclideanModulo:pl,mapLinear:sf,inverseLerp:rf,lerp:cr,damp:of,pingpong:af,smoothstep:lf,smootherstep:cf,randInt:hf,randFloat:uf,randFloatSpread:ff,seededRandom:df,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:xf,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:vf,normalize:gl,denormalize:ml},Il=class Il{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Il.prototype.isVector2=!0;let B=Il;class zs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||l!==f||c!==d||h!==g){let p=l*f+c*d+h*g+u*v;p<0&&(f=-f,d=-d,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),S=Math.sin(M);m=Math.sin(m*M)/S,a=Math.sin(a*M)/S,l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+v*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+v*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nl=class Nl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nl.prototype.isVector3=!0;let D=Nl;const Io=new D,Vl=new zs,Ul=class Ul{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],S=s[4],_=s[7],A=s[2],T=s[5],x=s[8];return r[0]=o*v+a*M+l*A,r[3]=o*p+a*S+l*T,r[6]=o*m+a*_+l*x,r[1]=c*v+h*M+u*A,r[4]=c*p+h*S+u*T,r[7]=c*m+h*_+u*x,r[2]=f*v+d*M+g*A,r[5]=f*p+d*S+g*T,r[8]=f*m+d*_+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ul.prototype.isMatrix3=!0;let at=Ul;const No=new at,Wl=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){const i={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mo]:{primaries:e,whitePoint:n,transfer:go,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}const yt=Mf();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class _f{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=xo("canvas")),cs.width=e.width,cs.height=e.height;const s=cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sf=0;class xl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uo(s[o].image)):r.push(Uo(s[o]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let yf=0;const Fo=new D;class $t extends Vi{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,n=fi,s=fi,r=sn,o=Yn,a=qn,l=_n,c=$t.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Si(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=mh;$t.DEFAULT_ANISOTROPY=1;const Fl=class Fl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,_=(d+1)/2,A=(m+1)/2,T=(h+f)/4,x=(u+v)/4,w=(g+p)/4;return S>_&&S>A?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=x/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=w/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=w/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fl.prototype.isVector4=!0;let Ft=Fl;class wf extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new $t({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new xl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends wf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rh extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bf extends $t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wo=class wo{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,v,p)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wo().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/hs.setFromMatrixColumn(e,0).length(),r=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Ef)}lookAt(e,t,n){const s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),Rr.crossVectors(gn,Pi),s[0]=Pi.x,s[4]=Rr.x,s[8]=gn.x,s[1]=Pi.y,s[5]=Rr.y,s[9]=gn.y,s[2]=Pi.z,s[6]=Rr.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],S=n[7],_=n[11],A=n[15],T=s[0],x=s[4],w=s[8],U=s[12],E=s[1],P=s[5],I=s[9],z=s[13],L=s[2],G=s[6],K=s[10],W=s[14],ce=s[3],V=s[7],j=s[11],se=s[15];return r[0]=o*T+a*E+l*L+c*ce,r[4]=o*x+a*P+l*G+c*V,r[8]=o*w+a*I+l*K+c*j,r[12]=o*U+a*z+l*W+c*se,r[1]=h*T+u*E+f*L+d*ce,r[5]=h*x+u*P+f*G+d*V,r[9]=h*w+u*I+f*K+d*j,r[13]=h*U+u*z+f*W+d*se,r[2]=g*T+v*E+p*L+m*ce,r[6]=g*x+v*P+p*G+m*V,r[10]=g*w+v*I+p*K+m*j,r[14]=g*U+v*z+p*W+m*se,r[3]=M*T+S*E+_*L+A*ce,r[7]=M*x+S*P+_*G+A*V,r[11]=M*w+S*I+_*K+A*j,r[15]=M*U+S*z+_*W+A*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],p=e[11],m=e[15],M=l*d-c*f,S=a*d-c*u,_=a*f-l*u,A=o*d-c*h,T=o*f-l*h,x=o*u-a*h;return t*(v*M-p*S+m*_)-n*(g*M-p*A+m*T)+s*(g*S-v*A+m*x)-r*(g*_-v*T+p*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],p=e[14],m=e[15],M=t*a-n*o,S=t*l-s*o,_=t*c-r*o,A=n*l-s*a,T=n*c-r*a,x=s*c-r*l,w=h*v-u*g,U=h*p-f*g,E=h*m-d*g,P=u*p-f*v,I=u*m-d*v,z=f*m-d*p,L=M*z-S*I+_*P+A*E-T*U+x*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/L;return e[0]=(a*z-l*I+c*P)*G,e[1]=(s*I-n*z-r*P)*G,e[2]=(v*x-p*T+m*A)*G,e[3]=(f*T-u*x-d*A)*G,e[4]=(l*E-o*z-c*U)*G,e[5]=(t*z-s*E+r*U)*G,e[6]=(p*_-g*x-m*S)*G,e[7]=(h*x-f*_+d*S)*G,e[8]=(o*I-a*E+c*w)*G,e[9]=(n*E-t*I-r*w)*G,e[10]=(g*T-v*_+m*M)*G,e[11]=(u*_-h*T-d*M)*G,e[12]=(a*U-o*P-l*w)*G,e[13]=(t*P-n*U+s*w)*G,e[14]=(v*S-g*A-p*M)*G,e[15]=(h*A-u*S+f*M)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,v=o*h,p=o*u,m=a*u,M=l*c,S=l*h,_=l*u,A=n.x,T=n.y,x=n.z;return s[0]=(1-(v+m))*A,s[1]=(d+_)*A,s[2]=(g-S)*A,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(f+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+S)*x,s[9]=(p-M)*x,s[10]=(1-(f+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=hs.set(s[0],s[1],s[2]).length();const a=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),En.copy(this);const c=1/o,h=1/a,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Dn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Dn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===gr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Dn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Dn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===gr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wo.prototype.isMatrix4=!0;let Et=wo;const hs=new D,En=new Et,Tf=new D(0,0,0),Ef=new D(1,1,1),Pi=new D,Rr=new D,gn=new D,Yl=new Et,ql=new zs;class Qn{constructor(e=0,t=0,n=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class vl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Af=0;const Zl=new D,us=new zs,ii=new Et,Cr=new D,Xs=new D,Rf=new D,Cf=new zs,Kl=new D(1,0,0),Jl=new D(0,1,0),Ql=new D(0,0,1),jl={type:"added"},Pf={type:"removed"},fs={type:"childadded",child:null},Oo={type:"childremoved",child:null};class kt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new D,t=new Qn,n=new zs,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new at}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return Zl.copy(e).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Xs,Cr,this.up):ii.lookAt(Cr,Xs,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),us.setFromRotationMatrix(ii),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jl),fs.child=e,this.dispatchEvent(fs),fs.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pf),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jl),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Cf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kt.DEFAULT_UP=new D(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lf={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=pl(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bo(o,r,e+1/3),this.g=Bo(o,r,e),this.b=Bo(o,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=vn){function n(r){r!==void 0&&parseFloat(r)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const n=Ch[e.toLowerCase()];return n!==void 0?this.setHex(n,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return yt.workingToColorSpace(ln.copy(this),e),Math.round(mt(ln.r*255,0,255))*65536+Math.round(mt(ln.g*255,0,255))*256+Math.round(mt(ln.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(ln.copy(this),t);const n=ln.r,s=ln.g,r=ln.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=vn){yt.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,s=ln.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Pr);const n=cr(Li.h,Pr.h,t),s=cr(Li.s,Pr.s,t),r=cr(Li.l,Pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new je;je.NAMES=Ch;class Ml{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Ml(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ph extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const An=new D,si=new D,Go=new D,ri=new D,ds=new D,ps=new D,$l=new D,ko=new D,Ho=new D,Vo=new D,Wo=new Ft,Xo=new Ft,Yo=new Ft;class Tn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){An.subVectors(s,t),si.subVectors(n,t),Go.subVectors(e,t);const o=An.dot(An),a=An.dot(si),l=An.dot(Go),c=si.dot(si),h=si.dot(Go),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wo.setScalar(0),Xo.setScalar(0),Yo.setScalar(0),Wo.fromBufferAttribute(e,t),Xo.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wo,r.x),o.addScaledVector(Xo,r.y),o.addScaledVector(Yo,r.z),o}static isFrontFacing(e,t,n,s){return An.subVectors(n,t),si.subVectors(e,t),An.cross(si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),si.subVectors(this.a,this.b),An.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ds.subVectors(s,n),ps.subVectors(r,n),ko.subVectors(e,n);const l=ds.dot(ko),c=ps.dot(ko);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,s);const h=ds.dot(Ho),u=ps.dot(Ho);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(ds,o);Vo.subVectors(e,r);const d=ds.dot(Vo),g=ps.dot(Vo);if(g>=0&&d<=g)return t.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ps,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return $l.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector($l,a);const m=1/(p+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),Dr.subVectors(this.max,Ys),ms.subVectors(e.a,Ys),gs.subVectors(e.b,Ys),xs.subVectors(e.c,Ys),Di.subVectors(gs,ms),Ii.subVectors(xs,gs),Ji.subVectors(ms,xs);let t=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!qo(t,ms,gs,xs,Dr)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,ms,gs,xs,Dr))?!1:(Ir.crossVectors(Di,Ii),t=[Ir.x,Ir.y,Ir.z],qo(t,ms,gs,xs,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,Lr=new yi,ms=new D,gs=new D,xs=new D,Di=new D,Ii=new D,Ji=new D,Ys=new D,Dr=new D,Ir=new D,Qi=new D;function qo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ht=new D,Nr=new B;let Df=0;class gi extends Vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Df++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?bo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ml(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):gl(e,this.array)}}class Lh extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dh extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const If=new yi,qs=new D,Zo=new D;class wr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):If.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const t=qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Zo)),this.expandByPoint(qs.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Nf=0;const yn=new Et,Ko=new kt,vs=new D,xn=new yi,Zs=new yi,Jt=new D;class tn extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?Dh:Lh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(xn.min,Zs.min),xn.expandByPoint(Jt),Jt.addVectors(xn.max,Zs.max),xn.expandByPoint(Jt)):(xn.expandByPoint(Zs.min),xn.expandByPoint(Zs.max))}xn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Jt.add(vs)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)a[U]=new D,l[U]=new D;const h=new D,u=new D,f=new D,d=new B,g=new B,v=new B,p=new D,m=new D;function M(U,E,P){c[U]=c[E]=c[P]=1,h.fromBufferAttribute(n,U),u.fromBufferAttribute(n,E),f.fromBufferAttribute(n,P),d.fromBufferAttribute(r,U),g.fromBufferAttribute(r,E),v.fromBufferAttribute(r,P),u.sub(h),f.sub(h),g.sub(d),v.sub(d);const I=1/(g.x*v.y-v.x*g.y);isFinite(I)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(I),m.copy(f).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(I),a[U].add(p),a[E].add(p),a[P].add(p),l[U].add(m),l[E].add(m),l[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,E=S.length;U<E;++U){const P=S[U],I=P.start,z=P.count;for(let L=I,G=I+z;L<G;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new D,A=new D,T=new D,x=new D;function w(U){T.fromBufferAttribute(s,U),x.copy(T);const E=a[U];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),A.crossVectors(x,E);const I=A.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,I)}for(let U=0,E=n.count;U<E;++U)c[U]&&w(U);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new gi(f,h,u)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=ec(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=ec(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function ec(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Si()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const hn=new D;class Mo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?bo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ml(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):gl(e,this.data.array)}}const Jo=new D,Ff=new D,Of=new at;class ci{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Jo.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Jo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),s=this.coplanarPoint(Jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let zf=0;class Bs extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=ui,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Do,this.stencilZFail=Do,this.stencilZPass=Do,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new B().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hn extends Bs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const Ks=new D,_s=new D,Ss=new D,ys=new B,Js=new B,Ih=new Et,Ur=new D,Qs=new D,Fr=new D,tc=new B,Qo=new B,nc=new B;class li extends kt{constructor(e=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new tn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uf(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Mo(n,3,0,!1)),Ms.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Ih.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-Ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Or(Ur.set(-.5,-.5,0),Ss,o,_s,s,r),Or(Qs.set(.5,-.5,0),Ss,o,_s,s,r),Or(Fr.set(.5,.5,0),Ss,o,_s,s,r),tc.set(0,0),Qo.set(1,0),nc.set(1,1);let a=e.ray.intersectTriangle(Ur,Qs,Fr,!1,Ks);if(a===null&&(Or(Qs.set(-.5,.5,0),Ss,o,_s,s,r),Qo.set(0,1),a=e.ray.intersectTriangle(Ur,Fr,Qs,!1,Ks),a===null))return;const l=e.ray.origin.distanceTo(Ks);l<e.near||l>e.far||t.push({distance:l,point:Ks.clone(),uv:Tn.getInterpolation(Ks,Ur,Qs,Fr,tc,Qo,nc,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function Or(i,e,t,n,s,r){ys.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*ys.x-s*ys.y,Js.y=s*ys.x+r*ys.y):Js.copy(ys),i.copy(e),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(Ih)}const ai=new D,jo=new D,zr=new D,Br=new D;class Nh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jo.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(jo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=Br.dot(this.direction),l=-Br.dot(zr),c=Br.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jo).addScaledVector(zr,f),d}intersectSphere(e,t){if(e.radius<0)return null;ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,g=t.x-o.x,v=t.y-o.y,p=t.z-o.z,m=n.x-o.x,M=n.y-o.y,S=n.z-o.z,_=Math.abs(l),A=Math.abs(c),T=Math.abs(h);let x,w,U,E,P,I,z,L,G,K,W,ce;if(_>=A&&_>=T?(U=l,I=u,G=g,ce=m,l>=0?(x=c,w=h,E=f,P=d,z=v,L=p,K=M,W=S):(x=h,w=c,E=d,P=f,z=p,L=v,K=S,W=M)):A>=T?(U=c,I=f,G=v,ce=M,c>=0?(x=h,w=l,E=d,P=u,z=p,L=g,K=S,W=m):(x=l,w=h,E=u,P=d,z=g,L=p,K=m,W=S)):(U=h,I=d,G=p,ce=S,h>=0?(x=l,w=c,E=u,P=f,z=g,L=v,K=m,W=M):(x=c,w=l,E=f,P=u,z=v,L=g,K=M,W=m)),U===0)return null;const V=x/U,j=w/U,se=1/U,Re=E-V*I,Ce=P-j*I,q=z-V*G,pe=L-j*G,le=K-V*ce,Ue=W-j*ce,ge=le*pe-Ue*q,Xe=Re*Ue-Ce*le,wt=q*Ce-pe*Re;if(s){if(ge<0||Xe<0||wt<0)return null}else if((ge<0||Xe<0||wt<0)&&(ge>0||Xe>0||wt>0))return null;const Ve=ge+Xe+wt;if(Ve===0)return null;const nt=se*(ge*I+Xe*G+wt*ce);return(Ve>0?nt<0:nt>0)?null:this.at(nt/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ic=new Et,ji=new Nh,Gr=new wr,sc=new D,kr=new D,Hr=new D,Vr=new D,$o=new D,Wr=new D,rc=new D,Xr=new D;class C extends kt{constructor(e=new tn,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&($o.fromBufferAttribute(u,e),o?Wr.addScaledVector($o,h):Wr.addScaledVector($o.sub(t),h))}t.add(Wr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Gr.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Gr,sc)===null||ji.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(ic.copy(r).invert(),ji.copy(e.ray).applyMatrix4(ic),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=M,A=S;_<A;_+=3){const T=a.getX(_),x=a.getX(_+1),w=a.getX(_+2);s=Yr(this,m,e,n,c,h,u,T,x,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const M=a.getX(p),S=a.getX(p+1),_=a.getX(p+2);s=Yr(this,o,e,n,c,h,u,M,S,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=M,A=S;_<A;_+=3){const T=_,x=_+1,w=_+2;s=Yr(this,m,e,n,c,h,u,T,x,w),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const M=p,S=p+1,_=p+2;s=Yr(this,o,e,n,c,h,u,M,S,_),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Bf(i,e,t,n,s,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ns,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:i}}function Yr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,kr),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Vr);const h=Bf(i,e,t,n,kr,Hr,Vr,rc);if(h){const u=new D;Tn.getBarycoord(rc,kr,Hr,Vr,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,u,new B)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new B)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};Tn.getNormal(kr,Hr,Vr,f.normal),h.face=f,h.barycoord=u}return h}class Uh extends $t{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Wt,h=Wt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hr extends gi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Et,oc=new Et,qr=[],ac=new yi,Gf=new Et,js=new C,$s=new wr;class ea extends C{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),ac.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ws),$s.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),oc.multiplyMatrices(n,ws),js.matrixWorld=oc,js.raycast(e,qr);for(let o=0,a=qr.length;o<a;o++){const l=qr[o];l.instanceId=r,l.object=this,t.push(l)}qr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uh(new Float32Array(s*this.count),s,this.count,hl,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $i=new wr,kf=new B(.5,.5),Zr=new D;class xr{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,o=new ci){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],S=r[13],_=r[14],A=r[15];if(s[0].setComponents(c-o,d-h,m-g,A-M).normalize(),s[1].setComponents(c+o,d+h,m+g,A+M).normalize(),s[2].setComponents(c+a,d+u,m+v,A+S).normalize(),s[3].setComponents(c-a,d-u,m-v,A-S).normalize(),n)s[4].setComponents(l,f,p,_).normalize(),s[5].setComponents(c-l,d-f,m-p,A-_).normalize();else if(s[4].setComponents(c-l,d-f,m-p,A-_).normalize(),t===Dn)s[5].setComponents(c+l,d+f,m+p,A+_).normalize();else if(t===gr)s[5].setComponents(l,f,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const t=kf.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zr.x=s.normal.x>0?e.max.x:e.min.x,Zr.y=s.normal.y>0?e.max.y:e.min.y,Zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const lc=new Et;class _l{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];lc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new xr),n[s].setFromProjectionMatrix(lc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new xr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new _l().copy(this)}}class Fh extends $t{constructor(e=[],t=Ls,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oh extends $t{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ns extends $t{constructor(e,t,n=Jn,s,r,o,a=Wt,l=Wt,c,h=ki,u=1){if(h!==ki&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zh extends Ns{constructor(e,t=Jn,n=Ls,s,r,o=Wt,a=Wt,l,c=ki){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bh extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class st extends tn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(v,p,m,M,S,_,A,T,x,w,U){const E=_/x,P=A/w,I=_/2,z=A/2,L=T/2,G=x+1,K=w+1;let W=0,ce=0;const V=new D;for(let j=0;j<K;j++){const se=j*P-z;for(let Re=0;Re<G;Re++){const Ce=Re*E-I;V[v]=Ce*M,V[p]=se*S,V[m]=L,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[m]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(Re/x),u.push(1-j/w),W+=1}}for(let j=0;j<w;j++)for(let se=0;se<x;se++){const Re=f+se+G*j,Ce=f+se+G*(j+1),q=f+(se+1)+G*(j+1),pe=f+(se+1)+G*j;l.push(Re,Ce,pe),l.push(Ce,q,pe),ce+=6}a.addGroup(d,ce,U),d+=ce,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hi extends tn{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new D,h=new B;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fe extends tn{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],p=n/2;let m=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(d,2));function M(){const _=new D,A=new D;let T=0;const x=(t-e)/n;for(let w=0;w<=r;w++){const U=[],E=w/r,P=E*(t-e)+e;for(let I=0;I<=s;I++){const z=I/s,L=z*l+a,G=Math.sin(L),K=Math.cos(L);A.x=P*G,A.y=-E*n+p,A.z=P*K,u.push(A.x,A.y,A.z),_.set(G,x,K).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-E),U.push(g++)}v.push(U)}for(let w=0;w<s;w++)for(let U=0;U<r;U++){const E=v[U][w],P=v[U+1][w],I=v[U+1][w+1],z=v[U][w+1];(e>0||U!==0)&&(h.push(E,P,z),T+=3),(t>0||U!==r-1)&&(h.push(P,I,z),T+=3)}c.addGroup(m,T,0),m+=T}function S(_){const A=g,T=new B,x=new D;let w=0;const U=_===!0?e:t,E=_===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*E,0),f.push(0,E,0),d.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const L=I/s*l+a,G=Math.cos(L),K=Math.sin(L);x.x=U*K,x.y=p*E,x.z=U*G,u.push(x.x,x.y,x.z),f.push(0,E,0),T.x=G*.5+.5,T.y=K*.5*E+.5,d.push(T.x,T.y),g++}for(let I=0;I<s;I++){const z=A+I,L=P+I;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),w+=3}c.addGroup(m,w,_===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sl extends Fe{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Sl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new B:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],o=[],a=new D,l=new Et;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(mt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(mt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class yl extends $n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new B){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hf extends yl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const cc=new D,hc=new D,ta=new wl,na=new wl,ia=new wl;class Mi extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(hc.subVectors(s[0],s[1]).add(s[0]),c=hc);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(cc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),ta.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,p),na.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,p),ia.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),na.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ia.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ta.calc(l),na.calc(l),ia.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function uc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Vf(i,e){const t=1-i;return t*t*e}function Wf(i,e){return 2*(1-i)*i*e}function Xf(i,e){return i*i*e}function ur(i,e,t,n){return Vf(i,e)+Wf(i,t)+Xf(i,n)}function Yf(i,e){const t=1-i;return t*t*t*e}function qf(i,e){const t=1-i;return 3*t*t*i*e}function Zf(i,e){return 3*(1-i)*i*i*e}function Kf(i,e){return i*i*i*e}function fr(i,e,t,n,s){return Yf(i,e)+qf(i,t)+Zf(i,n)+Kf(i,s)}class Gh extends $n{constructor(e=new B,t=new B,n=new B,s=new B){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(e,s.x,r.x,o.x,a.x),fr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jf extends $n{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fr(e,s.x,r.x,o.x,a.x),fr(e,s.y,r.y,o.y,a.y),fr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kh extends $n{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qf extends $n{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hh extends $n{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vh extends $n{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ur(e,s.x,r.x,o.x),ur(e,s.y,r.y,o.y),ur(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wh extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new B){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(uc(a,l.x,c.x,h.x,u.x),uc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new B().fromArray(s))}return this}}var _o=Object.freeze({__proto__:null,ArcCurve:Hf,CatmullRomCurve3:Mi,CubicBezierCurve:Gh,CubicBezierCurve3:Jf,EllipseCurve:yl,LineCurve:kh,LineCurve3:Qf,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:Vh,SplineCurve:Wh});class jf extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _o[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new _o[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class fc extends jf{constructor(e){super(),this.type="Path",this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new kh(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Hh(this.currentPoint.clone(),new B(e,t),new B(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Gh(this.currentPoint.clone(),new B(e,t),new B(n,s),new B(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Wh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new yl(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gs extends fc{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new fc().fromJSON(s))}return this}}function $f(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Xh(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=sd(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return vr(r,o,t,a,l,c,0),o}function Xh(i,e,t,n,s){let r;if(s===md(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=dc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=dc(o/n|0,i[o],i[o+1],r);return r&&Us(r,r.next)&&(_r(r),r=r.next),r}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Us(t,t.next)||Gt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&cd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?td(i,n,s,r):ed(i)){e.push(l.i,i.i,c.i),_r(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=nd(rs(i),e),vr(i,e,t,n,s,r,2)):o===2&&id(i,e,t,n,s,r):vr(rs(i),e,t,n,s,r,1);break}}}function ed(i){const e=i.prev,t=i,n=i.next;if(Gt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&rr(s,a,r,l,o,c,g.x,g.y)&&Gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function td(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Gt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),v=Math.max(a,l,c),p=Math.max(h,u,f),m=Ja(d,g,e,t,n),M=Ja(v,p,e,t,n);let S=i.prevZ,_=i.nextZ;for(;S&&S.z>=m&&_&&_.z<=M;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&rr(a,h,l,u,c,f,S.x,S.y)&&Gt(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&rr(a,h,l,u,c,f,_.x,_.y)&&Gt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&rr(a,h,l,u,c,f,S.x,S.y)&&Gt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==o&&rr(a,h,l,u,c,f,_.x,_.y)&&Gt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function nd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Us(n,s)&&qh(n,t,t.next,s)&&Mr(n,s)&&Mr(s,n)&&(e.push(n.i,t.i,s.i),_r(t),_r(t.next),t=i=s),t=t.next}while(t!==i);return rs(t)}function id(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fd(o,a)){let l=Zh(o,a);o=rs(o,o.next),l=rs(l,l.next),vr(o,e,t,n,s,r,0),vr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function sd(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Xh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ud(c))}s.sort(rd);for(let r=0;r<s.length;r++)t=od(s[r],t);return t}function rd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function od(i,e){const t=ad(i,e);if(!t)return e;const n=Zh(t,i);return rs(n,n.next),rs(t,t.next)}function ad(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Us(i,t))return t;do{if(Us(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Yh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Mr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ld(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function ld(i,e){return Gt(i.prev,i,e.prev)<0&&Gt(e.next,i,i.next)<0}function cd(i,e,t,n){let s=i;do s.z===0&&(s.z=Ja(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hd(s)}function hd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Ja(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ud(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Yh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function rr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Yh(i,e,t,n,s,r,o,a)}function fd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!dd(i,e)&&(Mr(i,e)&&Mr(e,i)&&pd(i,e)&&(Gt(i.prev,i,e.prev)||Gt(i,e.prev,e))||Us(i,e)&&Gt(i.prev,i,i.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Us(i,e){return i.x===e.x&&i.y===e.y}function qh(i,e,t,n){const s=Jr(Gt(i,e,t)),r=Jr(Gt(i,e,n)),o=Jr(Gt(t,n,i)),a=Jr(Gt(t,n,e));return!!(s!==r&&o!==a||s===0&&Kr(i,t,e)||r===0&&Kr(i,n,e)||o===0&&Kr(t,i,n)||a===0&&Kr(t,e,n))}function Kr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Jr(i){return i>0?1:i<0?-1:0}function dd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mr(i,e){return Gt(i.prev,i,i.next)<0?Gt(i,e,i.next)>=0&&Gt(i,i.prev,e)>=0:Gt(i,e,i.prev)<0||Gt(i,i.next,e)<0}function pd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zh(i,e){const t=Qa(i.i,i.x,i.y),n=Qa(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function dc(i,e,t,n){const s=Qa(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qa(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function md(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class gd{static triangulate(e,t,n=2){return $f(e,t,n)}}class di{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return di.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];pc(e),mc(n,e);let o=e.length;t.forEach(pc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,mc(n,t[l]);const a=gd.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function pc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class br extends tn{constructor(e=new Gs([new B(.5,.5),new B(-.5,.5),new B(-.5,-.5),new B(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:xd;let S,_=!1,A,T,x,w;if(m){S=m.getSpacedPoints(h),_=!0,f=!1;const oe=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,oe),T=new D,x=new D,w=new D}f||(p=0,d=0,g=0,v=0);const U=a.extractPoints(c);let E=U.shape;const P=U.holes;if(!di.isClockWise(E)){E=E.reverse();for(let oe=0,ve=P.length;oe<ve;oe++){const Me=P[oe];di.isClockWise(Me)&&(P[oe]=Me.reverse())}}function z(oe){const Me=10000000000000001e-36;let Ne=oe[0];for(let Te=1;Te<=oe.length;Te++){const Qe=Te%oe.length,Ge=oe[Qe],it=Ge.x-Ne.x,dt=Ge.y-Ne.y,gt=it*it+dt*dt,O=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(Ne.x),Math.abs(Ne.y)),Lt=Me*O*O;if(gt<=Lt){oe.splice(Qe,1),Te--;continue}Ne=Ge}}z(E),P.forEach(z);const L=P.length,G=E;for(let oe=0;oe<L;oe++){const ve=P[oe];E=E.concat(ve)}function K(oe,ve,Me){return ve||bt("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ve,Me)}const W=E.length;function ce(oe,ve,Me){let Ne,Te,Qe;const Ge=oe.x-ve.x,it=oe.y-ve.y,dt=Me.x-oe.x,gt=Me.y-oe.y,O=Ge*Ge+it*it,Lt=Ge*gt-it*dt;if(Math.abs(Lt)>Number.EPSILON){const ct=Math.sqrt(O),At=Math.sqrt(dt*dt+gt*gt),Ee=ve.x-it/ct,Dt=ve.y+Ge/ct,qe=Me.x-gt/At,Ze=Me.y+dt/At,R=((qe-Ee)*gt-(Ze-Dt)*dt)/(Ge*gt-it*dt);Ne=Ee+Ge*R-oe.x,Te=Dt+it*R-oe.y;const y=Ne*Ne+Te*Te;if(y<=2)return new B(Ne,Te);Qe=Math.sqrt(y/2)}else{let ct=!1;Ge>Number.EPSILON?dt>Number.EPSILON&&(ct=!0):Ge<-Number.EPSILON?dt<-Number.EPSILON&&(ct=!0):Math.sign(it)===Math.sign(gt)&&(ct=!0),ct?(Ne=-it,Te=Ge,Qe=Math.sqrt(O)):(Ne=Ge,Te=it,Qe=Math.sqrt(O/2))}return new B(Ne/Qe,Te/Qe)}const V=[];for(let oe=0,ve=G.length,Me=ve-1,Ne=oe+1;oe<ve;oe++,Me++,Ne++)Me===ve&&(Me=0),Ne===ve&&(Ne=0),V[oe]=ce(G[oe],G[Me],G[Ne]);const j=[];let se,Re=V.concat();for(let oe=0,ve=L;oe<ve;oe++){const Me=P[oe];se=[];for(let Ne=0,Te=Me.length,Qe=Te-1,Ge=Ne+1;Ne<Te;Ne++,Qe++,Ge++)Qe===Te&&(Qe=0),Ge===Te&&(Ge=0),se[Ne]=ce(Me[Ne],Me[Qe],Me[Ge]);j.push(se),Re=Re.concat(se)}let Ce;if(p===0)Ce=di.triangulateShape(G,P);else{const oe=[],ve=[];for(let Me=0;Me<p;Me++){const Ne=Me/p,Te=d*Math.cos(Ne*Math.PI/2),Qe=g*Math.sin(Ne*Math.PI/2)+v;for(let Ge=0,it=G.length;Ge<it;Ge++){const dt=K(G[Ge],V[Ge],Qe);Xe(dt.x,dt.y,-Te),Ne===0&&oe.push(dt)}for(let Ge=0,it=L;Ge<it;Ge++){const dt=P[Ge];se=j[Ge];const gt=[];for(let O=0,Lt=dt.length;O<Lt;O++){const ct=K(dt[O],se[O],Qe);Xe(ct.x,ct.y,-Te),Ne===0&&gt.push(ct)}Ne===0&&ve.push(gt)}}Ce=di.triangulateShape(oe,ve)}const q=Ce.length,pe=g+v;for(let oe=0;oe<W;oe++){const ve=f?K(E[oe],Re[oe],pe):E[oe];_?(x.copy(A.normals[0]).multiplyScalar(ve.x),T.copy(A.binormals[0]).multiplyScalar(ve.y),w.copy(S[0]).add(x).add(T),Xe(w.x,w.y,w.z)):Xe(ve.x,ve.y,0)}for(let oe=1;oe<=h;oe++)for(let ve=0;ve<W;ve++){const Me=f?K(E[ve],Re[ve],pe):E[ve];_?(x.copy(A.normals[oe]).multiplyScalar(Me.x),T.copy(A.binormals[oe]).multiplyScalar(Me.y),w.copy(S[oe]).add(x).add(T),Xe(w.x,w.y,w.z)):Xe(Me.x,Me.y,u/h*oe)}for(let oe=p-1;oe>=0;oe--){const ve=oe/p,Me=d*Math.cos(ve*Math.PI/2),Ne=g*Math.sin(ve*Math.PI/2)+v;for(let Te=0,Qe=G.length;Te<Qe;Te++){const Ge=K(G[Te],V[Te],Ne);Xe(Ge.x,Ge.y,u+Me)}for(let Te=0,Qe=P.length;Te<Qe;Te++){const Ge=P[Te];se=j[Te];for(let it=0,dt=Ge.length;it<dt;it++){const gt=K(Ge[it],se[it],Ne);_?Xe(gt.x,gt.y+S[h-1].y,S[h-1].x+Me):Xe(gt.x,gt.y,u+Me)}}}le(),Ue();function le(){const oe=s.length/3;if(f){let ve=0,Me=W*ve;for(let Ne=0;Ne<q;Ne++){const Te=Ce[Ne];wt(Te[2]+Me,Te[1]+Me,Te[0]+Me)}ve=h+p*2,Me=W*ve;for(let Ne=0;Ne<q;Ne++){const Te=Ce[Ne];wt(Te[0]+Me,Te[1]+Me,Te[2]+Me)}}else{for(let ve=0;ve<q;ve++){const Me=Ce[ve];wt(Me[2],Me[1],Me[0])}for(let ve=0;ve<q;ve++){const Me=Ce[ve];wt(Me[0]+W*h,Me[1]+W*h,Me[2]+W*h)}}n.addGroup(oe,s.length/3-oe,0)}function Ue(){const oe=s.length/3;let ve=0;ge(G,ve),ve+=G.length;for(let Me=0,Ne=P.length;Me<Ne;Me++){const Te=P[Me];ge(Te,ve),ve+=Te.length}n.addGroup(oe,s.length/3-oe,1)}function ge(oe,ve){let Me=oe.length;for(;--Me>=0;){const Ne=Me;let Te=Me-1;Te<0&&(Te=oe.length-1);for(let Qe=0,Ge=h+p*2;Qe<Ge;Qe++){const it=W*Qe,dt=W*(Qe+1),gt=ve+Ne+it,O=ve+Te+it,Lt=ve+Te+dt,ct=ve+Ne+dt;Ve(gt,O,Lt,ct)}}}function Xe(oe,ve,Me){l.push(oe),l.push(ve),l.push(Me)}function wt(oe,ve,Me){nt(oe),nt(ve),nt(Me);const Ne=s.length/3,Te=M.generateTopUV(n,s,Ne-3,Ne-2,Ne-1);rt(Te[0]),rt(Te[1]),rt(Te[2])}function Ve(oe,ve,Me,Ne){nt(oe),nt(ve),nt(Ne),nt(ve),nt(Me),nt(Ne);const Te=s.length/3,Qe=M.generateSideWallUV(n,s,Te-6,Te-3,Te-2,Te-1);rt(Qe[0]),rt(Qe[1]),rt(Qe[3]),rt(Qe[1]),rt(Qe[2]),rt(Qe[3])}function nt(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function rt(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _o[s.type]().fromJSON(s)),new br(n,e.options)}}const xd={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new B(r,o),new B(a,l),new B(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],v=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new B(o,1-l),new B(c,1-u),new B(f,1-g),new B(v,1-m)]:[new B(a,1-l),new B(h,1-u),new B(d,1-g),new B(p,1-m)]}};function vd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nn extends tn{constructor(e=[new B(0,-.5),new B(.5,0),new B(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=mt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new D,f=new B,d=new D,g=new D,v=new D;let p=0,m=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:p=e[M+1].x-e[M].x,m=e[M+1].y-e[M].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let M=0;M<=t;M++){const S=n+M*h*s,_=Math.sin(S),A=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*A,o.push(u.x,u.y,u.z),f.x=M/t,f.y=T/(e.length-1),a.push(f.x,f.y);const x=l[3*T+0]*_,w=l[3*T+1],U=l[3*T+0]*A;c.push(x,w,U)}}for(let M=0;M<t;M++)for(let S=0;S<e.length-1;S++){const _=S+M*e.length,A=_,T=_+e.length,x=_+e.length+1,w=_+1;r.push(A,T,w),r.push(x,w,T)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(a,2)),this.setAttribute("normal",new Tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.points,e.segments,e.phiStart,e.phiLength)}}class Je extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*f-o;for(let S=0;S<c;S++){const _=S*u-r;g.push(_,-M,0),v.push(0,0,1),p.push(S/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const S=M+c*m,_=M+c*(m+1),A=M+1+c*(m+1),T=M+1+c*m;d.push(S,_,T),d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.widthSegments,e.heightSegments)}}class bl extends tn{constructor(e=new Gs([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function c(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const M=g[p];di.isClockWise(M)===!0&&(g[p]=M.reverse())}const v=di.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const M=g[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){const M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,m=v.length;p<m;p++){const M=v[p],S=M[0]+u,_=M[1]+u,A=M[2]+u;n.push(S,_,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Md(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new bl(n,e.curveSegments)}}function Md(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class xi extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],S=m/n,_=o+S*a,A=e*Math.cos(_),T=Math.sqrt(e*e-A*A);let x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const U=w/t,E=s+U*r;u.x=-T*Math.cos(E),u.y=A,u.z=T*Math.sin(E),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(U+x,1-S),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const S=h[m][M+1],_=h[m][M],A=h[m+1][M],T=h[m+1][M+1];(m!==0||o>0)&&d.push(S,_,T),(m!==n-1||l<Math.PI)&&d.push(_,A,T)}this.setIndex(d),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sn extends tn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],u=[],f=new D,d=new D,g=new D;for(let v=0;v<=n;v++){const p=o+v/n*a;for(let m=0;m<=s;m++){const M=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(M),d.y=(e+t*Math.cos(p))*Math.sin(M),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let p=1;p<=s;p++){const m=(s+1)*v+p-1,M=(s+1)*(v-1)+p-1,S=(s+1)*(v-1)+p,_=(s+1)*v+p;l.push(m,M,_),l.push(M,S,_)}this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class jn extends tn{constructor(e=new Vh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,l=new D,c=new B;let h=new D;const u=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(d,2));function v(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),M(),m()}function p(S){h=e.getPointAt(S/t,h);const _=o.normals[S],A=o.binormals[S];for(let T=0;T<=s;T++){const x=T/s*Math.PI*2,w=Math.sin(x),U=-Math.cos(x);l.x=U*_.x+w*A.x,l.y=U*_.y+w*A.y,l.z=U*_.z+w*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=t;S++)for(let _=1;_<=s;_++){const A=(s+1)*(S-1)+(_-1),T=(s+1)*S+(_-1),x=(s+1)*S+_,w=(s+1)*(S-1)+_;g.push(A,T,w),g.push(T,x,w)}}function M(){for(let S=0;S<=t;S++)for(let _=0;_<=s;_++)c.x=S/t,c.y=_/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jn(new _o[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Fs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(gc(s))s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Fs(i[t]);for(const s in n)e[s]=n[s]}return e}function gc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _d(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const Bi={clone:Fs,merge:un};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=_d(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(s.value);break;case"v2":this.uniforms[n].value=new B().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wd extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class he extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ka,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends he{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bd extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Td extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class To extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Ed extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const sa=new Et,xc=new D,vc=new D;class Tl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(sa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===gr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qr=new D,jr=new zs,Bn=new D;class Jh extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qr,jr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qr,jr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qr,jr,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new D,Mc=new B,_c=new B;class Mn extends Jh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Mc,_c),t.subVectors(_c,Mc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ad extends Tl{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Qh extends To{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ad}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Rd extends Tl{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class er extends To{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class El extends Jh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Cd extends Tl{constructor(){super(new El(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pd extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Cd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sc extends tn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const bs=-90,Ts=1;class ja extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(bs,Ts,e,t);s.layers=this.layers,this.add(s);const r=new Mn(bs,Ts,e,t);r.layers=this.layers,this.add(r);const o=new Mn(bs,Ts,e,t);o.layers=this.layers,this.add(o);const a=new Mn(bs,Ts,e,t);a.layers=this.layers,this.add(a);const l=new Mn(bs,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Mn(bs,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ld extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class jh{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Dd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Dd(){this._document.hidden===!1&&this.reset()}const yc=new Et;class Id{constructor(e,t,n=0,s=1/0){this.ray=new Nh(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yc),this}intersectObject(e,t=!0,n=[]){return $a(e,this,n,t),n.sort(wc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$a(e[s],this,n,t);return n.sort(wc),n}}function wc(i,e){return i.distance-e.distance}function $a(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)$a(r[o],e,t,!0)}}class Nd extends Vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function bc(i,e,t,n){const s=Ud(n);switch(t){case _h:return i*e;case hl:return i*e/s.components*s.byteLength;case ul:return i*e/s.components*s.byteLength;case ss:return i*e*2/s.components*s.byteLength;case fl:return i*e*2/s.components*s.byteLength;case Sh:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case dl:return i*e*4/s.components*s.byteLength;case ro:case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ao:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:case ya:return Math.max(i,16)*Math.max(e,8)/4;case Ma:case Sa:return Math.max(i,8)*Math.max(e,8)/2;case wa:case ba:case Ea:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case fo:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Va:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ya:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case po:case Za:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ud(i){switch(i){case _n:case gh:return{byteLength:1,components:1};case mr:case xh:case jt:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Jn:case al:case Ln:return{byteLength:4,components:1};case vh:case Mh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $h(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fd(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ap=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Rp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Np=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,y0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:Od,alphahash_pars_fragment:zd,alphamap_fragment:Bd,alphamap_pars_fragment:Gd,alphatest_fragment:kd,alphatest_pars_fragment:Hd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:Yd,begin_vertex:qd,beginnormal_vertex:Zd,bsdfs:Kd,iridescence_fragment:Jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:ep,clipping_planes_vertex:tp,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:op,defaultnormal_vertex:ap,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:fp,colorspace_pars_fragment:dp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:Rp,envmap_vertex:vp,fog_vertex:Mp,fog_pars_vertex:_p,fog_fragment:Sp,fog_pars_fragment:yp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:bp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ep,lights_pars_begin:Ap,lights_toon_fragment:Cp,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Np,lights_fragment_begin:Up,lights_fragment_maps:Fp,lights_fragment_end:Op,lightprobes_pars_fragment:zp,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Hp,map_fragment:Vp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:Yp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Kp,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:jp,morphtarget_vertex:$p,normal_fragment_begin:e0,normal_fragment_maps:t0,normal_pars_fragment:n0,normal_pars_vertex:i0,normal_vertex:s0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:c0,opaque_fragment:h0,packing:u0,premultiplied_alpha_fragment:f0,project_vertex:d0,dithering_fragment:p0,dithering_pars_fragment:m0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:v0,shadowmap_pars_vertex:M0,shadowmap_vertex:_0,shadowmask_pars_fragment:S0,skinbase_vertex:y0,skinning_pars_vertex:w0,skinning_vertex:b0,skinnormal_vertex:T0,specularmap_fragment:E0,specularmap_pars_fragment:A0,tonemapping_fragment:R0,tonemapping_pars_fragment:C0,transmission_fragment:P0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:I0,uv_vertex:N0,worldpos_vertex:U0,background_vert:F0,background_frag:O0,backgroundCube_vert:z0,backgroundCube_frag:B0,cube_vert:G0,cube_frag:k0,depth_vert:H0,depth_frag:V0,distance_vert:W0,distance_frag:X0,equirect_vert:Y0,equirect_frag:q0,linedashed_vert:Z0,linedashed_frag:K0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:j0,meshlambert_frag:$0,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:om,meshphysical_frag:am,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:fm,shadow_frag:dm,sprite_vert:pm,sprite_frag:mm},Ie={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Wn={basic:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:un([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:un([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:un([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new je(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:un([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:un([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:un([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:un([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:un([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:un([Ie.common,Ie.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:un([Ie.lights,Ie.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Wn.physical={uniforms:un([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const $r={r:0,b:0,g:0},gm=new Et,eu=new at;eu.set(-1,0,0,0,1,0,0,0,1);function xm(i,e,t,n,s,r){const o=new je(0);let a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const _=M.backgroundBlurriness>0;S=e.get(S,_)}return S}function g(M){let S=!1;const _=d(M);_===null?p(o,a):_&&_.isColor&&(p(_,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,S){const _=d(S);_&&_.isCubeTexture?(c===void 0&&(c=new C(new st(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Fs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(eu),c.material.toneMapped=yt.getTransfer(_.colorSpace)!==Ct,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new C(new Je(2,2),new Xt({name:"BackgroundMaterial",uniforms:Fs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=yt.getTransfer(_.colorSpace)!==Ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,S){M.getRGB($r,Kh(i)),t.buffers.color.setClear($r.r,$r.g,$r.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:v,dispose:m}}function vm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(P,I,z,L,G){let K=!1;const W=u(P,L,z,I);r!==W&&(r=W,c(r.object)),K=d(P,L,z,G),K&&g(P,L,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,_(P,I,z,L),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,I,z,L){const G=L.wireframe===!0;let K=n[I.id];K===void 0&&(K={},n[I.id]=K);const W=P.isInstancedMesh===!0?P.id:0;let ce=K[W];ce===void 0&&(ce={},K[W]=ce);let V=ce[z.id];V===void 0&&(V={},ce[z.id]=V);let j=V[G];return j===void 0&&(j=f(l()),V[G]=j),j}function f(P){const I=[],z=[],L=[];for(let G=0;G<t;G++)I[G]=0,z[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function d(P,I,z,L){const G=r.attributes,K=I.attributes;let W=0;const ce=z.getAttributes();for(const V in ce)if(ce[V].location>=0){const se=G[V];let Re=K[V];if(Re===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Re=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Re=P.instanceColor)),se===void 0||se.attribute!==Re||Re&&se.data!==Re.data)return!0;W++}return r.attributesNum!==W||r.index!==L}function g(P,I,z,L){const G={},K=I.attributes;let W=0;const ce=z.getAttributes();for(const V in ce)if(ce[V].location>=0){let se=K[V];se===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const Re={};Re.attribute=se,se&&se.data&&(Re.data=se.data),G[V]=Re,W++}r.attributes=G,r.attributesNum=W,r.index=L}function v(){const P=r.newAttributes;for(let I=0,z=P.length;I<z;I++)P[I]=0}function p(P){m(P,0)}function m(P,I){const z=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),G[P]!==I&&(i.vertexAttribDivisor(P,I),G[P]=I)}function M(){const P=r.newAttributes,I=r.enabledAttributes;for(let z=0,L=I.length;z<L;z++)I[z]!==P[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function S(P,I,z,L,G,K,W){W===!0?i.vertexAttribIPointer(P,I,z,G,K):i.vertexAttribPointer(P,I,z,L,G,K)}function _(P,I,z,L){v();const G=L.attributes,K=z.getAttributes(),W=I.defaultAttributeValues;for(const ce in K){const V=K[ce];if(V.location>=0){let j=G[ce];if(j===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const se=j.normalized,Re=j.itemSize,Ce=e.get(j);if(Ce===void 0)continue;const q=Ce.buffer,pe=Ce.type,le=Ce.bytesPerElement,Ue=pe===i.INT||pe===i.UNSIGNED_INT||j.gpuType===al;if(j.isInterleavedBufferAttribute){const ge=j.data,Xe=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,wt=j.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Ve=0;Ve<V.locationSize;Ve++)m(V.location+Ve,ge.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)p(V.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Ve=0;Ve<V.locationSize;Ve++)S(V.location+Ve,Re/V.locationSize,pe,se,Xe*le,(wt+Re/V.locationSize*Ve)*le,Ue)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<V.locationSize;ge++)m(V.location+ge,j.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<V.locationSize;ge++)p(V.location+ge);i.bindBuffer(i.ARRAY_BUFFER,q);for(let ge=0;ge<V.locationSize;ge++)S(V.location+ge,Re/V.locationSize,pe,se,Re*le,Re/V.locationSize*ge*le,Ue)}}else if(W!==void 0){const se=W[ce];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(V.location,se);break;case 3:i.vertexAttrib3fv(V.location,se);break;case 4:i.vertexAttrib4fv(V.location,se);break;default:i.vertexAttrib1fv(V.location,se)}}}}M()}function A(){U();for(const P in n){const I=n[P];for(const z in I){const L=I[z];for(const G in L){const K=L[G];for(const W in K)h(K[W].object),delete K[W];delete L[G]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const z in I){const L=I[z];for(const G in L){const K=L[G];for(const W in K)h(K[W].object),delete K[W];delete L[G]}}delete n[P.id]}function x(P){for(const I in n){const z=n[I];for(const L in z){const G=z[L];if(G[P.id]===void 0)continue;const K=G[P.id];for(const W in K)h(K[W].object),delete K[W];delete G[P.id]}}}function w(P){for(const I in n){const z=n[I],L=P.isInstancedMesh===!0?P.id:0,G=z[L];if(G!==void 0){for(const K in G){const W=G[K];for(const ce in W)h(W[ce].object),delete W[ce];delete G[K]}delete z[L],Object.keys(z).length===0&&delete n[I]}}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function Mm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _m(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==qn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const w=x===jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==_n&&x!==Ln&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:_,maxSamples:A,samples:T}}function Sm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ci,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,S=M*4;let _=m.clippingState||null;l.value=_,_=h(g,f,S,d);for(let A=0;A!==S;++A)_[A]=t[A];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=d+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,_=d;S!==v;++S,_+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class Al extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Fh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new st(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ts});r.uniforms.tEquirect.value=t;const o=new C(s,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=sn),new ja(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Tc=256,ym=3,wm=20,tu=256,nu=16,bm=3,Tm=new D,Em=new je;class Sr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ja(1,10,null),this._boxMesh=new C(new st(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Tm}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Em));const p=new ja(n,s,h);return p.position.copy(a),p.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Tc,Ah(e))}_fromTexture(e,t){e.mapping===Ls||e.mapping===pr?this._setSize(e.image.length===0?Tc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ec(e,!1,!1),n=Math.log2(e)-ym;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ec(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ls||e.mapping===pr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ac()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Am(),this._integrationMaterial=Rm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/nu);for(let o=0;o<=n;o++){const a=Sr.lodToRoughness(o,n);if(o>n-bm)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const l=a>0?Math.log2(t)+.5*Math.log2(6/(tu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Cm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Ec(i,e,t){return new Al(i,{minFilter:Yn,generateMipmaps:e,type:jt,colorSpace:mo,depthBuffer:t})}function Tr(i,e,t){return new Xt({name:i,uniforms:e,vertexShader:pt.cube_vert,fragmentShader:t,side:pn,blending:ts,depthTest:!1,depthWrite:!1})}function Am(){return Tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${tu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rm(){return Tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:nu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Cm(){return Tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ac(){return Tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Rc(){return Tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Co||d===Po)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new Al(g.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",c),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,g=d===Co||d===Po,v=d===Ls||d===pr;if(g||v){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Sr(i)),p=g?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const M=f.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new Sr(i)),p=g?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Co?f.mapping=Ls:d===Po&&(f.mapping=pr),f}function l(f){let d=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&d++;return d===g}function c(f){const d=f.target;d.removeEventListener("dispose",c);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Lm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Dm(i,e,t,n){const s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);const v=r.get(g);v&&(e.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)e.update(v[p],i.ARRAY_BUFFER)}function u(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const M=v!==null?v.array.length:p.array.length/3-1,S=p.count>=65535?Dh:Lh,_=new S(Math.ceil(M/3)*6,1),A=_.array;if(v!==null){const x=v.array;m=v.version;for(let w=0,U=0;w<M;w+=3){const E=x[w+0],P=x[w+1],I=x[w+2];A[U++]=E,A[U++]=P,A[U++]=P,A[U++]=I,A[U++]=I,A[U++]=E}}else{m=p.version;for(let x=0,w=0;x<M;x+=3){const U=x+0,E=x+1,P=x+2;A[w++]=U,A[w++]=E,A[w++]=E,A[w++]=P,A[w++]=P,A[w++]=U}}_.version=m;const T=r.get(g);T&&e.remove(T),r.set(g,_)}function f(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function d(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Im(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let v=0;for(let p=0;p<d;p++)v+=f[p];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Nm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:bt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Um(i,e,t){const n=new WeakMap,s=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var d=E;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let A=a.attributes.position.count*_,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const x=new Float32Array(A*T*4*u),w=new Rh(x,A,T,u);w.type=Ln,w.needsUpdate=!0;const U=_*4;for(let P=0;P<u;P++){const I=m[P],z=M[P],L=S[P],G=A*T*4*P;for(let K=0;K<I.count;K++){const W=K*U;g===!0&&(s.fromBufferAttribute(I,K),x[G+W+0]=s.x,x[G+W+1]=s.y,x[G+W+2]=s.z,x[G+W+3]=0),v===!0&&(s.fromBufferAttribute(z,K),x[G+W+4]=s.x,x[G+W+5]=s.y,x[G+W+6]=s.z,x[G+W+7]=0),p===!0&&(s.fromBufferAttribute(L,K),x[G+W+8]=s.x,x[G+W+9]=s.y,x[G+W+10]=s.z,x[G+W+11]=L.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new B(A,T)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fm(i,e,t,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const Om={[lh]:"LINEAR_TONE_MAPPING",[ch]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[uh]:"ACES_FILMIC_TONE_MAPPING",[dh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function zm(i,e,t,n,s,r){const o=new en(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new tn;h.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const u=new wd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new C(h,u),d=new El(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,M=null,S=[],_=!1;this.setSize=function(A,T){o.setSize(A,T),a!==null&&a.setSize(A,T),l!==null&&l.setSize(A,T);for(let x=0;x<S.length;x++){const w=S[x];w.setSize&&w.setSize(A,T)}},this.setEffects=function(A){S=A,_=S.length>0&&S[0].isRenderPass===!0;const T=o.width,x=o.height;S.length>0&&a===null&&(a=new en(T,x,{type:jt,depthBuffer:!1,stencilBuffer:!1}),l=new en(T,x,{type:jt,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&S.some(U=>U.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new Ns(T,x),r===!0&&(c.format=zi,c.type=Ds)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let U=0;U<S.length;U++){const E=S[U];E.setSize&&E.setSize(T,x),w&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(A,T){if(p||A.toneMapping===Kn&&S.length===0)return!1;if(M=T,T!==null){const x=T.width,w=T.height;(o.width!==x||o.height!==w)&&this.setSize(x,w)}return _===!1&&A.setRenderTarget(o),m=A.toneMapping,A.toneMapping=Kn,!0},this.hasRenderPass=function(){return _},this.end=function(A,T){A.toneMapping=m,p=!0;let x=o,w=a;for(let U=0;U<S.length;U++){const E=S[U];E.enabled!==!1&&(E.render(A,w,x,T),E.needsSwap!==!1&&(x=w,w=w===a?l:a))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,u.defines={},yt.getTransfer(g)===Ct&&(u.defines.SRGB_TRANSFER="");const U=Om[v];U&&(u.defines[U]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(M),A.render(f,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const iu=new $t,su=new Ns(1,1),ru=new zh(1),ou=new Rh,au=new bf,lu=new Fh,Cc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Ic=new Float32Array(4);function ks(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Cc[s];if(r===void 0&&(r=new Float32Array(s),Cc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=Pc[e];t===void 0&&(t=new Int32Array(e),Pc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),qt(t,n)}}function Wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),qt(t,n)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Lc.set(n),i.uniformMatrix4fv(this.addr,!1,Lc),qt(t,n)}}function Ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function $m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Ao(i){return i.version===0&&(i.compareFunction=bh,i.needsUpdate=!0),i}function eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ao(su):r=iu,t.setTexture2D(e||r,s)}function tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||au,s)}function ng(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ao(ru):r=lu,t.setTextureCube(e||r,s)}function ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ou,s)}function sg(i){switch(i){case 5126:return Bm;case 35664:return Gm;case 35665:return km;case 35666:return Hm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return Ym;case 35667:case 35671:return qm;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return Jm;case 36294:return Qm;case 36295:return jm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,e){i.uniform1fv(this.addr,e)}function og(i,e){const t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function ag(i,e){const t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function lg(i,e){const t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function cg(i,e){const t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hg(i,e){const t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ug(i,e){const t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function fg(i,e){i.uniform1iv(this.addr,e)}function dg(i,e){i.uniform2iv(this.addr,e)}function pg(i,e){i.uniform3iv(this.addr,e)}function mg(i,e){i.uniform4iv(this.addr,e)}function gg(i,e){i.uniform1uiv(this.addr,e)}function xg(i,e){i.uniform2uiv(this.addr,e)}function vg(i,e){i.uniform3uiv(this.addr,e)}function Mg(i,e){i.uniform4uiv(this.addr,e)}function _g(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ao(su):o=iu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Sg(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||au,r[o])}function yg(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ao(ru):o=lu;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function wg(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ou,r[o])}function bg(i){switch(i){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return fg;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return vg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return wg}}class Tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}}class Eg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bg(t.type)}}class Ag{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Nc(i,e){i.seq.push(e),i.map[e.id]=e}function Rg(i,e,t){const n=i.name,s=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),o=ra.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nc(t,c===void 0?new Tg(a,i,e):new Eg(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ag(a),Nc(t,u)),t=u}}}class co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Rg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Uc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cg=37297;let Pg=0;function Lg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Fc=new at;function Dg(i){yt._getMatrix(Fc,yt.workingColorSpace,i);const e=`mat3( ${Fc.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case go:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Oc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Lg(i.getShaderSource(e),a)}else return r}function Ig(i,e){const t=Dg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ng={[lh]:"Linear",[ch]:"Reinhard",[hh]:"Cineon",[uh]:"ACESFilmic",[dh]:"AgX",[ph]:"Neutral",[fh]:"Custom"};function Ug(i,e){const t=Ng[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eo=new D;function Fg(){yt.getLuminanceCoefficients(eo);const i=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function zg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function or(i){return i!==""}function zc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Bc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(Gg,kg)}function kg(i,e){const t=pt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return el(t)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gc(i){return i.replace(Hg,Vg)}function Vg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Wg={[ar]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function Xg(i){return Wg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yg={[pr]:"ENVMAP_MODE_REFRACTION"};function qg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zg={[ah]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function Kg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zg[i.combine]||"ENVMAP_BLENDING_NONE"}function Jg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xg(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=qg(t),u=Kg(t),f=Og(t),d=zg(r),g=s.createProgram();let v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(or).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(or).join(`
`),p.length>0&&(p+=`
`)):(v=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?pt.tonemapping_pars_fragment:"",t.toneMapping!==Kn?Ug("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Ig("linearToOutputTexel",t.outputColorSpace),Fg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),o=el(o),o=zc(o,t),o=Bc(o,t),a=el(a),a=zc(a,t),a=Bc(a,t),o=Gc(o),a=Gc(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+v+o,S=m+p+a,_=Uc(s,s.VERTEX_SHADER,M),A=Uc(s,s.FRAGMENT_SHADER,S);s.attachShader(g,_),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(E){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(g)||"",I=s.getShaderInfoLog(_)||"",z=s.getShaderInfoLog(A)||"",L=P.trim(),G=I.trim(),K=z.trim();let W=!0,ce=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,_,A);else{const V=Oc(s,_,"vertex"),j=Oc(s,A,"fragment");bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+V+`
`+j)}else L!==""?tt("WebGLProgram: Program Info Log:",L):(G===""||K==="")&&(ce=!1);ce&&(E.diagnostics={runnable:W,programLog:L,vertexShader:{log:G,prefix:v},fragmentShader:{log:K,prefix:p}})}s.deleteShader(_),s.deleteShader(A),x=new co(s,g),w=Bg(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,Cg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=_,this.fragmentShader=A,this}let Qg=0;class jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $g(e),t.set(e,n)),n}}class $g{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}}function ex(i){return i===ss||i===fo||i===po}function tx(i,e,t,n,s,r){const o=new vl,a=new jg,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,w,U,E,P,I){const z=E.fog,L=P.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?E.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||G,K),ce=f[x.type];let V=n.precision;x.precision!==null&&(V=n.getMaxPrecision(x.precision),V!==x.precision&&tt("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=j!==void 0?j.length:0;let Re=0;L.morphAttributes.position!==void 0&&(Re=1),L.morphAttributes.normal!==void 0&&(Re=2),L.morphAttributes.color!==void 0&&(Re=3);let Ce,q,pe,le;if(ce){const Le=Wn[ce];Ce=Le.vertexShader,q=Le.fragmentShader}else{Ce=x.vertexShader,q=x.fragmentShader;const Le=a.getVertexShaderStage(x),vt=a.getFragmentShaderStage(x);a.update(x,Le,vt),pe=Le.id,le=vt.id}const Ue=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Xe=P.isInstancedMesh===!0,wt=P.isBatchedMesh===!0,Ve=!!x.map,nt=!!x.matcap,rt=!!W,oe=rt&&W.isPMREMTexture===!0,ve=!!x.aoMap,Me=!!x.lightMap,Ne=!!x.bumpMap&&x.wireframe===!1,Te=!!x.normalMap,Qe=!!x.displacementMap,Ge=!!x.emissiveMap,it=!!x.metalnessMap,dt=!!x.roughnessMap,gt=x.anisotropy>0,O=x.clearcoat>0,Lt=x.diffuseRoughness>0,ct=x.dispersion>0,At=x.retroreflectivity>0,Ee=x.iridescence>0,Dt=x.sheen>0,qe=x.transmission>0,Ze=gt&&!!x.anisotropyMap,R=O&&!!x.clearcoatMap,y=O&&!!x.clearcoatNormalMap,Y=O&&!!x.clearcoatRoughnessMap,de=Lt&&!!x.diffuseRoughnessMap,ae=Ee&&!!x.iridescenceMap,Se=Ee&&!!x.iridescenceThicknessMap,we=Dt&&!!x.sheenColorMap,ee=Dt&&!!x.sheenRoughnessMap,ie=!!x.specularMap,ye=!!x.specularColorMap,N=!!x.specularIntensityMap,re=qe&&!!x.transmissionMap,$=qe&&!!x.thicknessMap,be=!!x.gradientMap,xe=!!x.alphaMap,_e=x.alphaTest>0,We=!!x.alphaHash,ot=!!x.extensions;let me=Kn;x.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(me=i.toneMapping);const Ye=oe?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,$e={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:q,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:le,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:wt,batchingColor:wt&&P._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&P.instanceColor!==null,instancingMorph:Xe&&P.morphTexture!==null,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:nt,envMap:rt,envMapMode:rt&&W.mapping,envMapPMREM:oe,envMapMaxLod:oe?Ye.length-1:null,envMapSize:oe?Ye[0].width:null,aoMap:ve,lightMap:Me,bumpMap:Ne,normalMap:Te,displacementMap:Qe,emissiveMap:Ge,normalMapObjectSpace:Te&&x.normalMapType===Yu,normalMapTangentSpace:Te&&x.normalMapType===Ka,packedNormalMap:Te&&x.normalMapType===Ka&&ex(x.normalMap.format),metalnessMap:it,roughnessMap:dt,anisotropy:gt,anisotropyMap:Ze,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:Y,diffuseRoughness:Lt,diffuseRoughnessMap:de,dispersion:ct,retroreflection:At,iridescence:Ee,iridescenceMap:ae,iridescenceThicknessMap:Se,sheen:Dt,sheenColorMap:we,sheenRoughnessMap:ee,specularMap:ie,specularColorMap:ye,specularIntensityMap:N,transmission:qe,transmissionMap:re,thicknessMap:$,gradientMap:be,opaque:x.transparent===!1&&x.blending===ui&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:_e,alphaHash:We,combine:x.combine,mapUv:Ve&&d(x.map.channel),aoMapUv:ve&&d(x.aoMap.channel),lightMapUv:Me&&d(x.lightMap.channel),bumpMapUv:Ne&&d(x.bumpMap.channel),normalMapUv:Te&&d(x.normalMap.channel),displacementMapUv:Qe&&d(x.displacementMap.channel),emissiveMapUv:Ge&&d(x.emissiveMap.channel),metalnessMapUv:it&&d(x.metalnessMap.channel),roughnessMapUv:dt&&d(x.roughnessMap.channel),anisotropyMapUv:Ze&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:we&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ee&&d(x.sheenRoughnessMap.channel),specularMapUv:ie&&d(x.specularMap.channel),specularColorMapUv:ye&&d(x.specularColorMap.channel),specularIntensityMapUv:N&&d(x.specularIntensityMap.channel),transmissionMapUv:re&&d(x.transmissionMap.channel),thicknessMapUv:$&&d(x.thicknessMap.channel),alphaMapUv:xe&&d(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Te||gt),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ve||xe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Te===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Re,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&yt.getTransfer(x.map.colorSpace)===Ct,decodeVideoTextureEmissive:Ge&&x.emissiveMap.isVideoTexture===!0&&yt.getTransfer(x.emissiveMap.colorSpace)===Ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vt,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ot&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&x.extensions.multiDraw===!0||wt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function v(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)w.push(U),w.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(p(w,x),m(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function m(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){const w=f[x.type];let U;if(w){const E=Wn[w];U=Bi.clone(E.uniforms)}else U=x.uniforms;return U}function S(x,w){let U=h.get(w);return U!==void 0?++U.usedTimes:(U=new Jg(i,w,x,s),c.push(U),h.set(w,U)),U}function _(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:S,releaseProgram:_,releaseShaderCache:A,programs:c,dispose:T}}function nx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ix(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,v,p,m){let M=i[e];return M===void 0?(M={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},i[e]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=g,M.materialVariant=o(f),M.groupOrder=v,M.renderOrder=f.renderOrder,M.z=p,M.group=m),e++,M}function l(f,d,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);const S=a(f,d,g,v,p,m);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(f,d,g,v,p,m){const M=a(f,d,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(f,d){t.length>1&&t.sort(f||ix),n.length>1&&n.sort(d||Hc),s.length>1&&s.sort(d||Hc)}function u(){for(let f=e,d=i.length;f<d;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function sx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Vc,i.set(n,[o])):s>=r.length?(o=new Vc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new je};break;case"SpotLight":t={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ox(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ax=0;function lx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cx(i){const e=new rx,t=ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Et,o=new Et;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,v=0,p=0,m=0,M=0,S=0,_=0,A=0,T=0,x=0,w=0,U=0,E=0;c.sort(lx);for(let I=0,z=c.length;I<z;I++){const L=c[I],G=L.color,K=L.intensity,W=L.distance;let ce=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ss?ce=L.shadow.map.texture:ce=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=G.r*K,u+=G.g*K,f+=G.b*K;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],K);E++}else if(L.isSunLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=se,n.sunShadowMap[g]=ce;const Re=j.getViewportCount();for(let Ce=0;Ce<Re;Ce++)n.sunShadowMatrix[v+Ce]=j.getMatrix(Ce),n.sunShadowCascade[v+Ce]=j._cascadeData[Ce];v+=Re,g++}n.sun[d]=V,d++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,n.directionalShadow[p]=se,n.directionalShadowMap[p]=ce,n.directionalShadowMatrix[p]=L.shadow.matrix,A++}n.directional[p]=V,p++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(G).multiplyScalar(K),V.distance=W,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[M]=V;const j=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,j.updateMatrices(L),L.castShadow&&U++),n.spotLightMatrix[M]=j.matrix,L.castShadow){const se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=ce,x++}M++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(G).multiplyScalar(K),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=V,S++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const j=L.shadow,se=t.get(L);se.shadowIntensity=j.intensity,se.shadowBias=j.bias,se.shadowNormalBias=j.normalBias,se.shadowRadius=j.radius,se.shadowMapSize=j.mapSize,se.shadowCameraNear=j.camera.near,se.shadowCameraFar=j.camera.far,n.pointShadow[m]=se,n.pointShadowMap[m]=ce,n.pointShadowMatrix[m]=L.shadow.matrix,T++}n.point[m]=V,m++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(K),V.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[_]=V,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.sunLength!==d||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==A||P.numPointShadows!==T||P.numSpotShadows!==x||P.numSpotMaps!==w||P.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=p,n.spot.length=M,n.rectArea.length=S,n.point.length=m,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-U,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=E,P.sunLength=d,P.directionalLength=p,P.pointLength=m,P.spotLength=M,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=A,P.numPointShadows=T,P.numSpotShadows=x,P.numSpotMaps=w,P.numLightProbes=E,n.version=ax++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){const _=c[M];if(_.isSunLight){const A=n.sun[u];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(m),u++}else if(_.isDirectionalLight){const A=n.directional[f];A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(_.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const A=n.rectArea[v];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(_.width*.5,0,0),A.halfHeight.set(0,_.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(_.matrixWorld),A.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const A=n.hemi[p];A.direction.setFromMatrixPosition(_.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function Wc(i){const e=new cx(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function hx(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Wc(i),e.set(s,[a])):r>=o.length?(a=new Wc(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],px=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Xc=new Et,tr=new D,oa=new D;function mx(i,e,t){let n=new xr;const s=new B,r=new B,o=new Ft,a=new bd,l=new Td,c={},h=t.maxTextureSize,u={[ns]:pn,[pn]:ns,[Vt]:Vt},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:ux,fragmentShader:fx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new C(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ar;let m=this.type;this.render=function(T,x,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===wu&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ar);const U=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ts),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=m!==this.type;z&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(G=>G.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,G=T.length;L<G;L++){const K=T[L],W=K.shadow;if(W===void 0){tt("WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ce=W.getFrameExtents();s.multiply(ce),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,W.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=V,W.map===null||z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===sr){if(K.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new en(s.x,s.y,{format:ss,type:jt,minFilter:sn,magFilter:sn,generateMipmaps:!1}),W.map.texture.name=K.name+".shadowMap",W.map.depthTexture=new Ns(s.x,s.y,Ln),W.map.depthTexture.name=K.name+".shadowMapDepth",W.map.depthTexture.format=ki,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Wt,W.map.depthTexture.magFilter=Wt}else K.isPointLight?(W.map=new Al(s.x),W.map.depthTexture=new zh(s.x,Jn)):(W.map=new en(s.x,s.y),W.map.depthTexture=new Ns(s.x,s.y,Jn)),W.map.depthTexture.name=K.name+".shadowMap",W.map.depthTexture.format=ki,this.type===ar?(W.map.depthTexture.compareFunction=V?wh:yh,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Wt,W.map.depthTexture.magFilter=Wt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();K.isPointLight!==!0&&W.updateMatrices(K,w);const se=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:w.layers;for(let Re=0;Re<j;Re++){const Ce=W.getCamera(Re);if(K.isPointLight){const q=W.camera,pe=W.matrix,le=K.distance||q.far;le!==q.far&&(q.far=le,q.updateProjectionMatrix()),tr.setFromMatrixPosition(K.matrixWorld),q.position.copy(tr),oa.copy(q.position),oa.add(dx[Re]),q.up.copy(px[Re]),q.lookAt(oa),q.updateMatrixWorld(),pe.makeTranslation(-tr.x,-tr.y,-tr.z),Xc.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xc,q.coordinateSystem,q.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Re),i.clear();else{Re===0&&(i.setRenderTarget(W.map),i.clear());const q=W.getViewport(Re);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),I.viewport(o)}n=W.getFrustum(Re),_(x,w,Ce,K,se,this.type)}W.isPointLightShadow!==!0&&this.type===sr&&M(W,w),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,E,P)};function M(T,x){const w=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new en(s.x,s.y,{format:ss,type:jt}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,w,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,w,d,v,null)}function S(T,x,w,U){let E=null;const P=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)E=P;else if(E=w.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const I=E.uuid,z=x.uuid;let L=c[I];L===void 0&&(L={},c[I]=L);let G=L[z];G===void 0&&(G=E.clone(),L[z]=G,x.addEventListener("dispose",A)),E=G}if(E.visible=x.visible,E.wireframe=x.wireframe,U===sr?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:u[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,w.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const I=i.properties.get(E);I.light=w}return E}function _(T,x,w,U,E,P){if(T.visible===!1)return;if(T.layers.test(E)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===sr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const L=e.update(T),G=T.material;if(Array.isArray(G)){const K=L.groups;for(let W=0,ce=K.length;W<ce;W++){const V=K[W],j=G[V.materialIndex];if(j&&j.visible){const se=S(T,j,U,P);T.onBeforeShadow(i,T,x,w,L,se,V),i.renderBufferDirect(w,null,L,se,T,V),T.onAfterShadow(i,T,x,w,L,se,V)}}}else if(G.visible){const K=S(T,G,U,P);T.onBeforeShadow(i,T,x,w,L,K,null),i.renderBufferDirect(w,null,L,K,T,null),T.onAfterShadow(i,T,x,w,L,K,null)}}const z=T.children;for(let L=0,G=z.length;L<G;L++)_(z[L],x,w,U,E,P)}function A(T){T.target.removeEventListener("dispose",A);for(const w in c){const U=c[w],E=T.target.uuid;E in U&&(U[E].dispose(),delete U[E])}}}function gx(i,e){function t(){let N=!1;const re=new Ft;let $=null;const be=new Ft(0,0,0,0);return{setMask:function(xe){$!==xe&&!N&&(i.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){N=xe},setClear:function(xe,_e,We,ot,me){me===!0&&(xe*=ot,_e*=ot,We*=ot),re.set(xe,_e,We,ot),be.equals(re)===!1&&(i.clearColor(xe,_e,We,ot),be.copy(re))},reset:function(){N=!1,$=null,be.set(-1,0,0,0)}}}function n(){let N=!1,re=!1,$=null,be=null,xe=null;return{setReversed:function(_e){if(re!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),re=_e;const ot=xe;xe=null,this.setClear(ot)}},getReversed:function(){return re},setTest:function(_e){_e?ge(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(_e){$!==_e&&!N&&(i.depthMask(_e),$=_e)},setFunc:function(_e){if(re&&(_e=nf[_e]),be!==_e){switch(_e){case ua:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case da:i.depthFunc(i.LESS);break;case dr:i.depthFunc(i.LEQUAL);break;case pa:i.depthFunc(i.EQUAL);break;case ma:i.depthFunc(i.GEQUAL);break;case ga:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=_e}},setLocked:function(_e){N=_e},setClear:function(_e){xe!==_e&&(xe=_e,re&&(_e=1-_e),i.clearDepth(_e))},reset:function(){N=!1,$=null,be=null,xe=null,re=!1}}}function s(){let N=!1,re=null,$=null,be=null,xe=null,_e=null,We=null,ot=null,me=null;return{setTest:function(Ye){N||(Ye?ge(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(Ye){re!==Ye&&!N&&(i.stencilMask(Ye),re=Ye)},setFunc:function(Ye,$e,Le){($!==Ye||be!==$e||xe!==Le)&&(i.stencilFunc(Ye,$e,Le),$=Ye,be=$e,xe=Le)},setOp:function(Ye,$e,Le){(_e!==Ye||We!==$e||ot!==Le)&&(i.stencilOp(Ye,$e,Le),_e=Ye,We=$e,ot=Le)},setLocked:function(Ye){N=Ye},setClear:function(Ye){me!==Ye&&(i.clearStencil(Ye),me=Ye)},reset:function(){N=!1,re=null,$=null,be=null,xe=null,_e=null,We=null,ot=null,me=null}}}const r=new t,o=new n,a=new s;let l={};const c=new WeakMap;let h={},u={},f={},d=new WeakMap,g=[],v=null,p=!1,m=null,M=null,S=null,_=null,A=null,T=null,x=null,w=new je(0,0,0),U=0,E=!1,P=null,I=null,z=null,L=null,G=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ce=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=ce>=1):V.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=ce>=2);let j=null,se={};const Re=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),q=new Ft().fromArray(Re),pe=new Ft().fromArray(Ce);function le(N,re,$,be){const xe=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<$;We++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(re+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return _e}const Ue={};Ue[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),o.setFunc(dr),Ne(!1),Te(Ol),ge(i.CULL_FACE),ve(ts);function ge(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Xe(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function wt(N,re){return f[N]!==re?(i.bindFramebuffer(N,re),f[N]=re,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=re),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=re),!0):!1}function Ve(N,re){let $=g,be=!1;if(N){$=d.get(re),$===void 0&&($=[],d.set(re,$));const xe=N.textures;if($.length!==xe.length||$[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,We=xe.length;_e<We;_e++)$[_e]=i.COLOR_ATTACHMENT0+_e;$.length=xe.length,be=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,be=!0);be&&i.drawBuffers($)}function nt(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const rt={[Rs]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};rt[Au]=i.MIN,rt[Ru]=i.MAX;const oe={[Cu]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[Fu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[zu]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(N,re,$,be,xe,_e,We,ot,me,Ye){if(N===ts){p===!0&&(Xe(i.BLEND),p=!1);return}if(p===!1&&(ge(i.BLEND),p=!0),N!==bu){if(N!==m||Ye!==E){if((M!==Rs||A!==Rs)&&(i.blendEquation(i.FUNC_ADD),M=Rs,A=Rs),Ye)switch(N){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:bt("WebGLState: Invalid blending: ",N);break}else switch(N){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zl:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",N);break}S=null,_=null,T=null,x=null,w.set(0,0,0),U=0,m=N,E=Ye}return}xe=xe||re,_e=_e||$,We=We||be,(re!==M||xe!==A)&&(i.blendEquationSeparate(rt[re],rt[xe]),M=re,A=xe),($!==S||be!==_||_e!==T||We!==x)&&(i.blendFuncSeparate(oe[$],oe[be],oe[_e],oe[We]),S=$,_=be,T=_e,x=We),(ot.equals(w)===!1||me!==U)&&(i.blendColor(ot.r,ot.g,ot.b,me),w.copy(ot),U=me),m=N,E=!1}function Me(N,re){N.side===Vt?Xe(i.CULL_FACE):ge(i.CULL_FACE);let $=N.side===pn;re&&($=!$),Ne($),N.blending===ui&&N.transparent===!1?ve(ts):ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const be=N.stencilWrite;a.setTest(be),be&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ge(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){P!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),P=N)}function Te(N){N!==Su?(ge(i.CULL_FACE),N!==I&&(N===Ol?i.cullFace(i.BACK):N===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),I=N}function Qe(N){N!==z&&(W&&i.lineWidth(N),z=N)}function Ge(N,re,$){N?(ge(i.POLYGON_OFFSET_FILL),(L!==re||G!==$)&&(L=re,G=$,o.getReversed()&&(re=-re,$=-$),i.polygonOffset(re,$))):Xe(i.POLYGON_OFFSET_FILL)}function it(N){N?ge(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function dt(N){N===void 0&&(N=i.TEXTURE0+K-1),j!==N&&(i.activeTexture(N),j=N)}function gt(N,re,$){$===void 0&&(j===null?$=i.TEXTURE0+K-1:$=j);let be=se[$];be===void 0&&(be={type:void 0,texture:void 0},se[$]=be),(be.type!==N||be.texture!==re)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(N,re||Ue[N]),be.type=N,be.texture=re)}function O(){const N=se[j];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Lt(){try{i.compressedTexImage2D(...arguments)}catch(N){bt("WebGLState:",N)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(N){bt("WebGLState:",N)}}function At(){try{i.texSubImage2D(...arguments)}catch(N){bt("WebGLState:",N)}}function Ee(){try{i.texSubImage3D(...arguments)}catch(N){bt("WebGLState:",N)}}function Dt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){bt("WebGLState:",N)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){bt("WebGLState:",N)}}function Ze(){try{i.texStorage2D(...arguments)}catch(N){bt("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){bt("WebGLState:",N)}}function y(){try{i.texImage2D(...arguments)}catch(N){bt("WebGLState:",N)}}function Y(){try{i.texImage3D(...arguments)}catch(N){bt("WebGLState:",N)}}function de(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function ae(N,re){u[N]!==re&&(i.pixelStorei(N,re),u[N]=re)}function Se(N){q.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function we(N){pe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}function ee(N,re){let $=c.get(re);$===void 0&&($=new WeakMap,c.set(re,$));let be=$.get(N);be===void 0&&(be=i.getUniformBlockIndex(re,N.name),i.uniformBlockBinding(re,be,be),$.set(N,be))}function ie(N,re,$){const xe=c.get(re).get(N);l[xe]!==$&&(i.bindBufferBase(i.UNIFORM_BUFFER,xe,$),l[xe]=$)}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,se={},f={},l={},d=new WeakMap,g=[],v=null,p=!1,m=null,M=null,S=null,_=null,A=null,T=null,x=null,w=new je(0,0,0),U=0,E=!1,P=null,I=null,z=null,L=null,G=null,q.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Xe,bindFramebuffer:wt,drawBuffers:Ve,useProgram:nt,setBlending:ve,setMaterial:Me,setFlipSided:Ne,setCullFace:Te,setLineWidth:Qe,setPolygonOffset:Ge,setScissorTest:it,activeTexture:dt,bindTexture:gt,unbindTexture:O,compressedTexImage2D:Lt,compressedTexImage3D:ct,texImage2D:y,texImage3D:Y,pixelStorei:ae,getParameter:de,updateUBOMapping:ee,uniformBlockBinding:ie,texStorage2D:Ze,texStorage3D:R,texSubImage2D:At,texSubImage3D:Ee,compressedTexSubImage2D:Dt,compressedTexSubImage3D:qe,scissor:Se,viewport:we,reset:ye}}function xx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new B,h=new WeakMap,u=new Set;let f;const d=new WeakMap,g=new Set,v=new FinalizationRegistry(R=>g.delete(R));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return p?new OffscreenCanvas(R,y):xo("canvas")}function M(R,y,Y){let de=1;const ae=Ze(R);if((ae.width>Y||ae.height>Y)&&(de=Y/Math.max(ae.width,ae.height)),de<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Se=Math.floor(de*ae.width),we=Math.floor(de*ae.height);f===void 0&&(f=m(Se,we));const ee=y?m(Se,we):f;return ee.width=Se,ee.height=we,ee.getContext("2d").drawImage(R,0,0,Se,we),tt("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Se+"x"+we+")."),ee}else return"data"in R&&tt("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function S(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,y,Y,de,ae,Se=!1){if(R!==null){if(i[R]!==void 0)return i[R];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let we;de&&(we=e.get("EXT_texture_norm16"),we||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===i.RED&&(Y===i.FLOAT&&(ee=i.R32F),Y===i.HALF_FLOAT&&(ee=i.R16F),Y===i.UNSIGNED_BYTE&&(ee=i.R8),Y===i.UNSIGNED_SHORT&&we&&(ee=we.R16_EXT),Y===i.SHORT&&we&&(ee=we.R16_SNORM_EXT)),y===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.R8UI),Y===i.UNSIGNED_SHORT&&(ee=i.R16UI),Y===i.UNSIGNED_INT&&(ee=i.R32UI),Y===i.BYTE&&(ee=i.R8I),Y===i.SHORT&&(ee=i.R16I),Y===i.INT&&(ee=i.R32I)),y===i.RG&&(Y===i.FLOAT&&(ee=i.RG32F),Y===i.HALF_FLOAT&&(ee=i.RG16F),Y===i.UNSIGNED_BYTE&&(ee=i.RG8),Y===i.UNSIGNED_SHORT&&we&&(ee=we.RG16_EXT),Y===i.SHORT&&we&&(ee=we.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RG16UI),Y===i.UNSIGNED_INT&&(ee=i.RG32UI),Y===i.BYTE&&(ee=i.RG8I),Y===i.SHORT&&(ee=i.RG16I),Y===i.INT&&(ee=i.RG32I)),y===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),Y===i.UNSIGNED_INT&&(ee=i.RGB32UI),Y===i.BYTE&&(ee=i.RGB8I),Y===i.SHORT&&(ee=i.RGB16I),Y===i.INT&&(ee=i.RGB32I)),y===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ee=i.RGBA32UI),Y===i.BYTE&&(ee=i.RGBA8I),Y===i.SHORT&&(ee=i.RGBA16I),Y===i.INT&&(ee=i.RGBA32I)),y===i.RGB&&(Y===i.UNSIGNED_SHORT&&we&&(ee=we.RGB16_EXT),Y===i.SHORT&&we&&(ee=we.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),y===i.RGBA){const ie=Se?go:yt.getTransfer(ae);Y===i.FLOAT&&(ee=i.RGBA32F),Y===i.HALF_FLOAT&&(ee=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ee=ie===Ct?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&we&&(ee=we.RGBA16_EXT),Y===i.SHORT&&we&&(ee=we.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(R,y){let Y;return R?y===null||y===Jn||y===Ds?Y=i.DEPTH24_STENCIL8:y===Ln?Y=i.DEPTH32F_STENCIL8:y===mr&&(Y=i.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Jn||y===Ds?Y=i.DEPTH_COMPONENT24:y===Ln?Y=i.DEPTH_COMPONENT32F:y===mr&&(Y=i.DEPTH_COMPONENT16),Y}function w(R,y){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function U(R){const y=new WeakRef(R);n.get(R).__ref=y,g.add(y),v.register(R,y,y)}function E(R){const y=n.get(R).__ref;y!==void 0&&(g.delete(y),v.unregister(y))}function P(R){z(R.target)}function I(R){L(R.target)}function z(R){R.removeEventListener("dispose",P),E(R),K(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function L(R){R.removeEventListener("dispose",I),E(R),ce(R)}function G(){for(const R of g){const y=R.deref();y!==void 0&&(y.isRenderTarget===!0?L(y):z(y))}g.clear(),u.clear()}function K(R){const y=n.get(R);if(y.__webglInit===void 0)return;const Y=R.source,de=d.get(Y);if(de){const ae=de[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&W(R),Object.keys(de).length===0&&d.delete(Y)}n.remove(R)}function W(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const Y=R.source,de=d.get(Y);delete de[y.__cacheKey],o.memory.textures--}function ce(R){const y=n.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();const Y=R.depthTexture;if(Y&&Y.renderTarget===R&&z(Y),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(y.__webglFramebuffer[ae]))for(let Se=0;Se<y.__webglFramebuffer[ae].length;Se++)i.deleteFramebuffer(y.__webglFramebuffer[ae][Se]);else i.deleteFramebuffer(y.__webglFramebuffer[ae]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[ae])}else{if(Array.isArray(y.__webglFramebuffer))for(let ae=0;ae<y.__webglFramebuffer.length;ae++)i.deleteFramebuffer(y.__webglFramebuffer[ae]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ae=0;ae<y.__webglColorRenderbuffer.length;ae++)y.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[ae]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const de=R.textures;for(let ae=0,Se=de.length;ae<Se;ae++){const we=n.get(de[ae]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(de[ae])}n.remove(R)}let V=0;function j(){V=0}function se(){return V}function Re(R){V=R}function Ce(){const R=V;return R>=s.maxTextures&&tt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,R}function q(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function pe(R,y){const Y=n.get(R);if(R.isVideoTexture&&Dt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){const de=R.image;if(de===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(Y,R,y);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+y)}function le(R,y){const Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Me(Y,R,y);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+y)}function Ue(R,y){const Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Me(Y,R,y);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+y)}function ge(R,y){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Ne(Y,R,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+y)}const Xe={[is]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},wt={[Wt]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Ve={[Zu]:i.NEVER,[bh]:i.ALWAYS,[Ku]:i.LESS,[yh]:i.LEQUAL,[Ju]:i.EQUAL,[wh]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function nt(R,y){if(y.type===Ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===Lo||y.magFilter===Ar||y.magFilter===Yn||y.minFilter===sn||y.minFilter===Lo||y.minFilter===Ar||y.minFilter===Yn)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Xe[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Xe[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Xe[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,wt[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,wt[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==Ar&&y.minFilter!==Yn||y.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function rt(R,y){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",P),U(y));const de=y.source;let ae=d.get(de);ae===void 0&&(ae={},d.set(de,ae));const Se=q(y);if(Se!==R.__cacheKey){ae[Se]===void 0&&(ae[Se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[Se].usedTimes++;const we=ae[R.__cacheKey];we!==void 0&&(ae[R.__cacheKey].usedTimes--,we.usedTimes===0&&W(y)),R.__cacheKey=Se,R.__webglTexture=ae[Se].texture}return Y}function oe(R,y,Y){return Math.floor(Math.floor(R/Y)/y)}function ve(R,y,Y,de){const Se=R.updateRanges;if(Se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,Y,de,y.data);else{Se.sort((N,re)=>N.start-re.start);let we=0;for(let N=1;N<Se.length;N++){const re=Se[we],$=Se[N],be=re.start+re.count,xe=oe($.start,y.width,4),_e=oe(re.start,y.width,4);$.start<=be+1&&xe===_e&&oe($.start+$.count-1,y.width,4)===xe?re.count=Math.max(re.count,$.start+$.count-re.start):(++we,Se[we]=$)}Se.length=we+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let N=0,re=Se.length;N<re;N++){const $=Se[N],be=Math.floor($.start/4),xe=Math.ceil($.count/4),_e=be%y.width,We=Math.floor(be/y.width),ot=xe,me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,_e,We,ot,me,Y,de,y.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function Me(R,y,Y){let de=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(de=i.TEXTURE_3D);const ae=rt(R,y),Se=y.source;t.bindTexture(de,R.__webglTexture,i.TEXTURE0+Y);const we=n.get(Se);if(Se.version!==we.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const me=yt.getPrimaries(yt.workingColorSpace),Ye=y.colorSpace===hi?null:yt.getPrimaries(y.colorSpace),$e=y.colorSpace===hi||me===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=M(y.image,!1,s.maxTextureSize);ie=qe(y,ie);const ye=r.convert(y.format,y.colorSpace),N=r.convert(y.type);let re=T(y.internalFormat,ye,N,y.normalized,y.colorSpace,y.isVideoTexture);nt(de,y);let $;const be=y.mipmaps,xe=y.isVideoTexture!==!0,_e=we.__version===void 0||ae===!0,We=Se.dataReady,ot=w(y,ie);if(y.isDepthTexture)re=x(y.format===zi,y.type),_e&&(xe?t.texStorage2D(i.TEXTURE_2D,1,re,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,re,ie.width,ie.height,0,ye,N,null));else if(y.isDataTexture)if(be.length>0){xe&&_e&&t.texStorage2D(i.TEXTURE_2D,ot,re,be[0].width,be[0].height);for(let me=0,Ye=be.length;me<Ye;me++)$=be[me],xe?We&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,$.width,$.height,ye,N,$.data):t.texImage2D(i.TEXTURE_2D,me,re,$.width,$.height,0,ye,N,$.data);y.generateMipmaps=!1}else xe?(_e&&t.texStorage2D(i.TEXTURE_2D,ot,re,ie.width,ie.height),We&&ve(y,ie,ye,N)):t.texImage2D(i.TEXTURE_2D,0,re,ie.width,ie.height,0,ye,N,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){xe&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,re,be[0].width,be[0].height,ie.depth);for(let me=0,Ye=be.length;me<Ye;me++)if($=be[me],y.format!==qn)if(ye!==null)if(xe){if(We)if(y.layerUpdates.size>0){const $e=bc($.width,$.height,y.format,y.type);for(const Le of y.layerUpdates){const vt=$.data.subarray(Le*$e/$.data.BYTES_PER_ELEMENT,(Le+1)*$e/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,Le,$.width,$.height,1,ye,vt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,$.width,$.height,ie.depth,ye,$.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,re,$.width,$.height,ie.depth,0,$.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,$.width,$.height,ie.depth,ye,N,$.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,re,$.width,$.height,ie.depth,0,ye,N,$.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{xe&&_e&&t.texStorage2D(i.TEXTURE_2D,ot,re,be[0].width,be[0].height);for(let me=0,Ye=be.length;me<Ye;me++)$=be[me],y.format!==qn?ye!==null?xe?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,$.width,$.height,ye,$.data):t.compressedTexImage2D(i.TEXTURE_2D,me,re,$.width,$.height,0,$.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?We&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,$.width,$.height,ye,N,$.data):t.texImage2D(i.TEXTURE_2D,me,re,$.width,$.height,0,ye,N,$.data)}else if(y.isDataArrayTexture)if(xe){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ot,re,ie.width,ie.height,ie.depth),We)if(y.layerUpdates.size>0){const me=bc(ie.width,ie.height,y.format,y.type);for(const Ye of y.layerUpdates){const $e=ie.data.subarray(Ye*me/ie.data.BYTES_PER_ELEMENT,(Ye+1)*me/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ye,ie.width,ie.height,1,ye,N,$e)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,N,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,re,ie.width,ie.height,ie.depth,0,ye,N,ie.data);else if(y.isData3DTexture)xe?(_e&&t.texStorage3D(i.TEXTURE_3D,ot,re,ie.width,ie.height,ie.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,N,ie.data)):t.texImage3D(i.TEXTURE_3D,0,re,ie.width,ie.height,ie.depth,0,ye,N,ie.data);else if(y.isFramebufferTexture){if(_e)if(xe)t.texStorage2D(i.TEXTURE_2D,ot,re,ie.width,ie.height);else{let me=ie.width,Ye=ie.height;for(let $e=0;$e<ot;$e++)t.texImage2D(i.TEXTURE_2D,$e,re,me,Ye,0,ye,N,null),me>>=1,Ye>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const me=i.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ie.parentNode!==me){me.appendChild(ie),u.add(y),me.onpaint=Ye=>{const $e=Ye.changedElements;for(const Le of u)$e.includes(Le.image)&&(Le.needsUpdate=!0)},me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{const $e=i.RGBA,Le=i.RGBA,vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$e,Le,vt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(xe&&_e){const me=Ze(be[0]);t.texStorage2D(i.TEXTURE_2D,ot,re,me.width,me.height)}for(let me=0,Ye=be.length;me<Ye;me++)$=be[me],xe?We&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ye,N,$):t.texImage2D(i.TEXTURE_2D,me,re,ye,N,$);y.generateMipmaps=!1}else if(xe){if(_e){const me=Ze(ie);t.texStorage2D(i.TEXTURE_2D,ot,re,me.width,me.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,N,ie)}else t.texImage2D(i.TEXTURE_2D,0,re,ye,N,ie);S(y)&&y.mipmapsAutoUpdate===!0&&_(de),we.__version=Se.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ne(R,y,Y){if(y.image.length!==6)return;const de=rt(R,y),ae=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);const Se=n.get(ae);if(ae.version!==Se.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);const we=yt.getPrimaries(yt.workingColorSpace),ee=y.colorSpace===hi?null:yt.getPrimaries(y.colorSpace),ie=y.colorSpace===hi||we===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,N=y.image[0]&&y.image[0].isDataTexture,re=[];for(let Le=0;Le<6;Le++)!ye&&!N?re[Le]=M(y.image[Le],!0,s.maxCubemapSize):re[Le]=N?y.image[Le].image:y.image[Le],re[Le]=qe(y,re[Le]);const $=re[0],be=r.convert(y.format,y.colorSpace),xe=r.convert(y.type);let _e=T(y.internalFormat,be,xe,y.normalized,y.colorSpace);const We=y.isVideoTexture!==!0,ot=Se.__version===void 0||de===!0,me=ae.dataReady;let Ye=w(y,$);nt(i.TEXTURE_CUBE_MAP,y);let $e;if(y.isDepthTexture){if(_e=x(y.format===zi,y.type),ot)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,$.width,$.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,_e,$.width,$.height,0,be,xe,null)}else if(ye){We&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,_e,$.width,$.height);for(let Le=0;Le<6;Le++){$e=re[Le].mipmaps;for(let vt=0;vt<$e.length;vt++){const Ot=$e[vt];y.format!==qn?be!==null?We?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt,0,0,Ot.width,Ot.height,be,Ot.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt,_e,Ot.width,Ot.height,0,Ot.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt,0,0,Ot.width,Ot.height,be,xe,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt,_e,Ot.width,Ot.height,0,be,xe,Ot.data)}}}else{if($e=y.mipmaps,We&&ot){$e.length>0&&Ye++;const Le=Ze(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,_e,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(N){We?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,re[Le].width,re[Le].height,be,xe,re[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,_e,re[Le].width,re[Le].height,0,be,xe,re[Le].data);for(let vt=0;vt<$e.length;vt++){const rn=$e[vt].image[Le].image;We?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt+1,0,0,rn.width,rn.height,be,xe,rn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt+1,_e,rn.width,rn.height,0,be,xe,rn.data)}}else{We?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,be,xe,re[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,_e,be,xe,re[Le]);for(let vt=0;vt<$e.length;vt++){const Ot=$e[vt];We?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt+1,0,0,be,xe,Ot.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,vt+1,_e,be,xe,Ot.image[Le])}}}S(y)&&y.mipmapsAutoUpdate===!0&&_(i.TEXTURE_CUBE_MAP),Se.__version=ae.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Te(R,y,Y,de,ae,Se){const we=r.convert(Y.format,Y.colorSpace),ee=r.convert(Y.type),ie=T(Y.internalFormat,we,ee,Y.normalized,Y.colorSpace),ye=n.get(y),N=n.get(Y);if(N.__renderTarget=y,!ye.__hasExternalTextures){const re=Math.max(1,y.width>>Se),$=Math.max(1,y.height>>Se);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,Se,ie,re,$,y.depth,0,we,ee,null):t.texImage2D(ae,Se,ie,re,$,0,we,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,ae,N.__webglTexture,0,At(y)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,ae,N.__webglTexture,Se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(R,y,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const de=y.depthTexture,ae=de&&de.isDepthTexture?de.type:null,Se=x(y.stencilBuffer,ae),we=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(y),Se,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(y),Se,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Se,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,R)}else{const de=y.textures;for(let ae=0;ae<de.length;ae++){const Se=de[ae],we=r.convert(Se.format,Se.colorSpace),ee=r.convert(Se.type),ie=T(Se.internalFormat,we,ee,Se.normalized,Se.colorSpace);Ee(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(y),ie,y.width,y.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(y),ie,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ie,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(R,y,Y){const de=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ae=n.get(y.depthTexture);ae.__renderTarget=y;const Se=de?y.depthTexture.image[0]:y.depthTexture.image;(!ae.__webglTexture||Se.width!==y.width||Se.height!==y.height)&&(Se.width=y.width,Se.height=y.height,y.depthTexture.needsUpdate=!0),de?ge(y.depthTexture,0):pe(y.depthTexture,0);const we=ae.__webglTexture,ee=At(y),ie=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,ye=y.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===ki)Ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ie,we,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ie,we,0);else if(y.depthTexture.format===zi)Ee(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,ie,we,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,ye,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(R){const y=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const de=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),de){const ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,de.removeEventListener("dispose",ae)};de.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=de}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(Y)for(let de=0;de<6;de++)Ge(y.__webglFramebuffer[de],R,de);else R.texture.mipmaps.length>0?Ge(y.__webglFramebuffer[0],R,0):Ge(y.__webglFramebuffer,R,0);else if(Y){y.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[de]),y.__webglDepthbuffer[de]===void 0)y.__webglDepthbuffer[de]=i.createRenderbuffer(),Qe(y.__webglDepthbuffer[de],R,!1);else{const ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Se)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Qe(y.__webglDepthbuffer,R,!1);else{const ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,Se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(R,y,Y){const de=n.get(R);y!==void 0&&Te(de.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&it(R)}function gt(R){const y=R.texture,Y=n.get(R),de=n.get(y);R.addEventListener("dispose",I),U(R);const ae=R.textures,Se=R.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=y.version,o.memory.textures++),Se){Y.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps.length>0){Y.__webglFramebuffer[ee]=[];for(let ie=0;ie<y.mipmaps.length;ie++)Y.__webglFramebuffer[ee][ie]=i.createFramebuffer()}else Y.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(y.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)Y.__webglFramebuffer[ee]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(we)for(let ee=0,ie=ae.length;ee<ie;ee++){const ye=n.get(ae[ee]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ee(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ee=0;ee<ae.length;ee++){const ie=ae[ee];Y.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ee]);const ye=r.convert(ie.format,ie.colorSpace),N=r.convert(ie.type),re=T(ie.internalFormat,ye,N,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),$=At(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,$,re,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),nt(i.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)Te(Y.__webglFramebuffer[ee][ie],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else Te(Y.__webglFramebuffer[ee],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);S(y)?_(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(we){for(let ee=0,ie=ae.length;ee<ie;ee++){const ye=ae[ee],N=n.get(ye);let re=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,N.__webglTexture),nt(re,ye),Te(Y.__webglFramebuffer,R,ye,i.COLOR_ATTACHMENT0+ee,re,0),S(ye)&&_(re)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,de.__webglTexture),nt(ee,y),y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)Te(Y.__webglFramebuffer[ie],R,y,i.COLOR_ATTACHMENT0,ee,ie);else Te(Y.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,ee,0);S(y)?_(ee):y.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&it(R)}function O(R){const y=R.textures;for(let Y=0,de=y.length;Y<de;Y++){const ae=y[Y];if(S(ae)&&ae.mipmapsAutoUpdate===!0){const Se=A(R),we=n.get(ae).__webglTexture;t.bindTexture(Se,we),_(Se),t.unbindTexture()}}}const Lt=[];function ct(R){if(R.samples>0){if(Ee(R)===!1){const y=R.textures,Y=R.width,de=R.height;let ae=i.COLOR_BUFFER_BIT;const Se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(R),ee=y.length>1;if(ee)for(let ye=0;ye<y.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const N=n.get(y[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,Y,de,0,0,Y,de,ae,i.NEAREST),l===!0&&(Lt.length=0,Lt.push(i.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Lt.push(Se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ye=0;ye<y.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,we.__webglColorRenderbuffer[ye]);const N=n.get(y[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function At(R){return Math.min(s.maxSamples,R.samples)}function Ee(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Dt(R){const y=o.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function qe(R,y){const Y=R.colorSpace,de=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==mo&&Y!==hi&&(yt.getTransfer(Y)===Ct?(de!==qn||ae!==_n)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",Y)),y}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ce,this.resetTextureUnits=j,this.getTextureUnits=se,this.setTextureUnits=Re,this.setTexture2D=pe,this.setTexture2DArray=le,this.setTexture3D=Ue,this.setTextureCube=ge,this.rebindTextures=dt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ee,this.dispose=G}function vx(i,e){function t(n,s=hi){let r;const o=yt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return i.BYTE;if(n===xh)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===jt)return i.HALF_FLOAT;if(n===_h)return i.ALPHA;if(n===Sh)return i.RGB;if(n===qn)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===ss)return i.RG;if(n===fl)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===ro||n===oo||n===ao||n===lo)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===_a||n===Sa||n===ya)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===ba||n===Ta||n===Ea||n===Aa||n===fo||n===Ra)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===ba)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ta)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ea)return r.COMPRESSED_R11_EAC;if(n===Aa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fo)return r.COMPRESSED_RG11_EAC;if(n===Ra)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Na||n===Ua||n===Fa||n===Oa||n===za||n===Ba||n===Ga||n===ka||n===Ha)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ga)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ha)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Va||n===Wa||n===Xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Va)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===qa||n===po||n===Za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:Mx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new C(new Je(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yx extends Vi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=typeof XRWebGLBinding<"u",p=new Sx,m={},M=t.getContextAttributes();let S=null,_=null;const A=[],T=[],x=new B;let w=null,U=null;const E=new Mn;E.viewport=new Ft;const P=new Mn;P.viewport=new Ft;const I=[E,P],z=new Ld;let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pe=A[q];return pe===void 0&&(pe=new zo,A[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=A[q];return pe===void 0&&(pe=new zo,A[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=A[q];return pe===void 0&&(pe=new zo,A[q]=pe),pe.getHandSpace()};function K(q){const pe=T.indexOf(q.inputSource);if(pe===-1)return;const le=A[pe];le!==void 0&&(le.update(q.inputSource,q.frame,c||o),le.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ce);for(let q=0;q<A.length;q++){const pe=T[q];pe!==null&&(T[q]=null,A[q].disconnect(pe))}L=null,G=null,p.reset();for(const q in m)delete m[q];if(e.setRenderTarget(S),d=null,f=null,u=null,s=null,_=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),U!==null){const q=U.camera;q.fov=U.fov,q.zoom=U.zoom,q.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ce),M.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ue=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=M.stencil?zi:ki,Ue=M.stencil?Ds:Jn);const Xe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new en(f.textureWidth,f.textureHeight,{format:qn,type:_n,depthTexture:new Ns(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const le={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new en(d.framebufferWidth,d.framebufferHeight,{format:qn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ce.setContext(s),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ce(q){for(let pe=0;pe<q.removed.length;pe++){const le=q.removed[pe],Ue=T.indexOf(le);Ue>=0&&(T[Ue]=null,A[Ue].disconnect(le))}for(let pe=0;pe<q.added.length;pe++){const le=q.added[pe];let Ue=T.indexOf(le);if(Ue===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=T.length){T.push(le),Ue=Xe;break}else if(T[Xe]===null){T[Xe]=le,Ue=Xe;break}if(Ue===-1)break}const ge=A[Ue];ge&&ge.connect(le)}}function V(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let pe=q.near,le=q.far;p.texture!==null&&(p.depthNear>0&&(pe=p.depthNear),p.depthFar>0&&(le=p.depthFar)),z.near=P.near=E.near=pe,z.far=P.far=E.far=le,(L!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,G=z.far),z.layers.mask=q.layers.mask|6,E.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;const Ue=q.parent,ge=z.cameras;V(z,Ue);for(let Xe=0;Xe<ge.length;Xe++)V(ge[Xe],Ue);z.projectionMatrix.copy(E.projectionMatrix),z.projectionMatrixInverse.copy(E.projectionMatrixInverse),U===null&&q.isPerspectiveCamera&&(U={camera:q,fov:q.fov,zoom:q.zoom}),j(q,z,Ue)};function j(q,pe,le){le===null?q.matrix.copy(pe.matrixWorld):(q.matrix.copy(le.matrixWorld),q.matrix.invert(),q.matrix.multiply(pe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Is*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(q){return m[q]};let se=null;function Re(q,pe){if(h=pe.getViewerPose(c||o),g=pe,h!==null){const le=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Ue=!1;le.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let Ve=0;Ve<le.length;Ve++){const nt=le[Ve];let rt=null;if(d!==null)rt=d.getViewport(nt);else{const ve=u.getViewSubImage(f,nt);rt=ve.viewport,Ve===0&&(e.setRenderTargetTextures(_,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(_))}let oe=I[Ve];oe===void 0&&(oe=new Mn,oe.layers.enable(Ve),oe.viewport=new Ft,I[Ve]=oe),oe.matrix.fromArray(nt.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(nt.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(rt.x,rt.y,rt.width,rt.height),Ve===0&&(z.matrix.copy(oe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(oe)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Ve=u.getDepthInformation(le[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,s.renderState)}if(ge&&ge.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Ve=0;Ve<le.length;Ve++){const nt=le[Ve].camera;if(nt){let rt=m[nt];rt||(rt=new Bh,m[nt]=rt);const oe=u.getCameraImage(nt);rt.sourceTexture=oe}}}}for(let le=0;le<A.length;le++){const Ue=T[le],ge=A[le];Ue!==null&&ge!==void 0&&ge.update(Ue,pe,c||o)}se&&se(q,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Ce=new $h;Ce.setAnimationLoop(Re),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}}const wx=new Et,cu=new at;cu.set(-1,0,0,0,1,0,0,0,1);function bx(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Kh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,S,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,_)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),S=M.envMap,_=M.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(cu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,e,t,n){let s={},r={};function o(M,S){const _=S.program;n.uniformBlockBinding(M,_,s[M.id])}function a(M,S){let _=s[M.id];_===void 0&&(g(M),_=l(M),s[M.id]=_,M.addEventListener("dispose",p));const A=S.program;n.updateUBOMapping(M,A);const T=e.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const S=i.createBuffer(),_=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,_,A),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(M){const S=s[M.id],_=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,x=_.length;T<x;T++){const w=_[T];if(Array.isArray(w))for(let U=0,E=w.length;U<E;U++)h(w[U],T,U,A);else h(w,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,S,_,A){if(f(M,S,_,A)===!0){const T=M.__offset,x=M.value;if(Array.isArray(x)){let w=0;for(let U=0;U<x.length;U++){const E=x[U],P=v(E,!0);u(E,M.__data,w),w+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function u(M,S,_){typeof M=="number"||typeof M=="boolean"?S[_]=M:M.isMatrix3?(S[_]=M.elements[0],S[_+1]=M.elements[1],S[_+2]=M.elements[2],S[_+3]=0,S[_+4]=M.elements[3],S[_+5]=M.elements[4],S[_+6]=M.elements[5],S[_+7]=0,S[_+8]=M.elements[6],S[_+9]=M.elements[7],S[_+10]=M.elements[8],S[_+11]=0):ArrayBuffer.isView(M)?S.set(M.subarray(0,S.length-_),_):M.toArray(S,_)}function f(M,S,_,A){const T=M.value,x=S+"_"+_;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);const w=A[x];let U=!1;for(let E=0;E<T.length;E++)d(T[E],w,E)===!0&&(U=!0);return U}return d(T,A,x)}function d(M,S,_){if(S[_]===void 0)return typeof M=="number"||typeof M=="boolean"?S[_]=M:ArrayBuffer.isView(M)?S[_]=M.slice():S[_]=M.clone(),!0;{const A=S[_];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return S[_]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function g(M){const S=M.uniforms;let _=0;const A=16;for(let x=0,w=S.length;x<w;x++){const U=Array.isArray(S[x])?S[x]:[S[x]];for(let E=0,P=U.length;E<P;E++){const I=U[E],z=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(S[x])||Array.isArray(I.value);let G=_;for(let W=0,ce=z.length;W<ce;W++){const V=z[W],j=v(V,L),se=_%A,Re=se%j.boundary,Ce=se+Re;_+=Re,Ce!==0&&A-Ce<j.storage&&(_+=A-Ce),W===0&&(G=_),_+=j.storage}const K=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new K((_-G)/Float32Array.BYTES_PER_ELEMENT),I.__offset=G}}const T=_%A;return T>0&&(_+=A-T),M.__size=_,M.__cache={},this}function v(M,S){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=16,_.storage=48):M.isMatrix4?(_.boundary=16,_.storage=64):M.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",M),S===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function p(M){const S=M.target;S.removeEventListener("dispose",p),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}const Ex=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function Ax(){return Gn===null&&(Gn=new Uh(Ex,16,16,ss,jt),Gn.name="DFG_LUT",Gn.minFilter=sn,Gn.magFilter=sn,Gn.wrapS=fi,Gn.wrapT=fi,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class Rx{constructor(e={}){const{canvas:t=ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=d,p=new Set([dl,fl,ul]),m=new Set([_n,Jn,mr,Ds,ll,cl]),M=new Uint32Array(4),S=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const x=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1,I=null,z=null,L=null,G=null;this._outputColorSpace=vn;let K=0,W=0,ce=null,V=-1,j=null;const se=new Ft,Re=new Ft;let Ce=null;const q=new je(0);let pe=0,le=t.width,Ue=t.height,ge=1,Xe=null,wt=null;const Ve=new Ft(0,0,le,Ue),nt=new Ft(0,0,le,Ue);let rt=!1;const oe=new xr,ve=new _l;let Me=!1,Ne=!1;const Te=new Et,Qe=new D,Ge=new Ft,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function gt(){return ce===null?ge:1}let O=n;function Lt(b,F){return t.getContext(b,F)}let ct,At,Ee,Dt,qe,Ze,R,y,Y,de,ae,Se,we,ee,ie,ye,N,re,$,be,xe,_e,We;try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Le,!1),O===null){const F="webgl2";if(O=Lt(F,b),O===null)throw Lt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(b){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),bt("WebGLRenderer: "+b.message),b}function ot(){ct=new Lm(O),ct.init(),xe=new vx(O,ct),At=new _m(O,ct,e,xe),Ee=new gx(O,ct),At.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),z=O.createFramebuffer(),L=O.createFramebuffer(),G=O.createFramebuffer(),Dt=new Nm(O),qe=new nx,Ze=new xx(O,ct,Ee,qe,At,xe,Dt),R=new Pm(E),y=new Fd(O),_e=new vm(O,y),Y=new Dm(O,y,Dt,_e),de=new Fm(O,Y,y,_e,Dt),re=new Um(O,At,Ze),ie=new Sm(qe),ae=new tx(E,R,ct,At,_e,ie),Se=new bx(E,qe),we=new sx,ee=new hx(ct),N=new xm(E,R,Ee,de,g,l),ye=new mx(E,de,At),We=new Tx(O,Dt,At,Ee),$=new Mm(O,ct,Dt),be=new Im(O,ct,Dt),Dt.programs=ae.programs,E.capabilities=At,E.extensions=ct,E.properties=qe,E.renderLists=we,E.shadowMap=ye,E.state=Ee,E.info=Dt}v!==_n&&(U=new zm(v,t.width,t.height,a,s,r));const me=new yx(E,O);this.xr=me,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const b=ct.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ct.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(b){b!==void 0&&(ge=b,this.setSize(le,Ue,!1))},this.getSize=function(b){return b.set(le,Ue)},this.setSize=function(b,F,Q=!0){if(me.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=b,Ue=F,t.width=Math.floor(b*ge),t.height=Math.floor(F*ge),Q===!0&&(t.style.width=b+"px",t.style.height=F+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(le*ge,Ue*ge).floor()},this.setDrawingBufferSize=function(b,F,Q){le=b,Ue=F,ge=Q,t.width=Math.floor(b*Q),t.height=Math.floor(F*Q),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(v===_n){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(se)},this.getViewport=function(b){return b.copy(Ve)},this.setViewport=function(b,F,Q,X){b.isVector4?Ve.set(b.x,b.y,b.z,b.w):Ve.set(b,F,Q,X),Ee.viewport(se.copy(Ve).multiplyScalar(gt()).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,F,Q,X){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,F,Q,X),Ee.scissor(Re.copy(nt).multiplyScalar(gt()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(b){Ee.setScissorTest(rt=b)},this.setOpaqueSort=function(b){Xe=b},this.setTransparentSort=function(b){wt=b},this.getClearColor=function(b){return b.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,Q=!0){let X=0;if(b){let Z=!1;if(ce!==null){const H=ce.texture.format;Z=p.has(H)}if(Z){const H=ce.texture.type,J=m.has(H),ue=N.getClearColor(),fe=N.getClearAlpha(),Ae=ue.r,He=ue.g,Ke=ue.b;J?(M[0]=Ae,M[1]=He,M[2]=Ke,M[3]=fe,O.clearBufferuiv(O.COLOR,0,M)):(S[0]=Ae,S[1]=He,S[2]=Ke,S[3]=fe,O.clearBufferiv(O.COLOR,0,S))}else X|=O.COLOR_BUFFER_BIT}F&&(X|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),N.dispose(),we.dispose(),ee.dispose(),Ze.dispose(),qe.dispose(),R.dispose(),de.dispose(),Y.dispose(),_e.dispose(),We.dispose(),ae.dispose(),me.dispose(),me.removeEventListener("sessionstart",Fn),me.removeEventListener("sessionend",Ti),fn.stop()};function Ye(b){b.preventDefault(),vo("WebGLRenderer: Context Lost."),P=!0}function $e(){vo("WebGLRenderer: Context Restored."),P=!1;const b=Dt.autoReset,F=ye.enabled,Q=ye.autoUpdate,X=ye.needsUpdate,Z=ye.type;ot(),Dt.autoReset=b,ye.enabled=F,ye.autoUpdate=Q,ye.needsUpdate=X,ye.type=Z}function Le(b){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){const F=b.target;F.removeEventListener("dispose",vt),Ot(F)}function Ot(b){rn(b),qe.remove(b)}function rn(b){const F=qe.get(b).programs;F!==void 0&&(F.forEach(function(Q){ae.releaseProgram(Q)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,Q,X,Z,H){F===null&&(F=it);const J=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,ue=Xi(b,F,Q,X,Z);Ee.setMaterial(X,J);let fe=Q.index,Ae=1;if(X.wireframe===!0){if(fe=Y.getWireframeAttribute(Q),fe===void 0)return;Ae=2}const He=Q.drawRange,Ke=Q.attributes.position;let Pe=He.start*Ae,et=(He.start+He.count)*Ae;H!==null&&(Pe=Math.max(Pe,H.start*Ae),et=Math.min(et,(H.start+H.count)*Ae)),fe!==null?(Pe=Math.max(Pe,0),et=Math.min(et,fe.count)):Ke!=null&&(Pe=Math.max(Pe,0),et=Math.min(et,Ke.count));const ht=et-Pe;if(ht<0||ht===1/0)return;_e.setup(Z,X,ue,Q,fe);let xt,k=$;if(fe!==null&&(xt=y.get(fe),k=be,k.setIndex(xt)),Z.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*gt()),k.setMode(O.LINES)):k.setMode(O.TRIANGLES);else if(Z.isLine){let ne=X.linewidth;ne===void 0&&(ne=1),Ee.setLineWidth(ne*gt()),Z.isLineSegments?k.setMode(O.LINES):Z.isLineLoop?k.setMode(O.LINE_LOOP):k.setMode(O.LINE_STRIP)}else Z.isPoints?k.setMode(O.POINTS):Z.isSprite&&k.setMode(O.TRIANGLES);if(Z.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))k.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ne=Z._multiDrawStarts,te=Z._multiDrawCounts,ze=Z._multiDrawCount,De=fe?y.get(fe).bytesPerElement:1,Rt=qe.get(X).currentProgram.getUniforms();for(let Mt=0;Mt<ze;Mt++)Rt.setValue(O,"_gl_DrawID",Mt),k.render(ne[Mt]/De,te[Mt])}else if(Z.isInstancedMesh)k.renderInstances(Pe,ht,Z.count);else if(Q.isInstancedBufferGeometry){const ne=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,te=Math.min(Q.instanceCount,ne);k.renderInstances(Pe,ht,te)}else k.render(Pe,ht)};function ei(b,F,Q,X){I!==null&&b.isNodeMaterial&&I.setObject(X,b),Me===!0&&ie.setState(b,Q,!1),b.transparent===!0&&b.side===Vt&&b.forceSinglePass===!1?(b.side=pn,b.needsUpdate=!0,dn(b,F,X),b.side=ns,b.needsUpdate=!0,dn(b,F,X),b.side=Vt):dn(b,F,X)}this.compile=function(b,F,Q=null){Q===null&&(Q=b),I!==null&&I.renderStart(b,F,Q),T=ee.get(Q),T.init(F),w.push(T),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),b!==Q&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(T.pushLight(Z),Z.castShadow&&T.pushShadow(Z))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),Ne=this.localClippingEnabled,Me=ie.init(this.clippingPlanes,Ne),Me===!0&&ie.setGlobalState(this.clippingPlanes,F),I!==null&&ye.render(T.state.shadowsArray,Q,F);const X=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const H=Z.material;if(H)if(Array.isArray(H))for(let J=0;J<H.length;J++){const ue=H[J];ei(ue,Q,F,Z),X.add(ue)}else ei(H,Q,F,Z),X.add(H)}),T=w.pop(),I!==null&&I.renderEnd(),X},this.compileAsync=function(b,F,Q=null){const X=this.compile(b,F,Q);return new Promise(Z=>{function H(){if(X.forEach(function(J){const fe=qe.get(J).currentProgram;(fe===void 0||fe.isReady())&&X.delete(J)}),X.size===0){Z(b);return}setTimeout(H,10)}ct.get("KHR_parallel_shader_compile")!==null?H():setTimeout(H,10)})};let bi=null;function Un(b){bi&&bi(b)}function Fn(){fn.stop()}function Ti(){fn.start()}const fn=new $h;fn.setAnimationLoop(Un),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(b){bi=b,me.setAnimationLoop(b),b===null?fn.stop():fn.start()},me.addEventListener("sessionstart",Fn),me.addEventListener("sessionend",Ti),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(b,F);const Q=me.enabled===!0&&me.isPresenting===!0,X=U!==null&&(ce===null||Q)&&U.begin(E,ce);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,F,ce),T=ee.get(b,w.length),T.init(F),T.state.textureUnits=Ze.getTextureUnits(),w.push(T),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ve.setFromArrayCamera(F):oe.setFromProjectionMatrix(Te,Dn,F.reversedDepth),Ne=this.localClippingEnabled,Me=ie.init(this.clippingPlanes,Ne),A=we.get(b,x.length),A.init(),x.push(A),this.info.render.frame++,me.enabled===!0&&me.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&ti(J,F,-1/0,E.sortObjects)}ti(b,F,0,E.sortObjects),A.finish(),I!==null&&I.updateLights(T.state.lightsArray),E.sortObjects===!0&&A.sort(Xe,wt),dt=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,dt&&N.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),Me===!0&&ie.beginShadows();const Z=T.state.shadowsArray;if(ye.render(Z,b,F),Me===!0&&ie.endShadows(),(X&&U.hasRenderPass())===!1){const J=A.opaque,ue=A.transmissive;if(T.setupLights(),F.isArrayCamera){const fe=F.cameras;if(ue.length>0)for(let Ae=0,He=fe.length;Ae<He;Ae++){const Ke=fe[Ae];ni(J,ue,b,Ke)}dt&&N.render(b);for(let Ae=0,He=fe.length;Ae<He;Ae++){const Ke=fe[Ae];ls(A,b,Ke,Ke.viewport)}}else ue.length>0&&ni(J,ue,b,F),dt&&N.render(b),ls(A,b,F)}ce!==null&&W===0&&(Ze.updateMultisampleRenderTarget(ce),Ze.updateRenderTargetMipmap(ce)),X&&U.end(E),b.isScene===!0&&b.onAfterRender(E,b,F),_e.resetDefaultState(),V=-1,j=null,w.pop(),w.length>0?(T=w[w.length-1],Ze.setTextureUnits(T.state.textureUnits),Me===!0&&ie.setGlobalState(E.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,I!==null&&I.renderEnd()};function ti(b,F,Q,X){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const J=F.isArrayCamera?ve:oe;if(!b.frustumCulled||b.intersectsFrustum(J)){X&&Ge.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const ue=de.update(b),fe=b.material;fe.visible&&A.push(b,ue,fe,Q,Ge.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){const J=F.isArrayCamera?ve:oe;if(!b.frustumCulled||b.intersectsFrustum(J)){const ue=de.update(b),fe=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ge.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ge.copy(ue.boundingSphere.center)),Ge.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(fe)){const Ae=ue.groups;for(let He=0,Ke=Ae.length;He<Ke;He++){const Pe=Ae[He],et=fe[Pe.materialIndex];et&&et.visible&&A.push(b,ue,et,Q,Ge.z,Pe,F)}}else fe.visible&&A.push(b,ue,fe,Q,Ge.z,null,F)}}}const H=b.children;for(let J=0,ue=H.length;J<ue;J++)ti(H[J],F,Q,X)}function ls(b,F,Q,X){const{opaque:Z,transmissive:H,transparent:J}=b;T.setupLightsView(Q),Me===!0&&ie.setGlobalState(E.clippingPlanes,Q),X&&Ee.viewport(se.copy(X)),Z.length>0&&Ei(Z,F,Q),H.length>0&&Ei(H,F,Q),J.length>0&&Ei(J,F,Q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ni(b,F,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){const Pe=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new en(1,1,{generateMipmaps:!0,type:Pe?jt:_n,minFilter:Yn,samples:Math.max(4,At.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const H=T.state.transmissionRenderTarget[X.id],J=X.viewport||se;H.setSize(J.z*E.transmissionResolutionScale,J.w*E.transmissionResolutionScale);const ue=E.getRenderTarget(),fe=E.getActiveCubeFace(),Ae=E.getActiveMipmapLevel();E.setRenderTarget(H),E.getClearColor(q),pe=E.getClearAlpha(),pe<1&&E.setClearColor(16777215,.5),E.clear(),dt&&N.render(Q);const He=E.toneMapping;E.toneMapping=Kn;const Ke=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),Me===!0&&ie.setGlobalState(E.clippingPlanes,X),Ei(b,Q,X),Ze.updateMultisampleRenderTarget(H),Ze.updateRenderTargetMipmap(H),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let et=0,ht=F.length;et<ht;et++){const xt=F[et],{object:k,geometry:ne,material:te,group:ze}=xt;if(te.side===Vt&&k.layers.test(X.layers)){const De=te.side;te.side=pn,te.needsUpdate=!0,On(k,Q,X,ne,te,ze),te.side=De,te.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ze.updateMultisampleRenderTarget(H),Ze.updateRenderTargetMipmap(H))}E.setRenderTarget(ue,fe,Ae),E.setClearColor(q,pe),Ke!==void 0&&(X.viewport=Ke),E.toneMapping=He}function Ei(b,F,Q){const X=F.isScene===!0?F.overrideMaterial:null;for(let Z=0,H=b.length;Z<H;Z++){const J=b[Z],{object:ue,geometry:fe,group:Ae}=J;let He=J.material;He.allowOverride===!0&&X!==null&&(He=X),ue.layers.test(Q.layers)&&On(ue,F,Q,fe,He,Ae)}}function On(b,F,Q,X,Z,H){I!==null&&Z.isNodeMaterial&&I.setObject(b,Z),b.onBeforeRender(E,F,Q,X,Z,H),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(E,F,Q,X,b,H),Z.transparent===!0&&Z.side===Vt&&Z.forceSinglePass===!1?(Z.side=pn,Z.needsUpdate=!0,E.renderBufferDirect(Q,F,X,Z,b,H),Z.side=ns,Z.needsUpdate=!0,E.renderBufferDirect(Q,F,X,Z,b,H),Z.side=Vt):E.renderBufferDirect(Q,F,X,Z,b,H),b.onAfterRender(E,F,Q,X,Z,H)}function Wi(b){let F=0;for(const Q of b)Q.texture!==null&&F++;return F}function dn(b,F,Q){F.isScene!==!0&&(F=it);const X=qe.get(b),Z=T.state.lights,H=T.state.shadowsArray,J=Z.state.version,ue=ae.getParameters(b,Z.state,H,F,Q,T.state.lightProbeGridArray),fe=ae.getProgramCacheKey(ue);let Ae=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;const He=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=R.get(b.envMap||X.environment,He),X.envMapRotation=X.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",vt),Ae=new Map,X.programs=Ae,X.programVariants=new Map);let Ke=Ae.get(fe);if(Ke!==void 0){if(X.currentProgram===Ke&&X.lightsStateVersion===J)return Ri(b,ue),Ke}else ue.uniforms=ae.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,Q,ue),b.onBeforeCompile(ue,E),Ke=ae.acquireProgram(ue,fe),Ae.set(fe,Ke),X.uniforms=ue.uniforms;const Pe=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),Ri(b,ue),X.needsLights=qi(b),X.lightsStateVersion=J,X.needsLights&&(Pe.ambientLightColor.value=Z.state.ambient,Pe.lightProbe.value=Z.state.probe,Pe.sunLights.value=Z.state.sun,Pe.sunLightShadows.value=Z.state.sunShadow,Pe.directionalLights.value=Z.state.directional,Pe.directionalLightShadows.value=Z.state.directionalShadow,Pe.spotLights.value=Z.state.spot,Pe.spotLightShadows.value=Z.state.spotShadow,Pe.rectAreaLights.value=Z.state.rectArea,Pe.ltc_1.value=Z.state.rectAreaLTC1,Pe.ltc_2.value=Z.state.rectAreaLTC2,Pe.pointLights.value=Z.state.point,Pe.pointLightShadows.value=Z.state.pointShadow,Pe.hemisphereLights.value=Z.state.hemi,Pe.sunShadowMatrix.value=Z.state.sunShadowMatrix,Pe.sunShadowCascade.value=Z.state.sunShadowCascade,Pe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pe.spotLightMatrix.value=Z.state.spotLightMatrix,Pe.spotLightMap.value=Z.state.spotLightMap,Pe.pointShadowMatrix.value=Z.state.pointShadowMatrix),X.numLightProbeGrids=Wi(T.state.lightProbeGridArray),X.currentProgram=Ke,X.uniformsList=null,Ke}function mn(b,F,Q,X,Z){const H=qe.get(b),J=H.currentProgram.id+","+X+","+Z;let ue=H.programVariants.get(J);return ue===void 0?(ue=dn(b,F,Q),H.programVariants.set(J,ue)):(H.currentProgram=ue,H.uniformsList=null,H.outputColorSpace=X,H.toneMapping=Z),ue}function Ai(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=co.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Ri(b,F){const Q=qe.get(b);Q.outputColorSpace=F.outputColorSpace,Q.batching=F.batching,Q.batchingColor=F.batchingColor,Q.instancing=F.instancing,Q.instancingColor=F.instancingColor,Q.instancingMorph=F.instancingMorph,Q.skinning=F.skinning,Q.morphTargets=F.morphTargets,Q.morphNormals=F.morphNormals,Q.morphColors=F.morphColors,Q.morphTargetsCount=F.morphTargetsCount,Q.numClippingPlanes=F.numClippingPlanes,Q.numIntersection=F.numClipIntersection,Q.vertexAlphas=F.vertexAlphas,Q.vertexTangents=F.vertexTangents,Q.toneMapping=F.toneMapping}function Xi(b,F,Q,X,Z){F.isScene!==!0&&(F=it),Ze.resetTextureUnits();const H=F.fog,J=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,ue=ce===null?E.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:yt.workingColorSpace,fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ae=R.get(X.envMap||J,fe),He=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ke=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!Q.morphAttributes.position,et=!!Q.morphAttributes.normal,ht=!!Q.morphAttributes.color;let xt=Kn;X.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(xt=E.toneMapping);const k=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ne=k!==void 0?k.length:0,te=qe.get(X),ze=T.state.lights;if(Me===!0&&(Ne===!0||b!==j)){const St=b===j&&X.id===V;ie.setState(X,b,St)}let De=!1,Rt=!1;X.version===te.__version?te.needsLights&&te.lightsStateVersion!==ze.state.version||Z.isBatchedMesh&&te.batching===!1||!Z.isBatchedMesh&&te.batching===!0||Z.isBatchedMesh&&te.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&te.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&te.instancing===!1||!Z.isInstancedMesh&&te.instancing===!0||Z.isSkinnedMesh&&te.skinning===!1||!Z.isSkinnedMesh&&te.skinning===!0||Z.isInstancedMesh&&te.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&te.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&te.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&te.instancingMorph===!1&&Z.morphTexture!==null||te.envMap!==Ae||X.fog===!0&&te.fog!==H||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==ie.numPlanes||te.numIntersection!==ie.numIntersection)||te.vertexAlphas!==He||te.vertexTangents!==Ke||te.morphTargets!==Pe||te.morphNormals!==et||te.morphColors!==ht||te.morphTargetsCount!==ne||te.numLightProbeGrids!==Wi(T.state.lightProbeGridArray)?De=!0:(te.outputColorSpace!==ue||te.toneMapping!==xt)&&(Rt=!0):(De=!0,te.__version=X.version);let Mt=te.currentProgram;(De===!0||Rt===!0)&&(Mt=Rt===!0?mn(X,F,Z,ue,xt):dn(X,F,Z),I&&X.isNodeMaterial&&I.onUpdateProgram(X,Mt,te));let Zt=!1,Pt=!1,Kt=!1;const ut=Mt.getUniforms(),Nt=te.uniforms;if(Ee.useProgram(Mt.program)&&(Zt=!0,Pt=!0,Kt=!0),X.id!==V&&(V=X.id,Pt=!0),Zt||j!==b){Ee.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(O,"projectionMatrix",b.projectionMatrix),ut.setValue(O,"viewMatrix",b.matrixWorldInverse);const It=ut.map.cameraPosition;It!==void 0&&It.setValue(O,Qe.setFromMatrixPosition(b.matrixWorld)),At.logarithmicDepthBuffer&&ut.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Pt=!0,Kt=!0)}if(te.needsLights&&(ze.state.sunShadowMap.length>0&&ut.setValue(O,"sunShadowMap",ze.state.sunShadowMap,Ze),ze.state.directionalShadowMap.length>0&&ut.setValue(O,"directionalShadowMap",ze.state.directionalShadowMap,Ze),ze.state.spotShadowMap.length>0&&ut.setValue(O,"spotShadowMap",ze.state.spotShadowMap,Ze),ze.state.pointShadowMap.length>0&&ut.setValue(O,"pointShadowMap",ze.state.pointShadowMap,Ze)),Z.isSkinnedMesh){ut.setOptional(O,Z,"bindMatrix"),ut.setOptional(O,Z,"bindMatrixInverse");const St=Z.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),ut.setValue(O,"boneTexture",St.boneTexture,Ze))}Z.isBatchedMesh&&(ut.setOptional(O,Z,"batchingTexture"),ut.setValue(O,"batchingTexture",Z._matricesTexture,Ze),ut.setOptional(O,Z,"batchingIdTexture"),ut.setValue(O,"batchingIdTexture",Z._indirectTexture,Ze),ut.setOptional(O,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ut.setValue(O,"batchingColorTexture",Z._colorsTexture,Ze));const _t=Q.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&re.update(Z,Q,Mt),(Pt||te.receiveShadow!==Z.receiveShadow)&&(te.receiveShadow=Z.receiveShadow,ut.setValue(O,"receiveShadow",Z.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(Nt.envMapIntensity.value=F.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=Ax()),Pt){if(ut.setValue(O,"toneMappingExposure",E.toneMappingExposure),te.needsLights&&Yi(Nt,Kt),H&&X.fog===!0&&Se.refreshFogUniforms(Nt,H),Se.refreshMaterialUniforms(Nt,X,ge,Ue,T.state.transmissionRenderTarget[b.id]),te.needsLights&&te.numLightProbeGrids>0){const St=_;let It=0;for(const on of T.state.lightProbeGridArray)on.texture!==null&&(St.textures[It]=on.texture,St.min[It]=on.boundingBox.min,St.max[It]=on.boundingBox.max,St.resolution[It]=on.resolution,It++);for(const on in St)St[on].length=It;Nt.probesSH.value=St.textures,Nt.probesMin.value=St.min,Nt.probesMax.value=St.max,Nt.probesResolution.value=St.resolution}co.upload(O,Ai(te),Nt,Ze)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(co.upload(O,Ai(te),Nt,Ze),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(O,"center",Z.center),ut.setValue(O,"modelViewMatrix",Z.modelViewMatrix),ut.setValue(O,"normalMatrix",Z.normalMatrix),ut.setValue(O,"modelMatrix",Z.matrixWorld),X.uniformsGroups!==void 0){const St=X.uniformsGroups;for(let It=0,on=St.length;It<on;It++){const zn=St[It];We.update(zn,Mt),We.bind(zn,Mt)}}return Mt}function Yi(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function qi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(b,F,Q){const X=qe.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),qe.get(b.texture).__webglTexture=F,qe.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){const Q=qe.get(b);Q.__webglFramebuffer=F,Q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,Q=0){ce=b,K=F,W=Q;let X=null,Z=!1,H=!1;if(b){const ue=qe.get(b);if(ue.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(O.FRAMEBUFFER,ue.__webglFramebuffer),se.copy(b.viewport),Re.copy(b.scissor),Ce=b.scissorTest,Ee.viewport(se),Ee.scissor(Re),Ee.setScissorTest(Ce),V=-1;return}else if(ue.__webglFramebuffer===void 0)Ze.setupRenderTarget(b);else if(ue.__hasExternalTextures)Ze.rebindTextures(b,qe.get(b.texture).__webglTexture,qe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const He=b.depthTexture;if(ue.__boundDepthTexture!==He){if(He!==null&&qe.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(b)}}const fe=b.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(H=!0);const Ae=qe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[F])?X=Ae[F][Q]:X=Ae[F],Z=!0):b.samples>0&&Ze.useMultisampledRTT(b)===!1?X=qe.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?X=Ae[Q]:X=Ae,se.copy(b.viewport),Re.copy(b.scissor),Ce=b.scissorTest}else se.copy(Ve).multiplyScalar(ge).floor(),Re.copy(nt).multiplyScalar(ge).floor(),Ce=rt;if(Q!==0&&(X=z),Ee.bindFramebuffer(O.FRAMEBUFFER,X)&&Ee.drawBuffers(b,X),Ee.viewport(se),Ee.scissor(Re),Ee.setScissorTest(Ce),Z){const ue=qe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,ue.__webglTexture,Q)}else if(H){const ue=F;for(let fe=0;fe<b.textures.length;fe++){const Ae=qe.get(b.textures[fe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+fe,Ae.__webglTexture,Q,ue)}}else if(b!==null&&Q!==0){const ue=qe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ue.__webglTexture,Q)}V=-1};function Zi(b){const F=qe.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=At.textureFormatReadable(b.format),F.__typeReadable=At.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,Q,X,Z,H,J,ue=0){if(!(b&&b.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&J!==void 0&&(fe=fe[J],Array.isArray(fe)&&(fe=fe[0])),fe){Ee.bindFramebuffer(O.FRAMEBUFFER,fe);try{const Ae=b.textures[ue],He=Ae.format,Ke=Ae.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue);const Pe=Zi(Ae);if(Pe.__formatReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-X&&Q>=0&&Q<=b.height-Z&&O.readPixels(F,Q,X,Z,xe.convert(He),xe.convert(Ke),H)}finally{const Ae=ce!==null?qe.get(ce).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,F,Q,X,Z,H,J,ue=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=qe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&J!==void 0&&(fe=fe[J],Array.isArray(fe)&&(fe=fe[0])),fe)if(F>=0&&F<=b.width-X&&Q>=0&&Q<=b.height-Z){Ee.bindFramebuffer(O.FRAMEBUFFER,fe);const Ae=b.textures[ue],He=Ae.format,Ke=Ae.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ue);const Pe=Zi(Ae);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.bufferData(O.PIXEL_PACK_BUFFER,H.byteLength,O.STREAM_READ),O.readPixels(F,Q,X,Z,xe.convert(He),xe.convert(Ke),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const ht=ce!==null?qe.get(ce).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,ht);const xt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await tf(O,xt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,H),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(et),O.deleteSync(xt),H}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,Q=0){const X=Math.pow(2,-Q),Z=Math.floor(b.image.width*X),H=Math.floor(b.image.height*X),J=F!==null?F.x:0,ue=F!==null?F.y:0;Ze.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,J,ue,Z,H),Ee.unbindTexture()},this.copyTextureToTexture=function(b,F,Q=null,X=null,Z=0,H=0){let J,ue,fe,Ae,He,Ke,Pe,et,ht;const xt=b.isCompressedTexture?b.mipmaps[H]:b.image;if(Q!==null)J=Q.max.x-Q.min.x,ue=Q.max.y-Q.min.y,fe=Q.isBox3?Q.max.z-Q.min.z:1,Ae=Q.min.x,He=Q.min.y,Ke=Q.isBox3?Q.min.z:0;else{const ut=Math.pow(2,-Z);J=Math.floor(xt.width*ut),ue=Math.floor(xt.height*ut),b.isDataArrayTexture?fe=xt.depth:b.isData3DTexture?fe=Math.floor(xt.depth*ut):fe=1,Ae=0,He=0,Ke=0}X!==null?(Pe=X.x,et=X.y,ht=X.z):(Pe=0,et=0,ht=0);const k=xe.convert(F.format),ne=xe.convert(F.type);let te;F.isData3DTexture?(Ze.setTexture3D(F,0),te=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ze.setTexture2DArray(F,0),te=O.TEXTURE_2D_ARRAY):(Ze.setTexture2D(F,0),te=O.TEXTURE_2D),Ee.activeTexture(O.TEXTURE0),Ee.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),Ee.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Ee.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const ze=Ee.getParameter(O.UNPACK_ROW_LENGTH),De=Ee.getParameter(O.UNPACK_IMAGE_HEIGHT),Rt=Ee.getParameter(O.UNPACK_SKIP_PIXELS),Mt=Ee.getParameter(O.UNPACK_SKIP_ROWS),Zt=Ee.getParameter(O.UNPACK_SKIP_IMAGES);Ee.pixelStorei(O.UNPACK_ROW_LENGTH,xt.width),Ee.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt.height),Ee.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),Ee.pixelStorei(O.UNPACK_SKIP_ROWS,He),Ee.pixelStorei(O.UNPACK_SKIP_IMAGES,Ke);const Pt=b.isDataArrayTexture||b.isData3DTexture,Kt=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){const ut=qe.get(b),Nt=qe.get(F),_t=qe.get(ut.__renderTarget),St=qe.get(Nt.__renderTarget);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,_t.__webglFramebuffer),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let It=0;It<fe;It++)Pt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.get(b).__webglTexture,Z,Ke+It),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.get(F).__webglTexture,H,ht+It)),O.blitFramebuffer(Ae,He,Ae+J,He+ue,Pe,et,Pe+J,et+ue,O.DEPTH_BUFFER_BIT,O.NEAREST);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||qe.has(b)){const ut=qe.get(b),Nt=qe.get(F);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,L),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let _t=0;_t<fe;_t++)Pt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ut.__webglTexture,Z,Ke+_t):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,Z),Kt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Nt.__webglTexture,H,ht+_t):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Nt.__webglTexture,H),Z!==0?O.blitFramebuffer(Ae,He,Ae+J,He+ue,Pe,et,Pe+J,et+ue,O.COLOR_BUFFER_BIT,O.NEAREST):Kt?O.copyTexSubImage3D(te,H,Pe,et,ht+_t,Ae,He,J,ue):O.copyTexSubImage2D(te,H,Pe,et,Ae,He,J,ue);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Kt?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(te,H,Pe,et,ht,J,ue,fe,k,ne,xt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(te,H,Pe,et,ht,J,ue,fe,k,xt.data):O.texSubImage3D(te,H,Pe,et,ht,J,ue,fe,k,ne,xt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,Pe,et,J,ue,k,ne,xt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,Pe,et,xt.width,xt.height,k,xt.data):O.texSubImage2D(O.TEXTURE_2D,H,Pe,et,J,ue,k,ne,xt);Ee.pixelStorei(O.UNPACK_ROW_LENGTH,ze),Ee.pixelStorei(O.UNPACK_IMAGE_HEIGHT,De),Ee.pixelStorei(O.UNPACK_SKIP_PIXELS,Rt),Ee.pixelStorei(O.UNPACK_SKIP_ROWS,Mt),Ee.pixelStorei(O.UNPACK_SKIP_IMAGES,Zt),H===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(te),Ee.unbindTexture()},this.initRenderTarget=function(b){qe.get(b).__webglFramebuffer===void 0&&Ze.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ze.setTextureCube(b,0):b.isData3DTexture?Ze.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ze.setTexture2DArray(b,0):Ze.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){K=0,W=0,ce=null,Ee.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const nr=new D;function wn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;nr.copy(e),nr[n]=0,nr.normalize();const c=.5*o/(o+a),h=1-nr.angleTo(i)/l;return Math.sign(nr[t])===1?h*c:a/(o+a)+c+c*(1-h)}class ke extends st{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new D,c=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,v=new D,p=.5/o;for(let m=0,M=0;m<u.length;m+=3,M+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*r,u[m+1]=h.y*Math.sign(l.y)+c.y*r,u[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:v.set(1,0,0),d[M+0]=wn(v,c,"z","y",r,n),d[M+1]=1-wn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),d[M+0]=1-wn(v,c,"z","y",r,n),d[M+1]=1-wn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),d[M+0]=1-wn(v,c,"x","z",r,e),d[M+1]=wn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),d[M+0]=1-wn(v,c,"x","z",r,e),d[M+1]=1-wn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),d[M+0]=1-wn(v,c,"x","y",r,e),d[M+1]=1-wn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),d[M+0]=wn(v,c,"x","y",r,e),d[M+1]=1-wn(v,c,"y","x",r,t);break}}static fromJSON(e){return new ke(e.width,e.height,e.depth,e.segments,e.radius)}}function cn(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function In(i,e,t){let n=Math.imul(i,374761393)+Math.imul(e,668265263)+Math.imul(t,1442695041);return n=n^n>>>13|0,n=Math.imul(n,1274126177),((n^n>>>16)>>>0)/4294967295}function Yc(i){return i*i*(3-2*i)}function Ut(i){return i<0?0:i>1?1:i}function vi(i,e,t){return i+(e-i)*t}function Cx(i,e,t,n){const s=Math.floor(i),r=Math.floor(e),o=Yc(i-s),a=Yc(e-r),l=d=>t>0?(d%t+t)%t:d,c=l(s),h=l(s+1),u=l(r),f=l(r+1);return vi(vi(In(c,u,n),In(h,u,n),o),vi(In(c,f,n),In(h,f,n),o),a)}function Er(i,e,t,n,s){let r=0,o=.5,a=0,l=t;for(let c=0;c<n;c++)r+=o*Cx(i*l,e*l,l,s+c*97),a+=o,o*=.5,l*=2;return r/a}function Rl(i,e,t,n){const s=t*e,r=n*e,o=Math.floor(s)%e,a=Math.floor(r)%e,l=(o+1)%e,c=(a+1)%e,h=s-Math.floor(s),u=r-Math.floor(r);return vi(vi(i[a*e+o],i[a*e+l],h),vi(i[c*e+o],i[c*e+l],h),u)}function Oe(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,{canvas:t,ctx:t.getContext("2d")}}function Be(i,{srgb:e=!1,repeat:t=[1,1],anisotropy:n=8}={}){const s=new Oh(i);return s.colorSpace=e?vn:hi,s.wrapS=is,s.wrapT=is,s.repeat.set(t[0],t[1]),s.generateMipmaps=!0,s.minFilter=Yn,s.magFilter=sn,s.anisotropy=n,s.needsUpdate=!0,s}function wi(i,e=1.4){const t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,{canvas:r,ctx:o}=Oe(t,n),a=o.createImageData(t,n),l=(c,h)=>s[((h%n+n)%n*t+(c%t+t)%t)*4]/255;for(let c=0;c<n;c++)for(let h=0;h<t;h++){const u=l(h-1,c-1),f=l(h,c-1),d=l(h+1,c-1),g=l(h-1,c),v=l(h+1,c),p=l(h-1,c+1),m=l(h,c+1),M=l(h+1,c+1),S=d+2*v+M-(u+2*g+p),_=p+2*m+M-(u+2*f+d);let A=-S*e,T=-_*e,x=1;const w=1/Math.hypot(A,T,x),U=(c*t+h)*4;a.data[U]=Math.round((A*w*.5+.5)*255),a.data[U+1]=Math.round((T*w*.5+.5)*255),a.data[U+2]=Math.round((x*w*.5+.5)*255),a.data[U+3]=255}return o.putImageData(a,0,0),r}function Px(i=8){const n=Oe(1024,1024),s=Oe(1024,1024),r=Oe(1024,1024),o=n.ctx.createImageData(1024,1024),a=s.ctx.createImageData(1024,1024),l=r.ctx.createImageData(1024,1024),c=new Float32Array(256*256);for(let f=0;f<256;f++)for(let d=0;d<256;d++)c[f*256+d]=Er(d/256,f/256,4,4,101);for(let f=0;f<1024;f++){const d=f/1024;for(let g=0;g<1024;g++){const v=g/1024,p=Rl(c,256,v,d),m=In(g,f,313),M=In(g>>1,f>>1,719),S=m*.6+M*.4,_=m>.88?16:m<.08?-10:0,A=24+p*14+(S-.5)*18+_*.5,T=(f*1024+g)*4;o.data[T]=Ut(A/255)*255,o.data[T+1]=Ut((A+1)/255)*255,o.data[T+2]=Ut((A+3)/255)*255,o.data[T+3]=255;const x=Ut(.46+(1-p)*.22+(m>.85?.14:0))*255;a.data[T]=x,a.data[T+1]=x,a.data[T+2]=x,a.data[T+3]=255;const w=Ut((120+(S-.5)*58+_*1.4)/255)*255;l.data[T]=w,l.data[T+1]=w,l.data[T+2]=w,l.data[T+3]=255}}n.ctx.putImageData(o,0,0),s.ctx.putImageData(a,0,0),r.ctx.putImageData(l,0,0);const h=cn(404);n.ctx.strokeStyle="rgba(10, 11, 13, 0.72)",s.ctx.strokeStyle="rgb(45, 45, 45)";for(let f=0;f<6;f++){let d=150+h()*724,g=150+h()*724;n.ctx.lineWidth=3,s.ctx.lineWidth=4,n.ctx.beginPath(),s.ctx.beginPath(),n.ctx.moveTo(d,g),s.ctx.moveTo(d,g);for(let v=0;v<5;v++)d+=(h()-.5)*55,g+=(h()-.5)*55,n.ctx.lineTo(d,g),s.ctx.lineTo(d,g);n.ctx.stroke(),s.ctx.stroke()}const u=wi(r.canvas,1.55);return{map:Be(n.canvas,{srgb:!0,repeat:[2,11],anisotropy:i}),roughnessMap:Be(s.canvas,{srgb:!1,repeat:[2,11],anisotropy:i}),normalMap:Be(u,{srgb:!1,repeat:[2,11],anisotropy:i})}}function Lx(i=8){const n=Oe(512,512),s=Oe(512,512),r=Oe(512,512),o=n.ctx.createImageData(512,512),a=s.ctx.createImageData(512,512),l=r.ctx.createImageData(512,512),c=new Float32Array(16384);for(let h=0;h<128;h++)for(let u=0;u<128;u++)c[h*128+u]=Er(u/128,h/128,4,3,211);for(let h=0;h<512;h++)for(let u=0;u<512;u++){const f=Rl(c,128,u/512,h/512),d=In(u,h,509),g=d<.04?-22:0,v=54+f*24+(d-.5)*16,p=(h*512+u)*4;o.data[p]=Ut((v+2)/255)*255,o.data[p+1]=Ut((v+2)/255)*255,o.data[p+2]=Ut((v+4)/255)*255,o.data[p+3]=255;const m=Ut(.72+(1-f)*.14)*255;a.data[p]=m,a.data[p+1]=m,a.data[p+2]=m,a.data[p+3]=255;const M=Ut((126+(d-.5)*38+g)/255)*255;l.data[p]=M,l.data[p+1]=M,l.data[p+2]=M,l.data[p+3]=255}return n.ctx.putImageData(o,0,0),s.ctx.putImageData(a,0,0),r.ctx.putImageData(l,0,0),{map:Be(n.canvas,{srgb:!0,repeat:[1,1],anisotropy:i}),roughnessMap:Be(s.canvas,{srgb:!1,repeat:[1,1],anisotropy:i}),normalMap:Be(wi(r.canvas,1.3),{srgb:!1,repeat:[1,1],anisotropy:i})}}function Cl(i=8){const t=Oe(512,512),n=Oe(512,512),s=Oe(512,512),r=t.ctx.createImageData(512,512),o=n.ctx.createImageData(512,512),a=s.ctx.createImageData(512,512),c=512/8;for(let h=0;h<512;h++){const u=h/512;for(let f=0;f<512;f++){const d=Math.floor(f/c),v=f%c<3,p=In(d,7,88),m=Er(f/512*8,u*.5,6,3,401+d*13),M=In(f,h,911),S=v?12:26+p*14+m*18+(M-.5)*8,_=(h*512+f)*4;r.data[_]=Ut((S+7)/255)*255,r.data[_+1]=Ut((S+2)/255)*255,r.data[_+2]=Ut((S-3)/255)*255,r.data[_+3]=255;const A=Ut(.76+(1-m)*.16)*255;o.data[_]=A,o.data[_+1]=A,o.data[_+2]=A,o.data[_+3]=255;const T=v?35:Ut((120+m*50+(M-.5)*20)/255)*255;a.data[_]=T,a.data[_+1]=T,a.data[_+2]=T,a.data[_+3]=255}}return t.ctx.putImageData(r,0,0),n.ctx.putImageData(o,0,0),s.ctx.putImageData(a,0,0),{map:Be(t.canvas,{srgb:!0,repeat:[1,1],anisotropy:i}),roughnessMap:Be(n.canvas,{srgb:!1,repeat:[1,1],anisotropy:i}),normalMap:Be(wi(s.canvas,1.5),{srgb:!1,repeat:[1,1],anisotropy:i})}}function qc(i=8,e=[68,70,74]){const{canvas:n,ctx:s}=Oe(512,512),r=Oe(512,512),o=Oe(512,512),a=cn(3030+e[0]);s.fillStyle="#181a1d",s.fillRect(0,0,512,512),r.ctx.fillStyle="#fcfcfc",r.ctx.fillRect(0,0,512,512),o.ctx.fillStyle="#404040",o.ctx.fillRect(0,0,512,512);const l=20,c=10,h=512/l,u=512/c;for(let d=0;d<l;d++){const g=d%2*(u*.5);for(let v=-1;v<=c;v++){const p=v*u+g,m=d*h,M=(a()-.5)*18;s.fillStyle=`rgb(${Math.round(e[0]+M)}, ${Math.round(e[1]+M)}, ${Math.round(e[2]+M)})`,s.fillRect(p+2,m+2,u-4,h-4);const S=224+Math.floor(a()*27);r.ctx.fillStyle=`rgb(${S},${S},${S})`,r.ctx.fillRect(p+2,m+2,u-4,h-4);const _=148+Math.floor(a()*38);o.ctx.fillStyle=`rgb(${_},${_},${_})`,o.ctx.fillRect(p+2,m+2,u-4,h-4)}}for(let d=0;d<2400;d++){const g=a()*512,v=a()*512,p=a()>.45;s.fillStyle=p?"rgba(10, 12, 14, 0.22)":"rgba(205, 200, 192, 0.1)",s.fillRect(g,v,1.5+a()*2,1.5),o.ctx.fillStyle=p?"rgba(65, 65, 65, 0.35)":"rgba(215, 215, 215, 0.25)",o.ctx.fillRect(g,v,1.5,1.5)}for(let d=0;d<45;d++){const g=a()*512,v=a()*512*.5,p=s.createLinearGradient(0,v,0,v+140);p.addColorStop(0,"rgba(12, 13, 15, 0.38)"),p.addColorStop(1,"rgba(12, 13, 15, 0)"),s.fillStyle=p,s.fillRect(g,v,6+a()*18,140)}const f=Oe(512,512);return f.ctx.filter="blur(0.9px)",f.ctx.drawImage(o.canvas,0,0),f.ctx.filter="none",{map:Be(n,{srgb:!0,repeat:[1,1],anisotropy:i}),roughnessMap:Be(r.canvas,{srgb:!1,repeat:[1,1],anisotropy:i}),normalMap:Be(wi(f.canvas,.85),{srgb:!1,repeat:[1,1],anisotropy:i})}}function Dx(i=8){const t=Oe(512,512),n=Oe(512,512),s=Oe(512,512),r=t.ctx.createImageData(512,512),o=n.ctx.createImageData(512,512),a=s.ctx.createImageData(512,512),l=24;for(let c=0;c<512;c++){const h=c/512*l%1,u=Math.sin(h*Math.PI*2);for(let f=0;f<512;f++){const d=Er(f/512,c/512,5,3,555),g=In(f,c,617),v=62+u*14+d*20+(g-.5)*10,p=(c*512+f)*4;r.data[p]=Ut((v+d*8)/255)*255,r.data[p+1]=Ut((v+d*3)/255)*255,r.data[p+2]=Ut((v+2)/255)*255,r.data[p+3]=255;const m=Ut(.48+d*.28)*255;o.data[p]=m,o.data[p+1]=m,o.data[p+2]=m,o.data[p+3]=255;const M=Ut((128+u*78+(g-.5)*16)/255)*255;a.data[p]=M,a.data[p+1]=M,a.data[p+2]=M,a.data[p+3]=255}}return t.ctx.putImageData(r,0,0),n.ctx.putImageData(o,0,0),s.ctx.putImageData(a,0,0),{map:Be(t.canvas,{srgb:!0,repeat:[1,1],anisotropy:i}),roughnessMap:Be(n.canvas,{srgb:!1,repeat:[1,1],anisotropy:i}),normalMap:Be(wi(s.canvas,1.6),{srgb:!1,repeat:[1,1],anisotropy:i})}}function Pl(i=8){const n=Oe(512,512),s=Oe(512,512),r=Oe(512,512),o=n.ctx.createImageData(512,512),a=s.ctx.createImageData(512,512),l=r.ctx.createImageData(512,512),c=new Float32Array(16384);for(let h=0;h<128;h++)for(let u=0;u<128;u++)c[h*128+u]=Er(u/128,h/128,5,3,701);for(let h=0;h<512;h++)for(let u=0;u<512;u++){const f=Rl(c,128,u/512,h/512),d=In(u,h,8111),g=Ut((f-.56)/.18),v=48+f*22+(d-.5)*14,p=(h*512+u)*4;o.data[p]=Ut(vi(v,v+24,g)/255)*255,o.data[p+1]=Ut(vi(v+2,v+8,g)/255)*255,o.data[p+2]=Ut(vi(v+5,v-3,g)/255)*255,o.data[p+3]=255;const m=Ut(.48+f*.22+g*.24)*255;a.data[p]=m,a.data[p+1]=m,a.data[p+2]=m,a.data[p+3]=255;const M=Ut((126+(d-.5)*28-g*18)/255)*255;l.data[p]=M,l.data[p+1]=M,l.data[p+2]=M,l.data[p+3]=255}return n.ctx.putImageData(o,0,0),s.ctx.putImageData(a,0,0),r.ctx.putImageData(l,0,0),{map:Be(n.canvas,{srgb:!0,repeat:[1,1],anisotropy:i}),roughnessMap:Be(s.canvas,{srgb:!1,repeat:[1,1],anisotropy:i}),normalMap:Be(wi(r.canvas,1.2),{srgb:!1,repeat:[1,1],anisotropy:i})}}function Ix(){const{canvas:e,ctx:t}=Oe(512,512),n=Oe(512,512),s=cn(4409),r=t.createLinearGradient(0,0,0,512);r.addColorStop(0,"#8e4b1c"),r.addColorStop(.48,"#c67530"),r.addColorStop(1,"#6f3814"),t.fillStyle=r,t.fillRect(0,0,512,512),n.ctx.fillStyle=r,n.ctx.fillRect(0,0,512,512);for(const l of[t,n.ctx]){const c=l.createRadialGradient(256,174.08,16,256,174.08,266.24);c.addColorStop(0,"rgba(235, 168, 92, 0.24)"),c.addColorStop(.55,"rgba(195, 118, 48, 0.12)"),c.addColorStop(1,"rgba(100, 48, 16, 0.0)"),l.fillStyle=c,l.fillRect(0,0,512,512)}const o=Oe(512,512),a=o.ctx;a.filter="blur(14px)",a.fillStyle="rgba(32, 14, 6, 0.42)",a.fillRect(0,512*.68,512,512*.32),a.fillStyle="rgba(28, 12, 5, 0.32)",a.fillRect(512*.14,512*.2,512*.16,512*.52),a.fillRect(512*.66,512*.42,512*.09,512*.28),a.fillRect(512*.78,512*.48,512*.07,512*.22),a.filter="none",t.drawImage(o.canvas,0,0),n.ctx.drawImage(o.canvas,0,0);for(let l=0;l<650;l++){const c=s()*512,h=s()*512,u=4+s()*18,f=1+s()*2.5,d=.03+s()*.05,g=s()>.5?`rgba(255, 224, 175, ${d})`:`rgba(60, 28, 12, ${d})`;t.fillStyle=g,t.fillRect(c,h,u,f),n.ctx.fillStyle=g,n.ctx.fillRect(c,h,u,f)}return{map:Be(e,{srgb:!0,repeat:[1,1]}),emissiveMap:Be(n.canvas,{srgb:!0,repeat:[1,1]})}}function Nx(i="らーめん"){const{canvas:t,ctx:n}=Oe(512,512),s=cn(1984),r=n.createLinearGradient(0,0,512,0);r.addColorStop(0,"#121b29"),r.addColorStop(.28,"#172336"),r.addColorStop(.55,"#131d2d"),r.addColorStop(.82,"#182438"),r.addColorStop(1,"#111926"),n.fillStyle=r,n.fillRect(0,0,512,512);const o=n.createLinearGradient(0,0,0,512);o.addColorStop(0,"rgba(0,0,0,0.22)"),o.addColorStop(.14,"rgba(0,0,0,0)"),o.addColorStop(.86,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.34)"),n.fillStyle=o,n.fillRect(0,0,512,512);for(let a=0;a<650;a++)n.fillStyle=s()>.5?"rgba(255,255,255,0.025)":"rgba(0,0,0,0.07)",n.fillRect(0,s()*512,512,1.5),n.fillRect(s()*512,0,1.5,512);n.save(),n.shadowColor="rgba(226, 216, 197, 0.25)",n.shadowBlur=3,n.strokeStyle="#dfd5c0",n.lineWidth=7,n.beginPath(),n.arc(512*.5,512*.52,128,0,Math.PI*2),n.stroke(),n.fillStyle="#e2d8c4",n.font='bold 54px "Yu Mincho", "Yu Gothic", serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,512*.5,512*.53),n.restore();for(let a=0;a<320;a++)n.fillStyle="rgba(18, 28, 44, 0.08)",n.fillRect(0,s()*512,512,1.2);return Be(t,{srgb:!0,repeat:[1,1]})}function hu(i="麺",e="#ff9848"){const{canvas:s,ctx:r}=Oe(512,256),o=Oe(512,256),a=cn(773+i.charCodeAt(0));for(const l of[r,o.ctx]){const c=l.createLinearGradient(0,0,0,256);c.addColorStop(0,"#8f2912"),c.addColorStop(.28,"#d96628"),c.addColorStop(.5,e),c.addColorStop(.74,"#d25d22"),c.addColorStop(1,"#7a200e"),l.fillStyle=c,l.fillRect(0,0,512,256);for(const h of[512*.25,512*.75]){const u=l.createRadialGradient(h,128,10,h,128,120);u.addColorStop(0,"rgba(255, 232, 185, 0.45)"),u.addColorStop(1,"rgba(255, 130, 50, 0)"),l.fillStyle=u,l.fillRect(0,0,512,256)}}for(let l=0;l<400;l++){const c=a()*512,h=a()*256,u=a()>.5?"rgba(255,220,170,0.04)":"rgba(65,18,8,0.06)";r.fillStyle=u,r.fillRect(c,h,6+a()*14,1.5),o.ctx.fillStyle=u,o.ctx.fillRect(c,h,6+a()*14,1.5)}for(let l=14;l<256;l+=16)r.strokeStyle="rgba(42, 14, 6, 0.48)",r.lineWidth=2,r.beginPath(),r.moveTo(0,l),r.lineTo(512,l),r.stroke(),o.ctx.strokeStyle="rgba(24, 6, 2, 0.52)",o.ctx.lineWidth=2,o.ctx.beginPath(),o.ctx.moveTo(0,l),o.ctx.lineTo(512,l),o.ctx.stroke();for(const l of[512*.25,512*.75])r.fillStyle="#140c08",r.font='bold 92px "Yu Mincho", "Yu Gothic", serif',r.textAlign="center",r.textBaseline="middle",r.fillText(i,l,256*.51),o.ctx.fillStyle="#040100",o.ctx.font='bold 92px "Yu Mincho", "Yu Gothic", serif',o.ctx.textAlign="center",o.ctx.textBaseline="middle",o.ctx.fillText(i,l,256*.51);return{map:Be(s,{srgb:!0,repeat:[1,1]}),emissiveMap:Be(o.canvas,{srgb:!0,repeat:[1,1]})}}function Ux(i=["居","酒","屋"],e="24H",t="#4df0ff",n="#0c1824"){const{canvas:o,ctx:a}=Oe(256,512),l=Oe(256,512);return a.fillStyle=n,a.fillRect(0,0,256,512),l.ctx.fillStyle=n,l.ctx.fillRect(0,0,256,512),a.strokeStyle=t,a.lineWidth=10,a.strokeRect(12,12,232,488),l.ctx.strokeStyle=t,l.ctx.lineWidth=10,l.ctx.strokeRect(12,12,232,488),a.fillStyle=t,l.ctx.fillStyle=t,a.textAlign="center",a.textBaseline="middle",l.ctx.textAlign="center",l.ctx.textBaseline="middle",a.font='bold 76px "Yu Gothic", "Meiryo", sans-serif',l.ctx.font='bold 76px "Yu Gothic", "Meiryo", sans-serif',i.forEach((c,h)=>{const u=96+h*102;a.fillText(c,256*.5,u),l.ctx.fillText(c,256*.5,u)}),a.font="bold 34px monospace",l.ctx.font="bold 34px monospace",a.fillStyle="#fff3df",l.ctx.fillStyle="#fff3df",a.fillText(e,256*.5,456),l.ctx.fillText(e,256*.5,456),{map:Be(o,{srgb:!0,repeat:[1,1]}),emissiveMap:Be(l.canvas,{srgb:!0,repeat:[1,1]})}}function Fx(){const{canvas:e,ctx:t}=Oe(512,512),n=Oe(512,512),s=512/2,r=512/2;t.fillStyle="#25282c",t.fillRect(0,0,512,512),n.ctx.fillStyle="#707070",n.ctx.fillRect(0,0,512,512);for(const o of[240,212,150,92,42])t.strokeStyle="#3c4147",t.lineWidth=8,t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.stroke(),n.ctx.strokeStyle="#d8d8d8",n.ctx.lineWidth=8,n.ctx.beginPath(),n.ctx.arc(s,r,o,0,Math.PI*2),n.ctx.stroke();for(let o=0;o<16;o++){const a=o*Math.PI/8;t.strokeStyle="#363b41",t.lineWidth=6,t.beginPath(),t.moveTo(s+Math.cos(a)*92,r+Math.sin(a)*92),t.lineTo(s+Math.cos(a)*212,r+Math.sin(a)*212),t.stroke(),n.ctx.strokeStyle="#c8c8c8",n.ctx.lineWidth=6,n.ctx.beginPath(),n.ctx.moveTo(s+Math.cos(a)*92,r+Math.sin(a)*92),n.ctx.lineTo(s+Math.cos(a)*212,r+Math.sin(a)*212),n.ctx.stroke()}return{map:Be(e,{srgb:!0,repeat:[1,1]}),normalMap:Be(wi(n.canvas,1.8),{srgb:!1,repeat:[1,1]})}}function Ox(){const i=Oe(512,128);i.ctx.fillStyle="#182d46",i.ctx.fillRect(0,0,512,128),i.ctx.fillStyle="#e8f4ff",i.ctx.font='bold 46px "Yu Gothic", sans-serif',i.ctx.textAlign="center",i.ctx.fillText("つめたいお飲物 · DRINK",256,78);const e=Oe(256,512),t=Oe(256,512);return e.ctx.fillStyle="#1b2026",e.ctx.fillRect(0,0,256,512),t.ctx.fillStyle="#000000",t.ctx.fillRect(0,0,256,512),e.ctx.fillStyle="#081310",e.ctx.fillRect(36,36,184,58),e.ctx.fillStyle="#7effb2",e.ctx.font="bold 36px monospace",e.ctx.textAlign="center",e.ctx.fillText("¥140",128,76),t.ctx.fillStyle="#68d696",t.ctx.font="bold 36px monospace",t.ctx.textAlign="center",t.ctx.fillText("¥140",128,76),e.ctx.fillStyle="#8cbce0",e.ctx.font="bold 28px sans-serif",e.ctx.fillText("IC",128,148),e.ctx.fillStyle="#7ea3b8",e.ctx.fillRect(58,170,140,102),t.ctx.fillStyle="#48687a",t.ctx.fillRect(62,174,132,94),e.ctx.fillStyle="#0b0c0e",e.ctx.fillRect(92,326,72,14),e.ctx.fillStyle="#8b2424",e.ctx.fillRect(104,396,48,32),{marqueeMap:Be(i.canvas,{srgb:!0}),panelMap:Be(e.canvas,{srgb:!0}),panelEmissive:Be(t.canvas,{srgb:!0})}}function zx(i=0){const{canvas:n,ctx:s}=Oe(256,256),r=[{top:"#cc1d24",mid:"#e2262e",bot:"#98141a",accent:"#ffffff",title:"COLA",jp:"コーラ",vol:"350ml"},{top:"#1872c8",mid:"#268be6",bot:"#eef6ff",accent:"#ffffff",title:"POCARI",jp:"スポーツ",vol:"350ml"},{top:"#2b1c12",mid:"#4b2d18",bot:"#d4a14a",accent:"#f6d178",title:"BOSS",jp:"微糖珈琲",vol:"185g"},{top:"#1c7c40",mid:"#2b9c52",bot:"#12542b",accent:"#e2f7d4",title:"お〜い",jp:"緑茶",vol:"350ml"},{top:"#d89b14",mid:"#f2ba2c",bot:"#c4830c",accent:"#fffbe6",title:"C-LEMON",jp:"レモンC",vol:"350ml"},{top:"#e2d8c8",mid:"#f0e6d6",bot:"#946238",accent:"#5a3214",title:"ROYAL",jp:"ミルク茶",vol:"280g"}],o=r[i%r.length],a=s.createLinearGradient(0,18,0,238);return a.addColorStop(0,o.top),a.addColorStop(.55,o.mid),a.addColorStop(1,o.bot),s.fillStyle=a,s.fillRect(0,0,256,256),s.fillStyle="rgba(255, 255, 255, 0.16)",s.beginPath(),s.moveTo(0,155),s.lineTo(256,95),s.lineTo(256,130),s.lineTo(0,190),s.closePath(),s.fill(),s.fillStyle="#c8d0d8",s.fillRect(0,0,256,18),s.fillRect(0,240,256,16),s.fillStyle="#7e8690",s.fillRect(0,18,256,4),s.fillRect(0,236,256,4),s.fillStyle=o.accent,s.textAlign="center",s.textBaseline="middle",s.font='bold 28px "Arial Black", sans-serif',s.fillText(o.title,256*.5,96),s.font='bold 24px "Yu Gothic", sans-serif',s.fillText(o.jp,256*.5,140),s.fillStyle="rgba(255, 255, 255, 0.88)",s.font="bold 14px monospace",s.fillText(o.vol,256*.5,206),Be(n,{srgb:!0})}function Bx(){const{canvas:e,ctx:t}=Oe(256,256);t.fillStyle="#4c5258",t.fillRect(0,0,256,256),t.fillStyle="#121518",t.beginPath(),t.arc(96,128,78,0,Math.PI*2),t.fill(),t.fillStyle="#202429";for(let n=0;n<3;n++)t.save(),t.translate(96,128),t.rotate(n*Math.PI*2/3),t.beginPath(),t.ellipse(28,0,32,14,.35,0,Math.PI*2),t.fill(),t.restore();t.strokeStyle="#33383e",t.lineWidth=4;for(let n=52;n<=204;n+=16)t.beginPath(),t.moveTo(18,n),t.lineTo(174,n),t.stroke();return t.fillStyle="#2c3136",t.fillRect(190,26,48,204),t.fillStyle="#b45a28",t.fillRect(198,42,32,18),Be(e,{srgb:!0})}function Gx(){const{canvas:e,ctx:t}=Oe(128,128);t.clearRect(0,0,128,128);const n=[[64,64,52,.48],[48,56,36,.34],[82,58,34,.3],[60,80,38,.3],[68,44,30,.26]];for(const[s,r,o,a]of n){const l=t.createRadialGradient(s,r,2,s,r,o);l.addColorStop(0,`rgba(232, 240, 248, ${a})`),l.addColorStop(.55,`rgba(218, 228, 240, ${a*.42})`),l.addColorStop(1,"rgba(210, 222, 236, 0)"),t.fillStyle=l,t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill()}return Be(e,{srgb:!0})}function kx(i="#2a5678"){const{canvas:n,ctx:s}=Oe(256,256),r=Oe(256,256),o=s.createLinearGradient(0,0,0,256);o.addColorStop(0,"#14263a"),o.addColorStop(.45,i),o.addColorStop(1,"#0d1927"),s.fillStyle=o,s.fillRect(0,0,256,256),r.ctx.fillStyle=o,r.ctx.fillRect(0,0,256,256);for(const a of[s,r.ctx]){const l=a.createLinearGradient(12,0,82,0);l.addColorStop(0,"rgba(6, 10, 16, 0.72)"),l.addColorStop(1,"rgba(6, 10, 16, 0)"),a.fillStyle=l,a.fillRect(12,12,74,232);const c=a.createLinearGradient(244,0,174,0);c.addColorStop(0,"rgba(6, 10, 16, 0.68)"),c.addColorStop(1,"rgba(6, 10, 16, 0)"),a.fillStyle=c,a.fillRect(170,12,74,232)}return s.strokeStyle="#11151b",s.lineWidth=18,s.strokeRect(9,9,238,238),s.fillStyle="#12161d",s.fillRect(256*.5-8,8,16,240),s.fillRect(8,256*.62,240,12),r.ctx.strokeStyle="#030406",r.ctx.lineWidth=18,r.ctx.strokeRect(9,9,238,238),r.ctx.fillStyle="#030406",r.ctx.fillRect(256*.5-8,8,16,240),r.ctx.fillRect(8,256*.62,240,12),{map:Be(n,{srgb:!0}),emissiveMap:Be(r.canvas,{srgb:!0})}}function aa(i=8,e=101,t="office"){const{canvas:s,ctx:r}=Oe(1024,1024),o=Oe(1024,1024),a=Oe(1024,1024),l=Oe(1024,1024),c=cn(e),h=t==="brick"?"#1e1b1a":"#181c22";r.fillStyle=h,r.fillRect(0,0,1024,1024),o.ctx.fillStyle="#000000",o.ctx.fillRect(0,0,1024,1024),a.ctx.fillStyle="#e8e8e8",a.ctx.fillRect(0,0,1024,1024),l.ctx.fillStyle="#c8c8c8",l.ctx.fillRect(0,0,1024,1024);for(let v=0;v<120;v++){const p=c()*1024,m=c()*1024,M=60+c()*180,S=r.createLinearGradient(0,m,0,m+M);S.addColorStop(0,"rgba(6, 8, 12, 0.32)"),S.addColorStop(1,"rgba(6, 8, 12, 0)"),r.fillStyle=S,r.fillRect(p,m,8+c()*16,M)}const u=6,f=6,d=1024/f,g=1024/u;for(let v=0;v<u;v++){const p=c();for(let m=0;m<f;m++){const M=p>.5&&m%3!==2?.42:.08,S=c()<M,_=m*d+16,A=v*g+26,T=d-32,x=g-54;r.fillStyle="#0e1116",r.fillRect(_,A,T,x),l.ctx.fillStyle="#606060",l.ctx.fillRect(_,A,T,x),a.ctx.fillStyle="#b4b4b4",a.ctx.fillRect(_,A,T,x);const w=_+8,U=A+8,E=T-16,P=x-16;if(l.ctx.fillStyle="#404040",l.ctx.fillRect(w,U,E,P),a.ctx.fillStyle="#989898",a.ctx.fillRect(w,U,E,P),S){const I=c()<(t==="brick"?.68:.44),z=.55+c()*.38;for(const L of[r,o.ctx]){const G=L.createLinearGradient(0,U,0,U+P);I?(G.addColorStop(0,`rgb(${Math.round(210*z)}, ${Math.round(154*z)}, ${Math.round(92*z)})`),G.addColorStop(.58,`rgb(${Math.round(138*z)}, ${Math.round(98*z)}, ${Math.round(60*z)})`),G.addColorStop(1,`rgb(${Math.round(44*z)}, ${Math.round(32*z)}, ${Math.round(20*z)})`)):(G.addColorStop(0,`rgb(${Math.round(145*z)}, ${Math.round(178*z)}, ${Math.round(208*z)})`),G.addColorStop(.58,`rgb(${Math.round(88*z)}, ${Math.round(116*z)}, ${Math.round(144*z)})`),G.addColorStop(1,`rgb(${Math.round(26*z)}, ${Math.round(36*z)}, ${Math.round(48*z)})`)),L.fillStyle=G,L.fillRect(w,U,E,P);const K=E*(.18+c()*.25),W=L.createLinearGradient(w,0,w+K,0);W.addColorStop(0,"rgba(10, 14, 20, 0.58)"),W.addColorStop(1,"rgba(10, 14, 20, 0)"),L.fillStyle=W,L.fillRect(w,U,K,P),L.fillStyle="rgba(12, 14, 18, 0.44)",L.fillRect(w,U+P*.72,E,P*.28)}}else{const I=r.createLinearGradient(0,U,0,U+P);I.addColorStop(0,"#132030"),I.addColorStop(.5,"#0b121c"),I.addColorStop(1,"#070b11"),r.fillStyle=I,r.fillRect(w,U,E,P)}r.fillStyle="#0d1015",o.ctx.fillStyle="#000000",r.fillRect(w+E*.5-4,U,8,P),o.ctx.fillRect(w+E*.5-4,U,8,P),r.fillRect(w,U+P*.62,E,7),o.ctx.fillRect(w,U+P*.62,E,7)}}return{map:Be(s,{srgb:!0,repeat:[1,1],anisotropy:i}),roughnessMap:Be(a.canvas,{srgb:!1,repeat:[1,1],anisotropy:i}),normalMap:Be(wi(l.canvas,.55),{srgb:!1,repeat:[1,1],anisotropy:i}),emissiveMap:Be(o.canvas,{srgb:!0,repeat:[1,1],anisotropy:i})}}function Hx(){const{canvas:t,ctx:n}=Oe(512,256),s=Oe(512,256);n.fillStyle="#11161c",n.fillRect(0,0,512,256),s.ctx.fillStyle="#030406",s.ctx.fillRect(0,0,512,256),n.fillStyle="#1c3a32",n.fillRect(10,12,492,48),s.ctx.fillStyle="#2d6858",s.ctx.fillRect(10,12,492,48);for(const r of[n,s.ctx])r.fillStyle="#d9692b",r.fillRect(10,12,492,7),r.fillStyle="#2d8c66",r.fillRect(10,52,492,8),r.fillStyle="#edf4f7",r.font='bold 24px "Yu Gothic", sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText("NIGHT MART",512*.26,36),r.fillText("24H · 酒・弁当",512*.74,36);for(const r of[n,s.ctx]){const o=r.createLinearGradient(0,72,0,246);o.addColorStop(0,"#c8d6df"),o.addColorStop(.55,"#899aa6"),o.addColorStop(1,"#39424b"),r.fillStyle=o,r.fillRect(18,72,476,174),r.fillStyle="rgba(18, 22, 28, 0.55)";for(const a of[118,152,186,214])r.fillRect(28,a,260,12);r.fillStyle="#eef6ff",r.fillRect(42,80,120,5),r.fillRect(210,80,120,5)}n.fillStyle="#12161b",s.ctx.fillStyle="#000000";for(const r of[128,256,384])n.fillRect(r-4,72,8,174),s.ctx.fillRect(r-4,72,8,174);return{map:Be(t,{srgb:!0}),emissiveMap:Be(s.canvas,{srgb:!0})}}function Vx(){const{canvas:t,ctx:n}=Oe(512,256),s=cn(8123);n.fillStyle="#9a835a",n.fillRect(0,0,512,256);for(let r=0;r<1200;r++){const o=s()*512,a=s()*256;n.fillStyle=s()>.5?"rgba(62, 46, 24, 0.22)":"rgba(220, 198, 152, 0.18)",n.fillRect(o,a,2,10+s()*14)}for(const r of[24,42,214,232]){n.fillStyle="#6f5938",n.fillRect(0,r,512,10),n.strokeStyle="rgba(35, 24, 12, 0.45)",n.lineWidth=2;for(let o=0;o<512;o+=10)n.beginPath(),n.moveTo(o,r),n.lineTo(o+6,r+10),n.stroke()}for(const r of[512*.25,512*.75])n.fillStyle="#ded4be",n.fillRect(r-72,60,144,136),n.strokeStyle="#9e2622",n.lineWidth=5,n.strokeRect(r-66,66,132,124),n.fillStyle="#9e2622",n.beginPath(),n.arc(r,96,18,0,Math.PI*2),n.fill(),n.fillStyle="#f2e8d4",n.font='bold 18px "Yu Mincho", serif',n.textAlign="center",n.textBaseline="middle",n.fillText("酒",r,97),n.fillStyle="#181412",n.font='bold 34px "Yu Mincho", "Yu Gothic", serif',n.fillText("夜雨",r,148),n.font='bold 16px "Yu Gothic", sans-serif',n.fillText("特撰清酒",r,178);return Be(t,{srgb:!0})}function Wx(){const{canvas:t,ctx:n}=Oe(256,384),s=cn(411);n.fillStyle="#171c1b",n.fillRect(0,0,256,384);for(let o=0;o<240;o++)n.fillStyle="rgba(225, 232, 228, 0.025)",n.fillRect(s()*256,s()*384,12+s()*24,3);n.strokeStyle="rgba(232, 212, 168, 0.65)",n.lineWidth=3,n.strokeRect(12,12,232,360),n.textAlign="center",n.fillStyle="#f2b068",n.font='bold 26px "Yu Gothic", sans-serif',n.fillText("麺屋 夜雨",256*.5,50),n.fillStyle="#8be4b8",n.font="bold 16px monospace",n.fillText("— 営業中 · OPEN —",256*.5,82),n.strokeStyle="#efe5d0",n.lineWidth=2.5,n.beginPath(),n.arc(256*.5,134,28,0,Math.PI,!1),n.closePath(),n.stroke();for(const o of[-12,0,12])n.beginPath(),n.moveTo(256*.5+o,124),n.quadraticCurveTo(256*.5+o+5,110,256*.5+o-2,98),n.stroke();const r=[["醤油ラーメン","¥850"],["特製味噌","¥950"],["焼餃子 5ヶ","¥450"],["生ビール","¥550"]];return n.font='bold 18px "Yu Gothic", sans-serif',r.forEach(([o,a],l)=>{const c=204+l*38;n.textAlign="left",n.fillStyle="#e7dfd0",n.fillText(o,26,c),n.textAlign="right",n.fillStyle="#f5be78",n.fillText(a,230,c)}),Be(t,{srgb:!0})}function Xx(i="醤油麺",e="八五〇円"){const{canvas:s,ctx:r}=Oe(128,384),o=r.createLinearGradient(0,0,128,0);return o.addColorStop(0,"#6e5236"),o.addColorStop(.5,"#8a6845"),o.addColorStop(1,"#5e452d"),r.fillStyle=o,r.fillRect(0,0,128,384),r.strokeStyle="#24180e",r.lineWidth=6,r.strokeRect(5,5,118,374),r.fillStyle="#18110c",r.textAlign="center",r.textBaseline="middle",r.font='bold 42px "Yu Mincho", serif',[...i].forEach((a,l)=>{r.fillText(a,128*.5,62+l*54)}),r.font='bold 20px "Yu Mincho", serif',r.fillStyle="#3b2414",r.fillText(e,128*.5,346),Be(s,{srgb:!0})}function Yx(){const{canvas:e,ctx:t}=Oe(256,256),n=cn(552);for(let r=0;r<8;r++)t.fillStyle=r%2===0?"#4e1a1c":"#9c8f78",t.fillRect(r*(256/8),0,256/8,256);const s=t.createLinearGradient(0,0,0,256);s.addColorStop(0,"rgba(10, 8, 8, 0.25)"),s.addColorStop(.75,"rgba(10, 8, 8, 0.08)"),s.addColorStop(1,"rgba(8, 6, 6, 0.52)"),t.fillStyle=s,t.fillRect(0,0,256,256);for(let r=0;r<400;r++)t.fillStyle=n()>.5?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.03)",t.fillRect(0,n()*256,256,1.5);return Be(e,{srgb:!0,repeat:[2,1]})}function qx(){const{canvas:t,ctx:n}=Oe(512,384);n.fillStyle="#2d241c",n.fillRect(0,0,512,384),n.fillStyle="#1d3228",n.fillRect(14,14,484,42),n.fillStyle="#dfe6dc",n.font='bold 22px "Yu Gothic", sans-serif',n.textAlign="center",n.fillText("新宿町内会 · 掲示板",512*.5,43);const s=[{x:30,y:74,fw:120,fh:146,bg:"#d6ccb4",accent:"#9e2b25",text:"秋祭り"},{x:175,y:82,fw:138,fh:132,bg:"#c8d2d8",accent:"#1e4a72",text:"防犯"},{x:338,y:72,fw:140,fh:162,bg:"#dec8a4",accent:"#b8561e",text:"深夜営業"},{x:48,y:238,fw:150,fh:112,bg:"#d8d4ca",accent:"#285e42",text:"ゴミ収集"},{x:226,y:234,fw:235,fh:120,bg:"#c9c2b2",accent:"#7c2432",text:"生ビール半額"}];for(const r of s){n.save(),n.translate(r.x+r.fw*.5,r.y+r.fh*.5),n.rotate((r.x%7-3)*.014),n.fillStyle=r.bg,n.fillRect(-r.fw*.5,-r.fh*.5,r.fw,r.fh),n.fillStyle=r.accent,n.fillRect(-r.fw*.5+8,-r.fh*.5+10,r.fw-16,26),n.fillStyle="#f2f0ea",n.font='bold 17px "Yu Gothic", sans-serif',n.textAlign="center",n.fillText(r.text,0,-r.fh*.5+29),n.fillStyle="rgba(20, 22, 26, 0.55)";for(let o=-r.fh*.5+48;o<r.fh*.5-12;o+=14)n.fillRect(-r.fw*.5+12,o,r.fw-28,4);n.restore()}return Be(t,{srgb:!0})}function Zx(){const{canvas:e,ctx:t}=Oe(128,128);t.clearRect(0,0,128,128),t.save(),t.translate(128*.5,128*.52);const n=t.createLinearGradient(0,-45,0,45);return n.addColorStop(0,"#9e5420"),n.addColorStop(.55,"#7a3e18"),n.addColorStop(1,"#4a2610"),t.fillStyle=n,t.beginPath(),t.moveTo(0,44),t.bezierCurveTo(-42,20,-44,-22,0,-48),t.bezierCurveTo(44,-22,42,20,0,44),t.closePath(),t.fill(),t.strokeStyle="rgba(34, 16, 6, 0.55)",t.lineWidth=2.5,t.beginPath(),t.moveTo(0,50),t.lineTo(0,-40),t.stroke(),t.restore(),Be(e,{srgb:!0})}function Kx(){const{canvas:t,ctx:n}=Oe(128,256);n.clearRect(0,0,128,256),n.strokeStyle="#223820",n.lineWidth=4,n.beginPath(),n.moveTo(128*.5,256),n.quadraticCurveTo(128*.48,256*.5,128*.52,16),n.stroke();for(let s=0;s<9;s++){const r=228-s*24,o=1-Math.abs(s-3.5)*.1;for(const a of[-1,1]){n.save(),n.translate(128*.5,r),n.rotate(a*(.58+s*.03));const l=n.createLinearGradient(0,0,a*46*o,0);l.addColorStop(0,"#1c331c"),l.addColorStop(.6,"#2d522a"),l.addColorStop(1,"#3c6832"),n.fillStyle=l,n.beginPath(),n.moveTo(0,0),n.quadraticCurveTo(a*24*o,-10*o,a*52*o,-4*o),n.quadraticCurveTo(a*24*o,8*o,0,0),n.fill(),n.restore()}}return Be(t,{srgb:!0})}function Jx(){const{canvas:e,ctx:t}=Oe(256,256);t.clearRect(0,0,256,256);const n=t.createRadialGradient(128,128,8,128,128,110);return n.addColorStop(0,"rgba(6, 8, 12, 0.52)"),n.addColorStop(.6,"rgba(10, 14, 20, 0.22)"),n.addColorStop(1,"rgba(10, 14, 20, 0)"),t.fillStyle=n,t.fillRect(0,0,256,256),t.strokeStyle="rgba(4, 5, 7, 0.85)",t.lineWidth=2.5,t.beginPath(),t.moveTo(28,62),t.lineTo(74,88),t.lineTo(118,124),t.lineTo(162,146),t.lineTo(222,198),t.moveTo(118,124),t.lineTo(148,92),t.lineTo(186,76),t.moveTo(162,146),t.lineTo(132,194),t.stroke(),Be(e,{srgb:!0})}function Qx(){const{canvas:t,ctx:n}=Oe(1024,512),s=cn(9912),r=n.createLinearGradient(0,0,0,512);r.addColorStop(0,"#5a4d3c"),r.addColorStop(.25,"#8c7a60"),r.addColorStop(.58,"#9b896d"),r.addColorStop(1,"#584c3c"),n.fillStyle=r,n.fillRect(0,0,1024,512);for(let u=0;u<1200;u++)n.fillStyle=s()>.48?"rgba(34, 22, 12, 0.055)":"rgba(240, 224, 196, 0.035)",n.fillRect(s()*1024,s()*512,14+s()*44,4+s()*14);n.fillStyle="#2d1e14",n.fillRect(0,14,1024,26),n.fillStyle="rgba(0,0,0,0.4)",n.fillRect(0,40,1024,7);const o=Math.floor(512*.56);n.fillStyle="#2d2620",n.fillRect(0,o,1024,512-o),n.fillStyle="#3a2718",n.fillRect(0,o-10,1024,12);for(let u=o+4;u<512;u+=34){const f=(u-o)/34%2===0?0:28;for(let d=-28+f;d<1024;d+=58){const g=148+Math.floor(s()*22)-Math.floor((u-o)*.14);n.fillStyle=`rgb(${g}, ${g-9}, ${g-22})`,n.fillRect(d+2,u,54,30),n.fillStyle="rgba(255, 245, 225, 0.08)",n.fillRect(d+3,u+1,52,4)}}[{t:"醤油拉麺",p:"850",col:"#e3d3a9"},{t:"味噌拉麺",p:"950",col:"#d9c493"},{t:"叉焼麺",p:"1150",col:"#e6d6af"},{t:"味玉子",p:"150",col:"#dec99b"},{t:"焼餃子",p:"450",col:"#d4be8e"},{t:"生ビール",p:"550",col:"#e4d3a5"}].forEach((u,f)=>{const d=66+f*108,g=48+f%3*4;n.save(),n.translate(d,g),n.rotate((f%3-1)*.018),n.fillStyle="rgba(18, 10, 5, 0.34)",n.fillRect(4,5,68,162),n.fillStyle=u.col,n.fillRect(0,0,68,162),n.strokeStyle="rgba(128, 78, 38, 0.38)",n.lineWidth=2,n.strokeRect(4,4,60,154),n.fillStyle="rgba(210, 198, 168, 0.55)",n.fillRect(21,-4,26,10),n.fillStyle="#1b120c",n.font='bold 26px "Yu Mincho", serif',n.textAlign="center",n.textBaseline="middle";const v=[...u.t],p=v.length>3?27:34;v.forEach((m,M)=>{n.fillText(m,34,28+M*p)}),n.fillStyle="#a42820",n.fillRect(48,120,10,10),n.fillStyle="#7c2118",n.font="bold 16px monospace",n.fillText(`¥${u.p}`,34,146),n.restore()});const l=762,c=114;n.fillStyle="rgba(0,0,0,0.38)",n.beginPath(),n.arc(l+4,c+5,42,0,Math.PI*2),n.fill(),n.fillStyle="#312015",n.beginPath(),n.arc(l,c,42,0,Math.PI*2),n.fill(),n.fillStyle="#e7ddc4",n.beginPath(),n.arc(l,c,35,0,Math.PI*2),n.fill(),n.strokeStyle="#1e1915",n.lineWidth=2;for(let u=0;u<12;u++){const f=u/12*Math.PI*2;n.beginPath(),n.moveTo(l+Math.cos(f)*26,c+Math.sin(f)*26),n.lineTo(l+Math.cos(f)*32,c+Math.sin(f)*32),n.stroke()}n.lineWidth=3.5,n.beginPath(),n.moveTo(l,c),n.lineTo(l+Math.cos(-.42)*19,c+Math.sin(-.42)*19),n.stroke(),n.lineWidth=2.2,n.beginPath(),n.moveTo(l,c),n.lineTo(l+Math.cos(-.08)*28,c+Math.sin(-.08)*28),n.stroke(),n.fillStyle="#24170f",n.fillRect(712,168,102,52),n.fillStyle="#ded2b4",n.fillRect(718,174,90,40),n.fillStyle="#1c140e",n.font='bold 26px "Yu Mincho", serif',n.textAlign="center",n.textBaseline="middle",n.fillText("麺 道",763,195);const h=n.createLinearGradient(0,0,1024,0);return h.addColorStop(0,"rgba(10, 6, 3, 0.35)"),h.addColorStop(.12,"rgba(10, 6, 3, 0)"),h.addColorStop(.88,"rgba(10, 6, 3, 0)"),h.addColorStop(1,"rgba(10, 6, 3, 0.35)"),n.fillStyle=h,n.fillRect(0,0,1024,512),Be(t,{srgb:!0})}function jx(){const{canvas:e,ctx:t}=Oe(256,256),n=256/2,s=256/2,r=t.createRadialGradient(n,s,12,n,s,124);r.addColorStop(0,"#c97e32"),r.addColorStop(.75,"#8f4d18"),r.addColorStop(1,"#542a0c"),t.fillStyle=r,t.fillRect(0,0,256,256),t.strokeStyle="#e5be76",t.lineWidth=5;for(let a=0;a<16;a++)t.beginPath(),t.arc(n+(a%3-1)*14,s+(a*7%3-1)*12,36+a*4,a*.4,a*.4+2.1),t.stroke();t.fillStyle="#7c4b32",t.beginPath(),t.ellipse(n-42,s-18,40,30,-.3,0,Math.PI*2),t.fill(),t.fillStyle="#b48866",t.beginPath(),t.ellipse(n-42,s-18,30,20,-.3,0,Math.PI*2),t.fill(),t.fillStyle="#f2ead8",t.beginPath(),t.ellipse(n+42,s-28,28,22,.35,0,Math.PI*2),t.fill(),t.fillStyle="#d96e18",t.beginPath(),t.arc(n+42,s-28,14,0,Math.PI*2),t.fill(),t.fillStyle="#f5f2eb",t.beginPath(),t.arc(n+38,s+36,20,0,Math.PI*2),t.fill(),t.strokeStyle="#e06c84",t.lineWidth=3,t.beginPath(),t.arc(n+38,s+36,10,0,Math.PI*1.7),t.stroke();const o=cn(412);for(let a=0;a<24;a++){const l=o()*Math.PI*2,c=o()*68;t.strokeStyle=o()>.4?"#4d8a38":"#76b354",t.lineWidth=3,t.beginPath(),t.arc(n+Math.cos(l)*c,s+Math.sin(l)*c,5,0,Math.PI*2),t.stroke()}return Be(e,{srgb:!0})}function $x(){const e=Oe(256,256),t=e.ctx,n=cn(607);t.fillStyle="#808080",t.fillRect(0,0,256,256);for(let s=0;s<45;s++){const r=n()*256,o=n()*256,a=n()*Math.PI*2,l=35+n()*90,c=t.createLinearGradient(r,o,r+Math.cos(a)*20,o+Math.sin(a)*20);c.addColorStop(0,"rgba(215, 215, 215, 0.25)"),c.addColorStop(.5,"rgba(65, 65, 65, 0.25)"),c.addColorStop(1,"rgba(128, 128, 128, 0)"),t.strokeStyle=c,t.lineWidth=8+n()*14,t.beginPath(),t.moveTo(r,o),t.quadraticCurveTo(r+Math.cos(a+.4)*l*.5,o+Math.sin(a+.4)*l*.5,r+Math.cos(a)*l,o+Math.sin(a)*l),t.stroke()}return Be(wi(e.canvas,.9),{srgb:!1,repeat:[2,2]})}function uu(){const{canvas:e,ctx:t}=Oe(256,256),n=t.createImageData(256,256),s=256*.5;for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=(o-s)/s,l=(r-s)/s,c=Math.sqrt(a*a+l*l),h=Math.max(0,1-c),u=h*h*(3-2*h),f=Math.exp(-c*c*36)*.9,d=Math.exp(-c*5.2)*.34*u,g=Math.min(1,f+d),v=(r*256+o)*4;n.data[v]=255,n.data[v+1]=250,n.data[v+2]=240,n.data[v+3]=Math.round(g*255)}return t.putImageData(n,0,0),Be(e,{srgb:!0})}function ev(){const{canvas:e,ctx:t}=Oe(256,256),n=t.createImageData(256,256);for(let s=0;s<256;s++){const r=s/255,o=Math.min(1,Math.max(0,(r-.05)/.14)),a=Math.pow(Math.max(0,1-r),1.95)*o,l=.18+r*.44;for(let c=0;c<256;c++){const h=c/255*2-1,u=Math.abs(h)/l,f=u>=1?0:Math.pow(1-u*u,2.2),d=Math.min(1,a*f),g=(s*256+c)*4;n.data[g]=255,n.data[g+1]=252,n.data[g+2]=246,n.data[g+3]=Math.round(d*255)}}return t.putImageData(n,0,0),Be(e,{srgb:!0})}function tv(){const{canvas:t,ctx:n}=Oe(512,512),s=cn(3104),r=n.createLinearGradient(0,0,0,512);r.addColorStop(0,"#594b3b"),r.addColorStop(.55,"#8c7a60"),r.addColorStop(1,"#4c3e30"),n.fillStyle=r,n.fillRect(0,0,512,512);for(let a=0;a<650;a++)n.fillStyle=s()>.5?"rgba(30, 18, 10, 0.05)":"rgba(240, 224, 198, 0.035)",n.fillRect(s()*512,s()*512,14+s()*36,4+s()*12);const o=Math.floor(512*.58);n.fillStyle="#2d1e14",n.fillRect(0,o,512,512-o);for(let a=0;a<512;a+=28)n.fillStyle=s()>.5?"rgba(68, 45, 28, 0.45)":"rgba(20, 12, 7, 0.45)",n.fillRect(a,o+8,25,512-o-8);n.fillStyle="#3e2a1b",n.fillRect(0,o-6,512,10),n.save(),n.translate(64,96),n.rotate(-.012),n.fillStyle="rgba(10, 6, 3, 0.32)",n.fillRect(4,5,110,152),n.fillStyle="#8b241b",n.fillRect(0,0,110,152),n.fillStyle="#e5cfa0",n.fillRect(7,7,96,138),n.fillStyle="#b42b20",n.beginPath(),n.arc(55,62,30,0,Math.PI*2),n.fill(),n.fillStyle="#e9b23a",n.beginPath(),n.arc(55,62,18,0,Math.PI*2),n.fill(),n.fillStyle="#241812",n.font='bold 21px "Yu Mincho", serif',n.textAlign="center",n.fillText("生ビール",55,118),n.fillStyle="#7e2219",n.font="bold 12px monospace",n.fillText("COLD DRAFT",55,136),n.restore(),n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(236,114,92,124),n.fillStyle="#e5dcc6",n.fillRect(232,110,92,124),n.fillStyle="#8b241c",n.fillRect(232,110,92,34),n.fillStyle="#f2e8d4",n.font="bold 20px sans-serif",n.textAlign="center",n.fillText("11月",278,134),n.fillStyle="#26201a",n.font="bold 11px monospace";for(let a=0;a<5;a++)n.fillText("1  2  3  4  5  6",278,162+a*14);return Be(t,{srgb:!0})}function fu(){const{canvas:t,ctx:n}=Oe(256,256);n.fillStyle="#c89b22",n.fillRect(0,0,256,256),n.fillStyle="#181a1c";for(let r=-256;r<512;r+=48)n.beginPath(),n.moveTo(r,0),n.lineTo(r+24,0),n.lineTo(r+24-256*.55,256),n.lineTo(r-256*.55,256),n.closePath(),n.fill();const s=n.createLinearGradient(0,0,0,256);return s.addColorStop(0,"rgba(15, 18, 22, 0.35)"),s.addColorStop(.5,"rgba(15, 18, 22, 0.14)"),s.addColorStop(1,"rgba(10, 12, 16, 0.45)"),n.fillStyle=s,n.fillRect(0,0,256,256),Be(t,{srgb:!0})}function nv(){const{canvas:t,ctx:n}=Oe(128,256);return n.fillStyle="#1d446c",n.fillRect(0,0,128,256),n.strokeStyle="#d4dce4",n.lineWidth=6,n.strokeRect(7,7,114,242),n.fillStyle="#dfe6ee",n.font='bold 26px "Yu Mincho", sans-serif',n.textAlign="center",n.textBaseline="middle",["歌","舞","伎","町"].forEach((s,r)=>{n.fillText(s,128/2,44+r*34)}),n.font="bold 22px monospace",n.fillText("1-14",128/2,206),n.fillStyle="rgba(20, 16, 12, 0.25)",n.fillRect(0,0,128,256),Be(t,{srgb:!0})}function iv(i=0){const{canvas:n,ctx:s}=Oe(256,340),r=cn(7200+i*91),o=[{bg:"#201815",accent:"#b83226",head:"深夜営業",sub:"焼鳥・地酒 26時迄",price:"¥380〜"},{bg:"#16202a",accent:"#d29b2e",head:"新宿横丁",sub:"名代 もつ煮込み",price:"生中 ¥450"},{bg:"#dfd3bc",accent:"#98261e",head:"LIVE",sub:"SHINJUKU LOFT · 02:00",price:"DOOR ¥1500"}],a=o[i%o.length];s.fillStyle=a.bg,s.fillRect(0,0,256,340),s.fillStyle=a.accent,s.fillRect(14,16,228,76),s.fillStyle="#f2e8d4",s.font='bold 38px "Yu Mincho", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText(a.head,256/2,56),s.fillStyle=i===2?"#1f1916":"#e6dac2",s.font="bold 20px sans-serif",s.fillText(a.sub,256/2,164),s.strokeStyle=a.accent,s.lineWidth=4,s.strokeRect(24,212,208,74),s.fillStyle=i===2?"#98261e":"#f0c264",s.font="bold 30px monospace",s.fillText(a.price,256/2,250);for(let l=0;l<90;l++)s.fillStyle="rgba(12, 10, 8, 0.08)",s.fillRect(r()*256,r()*340,4+r()*14,18+r()*65);return Be(n,{srgb:!0})}function sv(){const{canvas:t,ctx:n}=Oe(128,256);return n.fillStyle="#8b1f1b",n.fillRect(0,0,128,256),n.strokeStyle="#5c1210",n.lineWidth=6,n.strokeRect(3,3,122,250),n.fillStyle="#dfd8ca",n.fillRect(20,24,88,126),n.fillStyle="#9a1e18",n.font='bold 34px "Yu Mincho", sans-serif',n.textAlign="center",n.textBaseline="middle",["消","火","器"].forEach((s,r)=>{n.fillText(s,128/2,48+r*38)}),n.fillStyle="#181414",n.fillRect(36,174,56,36),n.fillStyle="#7c8288",n.fillRect(94,182,10,26),Be(t,{srgb:!0})}function rv(){const{canvas:t,ctx:n}=Oe(256,512),s=n.createLinearGradient(0,0,0,512);return s.addColorStop(0,"#f4d39c"),s.addColorStop(.5,"#e8be7d"),s.addColorStop(1,"#c89756"),n.fillStyle=s,n.fillRect(0,0,256,512),n.strokeStyle="#24150c",n.lineWidth=8,n.strokeRect(10,10,236,492),n.fillStyle="#8f2218",n.fillRect(22,24,212,62),n.fillStyle="#f7e9cc",n.font='bold 34px "Yu Mincho", serif',n.textAlign="center",n.textBaseline="middle",n.fillText("お品書き",256/2,56),n.fillStyle="#1e120a",n.font='bold 24px "Yu Mincho", serif',n.textAlign="left",[["炭火焼鳥","¥180"],["牛すじ煮込","¥520"],["刺身盛合せ","¥980"],["特製餃子","¥450"],["地酒一合","¥650"],["ハイボール","¥420"]].forEach(([o,a],l)=>{const c=134+l*54;n.fillText(o,26,c),n.textAlign="right",n.fillStyle="#7e2017",n.fillText(a,230,c),n.textAlign="left",n.fillStyle="#1e120a"}),n.fillStyle="#261810",n.font="bold 18px sans-serif",n.textAlign="center",n.fillText("深夜 04:00 迄営業",256/2,468),Be(t,{srgb:!0})}function ov(){const{canvas:t,ctx:n}=Oe(256,512);n.clearRect(0,0,256,512),n.fillStyle="rgba(210, 216, 224, 0.52)",n.fillRect(16,18,224,34),n.font='bold 112px "Yu Gothic", sans-serif',n.textAlign="center",n.textBaseline="middle",["止","ま","れ"].forEach((r,o)=>{n.fillText(r,256/2,134+o*136)});const s=cn(4821);n.globalCompositeOperation="destination-out";for(let r=0;r<420;r++)n.fillStyle=`rgba(0,0,0,${.12+s()*.35})`,n.fillRect(s()*256,s()*512,4+s()*24,3+s()*14);return n.globalCompositeOperation="source-over",Be(t,{srgb:!0})}function av(){const{canvas:t,ctx:n}=Oe(256,256),s=cn(8342);n.fillStyle="#735a3d",n.fillRect(0,0,256,256);const r=n.createLinearGradient(0,0,0,256);r.addColorStop(0,"rgba(30, 20, 12, 0.08)"),r.addColorStop(.65,"rgba(20, 14, 8, 0.16)"),r.addColorStop(1,"rgba(12, 9, 6, 0.55)"),n.fillStyle=r,n.fillRect(0,0,256,256);for(let o=0;o<256;o+=3)n.fillStyle=s()>.5?"rgba(0,0,0,0.06)":"rgba(255,235,205,0.03)",n.fillRect(0,o,256,1);return n.fillStyle="rgba(138, 108, 68, 0.85)",n.fillRect(0,114,256,26),n.strokeStyle="rgba(26, 20, 16, 0.72)",n.lineWidth=3,n.strokeRect(24,34,118,56),n.fillStyle="rgba(26, 20, 16, 0.78)",n.font="bold 26px sans-serif",n.fillText("生ビール",34,72),n.font="bold 16px monospace",n.fillText("350ml x 24",32,184),Be(t,{srgb:!0})}function lv(){const{canvas:t,ctx:n}=Oe(256,256),s=n.createImageData(256,256);for(let r=0;r<256;r++){const o=r/255*2-1;for(let a=0;a<256;a++){const l=a/255,c=Math.min(1,l/.08),h=Math.pow(Math.max(0,1-l),2.15),u=.14+l*.42,f=Math.abs(o+.32)/u,d=Math.abs(o-.32)/u,g=f>=1?0:Math.pow(1-f*f,2.2),v=d>=1?0:Math.pow(1-d*d,2.2),p=Math.max(0,1-Math.pow(Math.abs(o),4)),m=Math.min(1,(g+v)*c*h*p),M=(r*256+a)*4;s.data[M]=255,s.data[M+1]=242,s.data[M+2]=205,s.data[M+3]=Math.round(m*255)}}return n.putImageData(s,0,0),Be(t,{srgb:!0})}function cv(){const{canvas:t,ctx:n}=Oe(256,384);n.fillStyle="#c4c9ce",n.fillRect(0,0,256,384);const s=n.createLinearGradient(0,0,0,384);return s.addColorStop(0,"rgba(30, 38, 46, 0.06)"),s.addColorStop(.7,"rgba(20, 26, 34, 0.16)"),s.addColorStop(1,"rgba(10, 14, 18, 0.48)"),n.fillStyle=s,n.fillRect(0,0,256,384),n.fillStyle="#1b5d9a",n.fillRect(14,24,228,72),n.fillStyle="#f2f6fa",n.textAlign="center",n.textBaseline="middle",n.font='bold 26px "Yu Gothic", sans-serif',n.fillText("あきかん・びん",256/2,48),n.font='bold 20px "Yu Gothic", sans-serif',n.fillText("ペットボトル専用",256/2,78),n.fillStyle="#ffffff",n.fillRect(24,114,208,152),n.strokeStyle="#1b5d9a",n.lineWidth=4,n.strokeRect(24,114,208,152),n.fillStyle="#246638",n.fillRect(58,152,42,72),n.fillStyle="#1b5d9a",n.fillRect(156,162,38,62),n.fillRect(166,138,18,26),n.fillStyle="#222830",n.font="bold 17px sans-serif",n.fillText("RECYCLE BOX",256/2,246),n.strokeStyle="rgba(25, 30, 36, 0.55)",n.lineWidth=3,n.strokeRect(10,10,236,364),n.fillStyle="#363c44",n.fillRect(222,296,14,28),Be(t,{srgb:!0})}function Zc(i=!1){const{canvas:n,ctx:s}=Oe(256,320);s.fillStyle="#22262b",s.fillRect(0,0,256,320);for(const r of[12,132]){const o=s.createLinearGradient(r,14,r,306);i?(o.addColorStop(0,"#3a2a1e"),o.addColorStop(.5,"#68472a"),o.addColorStop(1,"#261c14")):(o.addColorStop(0,"#141e2b"),o.addColorStop(.55,"#253952"),o.addColorStop(1,"#101822")),s.fillStyle=o,s.fillRect(r,14,112,292);for(let a=r+8;a<r+112;a+=18)s.fillStyle="rgba(0, 0, 0, 0.14)",s.fillRect(a,14,7,292);s.fillStyle="rgba(200, 214, 228, 0.08)",s.fillRect(r,320*.55,112,320*.45-14),s.fillStyle="#262b31",s.fillRect(r,320*.54,112,8)}return s.fillStyle="#1b1f24",s.fillRect(122,10,12,300),s.fillStyle="#7e8690",s.fillRect(125,320*.5-16,5,32),Be(n,{srgb:!0})}function Qt(i,e,t,n=0){i.position.set(e,0,t),i.updateMatrixWorld(!0);const s=new yi().setFromObject(i);return Number.isFinite(s.min.y)&&(i.position.y+=n-s.min.y,i.updateMatrixWorld(!0)),i}function hv(i,e,t,n,s=2){const r=i.attributes.uv,o=i.attributes.normal;for(let a=0;a<r.count;a++){const l=Math.abs(o.getX(a)),c=Math.abs(o.getY(a)),h=Math.abs(o.getZ(a));let u=r.getX(a),f=r.getY(a);l>.5?(u*=n/s,f*=t/s):c>.5?(u*=e/s,f*=n/s):h>.5&&(u*=e/s,f*=t/s),r.setXY(a,u,f)}return r.needsUpdate=!0,i}function Vn(i,{gritStrength:e=.11,grimeBottom:t=.45,grimeHeight:n=.48,roughJitter:s=.14,minRoughness:r=.24}={}){const o=`alley2_${e}_${t}_${n}_${s}_${r}`;return i.customProgramCacheKey=()=>o,i.onBeforeCompile=a=>{a.uniforms.uGritStrength={value:e},a.uniforms.uGrimeBottom={value:t},a.uniforms.uGrimeHeight={value:n},a.uniforms.uRoughJitter={value:s},a.uniforms.uMinRoughness={value:r},a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAlleyPos;`).replace("#include <project_vertex>",`#include <project_vertex>
vAlleyPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAlleyPos;
uniform float uGritStrength;
uniform float uGrimeBottom;
uniform float uGrimeHeight;
uniform float uRoughJitter;
uniform float uMinRoughness;

float alleyHash2(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float alleyNoise2(vec2 x) {
  vec2 i = floor(x);
  vec2 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(alleyHash2(i), alleyHash2(i + vec2(1.0, 0.0)), f.x),
    mix(alleyHash2(i + vec2(0.0, 1.0)), alleyHash2(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}`).replace("#include <map_fragment>",`#include <map_fragment>
vec2 aUv = vec2(vAlleyPos.x + vAlleyPos.z, vAlleyPos.y);
float wMed = alleyNoise2(aUv * 8.0);
diffuseColor.rgb *= (1.0 + (wMed - 0.5) * 2.0 * uGritStrength);

if (uGrimeBottom > 0.01) {
  float splashMask = smoothstep(0.0, uGrimeHeight, vAlleyPos.y + (wMed - 0.5) * 0.12);
  diffuseColor.rgb *= mix(1.0 - uGrimeBottom, 1.0, splashMask);
}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
float rNoise = alleyNoise2(vec2(vAlleyPos.x + vAlleyPos.z, vAlleyPos.y) * 14.0 + vec2(3.1, 7.2)) - 0.5;
roughnessFactor = clamp(roughnessFactor + rNoise * uRoughJitter, uMinRoughness, 0.99);`)},i.needsUpdate=!0,i}class Ro extends C{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,s=t.color!==void 0?new je(t.color):new je(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Ro.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new ci,u=new D,f=new D,d=new D,g=new Et,v=new D(0,0,-1),p=new Ft,m=new D,M=new D,S=new Ft,_=new Et,A=new en(r,o,{samples:c,type:jt}),T=new Xt({name:l.name!==void 0?l.name:"unspecified",uniforms:Bi.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=A.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=_,this.material=T,this.onBeforeRender=function(x,w,U){const E=this.getReflectionCamera(U);if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(U.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),m.subVectors(f,d),m.dot(u)>0===!0&&this.forceUpdate===!1)return;m.reflect(u).negate(),m.add(f),g.extractRotation(U.matrixWorld),v.set(0,0,-1),v.applyMatrix4(g),v.add(d),M.subVectors(f,v),M.reflect(u).negate(),M.add(f),E.position.copy(m),E.up.set(0,1,0),E.up.applyMatrix4(g),E.up.reflect(u),E.lookAt(M),E.far=U.far,E.updateMatrixWorld(),E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrix.elements[8]*=-1,E.projectionMatrix.elements[12]*=-1,_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(E.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const I=E.projectionMatrix;E.isOrthographicCamera?(S.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],S.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],S.z=-U.far,S.w=1):(S.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],S.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],S.z=-1,S.w=(1+I.elements[10])/I.elements[14]),p.multiplyScalar(2/p.dot(S)),I.elements[2]=p.x,I.elements[6]=p.y,E.isOrthographicCamera?(I.elements[10]=p.z-a,I.elements[14]=p.w-1):(I.elements[10]=p.z+1-a,I.elements[14]=p.w),n.visible=!1;const z=x.getRenderTarget(),L=x.xr.enabled,G=x.shadowMap.autoUpdate;x.xr.enabled=!1,x.shadowMap.autoUpdate=!1,x.setRenderTarget(A),x.state.buffers.depth.setMask(!0),x.autoClear===!1&&x.clear(),x.render(w,E),x.xr.enabled=L,x.shadowMap.autoUpdate=G,x.setRenderTarget(z);const K=U.viewport;K!==void 0&&x.state.viewport(K),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()},this.getReflectionCamera=function(x){let w=this._reflectionCameras.get(x);return w===void 0&&(w=x.clone(),this._reflectionCameras.set(x,w)),w}}}Ro.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function uv(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createImageData(256,256),s=(l,c,h)=>{let u=Math.imul(l,374761393)+Math.imul(c,668265263)+Math.imul(h,1442695041);return u=u^u>>>13|0,u=Math.imul(u,1274126177),((u^u>>>16)>>>0)/4294967295},r=(l,c,h,u)=>{const f=Math.floor(l),d=Math.floor(c);let g=l-f,v=c-d;g=g*g*(3-2*g),v=v*v*(3-2*v);const p=A=>(A%h+h)%h,m=s(p(f),p(d),u),M=s(p(f+1),p(d),u),S=s(p(f),p(d+1),u),_=s(p(f+1),p(d+1),u);return m+(M-m)*g+(S-m)*v+(m-M-S+_)*g*v},o=(l,c,h)=>r(l*4,c*4,4,h)*.55+r(l*8,c*8,8,h+17)*.3+r(l*16,c*16,16,h+41)*.15;for(let l=0;l<256;l++){const c=l/256;for(let h=0;h<256;h++){const u=h/256,f=o(u,c,11)*.16,d=o(u,c,29)*.16,g=o((u+f)%1,(c+d)%1,53),v=r(u*24,c*24,24,97),p=(l*256+h)*4;n.data[p]=Math.round(g*255),n.data[p+1]=Math.round(v*255),n.data[p+2]=0,n.data[p+3]=255}}t.putImageData(n,0,0);const a=new Oh(e);return a.wrapS=is,a.wrapT=is,a.minFilter=Yn,a.magFilter=sn,a.generateMipmaps=!0,a.needsUpdate=!0,a}function fv(){const i=uv(),e={name:"WetAsphaltReflectorShader",uniforms:{color:{value:new je(12767456)},tDiffuse:{value:null},uPuddleMap:{value:i},textureMatrix:{value:new Et},uTime:{value:0}},vertexShader:`
      uniform mat4 textureMatrix;
      varying vec4 vProjUv;
      varying vec3 vWorldPos;

      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vProjUv = textureMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,fragmentShader:`
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform sampler2D uPuddleMap;
      uniform float uTime;

      varying vec4 vProjUv;
      varying vec3 vWorldPos;

      vec2 hash22(vec2 p) {
        vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
        p3 += dot(p3, p3.yzx + 33.33);
        return fract((p3.xx + p3.yz) * p3.zy);
      }

      vec2 rainRippleLayer(vec2 wp, float scale, float speed) {
        vec2 uv = wp * scale;
        vec2 cell = floor(uv);
        vec2 fracUv = fract(uv);
        vec2 rnd = hash22(cell);
        vec2 center = 0.22 + 0.56 * rnd;
        float phase = fract(uTime * speed + rnd.x * 3.7 + rnd.y * 1.9);
        vec2 diff = fracUv - center;
        float dist = length(diff);
        float radius = phase * 0.46;
        float ring = exp(-pow((dist - radius) * 28.0, 2.0)) * (1.0 - phase);
        float wave = sin((dist - radius) * 58.0) * ring;
        vec2 dir = dist > 0.001 ? diff / dist : vec2(0.0);
        return dir * wave;
      }

      void main() {
        vec2 wp = vWorldPos.xz;

        // Single fast texture lookup for organic domain-warped puddles!
        vec2 pSample = texture2D(uPuddleMap, wp * 0.065).rg;
        float macro = pSample.r;
        float detail = pSample.g;

        // Roadside gutter pooling strictly inside alley (Z > -26.5) + far cross-street curb
        float inAlley = smoothstep(-27.4, -24.6, wp.y);
        float alleyGutter = 0.14 * smoothstep(0.95, 1.95, abs(wp.x)) * inAlley;
        float farCurbGutter = 0.12 * smoothstep(-35.8, -38.4, wp.y);
        float field = macro * 0.74 + detail * 0.26 + alleyGutter + farCurbGutter;

        // Organic noise-modulated fade near outer boundaries so zero straight borders ever show
        float edgeFadeX = 1.0 - smoothstep(11.5, 16.2, abs(wp.x) + (macro - 0.5) * 3.0);
        float edgeFadeZ = smoothstep(-39.6, -37.2, wp.y + (macro - 0.5) * 1.6) * (1.0 - smoothstep(1.2, 3.6, wp.y));
        float edgeFade = edgeFadeX * edgeFadeZ;

        float damp = smoothstep(0.36, 0.52, field);
        if (damp * edgeFade < 0.01) {
          discard;
        }

        float sheen = smoothstep(0.42, 0.58, field);
        float puddle = smoothstep(0.49, 0.64, field);

        vec2 ripple = rainRippleLayer(wp, 1.9, 1.2);
        vec4 uv = vProjUv;
        uv.xy += ripple * (0.005 * puddle) * uv.w;

        // Fast 3-tap soft reflection blur on damp asphalt, crisp inside puddles
        float blur = mix(0.014, 0.002, puddle) * uv.w;
        vec3 refl = texture2DProj(tDiffuse, uv).rgb * 0.5;
        refl += texture2DProj(tDiffuse, uv + vec4(blur, blur * 0.5, 0.0, 0.0)).rgb * 0.25;
        refl += texture2DProj(tDiffuse, uv - vec4(blur, blur * 0.5, 0.0, 0.0)).rgb * 0.25;

        vec3 viewDir = normalize(cameraPosition - vWorldPos);
        float ndv = clamp(viewDir.y, 0.0, 1.0);
        float fresnel = mix(0.14, 0.92, pow(1.0 - ndv, 3.8));

        vec3 darkWetAsphalt = vec3(0.014, 0.017, 0.024);
        vec3 waterTint = vec3(0.86, 0.92, 1.0);
        vec3 reflectedCol = refl * color * waterTint * 1.14;

        float reflWeight = clamp(sheen * (0.34 + fresnel * 0.66), 0.0, 0.96);
        vec3 finalColor = mix(darkWetAsphalt, reflectedCol, reflWeight);
        float alpha = clamp(damp * 0.44 + puddle * (0.4 + fresnel * 0.54), 0.0, 0.94) * edgeFade;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `},t=new Je(34,44),n=new Ro(t,{clipBias:.003,textureWidth:320,textureHeight:320,color:12767456,multisample:0,shader:e});n.rotation.x=-Math.PI/2,n.position.set(0,.006,-18),n.material.transparent=!0,n.material.depthWrite=!1,n.renderOrder=1,n.userData.skipGtao=!0;let s=0,r=!0;const o=n.onBeforeRender;return n.onBeforeRender=function(a,l,c,h,u,f){var v,p;if(l.overrideMaterial!==null||(s++,!r&&s%3!==0))return;r=!1;const d=a.shadowMap.enabled;a.shadowMap.enabled=!1;const g=[];for(let m=0;m<l.children.length;m++){const M=l.children[m];if(M.visible){if((v=M.userData)!=null&&v.skipReflector)M.visible=!1,g.push(M);else if(M.children&&M.children.length>0)for(let S=0;S<M.children.length;S++){const _=M.children[S];_.visible&&((p=_.userData)!=null&&p.skipReflector)&&(_.visible=!1,g.push(_))}}}o.call(this,a,l,c,h,u,f);for(let m=0;m<g.length;m++)g[m].visible=!0;a.shadowMap.enabled=d},{mesh:n,forceRender(){r=!0},update(a){n.material.uniforms.uTime.value=a}}}function dv(i,e=8){const t=new lt;t.name="YokochoArchitecture";const n=new lt;n.name="YokochoFineDetail",n.userData.skipReflector=!0,t.add(n);const s=Px(e),r=Lx(e),o=Cl(e),a=qc(e,[56,60,66]),l=qc(e,[84,78,70]),c=Dx(e),h=Pl(e),u=Vn(new he({map:s.map,roughnessMap:s.roughnessMap,normalMap:s.normalMap,normalScale:new B(.95,.95),roughness:.92,metalness:.05}),{gritStrength:.12,grimeBottom:0,roughJitter:.12}),f=Vn(new he({map:r.map,roughnessMap:r.roughnessMap,normalMap:r.normalMap,normalScale:new B(.75,.75),roughness:.95,metalness:0}),{gritStrength:.11,grimeBottom:.35,grimeHeight:.16,roughJitter:.1,minRoughness:.82}),d=Vn(new he({map:o.map,roughnessMap:o.roughnessMap,normalMap:o.normalMap,normalScale:new B(.9,.9),roughness:.9,metalness:0}),{gritStrength:.1,grimeBottom:.42,grimeHeight:.55,roughJitter:.1,minRoughness:.78}),g=Vn(new he({map:a.map,roughnessMap:a.roughnessMap,normalMap:a.normalMap,normalScale:new B(.42,.42),roughness:.96,metalness:0}),{gritStrength:.1,grimeBottom:.44,grimeHeight:.55,roughJitter:.08,minRoughness:.84}),v=Vn(new he({map:l.map,roughnessMap:l.roughnessMap,normalMap:l.normalMap,normalScale:new B(.42,.42),roughness:.96,metalness:0}),{gritStrength:.1,grimeBottom:.44,grimeHeight:.55,roughJitter:.08,minRoughness:.84}),p=Vn(new he({map:c.map,roughnessMap:c.roughnessMap,normalMap:c.normalMap,normalScale:new B(.62,.62),roughness:.74,metalness:.65}),{gritStrength:.1,grimeBottom:.48,grimeHeight:.5,roughJitter:.12}),m=Vn(new he({map:h.map,roughnessMap:h.roughnessMap,normalMap:h.normalMap,normalScale:new B(.75,.75),color:6449778,roughness:.76,metalness:.74}),{gritStrength:.1,grimeBottom:.4,grimeHeight:.48,roughJitter:.14}),M=new he({color:921620,roughness:.7,metalness:.18});function S(k,ne,te,ze,De,Rt,Mt,{tile:Zt=2,castShadow:Pt=!0,receiveShadow:Kt=!0,bevel:ut=0}={}){const Nt=ut>0?new ke(k,ne,te,2,ut):hv(new st(k,ne,te),k,ne,te,Zt),_t=new C(Nt,Mt);return _t.position.set(ze,De,Rt),_t.castShadow=Pt,_t.receiveShadow=Kt,t.add(_t),_t}const _=new C(new Je(5.2,36),u);_.rotation.x=-Math.PI/2,_.position.set(0,0,-13),_.receiveShadow=!0,t.add(_),S(.8,.14,34,-2.45,.07,-13,f,{bevel:.025}),S(.8,.14,34,2.45,.07,-13,f,{bevel:.025});const A=new he({color:9278104,roughness:.88,transparent:!0,opacity:.48});for(const k of[-1.72,1.72]){const ne=new C(new Je(.08,30),A);ne.rotation.x=-Math.PI/2,ne.position.set(k,.003,-12.5),t.add(ne)}for(const k of[-1.92,1.92])for(let ne=-1.5;ne>=-23.5;ne-=5.5){const te=new C(new ke(.24,.015,.9,2,.004),m);te.position.set(k,.005,ne),n.add(te)}const T=Fx(),x=new C(new Fe(.36,.36,.014,24),new he({map:T.map,normalMap:T.normalMap,roughness:.52,metalness:.78}));x.position.set(.24,.004,-9.4),x.receiveShadow=!0,t.add(x),S(.4,6.8,5.82,-2.85,3.4,-.41,d,{tile:2.2}),S(.4,6.8,3.02,-2.85,3.4,-6.99,d,{tile:2.2}),S(.4,4.5,2.16,-2.85,4.55,-4.4,d,{tile:2.2}),S(.4,.14,2.16,-2.85,.07,-4.4,f,{tile:2});for(const k of[1.2,-2.5,-5.9,-8.3])S(.14,3.2,.14,-2.6,1.6,k,d,{bevel:.015});const w=Ix(),U=new he({map:w.map,emissiveMap:w.emissiveMap,emissive:16752714,emissiveIntensity:.56,roughness:.98,metalness:0}),E=new he({map:o.map,normalMap:o.normalMap,color:3876892,roughness:.86,metalness:0}),P=new he({color:1907224,roughness:.45,metalness:.78}),I=new lt,z=tv(),L=new he({map:z,roughness:.92,metalness:0}),G=new he({map:Qx(),roughness:.86,metalness:0}),K=new he({map:o.map,normalMap:o.normalMap,color:10909768,roughness:.56,metalness:0}),W=new he({map:a.map,roughnessMap:a.roughnessMap,color:4142896,roughness:.82,metalness:0}),ce=new he({map:h.map,color:10134186,roughness:.34,metalness:.82}),V=new Bt({color:328450,transparent:!0,opacity:.52,depthWrite:!1}),j=new C(new Je(2.6,3.1),W);j.rotation.x=-Math.PI/2,j.position.set(-3.9,.142,-4.4);const se=new C(new Je(2.6,3.1),E);se.rotation.x=Math.PI/2,se.position.set(-3.9,2.58,-4.4);const Re=new C(new Je(3.1,2.46),G);Re.rotation.y=Math.PI/2,Re.position.set(-5.12,1.37,-4.4);const Ce=new C(new Je(2.6,2.46),L);Ce.position.set(-3.9,1.37,-5.92);const q=new C(new Je(2.6,2.46),L);q.rotation.y=Math.PI,q.position.set(-3.9,1.37,-2.88),I.add(j,se,Re,Ce,q);for(const k of[-3.4,-4.4,-5.4]){const ne=new C(new st(2.52,.09,.1),E);ne.position.set(-3.9,2.52,k),I.add(ne)}for(const k of[-2.94,-5.86]){const ne=new C(new st(.11,2.44,.11),E);ne.position.set(-5.07,1.36,k),I.add(ne)}const pe=new C(new ke(.48,.28,.78,2,.015),ce);pe.position.set(-4.87,2.4,-5.48);const le=new C(new Je(.7,.16),new he({color:1777186,roughness:.7,metalness:.6}));le.rotation.y=Math.PI/2,le.rotation.x=.25,le.position.set(-4.628,2.31,-5.48),I.add(pe,le);const Ue=new C(new st(.55,.82,2.68),E);Ue.position.set(-4.15,.55,-4.4);for(let k=-5.65;k<=-3.15;k+=.16){const ne=new C(new st(.018,.8,.032),P);ne.position.set(-3.87,.55,k),I.add(ne)}const ge=new C(new Je(.82,2.82),V);ge.rotation.x=-Math.PI/2,ge.position.set(-3.98,.145,-4.4);const Xe=new C(new ke(.72,.058,2.78,2,.014),K);Xe.position.set(-4.08,.99,-4.4);const wt=new C(new ke(.18,.115,2.74,2,.01),K);wt.position.set(-4.35,1.075,-4.4),I.add(Ue,ge,Xe,wt);const Ve=new Nn({color:7282202,roughness:.44,metalness:.04,clearcoat:.28,clearcoatRoughness:.35}),nt=new Fe(.162,.166,.062,20),rt=new Fe(.168,.168,.016,20),oe=new Fe(.013,.011,.54,8),ve=new Sn(.108,.009,6,18);ve.rotateX(Math.PI/2);const Me=new Hi(.21,16);Me.rotateX(-Math.PI/2);for(const[k,ne]of[[-3.64,.02],[-4.4,-.03],[-5.14,.01]]){const te=new lt,ze=new C(nt,Ve);ze.position.y=.565;const De=new C(rt,ce);De.position.y=.532;const Rt=new C(ve,ce);Rt.position.y=.2;const Mt=new C(Me,V);Mt.position.y=.005,te.add(ze,De,Rt,Mt);for(let Zt=0;Zt<4;Zt++){const Pt=Zt*Math.PI/2+Math.PI/4,Kt=new C(oe,P);Kt.position.set(Math.cos(Pt)*.108,.27,Math.sin(Pt)*.108),te.add(Kt)}te.position.set(-3.45+ne,.14,k),I.add(te)}const Ne=[new B(0,0),new B(.05,0),new B(.095,.05),new B(.118,.098),new B(.108,.098),new B(.088,.05)],Te=new nn(Ne,20),Qe=new he({color:1908516,roughness:.26,metalness:.06}),Ge=new he({color:10233374,roughness:.3}),it=new Sn(.113,.006,8,22);it.rotateX(Math.PI/2);const dt=new he({map:jx(),roughness:.22}),gt=new Fe(.0025,.0038,.23,6);gt.rotateX(Math.PI/2);const O=new he({color:14867664,roughness:.22});for(const k of[-3.82,-4.42]){const ne=new C(Te,Qe);ne.position.set(-3.94,1.02,k);const te=new C(it,Ge);te.position.set(-3.94,1.116,k);const ze=new C(new Hi(.102,18),dt);ze.rotation.x=-Math.PI/2,ze.position.set(-3.94,1.098,k);const De=new C(new st(.022,.008,.13),O);De.position.set(-3.99,1.12,k-.04),De.rotation.set(.45,.32,.15);for(const Rt of[0,.012]){const Mt=new C(gt,K);Mt.position.set(-3.84+Rt,1.025,k+.15),Mt.rotation.y=.08,I.add(Mt)}I.add(ne,te,ze,De)}const Lt=new nn([new B(0,0),new B(.022,0),new B(.024,.065),new B(.01,.105),new B(.013,.118)],12),ct=new he({color:9380378,roughness:.26}),At=new he({color:2497044,roughness:.22}),Ee=new Nn({color:13688038,roughness:.32,transmission:.45,transparent:!0,opacity:.72}),Dt=new C(new ke(.09,.075,.24,2,.008),E);Dt.position.set(-4.35,1.16,-4.1);const qe=new C(Lt,At);qe.position.set(-4.35,1.132,-3.86);const Ze=new C(Lt,ct);Ze.position.set(-4.35,1.132,-3.77);const R=new C(new Fe(.022,.022,.088,12),ce);R.position.set(-4.35,1.175,-3.69);const y=new C(new Fe(.056,.068,.22,16),ce);y.position.set(-4.34,1.24,-4.58);const Y=new Fe(.032,.025,.085,12);for(const[k,ne]of[[-4.34,-4.74],[-4.34,-4.83]]){const te=new C(Y,Ee);te.position.set(k,1.175,ne),I.add(te)}const de=new C(new ke(.11,.065,.21,2,.008),K);de.position.set(-4.34,1.165,-5.06),I.add(Dt,qe,Ze,R,y,de);const ae=new C(new ke(.52,.04,2.7,2,.008),ce);ae.position.set(-4.84,.96,-4.4);const Se=new C(new Fe(.18,.17,.32,20),ce);Se.position.set(-4.82,1.14,-5.42);const we=new C(new Sn(.18,.01,8,20),P);we.rotation.x=Math.PI/2,we.position.set(-4.82,1.3,-5.42);const ee=new C(new Fe(.008,.008,.4,6),ce);ee.position.set(-4.76,1.33,-5.35),ee.rotation.set(.32,0,-.25);const ie=new C(new Fe(.13,.14,.21,16),new he({color:13157046,roughness:.42,metalness:.12}));ie.position.set(-4.78,1.09,-3.42),I.add(ae,Se,we,ee,ie);const ye=new C(new ke(.22,.032,1.98,2,.006),E);ye.position.set(-4.99,1.34,-4.08),I.add(ye);const N=new nn([new B(0,0),new B(.036,0),new B(.036,.145),new B(.013,.2),new B(.012,.26),new B(.015,.27)],12),re=new he({color:1721384,roughness:.22}),$=new he({color:5187088,roughness:.22}),be=new Fe(.037,.037,.072,12,1,!0),xe=new he({color:14208180,roughness:.85});for(const[k,ne,te]of[[-3.22,!0,1],[-3.32,!1,.92],[-3.45,!0,1.02],[-4.12,!1,.95],[-4.22,!0,1]]){const ze=new C(N,ne?re:$);ze.position.set(-4.98,1.356,k),ze.scale.setScalar(te);const De=new C(be,xe);De.position.set(-4.98,1.356+.08*te,k),De.scale.setScalar(te),I.add(ze,De)}for(let k=0;k<3;k++){const ne=new C(Te,Qe);ne.position.set(-4.97,1.356+k*.03,-4.64),I.add(ne)}const _e=new he({color:14209734,roughness:.94});for(let k=0;k<3;k++){const ne=new C(new ke(.15,.024,.2,2,.008),_e);ne.position.set(-4.97,1.372+k*.026,-3.76),ne.rotation.y=(k-1)*.06,I.add(ne)}const We=[new B(.02,.1),new B(.048,.078),new B(.155,0),new B(.165,-.01)],ot=new nn(We,16),me=new he({color:2366229,roughness:.52,metalness:.25,side:Vt}),Ye=new Bt({color:16766354});for(const k of[-3.82,-4.68]){const ne=new C(new Fe(.005,.005,.45,6),P);ne.position.set(-3.86,2.35,k);const te=new C(ot,me);te.position.set(-3.86,2.06,k);const ze=new C(new xi(.032,10,10),Ye);ze.position.set(-3.86,2.07,k),I.add(ne,te,ze)}t.add(I);const $e=[];function Le(){const k=new lt,ne=1.16,te=2.16,ze=new C(new st(.018,te-.08,ne-.08),U);ze.position.x=-.008,k.add(ze),$e.push(ze);const De=new C(new ke(.052,te,.055,2,.006),E);De.position.z=ne*.5-.0275;const Rt=De.clone();Rt.position.z=-ne*.5+.0275;const Mt=new C(new ke(.052,.06,ne,2,.006),E);Mt.position.y=te*.5-.03;const Zt=new C(new ke(.052,.07,ne,2,.006),E);Zt.position.y=-te*.5+.035,k.add(De,Rt,Mt,Zt);const Pt=.58,Kt=new C(new ke(.038,Pt,ne-.09,2,.005),E);Kt.position.set(.004,-te*.5+.06+Pt*.5,0);const ut=new C(new ke(.052,.048,ne-.04,2,.005),E);ut.position.set(0,-te*.5+.06+Pt,0),k.add(Kt,ut);const Nt=-te*.5+.08+Pt,_t=te*.5-.05,St=_t-Nt,It=(Nt+_t)*.5,on=new st(.022,St,.016);for(let Ws=-ne*.5+.11;Ws<=ne*.5-.1;Ws+=.11){const Ki=new C(on,E);Ki.position.set(.015,It,Ws),Ki.castShadow=!0,k.add(Ki)}const zn=new st(.024,.022,ne-.08);for(const Ws of[.25,.52,.78]){const Ki=new C(zn,E);Ki.position.set(.016,Nt+St*Ws,0),Ki.castShadow=!0,k.add(Ki)}const Ci=new C(new ke(.018,.11,.038,2,.004),P);return Ci.position.set(.022,-.14,-ne*.5+.11),k.add(Ci),k}const vt=Le();vt.position.set(-2.59,1.22,-3.85);const Ot=Le();Ot.position.set(-2.65,1.22,-4.95),t.add(vt,Ot);let rn=!1,ei=0;const bi=S(.7,.08,7.6,-2.35,2.68,-4.2,m,{bevel:.015});bi.rotation.z=-.22;const Un=new C(new Fe(.014,.014,2.58,10),E);Un.rotation.x=Math.PI/2,Un.position.set(-2.14,2.53,-4.39),Un.castShadow=!0,t.add(Un);for(const k of[-3.22,-5.56]){const ne=new C(new st(.28,.022,.024),P);ne.position.set(-2.27,2.53,k),t.add(ne)}const Fn=Nx("らーめん"),Ti=new he({map:Fn,roughness:.96,metalness:0,side:Vt}),fn=[];for(let k=0;k<4;k++){const ne=new Je(.5,.58,6,8),te=ne.attributes.position;for(let De=0;De<te.count;De++){const Rt=te.getX(De),Mt=te.getY(De),Zt=Math.sin(Rt/.25*Math.PI*1.1+k)*.014*(.29-Mt);te.setZ(De,Zt)}ne.computeVertexNormals();const ze=new C(ne,Ti);ze.rotation.y=Math.PI/2,ze.position.set(-2.14,2.24,-3.55-k*.56),ze.castShadow=!0,t.add(ze);for(const De of[-.15,.15]){const Rt=new C(new Fe(.019,.019,.045,8),Ti);Rt.rotation.x=Math.PI/2,Rt.position.set(-2.14,2.535,ze.position.z+De),t.add(Rt)}fn.push(ze)}S(.4,8.2,8,-2.85,4.1,-12.5,g,{tile:1.8}),S(.08,1.25,3.2,-2.62,2.08,-12.2,p,{tile:1.5}),S(.35,1.45,3.1,-2.84,.86,-12.2,M,{castShadow:!1});const ti=kx("#244e6f"),ls=new he({map:ti.map,emissiveMap:ti.emissiveMap,emissive:16777215,emissiveIntensity:.62,roughness:.58,metalness:.08});for(const k of[-10.5,-14.2]){S(.08,.08,1.54,-2.6,5.21,k,m,{bevel:.01}),S(.09,.09,1.56,-2.59,3.59,k,m,{bevel:.01}),S(.08,1.66,.08,-2.6,4.4,k-.73,m,{bevel:.01}),S(.08,1.66,.08,-2.6,4.4,k+.73,m,{bevel:.01});const ne=new C(new Je(1.38,1.54),ls);ne.rotation.y=Math.PI/2,ne.position.set(-2.59,4.4,k),t.add(ne)}const ni=to(["居","酒","屋"],"24H","#4af2ff","#0b1b29",-2.2,3.95,-12.2,1,m);t.add(ni.group),S(.4,9,10,-2.85,4.5,-21.5,v,{tile:1.8}),S(.4,7.2,10,2.85,3.6,-2.5,v,{tile:1.8}),S(.1,2.45,4.4,2.62,1.36,-3.2,p,{tile:1.6}),S(.24,2.8,.28,2.6,1.54,-.85,f,{bevel:.02}),S(.24,2.8,.28,2.6,1.54,-5.55,f,{bevel:.02}),S(.4,8.4,2.8,2.85,4.2,-8.9,g,{tile:1.8}),S(.4,8.4,2.7,2.85,4.2,-14.15,g,{tile:1.8}),S(.4,5.7,2.5,2.85,5.55,-11.55,g,{tile:1.8}),S(.4,2.75,2.7,3.32,1.48,-11.55,g,{tile:1.8});const Ei=to(["ラ","ー","メ","ン"],"深夜","#ff7d3b","#240b09",2.2,4.05,-10.2,-1,m);t.add(Ei.group),S(.4,8.5,11,2.85,4.25,-21,g,{tile:1.8});const On=new C(new Je(3.8,.95),new he({map:w.map,emissiveMap:w.emissiveMap,emissive:16752714,emissiveIntensity:.54,roughness:.98,metalness:0}));On.rotation.y=-Math.PI/2,On.position.set(2.58,1.65,-19.2),t.add(On),S(.06,.045,3.88,2.57,2.13,-19.2,E,{bevel:.006}),S(.06,.055,3.88,2.57,1.17,-19.2,E,{bevel:.006});for(const k of[1.48,1.82])S(.028,.022,3.8,2.555,k,-19.2,E);for(let k=-17.35;k>=-21.05;k-=.34)S(.028,.96,.022,2.555,1.65,k,E);const Wi=S(.68,.08,4.6,2.35,2.68,-19.2,m,{bevel:.015});Wi.rotation.z=.2;const dn=new he({color:6120814,roughness:.48,metalness:.65}),mn=new Gs;mn.moveTo(0,0),mn.lineTo(-.56,0),mn.lineTo(-.56,.14),mn.lineTo(-.24,.48),mn.lineTo(0,.48),mn.closePath();const Ai=new br(mn,{depth:1.06,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:2}),Ri=new C(Ai,dn);Ri.position.set(2.65,2.02,-23.23),Ri.castShadow=!0;const Xi=new C(new Je(.92,.11),new Bt({color:592654}));Xi.rotation.y=-Math.PI/2,Xi.position.set(2.072,2.09,-22.7);for(let k=2.055;k<=2.125;k+=.025){const ne=new C(new st(.015,.008,.92),dn);ne.position.set(2.068,k,-22.7),ne.rotation.z=.35,t.add(ne)}const Yi=new C(new Fe(.19,.22,.16,16),dn);Yi.position.set(2.49,2.52,-22.7);const qi=new C(new Fe(.16,.16,3.8,16),dn);qi.position.set(2.49,4.44,-22.7),qi.castShadow=!0;for(const k of[3.2,4.6,6]){const ne=new C(new Fe(.175,.175,.06,16),P);ne.position.set(2.49,k,-22.7);const te=new C(new st(.18,.05,.08),P);te.position.set(2.58,k,-22.7),t.add(ne,te)}t.add(Ri,Xi,Yi,qi);for(const[k,ne]of[[-2.58,-8.45],[-2.58,-16.45],[2.58,-7.45],[2.58,-15.45]]){const te=new C(new Fe(.04,.04,7.6,10),m);te.position.set(k,3.8,ne),t.add(te)}const Zi=[{x:-1.94,z:-8.65,dirX:1},{x:1.94,z:-15.65,dirX:-1}];for(const k of Zi){const ne=mv(f,m,k.dirX);Qt(ne,k.x,k.z,0),t.add(ne)}const b=[[[-1.94,5.9,-8.65],[1.94,5.9,-15.65]],[[-1.94,6.2,-8.65],[1.94,6.2,-15.65]],[[-1.94,5.7,-8.65],[2.5,5.3,-6.5]],[[-1.94,6.1,-8.65],[-2.5,5.4,-2.5]],[[-1.94,6.3,-8.65],[-2.5,5.8,-16.2]],[[1.94,5.8,-15.65],[-2.5,5.5,-19.5]],[[1.94,6.15,-15.65],[2.5,5.6,-21.5]],[[-2.5,5.1,-4.5],[2.5,5.2,-5.2]],[[-2.5,5.6,-11.5],[2.5,5.7,-12.8]],[[-2.5,5.2,-18.2],[2.5,5.3,-17.8]],[[-2.5,5.9,-22.5],[2.5,5.8,-23.4]]];for(const[k,ne]of b){const te=[(k[0]+ne[0])*.5,Math.min(k[1],ne[1])-.42,(k[2]+ne[2])*.5],ze=new Mi([new D(...k),new D(...te),new D(...ne)]);n.add(new C(new jn(ze,14,.016,6,!1),M))}const F=new C(new Je(46,18),u);F.rotation.x=-Math.PI/2,F.position.set(0,-.004,-34),F.receiveShadow=!0,t.add(F),S(46,.14,4.4,0,.07,-40.5,f,{bevel:.025});const Q=new he({color:10792117,roughness:.84,transparent:!0,opacity:.42});for(let k=-2.2;k<=2.2;k+=.62){const ne=new C(new Je(.32,1.65),Q);ne.rotation.x=-Math.PI/2,ne.position.set(k,.002,-28.8),n.add(ne)}for(const[k,ne,te]of[[-5.8,1,10277119],[6,-1,16756070]]){const ze=new C(new Fe(.08,.11,6.2,12),m);ze.position.set(k,3.1,-38.6);const De=new C(new Fe(.032,.04,1.35,8),m);De.rotation.z=ne*-1.3,De.position.set(k+ne*.56,6.22,-38.6);const Rt=new C(new ke(.46,.1,.24,2,.025),m);Rt.position.set(k+ne*1.15,6.36,-38.6);const Mt=new C(new Je(.34,.16),new Bt({color:te}));Mt.rotation.x=Math.PI/2,Mt.position.set(k+ne*1.15,6.305,-38.6),t.add(ze,De,Rt,Mt)}const X=new he({color:9015964,roughness:.62,metalness:.42});for(const k of[-7.5,7.5]){for(const ne of[.5,.84]){const te=new C(new ke(8.6,.055,.055,2,.01),X);te.position.set(k,ne,-38.55),n.add(te)}for(let ne=k-4;ne<=k+4;ne+=2){const te=new C(new ke(.07,.88,.07,2,.01),X);te.position.set(ne,.58,-38.55),n.add(te)}}const Z=new C(new Fe(.055,.07,3.6,10),m);Z.position.set(3.25,1.94,-38.65);const H=new C(new ke(.24,.56,.18,2,.02),m);H.position.set(3.25,3.12,-38.52);const J=new C(new Je(.14,.14),new Bt({color:16726832}));J.position.set(3.25,3.24,-38.425),t.add(Z,H,J);const ue=aa(e,101,"office"),fe=aa(e,207,"brick"),Ae=Hx(),He=[{x:-7.4,z:-44.8,w:11.2,h:22,d:8.6,tex:ue,store:"konbini",repeat:[1.1,1.1]},{x:7.7,z:-45.2,w:11.6,h:24.5,d:8.8,tex:fe,store:"izakaya",repeat:[1.1,1.25]}];for(const k of He){const ne=new lt,te=k.tex.map.clone(),ze=k.tex.roughnessMap.clone(),De=k.tex.normalMap.clone(),Rt=k.tex.emissiveMap.clone();for(const _t of[te,ze,De,Rt])_t.needsUpdate=!0,_t.repeat.set(k.repeat[0],k.repeat[1]);const Mt=k.h-3.6,Zt=new C(new st(k.w,Mt,k.d-.16),new he({map:te,roughnessMap:ze,normalMap:De,normalScale:new B(.45,.45),emissiveMap:Rt,emissive:16777215,emissiveIntensity:.62,roughness:.88,metalness:.05}));Zt.position.set(k.x,3.6+Mt*.5,k.z-.08),ne.add(Zt);const Pt=k.z+k.d*.5;for(let _t=3.6;_t<k.h-1.5;_t+=3.4){const St=new C(new ke(k.w+.18,.18,.52,2,.025),f);St.position.set(k.x,_t,Pt+.24);const It=new C(new st(k.w+.06,.04,.04),m);It.position.set(k.x,_t+.75,Pt+.44),ne.add(St,It)}const Kt=new C(new st(k.w,3.46,k.d-.16),f);Kt.position.set(k.x,.14+1.73,k.z-.08),ne.add(Kt);for(const _t of[-k.w*.46,0,k.w*.46]){const St=new C(new ke(.56,3.46,.44,2,.02),f);St.position.set(k.x+_t,.14+1.73,Pt+.22),ne.add(St)}const ut=new C(new ke(k.w-.6,.14,1.05,2,.02),m);if(ut.position.set(k.x,3.45,Pt+.52),ut.rotation.x=.08,ne.add(ut),k.store==="konbini"){const _t=new C(new Je(k.w-1.4,3.05),new he({map:Ae.map,emissiveMap:Ae.emissiveMap,emissive:16777215,emissiveIntensity:.72,roughness:.45}));_t.position.set(k.x,1.72,Pt+.12),ne.add(_t)}else{const _t=new C(new st(k.w*.44,2.75,.12),p);_t.position.set(k.x-k.w*.23,1.55,Pt+.12);const St=new C(new Je(k.w*.42,2.6),new he({map:w.map,emissiveMap:w.emissiveMap,emissive:16751432,emissiveIntensity:.75,roughness:.55}));St.position.set(k.x+k.w*.22,1.52,Pt+.12),ne.add(_t,St);const It=k.x+k.w*.22,on=k.w*.42;for(const zn of[.85,1.52,2.2]){const Ci=new C(new st(on,.05,.045),E);Ci.position.set(It,zn,Pt+.16),ne.add(Ci)}for(let zn=It-on*.45;zn<=It+on*.45;zn+=on*.15){const Ci=new C(new st(.04,2.6,.04),E);Ci.position.set(zn,1.52,Pt+.16),ne.add(Ci)}}const Nt=new C(new ke(k.w+.25,.55,k.d+.25,2,.03),f);Nt.position.set(k.x,k.h+.25,k.z),ne.add(Nt),t.add(ne)}const Ke=to(["新","宿","酒"],"24H","#ff587a","#1f0912",-2.15,5.4,-40.3,1,m);Ke.group.rotation.y=Math.PI/2;const Pe=to(["珈","琲","館"],"OPEN","#52e5ff","#091822",2.25,6.2,-40.6,-1,m);Pe.group.rotation.y=Math.PI/2,t.add(Ke.group,Pe.group);const et=aa(e,319,"office");et.map.repeat.set(1.25,2.2),et.emissiveMap.repeat.set(1.25,2.2);for(const k of[{x:-1.5,z:-61,w:14,h:36,d:10},{x:-14.5,z:-65,w:12,h:40,d:10},{x:14,z:-66,w:13,h:42,d:10}]){const ne=new C(new st(k.w,k.h,k.d),new he({map:et.map,emissiveMap:et.emissiveMap,emissive:10205400,emissiveIntensity:.34,roughness:.72}));ne.position.set(k.x,k.h*.5,k.z);const te=new C(new Fe(.06,.1,4.5,8),m);te.position.set(k.x,k.h+2.25,k.z);const ze=new C(new xi(.18,8,8),new Bt({color:16722731}));ze.position.set(k.x,k.h+4.5,k.z),t.add(ne,te,ze)}const ht=pv();ht.position.set(-18,0,-33.2),t.add(ht);const xt=fv();return i.add(xt.mesh),i.add(t),{group:t,wetReflector:xt,shojiHitMeshes:$e,forceReflectorUpdate(){xt.forceRender()},toggleShojiDoor(){return rn=!rn,rn},toggleMainNeon(){return ni.toggle()},update(k,ne=.016){xt.update(k);for(let De=0;De<fn.length;De++)fn[De].rotation.z=Math.sin(k*1.9+De*.8)*.06+.04;const te=rn?-1.04:0;ei=Oi.lerp(ei,te,Math.min(1,ne*6)),vt.position.z=-3.85+ei;const ze=(k+4.5)%24;if(ze<8.5){const De=ze/8.5;ht.visible=!0,ht.rotation.y=0,ht.position.set(-24+De*48,0,-35.6)}else if(ze>=12&&ze<20.5){const De=(ze-12)/8.5;ht.visible=!0,ht.rotation.y=Math.PI,ht.position.set(24-De*48,0,-37.2)}else ht.visible=!1}}}function pv(){const i=new lt,e=new Nn({color:724500,roughness:.2,metalness:.65,clearcoat:.9,clearcoatRoughness:.14}),t=new he({color:6055022,roughness:.35,metalness:.8}),n=new Nn({color:791581,roughness:.1,metalness:.8,clearcoat:.9}),s=new he({color:855826,roughness:.88}),r=new Bt({color:16774362}),o=new Bt({color:16720412}),a=new Bt({color:16760376}),l=uu(),c=lv(),h=new Gs;h.moveTo(-2.22,.28),h.lineTo(2.26,.28),h.lineTo(2.3,.56),h.lineTo(2.08,.78),h.lineTo(1.16,.85),h.lineTo(.54,1.32),h.lineTo(-.88,1.32),h.lineTo(-1.54,.86),h.lineTo(-2.18,.82),h.lineTo(-2.26,.54),h.closePath();const u=new br(h,{depth:1.62,bevelEnabled:!0,bevelThickness:.09,bevelSize:.06,bevelSegments:3});u.translate(0,0,-.81);const f=new C(u,e);i.add(f);const d=new C(new ke(1.75,.38,1.66,2,.05),n);d.position.set(-.2,1.07,0);const g=new C(new ke(.22,.09,.26,2,.025),a);g.position.set(-.1,1.4,0),i.add(d,g);const v=new Fe(.3,.3,.22,16);v.rotateX(Math.PI/2);const p=new Fe(.17,.17,.23,12);p.rotateX(Math.PI/2);for(const S of[-1.36,1.36])for(const _ of[-.79,.79]){const A=new C(v,s);A.position.set(S,.3,_);const T=new C(p,t);T.position.set(S,.3,_),i.add(A,T)}for(const S of[-.58,.58]){const _=new C(new st(.06,.09,.32),r);_.position.set(2.26,.62,S);const A=new li(new Hn({map:l,color:16773324,transparent:!0,opacity:.72,blending:bn,depthWrite:!1}));A.position.set(2.34,.62,S),A.scale.set(1.05,.68,1);const T=new C(new st(.06,.09,.36),o);T.position.set(-2.24,.66,S);const x=new li(new Hn({map:l,color:16722976,transparent:!0,opacity:.65,blending:bn,depthWrite:!1}));x.position.set(-2.32,.66,S),x.scale.set(.85,.52,1),i.add(_,A,T,x)}const m=new C(new Je(7.2,3.5),new Bt({map:c,transparent:!0,opacity:.19,blending:bn,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(5.8,.022,0);const M=new C(new Je(2.6,2.2),new Bt({map:l,color:16720408,transparent:!0,opacity:.16,blending:bn,depthWrite:!1}));return M.rotation.x=-Math.PI/2,M.position.set(-3.1,.022,0),i.add(m,M),i}function to(i,e,t,n,s,r,o,a,l){const c=new lt;c.position.set(s,r,o);const h=Ux(i,e,t,n),u=new he({map:h.map,emissiveMap:h.emissiveMap,emissive:16777215,emissiveIntensity:.86,roughness:.85,metalness:0}),f=new C(new ke(.14,1.75,.56,2,.02),l);f.castShadow=!0,c.add(f);for(const g of[-.072,.072]){const v=new C(new Je(.5,1.66),u);v.rotation.y=g>0?Math.PI/2:-Math.PI/2,v.position.x=g,c.add(v)}for(const g of[-.55,.55]){const v=new C(new st(.55,.055,.06),l);v.position.set(-a*.28,g,0),c.add(v)}let d=!0;return{group:c,toggle(){return d=!d,u.emissiveIntensity=d?.86:.05,d}}}function mv(i,e,t){const n=new lt,s=new he({color:987670,roughness:.72,metalness:.2}),r=new he({color:10134186,roughness:.35,metalness:.08}),o=new C(new Fe(.11,.165,6.8,16),i);o.position.y=3.4,o.castShadow=!0,n.add(o);const a=new C(new Fe(.156,.163,.92,16,1,!0),new he({map:fu(),roughness:.56,metalness:.1}));a.position.y=1.38,n.add(a);const l=new C(new st(.015,.34,.15),new he({map:nv(),roughness:.45,metalness:.25}));l.position.set(t*.155,2.24,0),n.add(l);const c=new Sn(.132,.012,6,16);c.rotateX(Math.PI/2);for(const _ of[4.42,4.92,5.14]){const A=new C(c,e);A.position.y=_,n.add(A)}for(const _ of[5.75,6.25]){const A=new C(new ke(.12,.1,1.38,2,.015),e);A.position.set(0,_,0),n.add(A);for(const T of[-.52,0,.52]){const x=new C(new Fe(.032,.042,.1,10),r);x.position.set(0,_+.095,T),n.add(x)}}const h=-t*.29,u=new C(new Fe(.21,.21,.72,16),e);u.position.set(h,4.66,0),u.castShadow=!0;const f=new C(new Fe(.225,.225,.05,16),e);f.position.set(h,5.03,0);for(const _ of[4.42,4.92]){const A=new C(new st(.26,.045,.07),e);A.position.set(h*.5,_,0),n.add(A)}for(const _ of[-.08,.08]){const A=new C(new Fe(.022,.032,.14,8),r);A.position.set(h,5.12,_);const T=new Mi([new D(h,5.18,_),new D(h*.75,5.54,_*2.2),new D(0,5.82,_*3.5)]),x=new C(new jn(T,10,.011,6,!1),s);n.add(A,x)}n.add(u,f);const d=new Mi([new D(0,5.12,0),new D(t*.26,5.42,0),new D(t*.68,5.57,0),new D(t*.96,5.53,0)]),g=new C(new jn(d,14,.031,8,!1),e),v=new C(new Fe(.012,.012,.44,6),e);v.position.set(t*.22,5.2,0),v.rotation.z=t*-.92,n.add(g,v);const p=new he({color:2896442,roughness:.55,metalness:.72}),m=new C(new ke(.48,.11,.24,3,.04),p);m.position.set(t*.98,5.535,0);const M=new C(new Fe(.145,.165,.055,16,1,!0),p);M.scale.set(1.32,1,.85),M.position.set(t*.99,5.475,0);const S=new C(new Hi(.125,16),new Bt({color:16770229}));return S.rotation.x=Math.PI/2,S.scale.set(1.3,.82,1),S.position.set(t*.99,5.478,0),n.add(m,M,S),n}function gv(i,e=8,t={}){const n=new lt;n.name="YokochoProps";const s=[],r=[],o=Pl(e),a=Cl(e),l=Bx(),c=Vn(new he({map:o.map,roughnessMap:o.roughnessMap,normalMap:o.normalMap,color:6318192,roughness:.72,metalness:.78}),{gritStrength:.1,grimeBottom:.4,roughJitter:.14}),h=Vn(new he({map:o.map,roughnessMap:o.roughnessMap,color:7040876,roughness:.84,metalness:.12}),{gritStrength:.1,grimeBottom:0,roughJitter:.1,minRoughness:.72}),u=Vn(new he({map:a.map,normalMap:a.normalMap,color:8415828,roughness:.85,metalness:.05}),{gritStrength:.1,grimeBottom:.4,roughJitter:.12}),f=Array.from({length:6},(V,j)=>{const se=zx(j);return new Nn({map:se,emissiveMap:se,emissive:16777215,emissiveIntensity:.22,roughness:.24,metalness:.45,clearcoat:.55,clearcoatRoughness:.18})}),d=[{x:-2.02,y:2.34,z:-1.95,kanji:"麺",color:"#ff8a3d",dirX:1},{x:-2.02,y:2.34,z:-2.98,kanji:"酒",color:"#ff9848",dirX:1},{x:-2.02,y:2.34,z:-6.25,kanji:"麺",color:"#ff7e36",dirX:1},{x:2.02,y:2.3,z:-17.6,kanji:"焼",color:"#ff8e42",dirX:-1},{x:2.02,y:2.3,z:-20.8,kanji:"酒",color:"#ff9e4e",dirX:-1}];for(const V of d){const j=xv(V.kanji,V.color,c,V.dirX);j.position.set(V.x,V.y,V.z),n.add(j),r.push(j.userData.swingPivot)}const g=[{x:-2.42,y:2.15,z:-9.8,rotY:Math.PI/2},{x:-2.42,y:3.15,z:-14.8,rotY:Math.PI/2},{x:2.42,y:2.15,z:-6.6,rotY:-Math.PI/2},{x:2.42,y:3.05,z:-16.8,rotY:-Math.PI/2}];for(const V of g){const j=vv(h,c,l);j.position.set(V.x,V.y,V.z),j.rotation.y=V.rotY,n.add(j)}const v=new he({color:6037536,roughness:.82,metalness:0}),p=new he({color:7756324,roughness:.82,metalness:0}),m=new Nn({color:3546123,roughness:.18,metalness:.02,clearcoat:.65}),M=new Nn({color:1455648,roughness:.18,metalness:.02,clearcoat:.65}),S=Kc(v,m);S.rotation.y=.08,Qt(S,2.34,-8.85,.14),n.add(S);const _=Kc(p,M);_.rotation.y=-.14;const A=new yi().setFromObject(S);Qt(_,2.33,-8.87,A.max.y),n.add(_);const T=Mv(c,f,n);T.group.rotation.y=-Math.PI/2,Qt(T.group,2.7,-11.5,.14),n.add(T.group),s.push({id:"vending",mesh:T.hitMesh,prompt:"[E] Buy Drink (¥140)",interact(){var V;T.dispense(),(V=t.onVendingDispense)==null||V.call(t)}});const x=_v(c);x.rotation.y=-Math.PI/2,Qt(x,2.42,-12.65,.14),n.add(x);for(const V of[-18.7,-19.7]){const j=Sv(u,c);Qt(j,2.26,V,.14),n.add(j)}const w=yv(c);Qt(w,-2.35,-2.65,.14),n.add(w);const U=wv();Qt(U,1.72,-4.1,0),n.add(U);const E=$x();for(const[V,j,se,Re,Ce,q]of[[1,2.34,-5.22,.4,1.04,1580066],[2,2.27,-5.56,1.85,.94,2764598],[3,2.38,-5.84,2.9,.88,1382430]]){const pe=bv(V,E,q);pe.rotation.y=Re,pe.scale.setScalar(Ce),Qt(pe,j,se,.14),n.add(pe)}const P=new lt,I=new C(new ke(.24,.36,.14,2,.015),c);I.castShadow=!0;const z=new C(new xi(.016,8,8),new Bt({color:3735452}));z.position.set(.07,.11,.072),P.add(I,z),P.position.set(-1.94,1.48,-8.48),n.add(P),s.push({id:"neon-breaker",mesh:I,prompt:"[E] Toggle Izakaya Neon",interact(){var j;const V=(j=t.onToggleNeon)==null?void 0:j.call(t);z.material.color.setHex(V?3735452:16728642)}});const L=new lt;L.position.set(2.54,1.35,-22.7);const G=new C(new Fe(.025,.025,.9,10),c);G.position.y=.45;const K=new C(new Sn(.11,.016,8,18),new he({color:10758180,roughness:.48,metalness:.55}));K.rotation.y=Math.PI/2,K.position.x=-.06,L.add(G,K),n.add(L);let W=0,ce=0;return s.push({id:"steam-valve",mesh:K,prompt:"[E] Open Kitchen Steam Valve",interact(){var V;W+=Math.PI*2,(V=t.onSteamBurst)==null||V.call(t)}}),i.add(n),{group:n,interactables:s,update(V,j=.016){for(let se=0;se<r.length;se++)r[se].rotation.z=Math.sin(V*1.7+se*1.1)*.045,r[se].rotation.x=Math.cos(V*1.4+se*.7)*.03;Math.abs(W-ce)>.01&&(ce+=(W-ce)*Math.min(1,j*6),K.rotation.x=ce),T.update(j)}}}function xv(i,e,t,n){const s=new lt,r=new C(new st(.28,.03,.03),t);r.position.set(-n*.14,.28,0),s.add(r);const o=new lt;o.position.set(0,.26,0);const a=new C(new Fe(.008,.008,.12,6),t);a.position.y=-.06,o.add(a);const l=hu(i,e),c=[new B(.06,-.44),new B(.13,-.39),new B(.16,-.28),new B(.13,-.17),new B(.06,-.12)],h=new C(new nn(c,20),new he({map:l.map,emissiveMap:l.emissiveMap,emissive:16777215,emissiveIntensity:1.1,roughness:.75}));o.add(h);for(const u of[-.12,-.44]){const f=new C(new Fe(.068,.068,.025,16),t);f.position.y=u,o.add(f)}return s.add(o),s.userData.swingPivot=o,s}function vv(i,e,t){const n=new lt,s=new C(new ke(.84,.56,.34,3,.025),i);s.castShadow=!0,s.receiveShadow=!0,n.add(s);const r=new C(new Je(.76,.48),new he({map:t,roughness:.65,metalness:.35}));r.position.z=.172,n.add(r);for(const c of[-.28,.28]){const h=new C(new ke(.045,.04,.42,2,.006),e);h.position.set(c,-.3,-.04);const u=new C(new ke(.045,.44,.04,2,.006),e);u.position.set(c,-.49,-.23);const f=new C(new st(.032,.032,.36),e);f.position.set(c,-.44,-.11),f.rotation.x=-.82,n.add(h,u,f)}const o=new Mi([new D(.42,-.18,0),new D(.52,-.22,-.04),new D(.54,-.48,-.14),new D(.54,-.62,-.2)]);n.add(new C(new jn(o,10,.018,8,!1),e));const a=new he({color:9341054,roughness:.72,metalness:.05}),l=new C(new ke(.075,.96,.065,2,.01),a);return l.position.set(.54,.15,-.18),n.add(l),n}function Kc(i,e){const t=new lt,n=.42,s=.3,r=.34,o=new he({color:11965768,roughness:.35,metalness:.78}),a=new he({color:14076592,roughness:.85}),l=new C(new ke(n,.03,r,2,.008),i);l.position.y=.015,l.castShadow=!0,t.add(l);for(const g of[-n/2+.02,n/2-.02])for(const v of[-r/2+.02,r/2-.02]){const p=new C(new ke(.04,s,.04,2,.008),i);p.position.set(g,s/2,v),p.castShadow=!0,t.add(p)}for(const g of[.1,.2,.28]){const v=new C(new st(n,.032,.02),i);v.position.set(0,g,r/2-.01);const p=v.clone();p.position.z=-r/2+.01;const m=new C(new st(.02,.032,r),i);m.position.set(-n/2+.01,g,0);const M=m.clone();M.position.x=n/2-.01,t.add(v,p,m,M)}const c=new C(new Je(.24,.024),a);c.position.set(0,.2,r/2+.002),t.add(c);const h=[new B(0,0),new B(.032,0),new B(.032,.14),new B(.013,.21),new B(.012,.27),new B(.014,.28)],u=new nn(h,12),f=new Fe(.0145,.0145,.012,10),d=new Fe(.033,.033,.065,10,1,!0);for(let g=-1;g<=1;g++)for(let v=-1;v<=1;v++){if(g===1&&v===-1)continue;const p=new C(u,e);p.position.set(g*.1,.03,v*.09),p.rotation.z=((g+v)%2===0?1:-1)*.025,p.castShadow=!0;const m=new C(f,o);m.position.set(g*.1,.31,v*.09);const M=new C(d,a);M.position.set(g*.1,.105,v*.09),t.add(p,m,M)}return t}function Mv(i,e,t){const n=new lt,s=Ox(),r=new he({color:2896960,roughness:.72,metalness:.18}),o=new he({color:1448480,roughness:.65,metalness:.32}),a=new he({color:13357786,roughness:.25,metalness:.88}),l=new C(new ke(1.22,2.02,.72,3,.03),r);l.position.set(0,1.01,-.05),l.castShadow=!0,l.receiveShadow=!0,n.add(l);const c=new C(new st(1.23,.12,.73),o);c.position.set(0,.06,-.05),n.add(c);const h=new C(new Je(1.12,.24),new he({map:s.marqueeMap,emissiveMap:s.marqueeMap,emissive:10143470,emissiveIntensity:.54,roughness:.85,metalness:0}));h.position.set(0,1.84,.314),n.add(h);const u=new he({map:s.panelMap,emissiveMap:s.panelEmissive,emissive:16777215,emissiveIntensity:.62,roughness:.85}),f=new C(new Je(.26,.68),u);f.position.set(.42,1.18,.314),n.add(f);const d=new C(new ke(.82,1.02,.03,2,.008),o);d.position.set(-.14,1.18,.305);const g=new C(new Je(.75,.95),new he({color:2239544,emissive:1450028,emissiveIntensity:.55,roughness:.9,metalness:0}));g.position.set(-.14,1.18,.322),n.add(d,g);const v=new Fe(.033,.033,.098,18,1,!0),p=new Fe(.027,.033,.015,18),m=new Fe(.033,.027,.011,18),M=new Hi(.027,16);M.rotateX(-Math.PI/2);function S(Ce){const q=new lt,pe=new C(v,e[Ce%e.length]);pe.rotation.y=Math.PI;const le=new C(p,a);le.position.y=.056;const Ue=new C(M,a);Ue.position.y=.064;const ge=new C(m,a);return ge.position.y=-.054,q.add(pe,le,Ue,ge),q}const _=[new B(0,0),new B(.028,0),new B(.031,.018),new B(.031,.112),new B(.014,.148),new B(.014,.168),new B(0,.168)],A=new nn(_,16),T=new Fe(.032,.032,.072,18,1,!0),x=[13935656,15261648,8133654,9619694,2513960],w=[15247392,2259160,13376804,15660282,1866816],U=new Bt({color:12771056}),E=new he({color:2830907,roughness:.65,metalness:.25}),P=new Bt({color:2527984}),I=new Bt({color:15219500}),z=new st(.088,.024,.018);for(let Ce=0;Ce<3;Ce++){const q=.84+Ce*.285,pe=new C(new st(.73,.016,.055),E);pe.position.set(-.14,q-.008,.342);const le=new C(new st(.7,.007,.015),U);le.position.set(-.14,q+.205,.338),n.add(pe,le);for(let Ue=0;Ue<5;Ue++){const ge=-.4+Ue*.13,Xe=(Ce*2+Ue)%e.length;if(Ce===2){const Ve=new Nn({color:x[Ue%x.length],roughness:.14,metalness:.05,clearcoat:.9,clearcoatRoughness:.12}),nt=new C(A,Ve);nt.position.set(ge,q,.342);const rt=new C(T,e[Xe]);rt.rotation.y=Math.PI,rt.position.set(ge,q+.068,.342);const oe=new C(new Fe(.0155,.0155,.02,12),new he({color:w[Ue%w.length],roughness:.38}));oe.position.set(ge,q+.17,.342),n.add(nt,rt,oe)}else{const Ve=S(Xe);Ve.position.set(ge,q+.06,.344),n.add(Ve)}const wt=new C(z,Ce===0&&Ue>=2?I:P);wt.position.set(ge,q-.036,.342),n.add(wt)}}const L=new C(new Je(.76,.96),new Nn({color:14413567,transparent:!0,opacity:.11,roughness:.08,metalness:.1,clearcoat:.8,depthWrite:!1}));L.position.set(-.14,1.18,.378),n.add(L);const G=new C(new ke(.82,.26,.05,2,.012),o);G.position.set(-.14,.32,.305);const K=new C(new Je(.74,.19),new Bt({color:329481}));K.position.set(-.14,.32,.332);const W=new C(new ke(.76,.028,.11,2,.006),o);W.position.set(-.14,.21,.35),n.add(G,K,W);const ce=18,V=[];let j=0;function se(){const Ce=Math.floor(Math.random()*e.length);let q;if(V.length<ce){const le=S(Ce);le.castShadow=!0,t.add(le),q={mesh:le,vx:0,vy:0,vz:0,rx:0,rz:0,settled:!1},V.push(q)}else q=V[j%ce],j++,q.mesh.children[0].material=e[Ce];const pe=(Math.random()-.5)*.32;q.mesh.position.set(2.34,.44,-11.36+pe),q.mesh.rotation.set(Math.PI/2,(Math.random()-.5)*.6,Math.random()*Math.PI*2),q.vx=-(.65+Math.random()*.95),q.vy=.35+Math.random()*.45,q.vz=(Math.random()-.5)*.65,q.rx=(Math.random()-.5)*5,q.rz=6+Math.random()*7,q.settled=!1}let Re=0;return{group:n,hitMesh:l,dispense(){Re=.45,u.emissiveIntensity=1.35,se()},update(Ce){Re>0&&(Re-=Ce,Re<=0&&(u.emissiveIntensity=.62));const q=.034;for(let pe=0;pe<V.length;pe++){const le=V[pe];if(le.settled)continue;le.vy-=9.8*Ce,le.mesh.position.x+=le.vx*Ce,le.mesh.position.y+=le.vy*Ce,le.mesh.position.z+=le.vz*Ce;const Ue=le.mesh.position.x>=2.04?.14+q:q;if(le.mesh.position.y<=Ue)if(le.mesh.position.y=Ue,Math.abs(le.vy)>.45)le.vy=-le.vy*.42,le.vx*=.84,le.vz*=.84;else{le.vy=0;const ge=Math.exp(-3.4*Ce);le.vx*=ge,le.vz*=ge,le.rz=-le.vx/q,le.mesh.rotation.x=Oi.lerp(le.mesh.rotation.x,Math.PI/2,Math.min(1,Ce*10))}le.mesh.position.x<-1.85&&(le.mesh.position.x=-1.85,le.vx=Math.abs(le.vx)*.35),le.mesh.rotation.z+=le.rz*Ce,le.vy===0&&Math.hypot(le.vx,le.vz)<.025&&(le.vx=0,le.vz=0,le.rz=0,le.settled=!0)}}}}function _v(i){const e=new lt,t=cv(),n=new he({color:6450036,roughness:.72,metalness:.25}),s=new he({map:t,roughness:.68,metalness:.12}),r=new he({color:2511996,roughness:.56,metalness:.08}),o=new he({color:13686492,roughness:.42,metalness:.15}),a=new Bt({color:329224});for(const d of[-.15,.15])for(const g of[-.14,.14]){const v=new C(new Fe(.022,.025,.03,8),i);v.position.set(d,.015,g),e.add(v)}const l=new C(new ke(.4,.68,.38,2,.015),n);l.position.y=.37,l.castShadow=!0;const c=new C(new Je(.36,.62),s);c.position.set(0,.37,.193),e.add(l,c);const h=new Gs;h.moveTo(-.195,0),h.lineTo(.195,0),h.lineTo(.195,.12),h.lineTo(.11,.24),h.lineTo(-.195,.26),h.closePath();const u=new br(h,{depth:.42,bevelEnabled:!0,bevelThickness:.015,bevelSize:.012,bevelSegments:2});u.rotateY(-Math.PI/2),u.translate(.21,.7,0);const f=new C(u,r);f.castShadow=!0,e.add(f);for(const d of[-.095,.095]){const g=new C(new Sn(.056,.011,8,20),o);g.position.set(d,.875,.16),g.rotation.x=-.62;const v=new C(new Fe(.052,.052,.06,16),a);v.position.set(d,.86,.145),v.rotation.x=Math.PI/2-.62,e.add(g,v)}return e}function Sv(i,e){const t=new lt,n=new C(new Fe(.17,.17,.045,18),i);n.position.y=.56,n.castShadow=!0,t.add(n);for(let r=0;r<4;r++){const o=r*Math.PI/2+Math.PI/4,a=new C(new Fe(.014,.012,.56,8),e);a.position.set(Math.cos(o)*.12,.28,Math.sin(o)*.12),a.rotation.z=Math.cos(o)*.08,a.rotation.x=-Math.sin(o)*.08,a.castShadow=!0,t.add(a)}const s=new C(new Sn(.12,.008,6,18),e);return s.rotation.x=Math.PI/2,s.position.y=.18,t.add(s),t}function yv(i){const e=new lt,t=new C(new Sn(.14,.012,8,18),i);t.rotation.x=Math.PI/2,t.position.y=.52;const n=new C(new Fe(.15,.15,.03,18),i);n.position.y=.015,e.add(t,n);const s=[new B(.008,.06),new B(.014,.22),new B(.025,.42),new B(.023,.56),new B(.009,.62)],r=new nn(s,12),o=new Nn({color:13952754,roughness:.3,transparent:!0,opacity:.55}),a=new he({color:15133165,roughness:.38}),l=new he({color:1974824,roughness:.45}),c=new he({color:1711394,roughness:.85}),h=new Mi([new D(0,.72,0),new D(0,.775,.006),new D(0,.81,.032),new D(0,.79,.06),new D(0,.74,.064)]),u=new jn(h,12,.009,8,!1);for(let f=0;f<3;f++){const d=f*Math.PI*2/3,g=new C(new Fe(.01,.01,.52,8),i);g.position.set(Math.cos(d)*.13,.26,Math.sin(d)*.13),e.add(g);const v=new lt,p=new C(new Fe(.006,.004,.06,8),i);p.position.y=.03;const m=new C(r,o),M=new C(new Fe(.025,.025,.025,12),c);M.position.y=.42;const S=new C(new Fe(.005,.005,.72,8),i);S.position.y=.36;const _=new C(u,f===1?l:a);v.add(p,m,M,S,_),v.position.set(Math.cos(d+.4)*.045,.025,Math.sin(d+.4)*.045),v.rotation.set(.07*Math.sin(d),d*.9,.07*Math.cos(d)),e.add(v)}return e}function wv(){const i=new lt,e=new C(new ke(.34,.04,.34,2,.012),new he({color:1447964,roughness:.88,metalness:0}));e.position.y=.02;const t=[new B(.125,.04),new B(.032,.68),new B(0,.68)],n=new C(new nn(t,20),new he({color:11023900,roughness:.62,metalness:0}));n.castShadow=!0;const s=new he({color:13620958,roughness:.42,metalness:.08}),r=new C(new Fe(.086,.102,.11,20,1,!0),s);r.position.y=.26;const o=new C(new Fe(.056,.072,.11,20,1,!0),s);return o.position.y=.47,i.add(e,n,r,o),i}function bv(i=1,e=null,t=1580066){const n=new lt,s=new Nn({color:t,normalMap:e,normalScale:new B(.65,.65),roughness:.54,metalness:0,clearcoat:.16,clearcoatRoughness:.5}),r=new xi(.24,24,16),o=r.attributes.position;for(let h=0;h<o.count;h++){const u=o.getX(h),f=o.getY(h),d=o.getZ(h),g=Math.atan2(d,u),v=(f+.24)/.48,p=1+.13*Math.sin(g*2+i*1.9)*Math.sin(v*Math.PI)+.08*Math.cos(g*3-i*2.4+f*5),m=(1.22-v*.42)*p,M=1+.045*Math.sin(g*7+f*11+i),S=f<-.12?-.12+(f+.12)*.28:f*(.84+.08*(i%2));o.setXYZ(h,u*m*M,S,d*m*M*.92)}r.computeVertexNormals();const a=new C(r,s);a.position.y=.17,a.castShadow=!0;const l=new C(new Fe(.036,.068,.055,12),s);l.position.set(.015*(i-2),.34,.01),l.rotation.z=.18*(i-2);const c=new C(new Sl(.04,.09,9),s);return c.position.set(.035*(i-2)+.025,.38,.015),c.rotation.z=-.65,n.add(a,l,c),n}function Tv(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Ev(i,e=8){const t=new lt;t.name="YokochoRichDetails";const n=Tv(2026),s=[],r=Cl(e),o=Pl(e),a=new he({map:r.map,color:4534304,roughness:.88,metalness:0}),l=new he({map:o.map,color:3883336,roughness:.62,metalness:.72}),c=new he({color:7097402,roughness:.48,metalness:.68}),h=new he({color:2500910,roughness:.78,metalness:.08}),u=new he({color:6043174,roughness:.62,metalness:.04}),f=new lt;f.userData.skipReflector=!0,t.add(f);const d=Zx(),g=new Je(.085,.085,2,2);g.rotateX(-Math.PI/2);const v=g.attributes.position;for(let H=0;H<v.count;H++){const J=v.getX(H),ue=v.getZ(H);v.setY(H,(J*J+ue*ue)*3.8)}g.computeVertexNormals();const p=new he({map:d,alphaTest:.35,roughness:.36,metalness:0,side:Vt}),m=80,M=new ea(g,p,m),S=new kt,_=new je;for(let H=0;H<m;H++){const J=n()>.5?1:-1,ue=n()<.25,fe=ue?J*(2.12+n()*.32):J*(1.35+n()*.62),Ae=1.8-n()*27.5,He=ue?.144:.008,Ke=.75+n()*.7;S.position.set(fe,He,Ae),S.rotation.set((n()-.5)*.12,n()*Math.PI*2,(n()-.5)*.12),S.scale.set(Ke,1,Ke),S.updateMatrix(),M.setMatrixAt(H,S.matrix),_.setHSL(.05+n()*.07,.42+n()*.22,.36+n()*.18),M.setColorAt(H,_)}M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),f.add(M);const A=new Fe(.026,.028,.095,10);A.rotateZ(Math.PI/2);const T=A.attributes.position;for(let H=0;H<T.count;H++){const J=T.getX(H);Math.abs(J)<.025&&T.setY(H,T.getY(H)*.62)}A.computeVertexNormals();const x=new he({color:10134702,roughness:.44,metalness:.65}),w=new ea(A,x,12),U=[9184292,2377842,2514498,12097090,12502218];for(let H=0;H<12;H++){const J=H%2===0?1:-1;S.position.set(J*(1.76+n()*.22),.025,-1.5-n()*22),S.rotation.set(0,n()*Math.PI*2,0),S.scale.setScalar(.85+n()*.3),S.updateMatrix(),w.setMatrixAt(H,S.matrix),_.setHex(U[H%U.length]),w.setColorAt(H,_)}w.instanceMatrix.needsUpdate=!0,w.instanceColor&&(w.instanceColor.needsUpdate=!0),f.add(w);const E=Jx(),P=new Bt({map:E,transparent:!0,opacity:.65,depthWrite:!1}),I=new Je(1.75,1.75);I.rotateX(-Math.PI/2);for(const[H,J,ue]of[[-.4,-2.6,.3],[.55,-7.2,1.9],[-.35,-13.5,.9],[.42,-18.6,2.5],[-.5,-23.4,1.2],[.15,-31,.4]]){const fe=new C(I,P);fe.position.set(H,.004,J),fe.rotation.y=ue,f.add(fe)}const z=Kx(),L=new he({map:z,alphaTest:.32,roughness:.58,metalness:0,side:Vt});function G(H=1){const J=new lt,ue=[new B(0,0),new B(.11,0),new B(.145,.14),new B(.16,.27),new B(.175,.295),new B(.155,.305),new B(.14,.26)],fe=new C(new nn(ue,16),u);fe.castShadow=!0;const Ae=new C(new Hi(.14,12),new he({color:1709328,roughness:.96}));Ae.rotation.x=-Math.PI/2,Ae.position.y=.26,J.add(fe,Ae);const He=new Je(.24,.54,1,5);He.translate(0,.27,0);const Ke=He.attributes.position;for(let Pe=0;Pe<Ke.count;Pe++){const ht=Ke.getY(Pe)/.54;Ke.setZ(Pe,ht*ht*.2)}He.computeVertexNormals();for(let Pe=0;Pe<7;Pe++){const et=Pe/7*Math.PI*2+Pe%2*.25,ht=new C(He,L);ht.position.y=.25,ht.rotation.y=et,ht.rotation.x=.18+Pe%3*.14;const xt=.82+Pe%3*.16;ht.scale.set(xt,xt,xt),J.add(ht)}return J.scale.setScalar(H),J}const K=G(1);Qt(K,-2.32,-6.18,.14);const W=G(.88);Qt(W,-2.35,-10.55,.14);const ce=G(.92);Qt(ce,2.34,-17.15,.14),t.add(K,W,ce);const V=Rv(l);V.rotation.y=.14,V.rotation.z=-.09,Qt(V,2.26,-1.75,.14),t.add(V);const j=new Fe(.036,.042,.72,8);j.rotateZ(Math.PI/2-.22);const se=36,Re=new ea(j,h,se);for(let H=0;H<se;H++){const J=-.48-H*.21;S.position.set(-2.34,2.74,J),S.rotation.set(0,0,0),S.scale.set(1,1,1),S.updateMatrix(),Re.setMatrixAt(H,S.matrix)}Re.instanceMatrix.needsUpdate=!0,Re.userData.skipReflector=!0,t.add(Re);const Ce=new Fe(.038,.038,7.6,10,1,!0,Math.PI*.5,Math.PI);Ce.rotateX(Math.PI/2);const q=new C(Ce,c);q.position.set(-1.98,2.57,-4.2),t.add(q);const pe=new Mi([new D(-1.98,2.56,-8),new D(-2.12,2.46,-8.22),new D(-2.45,2.38,-8.38),new D(-2.58,2.22,-8.45)]);t.add(new C(new jn(pe,10,.026,8,!1),c));const le=new lt,Ue=new C(new ke(.42,.06,.42,2,.01),a);Ue.position.y=.03;const ge=[new B(0,.06),new B(.175,.06),new B(.205,.24),new B(.21,.34),new B(.202,.44),new B(.175,.56),new B(0,.56)],Xe=new he({map:Vx(),roughness:.92,metalness:0}),wt=new C(new nn(ge,20),Xe);wt.castShadow=!0,le.add(Ue,wt),Qt(le,-2.35,-1.95,.14),t.add(le);const Ve=Av(a);Ve.rotation.y=1.25,Qt(Ve,-2.26,-1.15,.14),t.add(Ve);const nt=[{z:-6.55,title:"醤油麺",price:"八五〇円"},{z:-6.78,title:"味噌麺",price:"九五〇円"},{z:-7.01,title:"焼餃子",price:"四五〇円"}];for(const H of nt){const J=new C(new ke(.025,.54,.17,2,.005),new he({map:Xx(H.title,H.price),roughness:.85,metalness:0}));J.position.set(-2.62,1.82,H.z),t.add(J)}const rt=Yx(),oe=new he({map:rt,roughness:.94,metalness:0,side:Vt}),ve=3.35,Me=.68,Ne=.58,Te=new Je(ve,1,4,12),Qe=Te.attributes.position;for(let H=0;H<Qe.count;H++){const J=Qe.getX(H),fe=(.5-Qe.getY(H))*Math.PI*.5,Ae=Math.sin(fe)*Me,He=Math.cos(fe)*Ne;Qe.setXYZ(H,Ae,He,J)}Te.computeVertexNormals();const Ge=new C(Te,oe);Ge.position.set(-2.64,2.34,-12.2),Ge.castShadow=!0,t.add(Ge);const it=new Gs;it.moveTo(0,0),it.lineTo(0,Ne);for(let H=1;H<=10;H++){const J=H/10*Math.PI*.5;it.lineTo(Math.sin(J)*Me,Math.cos(J)*Ne)}it.lineTo(0,0);const dt=new bl(it);for(const H of[-12.2-ve*.5,-12.2+ve*.5]){const J=new C(dt,oe);J.position.set(-2.64,2.34,H),t.add(J)}const gt=new Je(ve,.18,24,2),O=gt.attributes.position;for(let H=0;H<O.count;H++)if(O.getY(H)<0){const J=O.getX(H);O.setY(H,-.09-Math.abs(Math.sin(J*7.5))*.04)}gt.computeVertexNormals();const Lt=new C(gt,oe);Lt.rotation.y=Math.PI/2,Lt.position.set(-2.64+Me,2.25,-12.2),t.add(Lt);const ct=new Mi([new D(-2.02,2.28,-10.7),new D(-1.98,2.14,-12.2),new D(-2.02,2.28,-13.7)]);t.add(new C(new jn(ct,12,.007,6,!1),l));const At=[new B(.032,-.22),new B(.078,-.18),new B(.088,-.11),new B(.078,-.04),new B(.032,0)],Ee=new nn(At,14),Dt=["酒","焼","飲","呑"];for(let H=0;H<4;H++){const J=.18+H*.21,ue=ct.getPoint(J),fe=hu(Dt[H],H%2===0?"#ff6a3a":"#ffd28c"),Ae=new lt;Ae.position.copy(ue);const He=new C(Ee,new he({map:fe.map,emissiveMap:fe.emissiveMap,emissive:16777215,emissiveIntensity:.78,roughness:.85}));Ae.add(He),t.add(Ae),s.push(Ae)}const qe=new lt,Ze=new C(new ke(.06,.86,1.12,2,.012),a),R=new C(new Je(1.02,.76),new he({map:qx(),roughness:.88}));R.rotation.y=Math.PI/2,R.position.x=.034;const y=new C(new ke(.18,.03,1.18,2,.008),a);y.position.set(.06,.45,0),y.rotation.z=-.22,qe.add(Ze,R,y),qe.position.set(-2.62,1.72,-14.75),t.add(qe);const Y=new he({color:3883595,roughness:.68,metalness:.55}),de=new C(new ke(.62,.06,2.75,2,.012),Y);de.position.set(2.38,2.74,-11.55),de.rotation.z=.2,t.add(de);for(const H of[-10.35,-12.75]){const J=new C(new st(.46,.04,.04),l);J.position.set(2.42,2.58,H),J.rotation.z=-.52,t.add(J)}const ae=[new B(.02,.1),new B(.045,.08),new B(.135,0),new B(.145,-.01)],Se=new nn(ae,16),we=new he({color:1980464,roughness:.42,metalness:.35,side:Vt}),ee=new Bt({color:16766870});for(const H of[-18.3,-20.1]){const J=new lt,ue=new C(new Fe(.006,.006,.24,6),l);ue.position.y=.2;const fe=new C(Se,we),Ae=new C(new xi(.032,10,10),ee);Ae.position.y=.02,J.add(ue,fe,Ae),J.position.set(2.22,2.32,H),t.add(J)}const ie=new C(new ke(.24,.045,3.85,2,.01),a);ie.position.set(2.49,1.12,-19.2),t.add(ie);const ye=[new B(0,0),new B(.045,0),new B(.075,.035),new B(.095,.075),new B(.088,.075),new B(.068,.035)],N=new nn(ye,14),re=new he({color:2500912,roughness:.35,metalness:.05});for(let H=0;H<3;H++){const J=new C(N,re);J.position.set(2.46,1.142+H*.028,-18.55),t.add(J)}const $=[new B(0,0),new B(.024,0),new B(.026,.075),new B(.012,.12),new B(.015,.135)],be=new nn($,12),xe=new he({color:7020566,roughness:.25});for(const H of[-19.4,-19.52]){const J=new C(be,xe);J.position.set(2.46,1.142,H),t.add(J)}const _e=new lt,We=new C(new Fe(.036,.042,3.35,10),l);We.position.y=1.675;const ot=new C(new Fe(.04,.043,.65,10,1,!0),new he({map:fu(),roughness:.58}));ot.position.y=1.15;const me=new he({color:12732436,roughness:.45,metalness:.15,side:Vt}),Ye=new lt;Ye.position.set(.18,3.05,.04),Ye.rotation.y=.56;const $e=new C(new xi(.32,20,12,0,Math.PI*2,0,Math.PI*.45),me);$e.rotation.x=-Math.PI/2,$e.scale.set(1,.35,1);const Le=new C(new Sn(.315,.028,10,28),me),vt=new C(new xi(.305,20,14,0,Math.PI*2,0,Math.PI*.36),new he({color:10662078,roughness:.07,metalness:.96}));vt.rotation.x=Math.PI/2,vt.position.z=-.175;const Ot=new Fe(.34,.34,.15,22,1,!0,Math.PI/2,Math.PI);Ot.rotateX(Math.PI/2);const rn=new C(Ot,me);rn.position.z=.06,Ye.add($e,Le,vt,rn);const ei=new C(new st(.2,.045,.045),l);ei.position.set(.08,3.05,0),_e.add(We,ot,Ye,ei),Qt(_e,-2.18,-24.35,.14),t.add(_e);const bi=new C(new ke(.2,.62,.28,2,.012),new he({color:8067606,roughness:.52,metalness:.32}));bi.position.set(2.55,.48,-7.65);const Un=new C(new Je(.24,.56),new he({map:sv(),roughness:.48}));Un.rotation.y=-Math.PI/2,Un.position.set(2.448,.48,-7.65),t.add(bi,Un);const Fn=new lt,Ti=new C(new ke(.32,.92,.48,2,.015),a);Ti.position.y=.52;const fn=new C(new ke(.38,.08,.54,2,.012),l);fn.position.y=.04;const ti=rv(),ls=new he({map:ti,emissiveMap:ti,emissive:16763e3,emissiveIntensity:.48,roughness:.72});for(const H of[-.163,.163]){const J=new C(new Je(.42,.82),ls);J.rotation.y=H>0?Math.PI/2:-Math.PI/2,J.position.set(H,.52,0),Fn.add(J)}Fn.add(Ti,fn),Fn.rotation.y=.18,Qt(Fn,-2.28,-13.85,.14),t.add(Fn);const ni=new he({map:av(),roughness:.9,metalness:0}),Ei=new he({color:13156530,roughness:.88}),On=new lt,Wi=new C(new ke(.38,.28,.46,2,.01),ni);Wi.position.set(0,.14,0);const dn=new C(new ke(.34,.24,.42,2,.01),ni);dn.position.set(-.02,.4,.03),dn.rotation.y=.16;const mn=new C(new ke(.08,.54,.52,2,.008),ni);mn.position.set(.22,.27,-.05),mn.rotation.z=.14;const Ai=new C(new st(.09,.014,.53),Ei);Ai.position.set(.22,.27,-.05),Ai.rotation.z=.14,On.add(Wi,dn,mn,Ai),Qt(On,2.34,-6.32,.14),t.add(On);const Ri=[{x:-2.635,y:1.56,z:-10.1,rotY:Math.PI/2,tilt:.03,v:0,w:.44,h:.58},{x:-2.635,y:1.48,z:-10.62,rotY:Math.PI/2,tilt:-.04,v:1,w:.38,h:.5},{x:2.635,y:1.58,z:-8.35,rotY:-Math.PI/2,tilt:-.02,v:2,w:.42,h:.56},{x:-2.635,y:1.52,z:-19.2,rotY:Math.PI/2,tilt:.025,v:1,w:.46,h:.6}];for(const H of Ri){const J=new C(new Je(H.w,H.h),new he({map:iv(H.v),roughness:.88}));J.position.set(H.x,H.y,H.z),J.rotation.y=H.rotY,J.rotation.z=H.tilt,t.add(J)}const Xi=new he({color:6055536,roughness:.58,metalness:.42});for(const[H,J,ue]of[[-2.57,-16.4,1],[2.57,-14.2,-1]]){const fe=new C(new ke(.14,.24,.18,2,.015),Xi);fe.position.set(H,1.42,J);const Ae=new C(new Je(.09,.055),new he({color:13685976,roughness:.5}));Ae.rotation.y=ue>0?Math.PI/2:-Math.PI/2,Ae.position.set(H+ue*.072,1.45,J);const He=new C(new Fe(.016,.016,3.6,8),l);He.position.set(H+ue*.02,2,J+.14);const Ke=new C(new ke(.08,.12,.1,2,.01),l);Ke.position.set(H+ue*.02,2.45,J+.14),t.add(fe,Ae,He,Ke)}const Yi=new he({color:3882820,roughness:.9,metalness:.05}),qi=new he({color:10265772,roughness:.35,metalness:.85}),Zi=Zc(!0),b=Zc(!1),F=new he({map:Zi,emissiveMap:Zi,emissive:16758894,emissiveIntensity:.42,roughness:.48}),Q=new he({map:b,emissiveMap:b,emissive:9287910,emissiveIntensity:.36,roughness:.48});for(const[H,J,ue,fe,Ae]of[[2.42,-4.6,-1,2.7,!0],[-2.42,-17.4,1,2.7,!1],[2.42,-14.2,-1,2.6,!1]]){const He=new C(new ke(.62,.13,fe,2,.015),Yi);He.position.set(H,3.55,J);const Ke=new C(new st(.04,.045,fe),l);Ke.position.set(H+ue*.27,4.46,J);const Pe=new C(new st(.03,.03,fe),l);Pe.position.set(H+ue*.27,3.74,J);for(const te of[-1,1]){const ze=new C(new st(.56,.04,.04),l);ze.position.set(H,4.46,J+te*(fe*.5-.03));const De=new C(new st(.04,.9,.04),l);De.position.set(H+ue*.27,4.02,J+te*(fe*.5-.03)),t.add(ze,De)}const et=new C(new Fe(.013,.013,fe-.35,8),qi);et.rotation.x=Math.PI/2,et.position.set(H+ue*.18,4.86,J),t.add(He,Ke,Pe,et);for(let te=J-fe*.42;te<=J+fe*.42+.01;te+=.36){const ze=new C(new st(.022,.88,.022),l);ze.position.set(H+ue*.27,4.02,te),t.add(ze)}const ht=ue>0?-2.63:2.63,xt=new C(new ke(.08,2.08,1.72,2,.01),l);xt.position.set(ht+ue*.02,4.64,J);const k=new C(new Je(1.62,1.98),Ae?F:Q);k.rotation.y=ue>0?Math.PI/2:-Math.PI/2,k.position.set(ht+ue*.065,4.64,J);const ne=new C(new ke(.24,.12,1.92,2,.012),Yi);ne.position.set(ht+ue*.08,5.72,J),t.add(xt,k,ne)}const X=new C(new Je(1.45,2.7),new he({map:ov(),transparent:!0,roughness:.78,depthWrite:!1}));X.rotation.x=-Math.PI/2,X.position.set(0,.004,-25.9),t.add(X);const Z=new Bt({color:263690,transparent:!0,opacity:.38,depthWrite:!1});for(const H of[-1.98,1.98]){const J=new C(new Je(.28,30),Z);J.rotation.x=-Math.PI/2,J.position.set(H,.003,-12.5),t.add(J)}return i.add(t),{group:t,update(H){for(let J=0;J<s.length;J++)s[J].rotation.z=Math.sin(H*2.1+J*1.3)*.055}}}function Av(i){const e=new lt,t=new he({map:Wx(),roughness:.88,metalness:0}),n=new lt;n.position.set(0,.44,.11),n.rotation.x=-.17;const s=new C(new ke(.46,.78,.032,2,.008),i),r=new C(new Je(.4,.68),t);r.position.z=.018,n.add(s,r);const o=new lt;o.position.set(0,.44,-.11),o.rotation.x=.17;const a=new C(new ke(.46,.78,.032,2,.008),i);return o.add(a),e.add(n,o),e}function Rv(i){const e=new lt,t=new he({color:2507834,roughness:.44,metalness:.55}),n=new he({color:1316377,roughness:.9,metalness:0}),s=new he({color:2759700,roughness:.75}),r=new he({color:8226190,roughness:.4,metalness:.8,transparent:!0,opacity:.22,side:Vt}),o=.31,a=new Sn(o,.026,8,22),l=new Sn(o-.022,.01,6,22),c=new Hi(o-.03,18),h=new Fe(.022,.022,.08,10);h.rotateX(Math.PI/2);for(const v of[-.52,.52]){const p=new lt;p.position.set(0,o+.026,v),p.rotation.y=Math.PI/2,p.add(new C(a,n),new C(l,i),new C(c,r),new C(h,i)),e.add(p)}const u=(v,p,m=t)=>{const M=new Mi(v.map(_=>new D(..._))),S=new C(new jn(M,12,p,7,!1),m);S.castShadow=!0,e.add(S)};u([[0,.72,.4],[0,.46,.22],[0,.34,-.02]],.016),u([[0,.34,-.02],[0,.76,-.14]],.016),u([[0,.34,-.02],[0,.34,-.52]],.012),u([[0,.68,-.12],[0,.34,-.52]],.012),u([[0,.84,.37],[0,.34,.52]],.015),u([[.24,.88,.24],[.14,.92,.34],[0,.92,.38],[-.14,.92,.34],[-.24,.88,.24]],.011,i);const f=new C(new ke(.14,.055,.23,2,.025),s);f.position.set(0,.81,-.16),e.add(f);const d=new he({color:3883078,roughness:.55,metalness:.65,wireframe:!0}),g=new C(new Fe(.16,.12,.21,10,3,!0),d);return g.position.set(0,.76,.54),e.add(g),u([[.04,.32,-.45],[.16,.01,-.49]],.008,i),e}function Cv(i){const t=new Je(1,1),n=new Sc;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv,n.instanceCount=1400;const s=new Float32Array(1400*4),r=new Float32Array(1400*2);for(let E=0;E<1400;E++)s[E*4]=(Math.random()-.5)*18,s[E*4+1]=Math.random()*11,s[E*4+2]=(Math.random()-.5)*22,s[E*4+3]=9.5+Math.random()*6.5,r[E*2]=.0032+Math.random()*.0035,r[E*2+1]=.24+Math.random()*.3;n.setAttribute("aSeed",new hr(s,4)),n.setAttribute("aSize",new hr(r,2));const o=new Xt({uniforms:{uTime:{value:0},uCameraPos:{value:new D}},vertexShader:`
      attribute vec4 aSeed;
      attribute vec2 aSize;

      uniform float uTime;
      uniform vec3 uCameraPos;

      varying vec2 vUv;
      varying float vDist;
      varying vec3 vWorldPos;

      void main() {
        vUv = uv;
        vec3 boxSize = vec3(18.0, 11.0, 22.0);
        vec3 halfBox = boxSize * 0.5;
        vec3 windDir = normalize(vec3(0.075, -1.0, 0.025));

        vec3 drift = aSeed.xyz + windDir * (uTime * aSeed.w);
        vec3 rel = mod(drift - uCameraPos + halfBox, boxSize) - halfBox;
        vec3 worldCenter = uCameraPos + rel;

        vec3 toCam = normalize(cameraPosition - worldCenter);
        vec3 sideDir = normalize(cross(windDir, toCam));
        vec3 worldPos = worldCenter + sideDir * (position.x * aSize.x) - windDir * (position.y * aSize.y);

        vWorldPos = worldPos;
        vDist = length(cameraPosition - worldCenter);
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying float vDist;
      varying vec3 vWorldPos;

      float lightHalo(vec3 p, vec3 lightPos, float radius) {
        vec3 d = p - lightPos;
        return exp(-dot(d, d) / (radius * radius));
      }

      void main() {
        float xMask = exp(-pow((vUv.x - 0.5) * 3.8, 2.0));
        float yMask = smoothstep(0.0, 0.16, vUv.y) * smoothstep(1.0, 0.15, vUv.y);
        float groundFade = smoothstep(0.0, 0.22, vWorldPos.y);
        float distFade = smoothstep(0.85, 2.2, vDist) * (1.0 - smoothstep(10.0, 17.5, vDist));

        float shape = xMask * yMask * groundFade * distFade;
        if (shape < 0.004) discard;

        vec3 col = vec3(0.32, 0.38, 0.48) * 0.15;

        float warmPool =
          lightHalo(vWorldPos, vec3(-2.2, 1.8, -4.2), 3.6) * 0.85 +
          lightHalo(vWorldPos, vec3(2.2, 1.8, -19.2), 3.6) * 0.75 +
          lightHalo(vWorldPos, vec3(-1.0, 4.8, -8.65), 4.4) * 0.8 +
          lightHalo(vWorldPos, vec3(1.0, 4.8, -15.65), 4.4) * 0.8;

        float coolPool =
          lightHalo(vWorldPos, vec3(-2.0, 3.9, -12.2), 3.8) * 0.9 +
          lightHalo(vWorldPos, vec3(2.2, 1.5, -11.5), 3.0) * 0.55;

        col += vec3(1.0, 0.68, 0.36) * warmPool * 0.32;
        col += vec3(0.42, 0.86, 1.0) * coolPool * 0.28;

        float alpha = clamp(shape * (0.34 + (warmPool + coolPool) * 0.30), 0.0, 0.52);
        gl_FragColor = vec4(col * alpha, alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:bn,side:Vt}),a=new C(n,o);a.frustumCulled=!1,a.userData.skipGtao=!0,a.userData.skipReflector=!0,a.renderOrder=4,i.add(a);const l=160,c=new Je(.055,.055);c.rotateX(-Math.PI/2);const h=new Sc;h.index=c.index,h.attributes.position=c.attributes.position,h.attributes.uv=c.attributes.uv,h.instanceCount=l;const u=new Float32Array(l*4);for(let E=0;E<l;E++)u[E*4]=(Math.random()-.5)*4,u[E*4+1]=2-Math.random()*35,u[E*4+2]=Math.random(),u[E*4+3]=1.6+Math.random()*1.4;h.setAttribute("aSplash",new hr(u,4));const f=new Xt({uniforms:{uTime:{value:0}},vertexShader:`
      attribute vec4 aSplash;
      uniform float uTime;
      varying vec2 vUv;
      varying float vCycle;
      varying float vDist;
      void main() {
        vUv = uv;
        vCycle = fract(uTime * aSplash.w + aSplash.z);
        float scale = mix(0.2, 1.05, vCycle);
        vec3 worldPos = vec3(aSplash.x + position.x * scale, 0.014, aSplash.y + position.z * scale);
        vDist = length(cameraPosition - worldPos);
        gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying float vCycle;
      varying float vDist;
      void main() {
        float r = length(vUv - 0.5) * 2.0;
        float ring = exp(-pow((r - 0.65) * 4.5, 2.0));
        float life = sin(vCycle * 3.14159265) * (1.0 - vCycle * 0.5);
        float distFade = 1.0 - smoothstep(6.0, 18.0, vDist);
        float alpha = ring * life * distFade * 0.065;
        if (alpha < 0.003) discard;
        gl_FragColor = vec4(vec3(0.68, 0.78, 0.92), alpha);
      }
    `,transparent:!0,depthWrite:!1,blending:bn,side:Vt}),d=new C(h,f);d.frustumCulled=!1,d.userData.skipGtao=!0,d.userData.skipReflector=!0,d.renderOrder=3,i.add(d);const g=Gx(),v=uu(),p=ev(),m=[{x:-1,y:5.45,z:-8.65,col:16762492,glare:.9,beamW:1.9,beamH:2.6,op:.095},{x:1,y:5.45,z:-15.65,col:16762492,glare:.9,beamW:1.9,beamH:2.6,op:.095},{x:-4.65,y:6.29,z:-38.6,col:10277631,glare:1.15,beamW:2.4,beamH:3.1,op:.11},{x:4.85,y:6.29,z:-38.6,col:16757612,glare:1.15,beamW:2.4,beamH:3.1,op:.11}];for(const E of m){const P=new li(new Hn({map:v,color:E.col,transparent:!0,opacity:.56,blending:bn,depthWrite:!1}));P.position.set(E.x,E.y-.03,E.z),P.scale.set(E.glare,E.glare*.62,1),P.userData.skipReflector=!0;const I=new li(new Hn({map:p,color:E.col,transparent:!0,opacity:E.op,blending:bn,depthWrite:!1}));I.position.set(E.x,E.y-E.beamH*.48,E.z),I.scale.set(E.beamW,E.beamH,1),I.userData.skipReflector=!0,i.add(P,I)}const M=[],S=[{x:-4.82,y:1.34,z:-5.42,s:.28,op:.09},{x:-3.94,y:1.12,z:-3.82,s:.14,op:.07},{x:-3.94,y:1.12,z:-4.42,s:.14,op:.07}];for(const E of S)for(let P=0;P<4;P++){const I=new li(new Hn({map:g,color:16049358,transparent:!0,opacity:0,blending:ui,depthWrite:!1}));I.material.rotation=Math.random()*Math.PI*2,I.userData={skipReflector:!0,orig:E,age:P/4,driftZ:(Math.random()-.5)*.12},i.add(I),M.push(I)}const _=[{pos:[-2.02,2.06,-1.95],col:16747578,s:1.05,op:.045},{pos:[-2.02,2.06,-2.98],col:16749636,s:1.05,op:.045},{pos:[-2.02,2.06,-6.25],col:16745010,s:1.05,op:.045},{pos:[-1.82,3.95,-12.2],col:3725550,s:1.85,op:.04},{pos:[1.82,4.05,-10.2],col:16743484,s:1.75,op:.04},{pos:[2.02,2.02,-17.6],col:16749124,s:1.05,op:.045},{pos:[2.02,2.02,-20.8],col:16751180,s:1.05,op:.045}];for(const E of _){const P=new li(new Hn({map:g,color:E.col,transparent:!0,opacity:E.op,blending:bn,depthWrite:!1}));P.position.set(...E.pos),P.scale.set(E.s,E.s,1),P.userData.skipReflector=!0,i.add(P)}const A=[];for(let E=0;E<10;E++){const P=-2-E*3.1,I=P>-8||P<-16&&P>-23,z=new li(new Hn({map:g,color:I?14264444:8101060,transparent:!0,opacity:.042,blending:ui,depthWrite:!1}));z.position.set((Math.random()-.5)*2.2,.85+Math.random()*1.15,P),z.scale.set(3.4+Math.random()*1.8,1.9+Math.random()*.9,1),z.userData={skipReflector:!0,baseX:z.position.x,phase:Math.random()*Math.PI*2,speed:.22+Math.random()*.18},i.add(z),A.push(z)}const T=[];for(let E=0;E<7;E++){const P=new li(new Hn({map:g,color:12374246,transparent:!0,opacity:0,blending:ui,depthWrite:!1}));P.material.rotation=Math.random()*Math.PI*2,P.userData={skipReflector:!0,age:E/7,driftX:(Math.random()-.5)*.35,driftZ:(Math.random()-.5)*.35},i.add(P),T.push(P)}const x=[];for(let E=0;E<20;E++){const P=new li(new Hn({map:g,color:E%2===0?14411247:15785160,transparent:!0,opacity:0,blending:ui,depthWrite:!1}));P.material.rotation=Math.random()*Math.PI*2,P.userData={skipReflector:!0,age:E/20,driftX:-.22-Math.random()*.25,driftZ:(Math.random()-.5)*.34,rotSpeed:(Math.random()-.5)*.45},i.add(P),x.push(P)}let w=0,U=0;return{triggerSteamBurst(){w=3},update(E,P){U+=E,w>0&&(w=Math.max(0,w-E));const I=w>0?1.85:1;o.uniforms.uTime.value=U,o.uniforms.uCameraPos.value.copy(P),f.uniforms.uTime.value=U;for(const z of A){const L=z.userData;z.position.x=L.baseX+Math.sin(U*L.speed+L.phase)*.55}for(const z of T){const L=z.userData;L.age=(L.age+E*.28)%1;const G=L.age;z.position.set(.24+L.driftX*G,.08+G*1.15,-9.4+L.driftZ*G);const K=.28+G*.85;z.scale.set(K,K,1),z.material.opacity=Math.sin(G*Math.PI)*.055}for(const z of M){const L=z.userData;L.age=(L.age+E*.42)%1;const G=L.age;z.position.set(L.orig.x+Math.sin(U*1.8+L.age*6)*.03*G,L.orig.y+G*.46,L.orig.z+L.driftZ*G);const K=L.orig.s*(.7+G*1.45);z.scale.set(K,K*1.15,1),z.material.opacity=Math.sin(G*Math.PI)*L.orig.op}for(const z of x){const L=z.userData;L.age=(L.age+E*.36*I)%1;const G=L.age;z.material.rotation+=L.rotSpeed*E;const K=-.32-Math.pow(G,.72)*(.95+Math.abs(L.driftX)*1.4),W=Math.pow(G,1.45)*2.15;z.position.set(2.08+K*.55+Math.sin(U*1.3+L.age*7)*.1*G,2.02+W,-22.7+L.driftZ*G*1.6);const ce=(.34+G*1.65)*(I>1?1.25:1);z.scale.set(ce,ce*1.05,ce);const V=Math.sin(G*Math.PI)*(1-G*.4);z.material.opacity=V*(I>1?.13:.055)}}}}function Pv(i,e){i.background=new je(330002),i.fog=new Ml(396054,.032);const t=new Sr(e),n=new Ph;n.background=new je(330004);const s=(v,p,m,M,S,_,A)=>{const T=new C(new Je(p,m),new Bt({color:v,side:Vt}));T.position.set(M,S,_),T.rotation.y=A,n.add(T)};s(16749120,6,3,-6,2,2,Math.PI/2),s(4581631,3,4,-6,4,-3,Math.PI/2),s(16742456,3,4,6,4,-2,-Math.PI/2),s(11196671,4,3,6,2,-4,-Math.PI/2),s(1583946,14,14,0,9,0,0);const r=t.fromScene(n,.05);i.environment=r.texture,i.environmentIntensity=.72,t.dispose();const o=new Ed(3100286,724500,.7);i.add(o);const a=new Pd(5011896,.78);a.position.set(-4,14,6),a.target.position.set(0,0,-12),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.radius=3,a.shadow.camera.near=2,a.shadow.camera.far=36,a.shadow.camera.left=-12,a.shadow.camera.right=12,a.shadow.camera.top=16,a.shadow.camera.bottom=-16,a.shadow.bias=-5e-4,i.add(a,a.target);const l=[{x:-1,y:5.42,z:-8.65,tx:.4,tz:-8.8},{x:1,y:5.42,z:-15.65,tx:-.4,tz:-15.8}];for(const v of l){const p=new Qh(16758888,26,17,Math.PI*.44,.78,1.5);p.position.set(v.x,v.y,v.z),p.target.position.set(v.tx,0,v.tz),p.castShadow=!1,i.add(p,p.target)}const c=new er(16751432,4.6,11,1.65);c.position.set(-3.45,2.05,-4.35),i.add(c);const h=new er(4582399,3.2,9.5,1.6);h.position.set(-1.48,3.85,-12.2),i.add(h);const u=new er(13427445,2.8,8.5,1.65);u.position.set(1.42,2.45,-11.3),i.add(u);const f=new er(16750150,3.2,10,1.65);f.position.set(1.32,2.05,-19.2),i.add(f);const d=new er(10406133,22,24,1.6);d.position.set(0,5.6,-33.5),i.add(d);let g=!0;return{setNeonEnabled(v){g=v,h.intensity=v?3.2:0},update(v){if(c.intensity=4.6+.14*Math.sin(v*2.9),f.intensity=3.2+.12*Math.sin(v*3.3+1.4),g){const p=Math.sin(v*34)*Math.sin(v*9)>.95?.72:1;h.intensity=3.2*p}}}}const pi=28,Ui=[{t:0,pos:[0,1.56,2.2],look:[0,1.48,-14],label:"ALLEY ENTRANCE"},{t:3.5,pos:[.35,1.56,-1.6],look:[-1.4,1.6,-5],label:"RAMEN SHOP · 麺屋"},{t:6.2,pos:[.55,1.54,-4],look:[-2.4,1.45,-4.5],label:"RAMEN SHOP · 麺屋"},{t:9.5,pos:[-.25,1.56,-7.8],look:[.2,2.3,-13.5],label:"NEON ALLEY · 居酒屋"},{t:12.5,pos:[-.45,1.56,-10.5],look:[-1.2,3.2,-12.5],label:"NEON ALLEY · 居酒屋"},{t:15.2,pos:[-.35,1.48,-10.8],look:[2.45,1.15,-10.8],label:"VENDING & CRATES"},{t:19,pos:[-.35,1.54,-18.5],look:[2.3,1.65,-20.8],label:"KITCHEN STEAM BAY"},{t:23,pos:[0,1.56,-21.8],look:[0,1.7,-38],label:"SHINJUKU INTERSECTION"},{t:28,pos:[0,1.56,-24.5],look:[0,1.85,-42],label:"SHINJUKU INTERSECTION"}];function Lv(i){const e=Math.max(0,Math.min(1,i));return e*e*(3-2*e)}class Dv{constructor(e){this.camera=e,this._pos=new D,this._nextPos=new D,this._look=new D,this._lastStepPhase=0,this._posPoints=Ui.map(t=>new D(...t.pos)),this._lookPoints=Ui.map(t=>new D(...t.look))}sampleWaypointParam(e){const t=(e%pi+pi)%pi;let n=0;for(let a=0;a<Ui.length-1;a++)if(t>=Ui[a].t&&t<=Ui[a+1].t){n=a;break}const s=Ui[n],r=Ui[Math.min(n+1,Ui.length-1)],o=Math.max(1e-4,r.t-s.t);return{idx:n,localU:Lv((t-s.t)/o),t,label:s.label}}_evalCatmull(e,t,n,s){const r=e.length-1,o=e[Math.max(0,t-1)],a=e[t],l=e[Math.min(r,t+1)],c=e[Math.min(r,t+2)],h=n,u=h*h,f=u*h;return s.set(.5*(2*a.x+(-o.x+l.x)*h+(2*o.x-5*a.x+4*l.x-c.x)*u+(-o.x+3*a.x-3*l.x+c.x)*f),.5*(2*a.y+(-o.y+l.y)*h+(2*o.y-5*a.y+4*l.y-c.y)*u+(-o.y+3*a.y-3*l.y+c.y)*f),.5*(2*a.z+(-o.z+l.z)*h+(2*o.z-5*a.z+4*l.z-c.z)*u+(-o.z+3*a.z-3*l.z+c.z)*f)),s}update(e,t){const n=this.sampleWaypointParam(e);this._evalCatmull(this._posPoints,n.idx,n.localU,this._pos),this._evalCatmull(this._lookPoints,n.idx,n.localU,this._look);const s=.08,r=this.sampleWaypointParam(Math.min(pi-.001,n.t+s));this._evalCatmull(this._posPoints,r.idx,r.localU,this._nextPos);const o=this._nextPos.distanceTo(this._pos)/s,a=Oi.clamp(o/1.4,0,1),l=1.75,c=n.t*l*Math.PI*2,h=Math.floor(n.t*l),u=h!==this._lastStepPhase&&a>.25;this._lastStepPhase=h;const f=Math.sin(c)*.018*a+Math.sin(t*1.3)*.004,d=Math.cos(c*.5)*.012*a,g=Math.cos(c*.5)*.008*a;return this.camera.position.set(this._pos.x+d,this._pos.y+f,this._pos.z),this.camera.lookAt(this._look),this.camera.rotateZ(g),{label:n.label,walkWeight:a,steppedThisFrame:u}}}const Es=new Qn(0,0,0,"YXZ"),As=new D,Iv={type:"change"},Nv={type:"lock"},Uv={type:"unlock"},Jc=.002,Qc=Math.PI/2;class Fv extends Nd{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Ov.bind(this),this._onPointerlockChange=zv.bind(this),this._onPointerlockError=Bv.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;As.setFromMatrixColumn(t.matrix,0),As.crossVectors(t.up,As),t.position.addScaledVector(As,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;As.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(As,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Ov(i){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;Es.setFromQuaternion(e.quaternion),Es.y-=i.movementX*Jc*this.pointerSpeed,Es.x-=i.movementY*Jc*this.pointerSpeed,Es.x=Math.max(Qc-this.maxPolarAngle,Math.min(Qc-this.minPolarAngle,Es.x)),e.quaternion.setFromEuler(Es),this.dispatchEvent(Iv)}function zv(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Nv),this.isLocked=!0):(this.dispatchEvent(Uv),this.isLocked=!1)}function Bv(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const no={minX:-1.88,maxX:1.88,minZ:-25.2,maxZ:2.8},Gv=[[-2.25,-1.6,-9,-8.3],[1.6,2.25,-16,-15.3],[1.45,2,-4.4,-3.8]];class kv{constructor(e,t,n,s,r={}){this.camera=e,this.domElement=n,this.interactables=s,this.callbacks=r,this.enabled=!1,this.controls=new Fv(e,n),this.controls.pointerSpeed=1,this.keys=new Set,this.crouching=!1,this.eyeHeight=1.56,this.bobTime=0,this.lastStepCycle=0,this.velocity=new D,this._forward=new D,this._right=new D,this._wishDir=new D,this._camDir=new D,this._camRight=new D,this._flashOffset=new D(0,-.1,0),this._raycaster=new Id,this._raycaster.far=3.2,this._centerNdc=new B(0,0),this._hitMeshes=s.map(o=>o.mesh),this._rayTimer=0,this._dragging=!1,this._lastMouseX=0,this._lastMouseY=0,this._euler=new Qn(0,0,0,"YXZ"),this.flashlightOn=!1,this.flashlight=new Qh(15594751,0,22,Math.PI*.24,.65,1.5),this.flashlight.castShadow=!1,this.flashlightTarget=new kt,t.add(this.flashlight,this.flashlightTarget),this.flashlight.target=this.flashlightTarget,this.currentTarget=null,this._bindEvents()}_bindEvents(){window.addEventListener("keydown",t=>{this.enabled&&((t.code==="ArrowUp"||t.code==="ArrowDown"||t.code==="ArrowLeft"||t.code==="ArrowRight"||t.code==="Space")&&t.preventDefault(),t.repeat||(t.code==="KeyC"?this.crouching=!this.crouching:t.code==="KeyF"?this.toggleFlashlight():t.code==="KeyE"&&this.interact()),this.keys.add(t.code))}),window.addEventListener("keyup",t=>this.keys.delete(t.code));const e=()=>{this.keys.clear(),this._dragging=!1};window.addEventListener("blur",e),document.addEventListener("visibilitychange",()=>{document.hidden&&e()}),this.domElement.addEventListener("contextmenu",t=>{this.enabled&&t.preventDefault()}),this.domElement.addEventListener("mousedown",t=>{var n,s;if(this.enabled){if(t.button===2){this.toggleFlashlight();return}if(!this.controls.isLocked&&t.button===0){this._dragging=!0,this._lastMouseX=t.clientX,this._lastMouseY=t.clientY;try{Promise.resolve((s=(n=this.domElement).requestPointerLock)==null?void 0:s.call(n)).catch(()=>{})}catch{}}}}),window.addEventListener("mousemove",t=>{if(!this.enabled||!this._dragging||this.controls.isLocked)return;const n=t.clientX-this._lastMouseX,s=t.clientY-this._lastMouseY;this._lastMouseX=t.clientX,this._lastMouseY=t.clientY,this._euler.setFromQuaternion(this.camera.quaternion,"YXZ"),this._euler.y-=n*.0032,this._euler.x=Oi.clamp(this._euler.x-s*.0032,-Math.PI*.44,Math.PI*.44),this.camera.quaternion.setFromEuler(this._euler)}),window.addEventListener("mouseup",()=>{this._dragging=!1})}enter(e=!1){var t,n;this.enabled=!0,this.keys.clear(),this.velocity.set(0,0,0),e||(this.camera.position.set(0,1.56,1.6),this.camera.lookAt(0,1.5,-14)),this._euler.setFromQuaternion(this.camera.quaternion,"YXZ"),this._euler.z=0,this.camera.quaternion.setFromEuler(this._euler);try{Promise.resolve((n=(t=this.domElement).requestPointerLock)==null?void 0:n.call(t)).catch(()=>{})}catch{}}exit(){var e;this.enabled=!1,this._dragging=!1,this.keys.clear(),this.velocity.set(0,0,0),this.flashlight.intensity=0,this.controls.isLocked&&((e=document.exitPointerLock)==null||e.call(document))}toggleFlashlight(){var e,t;this.flashlightOn=!this.flashlightOn,this.flashlight.intensity=this.flashlightOn?10.5:0,(t=(e=this.callbacks).onFlashlightToggle)==null||t.call(e,this.flashlightOn)}interact(){this.currentTarget&&this.currentTarget.interact()}_isWalkable(e,t){if(e<no.minX||e>no.maxX||t<no.minZ||t>no.maxZ)return!1;for(const[n,s,r,o]of Gv)if(e>=n&&e<=s&&t>=r&&t<=o)return!1;return!0}_getZoneLabel(e){return e>-1.5?"ALLEY ENTRANCE":e>-8?"RAMEN SHOP · 麺屋":e>-15.5?"NEON ALLEY · 居酒屋":e>-21.5?"KITCHEN STEAM BAY":"SHINJUKU INTERSECTION"}update(e){const t=(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0)-(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0),n=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),s=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),r=this.crouching?1.55:s?4.8:2.85;this.camera.getWorldDirection(this._forward),this._forward.y=0,this._forward.lengthSq()>1e-4&&this._forward.normalize(),this._right.crossVectors(this._forward,this.camera.up).normalize(),this._wishDir.set(0,0,0),this._wishDir.addScaledVector(this._forward,t),this._wishDir.addScaledVector(this._right,n);const o=this._wishDir.lengthSq()>0;o&&this._wishDir.normalize();const l=1-Math.exp(-(o?38:48)*e);this.velocity.x=Oi.lerp(this.velocity.x,this._wishDir.x*r,l),this.velocity.z=Oi.lerp(this.velocity.z,this._wishDir.z*r,l),!o&&Math.hypot(this.velocity.x,this.velocity.z)<.03&&(this.velocity.x=0,this.velocity.z=0);const c=this.camera.position.x,h=this.camera.position.z,u=c+this.velocity.x*e,f=h+this.velocity.z*e;this._isWalkable(u,h)?this.camera.position.x=u:this.velocity.x=0,this._isWalkable(this.camera.position.x,f)?this.camera.position.z=f:this.velocity.z=0;const d=this.crouching?.96:1.56;this.eyeHeight=Oi.lerp(this.eyeHeight,d,1-Math.exp(-18*e));const g=Math.hypot(this.velocity.x,this.velocity.z),v=Oi.clamp(g/2.2,0,1);let p=!1;if(v>.15){const M=s?2.8:2;this.bobTime+=e*M;const S=Math.floor(this.bobTime);S!==this.lastStepCycle&&(this.lastStepCycle=S,p=!0)}const m=Math.sin(this.bobTime*Math.PI*2)*.016*v;if(this.camera.position.y=this.eyeHeight+m,this.flashlightOn&&(this.camera.getWorldDirection(this._camDir),this._camRight.crossVectors(this._camDir,this.camera.up).normalize(),this.flashlight.position.copy(this.camera.position).addScaledVector(this._camRight,.12).add(this._flashOffset),this.flashlightTarget.position.copy(this.camera.position).addScaledVector(this._camDir,4.5)),this._rayTimer+=e,this._rayTimer>=.08){this._rayTimer=0,this._raycaster.setFromCamera(this._centerNdc,this.camera);const M=this._raycaster.intersectObjects(this._hitMeshes,!1);if(M.length>0){const S=M[0].object;this.currentTarget=this.interactables.find(_=>_.mesh===S)||null}else this.currentTarget=null}return{walkWeight:v,steppedThisFrame:p,label:this._getZoneLabel(this.camera.position.z),targetPrompt:this.currentTarget?this.currentTarget.prompt:"",flashlightOn:this.flashlightOn}}}const ho={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Hs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Hv=new El(-1,1,1,-1,0,1);class Vv extends tn{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}}const Wv=new Vv;class Ll{constructor(e){this._mesh=new C(Wv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Hv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class du extends Hs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bi.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ll(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jc extends Hs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Xv extends Hs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new B);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new du(ho),this.copyPass.material.blending=ts,this.timer=new jh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jc!==void 0&&(o instanceof jc?n=!0:o instanceof Xv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qv extends Hs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Zv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Os extends Hs{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new B(e.x,e.y):new B(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:jt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new en(r,o,{type:jt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new en(r,o,{type:jt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Zv;this.highPassUniforms=Bi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new B(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Bi.clone(ho.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:ho.vertexShader,fragmentShader:ho.fragmentShader,premultipliedAlpha:!0,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new Bt,this._fsQuad=new Ll(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new B(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const s=[],r=[];for(let o=1;o<e;o+=2){const a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new Xt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Os.BlurDirectionX=new B(1,0);Os.BlurDirectionY=new B(0,1);const io={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new B(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},so={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new B(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},la={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new B(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Kv extends Hs{constructor(){super(),this._edgesRT=new en(1,1,{depthBuffer:!1,type:jt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new en(1,1,{depthBuffer:!1,type:jt}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new $t,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=sn,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new $t,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=Wt,this._searchTexture.minFilter=Wt,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Bi.clone(io.uniforms),this._materialEdges=new Xt({defines:Object.assign({},io.defines),uniforms:this._uniformsEdges,vertexShader:io.vertexShader,fragmentShader:io.fragmentShader}),this._uniformsWeights=Bi.clone(so.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new Xt({defines:Object.assign({},so.defines),uniforms:this._uniformsWeights,vertexShader:so.vertexShader,fragmentShader:so.fragmentShader}),this._uniformsBlend=Bi.clone(la.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new Xt({uniforms:this._uniformsBlend,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._fsQuad=new Ll(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Jv={uniforms:{tDiffuse:{value:null},uTime:{value:0},uExposure:{value:1.08}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uExposure;
    varying vec2 vUv;

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.xyx) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    vec3 acesToneMapping(vec3 x) {
      const float a = 2.51;
      const float b = 0.03;
      const float c = 2.43;
      const float d = 0.59;
      const float e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    vec3 linearToSRGB(vec3 c) {
      vec3 higher = 1.055 * pow(max(c, 0.0), vec3(1.0 / 2.4)) - 0.055;
      vec3 lower = c * 12.92;
      return mix(lower, higher, step(vec3(0.0031308), c));
    }

    void main() {
      // Subtle edge optical chromatic aberration
      vec2 fromCenter = vUv - 0.5;
      float ca = length(fromCenter) * 0.0010;
      float r = texture2D(tDiffuse, clamp(vUv + vec2(ca, 0.0), 0.0, 1.0)).r;
      float g = texture2D(tDiffuse, vUv).g;
      float b = texture2D(tDiffuse, clamp(vUv - vec2(ca, 0.0), 0.0, 1.0)).b;
      vec3 col = vec3(r, g, b);

      // Subtle rainy cinema color grading in linear HDR
      float luma = dot(col, vec3(0.299, 0.587, 0.114));
      vec3 shadowTint = vec3(0.90, 0.96, 1.08);
      vec3 hiTint = vec3(1.03, 1.0, 0.96);
      col *= mix(shadowTint, hiTint, smoothstep(0.08, 0.65, luma));

      // ACES Filmic tone mapping + sRGB encoding
      col = acesToneMapping(col * uExposure);
      col = linearToSRGB(col);

      // Subtle clean ISO film grain (tuned for sRGB) + soft peripheral vignette
      float grain = (hash12(vUv * vec2(1280.0, 720.0) + fract(uTime * 19.3) * 100.0) - 0.5) * 0.0075;
      col += grain;

      float dist = length(fromCenter * vec2(1.12, 1.0));
      float vignette = smoothstep(0.98, 0.34, dist);
      col *= mix(0.58, 1.0, vignette);

      gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
    }
  `};function Qv(i,e,t){const n=window.innerWidth,s=window.innerHeight,r=i.getPixelRatio(),o=new en(Math.max(1,Math.floor(n*r)),Math.max(1,Math.floor(s*r)),{type:jt,samples:2});o.texture.name="EffectComposer.MSAA2x";const a=new Yv(i,o);a.setPixelRatio(r),a.setSize(n,s),a.addPass(new qv(e,t));const l=new Os(new B(Math.max(1,Math.floor(n*.25)),Math.max(1,Math.floor(s*.25))),.18,.42,.95);a.addPass(l);const c=new du(Jv);a.addPass(c);const h=new Kv;return h.setSize(Math.max(1,Math.floor(n*r)),Math.max(1,Math.floor(s*r))),a.addPass(h),{composer:a,resize(u,f,d=i.getPixelRatio()){a.setPixelRatio(d),a.setSize(u,f)},update(u){c.uniforms.uTime.value=u}}}function jv(){const i=document.getElementById("hud-clock"),e=document.getElementById("hud-zone-label"),t=document.getElementById("rec-dot"),n=document.getElementById("vu-left"),s=document.getElementById("vu-right"),r=document.getElementById("hud-fps"),o=8,a=[],l=[];for(let p=0;p<o;p++){const m=document.createElement("span");m.className="vu-seg",n.appendChild(m),a.push(m);const M=document.createElement("span");M.className="vu-seg",s.appendChild(M),l.push(M)}let c=-1,h="",u=null,f=-1,d=-1,g=-1,v=-1;return{update(p,m,{walkWeight:M=0,label:S="ALLEY ENTRANCE",fps:_=60}={}){const A=Math.min(28,Math.floor(p));if(A!==c){c=A;const x=String(A).padStart(2,"0");i.textContent=`2026-11-26 02:14:${x}`}S!==h&&(h=S,e.textContent=S);const T=Math.floor(m*2)%2===0;if(T!==u&&(u=T,t.classList.toggle("dim",!T)),r&&(v<0||m-v>=.45)&&(v=m,r.textContent=`${Math.max(1,Math.round(_))} FPS`),g<0||m-g>=.085){g=m;const x=.28+M*.22,w=Math.min(1,Math.max(.12,x+.14*Math.sin(m*13.5))),U=Math.min(1,Math.max(.12,x+.14*Math.cos(m*11.8+.9))),E=Math.round(w*o),P=Math.round(U*o);if(E!==f){f=E;for(let I=0;I<o;I++){const z=I<E;a[I].className=`vu-seg${z?" active":""}${z&&I>=6?" hot":""}`}}if(P!==d){d=P;for(let I=0;I<o;I++){const z=I<P;l[I].className=`vu-seg${z?" active":""}${z&&I>=6?" hot":""}`}}}}}}const $v="./";class e1{constructor(){this.enabled=!1,this.ctx=null,this.master=null,this.noiseBuffer=null,this.buffers={},this.loadingStarted=!1,this.rainLoopStarted=!1,this.steamGain=null,this.steamBurstBoost=0,this.stepIndex=0,this.fallbackRainGain=null}toggle(){return this.ctx||this._init(),this.enabled=!this.enabled,this.ctx.state==="suspended"&&this.enabled&&this.ctx.resume(),this.master.gain.setTargetAtTime(this.enabled?.65:0,this.ctx.currentTime,.1),this.enabled}ensureStarted(){this.enabled||this.toggle()}_init(){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination);const t=this.ctx.sampleRate;this.noiseBuffer=this.ctx.createBuffer(1,t*2,t);const n=this.noiseBuffer.getChannelData(0);for(let c=0;c<n.length;c++)n[c]=Math.random()*2-1;const s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer,s.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=1150,r.Q.value=.55,this.fallbackRainGain=this.ctx.createGain(),this.fallbackRainGain.gain.value=.14,s.connect(r).connect(this.fallbackRainGain).connect(this.master),s.start();const o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer,o.loop=!0;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=145;const l=this.ctx.createGain();l.gain.value=.12,o.connect(a).connect(l).connect(this.master),o.start(),this._loadAllClips()}async _loadAllClips(){if(this.loadingStarted||!this.ctx)return;this.loadingStarted=!0;const e={rain:"audio/rain-alley.mp3",footstep:"audio/footstep-wet.mp3",shoji:"audio/shoji-slide.mp3",vending:"audio/vending-dispense.mp3",steam:"audio/steam-vent.mp3",welcome:"audio/irasshaimase.mp3"};await Promise.all(Object.entries(e).map(async([t,n])=>{try{const s=await fetch(`${$v}${n}`);if(!s.ok)return;const r=await s.arrayBuffer();this.buffers[t]=await this.ctx.decodeAudioData(r),t==="rain"&&!this.rainLoopStarted?this._startRealRainLoop():t==="steam"&&!this.steamGain&&this._startRealSteamLoop()}catch{}}))}_startRealRainLoop(){if(!this.ctx||!this.buffers.rain)return;this.rainLoopStarted=!0;const e=this.ctx.createBufferSource();e.buffer=this.buffers.rain,e.loop=!0;const t=this.ctx.createGain();t.gain.setValueAtTime(.001,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(.58,this.ctx.currentTime+.6),e.connect(t).connect(this.master),e.start(),this.fallbackRainGain&&this.fallbackRainGain.gain.setTargetAtTime(0,this.ctx.currentTime,.25)}_startRealSteamLoop(){if(!this.ctx||!this.buffers.steam)return;const e=this.ctx.createBufferSource();e.buffer=this.buffers.steam,e.loop=!0;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=3200,this.steamGain=this.ctx.createGain(),this.steamGain.gain.value=.02,e.connect(t).connect(this.steamGain).connect(this.master),e.start()}updateSpatial(e,t=.016){if(!(!this.enabled||!this.ctx)&&(this.steamBurstBoost>0&&(this.steamBurstBoost=Math.max(0,this.steamBurstBoost-t*.45)),this.steamGain&&e)){const n=e.x-2.08,s=e.y-2.02,r=e.z- -22.7,o=Math.hypot(n,s,r),a=Math.max(0,1-o/14),l=a*a*.34+this.steamBurstBoost*.42;this.steamGain.gain.setTargetAtTime(l,this.ctx.currentTime,.08)}}triggerFootstep(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime;if(this.buffers.footstep){const r=this.buffers.footstep,o=4,a=Math.min(.48,r.duration/o),l=this.stepIndex%o*(r.duration/o);this.stepIndex++;const c=this.ctx.createBufferSource();c.buffer=r,c.playbackRate.value=.94+Math.random()*.14;const h=this.ctx.createGain();h.gain.setValueAtTime(.001,e),h.gain.linearRampToValueAtTime(.32,e+.02),h.gain.exponentialRampToValueAtTime(.001,e+a),c.connect(h).connect(this.master),c.start(e,l,a);return}const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(620,e),n.frequency.exponentialRampToValueAtTime(190,e+.08);const s=this.ctx.createGain();s.gain.setValueAtTime(.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(n).connect(s).connect(this.master),t.start(e,Math.random()*1.2,.1)}playClick(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="square",t.frequency.setValueAtTime(860,e),t.frequency.exponentialRampToValueAtTime(210,e+.035);const n=this.ctx.createGain();n.gain.setValueAtTime(.14,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(n).connect(this.master),t.start(e),t.stop(e+.045)}playWoodDoor(e=!0){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime;if(this.buffers.shoji){const o=this.ctx.createBufferSource();o.buffer=this.buffers.shoji,o.playbackRate.value=e?1:.92;const a=this.ctx.createGain();if(a.gain.value=.58,o.connect(a).connect(this.master),o.start(t),e&&this.buffers.welcome){const l=this.ctx.createBufferSource();l.buffer=this.buffers.welcome;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.value=2600;const h=this.ctx.createGain();h.gain.value=.32,l.connect(c).connect(h).connect(this.master),l.start(t+.42)}return}const n=this.ctx.createBufferSource();n.buffer=this.noiseBuffer;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(320,t),s.Q.value=2;const r=this.ctx.createGain();r.gain.setValueAtTime(.24,t),r.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(s).connect(r).connect(this.master),n.start(t,.2,.38)}playVendingDispense(){if(!this.enabled||!this.ctx)return;const e=this.ctx.currentTime;if(this.buffers.vending){const s=this.ctx.createBufferSource();s.buffer=this.buffers.vending;const r=this.ctx.createGain();r.gain.value=.62,s.connect(r).connect(this.master),s.start(e);return}const t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.setValueAtTime(140,e),t.frequency.linearRampToValueAtTime(95,e+.22);const n=this.ctx.createGain();n.gain.setValueAtTime(.14,e),n.gain.exponentialRampToValueAtTime(.001,e+.26),t.connect(n).connect(this.master),t.start(e),t.stop(e+.28)}playSteamBurst(){if(!this.enabled||!this.ctx)return;if(this.steamBurstBoost=1,this.buffers.steam){const r=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.buffers.steam,o.playbackRate.value=1.12;const a=this.ctx.createGain();a.gain.setValueAtTime(.01,r),a.gain.linearRampToValueAtTime(.42,r+.12),a.gain.exponentialRampToValueAtTime(.001,r+2.2),o.connect(a).connect(this.master),o.start(r,0,2.3);return}const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.setValueAtTime(1500,e);const s=this.ctx.createGain();s.gain.setValueAtTime(.28,e),s.gain.exponentialRampToValueAtTime(.001,e+1.1),t.connect(n).connect(s).connect(this.master),t.start(e,.1,1.2)}}const pu=document.getElementById("start-overlay"),$c=document.getElementById("load-status"),eh=document.getElementById("load-label"),th=document.getElementById("load-pct"),nh=document.getElementById("load-bar-fill"),mu=document.getElementById("btn-explore"),gu=document.getElementById("btn-autoclip"),t1=document.getElementById("reticle"),tl=document.getElementById("interact-prompt"),n1=document.getElementById("hud-flash"),xu=document.getElementById("btn-play"),vu=document.getElementById("timeline"),i1=document.getElementById("time-readout"),nl=document.getElementById("btn-cam"),Gi=document.getElementById("btn-audio"),ir=document.getElementById("btn-record"),es=()=>new Promise(i=>requestAnimationFrame(()=>requestAnimationFrame(i)));function Fi(i,e){eh&&(eh.textContent=e),th&&(th.textContent=`${i}%`),nh&&(nh.style.width=`${i}%`)}function s1(i,e){const t=new Set,n=["map","normalMap","roughnessMap","emissiveMap","metalnessMap","aoMap"];e.traverse(s=>{const r=Array.isArray(s.material)?s.material:s.material?[s.material]:[];for(const o of r)for(const a of n){const l=o[a];l&&l.isTexture&&!t.has(l)&&(t.add(l),i.initTexture(l))}})}const r1=document.getElementById("c"),zt=new Rx({canvas:r1,antialias:!0,stencil:!1,powerPreference:"high-performance"});zt.setPixelRatio(Math.min(window.devicePixelRatio,1));zt.setSize(window.innerWidth,window.innerHeight);zt.shadowMap.enabled=!0;zt.shadowMap.type=ar;zt.shadowMap.autoUpdate=!1;zt.shadowMap.needsUpdate=!0;zt.toneMapping=Kn;const Cn=new Ph,Zn=new Mn(72,window.innerWidth/window.innerHeight,.18,115),ca=Math.min(8,zt.capabilities.getMaxAnisotropy()),Pn=new e1,o1=jv(),Mu=new Dv(Zn),ft={ready:!1,clipTime:0,paused:!0,mode:"cinematic",realElapsed:0};let Xn=null,il=null,sl=null,rl=null,_u=null,So=null,yr=null,ih="",sh="",yo=!1,ha=1/60,Dl=60;function Vs(i){ft.paused=i,xu.textContent=i?"Play":"Pause"}function as(){pu.classList.add("hidden")}function _i(i,{fromCurrentPose:e=!1}={}){if(!ft.ready)return;ft.mode=i;const t=i==="explore";document.body.classList.toggle("explore-active",t),t1.classList.toggle("hidden",!t),nl.textContent=t?"Auto-Walk":"Explore FPS",nl.classList.toggle("active",t),t?(as(),So.enter(e)):(So.exit(),yo&&(tl.classList.add("hidden"),yo=!1))}function os(i){ft.clipTime=(i%pi+pi)%pi,vu.value=ft.clipTime.toFixed(2),i1.textContent=`${ft.clipTime.toFixed(1).padStart(4,"0")} / ${pi.toFixed(1)}s`}function uo(i){ft.realElapsed+=i,!ft.paused&&ft.mode==="cinematic"&&os(ft.clipTime+i);let e=0,t="ALLEY ENTRANCE",n="FLASH: OFF";if(ft.mode==="cinematic"){const s=Mu.update(ft.clipTime,ft.realElapsed);e=s.walkWeight,t=s.label,s.steppedThisFrame&&!ft.paused&&Pn.triggerFootstep()}else{const s=So.update(i);e=s.walkWeight,t=s.label,n=`FLASH: ${s.flashlightOn?"ON":"OFF"}`;const r=!!s.targetPrompt;r!==yo&&(tl.classList.toggle("hidden",!r),yo=r),r&&s.targetPrompt!==sh&&(tl.textContent=s.targetPrompt,sh=s.targetPrompt),s.steppedThisFrame&&Pn.triggerFootstep()}n!==ih&&(n1.textContent=n,ih=n),Xn.update(ft.realElapsed,i),rl.update(ft.realElapsed,i),_u.update(ft.realElapsed),sl.update(i,Zn.position),il.update(ft.realElapsed),Pn.updateSpatial(Zn.position,i),yr.update(ft.realElapsed),o1.update(ft.clipTime,ft.realElapsed,{walkWeight:e,label:t,fps:Dl}),yr.composer.render()}mu.addEventListener("click",()=>{ft.ready&&(Pn.ensureStarted(),Gi.textContent="Audio: On",Gi.classList.add("active"),_i("explore"))});gu.addEventListener("click",()=>{ft.ready&&(as(),_i("cinematic"),Vs(!1))});xu.addEventListener("click",()=>{ft.ready&&Vs(!ft.paused)});vu.addEventListener("input",i=>{ft.ready&&(as(),_i("cinematic"),os(parseFloat(i.target.value)),Xn.forceReflectorUpdate())});nl.addEventListener("click",()=>{ft.ready&&(ft.mode==="explore"?_i("cinematic"):(Pn.ensureStarted(),Gi.textContent="Audio: On",Gi.classList.add("active"),_i("explore",{fromCurrentPose:!0})))});Gi.addEventListener("click",()=>{if(!ft.ready)return;const i=Pn.toggle();Gi.textContent=`Audio: ${i?"On":"Off"}`,Gi.classList.toggle("active",i)});document.querySelectorAll("[data-jump]").forEach(i=>{i.addEventListener("click",()=>{ft.ready&&(as(),_i("cinematic"),os(parseFloat(i.dataset.jump)),Xn.forceReflectorUpdate())})});let kn=null;ir.addEventListener("click",()=>{if(!ft.ready)return;if(kn&&kn.state==="recording"){kn.stop();return}as();const i=zt.domElement.captureStream(60),e=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm",t=[];kn=new MediaRecorder(i,{mimeType:e,videoBitsPerSecond:12e6}),kn.ondataavailable=n=>{n.data.size>0&&t.push(n.data)},kn.onstop=()=>{ir.textContent="Record Clip",ir.classList.remove("recording");const n=new Blob(t,{type:"video/webm"}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download="yokocho-tokyo-alley.webm",r.click(),URL.revokeObjectURL(s)},_i("cinematic"),os(0),Vs(!1),kn.start(),ir.textContent="Stop Rec",ir.classList.add("recording"),setTimeout(()=>{kn&&kn.state==="recording"&&kn.stop()},pi*1e3)});window.addEventListener("keydown",i=>{ft.ready&&(i.code==="Space"&&ft.mode==="cinematic"?(i.preventDefault(),as(),Vs(!ft.paused)):i.code==="KeyM"?Gi.click():i.code==="KeyH"?document.body.classList.toggle("ui-hidden"):i.code==="Escape"&&ft.mode==="explore"&&pu.classList.toggle("hidden"))});window.addEventListener("resize",()=>{const i=window.innerWidth,e=window.innerHeight,t=Math.min(window.devicePixelRatio,1);Zn.aspect=i/e,Zn.updateProjectionMatrix(),zt.setPixelRatio(t),zt.setSize(i,e),yr&&yr.resize(i,e,t)});Object.assign(window,{renderer:zt,scene:Cn,camera:Zn});window.__YOKOCHO__={setTime(i){ft.ready&&(as(),_i("cinematic"),os(i),Xn.forceReflectorUpdate(),uo(.016))},setPaused:Vs,setMode:_i,getState:()=>({ready:ft.ready,clipTime:ft.clipTime,paused:ft.paused,mode:ft.mode,fps:Math.round(Dl),drawCalls:zt.info.render.calls,triangles:zt.info.render.triangles})};async function a1(){Fi(12,"Building Tokyo alley facades & PBR textures..."),await es(),Xn=dv(Cn,ca),Fi(42,"Configuring night lighting & rain shaders..."),await es(),il=Pv(Cn,zt),sl=Cv(Cn),Fi(62,"Placing grounded props & detailed storefronts..."),await es(),rl=gv(Cn,ca,{onVendingDispense(){Pn.playVendingDispense()},onToggleNeon(){Pn.playClick();const t=Xn.toggleMainNeon();return il.setNeonEnabled(t),t},onSteamBurst(){Pn.playSteamBurst(),sl.triggerSteamBurst()}}),_u=Ev(Cn,ca);const i=[...rl.interactables,...Xn.shojiHitMeshes.map((t,n)=>({id:`shoji-${n}`,mesh:t,prompt:"[E] Slide Ramen Shop Door",interact(){const s=Xn.toggleShojiDoor();zt.shadowMap.needsUpdate=!0,Pn.playWoodDoor(s)}}))];So=new kv(Zn,Cn,zt.domElement,i,{onFlashlightToggle(){Pn.playClick()}}),yr=Qv(zt,Cn,Zn),Fi(78,"Uploading textures to GPU memory..."),await es(),s1(zt,Cn),Fi(88,"Compiling WebGL shaders & baking shadows..."),await es(),Mu.update(.5,0),typeof zt.compileAsync=="function"?await zt.compileAsync(Cn,Zn):zt.compile(Cn,Zn),zt.shadowMap.needsUpdate=!0,Fi(95,"Warming up reflections & post-processing..."),await es();for(const t of[.5,12.5,25.5])os(t),Xn.forceReflectorUpdate(),uo(.016),await es();os(.5),Xn.forceReflectorUpdate(),uo(.016),ft.ready=!0,Fi(100,"Scene ready · Zero-stutter shaders cached"),$c&&$c.classList.add("done"),mu.disabled=!1,gu.disabled=!1,Vs(!1);const e=new jh;e.connect(document),zt.setAnimationLoop(()=>{e.update();const t=Math.min(Math.max(e.getDelta(),.001),.1);ha=ha*.9+t*.1,Dl=1/ha,uo(t)})}a1().catch(i=>{console.error("Failed to initialize YOKOCHO:",i),Fi(0,"Initialization error — check console")});
