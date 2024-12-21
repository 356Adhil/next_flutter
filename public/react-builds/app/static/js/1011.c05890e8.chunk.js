"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[1011],{41011:(e,n,i)=>{i.r(n),i.d(n,{default:()=>b});var t=i(65043),a=i(94574),s=i(8075),l=i(9667),o=i(83150),d=i(46861),r=i(38520),c=i(36824),u=i(70579);const h=a.Ay.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
`,p=a.Ay.div`
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
`,v=a.Ay.span`
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
`,x=a.Ay.div`
  .h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #1f2937;
  }

  .p {
    padding: 0;
    color: #6b7280;
  }
`,m=a.Ay.div`
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
`,f=a.Ay.div`
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
`;function b(e){var n,i;const[a,b]=(0,t.useState)(!1),[g,j]=(0,t.useState)(""),[y,w]=(0,t.useState)([]),[A,S]=(0,t.useState)(!1),[k,C]=(0,t.useState)(""),[z,D]=(0,t.useState)(""),N=e.id,$=null===e||void 0===e||null===(n=e.openData)||void 0===n||null===(i=n.data)||void 0===i?void 0:i._id,V=e=>{if(!e)return D("Subdomain cannot be empty"),{isValid:!1,value:""};if(e.length<1||e.length>63)return D("Subdomain must be between 1 and 63 characters"),{isValid:!1,value:e};const n=e.charAt(0),i=e.charAt(e.length-1);return/[a-z0-9]/.test(n)&&/[a-z0-9]/.test(i)?(D(""),{isValid:!0,value:e}):(D("Subdomain must start and end with a letter or number"),{isValid:!1,value:e})};return(0,t.useEffect)((()=>{(0,c.bQ)({event:$},"whitelisted-Domains").then((e=>{if(200===e.status){var n,i,t;const a=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.response;w(a),j(null!==(i=null===(t=a[0])||void 0===t?void 0:t.domain)&&void 0!==i?i:"your-event.eventhex.ai")}}))}),[$,N]),(0,u.jsxs)(l.Yq,{className:"data-layout ",children:[(0,u.jsx)(s.z,{title:"Domain Settings",line:!1,description:"Manage your event's domain settings and custom domain configuration."}),(0,u.jsx)(h,{children:(0,u.jsxs)(p,{className:"control",children:[(0,u.jsx)(r.Pu,{icon:"globe",onClick:()=>{if(a)C("");else{const e=g.split(".eventhex.ai");C(e[0])}b(!a),D("")},onChange:e=>{const n=(e=>e.toLowerCase().replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-+|-+$/g,""))(e);S(`${n}.eventhex.ai`!==g),C(n),V(n)},text:a?"Cancel":"Edit Subdomain",label:"Subdomain",value:a?k:g,placeholder:"Please add a sub domain!",footnote:a?(null===z||void 0===z?void 0:z.length)>0?z:`${k}.eventhex.ai`:"",error:!!z,customClass:"full transparent"}),a&&(0,u.jsx)(r.$n,{isDisabled:!A,value:"Update",icon:"save",size:16,ClickEvent:()=>{const e=V(k);e.isValid&&(j(`${e.value}.eventhex.ai`),b(!1),D(""))}})]})}),(0,u.jsxs)(p,{justify:"between",children:[(0,u.jsx)(s.F,{title:"Custom Domains",line:!1,description:""}),(0,u.jsxs)(o.M3,{onClick:()=>{},children:[(0,u.jsx)(d.A0,{icon:"add"}),(0,u.jsx)("span",{children:"Add Domain"})]})]}),null===y||void 0===y?void 0:y.map((e=>(0,u.jsxs)(h,{children:[(0,u.jsxs)(p,{justify:"between",children:[(0,u.jsxs)(p,{children:[(0,u.jsx)(d.A0,{icon:"link"}),(0,u.jsx)(x,{children:(0,u.jsx)("div",{className:"h3",children:e.domain})})]}),e.verified?(0,u.jsx)(v,{className:"active",children:"Active"}):(0,u.jsx)(v,{className:"pending",children:"Pending"})]}),(0,u.jsx)(p,{children:(0,u.jsxs)(m,{children:[(0,u.jsx)("span",{children:"CNAME"}),(0,u.jsxs)(f,{children:[(0,u.jsx)("span",{children:"cname.eventhex.ai"}),(0,u.jsx)(r.K0,{type:"plain",icon:"copy",size:16})]})]})})]})))]})}}}]);
//# sourceMappingURL=1011.c05890e8.chunk.js.map