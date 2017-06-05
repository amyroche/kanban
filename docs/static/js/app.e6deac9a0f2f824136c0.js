webpackJsonp([1],[,,,,,,,,,,,,,function(t,s,e){e(94);var a=e(2)(e(69),e(116),"data-v-60b1dd3e",null);t.exports=a.exports},function(t,s,e){e(96);var a=e(2)(e(70),e(118),"data-v-fd9f004a",null);t.exports=a.exports},function(t,s,e){"use strict";var a=e(7),o=e.n(a),i=e(119),n=e(106),r=e.n(n),c=e(105),d=e.n(c),l=e(35),u=e.n(l),m=e(36),p=e.n(m),v=e(34),f=e.n(v),h=e(14),_=e.n(h),b=e(13),g=e.n(b),C=e(108),k=e.n(C),x=e(16);e.n(x);o.a.use(i.a),s.a=new i.a({routes:[{path:"/",name:"Home",component:k.a},{path:"/boards",name:"Boards",component:r.a},{path:"/boards/:id",name:"Board",component:d.a},{path:"/boards/:id/lists/:listId",name:"Lists",component:u.a},{path:"/boards/:id/lists/:listId/tasks",name:"Tasks",component:p.a},{path:"/boards/:id/lists/:listId/tasks/:taskId/comments",name:"Comments",component:f.a},{path:"/register",name:"Register",component:_.a},{path:"/login",name:"Login",component:g.a},{path:"*",redirect:"/"}]})},function(t,s,e){e(88);var a=e(2)(e(62),e(110),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,s,e){e(89);var a=e(2)(e(65),e(111),"data-v-17721eac",null);t.exports=a.exports},function(t,s,e){e(90);var a=e(2)(e(68),e(112),"data-v-2392e0e6",null);t.exports=a.exports},function(t,s,e){e(91);var a=e(2)(e(71),e(113),"data-v-41f50306",null);t.exports=a.exports},,,function(t,s,e){"use strict";var a=e(44),o=e.n(a),i=e(15),n=e(7),r=e.n(n),c=e(122);r.a.use(c.a);var d=o.a.create({baseURL:"https://kanban-vue.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),l=o.a.create({baseURL:"https://kanban-vue.herokuapp.com",timeout:2e3,withCredentials:!0}),u={boards:[],activeBoard:{},error:{},user:{},lists:[],tasks:{},comments:{}},m=function(t,s){t.error=s};s.a=new c.a.Store({state:u,mutations:{setBoards:function(t,s){t.boards=s},setActiveBoard:function(t,s){t.activeBoard=s},setLists:function(t,s){t.lists=s},setTasks:function(t,s){r.a.set(t.tasks,s._id,s.tasks)},setComments:function(t,s){r.a.set(t.comments,s._id,s.comments)},setUser:function(t,s){t.user=s}},actions:{getBoards:function(t){var s=t.commit;t.dispatch;d("userboards").then(function(t){s("setBoards",t.data.data)}).catch(m)},getBoard:function(t,s){var e=t.commit;t.dispatch;d("boards/"+s).then(function(t){e("setActiveBoard",t.data.data)}).catch(m)},createBoard:function(t,s){var e=(t.commit,t.dispatch);d.post("boards/",s).then(function(t){e("getBoards")}).catch(m)},removeBoard:function(t,s){t.commit,t.dispatch;d.delete("boards/"+s._id).then(function(t){i.a.push("/")}).catch(m)},getLists:function(t,s){var e=t.commit;t.dispatch;d("boards/"+s+"/lists").then(function(t){e("setLists",t.data.data)}).catch(m)},createList:function(t,s){var e=(t.commit,t.dispatch);d.post("/lists",s).then(function(t){e("getLists",s.boardId)}).catch(m)},editList:function(t){var s=this;d.put("/lists",t).then(function(e){s.getLists(t._id)}).catch(m)},removeList:function(t,s){var e=(t.commit,t.dispatch);d.delete("lists/"+s._id).then(function(t){e("getLists",s.boardId)}).catch(m)},getTasks:function(t,s){var e=t.commit,a=(t.dispatch,s.listId),o=s.boardId;d("boards/"+o+"/lists/"+a+"/tasks").then(function(t){e("setTasks",t.data.data)}).catch(m)},createTask:function(t,s){var e=(t.commit,t.dispatch);d.post("/tasks",s).then(function(t){e("getTasks",{boardId:s.boardId,listId:s.listId})}).catch(m)},removeTask:function(t,s){var e=(t.commit,t.dispatch);d.delete("tasks/"+s._id).then(function(t){e("getTasks",{boardId:s.boardId,listId:s.listId})}).catch(m)},moveTasks:function(t,s){var e=(t.commit,t.dispatch);d.put("tasks/"+s._id,s).then(function(t){e("getTasks",{boardId:s.boardId,listId:s.listId})}).catch(m)},getComments:function(t,s){var e=t.commit,a=(t.dispatch,s.listId),o=s.boardId,i=s.taskId;d("boards/"+o+"/lists/"+a+"/tasks/"+i+"/comments").then(function(t){e("setComments",t.data.data)}).catch(m)},createComment:function(t,s){var e=(t.commit,t.dispatch);d.post("/comments",s).then(function(t){e("getComments",{boardId:s.boardId,listId:s.listId,taskId:s.taskId})}).catch(m)},removeComment:function(t,s){var e=(t.commit,t.dispatch);d.delete("comments/"+s._id).then(function(t){e("getComments",{boardId:s.boardId,listId:s.listId,taskId:s.taskId})}).catch(m)},register:function(t,s){var e=t.commit;t.dispatch;l.post("register",s).then(function(t){if(t.data.error)return m(t.data.error);e("setUser",t.data.data),i.a.push("/boards")}).catch(m)},login:function(t,s){var e=t.commit;t.dispatch;l.post("login",s).then(function(t){e("setUser",t.data.data),i.a.push("/boards")}).catch(m)},getAuth:function(t){var s=t.commit;t.dispatch;l("authenticate").then(function(t){s("setUser",t.data.data),null===u.user?i.a.push("/"):i.a.push("/boards")}).catch(function(t){i.a.push("/login")})},logout:function(t,s){t.commit,t.dispatch;l.delete("logout",s).then(function(t){i.a.push("/")}).catch(m)}}})},function(t,s){},,,,,,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(107),o=e.n(a),i=e(13),n=e.n(i),r=e(14),c=e.n(r);s.default={name:"app",mounted:function(){this.$store.dispatch("getAuth")},components:{Error:o.a,Login:n.a,Register:c.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(35),o=e.n(a);s.default={name:"board",data:function(){return{name:"",description:"",boardId:this.$route.params.id}},mounted:function(){this.$store.dispatch("getBoard",this.$route.params.id),this.lists=this.$store.dispatch("getLists",this.boardId)},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.lists}},components:{Lists:o.a},methods:{createList:function(){this.$store.dispatch("createList",{name:this.name,description:this.description,boardId:this.boardId})},removeBoard:function(t){this.$store.dispatch("removeBoard",t)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"boards",data:function(){return{name:"",description:"",creatorId:this.$store.state.user._id}},mounted:function(){this.$store.dispatch("getBoards")},computed:{boards:function(){return this.$store.state.boards},user:function(){return this.$store.state.user}},methods:{createBoard:function(){this.$store.dispatch("createBoard",{name:this.name,description:this.description,creatorId:this.creatorId})},logout:function(){this.$store.dispatch("logout",this.user)}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"comments",props:["commentProp","commentIndex"],data:function(){return{}},computed:{comments:function(){}},methods:{removeComment:function(t){this.$store.dispatch("removeComment",t)}},components:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"error",computed:{error:function(){return this.$store.state.error}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(13),o=e.n(a),i=e(14),n=e.n(i);s.default={name:"home",mounted:function(){this.$store.dispatch("getAuth")},computed:{},methods:{},components:{Login:o.a,Register:n.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(73),o=e.n(a),i=e(36),n=e.n(i),r=e(121);e.n(r);s.default={name:"lists",props:["listProp","listIndex"],data:function(){return{name:"",description:"",boardId:this.$store.state.activeBoard._id,listId:this.listProp._id}},created:function(){this.$store.dispatch("getTasks",{boardId:this.listProp.boardId,listId:this.listProp._id})},computed:{tasks:function(){return this.$store.state.tasks[this.listProp._id]}},methods:{createTask:function(){this.$store.dispatch("createTask",{name:this.name,description:this.description,boardId:this.boardId,listId:this.listId})},removeList:function(t){this.$store.dispatch("removeList",t)},editList:function(t){this.$store.dispatch("editList",t)},removeTask:function(t){var s=this.tasks[t.target.id];this.$store.dispatch("removeTask",s)},moving:function(t){var s=this.tasks[t.target.id];t.dataTransfer.setData("text/javascript",o()(s))},createTasks:function(t){var s=JSON.parse(t.dataTransfer.getData("text/javascript"));s.listId=this.listProp._id,this.$store.dispatch("moveTasks",s)}},components:{Tasks:n.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"login",data:function(){return{email:"",password:""}},computed:{},methods:{login:function(){this.$store.dispatch("login",{email:this.email,password:this.password})}},components:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"register",data:function(){return{name:"",email:"",password:""}},computed:{},methods:{register:function(){this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password})}},components:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(34),o=e.n(a);s.default={name:"tasks",props:["taskProp","taskIndex"],data:function(){return{name:"",boardId:this.$store.state.activeBoard._id,listId:this.taskProp.listId,taskId:this.taskProp._id}},mounted:function(){this.$store.dispatch("getComments",{boardId:this.taskProp.boardId,listId:this.taskProp.listId,taskId:this.taskProp._id})},computed:{comments:function(){return this.$store.state.comments[this.taskProp._id]}},methods:{removeTask:function(t){this.$store.dispatch("removeTask",t)},createComment:function(){this.$store.dispatch("createComment",{name:this.name,boardId:this.taskProp.boardId,listId:this.taskProp.listId,taskId:this.taskProp._id})}},components:{Comments:o.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(7),o=e.n(a),i=e(16),n=e.n(i),r=e(15),c=e(41),d=e.n(c),l=e(39),u=e(40),m=(e.n(u),d()("https://kanban-vue.herokuapp.com"));m.on("CONNECTED",function(t){console.log(t),m.emit("update",{data:"blarg",boardId:"3289748320"})}),new o.a({el:"#app",store:l.a,router:r.a,template:"<App/>",components:{App:n.a},props:["listId"]})},,,,,,,,,,,,,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,,,,,,function(t,s,e){e(93);var a=e(2)(e(63),e(115),"data-v-5337eb44",null);t.exports=a.exports},function(t,s,e){e(87);var a=e(2)(e(64),e(109),"data-v-0c6e3af6",null);t.exports=a.exports},function(t,s,e){e(92);var a=e(2)(e(66),e(114),"data-v-49c58c80",null);t.exports=a.exports},function(t,s,e){e(95);var a=e(2)(e(67),e(117),"data-v-7958d817",null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"boards"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-6"},[e("h1",{staticClass:"capitalize"},[t._v("Hello, "+t._s(t.user.name)+"!")])]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("p",{staticClass:"logout pull-right"},[e("button",{staticClass:"logout",on:{click:function(s){t.logout(t.user)}}},[t._v("Logout")])])])]),t._v(" "),e("h2",[t._v("Your Boards")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.boards,function(s){return e("div",[e("div",{staticClass:"col-xs-12 col-sm-6 col-md-4"},[e("router-link",{attrs:{to:"/boards/"+s._id}},[e("button",{staticClass:"board"},[t._v(t._s(s.name))])])],1)])})),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("h3",[t._v("Create a new board")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.createBoard(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Board Name",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{rows:"4",cols:"50",placeholder:"Description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Add Board")])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("router-view")],1)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-12"},[e("h1",[t._v("Kanban.")])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comments"},[e("ul",[e("li",[e("div",{staticClass:"pull-right"},[e("button",{staticClass:"delete",on:{click:function(s){t.removeComment(t.commentProp)}}},[t._v("x")])]),t._v("\n  "+t._s(this.commentProp.name))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lists"},[e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"list",attrs:{droppable:"true",ondragover:"event.preventDefault()"},on:{"!drop":function(s){t.createTasks(s)}}},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("div",{staticClass:"pull-right"},[e("button",{staticClass:"delete",on:{click:function(s){t.removeList(t.listProp)}}},[t._v("X")])]),t._v(" "),e("h3",{staticClass:"panel-title"},[t._v(t._s(this.listProp.name))])]),t._v(" "),e("div",{staticClass:"panel-body"},[t._l(this.tasks,function(s,a){return e("div",{key:a,staticClass:"tasks",attrs:{id:a,draggable:"true"},on:{"!dragstart":function(s){t.moving(s)},"!drop":function(s){t.removeTask(s)}}},[e("tasks",{attrs:{"task-prop":s,"task-index":a}})],1)}),t._v(" "),e("div",{staticClass:"add-task"},[e("h5",[t._v("Create a new task")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.createTask(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Task Name",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"task",attrs:{type:"submit"}},[t._v("Create Task")])])])],2)])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tasks"},[e("div",{staticClass:"well well-sm"},[e("div",{staticClass:"pull-right"},[t._v("\n               \n            "),e("button",{staticClass:"delete",on:{click:function(s){t.removeTask(t.taskProp)}}},[t._v("x")])]),t._v(" "),e("h4",[t._v(t._s(this.taskProp.name))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(this.taskProp.description))]),t._v(" "),e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-body"},[e("h5",[t._v("Comments:")]),t._v(" "),t._l(this.comments,function(t,s){return e("div",[e("comments",{attrs:{"comment-prop":t,"comment-index":s}})],1)}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"add-comment"},[e("form",{staticClass:"form-inline",on:{submit:function(s){s.preventDefault(),t.createComment(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add Comment",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"add",attrs:{type:"submit"}},[t._v("Add")])])])],2)])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._v(" \n  Error: "+t._s(t.error)+"\n")])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"board"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-6"},[e("h2",[t._v(t._s(t.board.name))])]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("button",{staticClass:"boards pull-right"},[e("router-link",{attrs:{to:"/boards"}},[t._v("Back to All Boards")])],1),t._v(" "),e("button",{staticClass:"delete pull-right",on:{click:function(s){t.removeBoard(t.board)}}},[t._v("Delete Board")])]),t._v(" "),e("div",{staticClass:"col-xs-12"},[e("p",{staticClass:"description"},[t._v(t._s(t.board.description))])])]),t._v(" "),e("div",{staticClass:"row"},t._l(this.lists,function(t,s){return e("div",[e("lists",{attrs:{"list-prop":t,"list-index":s}})],1)})),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-8"},[e("h4",[t._v("Create a new list")]),t._v(" "),e("div",{staticClass:"add-list"},[e("form",{on:{submit:function(s){s.preventDefault(),t.createList(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"List Name",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{rows:"4",cols:"50",placeholder:"Description"},domProps:{value:t.description},on:{input:function(s){s.target.composing||(t.description=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Create List")])])]),t._v(" "),e("hr")])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("h4",[t._v("Login")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.login(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),e("p",[t._v("Not a member? "),e("router-link",{attrs:{to:"/register"}},[t._v("Register")]),t._v(".")],1)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"home"}},[e("h2",[t._v("Kanban lets you collaborate and get more done.")]),t._v(" "),e("h3",[t._v("Kanban’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding\n          way.\n        ")]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("h4",[t._v("Already use Kanban?")]),t._v(" "),e("button",{staticClass:"btn btn-primary"},[e("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("div",{staticClass:"col-xs-6"},[e("h4",[t._v("New Member?")]),t._v(" "),e("button",{staticClass:"btn btn-primary register"},[e("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"register",attrs:{id:"register"}},[e("h4",[t._v("Register")]),t._v(" "),e("form",{on:{submit:function(s){s.preventDefault(),t.register(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])]),t._v(" "),e("p",[t._v("Already a member? "),e("router-link",{attrs:{to:"/login"}},[t._v("Log in")]),t._v(".")],1)])},staticRenderFns:[]}},,,,,,,function(t,s){}],[72]);
//# sourceMappingURL=app.e6deac9a0f2f824136c0.js.map