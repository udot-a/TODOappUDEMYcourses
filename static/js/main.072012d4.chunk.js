(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{1:function(e,t,n){e.exports={tall:"style_tall__2wVQX",todoList:"style_todoList__2AprT",todoApp:"style_todoApp__3lQKo",topPanel:"style_topPanel__LLvTB",searchInput:"style_searchInput__2iVm9",todoListItem:"style_todoListItem__9oXGC",todoListItemLabel:"style_todoListItemLabel__2GXUg",done:"style_done__kysMl",important:"style_important__15bmQ",appHeader:"style_appHeader__10CY-",itemAddForm:"style_itemAddForm__2Oz2F"}},10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=n(9),i=n(2),s=n(17),u=n(1),m=n.n(u),d=function(e){var t=e.toDo,n=e.done,a=m.a.appHeader;return r.a.createElement("div",{className:"".concat(a," d-flex")},r.a.createElement("h1",null,"Todo List"),r.a.createElement("h2",null,t," more to do, ",n," done"))},f=function(e){var t=e.changeSearch,n=e.searchString,a=m.a.searchInput;return r.a.createElement("input",{className:"form-control ".concat(a),type:"text",placeholder:"search...",onChange:function(e){var n=e.target.value;t(n)},value:n})},p=n(4),b=n.n(p),h=function(e){var t=e.filter,n=e.changeFilter,a=function(e){var t=e.target.textContent;n(t)};return r.a.createElement("div",{className:"btn-group"},["All","Active","Done"].map((function(e,n){return r.a.createElement("button",{key:n,type:"button",className:b()("btn",t===e?"btn btn-info":"btn-outline-secondary"),onClick:a},e)})))},_=n(5),v=function(e){var t,n,o=e.label,c=e.id,l=e.isDone,i=e.important,s=Object(a.useContext)(y),u=s.delItem,d=s.setImportantDone,f=m.a.tall,p=m.a.todoListItem,h=m.a.todoListItemLabel,v=m.a.done;return r.a.createElement("span",{className:b()((t={},Object(_.a)(t,p,!0),Object(_.a)(t,v,l),t))},r.a.createElement("span",{className:b()((n={},Object(_.a)(n,h,!0),Object(_.a)(n,f,i),n)),onClick:d(c,"isDone")},o),r.a.createElement("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:d(c)},r.a.createElement("i",{className:"fa fa-exclamation"})),r.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:u(c)},r.a.createElement("i",{className:"fa fa-trash-o"})))},E=function(e){var t=e.todoData,n=e.searchString,a=m.a.todoList;return t.length?r.a.createElement("ul",{className:"list-group ".concat(a)},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},r.a.createElement(v,e))}))):n.length>0?r.a.createElement("h4",{className:"d-flex justify-content-center align-items-center m-5"},"Search items not found!!!"):r.a.createElement("h4",{className:"d-flex justify-content-center align-items-center m-5"},"List is empty!!!")},g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1],c=m.a.itemAddForm,l=Object(a.useContext)(y).addItem;return r.a.createElement("form",{className:"".concat(c," d-flex"),onSubmit:function(e){e.preventDefault(),n.trim()&&(l(n),o(""))}},r.a.createElement("input",{className:"form-control",type:"text",onChange:function(e){var t=e.target.value;return o(t)},placeholder:"Type your new todo item...",value:n}),r.a.createElement("button",{className:"btn btn-outline-secondary",type:"submit"},"Add"))},y=r.a.createContext(null),N=function(){var e=m.a.todoApp,t=function(e){return{label:e,important:!1,isDone:!1,id:Object(s.a)()}},n=Object(a.useState)([t("Drink coffee"),t("Learn React"),t("Have a launch"),t("Angular tutorial")]),o=Object(i.a)(n,2),c=o[0],u=o[1],p=Object(a.useState)(""),b=Object(i.a)(p,2),_=b[0],v=b[1],N=Object(a.useState)("All"),j=Object(i.a)(N,2),I=j[0],L=j[1],O=function(e){return function(){return u(c.filter((function(t){return t.id!==e})))}},D=c.reduce((function(e,t){return t.isDone?++e:e}),0);return r.a.createElement(y.Provider,{value:{delItem:O,addItem:function(e){return u([].concat(Object(l.a)(c),[t(e)]))},setImportantDone:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"important";return function(){return u((function(n){return n.map((function(n){return n.id===e&&(n[t]=!n[t]),n}))}))}}}},r.a.createElement("div",{className:e},r.a.createElement(d,{toDo:c.length-D,done:D}),r.a.createElement("div",{className:"top-panel d-flex"},r.a.createElement(f,{searchString:_,changeSearch:function(e){return v(e)}}),r.a.createElement(h,{filter:I,changeFilter:function(e){return L(e)}})),r.a.createElement(E,{todoData:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=t;return"Active"===e&&(a=t.filter((function(e){return!e.isDone}))),"Done"===e&&(a=t.filter((function(e){return e.isDone}))),""!==n&&(a=a.filter((function(e){return e.label.toUpperCase().includes(n.toUpperCase())}))),a}(I,c,_),delItem:O,searchString:_}),r.a.createElement(g,null)))};c.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.072012d4.chunk.js.map