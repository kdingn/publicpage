(function(t){function e(e){for(var A,a,i=e[0],n=e[1],l=e[2],d=0,u=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(A in n)Object.prototype.hasOwnProperty.call(n,A)&&(t[A]=n[A]);c&&c(e);while(u.length)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],A=!0,i=1;i<o.length;i++){var n=o[i];0!==r[n]&&(A=!1)}A&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var A={},r={app:0},s=[];function a(e){if(A[e])return A[e].exports;var o=A[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=A,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var A in t)a.d(o,A,function(e){return t[e]}.bind(null,A));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=n;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);var A=o("2b0e"),r=o("7496"),s=o("f6c4"),a=function(){var t=this,e=t._self._c;return e(r["a"],[e(s["a"],[e("Header"),e("Main")],1)],1)},i=[],n=o("8336"),l=o("132d"),c=o("adda"),d=o("2fa4"),u=o("71d9"),C=o("2a7f"),p=function(){var t=this,e=t._self._c;return e(u["a"],{attrs:{color:"blue-grey darken-3",flat:""}},[e(c["a"],{staticClass:"mr-1",attrs:{src:o("99dd"),"max-width":"22"}}),e(C["a"],{staticClass:"white--text"},[t._v(t._s(t.title))]),e(d["a"]),e(n["a"],{attrs:{icon:"",href:"https://github.com/kdingn/publicpage"}},[e(l["a"],{attrs:{color:"white",size:"x-large"}},[t._v("mdi-github")])],1)],1)},f=[],h={data:()=>({title:"Musicsheet"})},w=h,g=o("2877"),B=Object(g["a"])(w,p,f,!1,null,null,null),v=B.exports,I=o("b0af"),y=o("99d9"),Q=o("62ad"),b=o("a523"),m=o("169a"),D=o("0fd9"),E=o("b974"),k=o("8654"),H=function(){var t=this,e=t._self._c;return e(b["a"],[e(D["a"],[e(Q["a"],{attrs:{cols:"7"}},[e(k["a"],{attrs:{label:"title",outlined:"",dense:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),e(Q["a"],{attrs:{cols:"5"}},[e(k["a"],{attrs:{label:"composer",outlined:"",dense:""},model:{value:t.composer,callback:function(e){t.composer=e},expression:"composer"}})],1)],1),e(D["a"],[e(Q["a"],{attrs:{cols:"4"}},[e(E["a"],{staticClass:"mt-n8",attrs:{label:"key",outlined:"",dense:"",items:Object.keys(t.rootAll)},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1),e(Q["a"],{attrs:{cols:"8"}},[e(I["a"],{staticClass:"mt-n9 mb-2",attrs:{flat:"",outlined:""}},[e(D["a"],{staticClass:"ma-1"},[e("span",{staticClass:"mt-1 mr-2 ml-2"},[t._v("Transpose")]),e("span",{staticClass:"mt-1"},[t._v(":")]),e(n["a"],{attrs:{icon:""},on:{click:function(e){t.transposeKey(1),t.transposeChords(1)}}},[e(l["a"],{attrs:{size:"18"}},[t._v(" mdi-plus ")])],1),e(n["a"],{staticClass:"ml-n2",attrs:{icon:""},on:{click:function(e){t.transposeKey(11),t.transposeChords(11)}}},[e(l["a"],{attrs:{size:"18"}},[t._v(" mdi-minus ")])],1)],1)],1)],1)],1),t._l(t.rows,(function(o,A){return e("div",{key:A,staticClass:"mb-3"},[e(D["a"],{staticClass:"ml-3"},[e("span",{staticClass:"text-body-2"},[t._v(t._s(o.title))]),e(d["a"]),e(n["a"],{staticClass:"mr-4",attrs:{icon:"","x-small":""},on:{click:function(e){return t.addChord(A)}}},[e(l["a"],[t._v("mdi-plus-box-outline")])],1)],1),e(b["a"],[e(D["a"],{attrs:{"no-gutters":""}},t._l(o.chords,(function(o,r){return e(Q["a"],{key:String(A)+"-"+String(r)},[e(I["a"],{staticClass:"pa-2",attrs:{outlined:"",tile:""},on:{click:function(e){return t.startEdit(A,r)}}},[e("span",{staticClass:"text-body-2"},[t._v(t._s(o.root)+t._s(o.ctype))])])],1)})),1)],1)],1)})),e("div",{staticClass:"text-center"},[e(m["a"],{attrs:{width:"300"},model:{value:t.editMode,callback:function(e){t.editMode=e},expression:"editMode"}},[e(I["a"],[e(y["b"],{staticClass:"mt-n1 blue-grey darken-3 white--text text-body-1"},[t._v(" Edit Chord "),e(d["a"]),0!==t.editRowId||0!==t.editChordId?e("div",[e(n["a"],{attrs:{icon:""},on:{click:function(e){return t.deleteChord()}}},[e(l["a"],{attrs:{color:"red"}},[t._v(" mdi-delete ")])],1)],1):t._e()],1),e(y["a"],{staticClass:"mt-2"},[e(D["a"],[e(Q["a"],[e(E["a"],{attrs:{label:"root",items:Object.keys(t.rootAll)},model:{value:t.rows[t.editRowId].chords[t.editChordId].root,callback:function(e){t.$set(t.rows[t.editRowId].chords[t.editChordId],"root",e)},expression:"rows[editRowId].chords[editChordId].root"}})],1),e(Q["a"],[e(E["a"],{attrs:{label:"type",items:Object.keys(t.ctypeAll)},model:{value:t.rows[t.editRowId].chords[t.editChordId].ctype,callback:function(e){t.$set(t.rows[t.editRowId].chords[t.editChordId],"ctype",e)},expression:"rows[editRowId].chords[editChordId].ctype"}})],1)],1)],1)],1)],1)],1)],2)},M=[];o("14d9");const P=[{C:1},{"C#":2},{Db:2},{D:3},{"D#":4},{Eb:4},{E:5},{F:6},{"F#":7},{Gb:7},{G:8},{"G#":9},{Ab:9},{A:10},{"A#":11},{Bb:11},{B:0}],R=[{"":[1,5,8]},{m:[1,4,8]},{dim:[1,4,7]},{aug:[1,5,9]},{sus4:[1,4,8]},{7:[1,5,8,11]},{m7:[1,4,8,11]},{"△7":[1,5,8,12]},{69:[1,5,10,15]},{m69:[1,4,10,15]},{"φ":[1,4,7,11]}];let F=[];for(let V of P)for(let t of R){let e=[];for(let o of t[Object.keys(t)])e.push((V[Object.keys(V)]+o-1)%12);F.push({root:String(Object.keys(V)),ctype:String(Object.keys(t)),notes:e})}const x={C:1,"C#":2,D:3,Eb:4,E:5,F:6,"F#":7,G:8,Ab:9,A:10,Bb:11,B:0},K={"":[1,5,8],m:[1,4,8],dim:[1,4,7],aug:[1,5,9],sus4:[1,4,8],7:[1,5,8,11],m7:[1,4,8,11],"△7":[1,5,8,12],69:[1,5,10,15],m69:[1,4,10,15],"φ":[1,4,7,11]},X=Object.fromEntries(Object.entries(x).map((function(t){return[t[1],t[0]]})));var j={chordAll:F,rootAll:x,rootAllInverse:X,ctypeAll:K},U={data:()=>({editMode:!1,editRowId:0,editChordId:0,rootAll:j.rootAll,rootAllInverse:j.rootAllInverse,chordAll:j.chordAll,ctypeAll:j.ctypeAll,title:"Now's the time",composer:"Charlie Parker",key:"F",rows:[{title:"01",chords:[{root:"F",ctype:"7"},{root:"Bb",ctype:"7"},{root:"F",ctype:"7"},{root:"F",ctype:"7"}]},{title:"02",chords:[{root:"Bb",ctype:"7"},{root:"Bb",ctype:"7"},{root:"F",ctype:"7"},{root:"A",ctype:"φ"}]},{title:"03",chords:[{root:"G",ctype:"m7"},{root:"C",ctype:"7"},{root:"F",ctype:"7"},{root:"C",ctype:"7"}]}]}),methods:{changeRoot(t,e){return j.rootAllInverse[(j.rootAll[t]+e)%12]},transposeKey(t){this.key=this.changeRoot(this.key,t)},transposeChords(t){for(const e of this.rows)for(const o of e.chords)o.root=this.changeRoot(o.root,t)},addChord(t){this.rows[t].chords.push({root:this.key,ctype:""})},deleteChord(){this.rows[this.editRowId].chords.splice(this.editChordId,1),this.editMode=!1,this.editChordId=0,this.editRowId=0},startEdit(t,e){this.editMode=!0,this.editRowId=t,this.editChordId=e}}},G=U,L=Object(g["a"])(G,H,M,!1,null,null,null),O=L.exports,S={name:"App",components:{Main:O,Header:v},data:()=>({})},Y=S,T=Object(g["a"])(Y,a,i,!1,null,null,null),N=T.exports,z=o("f309");A["a"].use(z["a"]);var J=new z["a"]({});A["a"].config.productionTip=!1,new A["a"]({vuetify:J,render:t=>t(N)}).$mount("#app")},"99dd":function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.5c68ff0b.js.map