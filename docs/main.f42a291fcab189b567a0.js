/*! For license information please see main.f42a291fcab189b567a0.js.LICENSE.txt */
(()=>{"use strict";var e={370:()=>{!function(e,t){let o=[];for(let e=0;e<3;e++)o.push("ABC")}()}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}(()=>{var e,t;!function(e){e.Book1=class{}}(e||(e={})),console.log(e,"A"),function(e){e.Cat=class{eat(){console.log("zoo cat")}}}(t||(t={})),new t.Cat;let n,s=4;s="maybe it is a string",s=!0,n=123,n="yanyun",[1,9,9,3,"333"].push(9);let r=["changfeng",28];r[0]="yanyunchangfeng",r.push("yanger"),console.log(r,"user"),Symbol("key"),Symbol("key"),console.log(111);const l=BigInt(Number.MAX_SAFE_INTEGER);var c,a,i;console.log(l+BigInt(1)===l+BigInt(2)),console.log(l+1n===l+2n),function(e){e[e.GIRL=0]="GIRL",e[e.BOY=1]="BOY"}(c||(c={})),console.log(c.BOY,c[1]),console.log(c.GIRL,c[0]),function(e){e[e.RED=0]="RED",e[e.YELLOW=1]="YELLOW",e[e.BLUE=2]="BLUE"}(a||(a={})),console.log(a.BLUE),a.RED,a.YELLOW,a.BLUE,function(e){e.USER="a",e[e.ADMIN=1]="ADMIN",e[e.MANAGER=2]="MANAGER"}(i||(i={})),console.log(i.USER),document.getElementById("root").style.color="red";let u,g,y,f=document.getElementById("root");f.style.color="green",f?.style?.color,f.style.color="red",f.style.color="red",u=1,u=void 0,u=null,g=void 0,y=1,y.toFixed(),y="abc",y.toLowerCase();class p{constructor(e){this.name=e}run(){return`${this.name} is running`}}new p("lily"),new class extends p{bark(){return`${this.name} is barking`}}("xiaoao");const d=new class extends p{constructor(e){super(e)}run(){return"Meow,"+super.run()}}("maomao");console.log(d.run()),new class{constructor(e,t,...o){this.x=e,this.y=t}}(1,2,3,4,5,6);class m{constructor(e,t){this.name=e,this.age=t}static getName(){return"动物类"}say(){console.log("say")}}m.type="动物";class h extends m{constructor(e,t,o){super(e,t),this.address="",this._eat="",this.address=o}static getName(){return console.log(super.getName()),"猫"}say(){super.say(),console.log("cat say")}get eat(){return this._eat}set eat(e){this._eat=e}}let E=new h("缅因猫",10,"杭州");console.log(h.getName()),E.eat="hello",console.log(E.eat);var R=function(e,t,o,n){var s,r=arguments.length,l=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(l=(r<3?s(l):r>3?s(t,o,l):s(t,o))||l);return r>3&&l&&Object.defineProperty(t,o,l),l},b=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let v=class{constructor(){this.name="zhufeng"}getName(e,t){}};var B,L;v.age=10,R([function(e,t){let o=e[t];Object.defineProperty(e,t,{get:()=>o.toUpperCase(),set(e){o=e}})},b("design:type",String)],v.prototype,"name",void 0),R([function(e,t,o){o.enumerable=!1},(B=1,L=function(e,t,o){console.log(e,t,o)},function(e,t){L(e,t,B)}),b("design:type",Function),b("design:paramtypes",[String,String]),b("design:returntype",void 0)],v.prototype,"getName",null),R([(3,function(e,t){let o=e[t];Object.defineProperty(e,t,{get:()=>3*o,set(e){o=e}})}),b("design:type",Number)],v,"age",void 0),v=R([function(e){e.prototype.say=function(){console.log("say")}}],v);let N=new v;console.log(N.name),console.log(v.age),N.say(),o(370),console.log("yanyunchangfeng")})()})();