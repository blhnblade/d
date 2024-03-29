"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[31],{31:function(e,t,s){s.r(t),s.d(t,{default:function(){return Z}});s(560);var i=s(3396),a=s(9242);const r=e=>((0,i.dD)("data-v-2cbeba37"),e=e(),(0,i.Cn)(),e),o={class:"main"},c={class:"container"},n={class:"main-wrapper"},d={class:"heading d-flex align-items-center justify-content-between"},l=r((()=>(0,i._)("div",{class:"page-heading"},"Услуги",-1))),u={key:1,class:"job-wrapper d-flex flex-column"},v={key:1};function h(e,t,s,r,h,p){const _=(0,i.up)("Loader"),b=(0,i.up)("CardJob");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",c,[(0,i._)("div",n,[(0,i._)("div",d,[l,(0,i._)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)((e=>this.$router.push("/create")),["prevent"])),class:"button button-m button-blue"},"Создать задание")]),this.loading?((0,i.wg)(),(0,i.j4)(_,{key:0,wrapper:!0})):((0,i.wg)(),(0,i.iD)("div",u,[h.services.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(this.services,((e,t)=>((0,i.wg)(),(0,i.j4)(b,{key:t,service:e,lock:this.requests.includes(e.job_id),onSend:p.sendRequest},null,8,["service","lock","onSend"])))),128)):((0,i.wg)(),(0,i.iD)("div",v,"Пока что ничего нет :("))]))])])])}var p=s(7139);const _=e=>((0,i.dD)("data-v-209c003e"),e=e(),(0,i.Cn)(),e),b={class:"job d-flex align-items-center"},g={class:"job-date"},w={class:"job-left d-flex flex-column"},m={class:"job-name"},k={class:"d-flex flex-column"},f=_((()=>(0,i._)("div",{class:"job-description-heading"},"Описание задачи:",-1))),j={class:"job-description"},y=_((()=>(0,i._)("div",{class:"job-line"},null,-1))),x={class:"job-right"},$={class:"d-flex align-items-center"},q=["src"],C={class:"job-connect d-flex flex-column align-items-center"},D={class:"job-author-name"},I=["disabled"],L=_((()=>(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},[(0,i._)("path",{d:"M22 2L11 13",stroke:"#28282C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,i._)("path",{d:"M22 2L15 22L11 13L2 9L22 2Z",stroke:"#28282C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)));function R(e,t,s,a,r,o){return(0,i.wg)(),(0,i.iD)("div",b,[(0,i._)("div",g,(0,p.zw)(s.service?.date),1),(0,i._)("div",w,[(0,i._)("div",m,(0,p.zw)(s.service.name),1),(0,i._)("div",k,[f,(0,i._)("div",j,(0,p.zw)(s.service.description),1)])]),y,(0,i._)("div",x,[(0,i._)("div",$,[(0,i._)("img",{class:"job-user-avatar",src:s.service.avatarUrl},null,8,q),(0,i._)("div",C,[(0,i._)("div",D,(0,p.zw)(s.service?.creator_name),1),(0,i._)("button",{class:(0,p.C_)(["button button-s button-white job-btn-request",{request:s.lock}]),onClick:t[0]||(t[0]=()=>{this.$emit("send",s.service.job_id,s.service.creator_id,s.service.name)}),disabled:!(s.service.creator_id!==r.userId)||s.lock},[s.lock?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[L,(0,i.Uk)(" Запрос отправлен ")],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)(" Откликнуться ")],64))],10,I)])])])])}var U={props:["service","lock"],data(){return{userId:null}},async mounted(){this.userId=await this.$store.dispatch("getUID")}},z=s(89);const H=(0,z.Z)(U,[["render",R],["__scopeId","data-v-209c003e"]]);var M=H,S={components:{CardJob:M},data(){return{loading:!0,services:null,userId:null}},computed:{requests(){return this.$store.getters.requests}},methods:{async sendRequest(e,t,s){try{this.$store.commit("addRequest",e),await this.$store.dispatch("sendRequest",{job_id:e,creator_id:t,job_name:s}),await this.$store.dispatch("saveRequest",{job_id:e,creator_id:t})}catch(i){console.log("sendRequest",i)}}},async mounted(){try{let e;e=this.$store.getters.info?this.$store.getters.info.city:(await this.$store.dispatch("fetchInfo")).city,console.log(e),this.userId=await this.$store.dispatch("getUID");const t=await this.$store.dispatch("fetchServices",e),s=Object.keys(t).map((async e=>({job_id:e,creator_id:t[e].creator_id,name:t[e].name,description:t[e].description,price:t[e].price,date:t[e].date,creator_name:t[e].creator_name,avatarUrl:await this.$store.dispatch("getAvatarWithId",t[e].creator_id)})));this.services=(await Promise.all(s)).reverse(),this.loading=!1}catch(e){console.log(e,"Ошибка path: /")}}};const Y=(0,z.Z)(S,[["render",h],["__scopeId","data-v-2cbeba37"]]);var Z=Y}}]);
//# sourceMappingURL=31.50143e78.js.map