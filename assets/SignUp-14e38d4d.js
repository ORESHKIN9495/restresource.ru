import{d as S,r as i,c as b,b as e,i as u,w as r,v as n,t as p,h as I,s as g,e as x,o as k,u as N,p as P,f as A,g as B,n as E,m as T,_ as $}from"./index-48addb8e.js";const o=d=>(P("data-v-0663b3ee"),d=d(),A(),d),F=["onSubmit"],q=o(()=>e("small",null,"We'll send your order confirmation here",-1)),D=o(()=>e("small",null,"(8 characters minimum. case sensitive)",-1)),G=o(()=>e("small",null," To get the most out of your Silver/Free membership please enter your address. We may send you exclusive offers based on your location from time to time. ",-1)),L=o(()=>e("small",null,"I have read the links below and accept the Great British Chefs Privacy Policy and Terms and Conditions",-1)),z=o(()=>e("input",{type:"checkbox"},null,-1)),M=o(()=>e("small",null,"I want to receive regular newsletters about new recipes and features from Great British Chefs",-1)),R=o(()=>e("input",{type:"checkbox"},null,-1)),W=o(()=>e("small",null,"I want to receive the competitions newsletter",-1)),Z=["disabled"],j=o(()=>e("a",{href:"https://www.restresource.ru/",target:"_blank"},"www.restresource.ru",-1)),H=S({__name:"SignUp",setup(d){const c=B(),U=T(),t=i({email:"",firstname:"",lastname:"",password:"",address:"",city:"",postcode:""}),l=i({email:"",firstname:"",lastname:"",password:""}),m=i(),v=i(!1);i(!1);const V=()=>(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.value.email)||!t.value.email?l.value.email="Invalid Email Address":l.value.email="",t.value.firstname?l.value.firstname="":l.value.firstname="Firstname is required",t.value.lastname?l.value.lastname="":l.value.lastname="Lastname is required",t.value.password?/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g.test(t.value.password)?m.value!=t.value.password?l.value.password="Passwords do not match":l.value.password="":l.value.password="6 to 15 characters which contain at least one special character":l.value.password="Password is required",l.value.email.length==0&&l.value.firstname.length==0&&l.value.lastname.length==0&&l.value.password.length==0),C=()=>{V()&&(U.dispatch("signup/postUserData",t.value),c.push({path:"/restresource.ru"}))};return(J,s)=>{var f,h,y,_;const w=E("router-link");return k(),b("form",{onSubmit:g(C,["prevent"])},[e("label",null,[u(" Email Address* "),r(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>t.value.email=a),type:"text",placeholder:"Enter your Email"},null,512),[[n,t.value.email,void 0,{trim:!0}]]),e("p",null,p((f=l.value)==null?void 0:f.email),1),q]),e("label",null,[u(" First Name* "),r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>t.value.firstname=a),type:"text",placeholder:"First Name"},null,512),[[n,t.value.firstname,void 0,{trim:!0}]]),e("p",null,p((h=l.value)==null?void 0:h.firstname),1)]),e("label",null,[u(" Last Name* "),r(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>t.value.lastname=a),type:"text",placeholder:"Last Name"},null,512),[[n,t.value.lastname,void 0,{trim:!0}]]),e("p",null,p((y=l.value)==null?void 0:y.lastname),1)]),e("label",null,[u(" Password* "),r(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>t.value.password=a),type:"password",placeholder:"Password"},null,512),[[n,t.value.password,void 0,{trim:!0}]]),t.value.password?r((k(),b("input",{key:0,"onUpdate:modelValue":s[4]||(s[4]=a=>m.value=a),type:"password",placeholder:"Confirm password"},null,512)),[[n,m.value,void 0,{trim:!0}]]):I("",!0),e("p",null,p((_=l.value)==null?void 0:_.password),1),D]),e("label",null,[u(" Address "),G,r(e("input",{"onUpdate:modelValue":s[5]||(s[5]=a=>t.value.address=a),type:"text",placeholder:"Address line"},null,512),[[n,t.value.address,void 0,{trim:!0}]]),r(e("input",{"onUpdate:modelValue":s[6]||(s[6]=a=>t.value.city=a),type:"text",placeholder:"Town or city"},null,512),[[n,t.value.city,void 0,{trim:!0}]]),r(e("input",{"onUpdate:modelValue":s[7]||(s[7]=a=>t.value.postcode=a),type:"text",placeholder:"Postcode"},null,512),[[n,t.value.postcode,void 0,{trim:!0}]])]),e("div",null,[e("input",{type:"checkbox",onClick:s[8]||(s[8]=a=>v.value=!v.value)}),L,z,M,R,W]),e("div",null,[e("button",{disabled:!v.value},"Register",8,Z),e("button",{onClick:s[9]||(s[9]=g(a=>N(c).push({path:"/restresource.ru"}),["prevent"]))}," Go back ")]),e("span",null,[u(" Все права защищены "),j,e("p",null,[x(w,{to:"/restresource.ru/policyagreement",textContent:"Пользовательское соглашение"}),u(" и "),x(w,{to:"/restresource.ru/privacypolicy",textContent:"Соглашение о конфиденциальности"})])])],40,F)}}});const O=$(H,[["__scopeId","data-v-0663b3ee"]]);export{O as default};