/*! For license information please see 2628.a5770b9f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[2628],{92628:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var o=i(65043),r=i(93245),n=i(94574),a=i(36824),s=i(77784);const d=(0,s.A)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),l=(0,s.A)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);var c=i(70579);const p=n.Ay.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
`,x=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
`,h=n.Ay.div`
  padding: 20px;
  background: white;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${e=>e.isSelected?"#0d6efd":"#e2e8f0"};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: #0d6efd;
  }

  .domain-name {
    font-size: 15px;
    font-weight: 500;
    color: #1e293b;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .domain-info {
    font-size: 13px;
    color: #64748b;
  }
`,m=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  background: white;
  border-radius: 24px;
  padding: 40px;
  margin-top: 24px;
  position: relative;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 32px;
  }
`,g=n.Ay.div`
  padding: 32px;
  background: #f8fafc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`,u=n.Ay.div`
  max-width: 280px;

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: #64748b;
    margin-bottom: 24px;
    line-height: 1.6;
  }
`,f=n.Ay.button`
  padding: 12px 24px;
  background: #0d6efd;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #0d6efd;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`,w=n.Ay.div`
  text-align: center;
  padding: 48px 24px;
  background: white;
  border-radius: 24px;
  color: #64748b;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #64748b;
  }
`,b=e=>{let{openData:t}=e;const i=t.data._id,[n,s]=(0,o.useState)([]),[b,v]=(0,o.useState)(""),y=(0,o.useRef)(null);(0,o.useEffect)((()=>{(async()=>{try{const e=(await(0,a.bQ)({event:i,route:"insta"},"whitelisted-Domains")).data.response;s(e),1===e.length&&v(e[0].domain)}catch(e){console.error("Error fetching domains:",e)}})()}),[i]);const k=n.length>1;return(0,c.jsxs)(p,{children:[k&&(0,c.jsx)(x,{children:n.map((e=>(0,c.jsxs)(h,{isSelected:b===e.domain,onClick:()=>v(e.domain),children:[(0,c.jsxs)("div",{className:"domain-name",children:[(0,c.jsx)(d,{size:16}),e.domain]}),(0,c.jsxs)("div",{className:"domain-info",children:[e.title," \u2022 Created"," ",new Date(e.createdAt).toLocaleDateString()]})]},e._id)))}),b?(0,c.jsxs)(m,{children:[(0,c.jsx)(g,{ref:y,children:(0,c.jsx)(r.Ay,{value:`https://${b}`,size:200,level:"H"})}),(0,c.jsxs)(u,{children:[(0,c.jsx)("h3",{children:"Your QR Code is Ready!"}),(0,c.jsxs)("p",{children:["This QR code will direct users to:",(0,c.jsx)("br",{}),(0,c.jsxs)("strong",{children:["https://",b]})]}),(0,c.jsxs)(f,{onClick:()=>{const e=y.current.querySelector("svg"),t=(new XMLSerializer).serializeToString(e),i=document.createElement("canvas"),o=i.getContext("2d"),r=new Image;r.onload=()=>{const e=r.width+80,t=r.height+80;i.width=e,i.height=t,o.fillStyle="white",o.fillRect(0,0,e,t),o.drawImage(r,40,40);const n=i.toDataURL("image/png",1),a=document.createElement("a");a.download=`qr-code-${b}.png`,a.href=n,a.click()},r.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t)))},children:[(0,c.jsx)(l,{size:18}),"Download QR Code"]})]})]}):(0,c.jsxs)(w,{children:[(0,c.jsx)("h3",{children:"Select a Domain"}),(0,c.jsx)("p",{children:"Choose a domain from above to generate its QR code"})]})]})}},77784:(e,t,i)=>{i.d(t,{A:()=>s});var o=i(65043);const r=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter(((e,t,i)=>Boolean(e)&&""!==e.trim()&&i.indexOf(e)===t)).join(" ").trim()};var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const a=(0,o.forwardRef)(((e,t)=>{let{color:i="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:l="",children:c,iconNode:p,...x}=e;return(0,o.createElement)("svg",{ref:t,...n,width:a,height:a,stroke:i,strokeWidth:d?24*Number(s)/Number(a):s,className:r("lucide",l),...x},[...p.map((e=>{let[t,i]=e;return(0,o.createElement)(t,i)})),...Array.isArray(c)?c:[c]])})),s=(e,t)=>{const i=(0,o.forwardRef)(((i,n)=>{let{className:s,...d}=i;return(0,o.createElement)(a,{ref:n,iconNode:t,className:r(`lucide-${l=e,l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...d});var l}));return i.displayName=`${e}`,i}}}]);
//# sourceMappingURL=2628.a5770b9f.chunk.js.map