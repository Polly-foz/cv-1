parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#style"),e=document.querySelector("#html"),r='\n/* 我要展示画个太极两仪\n * 无极生太极 \n * 首先准备一个div\n */\n#effect{\n    box-shadow: 0 0 3px black;\n    width: 200px;\n    height: 200px;\n}\n/* 将它变成一个圆 */\n#effect{\n    border-radius:50%;\n}\n/* 太极生两仪 \n * 一黑一百\n */\n#effect{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/* 画两个小球 */\n#effect::before{\n    content:"";\n    display:block;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n    position: absolute;\n    top:0;\n    left:50%;\n    transform: translateX(-50%);\n}\n#effect::after{\n    content:"";\n    display:block;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n    position: absolute;\n    bottom:0;\n    left:50%;\n    transform: translateX(-50%);\n}\n/* 太极两仪画完了 */\n',t="",o=0;console.log(r.length);var a=function a(){o>=r.length||(t+="\n"===r[o]?"<br>":r[o],console.log(r),e.innerHTML=t,n.innerHTML=r.substring(0,o+1),window.scrollTo(0,1e5),e.scrollTo(0,1e5),o+=1,setTimeout(function(){a()},0))};a();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.1a24250c.js.map