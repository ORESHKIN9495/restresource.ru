import{d as y,m as d,c as i,b as t,F as S,r as I,e as c,T as m,q as v,o as f,t as b,s as x,v as $,n as B,u as F,p as U,a as k,g as z,_ as V}from"./index-7bdbfc54.js";const C=l=>(U("data-v-d9ecf172"),l=l(),k(),l),D=C(()=>t("h1",null,"Sign Up",-1)),E=["for"],P=["type","placeholder","onUpdate:modelValue","onFocusin","name"],A=y({__name:"SignIn",setup(l){const _=/^[a-z0-9_-]{3,16}$/,g=/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g,w=z(),n=d(),s=d(!1),u={username:{value:"",placeholder:"Username",err:!1,type:"text",name:"username",errTitle:""},password:{value:"",placeholder:"Password",err:!1,type:"text",name:"password",errTitle:""}},h=e=>{T(e)?console.log("отправляю"):(console.log("Ошибка"),s.value=!0)},T=e=>{if(e.username.value=="")return e.username.err=!0,e.username.errTitle="Поле должно быть заполнено",!1;if(e.username.value.length<3)return e.username.err=!0,e.username.errTitle="Имя пользователя должно быть больше 3 символов",!1;if(_.test(e.username.value))e.username.err=!1,e.username.errTitle="";else return e.username.err=!0,e.username.errTitle="Введите корректное имя пользователя",!1;if(e.password.value=="")return e.password.err=!0,e.password.errTitle="Поле должно быть заполнено",!1;if(e.password.value.length<3)return e.password.err=!0,e.password.errTitle="Пароль должен быть больше 3 символов",!1;if(g.test(e.password.value))e.password.err=!1,e.password.errTitle="";else return e.password.err=!0,e.password.errTitle="Введите корректный пароль",!1;return!0};return(e,a)=>(f(),i("section",null,[t("form",{action:"#",method:"POST",onSubmit:a[2]||(a[2]=v(r=>h(u),["prevent"]))},[D,(f(),i(S,null,I(u,(r,p)=>t("label",{for:r.name},[t("p",null,b(r.errTitle),1),x(t("input",{type:r.type,placeholder:r.placeholder,"onUpdate:modelValue":o=>r.value=o,class:B({active:p==n.value,invalid:r.err}),onFocusin:o=>n.value=p,onFocusout:a[0]||(a[0]=o=>n.value=null),name:r.name},null,42,P),[[$,r.value,void 0,{trim:!0}]])],8,E)),64)),t("span",null,[c(m,{title:"Register",g:!0,type:"submit",disabled:s.value==!s.value},null,8,["disabled"]),c(m,{title:"Go Back",g:!0,onClick:a[1]||(a[1]=v(r=>F(w).push({path:"/"}),["prevent"]))})])],32)]))}});const N=V(A,[["__scopeId","data-v-d9ecf172"]]);export{N as default};