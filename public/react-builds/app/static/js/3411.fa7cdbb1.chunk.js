"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[3411,1011],{15908:(e,t,a)=>{a.d(t,{C:()=>i});const i=a(94574).Ay.div`
  border: 1px solid #e2e4e9;
  border-radius: 12px;
  width: 100%;
  /* width: calc(${e=>{let{width:t}=e;return t}} - 10px); */
  min-height: 100px;
  overflow: auto;
  box-sizing: border-box;
  grid-column: span ${e=>{let{column:t}=e;return t}}; 
  &.noborder {
    border: 0px solid #e2e4e9;
    border-radius: 0px;
  }

  &.half {
    grid-column: span 2; /* 50% width */
  }

  &.quarter {
    grid-column: span 1; /* 25% width */
  }

  &.threequarter {
    grid-column: span 3; /* 75% width */
  }

  &.full {
    grid-column: span 4; /* 100% width */
  }
`},37415:(e,t,a)=>{a.d(t,{A:()=>g});var i=a(65043),l=a(46861),d=a(38520),o=a(94574),n=a(8276);o.Ay.div`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 5px;
`,o.Ay.div`
  font-size: 12px;
  color: grey;
`,o.Ay.div`
  margin: 30px;
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, 250px);
  height: auto;
  align-content: flex-start;
  @media screen and (max-width: 560px) {
    grid-template-columns: auto;
    width: auto;
  }
`;const r=o.Ay.div`
  padding: 30px 24px 30px 24px;
  gap: 12px;
  border-radius: 16px;
  border: 1px;
  border: 1px solid ${n.D.stroke.soft};
  display: flex;
`,s=o.Ay.div`
  margin-top: 0;
  display: flex;
  -webkit-box-pack: left;
  justify-content: baseline;
  flex-direction: column;
  gap: 4px;
`,p=o.Ay.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${n.D.text.soft};

  &.info {
    color: Blue;
  }
`,c=o.Ay.div`
  font-size: 20px;
  font-weight: bold;
`,u=o.Ay.div`
  height: 40px;
  width: 40px;
  padding: 10px;
  gap: 10px;
  border-radius: 50%;
  border: 1px;
  opacity: 0px;
  border: 1px solid ${n.D.stroke.soft};
  display: flex;
  align-self: center;
  justify-content: center;
  color: ${n.D.primary.base};
  svg {
    width: 16.09px;
    height: 16.09px;
  }
`,m=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 20px;
  margin-top:10px;
`;var h=a(36824),v=a(70579);const g=(0,i.memo)((e=>{let{title:t="No Title Found",description:a="",dataType:o="API",filterType:n="JSON",parents:g={},filters:b=[{id:1,value:"January"},{id:2,value:"February"},{id:3,value:"March"}],dataItem:y="dashboard",hideFilter:f=!0}=e;const[x,w]=(0,i.useState)(b),[A,S]=(0,i.useState)([]),[C,T]=(0,i.useState)(""),[k,j]=(0,i.useState)(!1),I=(0,i.useCallback)((async(e,t)=>{try{const a=await(0,h.bQ)(t,e);return 200===a.status?a.data:[]}catch(a){return console.error(`Error fetching data from ${e}:`,a),[]}}),[]);(0,i.useEffect)((()=>{(async()=>{if("API"===o&&!k){const e=await I(y,C?{...g,filter:C}:g);S(e),j(!0)}})()}),[y,o,C,g,I,k]),(0,i.useEffect)((()=>{(async()=>{if("API"===n&&!k){const e=await I(b);w(e),j(!0)}})()}),[b,n,I,k]);const P=(0,i.useMemo)((()=>null===A||void 0===A?void 0:A.slice(0,4).map(((e,t)=>(0,v.jsxs)(r,{children:[(0,v.jsx)(u,{children:(0,v.jsx)(l.A0,{icon:e.icon})}),(0,v.jsxs)(s,{children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(c,{children:e.count})]})]},t)))),[A]),E=(0,i.useCallback)((e=>{var t;T(null!==(t=e.id)&&void 0!==t?t:""),j(!1)}),[T,j]);return(0,v.jsxs)(d.S$,{className:"tiles column",children:[!f&&(0,v.jsx)(d.l6,{label:"Month",align:"right small",value:C,selectApi:x,onSelect:E}),(0,v.jsx)(m,{children:P})]})}),((e,t)=>e.title===t.title&&e.description===t.description&&e.dataType===t.dataType&&e.filterType===t.filterType&&JSON.stringify(e.parents)===JSON.stringify(t.parents)&&JSON.stringify(e.filters)===JSON.stringify(t.filters)&&e.dataItem===t.dataItem&&e.hideFilter===t.hideFilter))},41011:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(65043),l=a(94574),d=a(8075),o=a(9667),n=a(83150),r=a(46861),s=a(38520),p=a(36824),c=a(70579);const u=l.Ay.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
`,m=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${e=>"between"===e.justify&&"justify-content: space-between;"}
  &.control {
    display: flex;
    justify-content: space-between;
    > .full {
      width: 100%;
    }
  }
`,h=l.Ay.span`
  &.active {
    background: #dcfce7;
    color: #16a34a;
  }
  &.pending {
    background: #fcdcdc;
    color: #a31816;
  }
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
`,v=l.Ay.div`
  .h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #1f2937;
  }

  .p {
    padding: 0;
    color: #6b7280;
  }
`,g=l.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0 0.5rem;
  gap: 10px;
  > span:first-child {
    color: #6b7280;
  }
  > span:first-child::after {
    content: ":";
  }
  &::after {
    content: "•";
    color: #6b7280;
  }
  &:last-child::after {
    content: "";
  }
  span:last-child {
    font-weight: 500;
  }
`,b=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #9ca3af;
    cursor: pointer;
    font-weight: 500;
    &:hover {
      color: #6b7280;
    }
  }
`;function y(e){var t,a;const[l,y]=(0,i.useState)(!1),[f,x]=(0,i.useState)(""),[w,A]=(0,i.useState)([]),[S,C]=(0,i.useState)(!1),[T,k]=(0,i.useState)(""),[j,I]=(0,i.useState)(""),P=e.id,E=null===e||void 0===e||null===(t=e.openData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a._id,q=e=>{if(!e)return I("Subdomain cannot be empty"),{isValid:!1,value:""};if(e.length<1||e.length>63)return I("Subdomain must be between 1 and 63 characters"),{isValid:!1,value:e};const t=e.charAt(0),a=e.charAt(e.length-1);return/[a-z0-9]/.test(t)&&/[a-z0-9]/.test(a)?(I(""),{isValid:!0,value:e}):(I("Subdomain must start and end with a letter or number"),{isValid:!1,value:e})};return(0,i.useEffect)((()=>{(0,p.bQ)({event:E},"whitelisted-Domains").then((e=>{if(200===e.status){var t,a,i;const l=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.response;A(l),x(null!==(a=null===(i=l[0])||void 0===i?void 0:i.domain)&&void 0!==a?a:"your-event.eventhex.ai")}}))}),[E,P]),(0,c.jsxs)(o.Yq,{className:"data-layout ",children:[(0,c.jsx)(d.z,{title:"Domain Settings",line:!1,description:"Manage your event's domain settings and custom domain configuration."}),(0,c.jsx)(u,{children:(0,c.jsxs)(m,{className:"control",children:[(0,c.jsx)(s.Pu,{icon:"globe",onClick:()=>{if(l)k("");else{const e=f.split(".eventhex.ai");k(e[0])}y(!l),I("")},onChange:e=>{const t=(e=>e.toLowerCase().replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-+|-+$/g,""))(e);C(`${t}.eventhex.ai`!==f),k(t),q(t)},text:l?"Cancel":"Edit Subdomain",label:"Subdomain",value:l?T:f,placeholder:"Please add a sub domain!",footnote:l?(null===j||void 0===j?void 0:j.length)>0?j:`${T}.eventhex.ai`:"",error:!!j,customClass:"full transparent"}),l&&(0,c.jsx)(s.$n,{isDisabled:!S,value:"Update",icon:"save",size:16,ClickEvent:()=>{const e=q(T);e.isValid&&(x(`${e.value}.eventhex.ai`),y(!1),I(""))}})]})}),(0,c.jsxs)(m,{justify:"between",children:[(0,c.jsx)(d.F,{title:"Custom Domains",line:!1,description:""}),(0,c.jsxs)(n.M3,{onClick:()=>{},children:[(0,c.jsx)(r.A0,{icon:"add"}),(0,c.jsx)("span",{children:"Add Domain"})]})]}),null===w||void 0===w?void 0:w.map((e=>(0,c.jsxs)(u,{children:[(0,c.jsxs)(m,{justify:"between",children:[(0,c.jsxs)(m,{children:[(0,c.jsx)(r.A0,{icon:"link"}),(0,c.jsx)(v,{children:(0,c.jsx)("div",{className:"h3",children:e.domain})})]}),e.verified?(0,c.jsx)(h,{className:"active",children:"Active"}):(0,c.jsx)(h,{className:"pending",children:"Pending"})]}),(0,c.jsx)(m,{children:(0,c.jsxs)(g,{children:[(0,c.jsx)("span",{children:"CNAME"}),(0,c.jsxs)(b,{children:[(0,c.jsx)("span",{children:"cname.eventhex.ai"}),(0,c.jsx)(s.K0,{type:"plain",icon:"copy",size:16})]})]})})]})))]})}},33411:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ut});var i=a(65043),l=a(94988),d=a(82550),o=a(26222),n=a(86178),r=a.n(n),s=a(8276);const p=(e,t)=>e.some((e=>e===t)),c=s.t.privileges;var u=a(30487),m=a(77650),h=a(64980),v=a(75374),g=a(71341),b=a(79456),y=a(38520),f=a(36824),x=a(8075),w=a(23585),A=a(1648),S=a(41024),C=a(94574),T=a(46861),k=a(70579);const j=C.Ay.div`
  margin: 0;
  max-height: 100vh;
  overflow: auto;
  padding-bottom: 79px;
  &.plain {
    overflow: initial;
    padding-bottom: 0px;
    max-height: initial;
  }
  > div {
    border-bottom: 1px solid #e2e4e9;
  }
`,I=C.Ay.button`
  width: 100%;
  text-align: left;
  background-color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
  padding: 16px 12px;
  gap: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.006em;
  text-align: left;

  div {
    display: flex;
    gap: 8px;
    align-items: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }
  div:last-child {
    svg {
      width: 10px;
      height: 10px;
      color: ${s.D.icon.soft};
    }
  }
  &.up {
    svg {
      color: ${s.D.primary.base};
    }
  }
`,P=C.Ay.div`
  padding: 16px;
  display: ${e=>{let{isOpen:t}=e;return t?"block":"none"}}; // Use props to control display
`,E=e=>{let{items:t,customClass:a}=e;const[l,d]=(0,i.useState)([0]);return(0,k.jsx)(j,{className:a,children:t.map(((e,t)=>(0,k.jsxs)("div",{children:[(0,k.jsxs)(I,{className:l.includes(t)?"up":"down",onClick:()=>(e=>{l.includes(e)?d(l.filter((t=>t!==e))):d([...l,e])})(t),children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(T.A0,{icon:e.icon}),(0,k.jsx)("span",{children:e.label})]}),(0,k.jsx)("div",{children:(0,k.jsx)(T.A0,{icon:l.includes(t)?"up":"down"})})]}),(0,k.jsx)(P,{isOpen:l.includes(t),children:e.content})]},t)))})};var q=a(74505);C.Ay.div`
  margin-bottom: 10px;
  border-radius: 0px;
  overflow: hidden;
  display: grid;
  padding: 0 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px 2px;
  &.double {
    display: grid;
    grid-template-columns: 1fr repeat(auto-fill, minmax(50%, 1fr));
    gap: 10px;
  }
  article:last-child {
    border-bottom: 0px;
  }
`,C.Ay.article`
  display: flex;
  margin: 0px;
  padding: 10px;
  font-size: 12px;
  &.head {
    color: black;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px 0 0;
    cursor: pointer;
    font-size: 14px;
    &.true {
      background-color: #4b4b4b;
      color: white;
    }
  }
  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  div:nth-child(2),
  .second {
    font-size: 13px;
    font-weight: bold;
    justify-content: right;
    text-align: right;
  }
  .second {
    font-weight: bold;
    gap: 5px;
    text-align: left;
    justify-content: right;
  }
  .second div {
    border: 1px solid;
    border-radius: 6px;
    padding: 2px 5px;
    font-size: 12px;
  }
  .second div:first-child {
    border: 0px solid;
    border-radius: 6px;
    padding: 2px 0px;
    font-size: 12px;
    width: 100%;
    font-weight: normal;
  }
  > div > span {
    display: flex;
    margin-right: 1px;
  }
  > div > span::after {
    content: " \u2022"; /* Unicode character for round dot */
  }
  > div > span:last-child::after {
    content: ""; /* Empty content for the last span */
  }
  button {
    background-color: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
  }
`,C.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: auto;
  margin: 0 0 50px 0;
`,C.Ay.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;const N=e=>{let{data:t,setMessage:a}=e;const[l]=(0,i.useState)([{type:"text",placeholder:"Feedback Form",name:"title",validation:"",default:"",label:"Form Title",tag:!1,required:!0,view:!0,add:!0,update:!0},{type:"textarea",placeholder:"a brief description",name:"description",showItem:"",validation:"",default:"",tag:!1,label:"Description",required:!1,view:!0,add:!0,update:!0},{type:"select",placeholder:"",name:"status",showItem:"Open",validation:"",default:"",tag:!1,label:"Visibility",required:!0,view:!0,add:!0,update:!0,apiType:"CSV",selectApi:"Open,Closed, Sold Out",footnote:"Only published form will be accessible to users"}]),[d]=(0,i.useState)([{type:"htmleditor",placeholder:"Success Message Upon Submission",name:"onsuccessfullMessage",showItem:"",validation:"",default:"Successfully Submitted.",tag:!1,label:"Thank you for submitting",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Notify via Email",name:"enableEmail",validation:"",default:"",label:"Notify via Email",tag:!1,required:!0,view:!0,add:!0,update:!0,footnote:"Gives user a unique url to update their submission"},{type:"htmleditor",placeholder:"Mail Content",name:"emailTemplate",condition:{item:"enableEmail",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"Successfully Submitted.",tag:!1,label:"Thank you for submitting",required:!0,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Attach Badge",name:"attachBadgeEmail",condition:{item:"enableEmail",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Attach Badge",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Notify via Whatsapp",name:"enableWhatsapp",validation:"",default:"",label:"Notify via Whatsapp",tag:!1,required:!0,view:!0,add:!0,update:!0,footnote:"Gives user a unique url to update their submission"},{type:"textarea",placeholder:"Message",name:"whatsappTemplate",condition:{item:"enableWhatsapp",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"Successfully Submitted.",tag:!1,label:"Thank you for submitting",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Attach Badge",name:"attachBadgeWhatsapp",condition:{item:"enableWhatsapp",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Attach Badge",required:!1,view:!0,add:!0,update:!0}]),[o]=(0,i.useState)([{type:"toggle",placeholder:"Enable Approval",name:"needsApproval",validation:"",default:"",label:"Enable Approval",tag:!1,required:!0,view:!0,add:!0,update:!0,footnote:"This will enable approval for the corresponding ticket"},{type:"toggle",placeholder:"Notify via Email",name:"approvalEmail",condition:{item:"needsApproval",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Notify via Email",tag:!1,required:!0,view:!0,add:!0,update:!0,footnote:"Notifies approval status to their user via email"},{type:"htmleditor",placeholder:"Mail Content",name:"approvalEmailTemplate",condition:{item:"approvalEmail",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"Successfully Submitted.",tag:!1,label:"Thank you for submitting",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Attach Badge",name:"attachBadgeEmail",condition:{item:"approvalEmail",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Attach Badge",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Notify via Whatsapp",name:"approvalWhatsapp",condition:{item:"needsApproval",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Notify via Whatsapp",tag:!1,required:!0,view:!0,add:!0,update:!0,footnote:"Notifies approval status to their user via whatsapp"},{type:"textarea",placeholder:"Message",name:"approvalWhatsappTemplate",condition:{item:"approvalWhatsapp",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Message",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Attach Badge",name:"attachBadgeWhatsapp",condition:{item:"approvalWhatsapp",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Attach Badge",required:!1,view:!0,add:!0,update:!0}]),[n]=(0,i.useState)([{type:"toggle",placeholder:"Protect form with a Captcha",name:"enableCaptcha",validation:"",default:"",label:"Protect form with a Captcha",tag:!1,required:!0,view:!0,add:!0,update:!0,footnote:"If enabled we will make sure respondent is a human"},{type:"toggle",placeholder:"Consent",name:"consent",validation:"",default:"",label:"Consent",tag:!1,required:!0,view:!0,add:!0,update:!0,footnote:"This field will be placed near the primary action button"},{type:"textarea",placeholder:"Consent Message",name:"consentLetter",condition:{item:"consent",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"I consent to the use of my data, which has been submitted here, in order to get the possible event experience",tag:!1,label:"Consent Message",required:!1,view:!0,add:!0,update:!0,footnote:"Add the text to the linked inside the [] brackets and the URL in () brackets"},{type:"toggle",placeholder:"Terms and Policies",name:"termsAndPolicy",validation:"",default:!1,label:"Terms & Policies",tag:!1,required:!1,view:!0,add:!0,update:!0,footnote:"Terms and Policies not configured in the event"},{type:"text",placeholder:"",name:"termsAndPolicyMessage",condition:{item:"termsAndPolicy",if:!0,then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Terms & Policy",required:!1,view:!0,add:!0,update:!0}]),[r,s]=(0,i.useState)({}),[p,c]=(0,i.useState)(!1),[u,m]=(0,i.useState)({}),[g,b]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=Object.values(u).some((e=>!e));c(e)}),[u]);const[x,w]=(0,i.useState)(1),A=(e,a,i)=>(0,k.jsx)(v.A,{autoUpdate:!0,useCaptcha:!1,formType:"put",description:"",formInput:a,formValues:t,submitHandler:(e,t)=>{console.log("Submission status:",t),((e,t,a)=>{m((t=>({...t,[e]:a}))),b(!0),a&&s((a=>({...a,[e]:t})))})(i,e,t)},button:"Save",plainForm:!0,formMode:"single",customClass:"",css:"plain accordion head-hide"},`${x}-${e}`),S=[{key:"information",label:"Information",icon:"info",content:A("elements",l,"ticket")},{key:"submissions",label:"Submissions",icon:"submissions",content:A("elements",d,"submissions")},{key:"approvalMessaging",label:"Approval Messaging",icon:"approvalmessaging",content:A("elements",o,"approvalMessaging")},{key:"security",label:"Security & Privacy",icon:"securityprivacy",content:A("elements",n,"security")}];return(0,k.jsxs)(y.S$,{className:"form-builder-3",children:[(0,k.jsx)(E,{items:S}),g&&(0,k.jsxs)(q.wi,{className:"bottom "+(p?"disabled":""),children:[(0,k.jsx)(h.A,{type:"close",value:"Discard",onChange:()=>{w((e=>e+1)),b(!1)}}),(0,k.jsx)(h.A,{css:"",disabled:!!p,type:"submit",name:"submit",value:"Save Changes",onChange:async(e,i)=>{if(p)a({type:1,content:"Form has errors!",proceed:"Okay",icon:"error"});else{const e=Object.entries(r).reduce(((e,t)=>{let[a,i]=t;return{...e,...i}}),{});(0,f.sS)({id:t._id,...e},"ticket").then((e=>{var t;!0===(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&a({type:1,content:"Form Input Updated Successfully",okay:"Okay",icon:"success"})}))}}})]})]})},D=C.Ay.div`
  /* margin-top: 60px; */
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid ${s.D.stroke.soft};
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,M=C.Ay.div`
  margin: 0px;
  max-height: calc(100vh - 80px);
  overflow: auto;
  flex-wrap: wrap;
  padding: 20px;
  padding-bottom: 100px;
  display: flex;
  gap: 10px;
  margin-bottom: auto;
`,L=C.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  div {
    h2 {
      margin: 0; /* Remove the default margin */
      padding: 0; /* Remove the default padding */
    }
    p {
      margin: 0 0 0 0; /* Adjust the margin as needed */
      padding: 0; /* Remove the default padding */
      font-weight: 300;
      font-size: 14px;
      text-align: start;
    }
  }
`,R=C.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  opacity: ${e=>e.disabled?.75:1};

  & > * {
    flex: 1 1 calc(50% - 16px);
    box-sizing: border-box;
  }
`,O=C.Ay.div`
  position: relative;
  width: 100%;
  padding: 10px 0px 15px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: ${e=>null!==e&&void 0!==e&&e.isActive?"#F6F8FA":"#ffffff"};
  border-color: ${e=>null!==e&&void 0!==e&&e.isActive?"#EBF1FF":"transparent"};
  transition: background-color 0.3s, border-color 0.3s;
  img {
    display: none;
  }
  img.contain {
    display: block;
  }
  &.title {
    flex: 1 1 calc(100% - 16px);
  }
  &:hover {
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
    img {
      display: flex;
    }
  }

  ${e=>e.disabled&&"pointer-events: none;\n    padding: 10px;\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: rgba(255, 255, 255, 0.5);\n      border-radius: 10px;\n    }\n  "}
`,F=C.Ay.img`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 20px;
`,W=C.Ay.img`
  cursor: grab;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 10px;
`,B=(C.Ay.div`
  margin-bottom: 10px;
  border-radius: 0px;
  overflow: hidden;
  display: grid;
  border: 1px solid #d3d3d3;
  // box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 2px;
  &.double {
    display: grid;
    grid-template-columns: 1fr repeat(auto-fill, minmax(50%, 1fr));
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  article {
    border-bottom: 1px solid rgb(227 227 227);
  }
  article:last-child {
    border-bottom: 0px;
  }
`,C.Ay.article`
  display: flex;
  margin: 0px;
  padding: 10px;
  font-size: 12px;
  &.head {
    color: black;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px 0 0;
    cursor: pointer;
    font-size: 14px;
    &.true {
      background-color: #4b4b4b;
      color: white;
    }
  }
  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  div:nth-child(2),
  .second {
    font-size: 13px;
    font-weight: bold;
    justify-content: right;
    text-align: right;
  }
  .second {
    font-weight: bold;
    gap: 5px;
    text-align: left;
    justify-content: right;
  }
  .second div {
    border: 1px solid;
    border-radius: 6px;
    padding: 2px 5px;
    font-size: 12px;
  }
  .second div:first-child {
    border: 0px solid;
    border-radius: 6px;
    padding: 2px 0px;
    font-size: 12px;
    width: 100%;
    font-weight: normal;
  }
  > div > span {
    display: flex;
    margin-right: 1px;
  }
  > div > span::after {
    content: " \u2022"; /* Unicode character for round dot */
  }
  > div > span:last-child::after {
    content: ""; /* Empty content for the last span */
  }
  button {
    background-color: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
  }
`,[{label:"Name",icon:"team",value:"Name",type:"text",placeholder:"Enter your full name"},{label:"Email",icon:"email",value:"Email",type:"email",placeholder:"youremail@email.com"},{label:"Phone",icon:"whatsapp",value:"Phone",type:"mobilenumber",placeholder:"1234567890"},{label:"Website",icon:"website",value:"Website",type:"text",placeholder:"https://www.example.com"},{label:"Company",icon:"sponsors",value:"Company",type:"text",placeholder:"Enter your company name"},{label:"Designation",icon:"news",value:"Designation",type:"text",placeholder:"Enter your job title"},{label:"Country",icon:"location",value:"Country",type:"select",placeholder:"Select your country"}]),z=[{label:"Text Input",icon:"short",value:"Text Input",type:"text",placeholder:"Enter your text here"},{label:"Text Area",icon:"paragraph",value:"Text Area",type:"textarea",placeholder:"Enter your long text here..."},{label:"Number",icon:"Number",value:"Number",type:"number",placeholder:"Enter a number"},{label:"Single Choice",icon:"Select",value:"Single Choice",type:"select",placeholder:"Select one option"},{label:"Multiple Choice",icon:"MultiSelect",value:"Multiple Choice",type:"multiSelect",placeholder:"Select one or more options"},{label:"Dropdown",icon:"DropDown",value:"Dropdown",type:"select",placeholder:"Choose from the dropdown"},{label:"Date",icon:"date",value:"Date",type:"date",placeholder:"Select a date"},{label:"Time",icon:"Time",value:"Time",type:"time",placeholder:"Select a time"},{label:"Slider",icon:"logout",value:"Slider",type:"range",placeholder:"Slide to select a value"},{label:"Rating",icon:"star",value:"Rating",type:"rating",placeholder:"Rate from 1 to 5 stars"},{label:"File Upload",icon:"fileUpload",value:"File Upload",type:"file",placeholder:"Click to upload a file"},{label:"Info",icon:"info",value:"Info",type:"info",content:"Add your info here"}],U=(0,l.A)((e=>{const[t,a]=(0,i.useState)(!1),[l,d]=(0,i.useState)(!1),[o,n]=(0,i.useState)({}),[r,s]=(0,i.useState)(null),[p,c]=(0,i.useState)(""),[g,b]=(0,i.useState)(null),[C,T]=(0,i.useState)(null),[j,I]=(0,i.useState)(null),[P,E]=(0,i.useState)(e.eventFormFields),[N,L]=(0,i.useState)([]),U=()=>{a(!1),d(!1),n(null),s({}),c("")},H=e=>{T(e),I(e)},V=e=>{switch(null===e||void 0===e?void 0:e.type){case"text":case"password":case"email":case"buttonInput":case"number":case"mobilenumber":case"time":case"date":case"datetime":case"image":case"file":case"textarea":case"htmleditor":case"submit":case"button":case"linkbutton":case"widges":case"close":case"checkbox":case"select":case"multiSelect":case"info":case"html":case"line":case"title":case"hidden":return(0,k.jsx)("div",{onClick:()=>{s(e),c(null===e||void 0===e?void 0:e._id),((e,t)=>{n(e),b(t)})(e,null===e||void 0===e?void 0:e.type),d(!l)},children:(0,k.jsx)(h.A,{...e,countries:N})});default:return null}},[$,J]=(0,i.useState)(null),[_]=(0,i.useState)([{type:"select",placeholder:"Type",name:"type",validation:"",default:g,tag:!0,label:"Type",showItem:"Type",required:!1,view:!0,filter:!1,add:!0,update:!0,apiType:"JSON",selectApi:[{id:"text",value:"Text",icon:"text"},{id:"password",value:"Password",icon:"password"},{id:"email",value:"Email",icon:"email"},{id:"number",value:"Number",icon:"number"},{id:"mobilenumber",value:"Mobile Number",icon:"mobilenumber"},{id:"time",value:"Time",icon:"time"},{id:"date",value:"Date",icon:"date"},{id:"datetime",value:"Date Time",icon:"datetime"},{id:"image",value:"Image",icon:"image"},{id:"file",value:"File",icon:"file"},{id:"textarea",value:"Text Area",icon:"textarea"},{id:"htmleditor",value:"Html Editor",icon:"paragraph"},{id:"checkbox",value:"Check Box",icon:"checkBox"},{id:"select",value:"Select",icon:"dropDown"},{id:"multiSelect",value:"Multi Select",icon:"multipleChoice"},{id:"info",value:"Info",icon:"info"},{id:"html",value:"Html",icon:"html"},{id:"line",value:"Line",icon:"line"},{id:"title",value:"Title",icon:"title"}]},{type:"text",placeholder:"Title",name:"title",condition:{item:"type",if:["title"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Title",required:!0,view:!0,add:!0,update:!0,apiType:"",selectApi:""},{type:"htmleditor",placeholder:"Content",name:"content",condition:{item:"type",if:["info","html"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Content",required:!0,view:!0,add:!0,update:!0,apiType:"",selectApi:""},{type:"text",placeholder:"Label",name:"label",condition:{item:"type",if:["line"],then:"disabled",else:"enabled"},validation:"",default:o?null===o||void 0===o?void 0:o.label:"",label:"Label",tag:!1,required:!1,view:!0,add:!0,update:!0,onChange:(e,t)=>{const{label:a}=t;return t.placeHolder=a,t}},{type:"text",placeholder:"Sub Label",name:"sublabel",condition:{item:"type",if:["line","title","info","html"],then:"disabled",else:"enabled"},validation:"",default:"",label:"Sub Label",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Place Holder",name:"placeholder",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea","select","multiSelect"],then:"enabled",else:"disabled"},validation:"",default:"",label:"Place Holder",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"hidden",placeholder:"Api Type",name:"apiType",condition:{item:"type",if:["select","multiSelect"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"CSV",tag:!1,label:"Api Type",required:!1,view:!0,add:!0,update:!0,apiType:"CSV",selectApi:"CSV"},{type:"textarea",placeholder:"Add options",name:"selectApi",condition:{item:"type",if:["select"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Add options",required:!1,view:!0,add:!0,update:!0},{type:"textarea",placeholder:"Select Api",name:"selectApi",condition:{item:"type",if:["multiSelect"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Select Api",required:!1,view:!0,add:!0,update:!0},{type:"textarea",placeholder:"Foot Note",name:"footnote",condition:{item:"type",if:["title","info","html","line"],then:"disabled",else:"enabled"},showItem:"",validation:"",default:"",tag:!1,label:"Foot Note",required:!1,view:!0,add:!0,update:!0},{type:"multiSelect",placeholder:"Allowed File Types",name:"allowedFileTypes",condition:{item:"type",if:["file"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Allowed File Types",required:!0,view:!0,add:!0,update:!0,apiType:"JSON",selectApi:[{id:"image/jpeg",value:"JPG/JPEG Image"},{id:"image/png",value:"PNG Image"},{id:"image/gif",value:"GIF Image"},{id:"application/pdf",value:"PDF Document"},{id:"application/msword",value:"Word Document (DOC)"},{id:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",value:"Word Document (DOCX)"},{id:"text/plain",value:"Text File"},{id:"text/csv",value:"CSV File"},{id:"application/vnd.ms-excel",value:"Excel Spreadsheet (XLS)"},{id:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",value:"Excel Spreadsheet (XLSX)"},{id:"image/webp",value:"WebP Image"},{id:"image/svg+xml",value:"SVG Image"},{id:"application/vnd.oasis.opendocument.text",value:"OpenDocument Text (ODT)"},{id:"application/vnd.oasis.opendocument.spreadsheet",value:"OpenDocument Spreadsheet (ODS)"},{id:"application/zip",value:"ZIP Archive"},{id:"application/x-rar-compressed",value:"RAR Archive"}]},{type:"hidden",placeholder:"Collection",name:"dbcollection",validation:"",default:"formData",label:"Collection",tag:!1,view:!0,add:!0,update:!0},{type:"hidden",placeholder:"Show Item",name:"showItem",validation:"",default:"",label:"Show Item",tag:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Default",name:"default",condition:{item:"type",if:["line","title","info","html"],then:"disabled",else:"enabled"},validation:"",default:"",label:"Default",tag:!1,view:!0,add:!0,update:!0},{type:"title",title:"Character Length",name:"sm",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea"],then:"enabled",else:"disabled"},add:!0,update:!0},{type:"text",placeholder:"Minimum",name:"minimum",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Minimum",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Maximum",name:"maximum",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Maximum",required:!1,view:!0,add:!0,update:!0},{type:"date",placeholder:"Minimum",name:"minDate",condition:{item:"type",if:["date","datetime"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"empty",tag:!1,label:"Minimum",required:!1,view:!0,add:!0,update:!0},{type:"date",placeholder:"Maximum",name:"maxDate",condition:{item:"type",if:["date","datetime"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"empty",tag:!1,label:"Maximum",required:!1,view:!0,add:!0,update:!0},{type:"title",title:"Permission Settings",name:"sm",add:!0,update:!0},{type:"hidden",placeholder:"Tag",name:"tag",validation:"",default:"true",value:!0,tag:!1,label:"Tag",required:!1,view:!0,add:!0,update:!0},{type:"checkbox",placeholder:"Required",name:"required",condition:{item:"type",if:["line","title","info","html"],then:"disabled",else:"enabled"},validation:"",default:"true",tag:!0,label:"Required",required:!1,view:!0,add:!0,update:!0},{type:"hidden",value:!0,placeholder:"View",name:"view",validation:"",tag:!1,label:"View",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"hidden",placeholder:"Add",value:!0,name:"add",validation:"",tag:!1,label:"Add",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"hidden",value:!0,placeholder:"Update",name:"update",validation:"",tag:!1,label:"Update",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"hidden",placeholder:"Filter",value:!0,name:"filter",validation:"",tag:!1,label:"Filter",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"title",title:"Condition Settings",name:"sm",add:!0,update:!0},{type:"checkbox",placeholder:"Enable Condition",name:"conditionEnabled",validation:"",default:"false",tag:!0,label:"Enable Condition",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Condition Checking Field",name:"conditionWhenField",condition:{item:"conditionEnabled",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Condition Checking Field",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Match Values",name:"conditionCheckMatch",condition:{item:"conditionEnabled",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Match Values",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"select",placeholder:"If Match",name:"conditionIfMatch",condition:{item:"conditionEnabled",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",apiType:"JSON",selectApi:[{id:"enabled",value:"Show This Filed"},{id:"disabled",value:"Hide This Filed"}],label:"Check Match Values",tag:!0,required:!1,view:!0,add:!0,update:!0}]);(0,i.useEffect)((()=>{const e=[..._];e[0].default=g,J(e)}),[g,_]);const[G,X]=(0,i.useState)(!1);(0,i.useEffect)((()=>{var t;(0,f.bQ)({event:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.event._id},"event-form-fields").then((e=>{var t;E(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.response)}))}),[e,G]),(0,i.useEffect)((()=>{(0,f.bQ)({},"country").then((e=>{var t;L(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.response)}))}),[]);const Y=(0,w.FR)((0,w.MS)(w.AN,{activationConstraint:{distance:5}})),Q=t=>{let{field:a}=t;const{attributes:i,listeners:l,setNodeRef:d,transform:o,transition:n}=(0,A.gl)({id:null===a||void 0===a?void 0:a._id}),r={transform:S.Ks.Transform.toString(o),transition:n};return(0,k.jsxs)(O,{ref:d,style:r,...i,children:[V(a),(0,k.jsx)(W,{src:u,isActive:!0,...l}),(0,k.jsx)(F,{src:m,isActive:!0,onClick:()=>(t=>{const a=null===t||void 0===t?void 0:t._id;null===e||void 0===e||e.setMessage({type:2,content:`Are you sure to delete '${null===t||void 0===t?void 0:t.label}'?`,proceed:"Delete",okay:"Cancel",onClose:async()=>{},onProceed:async()=>{(0,f.Wv)({id:a},"event-form-fields").then((a=>{var i;!0===(null===a||void 0===a||null===(i=a.data)||void 0===i?void 0:i.success)?null===e||void 0===e||e.setMessage({type:1,content:`Field '${null===t||void 0===t?void 0:t.label}' deleted successfully!`,okay:"Okay",icon:"deleted"}):null===e||void 0===e||e.setMessage({type:1,content:a.customMessage,okay:"Okay",icon:"error"})})),X((e=>!e))}})})(a)})]})};return(0,k.jsxs)(y.S$,{className:"form",children:[(0,k.jsxs)(y.S$,{className:"form-builder-1",children:[(0,k.jsxs)(M,{children:[(0,k.jsx)(y.hE,{line:!1,title:"Preset Fields"}),null===B||void 0===B?void 0:B.map((e=>{let{label:t,icon:a,value:i,type:l}=e;return(0,k.jsx)(h.A,{type:"widges",value:t,icon:a,onChange:()=>H({label:t,icon:a,value:i,type:l}),isSelected:(null===C||void 0===C?void 0:C.value)===i},i)})),(0,k.jsx)(y.hE,{line:!1,title:"Custom Fields"}),null===z||void 0===z?void 0:z.map((e=>{let{label:t,icon:a,value:i,type:l}=e;return(0,k.jsx)(h.A,{type:"widges",value:t,icon:a,onChange:()=>H({label:t,icon:"",value:i,type:l}),isSelected:(null===C||void 0===C?void 0:C.value)===i},i)}))]}),(C||j)&&(0,k.jsxs)(q.wi,{className:"bottom",children:[(0,k.jsx)(h.A,{type:"close",value:"Cancel",onChange:()=>{T(null),I(null)}}),(0,k.jsx)(h.A,{css:"",type:"submit",name:"submit",value:"Insert Field",onChange:()=>{j&&(()=>{var t,a,i;j&&((0,f.LS)({ticket:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id,...j,view:!0,add:!0,update:!0,event:null===e||void 0===e||null===(a=e.data)||void 0===a||null===(i=a.event)||void 0===i?void 0:i._id},"event-form-fields").then((t=>{var a;!0===(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)&&(null===e||void 0===e||e.setMessage({type:1,content:"Form Data Inserted Successfully",okay:"Okay",icon:"success"})),X((e=>!e))})),I(null),U())})()}})]})]}),(0,k.jsx)(y.S$,{className:"form-builder-4",isSidebarOpen:t,isEventSidebarOpen:l,children:(0,k.jsx)(D,{children:P.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(x.F,{title:"Primary Fields",line:!1}),(0,k.jsx)(w.Mp,{sensors:Y,collisionDetection:w.fp,onDragEnd:async t=>{const{active:a,over:i}=t;if(i&&(null===a||void 0===a?void 0:a.id)!==(null===i||void 0===i?void 0:i.id)){const t=null===P||void 0===P?void 0:P.findIndex((e=>(null===e||void 0===e?void 0:e._id)===(null===a||void 0===a?void 0:a.id))),d=null===P||void 0===P?void 0:P.findIndex((e=>(null===e||void 0===e?void 0:e._id)===(null===i||void 0===i?void 0:i.id))),o=(0,A.be)(P,t,d).map(((e,t)=>({...e,orderId:t+1})));try{null===e||void 0===e||e.setLoaderBox(!0);const t=o.map((e=>(0,f.sS)({id:null===e||void 0===e?void 0:e._id,orderId:null===e||void 0===e?void 0:e.orderId},"event-form-fields")));await Promise.all(t),X((e=>!e)),null===e||void 0===e||e.setLoaderBox(!1)}catch(l){console.error("Error updating form fields:",l)}}},children:(0,k.jsx)(A.gB,{items:P.map((e=>e._id)),strategy:A._G,children:(0,k.jsx)(R,{children:P.map((e=>(0,k.jsx)(Q,{field:e},e._id)))})})})]})})}),l&&$&&(0,k.jsx)(v.A,{useCaptcha:!1,formType:"post",header:"Properties",description:"",formInput:$,formValues:r,submitHandler:async t=>{(0,f.sS)({id:p,...t},"event-form-fields").then((t=>{var a;!0===(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)&&(null===e||void 0===e||e.setMessage({type:1,content:"Form Input Updated Successfully",okay:"Okay",icon:"success"}),U())}))},button:"Save",isOpenHandler:U,isOpen:!0,plainForm:!0,formMode:"single"},"elements"+g)]})})),H=(0,l.A)((e=>{var t,a,l;const[d,o]=(0,i.useState)(!1),[n,r]=(0,i.useState)(!1),[s,p]=(0,i.useState)(!1),c=(0,b.d4)((e=>e.themeColors)),[C,T]=(0,i.useState)({}),[j,I]=(0,i.useState)(null),[P,E]=(0,i.useState)(null),[H,V]=(0,i.useState)(""),[$,J]=(0,i.useState)(null),[_,G]=(0,i.useState)(null),[X,Y]=(0,i.useState)(null),[Q,K]=(0,i.useState)(!1),[Z,ee]=(0,i.useState)([]),[te,ae]=(0,i.useState)([]),[ie,le]=(0,i.useState)([]),de=(e,t)=>{T(e),J(t)},[oe,ne]=(0,i.useState)(!1),re=async()=>{var t,a,i;oe?(ne(!1),await(0,f.bQ)({ticket:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id,eventId:null===e||void 0===e||null===(a=e.data)||void 0===a||null===(i=a.event)||void 0===i?void 0:i._id},"ticket-form-data").then((e=>{var t,a;ee(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.response),ae(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.eventForm)}))):ne(!0)},se=()=>{o(!1),r(!1),p(!1),T(null),I({}),E({}),V("")},pe=()=>{var t,a,i;X&&(console.log("props ::",e),(0,f.LS)({ticket:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id,...X,view:!0,add:!0,update:!0,event:null===e||void 0===e||null===(a=e.data)||void 0===a||null===(i=a.event)||void 0===i?void 0:i._id},"event-form-fields").then((t=>{var a;!0===(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)&&(null===e||void 0===e||e.setMessage({type:1,content:"Form Data Inserted Successfully",okay:"Okay",icon:"success"})),K((e=>!e))})),Y(null),se())},ce=e=>{G(e)},ue=e=>{switch(null===e||void 0===e?void 0:e.type){case"text":case"password":case"email":case"buttonInput":case"number":case"mobilenumber":case"time":case"date":case"datetime":case"image":case"file":case"textarea":case"htmleditor":case"submit":case"button":case"linkbutton":case"widges":case"close":case"checkbox":case"select":case"multiSelect":case"info":case"html":case"line":case"title":case"hidden":return(0,k.jsx)("div",{onClick:()=>{I(e),V(null===e||void 0===e?void 0:e._id),de(e,null===e||void 0===e?void 0:e.type),r(!n)},children:(0,k.jsx)(h.A,{...e,countries:ie})});default:return null}},me=e=>{switch(null===e||void 0===e?void 0:e.type){case"text":case"password":case"email":case"buttonInput":case"number":case"mobilenumber":case"time":case"date":case"datetime":case"image":case"file":case"textarea":case"htmleditor":case"submit":case"button":case"linkbutton":case"widges":case"close":case"checkbox":case"select":case"multiSelect":case"info":case"html":case"line":case"title":case"hidden":return(0,k.jsx)("div",{onClick:()=>{E(e),V(null===e||void 0===e?void 0:e._id),de(e,null===e||void 0===e?void 0:e.type),p(!s)},children:(0,k.jsx)(h.A,{...e,countries:ie})});default:return null}},[he,ve]=(0,i.useState)(null),[ge]=(0,i.useState)([{type:"select",placeholder:"Type",name:"type",validation:"",default:$,tag:!0,label:"Type",showItem:"Type",required:!1,view:!0,filter:!1,add:!0,update:!0,apiType:"JSON",selectApi:[{id:"text",value:"Text",icon:"text"},{id:"password",value:"Password",icon:"password"},{id:"email",value:"Email",icon:"email"},{id:"number",value:"Number",icon:"number"},{id:"mobilenumber",value:"Mobile Number",icon:"mobilenumber"},{id:"time",value:"Time",icon:"time"},{id:"date",value:"Date",icon:"date"},{id:"datetime",value:"Date Time",icon:"datetime"},{id:"image",value:"Image",icon:"image"},{id:"file",value:"File",icon:"file"},{id:"textarea",value:"Text Area",icon:"textarea"},{id:"htmleditor",value:"Html Editor",icon:"paragraph"},{id:"checkbox",value:"Check Box",icon:"checkBox"},{id:"select",value:"Select",icon:"dropDown"},{id:"multiSelect",value:"Multi Select",icon:"multipleChoice"},{id:"info",value:"Info",icon:"info"},{id:"html",value:"Html",icon:"html"},{id:"line",value:"Line",icon:"line"},{id:"title",value:"Title",icon:"title"}]},{type:"text",placeholder:"Title",name:"title",condition:{item:"type",if:["title"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Title",required:!0,view:!0,add:!0,update:!0,apiType:"",selectApi:""},{type:"htmleditor",placeholder:"Content",name:"content",condition:{item:"type",if:["info","html"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Content",required:!0,view:!0,add:!0,update:!0,apiType:"",selectApi:""},{type:"text",placeholder:"Label",name:"label",condition:{item:"type",if:["line"],then:"disabled",else:"enabled"},validation:"",default:C?null===C||void 0===C?void 0:C.label:"",label:"Label",tag:!1,required:!1,view:!0,add:!0,update:!0,onChange:(e,t)=>{const{label:a}=t;return t.placeHolder=a,t}},{type:"text",placeholder:"Sub Label",name:"sublabel",condition:{item:"type",if:["line","title","info","html"],then:"disabled",else:"enabled"},validation:"",default:"",label:"Sub Label",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Place Holder",name:"placeholder",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea","select","multiSelect"],then:"enabled",else:"disabled"},validation:"",default:"",label:"Place Holder",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"hidden",placeholder:"Api Type",name:"apiType",condition:{item:"type",if:["select","multiSelect"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"CSV",tag:!1,label:"Api Type",required:!1,view:!0,add:!0,update:!0,apiType:"CSV",selectApi:"CSV"},{type:"textarea",placeholder:"Add options",name:"selectApi",condition:{item:"type",if:["select"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Add options",required:!1,view:!0,add:!0,update:!0},{type:"textarea",placeholder:"Select Api",name:"selectApi",condition:{item:"type",if:["multiSelect"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Select Api",required:!1,view:!0,add:!0,update:!0},{type:"textarea",placeholder:"Foot Note",name:"footnote",condition:{item:"type",if:["title","info","html","line"],then:"disabled",else:"enabled"},showItem:"",validation:"",default:"",tag:!1,label:"Foot Note",required:!1,view:!0,add:!0,update:!0},{type:"multiSelect",placeholder:"Allowed File Types",name:"allowedFileTypes",condition:{item:"type",if:["file"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Allowed File Types",required:!0,view:!0,add:!0,update:!0,apiType:"JSON",selectApi:[{id:"image/jpeg",value:"JPG/JPEG Image"},{id:"image/png",value:"PNG Image"},{id:"image/gif",value:"GIF Image"},{id:"application/pdf",value:"PDF Document"},{id:"application/msword",value:"Word Document (DOC)"},{id:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",value:"Word Document (DOCX)"},{id:"text/plain",value:"Text File"},{id:"text/csv",value:"CSV File"},{id:"application/vnd.ms-excel",value:"Excel Spreadsheet (XLS)"},{id:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",value:"Excel Spreadsheet (XLSX)"},{id:"image/webp",value:"WebP Image"},{id:"image/svg+xml",value:"SVG Image"},{id:"application/vnd.oasis.opendocument.text",value:"OpenDocument Text (ODT)"},{id:"application/vnd.oasis.opendocument.spreadsheet",value:"OpenDocument Spreadsheet (ODS)"},{id:"application/zip",value:"ZIP Archive"},{id:"application/x-rar-compressed",value:"RAR Archive"}]},{type:"hidden",placeholder:"Collection",name:"dbcollection",validation:"",default:"formData",label:"Collection",tag:!1,view:!0,add:!0,update:!0},{type:"hidden",placeholder:"Show Item",name:"showItem",validation:"",default:"",label:"Show Item",tag:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Default",name:"default",condition:{item:"type",if:["line","title","info","html"],then:"disabled",else:"enabled"},validation:"",default:"",label:"Default",tag:!1,view:!0,add:!0,update:!0},{type:"title",title:"Character Length",name:"sm",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea"],then:"enabled",else:"disabled"},add:!0,update:!0},{type:"text",placeholder:"Minimum",name:"minimum",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Minimum",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Maximum",name:"maximum",condition:{item:"type",if:["text","password","email","number","mobilenumber","textarea"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"",tag:!1,label:"Maximum",required:!1,view:!0,add:!0,update:!0},{type:"date",placeholder:"Minimum",name:"minDate",condition:{item:"type",if:["date","datetime"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"empty",tag:!1,label:"Minimum",required:!1,view:!0,add:!0,update:!0},{type:"date",placeholder:"Maximum",name:"maxDate",condition:{item:"type",if:["date","datetime"],then:"enabled",else:"disabled"},showItem:"",validation:"",default:"empty",tag:!1,label:"Maximum",required:!1,view:!0,add:!0,update:!0},{type:"title",title:"Permission Settings",name:"sm",add:!0,update:!0},{type:"hidden",placeholder:"Tag",name:"tag",validation:"",default:"true",value:!0,tag:!1,label:"Tag",required:!1,view:!0,add:!0,update:!0},{type:"checkbox",placeholder:"Required",name:"required",condition:{item:"type",if:["line","title","info","html"],then:"disabled",else:"enabled"},validation:"",default:"true",tag:!0,label:"Required",required:!1,view:!0,add:!0,update:!0},{type:"hidden",value:!0,placeholder:"View",name:"view",validation:"",tag:!1,label:"View",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"hidden",placeholder:"Add",value:!0,name:"add",validation:"",tag:!1,label:"Add",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"hidden",value:!0,placeholder:"Update",name:"update",validation:"",tag:!1,label:"Update",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"hidden",placeholder:"Filter",value:!0,name:"filter",validation:"",tag:!1,label:"Filter",required:!1,view:!0,add:!0,update:!0,default:"true"},{type:"title",title:"Condition Settings",name:"sm",add:!0,update:!0},{type:"checkbox",placeholder:"Enable Condition",name:"conditionEnabled",validation:"",default:"false",tag:!0,label:"Enable Condition",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Condition Checking Field",name:"conditionWhenField",condition:{item:"conditionEnabled",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Condition Checking Field",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Match Values",name:"conditionCheckMatch",condition:{item:"conditionEnabled",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Match Values",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"select",placeholder:"If Match",name:"conditionIfMatch",condition:{item:"conditionEnabled",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",apiType:"JSON",selectApi:[{id:"enabled",value:"Show This Filed"},{id:"disabled",value:"Hide This Filed"}],label:"Check Match Values",tag:!0,required:!1,view:!0,add:!0,update:!0}]);(0,i.useEffect)((()=>{const e=[...ge];e[0].default=$,ve(e)}),[$,ge]);(0,i.useEffect)((()=>{var t,a,i;(0,f.bQ)({ticket:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id,eventId:null===e||void 0===e||null===(a=e.data)||void 0===a||null===(i=a.event)||void 0===i?void 0:i._id},"ticket-form-data").then((e=>{var t,a;ee(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.response),ae(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.eventForm)}))}),[e,Q]),(0,i.useEffect)((()=>{(0,f.bQ)({},"country").then((e=>{var t;le(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.response)}))}),[]);const be=(0,w.FR)((0,w.MS)(w.AN,{activationConstraint:{distance:5}})),ye=t=>{let{field:a}=t;const{attributes:i,listeners:l,setNodeRef:d,transform:o,transition:n}=(0,A.gl)({id:null===a||void 0===a?void 0:a._id}),r={transform:S.Ks.Transform.toString(o),transition:n};return(0,k.jsxs)(O,{ref:d,style:r,className:a.type,...i,children:[ue(a),(0,k.jsx)(W,{src:u,isActive:!0,...l}),(0,k.jsx)(F,{src:m,isActive:!0,onClick:()=>(t=>{const a=null===t||void 0===t?void 0:t._id;null===e||void 0===e||e.setMessage({type:2,content:`Are you sure to delete '${null===t||void 0===t?void 0:t.label}'?`,proceed:"Delete",okay:"Cancel",onClose:async()=>{},onProceed:async()=>{(0,f.Wv)({id:a},"ticket-form-data").then((a=>{var i;!0===(null===a||void 0===a||null===(i=a.data)||void 0===i?void 0:i.success)?null===e||void 0===e||e.setMessage({type:1,content:`Field '${null===t||void 0===t?void 0:t.label}' deleted successfully!`,okay:"Okay",icon:"deleted"}):null===e||void 0===e||e.setMessage({type:1,content:a.customMessage,okay:"Okay",icon:"error"})})),K((e=>!e))}})})(a)})]})},fe=t=>{let{field:a,disabled:i}=t;const{attributes:l,listeners:d,setNodeRef:o,transform:n,transition:r}=(0,A.gl)({id:null===a||void 0===a?void 0:a._id,disabled:i}),s={transform:S.Ks.Transform.toString(n),transition:r};return(0,k.jsxs)(O,{ref:o,style:s,isActive:!0,disabled:i,className:a.type,...l,children:[me({...a,disabled:i}),!i&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(W,{src:u,isActive:!0,...d}),(0,k.jsx)(F,{src:m,isActive:!0,onClick:()=>(t=>{const a=null===t||void 0===t?void 0:t._id;null===e||void 0===e||e.setMessage({type:2,content:`Are You Sure, You Want To Delete ${null===t||void 0===t?void 0:t.label} ?`,proceed:"Yes",okay:"No",onClose:async()=>{},onProceed:async()=>{(0,f.Wv)({id:a},"event-form-fields").then((t=>{var a;!0===(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)&&(null===e||void 0===e||e.setMessage({type:1,content:"Form Data Deleted Successfully",okay:"Okay",icon:"deleted"}))})),K((e=>!e))}})})(a)})]})]})};return(0,k.jsxs)(k.Fragment,{children:[oe&&(0,k.jsx)(g.A,{customClass:"full-page",popupData:(0,k.jsx)(y.S$,{className:"",children:(0,k.jsx)(U,{isOpen:oe,onClose:re,eventFormFields:te,data:null===e||void 0===e?void 0:e.data})}),themeColors:c,closeModal:re,itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.event,title:"Primary Custom Fields"}}}),(0,k.jsxs)(y.S$,{className:"form",children:[(0,k.jsxs)(y.S$,{className:"form-builder-1",children:[(0,k.jsxs)(M,{children:[(0,k.jsx)(y.hE,{line:!1,title:"Preset Fields"}),null===B||void 0===B?void 0:B.map((e=>{let{label:t,icon:a,value:i,type:l}=e;return(0,k.jsx)(h.A,{type:"widges",value:t,icon:a,onChange:()=>ce({label:t,icon:a,value:i,type:l}),isSelected:(null===_||void 0===_?void 0:_.value)===i},i)})),(0,k.jsx)(y.hE,{line:!1,title:"Custom Fields"}),null===z||void 0===z?void 0:z.map((e=>{let{label:t,icon:a,value:i,type:l}=e;return(0,k.jsx)(h.A,{type:"widges",value:t,icon:a,onChange:()=>ce({label:t,icon:"",value:i,type:l}),isSelected:(null===_||void 0===_?void 0:_.value)===i},i)}))]}),(_||X)&&(0,k.jsxs)(q.wi,{className:"bottom",children:[(0,k.jsx)(h.A,{type:"close",value:"Cancel",onChange:()=>{G(null),Y(null)}}),(0,k.jsx)(h.A,{css:"",type:"submit",name:"submit",value:"Insert Field",onChange:()=>{_&&(()=>{var t;_&&((0,f.LS)({ticket:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t._id,..._,view:!0,add:!0,update:!0},"ticket-form-data").then((t=>{var a;!0===(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)&&(null===e||void 0===e||e.setMessage({type:1,content:"Form Data Inserted Successfully",okay:"Okay",icon:"success"})),K((e=>!e))})),G(null),se())})(),X&&pe()}})]})]}),(0,k.jsx)(y.S$,{className:"form-builder-2",isSidebarOpen:n,isEventSidebarOpen:s,children:(0,k.jsxs)(D,{children:[(0,k.jsx)(L,{children:(0,k.jsx)(x.F,{title:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.title,line:!1,description:null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.description})}),"Form"!==(null===e||void 0===e?void 0:e.data.type)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{style:{display:"flex",paddingBottom:"3px",justifyContent:"space-between"},children:[(0,k.jsx)(x.F,{title:"Primary Fields",description:"Standard information required for all tickets!",line:!0}),(0,k.jsx)(y.K0,{icon:"edit",ClickEvent:()=>re()})]}),(0,k.jsx)(w.Mp,{sensors:be,collisionDetection:w.fp,onDragEnd:async t=>{const{active:a,over:i}=t;if(i&&(null===a||void 0===a?void 0:a.id)!==(null===i||void 0===i?void 0:i.id)){const t=null===te||void 0===te?void 0:te.findIndex((e=>(null===e||void 0===e?void 0:e._id)===(null===a||void 0===a?void 0:a.id))),d=null===te||void 0===te?void 0:te.findIndex((e=>(null===e||void 0===e?void 0:e._id)===(null===i||void 0===i?void 0:i.id))),o=(0,A.be)(te,t,d).map(((e,t)=>({...e,orderId:t+1})));try{null===e||void 0===e||e.setLoaderBox(!0);const t=o.map((e=>(0,f.sS)({id:null===e||void 0===e?void 0:e._id,orderId:null===e||void 0===e?void 0:e.orderId},"event-form-fields")));await Promise.all(t),K((e=>!e)),null===e||void 0===e||e.setLoaderBox(!1)}catch(l){console.error("Error updating form fields:",l)}}},children:(0,k.jsx)(A.gB,{items:te.map((e=>e._id)),strategy:A._G,children:(0,k.jsx)(R,{disabled:!0,children:te.length>0&&te.map((e=>(0,k.jsx)(fe,{field:e,disabled:!0},e._id)))})})})]}),Z.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{style:{display:"flex",paddingTop:"Form"!==(null===e||void 0===e?void 0:e.data.type)?"20px":"0",justifyContent:"space-between"},children:(0,k.jsx)(x.F,{title:"Custom Fields",description:"Additional information specific to this ticket",line:!0})}),(0,k.jsx)(w.Mp,{sensors:be,collisionDetection:w.fp,onDragEnd:async t=>{const{active:a,over:i}=t;if(i&&(null===a||void 0===a?void 0:a.id)!==(null===i||void 0===i?void 0:i.id)){const t=null===Z||void 0===Z?void 0:Z.findIndex((e=>(null===e||void 0===e?void 0:e._id)===(null===a||void 0===a?void 0:a.id))),d=null===Z||void 0===Z?void 0:Z.findIndex((e=>(null===e||void 0===e?void 0:e._id)===(null===i||void 0===i?void 0:i.id))),o=(0,A.be)(Z,t,d).map(((e,t)=>({...e,orderId:t+1})));try{null===e||void 0===e||e.setLoaderBox(!0);const t=o.map((e=>(0,f.sS)({id:null===e||void 0===e?void 0:e._id,orderId:null===e||void 0===e?void 0:e.orderId},"ticket-form-data")));await Promise.all(t),K((e=>!e)),null===e||void 0===e||e.setLoaderBox(!1)}catch(l){console.error("Error updating form fields:",l)}}},children:(0,k.jsx)(A.gB,{items:null===Z||void 0===Z?void 0:Z.map((e=>null===e||void 0===e?void 0:e._id)),strategy:A._G,children:(0,k.jsx)(R,{children:null===Z||void 0===Z?void 0:Z.map((e=>(0,k.jsx)(ye,{field:e},null===e||void 0===e?void 0:e._id)))})})})]})]})}),(0,k.jsx)(N,{data:null===e||void 0===e?void 0:e.data,setMessage:null===e||void 0===e?void 0:e.setMessage}),d&&(0,k.jsx)(g.A,{customClass:"medium",popupData:(0,k.jsx)(y.S$,{className:"column",children:(0,k.jsxs)(y.S$,{className:"custom",children:[null===z||void 0===z?void 0:z.map((e=>{let{label:t,icon:a,value:i,type:l}=e;return(0,k.jsx)(h.A,{type:"widges",value:t,icon:a,onChange:()=>{Y({label:t,icon:a,value:i,type:l})},isSelected:(null===X||void 0===X?void 0:X.value)===i},i)})),(0,k.jsxs)(y.S$,{children:[(0,k.jsx)(y.$n,{icon:"close",ClickEvent:()=>{d&&G([]),o(!d)},value:"Cancel",type:"secondary"}),(0,k.jsx)(y.$n,{icon:"save",isDisabled:!X||0===(null===X||void 0===X?void 0:X.length),ClickEvent:()=>{pe()},value:"Insert Field",type:"primary",align:"right"})]})]})}),themeColors:c,closeModal:se,itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:"",title:"Primary Custom Fields"}}}),n&&he&&(0,k.jsx)(v.A,{useCaptcha:!1,formType:"post",header:"Properties",description:"",formInput:he,formValues:j,submitHandler:async t=>{(0,f.sS)({id:H,...t},"ticket-form-data").then((t=>{var a;!0===(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)&&(null===e||void 0===e||e.setMessage({type:1,content:"Form Input Updated Successfully",okay:"Okay",icon:"success"}),se())}))},button:"Save",isOpenHandler:se,isOpen:!0,plainForm:!0,formMode:"single"},"elements"+$),s&&he&&(0,k.jsx)(v.A,{useCaptcha:!1,formType:"post",header:"Properties",description:"",formInput:he,formValues:P,submitHandler:async t=>{(0,f.sS)({id:H,...t},"event-form-fields").then((t=>{var a;!0===(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)&&(null===e||void 0===e||e.setMessage({type:1,content:"Form Input Updated Successfully",okay:"Okay",icon:"success"}),se())}))},button:"Save",isOpenHandler:se,isOpen:!0,plainForm:!0,formMode:"single"},"elements"+$)]})]})})),V=C.Ay.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow-y: auto;
  z-index: 1001;
  @media print {
    position: static;
    overflow: visible;
  }
`,$=C.Ay.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);

  @media print {
    display: none;
  }
`,J=C.Ay.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media print {
    min-height: auto;
    padding: 0;
  }
`,_=C.Ay.div`
  position: relative;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  max-width: 210mm;

  @media print {
    box-shadow: none;
    border-radius: 0;
  }
`,G=C.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;

  @media print {
    display: none;
  }
`,X=C.Ay.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.2s;

  ${e=>e.primary&&"\n    background-color: #3b82f6;\n    color: white;\n    \n    &:hover {\n      background-color: #2563eb;\n    }\n  "}

  ${e=>e.secondary&&"\n    background-color: #f3f4f6;\n    \n    &:hover {\n      background-color: #e5e7eb;\n    }\n  "}
`,Y=C.Ay.div`
  padding: 1rem;

  @media print {
    padding: 0;
  }
`,Q=C.Ay.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(${e=>e.cardsPerRow}, minmax(0, 1fr));

  @media print {
    gap: 0;
  }
`,K=C.Ay.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  padding: 1rem;
  width: ${e=>e.width}mm;
  height: ${e=>e.height}mm;
  break-inside: avoid;

  @media print {
    page-break-inside: avoid;
  }
`,Z=C.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,ee=C.Ay.img`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
`,te=C.Ay.div`
  h3 {
    font-weight: 600;
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    color: #4b5563;
  }
`,ae=C.Ay.style`
  @media print {
    @page {
      size: ${e=>e.paperSize};
      margin: 0;
    }
    body {
      margin: 0;
      padding: 0;
    }
  }
`,ie=e=>{let{isOpen:t,onClose:a,paperSize:l="A4",idCardWidth:d=90,idCardHeight:o=54,attendees:n=[{id:1,name:"John Doe",role:"Developer",avatar:"/api/placeholder/100/100"},{id:2,name:"Jane Smith",role:"Designer",avatar:"/api/placeholder/100/100"},{id:3,name:"Mike Johnson",role:"Manager",avatar:"/api/placeholder/100/100"}]}=e;if((0,i.useEffect)((()=>{const e=e=>{"Escape"===e.key&&a()};return t&&(document.body.style.overflow="hidden",window.addEventListener("keydown",e)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",e)}}),[t,a]),!t)return null;const r=Math.floor({A4:{width:210,height:297}}[l].width/d);return(0,k.jsxs)(V,{children:[(0,k.jsx)($,{onClick:a}),(0,k.jsx)(J,{children:(0,k.jsxs)(_,{children:[(0,k.jsxs)(G,{children:[(0,k.jsx)("h2",{children:"Print ID Cards"}),(0,k.jsxs)("div",{children:[(0,k.jsx)(X,{primary:!0,onClick:()=>{window.print()},children:"Print"}),(0,k.jsx)(X,{secondary:!0,onClick:a,style:{marginLeft:"0.5rem"},children:"\xd7"})]})]}),(0,k.jsx)(Y,{children:(0,k.jsx)(Q,{cardsPerRow:r,children:n.map((e=>(0,k.jsx)(K,{width:d,height:o,children:(0,k.jsxs)(Z,{children:[(0,k.jsx)(ee,{src:e.avatar,alt:e.name}),(0,k.jsxs)(te,{children:[(0,k.jsx)("h3",{children:e.name}),(0,k.jsx)("p",{children:e.role})]})]})},e.id)))})})]})}),(0,k.jsx)(ae,{paperSize:l})]})},le=C.Ay.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  margin: 0 auto;
`,de=C.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 70%;
`,oe=C.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
`,ne=C.Ay.div`
  width: 100%;
  margin-top: 1rem;
`,re=C.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,se=C.Ay.div`
  width: 100%;
`,pe=C.Ay.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    background-color: #f5f5f5;
  }

  .icon-container {
    margin-right: 1rem;
  }

  .text-container {
    flex: 1;

    span {
      display: block;
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    p {
      color: #666;
      font-size: 0.875rem;
      margin: 0;
    }
  }

  .right-arrow {
    color: #666;
    font-size: 0.875rem;
  }
`,ce=C.Ay.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,ue=C.Ay.div`
  width: 100%;
  height: auto;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    width: 100%;
    object-fit: contain;
  }
`,me=C.Ay.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 0rem;
`,he=C.Ay.div`
  border: ${e=>e.$isSelected?"2px solid #2563eb":"1px solid #e5e7eb"};
  border-radius: 8px;
  overflow: hidden;
`,ve=C.Ay.div`
  cursor: pointer;
`,ge=C.Ay.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`,be=C.Ay.div`
  padding: 0.5rem;
  text-align: center;
  border-top: 1px solid #e5e7eb;
  background: ${e=>e.$isSelected?"#eff6ff":"#ffffff"};
`,ye=C.Ay.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem;
  border-top: 1px solid #e5e7eb;
  background: #f8f9fa;
`,fe=C.Ay.button`
  flex: 1;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #2563eb;
  background: white;
  border: 1px solid #2563eb;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #eff6ff;
  }
`,xe=C.Ay.a`
  flex: 1;
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background: #f8f9fa;
  }
`,we=C.Ay.div`
  margin-top: 0rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,Ae=C.Ay.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
`,Se=C.Ay.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`,Ce=C.Ay.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`,Te=C.Ay.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,ke=C.Ay.div`
  position: relative;
  width: 100%;
  padding: 0 40px;
  margin: 20px 0;
`,je=C.Ay.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(-${e=>e.$currentIndex*(100/e.$slidesToShow)}%);
`,Ie=C.Ay.div`
  flex: 0 0 ${e=>100/e.$slidesToShow}%;
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    flex: 0 0 ${e=>e.$slidesToShow<=2?"50%":100/e.$slidesToShow+"%"};
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`,Pe=C.Ay.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }
`,Ee=C.Ay.div`
  overflow: hidden;
`,qe=C.Ay.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`,Ne=C.Ay.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.$active?"#2563eb":"#e5e7eb"};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${e=>e.$active?"#2563eb":"#d1d5db"};
  }
`,De=e=>{const[t,a]=(0,i.useState)(null),[l,d]=(0,i.useState)(null),[o,n]=(0,i.useState)(!1),[r,s]=(0,i.useState)(null),[p,c]=(0,i.useState)([]),[u,m]=(0,i.useState)(!0),[h,v]=(0,i.useState)(!1),[g,b]=(0,i.useState)(!0),[x,w]=(0,i.useState)(0),[A,S]=(0,i.useState)(3),{setMessage:C}=e;(0,i.useEffect)((()=>{(async()=>{try{var e;m(!0);const t=await(0,f.bQ)({},"badge-template");null!==(e=t.data)&&void 0!==e&&e.response&&(c(t.data.response),t.data.response.length>0&&s(t.data.response[0]))}catch(t){console.error("Error fetching badge templates:",t),C({type:2,content:"Failed to load badge templates. Please try again."})}finally{m(!1)}})()}),[C]),(0,i.useEffect)((()=>{var t;null!==(t=e.data)&&void 0!==t&&t.idCardBackground&&a(`https://event-manager.syd1.cdn.digitaloceanspaces.com/${e.data.idCardBackground}`)}),[e.data]);const j=e=>{if(!r)return;const t={name:"isdisplayname",qr:"isQrcode",event:"isdisplayEvent",ticket:"isdisplayTicket",defaultTemplate:"isDefault"};s((a=>({...a,[t[e]]:!a[t[e]]}))),v(!0)},I=()=>{a(null),d(null),C({type:0,content:""}),v(!1);const e=document.getElementById("idCardBackground");e&&(e.value="")};(0,i.useEffect)((()=>{const e=()=>{window.innerWidth<=768?S(1):window.innerWidth<=1024?S(2):S(3)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);return(0,k.jsxs)(i.Fragment,{children:[(0,k.jsxs)(le,{children:[(0,k.jsxs)(de,{children:[(0,k.jsx)(ne,{children:(0,k.jsx)(re,{children:(0,k.jsx)(se,{children:(0,k.jsx)(E,{customClass:"plain",items:[{key:"template",label:"Choose Badge Template",icon:"template",content:(0,k.jsx)(i.Fragment,{children:u?(0,k.jsx)(Te,{children:"Loading badge templates..."}):(0,k.jsxs)(ke,{children:[(0,k.jsx)(Pe,{className:"prev",onClick:()=>{w((e=>0===e?0:e-1))},disabled:0===x,children:(0,k.jsx)(T.A0,{icon:"ArrowLeft"})}),(0,k.jsx)(Ee,{children:(0,k.jsx)(je,{$currentIndex:x,$slidesToShow:A,children:p.map((e=>(0,k.jsx)(Ie,{$slidesToShow:A,children:(0,k.jsxs)(he,{$isSelected:(null===r||void 0===r?void 0:r._id)===e._id,children:[(0,k.jsxs)(ve,{onClick:()=>(e=>{var t;if(s(e),e._id===(null===(t=p[0])||void 0===t?void 0:t._id)){a(null),d(null);const e=document.getElementById("idCardBackground");e&&(e.value="")}})(e),children:[(0,k.jsx)(ge,{src:`https://event-manager.syd1.cdn.digitaloceanspaces.com/${e.templateImage}`||"/api/placeholder/250/350",alt:e.templateName}),(0,k.jsx)(be,{$isSelected:(null===r||void 0===r?void 0:r._id)===e._id,children:e.templateName})]}),(0,k.jsxs)(ye,{children:[(0,k.jsx)(fe,{onClick:t=>(async(e,t)=>{e.stopPropagation();try{const e=document.createElement("a");e.href=`https://event-manager.syd1.cdn.digitaloceanspaces.com/${t.templateImage}`,e.download=`${t.templateName.toLowerCase()}-template.png`,document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(a){console.error("Error downloading template:",a),C({type:2,content:"Failed to download template. Please try again."})}})(t,e),children:"Download"}),(0,k.jsx)(xe,{href:e.canvaUrl||"#",target:"_blank",rel:"noopener noreferrer",children:"Edit in Canva"})]})]})},e._id)))})}),(0,k.jsx)(Pe,{className:"next",onClick:()=>{w((e=>e+A>=p.length?e:e+1))},disabled:x+A>=p.length,children:(0,k.jsx)(T.A0,{icon:"arrowRight"})}),(0,k.jsx)(qe,{children:Array.from({length:Math.ceil(p.length/A)}).map(((e,t)=>(0,k.jsx)(Ne,{$active:Math.floor(x/A)===t,onClick:()=>(e=>{w(e)})(t*A)},t)))})]})})},{key:"image-upload",label:"Upload Image",icon:"image",content:(0,k.jsx)(i.Fragment,{children:r&&r._id&&r.isUploadImage&&(0,k.jsxs)(pe,{htmlFor:"idCardBackground",style:{position:"relative"},children:[(0,k.jsx)("div",{className:"icon-container",children:(0,k.jsx)(ce,{children:t?(0,k.jsx)("img",{src:t,alt:"Preview",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}):(0,k.jsx)(T.A0,{icon:"image",style:{fontSize:"24px"}})})}),(0,k.jsxs)("div",{className:"text-container",children:[(0,k.jsx)("span",{children:"Upload Image"}),(0,k.jsx)("p",{children:"Upload your own badge image for customization"})]}),(0,k.jsx)("input",{type:"file",id:"idCardBackground",name:"idCardBackground",accept:"image/*",style:{display:"none"},onChange:e=>{const t=e.target.files[0];if(t){const i=new FileReader;i.onloadend=()=>{a(i.result),d(e.target.files),v(!0)},i.readAsDataURL(t)}}}),(0,k.jsx)(T.A0,{icon:"arrowRight"})]})})},{key:"image-settings",label:"Set Labels on Card",icon:"text",content:(0,k.jsxs)(we,{children:[(0,k.jsx)("h3",{style:{fontSize:"1rem",fontWeight:"500",marginBottom:"0.5rem"},children:"Badge Components"}),(0,k.jsxs)(Ae,{children:[(0,k.jsxs)(Se,{children:[(0,k.jsx)(Ce,{type:"checkbox",checked:null===r||void 0===r?void 0:r.isdisplayname,onChange:()=>j("name")}),"Display Name"]}),(0,k.jsxs)(Se,{children:[(0,k.jsx)(Ce,{type:"checkbox",checked:null===r||void 0===r?void 0:r.isQrcode,onChange:()=>j("qr")}),"QR Code"]}),(0,k.jsxs)(Se,{children:[(0,k.jsx)(Ce,{type:"checkbox",checked:null===r||void 0===r?void 0:r.isdisplayEvent,onChange:()=>j("event")}),"Event Name"]}),(0,k.jsxs)(Se,{children:[(0,k.jsx)(Ce,{type:"checkbox",checked:null===r||void 0===r?void 0:r.isdisplayTicket,onChange:()=>j("ticket")}),"Ticket"]}),(0,k.jsxs)(Se,{children:[(0,k.jsx)(Ce,{type:"checkbox",checked:null===r||void 0===r?void 0:r.isDefault,onChange:()=>j("defaultTemplate")}),"Default Template"]})]})]})}]})})})}),(0,k.jsxs)(me,{children:[(0,k.jsx)(y.$n,{type:"secondary",ClickEvent:I,value:"Cancel"}),(0,k.jsx)(y.$n,{type:"primary",isDisabled:!h,ClickEvent:async()=>{var t;if(r)if(l||r._id===(null===(t=p[0])||void 0===t?void 0:t._id)){n(!0);try{var a;const t={id:null===(a=e.data)||void 0===a?void 0:a._id};l&&(t.idCardBackground=l);const i=await(0,f.sS)(t,"ticket");200===(null===i||void 0===i?void 0:i.status)?(v(!1),I(),C({type:1,content:"Badge updated successfully",proceed:"Okay",icon:"deleted"})):C({type:1,content:"Failed to update badge. Please try again.",proceed:"error"})}catch(i){console.error("Error updating badge:",i),C({type:2,content:i.message||"Failed to update badge. Please try again."})}finally{n(!1)}}else C({type:2,content:"Please select an image to upload"});else C({type:2,content:"Please select a template"})},value:o?"Submitting...":"Submit"})]})]}),(0,k.jsxs)(oe,{children:[(0,k.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"Preview"}),t?(0,k.jsxs)(ue,{children:[(0,k.jsx)("img",{src:t,alt:"Badge Background"}),(0,k.jsx)(y.$n,{value:"Generate PDF for All Attendeees",ClickEvent:()=>{b(!0)}})]}):(0,k.jsx)("div",{className:"text-center text-gray-500 py-8",children:"No image selected for preview"})]})]}),g&&(0,k.jsx)(ie,{onClose:b})]})};var Me=a(41011),Le=a(15908),Re=a(37415);const Oe=(0,l.A)((e=>{var t,a;const i=null===e||void 0===e||null===(t=e.openData)||void 0===t||null===(a=t.data)||void 0===a?void 0:a._id;return(0,k.jsx)(y.S$,{className:"dashboard",children:(0,k.jsx)(Le.C,{className:"full noborder",children:(0,k.jsx)(Re.A,{dataType:"API",parents:{event:i},dataItem:"dashboard/insta",title:"Photo Usage Analytics",description:"See your Photo Usage Analytics here."})},1)})}));var Fe=a(59840),We=a(37784),Be=a(41210);const ze=C.Ay.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,Ue=(0,C.Ay)(Fe.p)`
  &:hover {
    border: 2px dashed blue; /* Show border on hover */
  }
`,He=C.Ay.div`
  width: 30%;
  padding: 0px;
  padding-top: 10px;
  border-left: 1px solid rgb(226 228 232);
  overflow-y: auto;
  gap: 16px;
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
`,Ve=C.Ay.div`
  display: flex;
  justify-content: space-between;
`,$e=C.Ay.div`
  /* margin-bottom: 16px; */
  display: flex;
  gap: 10px;
  margin: 20px 0px 0px;
`,Je=C.Ay.div`
  /* margin-bottom: 16px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${s.D.stroke.soft};
  padding: 10px;
  border-radius: 10px;
  margin: 0 10px;
  &.nomargin {
    margin: 0px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    background: white;
    left: 0;
    right: 0;
    border: 0;
    height: 80px;
    border: 1px solid rgb(226, 228, 233);
    position: sticky;
    bottom: 10px;
    top: auto;
    width: max-content;
    margin: auto;
  }
`,_e=C.Ay.div`
  /* margin-bottom: 16px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Ge=C.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  cursor: move;
  border-radius: 10px;
  border: 1px solid rgb(226, 228, 233);
  background-color: ${e=>{let{isSelected:t}=e;return t?"#e0e0e0":"transparent"}};
  &:hover {
    background-color: #f5f5f5;
  }
`,Xe=C.Ay.div`
  width: 70%;
  padding: 0px 20px 0px;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
`,Ye=C.Ay.div`
  width: ${e=>{let{width:t}=e;return t||700}}px;
  min-height: ${e=>{let{height:t}=e;return t||400}}px;
  background-color: #f5f5f5;
  /* background-image: url(${e=>{let{backgroundImageUrl:t}=e;return t||"none"}}); */
  background-size: cover;
  background-position: center;
  /* border: 1px solid #ccc; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
  margin: 0 auto 40px;
  overflow: hidden;
  margin-top: 20px;
`,Qe=C.Ay.div`
  color: ${e=>{let{color:t}=e;return t||"#000"}};
  font-size: ${e=>{let{fontSize:t}=e;return t||"16px"}};
  font-weight: ${e=>{let{fontWeight:t}=e;return t||"normal"}};
  font-style: ${e=>{let{fontStyle:t}=e;return t||"normal"}};
  text-align: ${e=>{let{textAlign:t}=e;return t||"left"}};
  align-content: ${e=>{let{alignContent:t}=e;return t||"center"}};
  line-height: ${e=>{let{lineHeight:t}=e;return t||1.2}}px;
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  outline: none;
`,Ke=C.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${e=>{let{borderRadius:t}=e;return t||0}}px;
  border: ${e=>{let{borderWidth:t,borderColor:a}=e;return t?`${t}px solid ${a}`:"none"}};
  outline: none;
`,Ze=e=>{var t;let{data:a,setLoaderBox:l,setMessage:d}=e;const[o,n]=(0,i.useState)({}),[r,s]=(0,i.useState)(null),[p,c]=(0,i.useState)(null!==(t=a.posterDate)&&void 0!==t?t:[]),[u,m]=(0,i.useState)(!1),[v,g]=(0,i.useState)(0),[b,w]=(0,i.useState)(null),[A,S]=(0,i.useState)(null),[C,T]=(0,i.useState)(700),[j,I]=(0,i.useState)(700),[P,E]=(0,i.useState)(!1),[N,D]=(0,i.useState)(!1),[M,L]=(0,i.useState)(10),R=(0,i.useRef)(p);(0,i.useEffect)((()=>{const e=JSON.stringify(p)!==JSON.stringify(R.current);m(e)}),[p]);(0,i.useEffect)((()=>{m(!0)}),[p]);const O=(0,i.useCallback)((async()=>{try{var e;l(!0);const t=(await(0,f.bQ)({id:a._id},"advocacy-poster")).data.data,i=JSON.parse(null!==(e=t.imageBulderData)&&void 0!==e?e:"[]");n(t),g(i.length),c(i),T(t.layoutWidth),I(t.layoutHeight),l(!1)}catch(t){console.error("Error fetching poster data:",t),l(!1)}}),[a._id,l]);(0,i.useEffect)((()=>{P||(E(!0),O())}),[a,P,O]);const F=(e,t)=>{n((a=>({...a,[e]:t})))},W=(e,t)=>{m(!0),c((a=>a.map((a=>a.id===e?{...a,...t}:a))))},B=e=>{w(e)};(0,i.useEffect)((()=>{const e=e=>{if(null!==b){const t=e.shiftKey?10:1,a=p.find((e=>e.id===b));if(!a)return;let i=a.positionX,l=a.positionY;switch(e.key){case"ArrowUp":l-=t,e.preventDefault();break;case"ArrowDown":l+=t,e.preventDefault();break;case"ArrowLeft":i-=t,e.preventDefault();break;case"ArrowRight":i+=t,e.preventDefault();break;default:return}W(b,{positionX:i,positionY:l})}};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[b,p]);const z=e=>/^[a-z0-9-]+$/.test(e),U=(0,i.useRef)(null);return(0,k.jsxs)(ze,{children:[(0,k.jsxs)(Xe,{children:[(0,k.jsxs)(Ve,{children:[(0,k.jsx)(x.z,{line:!1,title:"Poster Preview",description:"Manage your poster, move, resize object in the poster!"})," ",(0,k.jsxs)($e,{onMouseEnter:()=>D(!0),children:[(0,k.jsx)(y.DJ,{min:5,max:10,label:"Scale Layout",value:M,onChange:e=>{console.log(e),L(parseFloat(e))}}),(0,k.jsx)(y.$n,{align:"theme",icon:"add",ClickEvent:()=>(()=>{const e={id:v,type:"text",content:"Sample Text",color:"#000000",fontSize:16,fontWeight:"normal",fontStyle:"normal",textAlign:"left",alignContent:"start",lineHeight:1.2,positionX:0,positionY:0,width:200,height:50,name:`name${v}`,label:`Text ${v}`};c([...p,e]),g(v+1)})(),value:"Add Text"}),(0,k.jsx)(y.$n,{align:"theme",icon:"add",ClickEvent:()=>(()=>{const e={id:v,type:"image",src:null,positionX:0,positionY:0,width:100,height:100,borderRadius:0,borderWidth:0,borderColor:"#000000",name:`name${v}`,label:`Text ${v}`,isProfilePicture:!1};c([...p,e]),g(v+1)})(),value:"Add Image"}),(0,k.jsx)(y.$n,{align:"theme",icon:"download",ClickEvent:()=>{D(!0),(async()=>{try{l(!0);const e=await(0,f.u)({id:a._id},"https://poster-builder-api.eventhex.ai/api/v1/user/download-poster");if(console.log(e),200===e.status){const t=e.data.response,a=atob(t),i=new ArrayBuffer(a.length),d=new Uint8Array(i);for(let e=0;e<a.length;e++)d[e]=a.charCodeAt(e);const o=new Blob([d],{type:"image/png"}),n=document.createElement("a");n.href=URL.createObjectURL(o),n.download="event-poster.png",document.body.appendChild(n),n.click(),document.body.removeChild(n),l(!1)}else console.error("Error downloading poster:",e.message),l(!1)}catch(e){console.error("Error downloading poster:",e),l(!1)}})()},value:"Generate Sample"})]})]}),(0,k.jsxs)(Ye,{onMouseEnter:()=>D(!1),ref:U,width:o.layoutWidth||C,height:o.layoutHeight||j,children:[o.backgroundImage&&(0,k.jsx)("img",{style:{position:"absolute",objectFit:"cover",width:"100%"},alt:"background",src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+o.backgroundImage,onLoad:()=>{console.log("Background image loaded")}}),p.map((e=>(0,k.jsxs)(Ue,{size:{width:e.width,height:e.height},position:{x:e.positionX,y:e.positionY},bounds:"parent",onDragStart:()=>B(e.id),onDragStop:(t,a)=>W(e.id,{positionX:a.x,positionY:a.y}),onResizeStart:()=>B(e.id),onResizeStop:(t,a,i,l,d)=>W(e.id,{width:i.offsetWidth,height:i.offsetHeight,positionX:d.x,positionY:d.y}),onClick:()=>B(e.id),style:{border:N?"2px dashed transparent":b===e.id?"2px dashed blue":"2px dashed rgb(240 240 240 / 14%)"},children:["text"===e.type&&(0,k.jsx)(Qe,{color:e.color,fontSize:`${e.fontSize}px`,fontWeight:e.fontWeight,fontStyle:e.fontStyle,textAlign:e.textAlign,alignContent:e.alignContent,lineHeight:e.lineHeight,children:e.content}),"image"===e.type&&(0,k.jsx)(Ke,{onError:e=>{e.target.src=Be.hz},src:e.src,alt:"Element Image",borderRadius:e.borderRadius,borderWidth:e.borderWidth,borderColor:e.borderColor})]},e.id)))]}),null!==b&&(0,k.jsx)(Je,{className:"nomargin",children:(()=>{const e=p.find((e=>e.id===b));return e?"text"===e.type?(0,k.jsxs)(q.lV,{className:"double plain horizontal",children:[(0,k.jsx)(y.DT,{min:8,max:70,addValue:1,align:"control",label:"Font Size",placeHolder:"Font Size",onChange:t=>W(e.id,{fontSize:Number(t)}),value:e.fontSize}),(0,k.jsx)(y.DT,{min:8,max:70,addValue:1,align:"control",label:"Line Height",placeHolder:"Line Height",onChange:t=>W(e.id,{lineHeight:Number(t)}),value:e.lineHeight}),(0,k.jsx)(y.DT,{min:10,max:C,align:"control",label:"Width",placeHolder:"Width",onChange:t=>W(e.id,{width:Number(t)}),value:e.width}),(0,k.jsx)(y.DT,{min:10,max:j,align:"control",label:"Height",placeHolder:"Height",onChange:t=>W(e.id,{height:Number(t)}),value:e.height}),(0,k.jsx)(y.sk,{align:"control",label:"Text Color",placeHolder:"Select Color",onChange:t=>W(e.id,{color:t}),value:e.color}),(0,k.jsx)(y.l6,{align:"control",label:"Hor. Align",selectApi:[{id:"left",value:"Left"},{id:"center",value:"Center"},{id:"right",value:"Right"}],value:e.textAlign,onSelect:t=>W(e.id,{textAlign:t.id})},`alignment-${b}`),(0,k.jsx)(y.l6,{align:"control",label:"Ver. Align",selectApi:[{id:"start",value:"Top"},{id:"center",value:"Center"},{id:"end",value:"End"}],value:e.alignContent,onSelect:t=>W(e.id,{alignContent:t.id})},`valignment-${b}`),(0,k.jsx)(y.l6,{align:"control",label:"Font Weight",selectApi:[{id:"normal",value:"Normal"},{id:"bold",value:"Bold"}],value:e.fontWeight,onSelect:t=>W(e.id,{fontWeight:t.id})},`font-weight-${b}`),(0,k.jsx)(y.l6,{align:"control",label:"Font Style",selectApi:[{id:"normal",value:"Normal"},{id:"italic",value:"Italic"}],value:e.fontStyle,onSelect:t=>W(e.id,{fontStyle:t.id})},`font-style-${b}`)]}):"image"===e.type?(0,k.jsxs)(q.lV,{className:"double plain horizontal",children:[(0,k.jsx)(y.DT,{min:0,max:100,align:"control",label:"Radius",placeHolder:"Border Radius",onChange:t=>W(e.id,{borderRadius:Number(t)}),value:e.borderRadius}),(0,k.jsx)(y.DT,{min:0,max:5,align:"control",label:"Border Width",placeHolder:"Border Width",onChange:t=>W(e.id,{borderWidth:Number(t)}),value:e.borderWidth}),(0,k.jsx)(y.DT,{min:0,max:300,align:"control",label:"Width",placeHolder:"Width",onChange:t=>W(e.id,{width:Number(t)}),value:e.width}),(0,k.jsx)(y.DT,{min:0,max:300,align:"control",label:"Height",placeHolder:"Height",onChange:t=>W(e.id,{height:Number(t)}),value:e.height}),(0,k.jsx)(y.sk,{align:"control",label:"Border Color",placeHolder:"Border Color",onChange:t=>W(e.id,{borderColor:t}),value:e.borderColor})]}):void 0:null})()})]}),(0,k.jsxs)(He,{children:[(0,k.jsxs)(Je,{children:[(0,k.jsx)(x.F,{title:"Layers",description:"All elements added to the poster!"}),(0,k.jsx)(_e,{children:p.length>0?p.map(((e,t)=>(0,k.jsxs)(Ge,{isSelected:b===e.id,draggable:!0,onDragStart:()=>(e=>{S(e)})(t),onDragOver:e=>((e,t)=>{t.preventDefault()})(0,e),onDrop:()=>(e=>{if(null===A)return;const t=[...p],[a]=t.splice(A,1);t.splice(e,0,a),c(t),S(null)})(t),onClick:()=>w(e.id),children:[(0,k.jsx)("div",{children:"text"===e.type?e.content:e.type.charAt(0).toUpperCase()+e.type.slice(1)+` Element ${t+1}`}),(0,k.jsx)(y.K0,{icon:"delete",ClickEvent:t=>{var a;t.stopPropagation(),a=e.id,c((e=>e.filter((e=>e.id!==a)))),b===a&&w(null)}})]},e.id))):(0,k.jsx)(We.Ay,{icon:"layers",shortName:"layes"})})]}),null!==b&&(0,k.jsxs)(Je,{children:[(0,k.jsx)(x.F,{title:"Content",description:"Set your element content!"}),(()=>{const e=p.find((e=>e.id===b));return e?"text"===e.type?(0,k.jsxs)(q.lV,{className:"double plain ",children:[(0,k.jsx)(y.fI,{align:"full",label:"Set Label for Form",placeHolder:"Label in Form",onChange:t=>W(e.id,{label:t}),value:e.label}),(0,k.jsx)(y.fI,{align:"full",label:"Sample Content",placeHolder:"Sample Text",onChange:t=>W(e.id,{content:t}),value:e.content})]}):"image"===e.type?(0,k.jsxs)(q.lV,{className:"double plain ",children:[(0,k.jsx)(y.fI,{align:"full",label:"Set Label for Form",placeHolder:"Label in Form",onChange:t=>W(e.id,{label:t}),value:e.label}),(0,k.jsx)(h.A,{customClass:"full",type:"image",label:"Image Source",formValues:{old_backgroundImage:""},value:"",name:"backgroundImage",onChange:t=>((e,t)=>{const a=URL.createObjectURL(t);return W(e,{src:a}),()=>{URL.revokeObjectURL(a)}})(e.id,t.target.files[0])})]}):void 0:null})()]}),(0,k.jsxs)(Je,{children:[(0,k.jsx)(x.F,{title:"Layout Settings",description:"Set the layout for the poster"}),(0,k.jsxs)(q.lV,{className:"double plain",children:[(0,k.jsx)(h.A,{update:!0,type:"image",formType:"put",label:"Background Image",disabled:!1,formValues:{old_backgroundImage:o.backgroundImage,backgroundImage:o.backgroundImage},value:"backgroundImageUrl",name:"backgroundImage",onChange:e=>{const{files:t}=e.target;s(t)}}),(0,k.jsx)(y.fI,{align:"half",label:"Width",placeHolder:"Width",onChange:e=>F("layoutWidth",Number(e)),value:o.layoutWidth||C}),(0,k.jsx)(y.fI,{align:"half",label:"Height",placeHolder:"Height",onChange:e=>F("layoutHeight",Number(e)),value:o.layoutHeight||j}),(0,k.jsx)(y.fI,{align:"full",label:"Slug",placeHolder:"Slug",onChange:e=>{F("slug",e)},value:o.slug})]})]}),u&&(0,k.jsxs)(q.wi,{className:"embed popup",children:[(0,k.jsx)(h.A,{type:"close",value:"Discard Changes",onChange:()=>{c(R.current),m(!1),w(null)}}),(0,k.jsx)(h.A,{type:"submit",name:"submit",value:"Publish",onChange:async()=>{l(!0),z(o.slug)?r?(await(0,f.sS)({backgroundImage:r,id:a._id,imageBulderData:JSON.stringify(p),layoutHeight:o.layoutHeight,slug:o.slug,layoutWidth:o.layoutWidth},"advocacy-poster"),O()):await(0,f.sS)({id:a._id,imageBulderData:JSON.stringify(p),layoutHeight:o.layoutHeight,slug:o.slug,layoutWidth:o.layoutWidth},"advocacy-poster"):d({content:"Please enter a valid slug",type:1,icon:"error"}),l(!1)}})]})]})]})};var et=a(59478),tt=a(62629),at=a(42574),it=a(19233),lt=a(28006),dt=a(28646),ot=a(10629),nt=a(7118),rt=a(57856),st=a(70067),pt=a(25040),ct=a(26511),ut=a(23658),mt=a(247);const ht=C.Ay.div`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(300px, 2fr);
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1024px) {
    gap: 24px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 32px;
  }
`,vt=C.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  .sketch-picker {
    @media (max-width: 480px) {
      width: 100% !important;
    }
  }
`,gt=C.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #20232d;
  color: #cdd0d5;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  margin-top: 5px;
`,bt=C.Ay.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`,yt=C.Ay.div`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  margin-right: 10px;
  border: 1px solid #ccc;
`,ft=C.Ay.div`
  display: flex;
  flex-direction: column;
`,xt=C.Ay.span`
  font-size: 12px;
  color: #666;
`,wt=C.Ay.span`
  font-family: monospace;
  font-size: 14px;
`,At=C.Ay.div`
  width: 300px;
  height: 630px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: white;
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    height: 600px;
  }
`,St=C.Ay.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`,Ct=C.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,Tt=C.Ay.div`
  background: #ff3b3b;
  color: white;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  right: -5px;
`,kt=C.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`,jt=C.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  font-size: 11px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
`,It=C.Ay.div`
  margin: 16px;
  padding: 16px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`,Pt=C.Ay.div`
  margin: 16px;
  background: ${e=>e.color||"#4318FF"};
  border-radius: 16px;
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Et=C.Ay.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  background: white;
  border-top: 1px solid #eee;
`,qt=C.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: ${e=>e.active?"#4318FF":"#666"};
`,Nt=C.Ay.div`
  background: #000;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  aspect-ratio: 16/9;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 2;
  }
`,Dt=C.Ay.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (min-width: 769px) {
    position: sticky;
    top: 20px;
  }
`,Mt=e=>{const[t,a]=(0,i.useState)(""),[l,d]=(0,i.useState)({}),[o,n]=(0,i.useState)(!1),r=(0,i.useRef)(null);(0,i.useEffect)((()=>{(async()=>{try{const t=await(0,f.bQ)({event:e.openData.data._id},"app-setting");if(console.log(t),t.data.response.length>0){const e=t.data.response[0];a(e.primaryColour),d({primaryDarker:e.primaryDarker,primaryDark:e.primaryDark,primaryBase:e.primaryBase,primaryLighter:e.primaryLighter,primaryLightest:e.primaryLightest})}}catch(t){console.error("Error fetching initial colors:",t)}})()}),[e.openData.data._id]);return(0,i.useEffect)((()=>{const e=e=>{r.current&&!r.current.contains(e.target)&&n(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[r]),(0,k.jsxs)(ht,{children:[(0,k.jsxs)(vt,{children:[(0,k.jsx)("div",{style:{textAlign:"left",display:"flex",justifyContent:"left",fontSize:"large"},children:(0,k.jsx)("p",{children:"Choose Color"})}),(0,k.jsxs)("div",{ref:r,style:{width:"100%"},children:[(0,k.jsx)("input",{type:"text",value:t,placeholder:"Pick a Primary Color",readOnly:!0,onClick:()=>n(!o),style:{width:"100%",maxWidth:"230px",height:"40px",backgroundColor:t,border:"1px solid #ccc",cursor:"pointer",borderRadius:"5px",textAlign:"center"}}),o&&(0,k.jsx)("div",{style:{marginTop:"10px",width:"100%",maxWidth:"230px"},children:(0,k.jsx)(et.Xq,{color:t,onChangeComplete:e=>{console.log({color:e});const t=e.hex;a(t),(e=>{const t=(0,tt.Ay)(e).darken(2.2).desaturate(.3).hex(),a=(0,tt.Ay)(e).darken(1).desaturate(.1).hex(),i=(0,tt.Ay)(e).hex(),l=(0,tt.Ay)(e).brighten(1.8).mix("white",.4).hex(),o=(0,tt.Ay)(e).brighten(2.2).mix("white",.6).hex();d({primaryDarker:t,primaryDark:a,primaryBase:i,primaryLighter:o,primaryLightest:l})})(t)},onClose:()=>n(!1),styles:{default:{picker:{width:"100%"}}}})})]}),(0,k.jsx)(gt,{onClick:async()=>{try{const a={event:e.openData.data._id,primaryColour:t,primaryDarker:l.primaryDarker||t,primaryDark:l.primaryDark||t,primaryBase:l.primaryBase||t,primaryLighter:l.primaryLighter||t,primaryLightest:l.primaryLightest||t};200===(await(0,f.LS)(a,"app-setting")).status&&e.setMessage({type:1,content:"Color settings saved successfully!",proceed:"Okay",icon:"success"})}catch(a){console.error("Error saving color settings:",a)}},style:{marginTop:"10px",maxWidth:"230px"},children:"Submit"}),t&&(0,k.jsxs)("div",{style:{width:"100%",maxWidth:"400px"},children:[(0,k.jsxs)(bt,{children:[(0,k.jsx)(yt,{style:{backgroundColor:t}}),(0,k.jsxs)(ft,{children:[(0,k.jsx)(xt,{children:"primaryColour"}),(0,k.jsx)(wt,{children:t})]})]}),Object.entries(l).map((e=>{let[t,a]=e;return(0,k.jsxs)(bt,{children:[(0,k.jsx)(yt,{style:{backgroundColor:a}}),(0,k.jsxs)(ft,{children:[(0,k.jsx)(xt,{children:t}),(0,k.jsx)(wt,{children:a})]})]},t)}))]})]}),(0,k.jsx)(Dt,{children:(0,k.jsxs)(At,{children:[(0,k.jsxs)("div",{style:{background:t||"#0e73c5",minHeight:"180px",position:"relative",overflow:"hidden"},children:[(0,k.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",zIndex:1}}),(0,k.jsxs)(St,{children:[(0,k.jsxs)(Ct,{children:[(0,k.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.openData.data.logo,alt:"user",style:{width:"38px",height:"38px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.8)",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}),(0,k.jsxs)("div",{style:{color:"white"},children:[(0,k.jsx)("div",{style:{fontSize:"13px",opacity:.9},children:"Welcome Back"}),(0,k.jsx)("div",{style:{fontSize:"17px",fontWeight:"600"},children:e.openData.data.title})]})]}),(0,k.jsxs)("div",{style:{display:"flex",gap:"12px",marginTop:"2px"},children:[(0,k.jsxs)("div",{style:{position:"relative"},children:[(0,k.jsx)(at.A,{size:22,color:"white",strokeWidth:2.5}),(0,k.jsx)(Tt,{children:"4"})]}),(0,k.jsxs)("div",{style:{position:"relative"},children:[(0,k.jsx)(it.A,{size:22,color:"white",strokeWidth:2.5}),(0,k.jsx)(Tt,{children:"2"})]})]})]}),(0,k.jsx)("div",{style:{padding:"0 16px"},children:(0,k.jsxs)(Nt,{children:[(0,k.jsx)("img",{src:"https://event-manager.syd1.cdn.digitaloceanspaces.com/"+e.openData.data.banner,alt:"Event Banner",style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0,zIndex:1}}),(0,k.jsxs)("div",{style:{position:"absolute",bottom:"12px",left:"12px",zIndex:3,display:"flex",alignItems:"center",gap:"6px",color:"rgba(255,255,255,0.9)",fontSize:"12px",fontWeight:"500"},children:[(0,k.jsx)(lt.A,{size:14,color:"white"}),e.openData.data.venue]})]})})]}),(0,k.jsxs)(kt,{children:[(0,k.jsxs)(jt,{children:[(0,k.jsx)(dt.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"Programs"})]}),(0,k.jsxs)(jt,{children:[(0,k.jsx)(ot.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"Speakers"})]}),(0,k.jsxs)(jt,{children:[(0,k.jsx)(nt.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"Meetings"})]}),(0,k.jsxs)(jt,{children:[(0,k.jsx)(lt.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"Location"})]}),(0,k.jsxs)(jt,{children:[(0,k.jsx)(rt.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"About us"})]}),(0,k.jsxs)(jt,{children:[(0,k.jsx)(st.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"Photos"})]}),(0,k.jsxs)(jt,{children:[(0,k.jsx)(pt.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"Connections"})]}),(0,k.jsxs)(jt,{children:[(0,k.jsx)(ct.A,{size:22,color:t||"#0e73c5",strokeWidth:2}),(0,k.jsx)("span",{children:"Exhibitors"})]})]}),(0,k.jsxs)(It,{children:[(0,k.jsx)("div",{style:{background:"#FFF6E9",padding:"8px",borderRadius:"10px"},children:(0,k.jsx)(it.A,{size:22,color:"#FFB547",strokeWidth:2})}),(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{style:{fontWeight:"500",fontSize:"14px"},children:"Your next event is on going"}),(0,k.jsx)("div",{style:{fontSize:"12px",color:"#666",marginTop:"2px"},children:"Get closer to your schedule"})]}),(0,k.jsx)("div",{style:{marginLeft:"auto",background:t||"#0e73c5",width:"28px",height:"28px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 6px rgba(0,0,0,0.15)"},children:(0,k.jsx)("span",{style:{color:"white",fontSize:"18px"},children:"\u2192"})})]}),(0,k.jsx)(Pt,{color:t||"#0e73c5",children:(0,k.jsxs)("div",{style:{padding:"16px",borderLeft:"2px dashed rgba(255,255,255,0.2)",borderRadius:"12px",background:"linear-gradient(45deg, rgba(255,255,255,0.1), transparent)",display:"flex",alignItems:"center",gap:"12px",width:"100%"},children:[(0,k.jsx)("img",{src:"/api/placeholder/40/40",alt:"User",style:{width:"40px",height:"40px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.8)"}}),(0,k.jsxs)("div",{children:[(0,k.jsx)("div",{style:{fontSize:"16px",fontWeight:"600"},children:"Safari Sanders"}),(0,k.jsx)("div",{style:{fontSize:"12px",opacity:.8,marginTop:"2px"},children:"Project Manager"})]}),(0,k.jsx)("img",{src:"/api/placeholder/80/80",alt:"QR Code",style:{width:"70px",height:"70px",marginLeft:"auto",background:"white",padding:"8px",borderRadius:"8px"}})]})}),(0,k.jsxs)(Et,{children:[(0,k.jsxs)(qt,{active:!0,style:{color:t||"#0e73c5"},children:[(0,k.jsx)(ut.A,{size:20,strokeWidth:2.2}),(0,k.jsx)("span",{children:"Home"})]}),(0,k.jsxs)(qt,{children:[(0,k.jsx)(dt.A,{size:20,strokeWidth:2.2}),(0,k.jsx)("span",{children:"Sessions"})]}),(0,k.jsxs)(qt,{children:[(0,k.jsx)(mt.A,{size:20,strokeWidth:2.2}),(0,k.jsx)("span",{children:"Photos"})]}),(0,k.jsxs)(qt,{children:[(0,k.jsx)(at.A,{size:20,strokeWidth:2.2}),(0,k.jsx)("span",{children:"Networking"})]}),(0,k.jsxs)(qt,{children:[(0,k.jsx)(it.A,{size:20,strokeWidth:2.2}),(0,k.jsx)("span",{children:"Updates"})]})]})]})})]})},Lt="greaterEqual",Rt="equals",Ot="beforeDate",Ft="afterDate",Wt="dateBetween",Bt="isTrue",zt="isFalse",Ut=(0,l.A)((e=>{var t,a,l;(0,i.useEffect)((()=>{document.title="Event - EventHex Portal"}),[]);const n=e.user.user.userType._id,s=(0,b.d4)((e=>e.themeColors)),[u,m]=(0,i.useState)(!1),[h,v]=(0,i.useState)(!1),[y,x]=(0,i.useState)(!1),[w,A]=(0,i.useState)(null),S=()=>{m(!1),v(!1),A(null),x(!1)},[C]=(0,i.useState)([{type:"select",name:"availability",label:"Availability",apiType:"JSON",filterType:"tab",radioButton:!0,selectApi:[{value:"All",id:"All"},{value:"Published",id:"Published"},{value:"Unpublished",id:"Unpublished"},{value:"Bin",id:"Bin"}]},{type:"title",title:"Event Details",name:"Event Details",add:!1,update:!0},{type:"text",placeholder:"Event Name",name:"title",validation:"",default:"",label:"Event Name",required:!0,view:!0,add:!0,group:"Event Details",update:!0,customClass:"full"},{type:"checkbox",placeholder:"Multi day event?",name:"mutliEvent",validation:"Multi day event?",default:"false",tag:!1,label:"",required:!1,customClass:"full",view:!1,add:!0,group:"Event Details",update:!0},{type:"date",placeholder:"Start Date",name:"startDate",validation:"",default:"empty",label:"Start Date",minDate:r()().add(-70,"years").toDate(),tag:!0,required:!0,view:!0,add:!0,group:"Event Details",update:!0,icon:"date",customClass:"quarter"},{type:"time",placeholder:"Start Time",name:"startDate",validation:"",default:"empty",label:"Start Time",minDate:r()().add(-70,"years").toDate(),tag:!1,required:!0,view:!0,add:!0,group:"Event Details",update:!0,icon:"time",customClass:"quarter"},{type:"date",placeholder:"End Date",name:"endDate",validation:"",default:"empty",label:"End Date",condition:{item:"mutliEvent",if:!0,then:"enabled",else:"disabled"},minDate:r()().add(-70,"years").toDate(),tag:!0,required:!0,view:!0,add:!0,group:"Event Details",update:!0,icon:"date",customClass:"quarter"},{type:"time",placeholder:"End Time",name:"endDate",validation:"",default:"empty",label:"End Time",minDate:r()().add(-70,"years").toDate(),tag:!1,required:!0,view:!0,add:!0,group:"Event Details",update:!0,icon:"time",customClass:"quarter"},{type:"select",placeholder:"Event Type",name:"eventType",validation:"",editable:!0,label:"Event Type",customClass:"full",showItem:"",required:!0,filter:!1,view:!0,add:!0,group:"Event Details",update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"In-person",id:"in-person",description:"Host a physical event for direct networking.",icon:"in-person"},{value:"Virtual",id:"virtual",description:"Host an online event that connects remote particiapants.",icon:"virtual"},{value:"Hybrid",id:"hybrid",description:"Broaden your in-person event to appeal to a larger audience.",icon:"hybrid"}]},{type:"text",placeholder:"Venue",name:"venue",validation:"",default:"",label:"Venue",required:!0,view:!0,tag:!0,add:!0,group:"Event Details",update:!0,icon:"location",customClass:"full"},{type:"select",apiType:"API",selectApi:"event-category/select",name:"eventCategory",showItem:"eventCategory",validation:"",default:"",tag:!1,label:"Event Category",required:!1,view:!0,add:!1,update:!0,filter:!1,footnote:"This will help us to better personalise our services for you",customClass:"full"},{type:"select",placeholder:"Are you selling tickets",name:"ticketType",validation:"",editable:!0,label:"Are you selling tickets?",showItem:"",selectType:"card",required:!0,customClass:"full",filter:!1,view:!0,add:!0,group:"Event Details",update:!0,apiType:"JSON",selectApi:[{value:"Free Event",id:"free",description:"No the event is free to attend",icon:"free"},{value:"Paid Event",id:"paid",description:"Yes, iam selling tickets",icon:"paid"}]},{type:"select",placeholder:"Registration Mode",name:"registrationMode",validation:"",editable:!0,label:"Registration Mode",group:"Registration Settings",sublabel:"",showItem:"",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"Simple Form Registration",id:"formReg"},{value:" Checkout with Registration",id:"checkout"}]},{type:"select",placeholder:"Attendee Information Collection",name:"attendeeInfoCollection",condition:{item:"registrationMode",if:"checkout",then:"enabled",else:"disabled"},validation:"",selectType:"card",group:"Registration Settings",editable:!0,label:"Attendee Information Collection",sublabel:"",showItem:"",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectApi:[{value:"Buyer is the only attendee (collect data once)",id:"buyerOnly"},{value:" Buyer provides information for all attendees",id:"buyerAndAttendee"}]},{type:"title",title:"Enable or Disable Modules for Your Event",description:"Customize your experience by selecting the modules that best suit your event needs. You can adjust these settings at any time.",name:"about",customClass:"full",add:!0,group:"Modules",update:!1},{type:"multiSelect",placeholder:"Core Modules",name:"coreModules",validation:"",selectType:"card",editable:!0,customClass:"full",label:"Core Modules",showItem:"",required:!0,filter:!1,view:!0,add:!0,group:"Modules",update:!0,apiType:"API",selectApi:"event-module/select",params:"module"},{type:"multiSelect",placeholder:"Addons",name:"addons",validation:"",selectType:"card",editable:!0,label:"Addons",showItem:"",required:!0,filter:!1,view:!0,add:!0,group:"Modules",update:!0,customClass:"full",apiType:"API",selectApi:"add-on/select",params:"addon"},{type:"text",placeholder:"Total Registration",name:"regCount",validation:"",default:"",label:"Total Registration",tag:!1,required:!1,view:!1,add:!1,update:!1,customClass:"quarter"},{type:"image",placeholder:"Logo",name:"logo",validation:"",default:"false",tag:!0,label:"Event Logo",footnote:"For Better Result, Use logo with transparent background",required:!1,view:!0,add:!1,update:!0},{type:"image",placeholder:"Banner",name:"banner",validation:"",default:"false",tag:!0,label:"Event Banner",footnote:"1200*630px landscape image in JPG, PNG, or WEBP format",required:!1,view:!0,add:!1,update:!0},{type:"line",add:!1,update:!0},{type:"title",title:"ABOUT",name:"ABOUT",add:!1,update:!0},{type:"htmleditor",placeholder:"Description",name:"description",validation:"",default:"",label:"Description",tag:!1,required:!1,view:!1,add:!1,update:!0},{type:"title",title:"SOCIAL MEDIA CONFIGURATION",name:"sm",add:!1,update:!0},{type:"text",placeholder:"Facebook URL",name:"facebook",validation:"",default:"",label:"Facebook URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"},{type:"text",placeholder:"Insta URL",name:"insta",validation:"",default:"",label:"Insta URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"},{type:"text",placeholder:"X URL",name:"xSocial",validation:"",default:"",label:"X URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"},{type:"text",placeholder:"Linkedin URL",name:"linkedin",validation:"",default:"",label:"Linkedin URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"},{type:"text",placeholder:"Youtube URL",name:"youtube",validation:"",default:"",label:"Youtube URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"},{type:"text",placeholder:"Whatsapp URL",name:"whatsapp",validation:"",default:"",label:"Whatsapp URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"},{type:"text",placeholder:"Sharechat URL",name:"sharechat",validation:"",default:"",label:"Sharechat URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"},{type:"text",placeholder:"Threads URL",name:"threads",validation:"",default:"",label:"Threads URL",tag:!1,required:!1,view:!0,add:!1,update:!0,customClass:"half"}]),[T]=(0,i.useState)([{type:"multiSelect",placeholder:"Core Modules",name:"coreModules",validation:"",selectType:"card",editable:!0,customClass:"full",label:"Core Modules",showItem:"",required:!0,filter:!1,view:!0,add:!0,group:"Modules",update:!0,apiType:"API",selectApi:"event-module/select",params:"module"}]),[j]=(0,i.useState)([{type:"multiSelect",placeholder:"Addons",name:"addons",validation:"",selectType:"card",editable:!0,label:"Addons",showItem:"",required:!0,filter:!1,view:!0,add:!0,group:"Modules",update:!0,customClass:"full",apiType:"API",selectApi:"add-on/select",params:"addon"}]),[I]=(0,i.useState)([{type:"title",title:"EXHIBITOR DETAILS",name:"EXHIBITOR DETAILS",add:!0,update:!0},{type:"select",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",showItem:"title",validation:"",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1},{type:"select",apiType:"API",selectApi:"exhibitor-category/select",placeholder:"Category",name:"category",validation:"",showItem:"value",default:"",tag:!0,label:"Category",required:!1,view:!0,add:!0,update:!0,filter:!0,search:!0},{type:"text",placeholder:"Booth Number",name:"boothNumber",validation:"",default:"",label:"Booth Number",required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Company Name",name:"companyName",validation:"",default:"",label:"Company Name",required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Website",name:"website",validation:"",default:"",tag:!0,label:"Website",required:!1,view:!0,add:!0,update:!0},{type:"image",placeholder:"Logo",name:"logo",validation:"",default:"",tag:!0,label:"Logo",required:!0,view:!0,add:!0,update:!0},{type:"textarea",placeholder:"Description",name:"description",validation:"",default:"",tag:!0,label:"Description",required:!1,view:!0,add:!0,update:!0}]),[P]=(0,i.useState)([{type:"text",placeholder:"Enter Category Name",name:"categoryName",validation:"",default:"",label:"Category Name",required:!0,view:!0,add:!0,update:!0},{type:"select",placeholder:"Price",listView:!0,radioButton:!0,name:"freeOrPaid",validation:"",default:"",label:"Price",tag:!0,required:!0,view:!0,customClass:"list",add:!0,update:!0,apiType:"JSON",search:!1,selectApi:[{value:"Free",id:"Free"},{value:"Paid",id:"Paid"}]},{type:"number",placeholder:"Amount",name:"price",condition:{item:"freeOrPaid",if:"Paid",then:"enabled",else:"disabled"},validation:"",tag:!0,label:"Amount",required:!1,view:!0,filter:!1,add:!0,update:!0},{type:"toggle",placeholder:"Is Paid",name:"isPaid",validation:"",default:"",tag:!0,label:"Is Paid",required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Lead Capture",name:"leadCapture",validation:"",default:"",label:"Lead Capture",tag:!0,required:!1,view:!0,add:!0,update:!0,footnote:"Enable this module?"},{type:"number",placeholder:"Exhibitor Passes",name:"exhibitorPasses",validation:"",default:"",tag:!0,label:"Exhibitor Passes",required:!0,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Is Active",name:"isActive",validation:"",default:"",tag:!0,label:"Is Active",required:!1,view:!0,add:!0,update:!0},{type:"htmleditor",placeholder:"Booth Details & Benefits",name:"boothDetails",validation:"",default:"",tag:!0,label:"Details about the booth",sublabel:"Optional",required:!1,view:!0,add:!0,update:!0,footnote:"Can include details like Booth Dimensions, etc",footnoteIcon:"info"}]),[E]=(0,i.useState)([{type:"select",apiType:"API",selectApi:"exhibitor/select",placeholder:"Exhibitor",name:"exhibitor",validation:"",showItem:"companyName",default:"",label:"Exhibitor",tag:!0,required:!1,view:!0,add:!0,update:!0,filter:!1,search:!0},{type:"hidden",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",showItem:"title",validation:"",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!0,update:!1,filter:!1},{type:"text",placeholder:"Name",name:"fullName",validation:"",default:"",label:"Name",required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Designation",name:"designation",validation:"",default:"",label:"Designation",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Email",name:"emailId",validation:"",default:"",label:"Email",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Mobile",name:"mobile",validation:"",default:"",label:"Mobile",tag:!0,required:!0,view:!0,add:!0,update:!0}]),[q]=(0,i.useState)([{type:"text",placeholder:"Title",name:"title",validation:"",default:"",label:"Title",required:!0,view:!0,add:!0,update:!0}]),[N]=(0,i.useState)([{type:"text",placeholder:"Title",name:"title",validation:"",default:"",label:"Title",icon:"session",tag:!1,required:!0,view:!0,add:!0,update:!0},{type:"select",apiType:"API",selectApi:"session-type/select",placeholder:"Session Type",name:"sessiontype",validation:"",showItem:"value",default:"",tag:!0,addNew:{attributes:[{type:"text",placeholder:"Title",name:"sessionType",validation:"",default:"",label:"Title",required:!0,view:!0,add:!0,update:!0}],api:"session-type"},highlight:!0,label:"Session Type",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"line",add:!0,update:!0},{type:"datetime",placeholder:"Start Time",name:"startTime",validation:"",icon:"time",default:"",tag:!0,label:"Start Time",required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"datetime",placeholder:"End Time",name:"endTime",icon:"time",validation:"",default:"",tag:!0,label:"End Time",required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"line",add:!0,update:!0},{type:"select",apiType:"API",selectApi:"stage/select",placeholder:"Stage/Hall",name:"stage",validation:"",showItem:"value",default:"",addNew:{attributes:[{type:"text",placeholder:"Title",name:"stage",validation:"",default:"",label:"Title",required:!0,view:!0,add:!0,update:!0}],api:"stage"},label:"Stage/Hall",required:!1,view:!0,add:!0,update:!0,filter:!0},{type:"select",apiType:"API",selectApi:"day/select",placeholder:"Day",name:"day",validation:"",showItem:"value",default:"",tag:!0,addNew:{attributes:[{type:"text",placeholder:"Title",name:"day",validation:"",default:"",label:"Title",required:!0,view:!0,add:!0,update:!0}],api:"day"},highlight:!0,label:"Day",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"line",add:!0,update:!0},{type:"textarea",placeholder:"a brief description about the session ...",name:"description",validation:"",default:"",label:"Description",sublabel:"Optional",customClass:"full",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"select",placeholder:"Applicable Tickets",name:"ticketType",validation:"",tag:!1,editable:!0,label:"Applicable Tickets",sublabel:"",showItem:"",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"All Tickets",id:0},{value:"Selected Tickets",id:1}]},{type:"multiSelect",placeholder:"Select Tickets",name:"ticket",condition:{item:"ticketType",if:1,then:"enabled",else:"disabled"},validation:"",tag:!1,editable:!0,label:"Select Tickets",showItem:"",required:!1,view:!0,filter:!1,add:!0,update:!0,updateOn:"event",apiType:"API",selectApi:"ticket/event-ticket"}]),[D]=(0,i.useState)([{type:"select",placeholder:"Speaker / Panelist",name:"anchor",validation:"",label:"Speaker / Panelist",showItem:"",required:!1,view:!0,filter:!0,add:!0,update:!0,apiType:"CSV",selectApi:"Speaker,Panelist"},{type:"text",placeholder:"Name",name:"name",validation:"",default:"",label:"Name",tag:!0,required:!0,view:!0,add:!0,update:!0,image:{field:"photo",collection:""},description:{type:"text",field:"email",collection:""}},{type:"text",placeholder:"rojas.m@apple.com",name:"email",validation:"",default:"",label:"Email",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"Order Number",name:"orderId",validation:"",default:"",label:"Order Number",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"text",placeholder:"Marketing Manager",name:"designation",validation:"",default:"",label:"Designation",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Google",name:"company",validation:"",default:"",label:"Company",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"image",placeholder:"Image",name:"photo",validation:"",default:"false",tag:!1,label:"Profile Picture",sublabel:"Optional",required:!1,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"textarea",placeholder:"a brief description about the session ...",name:"description",validation:"",default:"",label:"Description",sublabel:"Optional",required:!1,view:!0,add:!0,update:!0},{type:"title",title:"Social Media Configuration",name:"sm",add:!0,update:!0},{type:"toggle",placeholder:"Enable Social Media?",name:"enableSocialMedia",validation:"",default:"",label:"Enable Social Media?",tag:!1,required:!1,view:!0,add:!0,update:!0,footnote:"This will enable you to social media configuration"},{type:"text",placeholder:"Facebook URL",name:"facebook",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Facebook URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"text",placeholder:"Insta URL",name:"insta",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Insta URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"text",placeholder:"X URL",name:"xSocial",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"X URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"text",placeholder:"Linkedin URL",name:"linkedin",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Linkedin URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"text",placeholder:"Youtube URL",name:"youtube",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Youtube URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"text",placeholder:"Whatsapp URL",name:"whatsapp",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Whatsapp URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"text",placeholder:"Sharechat URL",name:"sharechat",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Sharechat URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"text",placeholder:"Threads URL",name:"threads",condition:{item:"enableSocialMedia",if:!0,then:"enabled",else:"disabled"},validation:"",default:"",label:"Threads URL",tag:!1,required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"datetime",placeholder:"Created At",name:"createdAt",validation:"",default:"",label:"Created At",tag:!1,required:!1,view:!0,add:!1,update:!1}]),[M]=(0,i.useState)([{type:"select",footnote:"",placeholder:"Choose Ticket",name:"ticket",validation:"",label:"Select Ticket",showItem:"value",filterDefault:"all",value:"all",preFill:[{id:"all",value:"All"}],required:!1,view:!1,filter:!0,add:!1,update:!0,apiType:"API",selectApi:"ticket/select/all/Ticket",export:!1},{type:"text",placeholder:"Name",name:"firstName",validation:"",default:"",tag:!0,label:"Name",required:!0,view:!0,add:!1,update:!1},{type:"datetime",placeholder:"Checkin Time",name:"attendanceDate",validation:"",default:"",tag:!0,label:"Checkin Time",required:!0,view:!0,add:!1,update:!1},{type:"mobilenumber",placeholder:"Phone Number",name:"authenticationId",validation:"",default:"",tag:!0,label:"Phone Number",required:!0,view:!0,add:!1,update:!1},{type:"email",placeholder:"Email ID",name:"emailId",validation:"",default:"",tag:!0,label:"Email ID",required:!0,view:!0,add:!1,update:!1}]),[L]=(0,i.useState)([{element:"button",type:"callback",callback:(e,t,a,i)=>{},itemTitle:{name:"user",type:"text",collection:""},condition:{item:"attendance",if:!1,then:!0,else:!1},icon:"checked",color:"green",title:"Check In",params:{api:"",parentReference:"",itemTitle:{name:"user",type:"text",collection:""},shortName:"Check In",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}}]),[R]=(0,i.useState)([{type:"text",placeholder:"Brand Name",name:"title",validation:"",default:"",tag:!0,label:"Name",required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Enter brand Website",name:"websiteUrl",validation:"",default:"",label:"Website URL",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"textarea",placeholder:"a brief description about the sponsor ...",name:"description",validation:"",default:"",label:"Description",sublabel:"Optional",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"select",apiType:"API",selectApi:"sponsor-category/select",placeholder:"Basic",name:"sponsorcategory",validation:"",showItem:"sponsorCategory",default:"",tag:!0,label:"Sponsor Category",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"line",add:!0,update:!0},{type:"image",placeholder:"Logo",name:"logo",validation:"",default:"false",tag:!0,label:"Logo",required:!0,view:!0,add:!0,update:!0}]),[O]=(0,i.useState)([{type:"text",placeholder:"Basic",name:"sponsorCategory",validation:"",default:"",tag:!0,label:"Sponsor Category",required:!0,view:!0,add:!0,update:!0,description:{type:"text",field:"description",collection:""}},{type:"line",add:!0,update:!0},{type:"textarea",placeholder:"a brief description about the category ...",name:"description",validation:"",default:"",label:"Description",sublabel:"Optional",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"Order Id",name:"orderId",validation:"",default:"",label:"Order Id",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0}]),[F]=(0,i.useState)([{type:"hidden",apiType:"CSV",placeholder:"Type",name:"type",selectApi:"Form,Ticket",validation:"",default:"Ticket",label:"Type",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Name",name:"title",validation:"",default:"",label:"Name",required:!0,statusLabel:{nextLine:!0,size:"small",conditions:[{when:"status",condition:Rt,compare:"Closed",type:"string",label:"Sale Closed",icon:"close",color:"beige"},{when:"status",condition:Rt,compare:"Sold Out",type:"string",label:"Sold Out",icon:"close",color:"beige"},{when:"bookingCount",condition:Lt,compare:"numberOfTicketsToBeSold",type:"number",label:"Sold Out",icon:"close",color:"red"},{when:"currentDate",condition:Ot,compare:"saleStartDate",type:"date",label:"Starts on {{saleStartDate}}",icon:"time",color:"gray"},{when:"currentDate",condition:Wt,type:"date",compare:{start:"saleStartDate",end:"saleEndDate"},label:"Sale Started",icon:"tick",color:"mint"},{when:"currentDate",condition:Ft,compare:"saleEndDate",type:"date",label:"Sale Closed",icon:"close",color:"beige"}]},view:!0,add:!0,update:!0,tag:!0},{type:"textarea",placeholder:"Description",name:"description",validation:"",default:"",label:"Description",sublabel:"Optional",required:!1,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"select",placeholder:"Ticket Status",name:"status",validation:"",tag:!1,label:"Ticket Status",default:"Open",required:!1,view:!0,filter:!0,add:!0,update:!0,apiType:"CSV",selectApi:"Open,Closed,Sold Out"},{type:"text",placeholder:"Slug",name:"slug",validation:"",default:"",label:"Slug",required:!1,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"datetime",placeholder:"Sales Start On",name:"saleStartDate",validation:"",default:"",tag:!1,label:"Sales Start On",required:!1,view:!0,add:!0,update:!0,icon:"date"},{type:"datetime",placeholder:"Live until",name:"saleEndDate",validation:"",default:"",tag:!0,label:"Live until",required:!1,view:!0,add:!0,update:!0,sort:!0,icon:"date"},{type:"toggle",placeholder:"Need Approval?",name:"isActive",validation:"",default:"",label:"Need Approval?",tag:!1,required:!1,view:!0,add:!0,update:!0,footnote:"This will enable you to manually approve registration requests"},{type:"line",add:!0,update:!0},{type:"number",placeholder:"No of Tickets",name:"numberOfTicketsToBeSold",validation:"",default:"",label:"No of Tickets",required:!0,view:!0,add:!0,update:!0,icon:"ticket"},{type:"line",add:!0,update:!0},{type:"title",title:"Buying Limit",name:"sm",add:!0,update:!0},{type:"number",placeholder:"Minimum",name:"minimumBuying",validation:"",default:"",label:"Minimum",required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Maximum",name:"maximumBuying",validation:"",default:"",label:"Maximum",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"select",placeholder:"Ticket Price",name:"enablePricing",editable:!0,label:"Ticket Price",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"Free",id:!1},{value:" Paid",id:!0}]},{type:"toggle",placeholder:"Enable Offer Price",name:"enableDiscount",condition:{item:"enablePricing",if:!1,then:"enabled",else:"disabled"},default:!1,label:"Enable Offer Price",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Offer Price Tag",name:"discountTag",validation:"",default:"",label:"Offer Price Tag",required:!0,view:!0,add:!0,update:!0,condition:{item:"enableDiscount",if:!0,then:"enabled",else:"disabled"}},{type:"select",placeholder:"Validity Type",name:"discountValidityType",validation:"",apiType:"JSON",selectApi:[{id:"endDate",value:"End Date"},{id:"tickets",value:"No of Tickets"},{id:"both",value:"End Date or Tickets"}],default:"both",label:"Validity Type",required:!0,view:!0,add:!0,update:!0,condition:{item:"enableDiscount",if:!0,then:"enabled",else:"disabled"}},{type:"number",placeholder:"Offer Price Limit",sublabel:"No. of Tickets",name:"discountLimit",validation:"",default:0,label:"Offer Price Limit",required:!1,view:!0,add:!0,update:!0,condition:{item:"enableDiscount",if:!0,then:"enabled",else:"disabled"}},{type:"date",placeholder:"End Date for Offer Price",name:"discountEndDate",validation:"",default:null,label:"End Date for Offer Price",required:!0,view:!0,add:!0,update:!0,icon:"date",condition:{item:"enableDiscount",if:!0,then:"enabled",else:"disabled"}},{type:"select",apiType:"CSV",selectApi:"Percentage,Fixed",placeholder:"Offer Price Type",name:"discountType",validation:"",tag:!1,label:"Offer Price Type",default:"Fixed",condition:{item:"enableDiscount",if:!0,then:"enabled",else:"disabled"},required:!1,view:!0,filter:!0,add:!0,update:!0},{type:"number",placeholder:"Offer Price",name:"discountValue",validation:"",default:0,label:"Offer Price",required:!0,view:!0,add:!0,update:!0,condition:{item:"discountType",if:"Percentage",then:"enabled",else:"disabled"}},{type:"number",placeholder:"Price",name:"paymentAmount",condition:{item:"enablePricing",if:!0,then:"enabled",else:"disabled"},displayFormat:"price",validation:"",tag:!0,label:"Price",showItem:"",required:!0,view:!0,filter:!1,add:!0,update:!0},{type:"toggle",placeholder:"Tax",name:"enableTax",validation:"",condition:{item:"enablePricing",if:!0,then:"enabled",else:"disabled"},default:"",label:"Tax",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"Tax Percentage",name:"taxPercentage",validation:"",condition:{item:"enableTax",if:!0,then:"enabled",else:"disabled"},default:!0,tag:!1,label:"Tax Percentage",required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"Sales",name:"bookingCount",validation:"",default:0,label:"Sales",required:!0,view:!0,add:!1,update:!1,tag:!0,sort:!0},{type:"line",add:!0,update:!0},{type:"image",placeholder:"Thumbnail Image",name:"thumbnail",validation:"",default:"",tag:!1,label:"Ticket Thumbnail",sublabel:"Optional",required:!1,view:!0,add:!0,update:!0}]),[W]=(0,i.useState)([{type:"text",placeholder:"Form Name",name:"title",validation:"",default:"",label:"Form Name",tag:!0,required:!0,view:!0,add:!0,update:!0,statusLabel:{nextLine:!0,size:"small",conditions:[{when:"status",condition:Rt,compare:"Closed",type:"string",label:"Sale Closed",icon:"close",color:"beige"},{when:"status",condition:Rt,compare:"Sold Out",type:"string",label:"Sold Out",icon:"close",color:"beige"},{when:"bookingCount",condition:Lt,compare:"numberOfTicketsToBeSold",type:"number",label:"Sold Out",icon:"close",color:"red"},{when:"currentDate",condition:Ot,compare:"saleStartDate",type:"date",label:"Starts on {{saleStartDate}}",icon:"time",color:"gray"},{when:"currentDate",condition:Wt,type:"date",compare:{start:"saleStartDate",end:"saleEndDate"},label:"Sale Started",icon:"tick",color:"mint"},{when:"currentDate",condition:Ft,compare:"saleEndDate",type:"date",label:"Sale Closed",icon:"close",color:"beige"}]}},{type:"hidden",apiType:"CSV",placeholder:"Form Type",name:"type",selectApi:"Form,Ticket",validation:"",default:"Form",label:"Form Type",tag:!0,required:!1,view:!0,add:!0,update:!1,hide:!0,statusLabel:{nextLine:!1,size:"small",conditions:[{when:"type",condition:Rt,compare:"Form",type:"string",label:"Form",icon:"form-builder",color:"mint"},{when:"type",condition:Rt,compare:"Ticket",type:"string",label:"Ticket",icon:"ticket",color:"red"}]}},{type:"textarea",placeholder:"a brief description if this a standalone form",name:"description",validation:"",default:"",label:"Description",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"number",placeholder:"No of Tickets",name:"numberOfTicketsToBeSold",validation:"",default:"",label:"No of Tickets",required:!0,view:!0,add:!0,update:!0,icon:"ticket"},{type:"line",add:!0,update:!0},{type:"title",title:"Buying Limit",name:"sm",add:!0,update:!0},{type:"number",placeholder:"Minimum",name:"minimumBuying",validation:"",default:"",label:"Minimum",required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Maximum",name:"maximumBuying",validation:"",default:"",label:"Maximum",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"select",placeholder:"Status",name:"status",validation:"",tag:!0,label:"Status",showItem:"Open",required:!1,view:!0,filter:!1,add:!0,update:!0,apiType:"CSV",selectApi:"Open,Closed,Sold Out"},{type:"number",placeholder:"Sales",name:"bookingCount",validation:"",default:0,label:"Registration Count",required:!0,view:!0,add:!1,update:!1,tag:!0,sort:!0},{type:"datetime",placeholder:"Sales Start On",name:"saleStartDate",validation:"",default:"",tag:!1,label:"Sales Start On",required:!1,view:!0,add:!0,update:!0,icon:"date"},{type:"datetime",placeholder:"Live until",name:"saleEndDate",validation:"",default:"",tag:!0,label:"Live until",required:!1,view:!0,add:!0,update:!0,sort:!0,icon:"date"}]),[B]=(0,i.useState)([{type:"text",placeholder:"Form Name",name:"title",validation:"",default:"",label:"Form Name",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"hidden",apiType:"CSV",placeholder:"Form Type",name:"type",selectApi:"Form,Ticket",validation:"",default:"Form",label:"Form Type",tag:!0,required:!1,view:!0,add:!0,update:!1,hide:!0,statusLabel:{nextLine:!1,size:"small",conditions:[{when:"type",condition:Rt,compare:"Form",type:"string",label:"Form",icon:"form-builder",color:"mint"},{when:"type",condition:Rt,compare:"Ticket",type:"string",label:"Ticket",icon:"ticket",color:"red"}]}},{type:"textarea",placeholder:"a brief description if this a standalone form",name:"description",validation:"",default:"",label:"Description",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"number",placeholder:"No of Tickets",name:"numberOfTicketsToBeSold",validation:"",default:"",label:"No of Tickets",required:!0,view:!0,add:!0,update:!0,icon:"ticket"},{type:"line",add:!0,update:!0},{type:"title",title:"Buying Limit",name:"sm",add:!0,update:!0},{type:"number",placeholder:"Minimum",name:"minimumBuying",validation:"",default:"",label:"Minimum",required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Maximum",name:"maximumBuying",validation:"",default:"",label:"Maximum",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"select",placeholder:"Status",name:"status",validation:"",tag:!0,label:"Status",showItem:"Open",required:!1,view:!0,filter:!1,add:!0,update:!0,apiType:"CSV",selectApi:"Open,Closed,Sold Out"},{type:"number",placeholder:"Sales",name:"bookingCount",validation:"",default:0,label:"Registration Count",required:!0,view:!0,add:!1,update:!1,tag:!1,sort:!0},{type:"datetime",placeholder:"Sales Start On",name:"saleStartDate",validation:"",default:"",tag:!1,label:"Sales Start On",required:!1,view:!0,add:!0,update:!0,icon:"date"},{type:"datetime",placeholder:"Live until",name:"saleEndDate",validation:"",default:"",tag:!1,label:"Live until",required:!1,view:!0,add:!0,update:!0,sort:!0,icon:"date"}]),[z]=(0,i.useState)([{type:"text",placeholder:"Coupon Code",name:"code",validation:"",default:"",label:"Coupon Code",tag:!0,required:!0,view:!0,add:!0,update:!0,statusLabel:{nextLine:!1,size:"small",conditions:[{when:"isActive",condition:Bt,compare:"true",type:"boolean",label:"Live",icon:"tick",color:"mint"},{when:"currentDate",condition:zt,compare:"false",type:"boolean",label:"Paused  ",icon:"time",color:"gray"}]},footnote:"This will be used as the Promotional Code"},{type:"select",apiType:"CSV",selectApi:"Percentage,Fixed",placeholder:"Discount Type",name:"type",validation:"",tag:!1,label:"Discount Type",default:"Percentage",required:!0,view:!0,filter:!1,add:!0,update:!0},{type:"number",placeholder:"Discount  Value",name:"value",validation:"",default:"",maximum:2,label:"Discount  Value",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Max Usage",name:"usageLimit",validation:"",default:"",label:"Max Usage",required:!0,view:!0,add:!0,update:!0},{type:"line",add:!0,update:!0},{type:"datetime",placeholder:"Valid From",name:"startDate",validation:"",default:"",label:"Valid From",required:!1,view:!0,add:!0,update:!0,icon:"date"},{type:"datetime",placeholder:"Valid Until",name:"endDate",validation:"",default:"",label:"Valid Until",required:!1,view:!0,add:!0,update:!0,icon:"date"},{type:"line",add:!0,update:!0},{type:"select",placeholder:"Applicable Tickets",name:"availability",validation:"",tag:!0,editable:!0,label:"Applicable Tickets",sublabel:"",showItem:"",required:!0,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"All Tickets",id:"All"},{value:"Selected Tickets",id:"Selected"}]},{type:"multiSelect",apiType:"API",selectApi:"ticket/event-ticket",updateOn:"event",placeholder:"Tickets",name:"tickets",condition:{item:"availability",if:"Selected",then:"enabled",else:"disabled"},showItem:"title",validation:"",default:"",tag:!0,label:"Tickets",required:!0,view:!0,add:!0,update:!0,filter:!1},{type:"line",add:!0,update:!0}]),[U]=(0,i.useState)([{type:"text",placeholder:"User",name:"authentication",collection:"authentication",validation:"",showItem:"fullName",default:"",tag:!0,label:"User",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"text",placeholder:"Mobile",name:"authentication",collection:"authentication",validation:"",showItem:"authenticationId",default:"",tag:!0,label:"Mobile",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"text",placeholder:"Ticket",name:"ticket",collection:"ticket",validation:"",showItem:"title",default:"",tag:!0,label:"Ticket",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"hidden",placeholder:"Event",name:"event",collection:"event",validation:"",showItem:"title",default:"",tag:!0,label:"Event",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"text",placeholder:"Razorpay Order Id",name:"razorpayOrderId",validation:"",showItem:"",default:"",tag:!0,label:"Razorpay Order Id",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"text",placeholder:"Razorpay Payment Id",name:"razorpayPaymentId",validation:"",showItem:"",default:"",tag:!0,label:"Razorpay Payment Id",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"number",placeholder:"Amount",name:"amount",validation:"",showItem:"",default:"",tag:!0,label:"Amount",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"text",placeholder:"Currency",name:"currency",validation:"",showItem:"",default:"",tag:!0,label:"Currency",required:!0,view:!0,add:!0,update:!0,filter:!0},{type:"text",placeholder:"Status",name:"status",validation:"",showItem:"",default:"",tag:!0,label:"Status",required:!0,view:!0,add:!0,update:!0,filter:!0}]),[V]=(0,i.useState)([{type:"label",label:"Whatsapp Configuration",info:"Configure WhatsApp to send messages and notifications using the WhatsApp API.",name:"sm",group:"WhatsApp Configuration",add:!0,update:!0},{type:"line",add:!0,group:"WhatsApp Configuration",update:!0},{type:"select",placeholder:"Choose WhatsApp Configuration",name:"defaultWhatsapp",validation:"",editable:!0,label:"Choose WhatsApp Configuration",group:"WhatsApp Configuration",sublabel:"",showItem:"",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"EventHex Whatsapp",id:"EventHex Whatsapp",description:"Use the built-in EventHex WhatsApp integration."},{value:"Custom Whatsapp",id:"Custom Whatsapp",description:"Set up your own WhatsApp configuration via API."}]},{type:"select",apiType:"CSV",placeholder:"Whatsapp Account Provider",name:"whatsappAccountProvider",condition:{item:"defaultWhatsapp",if:"Custom Whatsapp",then:"enabled",else:"disabled"},selectApi:"Dxing,Alerts Panel,Official API",validation:"",default:"",label:"Whatsapp Account Provider",group:"WhatsApp Configuration",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Whatsapp Url",name:"whatsappUrl",condition:{item:"defaultWhatsapp",if:"Custom Whatsapp",then:"enabled",else:"disabled"},validation:"",default:"",label:"Whatsapp Url",group:"WhatsApp Configuration",view:!1,add:!0,update:!0},{type:"password",placeholder:"Whatsapp Access Token",name:"whatsappAccessToken",condition:{item:"defaultWhatsapp",if:"Custom Whatsapp",then:"enabled",else:"disabled"},validation:"",default:"",label:"Whatsapp Access Token",tag:!1,group:"WhatsApp Configuration",view:!1,add:!0,update:!0},{type:"password",placeholder:"Whatsapp Account",name:"whatsappAccount",condition:{item:"defaultWhatsapp",if:"Custom Whatsapp",then:"enabled",else:"disabled"},validation:"",default:"",group:"WhatsApp Configuration",label:"Whatsapp Account",tag:!1,view:!0,add:!0,update:!0},{type:"label",label:"Email Configuration",info:"Send emails seamlessly using your preferred SMTP server.",name:"sm",group:"Email Configuration",add:!0,update:!0},{type:"line",add:!0,update:!0,group:"Email Configuration"},{type:"select",placeholder:"Choose Email Configuration",name:"defaultEmail",validation:"",editable:!0,label:"Choose Email Configuration",group:"Email Configuration",sublabel:"",showItem:"",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"EventHex Email",id:"EventHex Email",description:"Utilize the built-in EventHex email service for sending emails."},{value:"Custom Email",id:"Custom Email",description:"Set up your own SMTP server for complete email control."}]},{type:"text",placeholder:"SMTP HOST",name:"smtpHost",condition:{item:"defaultEmail",if:"Custom Email",then:"enabled",else:"disabled"},validation:"",default:"",group:"Email Configuration",label:"SMTP HOST",tag:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"SMTP PORT",name:"smtpPort",condition:{item:"defaultEmail",if:"Custom Email",then:"enabled",else:"disabled"},validation:"",group:"Email Configuration",default:"",label:"SMTP PORT",tag:!0,view:!1,add:!0,update:!0},{type:"password",placeholder:"SMTP USERNAME",name:"smtpUsername",condition:{item:"defaultEmail",if:"Custom Email",then:"enabled",else:"disabled"},group:"Email Configuration",validation:"",default:"",label:"SMTP USERNAME",tag:!1,view:!1,add:!0,update:!0},{type:"password",placeholder:"SMTP PASSWORD",group:"Email Configuration",name:"smtpPassword",condition:{item:"defaultEmail",if:"Custom Email",then:"enabled",else:"disabled"},validation:"",default:"",label:"SMTP PASSWORD",tag:!1,view:!1,add:!0,update:!0},{type:"text",placeholder:"SMTP FROM EMAIL",group:"Email Configuration",name:"smtpFromEmail",condition:{item:"defaultEmail",if:"Custom Email",then:"enabled",else:"disabled"},validation:"",default:"",label:"SMTP FROM EMAIL",tag:!0,view:!1,add:!0,update:!0},{type:"label",label:"Payment Configuration",info:"Set up payment methods to seamlessly accept payments for tickets.",name:"sm",group:"Payment Configuration",add:!0,update:!0},{type:"line",add:!0,update:!0,group:"Payment Configuration"},{type:"select",placeholder:"Payment Options",name:"defaultPayment",validation:"",editable:!0,label:"Payment Options",group:"Payment Configuration",sublabel:"",showItem:"",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"EventHex Payment",id:"EventHex Payment",description:"Use the built-in EventHex payment gateway for fast, secure transactions."},{value:"Custom Payment",id:"Custom Payment",description:"Integrate your own payment solution."}]},{type:"select",placeholder:"Payment Gateway",name:"paymentGateway",condition:{item:"defaultPayment",if:"Custom Payment",then:"enabled",else:"disabled"},validation:"",default:"Razorpay",tag:!0,label:"Payment Gateway",showItem:"",required:!1,view:!0,filter:!1,add:!0,update:!0,apiType:"CSV",selectApi:"Razorpay",group:"Payment Configuration"},{type:"password",placeholder:"Payment Gateway Key",name:"paymentGatewayKey",condition:{item:"defaultPayment",if:"Custom Payment",then:"enabled",else:"disabled"},validation:"",default:"",label:"Payment Gateway Key",tag:!1,view:!1,add:!0,group:"Payment Configuration",update:!0},{type:"password",placeholder:"Payment Gateway Secret",name:"paymentGatewaySecret",condition:{item:"defaultPayment",if:"Custom Payment",then:"enabled",else:"disabled"},validation:"",default:"",label:"Payment Gateway Secret",tag:!1,group:"Payment Configuration",view:!1,add:!0,update:!0}]),[$]=(0,i.useState)([{type:"text",placeholder:"Title",name:"title",validation:"",default:"",label:"Title",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Download Count",name:"downloadCount",validation:"",default:"",label:"Download Count",tag:!0,required:!1,view:!0,add:!1,update:!1},{type:"text",placeholder:"Slug",name:"slug",validation:"",default:"",label:"Slug",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"image",placeholder:"Background Image",name:"backgroundImage",validation:"",default:"",label:"Upload Background Image",tag:!0,view:!0,add:!0,update:!0}]),[J]=(0,i.useState)([{type:"select",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",showItem:"title",validation:"",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1},{type:"text",placeholder:"Title",name:"title",validation:"",default:"",label:"Title",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"image",placeholder:"Image",name:"image",validation:"",default:"",label:"Image",tag:!0,required:!1,view:!0,add:!0,update:!0}]),[_]=(0,i.useState)([{type:"text",placeholder:"Name",name:"fullName",validation:"",default:"",label:"Name",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Designation",name:"designation",validation:"",default:"",label:"Designation",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Company Name",name:"companyName",validation:"",default:"",label:"Company Name",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"For",name:"for",validation:"",default:"",label:"For",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"date",placeholder:"Last FaceMatch Date",name:"lastFaceMatchDate",validation:"",default:"",label:"Last FaceMatch Date",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"text",placeholder:"Key Image",name:"keyImage",validation:"",default:"",label:"Key Image",tag:!1,required:!0,view:!0,add:!0,update:!0}]),[G]=(0,i.useState)([{type:"select",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",showItem:"title",validation:"",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1},{type:"text",placeholder:"Partner Name",name:"partnerName",validation:"",default:"",label:"Partner Name",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"image",placeholder:"Logo",name:"logo",validation:"",default:"",label:"Logo",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Link",name:"link",validation:"",default:"",label:"Link",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"Clicks",name:"clicks",validation:"",default:"",label:"Clicks",required:!1,view:!0,add:!1,update:!1},{type:"number",placeholder:"Impressions",name:"impressions",validation:"",default:"",label:"Impressions",required:!1,view:!0,add:!1,update:!1}]),[X]=(0,i.useState)([{type:"date",placeholder:"Date",name:"date",validation:"",default:"",label:"Date",tag:!0,required:!0,view:!0,add:!0,update:!0,icon:"date"},{type:"number",placeholder:"Original Size",name:"originalSize",validation:"",default:"",label:"Original Size",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Compressed Size",name:"compressedSize",validation:"",default:"",label:"Compressed Size",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"number",placeholder:"Image Count",name:"imageCount",validation:"",default:"",label:"Image Count",tag:!0,required:!0,view:!0,add:!0,update:!0}]),[Y]=(0,i.useState)([{type:"label",label:"Photo View Access",info:"Select who want to view photos",name:"sm",group:"Photo Viewing Access",icon:"photo-view-access",add:!0,update:!0},{type:"line",group:"Photo Viewing Access",icon:"photo-view-access",add:!0,update:!0},{type:"select",apiType:"CSV",placeholder:"Photo View Access",name:"photoViewAccess",selectApi:"Attendees,Everyone",validation:"",default:"",label:"Photo View Access",group:"Photo Viewing Access",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"label",label:"Event Highlights",info:"Manage your event highlights",name:"sm",group:"Event Highlights",icon:"event-highlights",add:!0,update:!0},{type:"line",add:!0,update:!0,group:"Event Highlights",icon:"event-highlights"},{type:"toggle",placeholder:"Event Highlights",name:"enableEventHighlights",validation:"",default:!0,group:"Event Highlights",label:"Event Highlights",tag:!0,view:!0,add:!0,update:!0},{type:"label",label:"Social Share",info:"Manage your social media connections",name:"sm",group:"Social Share",icon:"social-share",add:!0,update:!0},{type:"line",add:!0,update:!0,group:"Social Share",icon:"social-share"},{type:"toggle",placeholder:"Social Share",name:"enableSocialShare",validation:"",default:!0,tag:!0,group:"Social Share",label:"Social Share",required:!1,view:!0,filter:!1,add:!0,update:!0},{type:"textarea",placeholder:"Social Share Content",name:"socialShareContent",condition:{item:"enableSocialShare",if:!0,then:"enabled",else:"disabled"},validation:"",default:!0,tag:!0,group:"Social Share",label:"Social Share Content",required:!1,view:!0,filter:!1,add:!0,update:!0},{type:"label",label:"Partner Spotlights",info:"Add you partner ads",name:"sm",group:"Display Ads",icon:"display",add:!0,update:!0},{type:"line",add:!0,update:!0,group:"Display Ads",icon:"display"},{type:"toggle",placeholder:"Partner Spotlights",name:"enablePartnerSpotlights",validation:"",default:!0,tag:!0,group:"Display Ads",label:"Partner Spotlights",required:!1,view:!0,filter:!1,add:!0,update:!0},{type:"label",label:"Whatsapp Auth",info:"Manage your whatsapp authentications",name:"sm",group:"Whatsapp Authentications",icon:"whatsapp-auth",add:!0,update:!0},{type:"line",add:!0,update:!0,group:"Whatsapp Authentications",icon:"whatsapp-auth"},{type:"toggle",placeholder:"Whatsapp Auth",name:"isWhatsappAuth",validation:"",default:!0,tag:!0,group:"Whatsapp Authentications",label:"Whatsapp Auth",required:!1,view:!0,filter:!1,add:!0,update:!0}]),[Q]=(0,i.useState)([{type:"select",footnote:"",placeholder:"Choose Ticket",name:"ticket",validation:"",label:"Select Ticket",showItem:"value",default:"",value:"",preFill:[{id:"",value:"All"}],required:!1,view:!1,filter:!0,add:!1,update:!0,apiType:"API",selectApi:"ticket/select/all/Ticket",export:!1},{type:"text",placeholder:"Title",name:"title",validation:"",default:"",label:"Title",tag:!0,required:!1,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Is Active",name:"isActive",validation:"",default:"",label:"Is Active",tag:!0,required:!1,view:!0,add:!0,update:!0}]),[K]=(0,i.useState)([{type:"select",name:"type",label:"Type",apiType:"JSON",filterType:"tabs",value:"check-in",filterDefault:"check-in",selectApi:[{id:"check-in",value:"Checked In"},{id:"pending-list",value:"Pending"},{id:"all",value:"Allotted"}]},{type:"text",placeholder:"Name",name:"firstName",collection:"user",validation:"",default:"",tag:!0,label:"Name",required:!0,view:!0,add:!1,update:!1},{type:"datetime",placeholder:"Checkin Time",name:"createdAt",validation:"",collection:"attendance",showItem:"createdAt",default:"",tag:!0,label:"Checkin Time",required:!0,view:!0,add:!1,update:!1},{type:"mobilenumber",placeholder:"Phone Number",name:"authenticationId",collection:"user",validation:"",default:"",tag:!0,label:"Phone Number",required:!0,view:!0,add:!1,update:!1},{type:"email",placeholder:"Email ID",name:"emailId",validation:"",collection:"user",default:"",tag:!0,label:"Email ID",required:!0,view:!0,add:!1,update:!1}]),[Z]=(0,i.useState)([{element:"button",type:"callback",callback:(e,t,a,i)=>{},itemTitle:{name:"user",type:"text",collection:""},condition:{item:"instance",if:!1,then:!0,else:!1},icon:"checked",color:"green",title:"Check In",params:{api:"",parentReference:"",itemTitle:{name:"user",type:"text",collection:""},shortName:"Check In",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}}]),[ee]=(0,i.useState)([{type:"text",placeholder:"Image",name:"image",validation:"",default:"",tag:!0,label:"Image",required:!0,view:!0,add:!0,update:!0}]),[te]=(0,i.useState)([{type:"text",placeholder:"Title",name:"title",validation:"",default:"",label:"Title",required:!0,view:!0,add:!0,update:!0},{type:"textarea",placeholder:"Description",name:"description",validation:"",default:"",tag:!0,label:"Description",required:!0,view:!0,add:!0,update:!0},{type:"image",placeholder:"Image",name:"image",validation:"",default:"",tag:!0,label:"Image",required:!0,view:!0,add:!0,update:!0}]),[ae]=(0,i.useState)([{type:"text",placeholder:"Name",name:"name",validation:"",default:"",tag:!0,label:"Name",required:!1,view:!0,add:!0,update:!0},{type:"hidden",apiType:"CSV",placeholder:"Type",name:"type",selectApi:"Default,User-Created",validation:"",default:"User-Created",label:"Type",tag:!0,required:!1,view:!0,add:!0,update:!1,hide:!0,statusLabel:{nextLine:!1,size:"small",conditions:[{when:"type",condition:Rt,compare:"Default",type:"string",label:"Default",icon:"participant-type",color:"mint"},{when:"type",condition:Rt,compare:"User-Created",type:"string",label:"User-Created",icon:"participant-type",color:"red"}]}},{type:"select",apiType:"API",selectApi:"participant-category/select",placeholder:"Participant Category",name:"participantCategory",validation:"",showItem:"title",default:"",tag:!0,label:"Participant Category",required:!1,view:!0,add:!1,update:!1,filter:!0},{type:"toggle",placeholder:"Status",name:"status",validation:"",default:"",tag:!0,label:"Status",required:!0,view:!0,add:!0,update:!0},{type:"hidden",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",validation:"",showItem:"title",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1}]),[ie]=(0,i.useState)([{type:"text",placeholder:"Title",name:"title",validation:"",default:"",label:"Title",icon:"session",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"datetime",placeholder:"Start Time",name:"startTime",validation:"",icon:"time",default:"",tag:!0,label:"Start Time",required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"datetime",placeholder:"End Time",name:"endTime",icon:"time",validation:"",default:"",tag:!0,label:"End Time",required:!1,view:!0,add:!0,update:!0,customClass:"half"},{type:"textarea",placeholder:"a brief description about the session ...",name:"description",validation:"",default:"",label:"Description",sublabel:"Optional",customClass:"full",tag:!1,required:!1,view:!0,add:!0,update:!0},{type:"select",apiType:"API",selectApi:"speakers/select",placeholder:"Speakers",name:"speakers",validation:"",showItem:"name",default:"",tag:!0,label:"Speakers",required:!0,view:!0,add:!0,update:!0,filter:!0,search:!0,footnote:"Speakers can be assigned to this session after it is created"},{type:"number",placeholder:"Order Id",name:"orderId",validation:"",default:"",label:"Order Id",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"select",apiType:"API",selectApi:"session/select",placeholder:"Session",name:"session",validation:"",showItem:"value",default:"",tag:!1,label:"Session",required:!1,view:!1,add:!1,update:!1,filter:!1}]),[le]=(0,i.useState)([{type:"text",placeholder:"Version",name:"version",validation:"",default:"",tag:!0,label:"Version",required:!1,view:!0,add:!0,update:!0}]),[de]=(0,i.useState)([{type:"select",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",validation:"",showItem:"value",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1},{type:"select",apiType:"API",selectApi:"ticket-registration/select",placeholder:"User",name:"user",validation:"",showItem:"fullName",default:"",tag:!0,label:"User",required:!1,view:!0,add:!1,update:!1,filter:!1},{type:"text",placeholder:"Overall",name:"overall",validation:"",default:"",tag:!0,label:"Overall",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Sessions",name:"sessions",validation:"",default:"",tag:!0,label:"Sessions",required:!1,view:!0,add:!0,update:!0},{type:"text",placeholder:"Content",name:"content",validation:"",default:"",tag:!0,label:"Content",required:!1,view:!0,add:!0,update:!0}]),[oe]=(0,i.useState)([{type:"text",placeholder:"Name",name:"name",validation:"",default:"",label:"Name",customClass:"half",required:!0,view:!0,add:!0,update:!0},{type:"select",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",showItem:"value",validation:"",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1},{type:"multiSelect",apiType:"API",selectApi:"ticket/event-ticket",updateOn:"event",collection:"ticket",placeholder:"Tickets",name:"tickets",showItem:"value",validation:"",default:"",tag:!0,label:"Tickets",required:!0,view:!0,add:!0,update:!0,filter:!1},{type:"number",placeholder:"Minimum Age Group",name:"ageGroupMin",customClass:"half",validation:"",default:"",tag:!0,label:"Minimum Age Group",required:!1,view:!0,add:!0,update:!0},{type:"number",placeholder:"Maximum Age Group",name:"ageGroupMax",customClass:"half",validation:"",default:"",tag:!0,label:"Maximum Age Group",required:!1,view:!0,add:!0,update:!0},{type:"select",placeholder:"Gender",name:"gender",validation:"",default:"",label:"Gender",showItem:"Gender",tag:!0,required:!1,view:!0,filter:!1,add:!0,update:!0,apiType:"CSV",selectApi:"Male,Female"}]),[ne]=(0,i.useState)([{type:"multiSelect",placeholder:"Mobile Modules",name:"mobileModules",validation:"",tag:!0,editable:!0,label:"",group:"Mobile Module",sublabel:"",showItem:"",required:!1,customClass:"full",filter:!1,view:!0,add:!0,update:!0,apiType:"JSON",selectType:"card",selectApi:[{value:"InstaSnap",id:"InstaSnap"},{value:"Networking",id:"Networking"},{value:"Meetings",id:"Meetings"},{value:"Messaging",id:"Messaging"},{value:"Speakers",id:"Speakers"},{value:"Exhibitors",id:"Exhibitors"},{value:"Sessions",id:"Sessions"},{value:"Sponsors",id:"Sponsors"},{value:"Feedback",id:"Feedback"},{value:"Videos",id:"Videos"},{value:"Ticket",id:"Ticket"},{value:"AI Chat",id:"AI Chat"}]}]),[re]=(0,i.useState)([]),[se]=(0,i.useState)([]),[pe]=(0,i.useState)([{type:"text",placeholder:"Campaign Name",name:"name",validation:"",default:"",tag:!1,label:"Campaign Name",required:!1,view:!0,add:!0,update:!0},{type:"select",apiType:"API",selectApi:"audience/select",placeholder:"Audience",name:"audience",validation:"",showItem:"name",default:"",tag:!0,label:"Audience",required:!1,view:!0,add:!0,update:!0,filter:!1},{type:"textarea",placeholder:"Email Template",name:"description",validation:"",default:"",tag:!0,label:"Email Template",required:!1,view:!0,add:!0,update:!0},{type:"select",apiType:"CSV",selectApi:"draft,scheduled,sending,completed,cancelled",placeholder:"Status",name:"status",label:"Status",default:"draft",tag:!0,required:!1,view:!0,filter:!0,add:!0,update:!0},{type:"date",placeholder:"Date",name:"scheduleTime",validation:"",default:"",label:"Date",tag:!0,required:!0,view:!0,add:!0,update:!0,condition:{item:"status",if:"scheduled",then:"enabled",else:"disabled"}},{type:"select",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",validation:"",showItem:"value",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1}]),[ce]=(0,i.useState)([{type:"text",placeholder:"Campaign Name",name:"name",validation:"",default:"",tag:!1,label:"Campaign Name",required:!1,view:!0,add:!0,update:!0},{type:"select",apiType:"API",selectApi:"audience/select",placeholder:"Audience",name:"audience",validation:"",showItem:"name",default:"",tag:!0,label:"Audience",required:!1,view:!0,add:!0,update:!0,filter:!1},{type:"textarea",placeholder:"Whatsapp Template",name:"description",validation:"",default:"",tag:!0,label:"Whatsapp Template",required:!1,view:!0,add:!0,update:!0},{type:"select",apiType:"CSV",selectApi:"draft,scheduled,sending,completed,cancelled",placeholder:"Status",name:"status",label:"Status",default:"draft",tag:!0,required:!1,view:!0,filter:!0,add:!0,update:!0},{type:"date",placeholder:"Date",name:"scheduleTime",validation:"",default:"",label:"Date",tag:!0,required:!0,view:!0,add:!0,update:!0,condition:{item:"status",if:"scheduled",then:"enabled",else:"disabled"}},{type:"select",apiType:"API",selectApi:"event/select",placeholder:"Event",name:"event",validation:"",showItem:"value",default:"",tag:!1,label:"Event",required:!1,view:!1,add:!1,update:!1,filter:!1}]),[ue]=(0,i.useState)([{type:"image",placeholder:"Image",name:"image",validation:"",default:"",tag:!0,label:"Image",required:!0,view:!0,add:!0,update:!0},{type:"toggle",placeholder:"Approve",name:"approve",validation:"",default:!1,label:"Approve",required:!1,view:!0,add:!0,update:!0}]),[me]=(0,i.useState)([{element:"button",type:"custom",id:"dashboard",icon:"dashboard",title:"Dashboard",page:"dashboard"},{element:"button",type:"subTabs",id:"configure",title:"Configure",icon:"configure",tabs:[{type:"title",title:"EVENT",id:"EVENT"},{type:"information",title:"Event Details",icon:"info",id:"information"},{element:"button",type:"subList",id:"sessionList",title:"Sessions",icon:"session",attributes:N,params:{api:"sessions",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},bulkUplaod:!0,shortName:"Sessions",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single",exportPrivilege:!0,actions:[{element:"action",type:"subList",id:"session-speaker",title:"Add Agenda",icon:"speakers",attributes:ie,params:{api:"session-speaker",parentReference:"session",itemTitle:{name:"title",type:"text",collection:""},shortName:"Agenda",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",viewMode:"table",formMode:"single"}}]}},{element:"button",type:"subList",id:"speakers",title:"Speakers",icon:"speakers",attributes:D,params:{api:"speakers",parentReference:"event",itemTitle:{name:"name",type:"text",collection:""},profileImage:"photo",shortName:"Speakers",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",viewMode:"table",formMode:"single"}},{element:"button",type:"subTabs",id:"Sponsor",title:"Sponsor",icon:"sponsors",tabs:[{element:"button",type:"subList",id:"sponsorsList",title:"Sponsors List",icon:"sponsor-list",attributes:R,params:{api:"sponsors",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},shortName:"Sponsors",profileImage:"logo",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",viewMode:"table"}},{element:"button",type:"subList",id:"sponsorCategory",title:"Sponsor Category",icon:"sponsor-category",attributes:O,params:{api:"sponsor-category",parentReference:"event",itemTitle:{name:"sponsorCategory",type:"text",collection:""},shortName:"Sponsor Category",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",viewMode:"table"}}]},{type:"title",title:"REGISTRATION"},{element:"button",type:"subList",id:"ticket",title:"Ticket",icon:"ticket",attributes:F,params:{api:"ticket",parentReference:"event",icon:"ticket",itemTitle:{name:"title",type:"text",collection:""},preFilter:{type:"Ticket"},shortName:"Ticket",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single",popupMode:"full-page",popupMenu:"vertical-menu",viewMode:"table"}},{element:"button",type:"subList",id:"participant-type",title:"Participant Type",icon:"participant-type",attributes:ae,params:{api:"participant-type",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},shortName:"Participant Type",addPrivilege:!0,delPrivilege:!1,updatePrivilege:!0,customClass:"medium",formMode:"single",viewMode:"table",actions:[{element:"button",type:"callback",callback:(t,a,i)=>{e.setMessage({type:2,content:"Are You Sure You Want To Delete?",proceed:"Yes",okay:"No",onClose:async()=>!0,onProceed:async()=>{try{return e.setMessage({type:2,content:"The Corresponding Ticket Will Be Deleted Too!",proceed:"Proceed",okay:"Cancel",onClose:async()=>!0,onProceed:async()=>{try{return e.setLoaderBox(!0),(0,f.Wv)({id:null===a||void 0===a?void 0:a._id},"participant-type").then((t=>{var a;if(200===t.status)(null===(a=t.customMessage)||void 0===a?void 0:a.length)>0?e.setMessage({type:1,content:t.customMessage,proceed:"Okay",icon:"success"}):e.setMessage({type:1,content:"Item deleted successfully!",proceed:"Okay",icon:"deleted"}),i();else if(404===t.status){var l;(null===(l=t.customMessage)||void 0===l?void 0:l.length)>0?e.setMessage({type:1,content:t.customMessage,proceed:"Okay",icon:"error"}):e.setMessage({type:1,content:"User not found!",proceed:"Okay",icon:"error"})}else{var d;(null===(d=t.customMessage)||void 0===d?void 0:d.length)>0?e.setMessage({type:1,content:t.customMessage,proceed:"Okay"}):e.setMessage({type:1,content:"Something went wrong!",proceed:"Okay",icon:"error"})}e.setLoaderBox(!1)})),!1}catch(t){}},data:{id:1}}),!1}catch(t){}},data:{id:1}})},itemTitle:{name:"user",type:"text",collection:""},condition:{item:"type",if:"Default",then:!1,else:!0},icon:"delete",title:"Delete",params:{api:"",parentReference:"",itemTitle:{name:"user",type:"text",collection:""},shortName:"Delete",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}}]}},{element:"button",type:"subList",id:"form",title:"Form",icon:"form-builder",attributes:W,params:{api:"ticket",parentReference:"event",icon:"form-builder",itemTitle:{name:"title",type:"text",collection:""},shortName:"Form",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single",popupMode:"full-page",popupMenu:"vertical-menu",viewMode:"table",actions:[{element:"button",type:"custom",id:"ticket-registration",icon:"ticket-registration",title:"Responses",page:"regdata"},{element:"button",type:"callback",callback:(e,t)=>{A({item:e,data:t}),m(!0)},itemTitle:{name:"title",type:"text",collection:""},icon:"form-builder",title:"Form Builder",params:{api:"",parentReference:"",itemTitle:{name:"title",type:"text",collection:""},shortName:"Form Builder",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"full-page"}}]}},{element:"button",type:"subList",id:"badge",icon:"badge",title:"Badges",attributes:B,params:{api:"ticket",parentReference:"event",icon:"badge",itemTitle:{name:"title",type:"text",collection:""},shortName:"Badges",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single",popupMode:"full-page",popupMenu:"vertical-menu",viewMode:"table",actions:[{element:"button",type:"callback",callback:(e,t)=>{A({item:e,data:t}),v(!0)},itemTitle:{name:"title",type:"text",collection:""},icon:"badge",title:"Badge Builder",params:{api:"",parentReference:"",itemTitle:{name:"title",type:"text",collection:""},shortName:"Badge Builder",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"full-page"}}]}},{element:"button",type:"subList",id:"coupen",icon:"coupon",itemTitle:"code",title:"Discount Coupons",attributes:z,params:{api:"coupen",parentReference:"event",itemTitle:{name:"code",type:"text",collection:""},shortName:"Discount Coupons",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single",viewMode:"table"}},{element:"button",type:"subTabs",id:"SettingsTab",title:"Settings",icon:"settings",tabs:[{element:"button",type:"subList",id:"messaging",title:"Configurations",icon:"contact",attributes:V,params:{api:"settings",parentReference:"event",itemTitle:{name:"whatsappUrl",type:"text",collection:""},shortName:"Configurations",viewMode:"single",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single"}},{element:"button",type:"custom",id:"event",icon:"url",title:"Custom Domain",page:"domain"}]}]},{element:"button",type:"subTabs",id:"authentication",title:"Registration",icon:"registration",tabs:[{type:"title",title:"REGISTRATION",id:"REGISTRATION"},{element:"button",type:"subList",id:"orders",title:"Orders",icon:"orders",attributes:U,params:{api:"orders/status",parentReference:"event",itemTitle:{name:"fullName",type:"text",collection:"authentication"},shortName:"Orders",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"double",viewMode:"table"}},{element:"button",type:"subList",id:"sales-summary",title:"Orders Summary",icon:"sales-summary",attributes:re,params:{api:"sales-summary",parentReference:"",itemTitle:{name:"page",type:"text",collection:""},shortName:"Orders Summary",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"double"}},{element:"button",type:"custom",id:"attendee",icon:"attendees",title:"Attendee",page:"attendee",ticketType:"Ticket"},{element:"button",type:"custom",id:"ticket-registration",icon:"registration-approval",title:"Approval",page:"approval",ticketType:"Ticket"},{element:"button",type:"subList",id:"missed-registrations",title:"Missed Registrations",icon:"missed-registrations",attributes:se,params:{api:"missed-registrations",parentReference:"",itemTitle:{name:"page",type:"text",collection:""},shortName:"Missed Registrations",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"double"}},{type:"title",title:"PARTICIPANTS",id:"PARTICIPANTS"},{element:"button",type:"custom",id:"registration-data",icon:"registration",title:"Registration Data",page:"registration",ticketType:"Form"},{type:"title",title:"ATTENDANCE",id:"ATTENDANCE"},{element:"button",type:"subTabs",id:"attendance",title:"Attendance",icon:"attendance",tabs:[{element:"button",type:"subList",id:"attendance-all",title:"All",icon:"all",attributes:M,params:{api:"attendance/all",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},actions:L,shortName:"All List",addPrivilege:!1,delPrivilege:!1,updatePrivilege:!1,customClass:"medium",viewMode:"table"}},{element:"button",type:"subList",id:"attendance-check-in",title:"Check-In List",icon:"accessed",attributes:M,params:{api:"attendance/check-in",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},shortName:"Check-In List",addPrivilege:!1,actions:L,delPrivilege:!1,updatePrivilege:!1,customClass:"medium",viewMode:"table"}},{element:"button",type:"subList",id:"attendance-pending-list",title:"Pending List",icon:"pending",attributes:M,params:{api:"attendance/pending-list",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},shortName:"Pending List",addPrivilege:!1,actions:L,delPrivilege:!1,updatePrivilege:!1,customClass:"medium",viewMode:"table"}}]},{type:"title",title:"CHECKIN INSTANCE",id:"CHECKIN INSTANCE"},{element:"button",type:"subList",id:"Instance",title:"Instance",icon:"instance",attributes:Q,params:{api:"instance",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},actions:[],shortName:"Instance",addPrivilege:!1,delPrivilege:!1,updatePrivilege:!1,customClass:"medium",viewMode:"table"}},{element:"button",type:"subTabs",dynamicTabs:{api:"instance/select",template:{element:"button",type:"subList",id:"instance-all",title:"All",icon:"all",attributes:K,params:{api:"instance/attendance",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},labels:[{key:"checkIn",title:"NO OF CHECK-IN",icon:"check-in"},{key:"pending",title:"PENDING",icon:"pending"},{key:"checkInRate",title:"CHECK-IN RATE",icon:"check-in-rate"},{key:"noShow",title:"NO-SHOW RATE",icon:"no-show"}],actions:Z,shortName:"All List",addPrivilege:!1,delPrivilege:!1,exportPrivilege:!0,updatePrivilege:!1,customClass:"medium",viewMode:"table"}}},id:"instance",title:"Instance Check-In",icon:"instance"},{type:"title",title:"FEED BACK",id:"FEED BACK"},{element:"button",type:"subList",id:"feedbacks",title:"Feedback",icon:"feedback",attributes:de,params:{api:"mobile/feedback",parentReference:"event",icon:"feedbacks",itemTitle:{name:"overall",type:"text",collection:""},shortName:"Feedback",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",viewMode:"table"}}]},{element:"button",type:"subTabs",id:"exhibitorsTab",title:"Exhibitors",icon:"exhibitors",tabs:[{element:"button",type:"subList",id:"exhibitor",title:"Exhibitors",icon:"exhibitor",attributes:I,params:{api:"exhibitor",parentReference:"event",itemTitle:{name:"companyName",type:"text",collection:""},shortName:"Exhibitors",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"double"}},{element:"button",type:"subList",id:"exhibitor-category1",title:"Exhibitor Category",icon:"exhibitor-category",attributes:P,params:{api:"exhibitor-category",parentReference:"event",itemTitle:{name:"categoryName",type:"text",collection:""},shortName:"Exhibitor Category",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}},{element:"button",type:"subList",id:"booth-member",title:"Booth Member",icon:"booth-member",attributes:E,params:{api:"booth-member",parentReference:"event",itemTitle:{name:"fullName",type:"text",collection:""},shortName:"Booth Member",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}}]},{element:"button",type:"subTabs",id:"marketingTab",title:"Marketing",icon:"marketing",tabs:[{element:"button",type:"subList",id:"email-campaign",title:"Email Campaign",icon:"registration",attributes:pe,params:{api:"campaign/email",parentReference:"event",itemTitle:{name:"name",type:"text",collection:""},shortName:"Email Campaign",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single"}},{element:"button",type:"subList",id:"whatsapp-campaign",title:"Whatsapp Campaign",icon:"whatsapp",attributes:ce,params:{api:"campaign/whatsapp",parentReference:"event",itemTitle:{name:"name",type:"text",collection:""},shortName:"Whatsapp Campaign",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single"}},{element:"button",type:"subList",id:"savedAudience",title:"Saved Audience",icon:"booth-member",attributes:oe,params:{api:"audience",parentReference:"event",itemTitle:{name:"name",type:"text",collection:""},shortName:"Saved Audience",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"double"}},{element:"button",type:"subList",id:"advocacy",title:"Advocacy Posters",icon:"PosterBuilder",attributes:$,params:{api:"advocacy-poster",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},profileImage:"backgroundImage",shortName:"Advocacy Posters",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",actions:[{element:"button",type:"callback",callback:(e,t)=>{A({item:e,data:t}),x(!0)},itemTitle:{name:"title",type:"text",collection:""},icon:"form-builder",title:"Configure Poster",params:{api:"",parentReference:"",itemTitle:{name:"title",type:"text",collection:""},shortName:"Configure Poster",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"full-page"}}]}}]},{element:"button",type:"custom",id:"reports",icon:"reports",title:"Reports",page:"dashboard"},{element:"button",type:"subTabs",id:"addOns",title:"Add Ons",icon:"addOns",tabs:[{element:"button",type:"subList",id:"add-ons",title:"Add Ons",icon:"addOns",attributes:j,params:{api:"event",parentReference:"_id",itemTitle:{name:"addons",type:"text",collection:""},shortName:"Add Ons",addPrivilege:!1,delPrivilege:!1,updatePrivilege:!0,customClass:"medium",showInfoType:"edit",viewMode:"info"}},{element:"button",type:"subList",id:"core-module",title:"Modules",icon:"core-module",attributes:T,params:{api:"event",parentReference:"_id",itemTitle:{name:"coreModules",type:"text",collection:""},shortName:"Modules",addPrivilege:!1,delPrivilege:!1,updatePrivilege:!0,customClass:"medium",showInfoType:"edit",viewMode:"info"}}]},{element:"button",type:"subList",id:"insta-snap-head",title:"Insta Snap",icon:"insta-snap",tabs:[{element:"button",type:"gallery",id:"UploadPhotos",icon:"upload",title:"Upload Photos",api:"insta-snap",imageSettings:{fileName:"file",image:"compressed",thumbnail:"thumbnail",endpoind:"https://event-hex-saas.s3.amazonaws.com/"},showTitle:!0},{element:"button",type:"subList",id:"manage-photos",title:"Manage Photos",icon:"manage-photos",attributes:q,params:{api:"insta-snap",imageSettings:{fileName:"file",image:"compressed",thumbnail:"thumbnail",endpoind:"https://event-hex-saas.s3.amazonaws.com/"},parentReference:"event",itemTitle:{name:"name",type:"text",collection:""},rowLimit:30,viewMode:"gallery",shortName:"Photos",addLabel:{label:"Add Photos"},addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}},{element:"button",type:"subList",id:"eventHighlights",title:"Event Highlights",icon:"event-highlights",attributes:J,params:{api:"event-highlight",imageSettings:{fileName:"image",image:"image",thumbnail:"imageThumbnail",endpoind:"https://eventhex.s3.ap-south-1.amazonaws.com/"},parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},rowLimit:30,viewMode:"gallery",shortName:"Event Highlights",addLabel:{label:"Add Event Highlights"},addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}},{element:"button",type:"subList",id:"upload-history",title:"Upload History",icon:"upload-history",attributes:X,params:{api:"insta-upload-history",parentReference:"event",itemTitle:{name:"imageCount",type:"text",collection:""},shortName:"Upload History",addPrivilege:!1,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",viewMode:"table"}},{type:"title",title:"PHOTO RETRIEVERS",id:"PHOTO RETRIEVERS"},{element:"button",type:"subList",id:"photo-attendee",title:"Photo Attendee",icon:"photo-attendee",attributes:_,params:{api:"photo-attendee",parentReference:"",itemTitle:{name:"fullName",type:"text",collection:""},shortName:"Photo Attendee",addPrivilege:!1,delPrivilege:!1,updatePrivilege:!1,customClass:"medium"}},{type:"title",title:"STATISTICS",id:"STATISTICS"},{element:"button",type:"custom",id:"photo-usage-analytics",icon:"photo-usage",title:"Photo Usage Analytics",content:Oe},{type:"title",title:"PRINTABLES",id:"PRINTABLES"},{element:"button",type:"custom",id:"qr-code",icon:"qr",title:"QR Code",page:"qrCode"},{type:"title",title:"MONETIZE",id:"MONETIZE"},{element:"button",type:"subList",id:"partners-spotlight",title:"Partners Spotlights",icon:"partners-spotlight",attributes:G,params:{api:"partners-spotlight",parentReference:"event",itemTitle:{name:"partnerName",type:"text",collection:""},shortName:"Partners Spotlights",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",viewMode:"table"}},{type:"title",title:"SETTINGS",id:"SETTINGS"},{element:"button",type:"custom",id:"insta",icon:"url",title:"Domain",content:Me.default},{element:"button",type:"subList",id:"photo-permission",title:"Insta Settings",icon:"display",attributes:Y,params:{api:"photo-permission",parentReference:"event",itemTitle:{name:"photoViewAccess",type:"text",collection:""},shortName:"Insta Settings",viewMode:"single",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single"}},{type:"title",title:"CONTRIBUTE",id:"CONTRIBUTE"},{element:"button",type:"subList",id:"contribute",title:"Contribute",icon:"contribute",attributes:ue,params:{api:"contribute",parentReference:"event",itemTitle:{name:"approve",type:"text",collection:""},shortName:"Contribute",viewMode:"single",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",formMode:"single"}}]},{element:"button",type:"subList",id:"mobile-settings",title:"Mobile Settings",icon:"mobile-settings",tabs:[{element:"button",type:"subList",id:"mobile-modules",title:"Mobile Modules",icon:"mobile-modules",attributes:ne,params:{api:"mobile-module",parentReference:"event",itemTitle:{name:"instaSnapEnabled",type:"text",collection:""},shortName:"Mobile Modules",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium",showInfoType:"edit",viewMode:"info"}},{element:"button",type:"subList",id:"dashboard-banner",title:"Banner",icon:"banner",attributes:ee,params:{api:"dashboard-banner",parentReference:"event",imageSettings:{fileName:"file",image:"file",thumbnail:"compressed",endpoind:"https://event-hex-saas.s3.amazonaws.com/"},itemTitle:{name:"image",type:"text",collection:""},rowLimit:30,viewMode:"gallery",shortName:"Banner",addLabel:{label:"Add Banners"},addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}},{element:"button",type:"subList",id:"notification",title:"Notification",icon:"notification",attributes:te,params:{api:"notification",parentReference:"event",itemTitle:{name:"title",type:"text",collection:""},profileImage:"image",shortName:"Notification",addPrivilege:!0,delPrivilege:!0,updatePrivilege:!0,customClass:"medium"}},{element:"button",type:"custom",id:"app-setting",title:"App Settings",icon:"app-setting",content:Mt},{element:"button",type:"subList",id:"app-version",title:"App Version",icon:"app-version",attributes:le,params:{api:"app-version",parentReference:"event",itemTitle:{name:"version",type:"text",collection:""},shortName:"App Version",addPrivilege:!1,delPrivilege:!1,updatePrivilege:!0,customClass:"medium",viewMode:"table"}}]}]);return(0,k.jsxs)(o.mc,{className:"noshadow",children:[(0,k.jsx)(d.A,{itemDescription:{name:"startDate",type:"datetime"},rowLimit:9,showInfo:!1,addLabel:{label:"Create Event",icon:"add"},showInfoType:"edit",displayColumn:"triple",profileImage:"logo",bulkUplaod:!1,formLayout:"center large",formTabTheme:"steps",isSingle:!1,popupMode:"full-page",popupMenu:"vertical-menu",parentReference:"event",actions:me,api:p([c.admin],n)?"event":p([c.franchiseAdmin],n)?"event/franchise":"event/event-admin",itemTitle:{name:"title",type:"text",collection:""},shortName:"Events",formMode:"double",...e,attributes:C}),u&&w&&(0,k.jsx)(g.A,{popupData:(0,k.jsx)(H,{...e,data:w.data,item:w.item}),themeColors:s,closeModal:S,itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:"print_preparation",title:null===w||void 0===w||null===(t=w.data)||void 0===t?void 0:t.title}},customClass:"full-page"}),y&&w&&(0,k.jsx)(g.A,{popupData:(0,k.jsx)(Ze,{...e,data:w.data,item:w.item}),themeColors:s,closeModal:S,itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:"print_preparation",title:null===w||void 0===w||null===(a=w.data)||void 0===a?void 0:a.title}},customClass:"full-page"}),h&&w&&(0,k.jsx)(g.A,{popupData:(0,k.jsx)(De,{...e,data:w.data,item:w.item}),themeColors:s,closeModal:S,itemTitle:{name:"title",type:"text",collection:""},openData:{data:{_id:"print_preparation",title:"Badge / "+(null===w||void 0===w||null===(l=w.data)||void 0===l?void 0:l.title)}},customClass:"full-page"})]})}))},30487:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAwCAYAAAD+WvNWAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ1SURBVHgB7dq/a1NRGMbxtyrU6d6puiR1iUujS+rQkKUieG3ntioiiAqCIoKIUlAJ4iaIgw7+qINLS7O3poPVocSlOrTp5NRkc0r+gXreIw03uTcofTr1fT5L7w0vWfrl3OScDPxu7ewI0R4dEiIAAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyLIETFopbok9fqmTM9clkwmmzrTbrelsjgvYRjKWLHUd67ZaEjVvZ/OTU1fEmsGrP2g7Fn5scx9eOuvgyCU5ZXV1DhKY6PSbG7760x2WNZq64kZjWciOutia/n7GzdvydPyc7HE3CNsNx6l//jq56XEzPfaWice1Wxsy5ZbsXpVKvOdePz94oJYYy6gkXy+6z4Mg5SZU4nXgv+YS5s56A4/nC2XxZBC4Yx8+/rFX1+5ek1u37mXmBkcPOr/6iNKPZp9IuPj5xJzudxJvwL9/LHuY3r95p0MHTsulpj7DET7i1/jCcKACMKACMKACMKACGIuIN0Q1N3jE5khvyvdz0e34Xh6JCel4qi8evmi75y+x+5c2mbjQWfua3z8iEK9n/sk56OJrhnd/ykVC12vbWz98kcfcbrz/OD+3c697gUtV1fFEnMrUPzoQdXrG4mZVs/M37nNf76XxRXIXEBTMxc710EQuBP55Al63q0k8QPWTDYrRXci3ytyK1d8VbruDlOtMbkTrT/T0NUjujDpQhlOndED1Jo7VNU5/dlH7+MrPlepLPjHVxRNijU8yiAIv8YThAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAER5A8PKriP9EZG0wAAAABJRU5ErkJggg=="},77650:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPUSURBVHgB7Zw9bNNAFMf/d3HTkFZtgkAUCaQgsTEUNr4kEAOwUQnBChIbCyAGxiYjS8vCzMcIC4wwIJgYoQMjalGRaNVC0qrfdWzuJU16TtO+UrmusN9Piuq7sxXdT+/e1Tn7FLZgtOznujXuwcdFBRR8hQLiQcX06av5vHWBN4fzamyzE1W7yl9lv+AoPDOtF5EAfOB51UOpnSjdWjFV9u87Gl+SIocwUXKb+jxh+t6mbZ3fM/6gBxSRbIoHe1WpUWgKosgx8TTcenZHCkh3AJ2OCTeNWOBW65+FZcDzN7ab4fagL6+e0HFNUC3n0LACco2TlGnJpoF9nYg1i0bSworJQ0FRFdfDKcpJtZjQ9WEVkNObjb8cgvpIfVXB6SrnpMwkZVBr0TNqt3Z1JkOODUXS/HKwzvGQ1ya1DNiVlGeSJoegPlO+tTEj7742WeiaXZlNoJwGNBnZ6BQukKCTdqUTk5lqJ6SdYNkk7gLpyNmVTgqJJdUSHHR7leB42R4iiEEEMYggBhHEIIIYHETI2NFLCIPC+AdEhUQQgwhiCG2Izb16h6jYznd137yCMFBTM8Gfig70YEeElV/CYqd5ano2WJYhxiCCGELLQX2vhprHS59HUBl+0SzvH7yL9InjCJOVb9/xp/S0We65cx3ZK+cQNqEJypxZ/1nJHZ8MtJEcuz0cVATfIUOMRQQxiCCGSO/FbNzxiVoyb5C9eg66p7ttW+ZsP5wjfdgL9kwQCZh++LhZ7js61Eyy7s/JQNuBoUfovrE3gmSIMYggBhHEIIIYRBCDCGIQQQwiiEEEMYggBhHEIIIYRBDDnt3N07rVZmtXmTP9kS4vb4VEEIMIYhBBDCKIIZIkXRl+Cef1e4SJNzuHKIhE0NLnr/hfic0Q0z1d2A12RRAt4WQvh79OvhmZ0/1mXf48doPQng+KC/J80D8ighhEEIMIYhBBDCKIQcPHD7ui3Yv2SaFa3VBV0Wh5JXx5FYnFbRFk/kMc0ajik125kmBBCy3vzZvR9EaVy37O1SjbDV0ZYF8aiWJxBZhfCtY5Ho7pfF5VoPDRbiCTbhWJobHRiY1SeG7cjNUeNjZRVHDbbW7SGf9IosghOfYdqel6JeXhVL6xuQkdwEPJvpAuoJArz9UTt+shNtBMTWJmFup9bNn5hXakKuXXdqMKPK5u7uyL5s8gEoyJg9KhXlVslDfsYba20RJJyiFB0LCiyDnYW99YyarfCOWkVY2iabyFBGCG2KcOH7fzbTZ5U1tdWEvewICvMKAV+v24RJW5ezB9GTMT0UczlT+pzeSb8Be4mxl5grIOuQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=3411.fa7cdbb1.chunk.js.map