import{d as S,r as u,c as b,b as e,i,w as o,v as r,t as p,h as P,s as f,e as I,n as N,o as g,u as x,p as A,f as T,g as $,m as B,_ as E}from"./index-c16f9348.js";const n=d=>(A("data-v-440cc336"),d=d(),T(),d),F=["onSubmit"],q=n(()=>e("small",null,"We'll send your order confirmation here",-1)),D=n(()=>e("small",null,"(8 characters minimum. case sensitive)",-1)),G=n(()=>e("small",null," To get the most out of your Silver/Free membership please enter your address. We may send you exclusive offers based on your location from time to time. ",-1)),L=n(()=>e("small",null,"I have read the links below and accept the Great British Chefs Privacy Policy and Terms and Conditions",-1)),z=n(()=>e("input",{type:"checkbox"},null,-1)),M=n(()=>e("small",null,"I want to receive regular newsletters about new recipes and features from Great British Chefs",-1)),R=n(()=>e("input",{type:"checkbox"},null,-1)),W=n(()=>e("small",null,"I want to receive the competitions newsletter",-1)),Z=["disabled"],j=S({__name:"SignUp",setup(d){const m=$(),k=B(),t=u({email:"",firstname:"",lastname:"",password:"",address:"",city:"",postcode:""}),l=u({email:"",firstname:"",lastname:"",password:""}),v=u(),c=u(!1);u(!1);const C=()=>(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.value.email)||!t.value.email?l.value.email="Invalid Email Address":l.value.email="",t.value.firstname?l.value.firstname="":l.value.firstname="Firstname is required",t.value.lastname?l.value.lastname="":l.value.lastname="Lastname is required",t.value.password?/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g.test(t.value.password)?v.value!=t.value.password?l.value.password="Passwords do not match":l.value.password="":l.value.password="6 to 15 characters which contain at least one special character":l.value.password="Password is required",l.value.email.length==0&&l.value.firstname.length==0&&l.value.lastname.length==0&&l.value.password.length==0),U=()=>{C()&&(k.dispatch("signup/postUserData",t.value),m.push({path:"/restresource.ru"}))};return(H,s)=>{var w,h,y,_;const V=N("router-link");return g(),b("form",{onSubmit:f(U,["prevent"])},[e("label",null,[i(" Email Address* "),o(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>t.value.email=a),type:"text",placeholder:"Enter your Email"},null,512),[[r,t.value.email,void 0,{trim:!0}]]),e("p",null,p((w=l.value)==null?void 0:w.email),1),q]),e("label",null,[i(" First Name* "),o(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>t.value.firstname=a),type:"text",placeholder:"First Name"},null,512),[[r,t.value.firstname,void 0,{trim:!0}]]),e("p",null,p((h=l.value)==null?void 0:h.firstname),1)]),e("label",null,[i(" Last Name* "),o(e("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>t.value.lastname=a),type:"text",placeholder:"Last Name"},null,512),[[r,t.value.lastname,void 0,{trim:!0}]]),e("p",null,p((y=l.value)==null?void 0:y.lastname),1)]),e("label",null,[i(" Password* "),o(e("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>t.value.password=a),type:"password",placeholder:"Password"},null,512),[[r,t.value.password,void 0,{trim:!0}]]),t.value.password?o((g(),b("input",{key:0,"onUpdate:modelValue":s[4]||(s[4]=a=>v.value=a),type:"password",placeholder:"Confirm password"},null,512)),[[r,v.value,void 0,{trim:!0}]]):P("",!0),e("p",null,p((_=l.value)==null?void 0:_.password),1),D]),e("label",null,[i(" Address "),G,o(e("input",{"onUpdate:modelValue":s[5]||(s[5]=a=>t.value.address=a),type:"text",placeholder:"Address line"},null,512),[[r,t.value.address,void 0,{trim:!0}]]),o(e("input",{"onUpdate:modelValue":s[6]||(s[6]=a=>t.value.city=a),type:"text",placeholder:"Town or city"},null,512),[[r,t.value.city,void 0,{trim:!0}]]),o(e("input",{"onUpdate:modelValue":s[7]||(s[7]=a=>t.value.postcode=a),type:"text",placeholder:"Postcode"},null,512),[[r,t.value.postcode,void 0,{trim:!0}]])]),e("div",null,[e("input",{type:"checkbox",onClick:s[8]||(s[8]=a=>c.value=!c.value)}),L,z,M,R,W]),e("div",null,[e("button",{disabled:!c.value},"Register",8,Z),e("button",{onClick:s[9]||(s[9]=f(a=>x(m).push({path:"/restresource.ru"}),["prevent"]))}," Go back ")]),e("p",null,[i(" All rights reserved greatbritishchefs.com Terms and Conditions and "),I(V,{onClick:s[10]||(s[10]=f(a=>x(m).push({path:"/restresource.ru/privacypolicy"}),["prevent"])),to:"#",textContent:`Privacy
      Policy`})])],40,F)}}});const K=E(j,[["__scopeId","data-v-440cc336"]]);export{K as default};
