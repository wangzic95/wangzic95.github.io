(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d22b28"],{"68e0":function(t,a,e){"use strict";var r=e("9dac"),s=e.n(r);s.a},9941:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-card",{staticClass:"ant-pro-components-tag-select",attrs:{bordered:!1}},[e("a-form",{attrs:{form:t.form,layout:"inline"}},[e("standard-form-row",{staticStyle:{"padding-bottom":"11px"},attrs:{title:"所属类目",block:""}},[e("a-form-item",[e("tag-select",[e("tag-select-option",{attrs:{value:"Category1"}},[t._v("类目一")]),e("tag-select-option",{attrs:{value:"Category2"}},[t._v("类目二")]),e("tag-select-option",{attrs:{value:"Category3"}},[t._v("类目三")]),e("tag-select-option",{attrs:{value:"Category4"}},[t._v("类目四")]),e("tag-select-option",{attrs:{value:"Category5"}},[t._v("类目五")]),e("tag-select-option",{attrs:{value:"Category6"}},[t._v("类目六")]),e("tag-select-option",{attrs:{value:"Category7"}},[t._v("类目七")]),e("tag-select-option",{attrs:{value:"Category8"}},[t._v("类目八")]),e("tag-select-option",{attrs:{value:"Category9"}},[t._v("类目九")]),e("tag-select-option",{attrs:{value:"Category10"}},[t._v("类目十")])],1)],1)],1),e("standard-form-row",{attrs:{title:"其它选项",grid:"",last:""}},[e("a-row",[e("a-col",{attrs:{lg:8,md:10,sm:10,xs:24}},[e("a-form-item",{attrs:{"wrapper-col":{sm:{span:16},xs:{span:24}},label:"作者"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["author"],expression:"['author']"}],staticStyle:{"max-width":"200px",width:"100%"},attrs:{mode:"multiple",placeholder:"不限"},on:{change:t.handleChange}},[e("a-select-option",{attrs:{value:"lisa"}},[t._v("王昭君")])],1)],1)],1),e("a-col",{attrs:{lg:8,md:10,sm:10,xs:24}},[e("a-form-item",{attrs:{"wrapper-col":{sm:{span:16},xs:{span:24}},label:"好评度"}},[e("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["rate"],expression:"['rate']"}],staticStyle:{"max-width":"200px",width:"100%"},attrs:{placeholder:"不限"}},[e("a-select-option",{attrs:{value:"good"}},[t._v("优秀")]),e("a-select-option",{attrs:{value:"normal"}},[t._v("普通")])],1)],1)],1)],1)],1)],1)],1),e("div",{staticClass:"ant-pro-pages-list-projects-cardList"},[e("a-list",{attrs:{loading:t.loading,"data-source":t.data,grid:{gutter:24,xl:4,lg:3,md:3,sm:2,xs:1}},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[e("a-card",{staticClass:"ant-pro-pages-list-projects-card",attrs:{hoverable:""}},[e("img",{attrs:{slot:"cover",src:a.cover,alt:a.title},slot:"cover"}),e("a-card-meta",{attrs:{title:a.title}},[e("template",{slot:"description"},[e("ellipsis",{attrs:{length:50}},[t._v(t._s(a.description))])],1)],2),e("div",{staticClass:"cardItemContent"},[e("span",[t._v(t._s(t._f("fromNow")(a.updatedAt)))]),e("div",{staticClass:"avatarList"},[e("avatar-list",{attrs:{size:"mini"}},t._l(a.members,(function(t,r){return e("avatar-list-item",{key:a.id+"-avatar-"+r,attrs:{src:t.avatar,tips:t.name}})})),1)],1)])],1)],1)}}])})],1)],1)},s=[],o=e("c1df"),i=e.n(o),l=e("2af9"),n=l["t"].Option,c=l["b"].AvatarItem,d={components:{AvatarList:l["b"],AvatarListItem:c,Ellipsis:l["g"],TagSelect:l["t"],TagSelectOption:n,StandardFormRow:l["r"]},data:function(){return{data:[],form:this.$form.createForm(this),loading:!0}},filters:{fromNow:function(t){return i()(t).fromNow()}},mounted:function(){this.getList()},methods:{handleChange:function(t){},getList:function(){var t=this;this.$http.get("/list/article",{params:{count:8}}).then((function(a){t.data=a.result,t.loading=!1}))}}},p=d,m=(e("68e0"),e("2877")),v=Object(m["a"])(p,r,s,!1,null,"d533079c",null);a["default"]=v.exports},"9dac":function(t,a,e){}}]);