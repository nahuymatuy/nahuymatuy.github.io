(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a2dd4"],{"0075":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.show,expression:"show"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.show)?t._i(t.show,null)>-1:t.show},on:{change:function(e){var o=t.show,a=e.target,i=!!a.checked;if(Array.isArray(o)){var n=null,c=t._i(o,n);a.checked?c<0&&(t.show=o.concat([n])):c>-1&&(t.show=o.slice(0,c).concat(o.slice(c+1)))}else t.show=i}}}),o("select",{directives:[{name:"model",rawName:"v-model",value:t.src,expression:"src"}],staticStyle:{width:"30em"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.src=e.target.multiple?o:o[0]}}},t._l(t.pdfList,(function(e){return o("option",{domProps:{value:e,textContent:t._s(e)}})})),0),o("input",{directives:[{name:"model",rawName:"v-model.number",value:t.page,expression:"page",modifiers:{number:!0}}],staticStyle:{width:"5em"},attrs:{type:"number"},domProps:{value:t.page},on:{input:function(e){e.target.composing||(t.page=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" /"+t._s(t.numPages)+" "),o("button",{on:{click:function(e){t.rotate+=90}}},[t._v("⟳")]),o("button",{on:{click:function(e){t.rotate-=90}}},[t._v("⟲")]),o("button",{on:{click:function(e){return t.$refs.pdf.print()}}},[t._v("print")]),o("div",{staticStyle:{width:"50%"}},[t.loadedRatio>0&&t.loadedRatio<1?o("div",{staticStyle:{"background-color":"green",color:"white","text-align":"center"},style:{width:100*t.loadedRatio+"%"}},[t._v(t._s(Math.floor(100*t.loadedRatio))+"%")]):t._e(),t.show?o("pdf",{ref:"pdf",staticStyle:{border:"1px solid red"},attrs:{src:t.src,page:t.page,rotate:t.rotate},on:{password:t.password,progress:function(e){t.loadedRatio=e},error:t.error,"num-pages":function(e){t.numPages=e},"link-clicked":function(e){t.page=e}}}):t._e()],1)])},i=[],n=o("858e"),c={components:{pdf:n["a"]},data:function(){return{show:!0,pdfList:["","https://cdn.mozilla.net/pdfjs/tracemonkey.pdf","https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf","https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf","https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf","https://cdn.rawgit.com/sayanee/angularjs-pdf/68066e85/example/pdf/relativity.protected.pdf","data:application/pdf;base64,JVBERi0xLjUKJbXtrvsKMyAwIG9iago8PCAvTGVuZ3RoIDQgMCBSCiAgIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nE2NuwoCQQxF+/mK+wMbk5lkHl+wIFislmIhPhYEi10Lf9/MVgZCAufmZAkMppJ6+ZLUuFWsM3ZXxvzpFNaMYjEriqpCtbZSBOsDzw0zjqPHZYtTrEmz4eto7/0K54t7GfegOGCBbBdDH3+y2zsMsVERc9SoRkXORqKGJupS6/9OmMIUfgypJL4KZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCiAgIDEzOAplbmRvYmoKMiAwIG9iago8PAogICAvRXh0R1N0YXRlIDw8CiAgICAgIC9hMCA8PCAvQ0EgMC42MTE5ODcgL2NhIDAuNjExOTg3ID4+CiAgICAgIC9hMSA8PCAvQ0EgMSAvY2EgMSA+PgogICA+Pgo+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvUGFnZQogICAvUGFyZW50IDEgMCBSCiAgIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NTc0IDg0MS44ODk3NzEgXQogICAvQ29udGVudHMgMyAwIFIKICAgL0dyb3VwIDw8CiAgICAgIC9UeXBlIC9Hcm91cAogICAgICAvUyAvVHJhbnNwYXJlbmN5CiAgICAgIC9DUyAvRGV2aWNlUkdCCiAgID4+CiAgIC9SZXNvdXJjZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzCiAgIC9LaWRzIFsgNSAwIFIgXQogICAvQ291bnQgMQo+PgplbmRvYmoKNiAwIG9iago8PCAvQ3JlYXRvciAoY2Fpcm8gMS4xMS4yIChodHRwOi8vY2Fpcm9ncmFwaGljcy5vcmcpKQogICAvUHJvZHVjZXIgKGNhaXJvIDEuMTEuMiAoaHR0cDovL2NhaXJvZ3JhcGhpY3Mub3JnKSkKPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0NhdGFsb2cKICAgL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA1ODAgMDAwMDAgbiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAyMzAgMDAwMDAgbiAKMDAwMDAwMDM2NiAwMDAwMCBuIAowMDAwMDAwNjQ1IDAwMDAwIG4gCjAwMDAwMDA3NzIgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA4CiAgIC9Sb290IDcgMCBSCiAgIC9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo4MjQKJSVFT0YK"],src:"",loadedRatio:0,page:1,numPages:0,rotate:0}},methods:{password:function(t,e){t(prompt('password is "test"'))},error:function(t){console.log(t)}}},r=c,g=o("2877"),s=Object(g["a"])(r,a,i,!1,null,null,null);e["default"]=s.exports}}]);