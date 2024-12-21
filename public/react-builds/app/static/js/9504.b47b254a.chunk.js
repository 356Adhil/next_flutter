"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[9504],{15908:(e,t,a)=>{a.d(t,{C:()=>i});const i=a(94574).Ay.div`
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
`},37415:(e,t,a)=>{a.d(t,{A:()=>v});var i=a(65043),r=a(46861),l=a(38520),o=a(94574),s=a(8276);o.Ay.div`
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
`;const n=o.Ay.div`
  padding: 30px 24px 30px 24px;
  gap: 12px;
  border-radius: 16px;
  border: 1px;
  border: 1px solid ${s.D.stroke.soft};
  display: flex;
`,d=o.Ay.div`
  margin-top: 0;
  display: flex;
  -webkit-box-pack: left;
  justify-content: baseline;
  flex-direction: column;
  gap: 4px;
`,c=o.Ay.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${s.D.text.soft};

  &.info {
    color: Blue;
  }
`,u=o.Ay.div`
  font-size: 20px;
  font-weight: bold;
`,p=o.Ay.div`
  height: 40px;
  width: 40px;
  padding: 10px;
  gap: 10px;
  border-radius: 50%;
  border: 1px;
  opacity: 0px;
  border: 1px solid ${s.D.stroke.soft};
  display: flex;
  align-self: center;
  justify-content: center;
  color: ${s.D.primary.base};
  svg {
    width: 16.09px;
    height: 16.09px;
  }
`,h=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 20px;
  margin-top:10px;
`;var f=a(36824),m=a(70579);const v=(0,i.memo)((e=>{let{title:t="No Title Found",description:a="",dataType:o="API",filterType:s="JSON",parents:v={},filters:g=[{id:1,value:"January"},{id:2,value:"February"},{id:3,value:"March"}],dataItem:b="dashboard",hideFilter:y=!0}=e;const[x,w]=(0,i.useState)(g),[A,S]=(0,i.useState)([]),[j,C]=(0,i.useState)(""),[k,T]=(0,i.useState)(!1),F=(0,i.useCallback)((async(e,t)=>{try{const a=await(0,f.bQ)(t,e);return 200===a.status?a.data:[]}catch(a){return console.error(`Error fetching data from ${e}:`,a),[]}}),[]);(0,i.useEffect)((()=>{(async()=>{if("API"===o&&!k){const e=await F(b,j?{...v,filter:j}:v);S(e),T(!0)}})()}),[b,o,j,v,F,k]),(0,i.useEffect)((()=>{(async()=>{if("API"===s&&!k){const e=await F(g);w(e),T(!0)}})()}),[g,s,F,k]);const D=(0,i.useMemo)((()=>null===A||void 0===A?void 0:A.slice(0,4).map(((e,t)=>(0,m.jsxs)(n,{children:[(0,m.jsx)(p,{children:(0,m.jsx)(r.A0,{icon:e.icon})}),(0,m.jsxs)(d,{children:[(0,m.jsx)(c,{children:e.title}),(0,m.jsx)(u,{children:e.count})]})]},t)))),[A]),E=(0,i.useCallback)((e=>{var t;C(null!==(t=e.id)&&void 0!==t?t:""),T(!1)}),[C,T]);return(0,m.jsxs)(l.S$,{className:"tiles column",children:[!y&&(0,m.jsx)(l.l6,{label:"Month",align:"right small",value:j,selectApi:x,onSelect:E}),(0,m.jsx)(h,{children:D})]})}),((e,t)=>e.title===t.title&&e.description===t.description&&e.dataType===t.dataType&&e.filterType===t.filterType&&JSON.stringify(e.parents)===JSON.stringify(t.parents)&&JSON.stringify(e.filters)===JSON.stringify(t.filters)&&e.dataItem===t.dataItem&&e.hideFilter===t.hideFilter))},59504:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var i=a(65043),r=a(94574),l=a(79456),o=a(38520),s=a(15908),n=a(37415),d=a(71341),c=a(82550),u=a(8075),p=a(36824),h=a(49867),f=a(66386),m=a(70579);const v=["#F4C430","#6E3FF3","#DC143C","#3CB371","#87CEEB","#FF7F50","#9370DB","#008080","#FF69B4","#00CED1","#8B008B","#00FA9A","#FF8C00","#1E90FF","#7B68EE"],g=e=>{let{title:t="Target vs Reality",type:a="pie",cutout:r="70%",dataType:l="",filterType:s="JSON",filters:n=null,columns:d=[],dataItem:c=[{label:"January",value:1e3},{label:"February",value:1200},{label:"March",value:1500},{label:"April",value:1400},{label:"May",value:1600}]}=e;const u=(0,i.useRef)(null),[g,b]=(0,i.useState)(n),[y,x]=(0,i.useState)(c),[w,A]=(0,i.useState)("");return(0,i.useEffect)((()=>{if("API"===l){(async e=>{try{const t=await(0,p.bQ)(w?{filter:w}:{},e);x(t.data)}catch(t){console.error("Error fetching data from API:",t)}})(c)}}),[c,l,w]),(0,i.useEffect)((()=>{if("API"===s){(async e=>{try{const t=await(0,p.bQ)({},e);b(t.data)}catch(t){console.error("Error fetching filter items from API:",t)}})(n)}}),[n,s]),(0,i.useEffect)((()=>{if(!u.current||!Array.isArray(y))return;const e=[...y].sort(((e,t)=>t.value-e.value)),t={labels:e.map((e=>{var t;return null!==(t=e.label)&&void 0!==t?t:""})),datasets:[{data:e.map((e=>{var t;return null!==(t=e.value)&&void 0!==t?t:0})),fill:!0,tension:1,borderRadius:0,borderSkipped:!0,backgroundColor:e.map(((e,t)=>v[t]))}]},i=u.current.getContext("2d");u.current.chart&&u.current.chart.destroy(),u.current.chart=new h.Ay(i,{type:a,data:{labels:t.labels,datasets:t.datasets},options:{aspectRatio:2.5,cutout:r,plugins:{legend:{display:!0,position:"right",align:"center",fullWidth:!1,reverse:!1,labels:{color:"black",font:{size:12,style:"normal"}}}}}})}),[a,r,y]),(0,m.jsxs)(o.S$,{className:"dashitem column",children:[(0,m.jsxs)(f.hE,{children:[(0,m.jsx)("span",{children:t}),n&&(0,m.jsx)(o.l6,{label:"Month",align:"right small",value:w,selectApi:g,onSelect:e=>{var t;A(null!==(t=e.id)&&void 0!==t?t:null)}})]}),(0,m.jsx)("canvas",{ref:u})]})},b=e=>{let{title:t="Visitor Insights",dataType:a="JSON",filterType:r="JSON",filters:l=[{id:1,value:"January"},{id:2,value:"February"},{id:3,value:"March"}],dataItem:s=[],columns:n=[{name:"click",label:"Clicks",borderColor:"rgb(9, 75, 150)"}],label:d="id",showTitle:c=!0,chartId:u}=e;const p=(0,i.useRef)(null),v=(0,i.useRef)(null),[g]=(0,i.useState)(s),[b]=(0,i.useState)((()=>u||"chart-"+Math.random().toString(36).substr(2,9)));return(0,i.useEffect)((()=>{if("API"===r){(async()=>{})(l)}}),[l,r]),(0,i.useEffect)((()=>((()=>{if(!p.current||!Array.isArray(g))return;const e=p.current.getContext("2d");if(!e)return;v.current&&v.current.destroy();const t={labels:g.map((e=>e[d])),datasets:n.map((t=>{const a=e.createLinearGradient(0,0,0,400),i=t.borderColor.match(/\d+/g);if(i&&3===i.length){const[e,t,r]=i;a.addColorStop(0,`rgba(${e}, ${t}, ${r}, 0.1)`),a.addColorStop(1,`rgba(${e}, ${t}, ${r}, 0)`)}else a.addColorStop(0,"rgba(185, 174, 52, 0)"),a.addColorStop(1,"rgba(185, 174, 52, 0)");return{name:t.name,label:t.label,data:g.map((e=>e[t.name])),fill:!0,backgroundColor:a,borderColor:t.borderColor,tension:.1,cubicInterpolationMode:"linear",pointRadius:0,pointHoverRadius:8,pointHoverBackgroundColor:t.borderColor,pointHoverBorderColor:"white",pointHoverBorderWidth:3}}))};v.current=new h.Ay(e,{id:b,type:"line",data:{labels:t.labels,datasets:t.datasets},options:{responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},hover:{mode:"index",intersect:!1},scales:{x:{grid:{display:!1},border:{display:!1},ticks:{display:!0,font:{family:"Dosis, sans-serif"}},title:{display:!1}},y:{grid:{display:!0,color:"rgba(200, 200, 200, 0.2)",drawBorder:!1,drawTicks:!1},border:{display:!1},ticks:{display:!0,font:{family:"Dosis, sans-serif"}},title:{display:!1}}},plugins:{tooltip:{mode:"index",intersect:!1},legend:{display:!1,position:"bottom",align:"center",fullWidth:!1,reverse:!1,labels:{color:"black",font:{size:12,style:"normal"},padding:20,boxWidth:40,usePointStyle:!1}}}},plugins:[{id:"hoverLine",beforeDraw:e=>{if(e.tooltip._active&&e.tooltip._active.length){const t=e.tooltip._active[0],{ctx:a}=e,{x:i}=t.element,r=e.scales.y.top,l=e.scales.y.bottom,o=a.createLinearGradient(0,r,0,l);o.addColorStop(0,"rgba(9, 75, 150, 0)"),o.addColorStop(.5,"rgb(9, 75, 150)"),o.addColorStop(1,"rgba(9, 75, 150, 0)"),a.save(),a.beginPath(),a.moveTo(i,r),a.lineTo(i,l),a.lineWidth=2,a.strokeStyle=o,a.stroke(),a.restore()}}}]})})(),()=>{v.current&&(v.current.destroy(),v.current=null)})),[g,n,d,b]),(0,m.jsxs)(o.S$,{className:"dashitem column",style:{height:"100%",width:"100%"},children:[c&&(0,m.jsx)(f.hE,{children:(0,m.jsx)("span",{children:t})}),(0,m.jsx)("div",{style:{height:"100%",width:"100%"},children:(0,m.jsx)("canvas",{id:b,ref:p})})]})},y=r.Ay.span`
  margin-left: 10px;
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid #ddd;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`,x=(0,i.memo)((e=>{var t,a,r,h;let{openData:f}=e;const v=(0,l.d4)((e=>e.themeColors)),[x,w]=(0,i.useState)(f.data),[A,S]=(0,i.useState)(null),[j,C]=(0,i.useState)(null),[k,T]=(0,i.useState)(!1),[F,D]=(0,i.useState)(!1);(0,i.useEffect)((()=>{k||(T(!0),(async()=>{const e=await(0,p.bQ)({event:x._id},"dashboard/dynamic");200===e.status&&S(e.data)})())}),[x._id,k]);const E=(0,i.useCallback)((async(e,t)=>{try{if(!j){const e=await(0,p.bQ)({event:x._id},"dashboard/attendance");var a;if(200===e.status)C(null!==(a=e.data)&&void 0!==a?a:{})}}catch(i){return console.error(`Error fetching data from ${e}:`,i),[]}}),[j,x._id]),[I]=(0,i.useState)([{type:"checkbox",placeholder:"",name:"enable",validation:"",default:"",label:"",tag:!0,required:!0,view:!0,add:!0,update:!0,inlineAction:!0},{type:"text",placeholder:"Title",name:"label",validation:"",default:"",label:"Title",tag:!0,required:!0,view:!0,add:!0,update:!0},{type:"select",apiType:"API",selectApi:"graph-type/select",placeholder:"Graph Type",name:"graphType",validation:"",showItem:"value",default:"",condition:{item:"enable",if:!0,then:"enabled",else:"disabled"},tag:!0,label:"",required:!1,view:!0,add:!0,update:!0,filter:!0,search:!0,inlineAction:!0}]);(0,i.useEffect)((()=>{w(f.data)}),[f.data]);const M=(e,t,a,i,r)=>{switch(a){case"piechart":return(0,m.jsx)(s.C,{column:"2",children:(0,m.jsx)(g,{dataItem:t,columns:r,title:i})},e);case"linegraph":return(0,m.jsx)(s.C,{column:"2",children:(0,m.jsx)(b,{dataItem:t,columns:r,label:"label",title:i})},e);default:return(0,m.jsx)(s.C,{column:"2",children:(0,m.jsx)(g,{dataItem:t,title:i})},e)}},[$,_]=(0,i.useState)(1);return(0,m.jsxs)(o.S$,{className:"dashboard",children:[(0,m.jsxs)(o.S$,{column:"1",className:"justify full",children:[(0,m.jsx)(o.nb,{selectedTab:$,selectedChange:e=>{console.log("Cliked Tab",e),_(e),2===e&&E()},tabs:[{key:1,title:"Registration"},{key:2,title:"Attendance"}]}),(0,m.jsx)(y,{onClick:()=>{D(!0)},children:(0,m.jsx)("span",{children:"Edit"})})]}),1===$?(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(s.C,{className:"full noborder",children:(0,m.jsx)(n.A,{dataType:"API",parents:{event:x._id},dataItem:"dashboard",title:"Event Registration Overview",description:"Overview of event registration details and key statistics."},"reg")},1),(null===A||void 0===A?void 0:A.defaultData)&&(null===A||void 0===A||null===(t=A.defaultData)||void 0===t?void 0:t.map((e=>{var t,a;return M(e._id,e.graphData,null!==(t=null===(a=e.graphType)||void 0===a?void 0:a.key)&&void 0!==t?t:"pie",e.eventDefaultMetrics.title,e.columns)}))),(null===A||void 0===A?void 0:A.formBased)&&(null===A||void 0===A||null===(a=A.formBased)||void 0===a?void 0:a.map((e=>{var t,a;return M(e._id,e.graphData,null!==(t=null===(a=e.graphType)||void 0===a?void 0:a.key)&&void 0!==t?t:"pie",e.ticketFormData.label+" Distribution",e.columns)})))]}):(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(s.C,{className:"full noborder",children:(0,m.jsx)(n.A,{dataType:"API",parents:{event:x._id},dataItem:"dashboard/attendance-count",title:"Event Registration Overview",description:"Overview of event registration details and key statistics."},"attendance")},2),(null===j||void 0===j?void 0:j.defaultData)&&(null===j||void 0===j||null===(r=j.defaultData)||void 0===r?void 0:r.map((e=>{var t,a;return M("attendance"+e._id,e.graphData,null!==(t=null===(a=e.graphType)||void 0===a?void 0:a.key)&&void 0!==t?t:"pie",e.eventDefaultMetrics.title,e.columns)}))),(null===j||void 0===j?void 0:j.formBased)&&(null===j||void 0===j||null===(h=j.formBased)||void 0===h?void 0:h.map((e=>{var t,a;return M("attendance"+e._id,e.graphData,null!==(t=null===(a=e.graphType)||void 0===a?void 0:a.key)&&void 0!==t?t:"pie",e.ticketFormData.label+" Distribution",e.columns)})))]}),F&&(0,m.jsx)(d.A,{customClass:"side",popupData:(0,m.jsxs)(o.S$,{className:"column popup",children:[(0,m.jsx)(u.F,{line:!1,description:"DEFAULT METRICS"}),(0,m.jsx)(c.A,{openPage:!1,showHeaderRow:!1,add:!1,overflow:"initial",showFilters:!1,showPagination:!1,showTitle:!1,api:"ticket-registration/load-default-selection",parents:{event:x._id},itemTitle:{name:"name",type:"text",collection:"exhibitor"},shortName:"Metrics from forms",formMode:"single",viewMode:"table",attributes:I}),(0,m.jsx)(u.F,{line:!1,description:"METRICS FROM FORMS"}),(0,m.jsx)(c.A,{openPage:!1,showHeaderRow:!1,add:!1,overflow:"initial",showFilters:!1,showPagination:!1,showTitle:!1,api:"ticket-registration/load-selection",parents:{event:x._id},itemTitle:{name:"name",type:"text",collection:"exhibitor"},shortName:"Metrics from forms",formMode:"single",viewMode:"table",attributes:I})]}),themeColors:v,closeModal:()=>D(!1),itemTitle:{name:"title",type:"text",collection:""},openData:{data:{key:"print_preparation",title:"Edit Dashbord"}}})]})}))}}]);
//# sourceMappingURL=9504.b47b254a.chunk.js.map