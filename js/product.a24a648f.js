(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"0aab":function(t,n,a){},"7db0":function(t,n,a){"use strict";var r=a("23e7"),i=a("b727").find,c=a("44d2"),s=a("ae40"),o="find",e=!0,u=s(o);o in[]&&Array(1)[o]((function(){e=!1})),r({target:"Array",proto:!0,forced:e||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},ae40:function(t,n,a){var r=a("83ab"),i=a("d039"),c=a("5135"),s=Object.defineProperty,o={},e=function(t){throw t};t.exports=function(t,n){if(c(o,t))return o[t];n||(n={});var a=[][t],u=!!c(n,"ACCESSORS")&&n.ACCESSORS,d=c(n,0)?n[0]:e,p=c(n,1)?n[1]:void 0;return o[t]=!!a&&!i((function(){if(u&&!r)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:e}):t[1]=1,a.call(t,d,p)}))}},b727:function(t,n,a){var r=a("0366"),i=a("44ad"),c=a("7b0b"),s=a("50c4"),o=a("65f0"),e=[].push,u=function(t){var n=1==t,a=2==t,u=3==t,d=4==t,p=6==t,_=7==t,l=5==t||p;return function(f,m,v,C){for(var b,y,h=c(f),q=i(h),g=r(m,v,3),w=s(q.length),I=0,k=C||o,x=n?k(f,w):a||_?k(f,0):void 0;w>I;I++)if((l||I in q)&&(b=q[I],y=g(b,I,h),t))if(n)x[I]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return I;case 2:e.call(x,b)}else switch(t){case 4:return!1;case 7:e.call(x,b)}return p?-1:u||d?d:x}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},bfd3:function(t,n,a){"use strict";a("0aab")},d2f1:function(t,n,a){"use strict";a.r(n);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"product__wrapper"},[t.product?a("breadcrumbs",{attrs:{links:[{text:"Home",to:"/"},{text:t.products.CompanyName,to:"/"}],current:t.product.ItemName}}):t._e(),a("div",{staticClass:"product__content"},[a("div",{staticClass:"product__img-container"},[a("img",{attrs:{src:t.product.PhotoName+"?height=250",alt:t.product.ItemName}})]),a("div",{staticClass:"product__information"},[a("span",{staticClass:"product__id"},[t._v(t._s(t.product.ItemID))]),a("h3",{staticClass:"product__name"},[t._v(t._s(t.product.ItemName))]),a("span",{staticClass:"product__price"},[t._v(t._s(t._f("toCurrency")(t.product.BasePrice)))]),a("h4",{staticClass:"product__description-heading"},[t._v("Description")]),a("p",{staticClass:"product__description"},[t._v(t._s(t.product.Description))]),a("span",{staticClass:"product__dimensions"},[t._v(" Dimensions: "+t._s(t.product.Dimensions)+" ")]),a("div",{staticClass:"product__actions-section"},[a("div",{staticClass:"product__quantity-picker"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"product__quantity-input",attrs:{type:"number",id:"quantity",name:"quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}}),a("div",{staticClass:"product__quantity-controls"},[a("span",{staticClass:"product__quantity-control",on:{click:function(n){t.quantity++}}},[t._v(" + ")]),a("span",{staticClass:"product__quantity-control",on:{click:function(n){t.quantity&&t.quantity--}}},[t._v(" - ")])])]),a("div",{staticClass:"product__actions"},[a("fa-icon",{staticClass:"product__like-icon",attrs:{icon:["far","heart"]}}),a("button",{staticClass:"product__cart-btn"},[a("span",[t._v("Add to Cart")]),a("fa-icon",{staticClass:"product__cart-btn-icon",attrs:{icon:"shopping-cart"}})],1)],1)])])])],1)},i=[],c=(a("7db0"),a("55c6")),s=a("b6c6"),o=a("6b27"),e={name:"Product",components:{Breadcrumbs:s["a"]},filters:{toCurrency:o["a"]},data:function(){return{products:c,quantity:1}},computed:{product:function(){var t=this;return this.products.items.find((function(n){return n.ProductID===parseInt(t.$route.params.id)}))}}},u=e,d=(a("bfd3"),a("2877")),p=Object(d["a"])(u,r,i,!1,null,"28d9c331",null);n["default"]=p.exports}}]);
//# sourceMappingURL=product.a24a648f.js.map