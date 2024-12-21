"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[9929],{49929:(e,a,n)=>{n.r(a),n.d(a,{default:()=>y});var t=n(65043),s=n(94574),i=n(16921),r=n(69135),o=n(38520),l=n(8075),c=n(36824),d=n(70579);const p=s.Ay.div`
  max-width: 1200px;
  padding: 10px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,u=s.Ay.div`
  margin-bottom: 20px;

  &.inline {
    display: flex;
    gap: 20px;
    align-items: flex-start;

    > div:first-child {
      flex: 1;
    }
  }
`,h=s.Ay.div`
  min-width: 200px;
  margin-top: 5px;
`,x=s.Ay.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`,v=s.Ay.button`
  padding: 10px 20px;
  border: none;
  background: none;
  color: ${e=>e.active?"#4361ee":"#666"};
  border-bottom: 2px solid ${e=>e.active?"#4361ee":"transparent"};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #4361ee;
  }
`,f=s.Ay.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`,g=s.Ay.div`
  padding: 14px 16px;

  .label {
    font-size: 12px;
    color: #757575;
    margin-bottom: 4px;
  }

  .count {
    font-size: 20px;
    font-weight: 600;
    color: #4361ee;
  }
`,m=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,w=s.Ay.div`
  margin-bottom: 30px;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }
`,A=s.Ay.div`
  color: #dc3545;
  font-size: 14px;
  margin-top: 4px;
`,b=s.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,j={name:"",type:"whatsapp",audience:"",audienceCount:0,description:"",status:"draft",scheduleTime:null,whatsappUrl:"",whatsappAccessToken:"",whatsappAccount:"",whatsappProvider:""},y=e=>{let{onClose:a,onError:n}=e;const[s,y]=(0,t.useState)("template"),[C,k]=(0,t.useState)(!1),[S,E]=(0,t.useState)([]),[P,W]=(0,t.useState)([]),[U,T]=(0,t.useState)(j),[I,z]=(0,t.useState)({}),[F,_]=(0,t.useState)(!1),q=t.useCallback((e=>{null===n||void 0===n||n(e),z((a=>({...a,general:e})))}),[n]),D=t.useCallback((async()=>{try{var e;const a=await(0,c.bQ)({},"audience");null!==a&&void 0!==a&&null!==(e=a.data)&&void 0!==e&&e.response&&E(a.data.response)}catch(a){throw console.error("Error fetching audiences:",a),new Error("Failed to fetch audiences")}}),[]),L=t.useCallback((async()=>{try{var e;const a=await(0,c.bQ)({},"whatsapp-providers");null!==a&&void 0!==a&&null!==(e=a.data)&&void 0!==e&&e.response&&W(a.data.response)}catch(a){throw console.error("Error fetching providers:",a),new Error("Failed to fetch WhatsApp providers")}}),[]);(0,t.useEffect)((()=>{F||(async()=>{try{k(!0),await Promise.all([D(),L()]),_(!0)}catch(e){q(e.message||"Failed to initialize form data")}finally{k(!1)}})()}),[F,q,D,L]);const N=t.useCallback(((e,a)=>{T((n=>({...n,[e]:a}))),z((a=>({...a,[e]:void 0,general:void 0})))}),[]),$=t.useCallback((e=>{if(!e.length)return void T((e=>({...e,audience:"",audienceCount:0})));const a=S.find((a=>a._id===e[0]));a&&T((n=>({...n,audience:e[0],audienceCount:a.count||0})))}),[S]),Q=t.useCallback((()=>{const e={};return U.name.trim()||(e.name="Campaign name is required"),U.audience||(e.audience="Please select an audience"),U.description.trim()||(e.description="Message content is required"),"config"===s&&(U.whatsappProvider||(e.whatsappProvider="WhatsApp provider is required"),U.whatsappUrl||(e.whatsappUrl="WhatsApp URL is required"),U.whatsappAccessToken||(e.whatsappAccessToken="Access token is required"),U.whatsappAccount||(e.whatsappAccount="WhatsApp account is required")),z(e),0===Object.keys(e).length}),[U,s]),B=async e=>{if(e&&e.preventDefault(),Q())try{k(!0);const e=await(0,c.LS)({...U,status:"sending"},"campaign");if(null===e||void 0===e||!e.data)throw new Error("Invalid response from server");null===a||void 0===a||a(e.data)}catch(s){var n,t;console.error("Error submitting campaign:",s),q((null===(n=s.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Failed to submit campaign")}finally{k(!1)}else q("Please fix all errors before submitting")};return F?(0,d.jsxs)(p,{children:[C&&(0,d.jsx)(b,{children:(0,d.jsx)("div",{children:"Processing..."})}),(0,d.jsx)(l.z,{dynamicClass:"sub",line:!1,title:"WhatsApp Campaigns",description:"Send WhatsApp messages to registered attendees!"}),I.general&&(0,d.jsx)(A,{children:I.general}),(0,d.jsxs)("form",{onSubmit:B,children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(o.fI,{label:"Campaign Name",value:U.name,onChange:e=>N("name",e),align:"left",info:"Enter the name of your campaign for internal reference"}),I.name&&(0,d.jsx)(A,{children:I.name})]}),(0,d.jsxs)(u,{className:"inline",children:[(0,d.jsx)("div",{children:(0,d.jsx)(o.KF,{label:"Select Audiences",value:U.audience?[U.audience]:[],selectApi:S.map((e=>({id:e._id,value:e.name}))),onSelect:$,info:"Select one audience for your campaign",checkBox:!0,error:I.audience,align:"left"})}),(0,d.jsx)(h,{children:(0,d.jsxs)(g,{children:[(0,d.jsx)("div",{className:"label",children:"SELECTED UNIQUE AUDIENCE"}),(0,d.jsx)("div",{className:"count",children:U.audienceCount.toLocaleString()})]})})]}),(0,d.jsxs)(x,{children:[(0,d.jsx)(v,{active:"template"===s,onClick:()=>y("template"),children:"WhatsApp Template"}),(0,d.jsx)(v,{active:"config"===s,onClick:()=>y("config"),children:"WhatsApp Configuration"})]}),"template"===s&&(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(u,{children:[(0,d.jsx)(m,{children:(0,d.jsx)(r.A,{label:"Message Content"})}),(0,d.jsx)(i.A,{value:U.description,onChange:e=>N("description",e)}),I.description&&(0,d.jsx)(A,{children:I.description})]},"tempalate")}),"config"===s&&(0,d.jsxs)(w,{children:[(0,d.jsx)(u,{children:(0,d.jsx)(o.KF,{label:"WhatsApp Account Provider",value:U.whatsappProvider?[U.whatsappProvider]:[],selectApi:P.map((e=>({id:e._id,value:e.name}))),onSelect:e=>N("whatsappProvider",e[0]||""),info:"Select your WhatsApp service provider",checkBox:!0,error:I.whatsappProvider,align:"left"})}),(0,d.jsxs)(u,{children:[(0,d.jsx)(o.fI,{label:"WhatsApp URL",value:U.whatsappUrl,onChange:e=>N("whatsappUrl",e),align:"left"}),I.whatsappUrl&&(0,d.jsx)(A,{children:I.whatsappUrl})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(o.fI,{label:"WhatsApp Access Token",value:U.whatsappAccessToken,onChange:e=>N("whatsappAccessToken",e),align:"left",type:"password"}),I.whatsappAccessToken&&(0,d.jsx)(A,{children:I.whatsappAccessToken})]}),(0,d.jsxs)(u,{children:[(0,d.jsx)(o.fI,{label:"WhatsApp Account",value:U.whatsappAccount,onChange:e=>N("whatsappAccount",e),align:"left"}),I.whatsappAccount&&(0,d.jsx)(A,{children:I.whatsappAccount})]})]}),(0,d.jsxs)(f,{children:[(0,d.jsx)(o.$n,{value:"Save as Draft",type:"secondary",isDisabled:C,ClickEvent:async()=>{if(Q())try{k(!0);const e=await(0,c.LS)({...U,status:"draft"},"campaign");if(null===e||void 0===e||!e.data)throw new Error("Invalid response from server");null===a||void 0===a||a(e.data)}catch(t){var e,n;console.error("Error saving draft:",t),q((null===(e=t.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)||"Failed to save draft")}finally{k(!1)}else q("Please fix all errors before saving")}}),(0,d.jsx)(o.$n,{value:"Send",type:"primary",isDisabled:C,ClickEvent:B})]})]})]}):(0,d.jsx)("div",{children:"Initializing form..."})}}}]);
//# sourceMappingURL=9929.4a659dd6.chunk.js.map