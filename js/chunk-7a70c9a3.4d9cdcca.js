(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a70c9a3"],{"000d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"submit-form"},[t.submitted?i("div",[i("h4",[t._v("You submitted successfully!")]),i("button",{staticClass:"btn btn-success",on:{click:t.newTutorial}},[t._v("Add")])]):i("div",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"title"}},[t._v("Title")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.tutorial.title,expression:"tutorial.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",required:"",name:"title"},domProps:{value:t.tutorial.title},on:{input:function(e){e.target.composing||t.$set(t.tutorial,"title",e.target.value)}}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"description"}},[t._v("Description")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.tutorial.description,expression:"tutorial.description"}],staticClass:"form-control",attrs:{id:"description",required:"",name:"description"},domProps:{value:t.tutorial.description},on:{input:function(e){e.target.composing||t.$set(t.tutorial,"description",e.target.value)}}})]),i("button",{staticClass:"btn btn-success",on:{click:t.saveTutorial}},[t._v("Submit")])])])},o=[],a=(i("a4d3"),i("e01a"),i("f652")),s={name:"add-tutorial",data:function(){return{tutorial:{title:"",description:"",published:!1},submitted:!1}},methods:{saveTutorial:function(){var t=this,e={title:this.tutorial.title,description:this.tutorial.description,published:!1};a["a"].create(e).then((function(){console.log("Created new item successfully!"),t.submitted=!0})).catch((function(t){console.log(t)}))},newTutorial:function(){this.submitted=!1,this.tutorial={title:"",description:"",published:!1}}}},u=s,r=(i("a771"),i("2877")),l=Object(r["a"])(u,n,o,!1,null,null,null);e["default"]=l.exports},3021:function(t,e,i){},a771:function(t,e,i){"use strict";var n=i("3021"),o=i.n(n);o.a},f652:function(t,e,i){"use strict";var n=i("d4ec"),o=i("bee2"),a=i("dc59"),s=a["a"].ref("/tutorials"),u=function(){function t(){Object(n["a"])(this,t)}return Object(o["a"])(t,[{key:"getAll",value:function(){return s}},{key:"create",value:function(t){return s.push(t)}},{key:"update",value:function(t,e){return s.child(t).update(e)}},{key:"delete",value:function(t){return s.child(t).remove()}},{key:"deleteAll",value:function(){return s.remove()}}]),t}();e["a"]=new u}}]);