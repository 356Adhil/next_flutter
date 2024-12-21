/*! For license information please see 1121.2c207450.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[1121],{91121:(e,r,t)=>{t.r(r),t.d(r,{default:()=>D});var o=t(65043),n=t(94574),a=t(77784);const i=(0,a.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),s=(0,a.A)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),c=(0,a.A)("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);var d=t(36824),l=t(8075),p=t(83150),x=t(46861),u=t(70579);const h=n.Ay.div`
  /* padding: 24px; */
  font-family: system-ui, -apple-system, sans-serif;
`,f=n.Ay.div`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 16px;
`,g=n.Ay.button`
  padding: 8px 0;
  border: none;
  background: none;
  color: ${e=>e.active?"#3b82f6":"#6b7280"};
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid ${e=>e.active?"#3b82f6":"transparent"};
`,b=n.Ay.table`
  width: 100%;
  border-collapse: collapse;
`,m=n.Ay.th`
  padding: 12px 16px;
  text-align: left;
  background-color: #f9fafb;
  color: #6b7280;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,y=n.Ay.tr`
  border-bottom: 1px solid #e5e7eb;

  &:hover {
    background-color: #f9fafb;
  }
`,j=n.Ay.td`
  padding: 16px;
  color: #374151;
`,k=n.Ay.span`
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;

  ${e=>{switch(e.status.toLowerCase()){case"draft":return"background-color: #fff3e0; color: #ed6c02;";case"scheduled":return"background-color: #e3f2fd; color: #1976d2;";case"completed":return"background-color: #e8f5e9; color: #2e7d32;";case"cancelled":return"background-color: #ffebee; color: #d32f2f;";default:return"background-color: #f5f5f5; color: #616161;"}}}
`,v=n.Ay.div`
  width: 4px;
  height: 24px;
  background-color: ${e=>e.color};
  border-radius: 2px;
  margin-right: 16px;
`,w=n.Ay.div`
  display: flex;
  align-items: center;
`,A=n.Ay.button`
  padding: 6px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  background-color: white;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9fafb;
    border-color: #9ca3af;
  }
`,C=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0;
  text-align: center;
`,z=n.Ay.div`
  width: 140px;
  height: 140px;
  background-color: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;

  &::before {
    content: "✨";
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 24px;
  }

  &::after {
    content: "✨";
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 24px;
  }
`,L=n.Ay.div`
  position: relative;

  svg {
    color: #9ca3af;
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: -15px;
    width: 32px;
    height: 32px;
    background-color: #f3f4f6;
    border-radius: 8px;
    transform: rotate(45deg);
  }

  svg:last-child {
    position: absolute;
    top: -20px;
    right: -25px;
  }
`,N=n.Ay.h2`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
`,$=n.Ay.p`
  color: #6b7280;
  margin-bottom: 24px;
`,S=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,E=n.Ay.div`
  margin-bottom: 24px;
`,M=n.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 120px;
  gap: 8px;

  ${e=>"primary"===e.variant&&"\n    background: #4361ee;\n    color: white;\n    border: none;\n    \n    &:hover {\n      background: #2541df;\n      box-shadow: 0 4px 12px rgba(67, 97, 238, 0.15);\n    }\n    \n    &:active {\n      background: #1f38b3;\n      box-shadow: none;\n    }\n  "}

  ${e=>"secondary"===e.variant&&"\n    background: transparent;\n    color: #4361ee;\n    border: 1px solid #4361ee;\n    \n    &:hover {\n      background: rgba(67, 97, 238, 0.05);\n      border-color: #2541df;\n      color: #2541df;\n    }\n    \n    &:active {\n      background: rgba(67, 97, 238, 0.1);\n    }\n  "}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`,_=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #6b7280;
`,W=n.Ay.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,D=e=>{const r=e.openData.data._id,[t,n]=(0,o.useState)("All"),[a,D]=(0,o.useState)([]),[B,R]=(0,o.useState)(!0);(0,o.useEffect)((()=>{(async()=>{try{R(!0);const e=await(0,d.bQ)({event:r},"campaign");D(e.data.response)}catch(e){console.error("Error fetching campaigns:",e)}finally{R(!1)}})()}),[r]);const U=(0,o.useMemo)((()=>"All"===t?a:a.filter((e=>e.status.toLowerCase()===t.toLowerCase()))),[t,a]),V=U.length>0,q=()=>{e.onCreateClick&&e.onCreateClick()},G=e=>{switch(e.toLowerCase()){case"draft":default:return"#9c27b0";case"scheduled":return"#2196f3";case"completed":return"#2e7d32";case"cancelled":return"#d32f2f"}};return B?(0,u.jsx)(_,{children:(0,u.jsx)("span",{children:"Loading campaigns..."})}):(0,u.jsxs)(h,{children:[(0,u.jsxs)(S,{children:[(0,u.jsx)(l.z,{dynamicClass:"sub",line:!1,title:"Email Campaigns",description:"Send emails to the registered attendees!"}),(0,u.jsxs)(p.M3,{onClick:()=>q,children:[(0,u.jsx)(x.A0,{icon:"add"}),(0,u.jsx)("span",{children:"Create Campaign"})]})]}),(0,u.jsx)(E,{children:(0,u.jsx)(f,{children:["All","Draft","Scheduled","Completed","Cancelled"].map((e=>(0,u.jsx)(g,{active:e===t,onClick:()=>n(e),children:e},e)))})}),V?(0,u.jsxs)(b,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)(m,{children:"Campaign Name"}),(0,u.jsx)(m,{children:"Status"}),(0,u.jsx)(m,{children:"Audience Count"}),(0,u.jsx)(m,{children:"Last Updated at"}),(0,u.jsx)(m,{children:"Actions"})]})}),(0,u.jsx)("tbody",{children:U.map((e=>{return(0,u.jsxs)(y,{children:[(0,u.jsx)(j,{children:(0,u.jsxs)(w,{children:[(0,u.jsx)(v,{color:G(e.status)}),e.name]})}),(0,u.jsx)(j,{children:(0,u.jsx)(k,{status:e.status,children:e.status})}),(0,u.jsx)(j,{children:e.audienceCount}),(0,u.jsx)(j,{children:(r=e.updatedAt,new Date(r).toLocaleString("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!0}))}),(0,u.jsx)(j,{children:(0,u.jsxs)(W,{children:[(0,u.jsx)("div",{style:{cursor:"pointer"},children:(0,u.jsx)(c,{size:20,color:"#6b7280"})}),("draft"===e.status.toLowerCase()||"scheduled"===e.status.toLowerCase())&&(0,u.jsx)(A,{children:"Edit"})]})})]},e._id);var r}))})]}):(0,u.jsxs)(C,{children:[(0,u.jsx)(z,{children:(0,u.jsxs)(L,{children:[(0,u.jsx)(i,{size:48}),(0,u.jsx)(i,{size:48})]})}),(0,u.jsx)(N,{children:"All"===t?"You haven't created any campaigns yet. Would you like to create one?":`No ${t.toLowerCase()} campaigns found.`}),(0,u.jsx)($,{children:"All"===t?"Get started by creating your first email campaign":"Create a new campaign or switch filters to see other campaigns"}),(0,u.jsxs)(M,{variant:"primary",onClick:q,children:[(0,u.jsx)(s,{size:20}),"Create campaign"]})]})]})}},77784:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(65043);const n=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return r.filter(((e,r,t)=>Boolean(e)&&""!==e.trim()&&t.indexOf(e)===r)).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const i=(0,o.forwardRef)(((e,r)=>{let{color:t="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:d="",children:l,iconNode:p,...x}=e;return(0,o.createElement)("svg",{ref:r,...a,width:i,height:i,stroke:t,strokeWidth:c?24*Number(s)/Number(i):s,className:n("lucide",d),...x},[...p.map((e=>{let[r,t]=e;return(0,o.createElement)(r,t)})),...Array.isArray(l)?l:[l]])})),s=(e,r)=>{const t=(0,o.forwardRef)(((t,a)=>{let{className:s,...c}=t;return(0,o.createElement)(i,{ref:a,iconNode:r,className:n(`lucide-${d=e,d.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...c});var d}));return t.displayName=`${e}`,t}}}]);
//# sourceMappingURL=1121.2c207450.chunk.js.map