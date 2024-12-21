"use strict";(self.webpackChunkeventex_saas_portal=self.webpackChunkeventex_saas_portal||[]).push([[3218],{90837:(e,i,r)=>{r.r(i),r.d(i,{default:()=>K});var l=r(65043),n=r(94574),t=r(85369),o=r(27149),s=r(30487),a=r(77650),d=r(64980),c=r(70579);const x=[{label:"Name",icon:(0,c.jsx)(t.x$1,{}),value:"Name",type:"text"},{label:"Email",icon:(0,c.jsx)(t.maD,{}),value:"Email",type:"text"},{label:"Phone",icon:(0,c.jsx)(t.Cab,{}),value:"Phone",type:"mobilenumber"},{label:"Website",icon:(0,c.jsx)(t.AnD,{}),value:"Website",type:"text"},{label:"Company",icon:(0,c.jsx)(t.ymh,{}),value:"Company",type:"text"},{label:"Designation",icon:(0,c.jsx)(t._yv,{}),value:"Designation",type:"text"},{label:"Country",icon:(0,c.jsx)(t.O5k,{}),value:"Country",type:"select"},{label:"Voice Response",icon:(0,c.jsx)(t.i0t,{}),value:"Voice Response",type:"voice"}],p=[{label:"Text Input",icon:(0,c.jsx)(o.Gfv,{}),value:"Text Input",type:"text"},{label:"Text Area",icon:(0,c.jsx)(o.v7F,{}),value:"Text Area",type:"textarea"},{label:"Number",icon:(0,c.jsx)(t.amN,{}),value:"Number",type:"number"},{label:"Single Choice",icon:(0,c.jsx)(o.EVU,{}),value:"Single Choice",type:"select"},{label:"Multiple Choice",icon:(0,c.jsx)(o.lEn,{}),value:"Multiple Choice",type:"multiSelect"},{label:"Dropdown",icon:(0,c.jsx)(o.Iln,{}),value:"Dropdown",type:"select"},{label:"Date",icon:(0,c.jsx)(o.Hvs,{}),value:"Date",type:"date"},{label:"Time",icon:(0,c.jsx)(o.VP9,{}),value:"Time",type:"time"},{label:"Slider",icon:(0,c.jsx)(o.HZW,{}),value:"Slider"},{label:"Rating",icon:(0,c.jsx)(t.gt3,{}),value:"Rating"},{label:"File Upload",icon:(0,c.jsx)(o.t76,{}),value:"File Upload",type:"file"},{label:"E-signature",icon:(0,c.jsx)(t.wXX,{}),value:"E-signature",type:"image"}],A=n.Ay.div`
  padding-left: 40px;
  background-color: #f6f8fa;
  width: ${e=>{let{isSidebarOpen:i}=e;return i?"calc(100% - 300px)":"100%"}};
  height: auto;
  position: relative;
  padding: 20px;
  transition: width 0.3s ease;
`,h=n.Ay.button`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 10px 20px;
  background-color: #ffffff; /* White background */
  color: #375dfb; /* Text color */
  border: 1px solid #375dfb; /* Border color */
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; /* Slightly darker background on hover */
  }
`,u=n.Ay.div`
  margin-top: 60px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,g=n.Ay.div`
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
      margin: 4px 0 0 0; /* Adjust the margin as needed */
      padding: 0; /* Remove the default padding */
      font-weight: 300;
      font-size: 14px;
    }
  }
`,b=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  // transition: background-color 0.3s ease;
  font-size: 12px;
`,f=(0,n.Ay)(t.i0t)`
  color: #007bff;
  // margin-right: 10px;
`,y=n.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #375dfb; /* Blue background */
  border-radius: 50%; /* Make the background a circle */

  svg {
    color: #ffffff; /* White icon color */
    font-size: 24px; /* Adjust icon size */
  }
`,j=n.Ay.div`
  position: fixed;
  top: 0;
  right: ${e=>{let{isOpen:i}=e;return i?"0":"-300px"}}; /* Slide in/out */
  width: 300px;
  height: 100vh;
  background-color: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transition: right 0.3s ease-in-out;
  z-index: 10;
  padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* Make the sidebar scrollable */
`,v=n.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9;
`,m=n.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 93%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
`,I=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Adjust gap between items as needed */

  & > * {
    flex: 1 1 calc(50% - 16px); /* 50% width minus the gap size */
    box-sizing: border-box;
  }
`,C=n.Ay.div`
  position: relative;
  width: 100%;
  padding: 10px;
  padding-bottom: 15px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: ${e=>e.isActive?"#F6F8FA":"#ffffff"};
  border-color: ${e=>e.isActive?"#EBF1FF":"transparent"};
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    cursor: pointer;
  }
`,k=n.Ay.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #375dfb;
  }
`,E=n.Ay.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;

  &:focus {
    border-color: #375dfb;
  }
`,w=n.Ay.img`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 20px;
  display: ${e=>e.isActive?"block":"none"};
`,R=n.Ay.img`
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 25px;
  height: 10px;
  display: ${e=>e.isActive?"block":"none"};
`,B=n.Ay.h4`
  margin-bottom: 20px;
  text-align: left;
  margin-left: 20px;
`,S=n.Ay.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f8fa;
  padding-left: 20px;
`,N=n.Ay.h3`
  margin-bottom: 10px;
  font-size: 14px;
  @media (max-width: 768px) {
    text-align: center;
  }
`,T=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* Adjust the gap between field cards */

  @media (max-width: 768px) {
    align-items: center;
    justify-content: space-around;
  }
`,F=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  background-color: #f6f8fa;
  border-radius: 10px;
  border: 1px solid #e2e4e9;
  cursor: pointer;
  width: 90px;
  height: 60px;
`,U=n.Ay.div`
  font-size: 14px;
`,z=n.Ay.div`
  font-size: 10px;
`,J=n.Ay.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
`,V=n.Ay.button`
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${e=>e.primary?"#F6F8FA":"#ffffff"};
  color: grey;
  border: 1px solid #e2e4e9;
  opacity: ${e=>e.disabled?.5:1};
  pointer-events: ${e=>e.disabled?"none":"auto"};

  &:hover {
    background-color: #d3d3d3;
  }
`,X=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`,M=n.Ay.div`
  font-size: 16px;
  margin-right: 5px;
`,O=n.Ay.div`
  background-color: #f8c9d2;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 10px;
  color: #000;
`,W=n.Ay.div`
  padding: 20px;
`,Q=n.Ay.div`
  margin-bottom: 10px;
`,Y=n.Ay.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 12px;
`,Z=n.Ay.label`
  font-weight: 500;
  font-size: 10px;
`,P=n.Ay.div`
  display: flex;
  gap: 10px;
`,D=n.Ay.button`
  display: flex;
  align-items: center;
  background-color: #f6f8fa;
  border: none;
  border-radius: 10px;
  color: grey;
  padding: 5px 10px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`,H=n.Ay.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  color: #375dfb;
  padding: 5px 5px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`,K=()=>{const[e,i]=(0,l.useState)(!1),[r,n]=(0,l.useState)(!1),[o,K]=(0,l.useState)(null),[G,L]=(0,l.useState)([]),[q,$]=(0,l.useState)([]),_=e=>{let{fields:i}=e;return(0,c.jsx)(T,{children:i.map((e=>{let{label:i,icon:r,value:l,type:n}=e;return(0,c.jsxs)(F,{onClick:()=>ie({label:i,icon:r,value:l,type:n}),children:[(0,c.jsx)(U,{children:r}),(0,c.jsx)(z,{children:i})]},l)}))})},ee=()=>{i(!e)},ie=e=>{L(e)},re=(e,i)=>{switch(e){case"text":case"select":case"mobilenumber":case"textarea":case"date":case"time":case"multiSelect":case"file":case"image":case"number":return(0,c.jsx)(d.A,{type:e,label:i});default:return null}};return console.log("form fields",q),(0,c.jsxs)(A,{isSidebarOpen:r,children:[(0,c.jsx)(h,{onClick:ee,children:"+ Insert Fields"}),(0,c.jsxs)(u,{children:[(0,c.jsxs)(g,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"Feedback Form"}),(0,c.jsx)("p",{children:"This is a sample description"})]}),(0,c.jsxs)(b,{children:[(0,c.jsx)(y,{children:(0,c.jsx)(f,{size:20})}),(0,c.jsx)("span",{children:"Type using AI"})]})]}),(0,c.jsx)(I,{children:q.map(((e,i)=>(0,c.jsxs)(C,{isActive:o===e.value,onClick:()=>{var i;i=e.value,K(i),n(!r)},children:[re(e.type,e.label),(0,c.jsx)(R,{src:s,isActive:o===e.value}),(0,c.jsx)(w,{src:a,isActive:o===e.value,onClick:()=>{return i=e.value,void $(q.filter((e=>e.value!==i)));var i}})]},i)))})]}),e&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{onClick:ee}),(0,c.jsxs)(m,{children:[(0,c.jsx)(B,{children:"Insert Fields"}),(0,c.jsxs)(S,{children:[(0,c.jsx)(N,{children:"Primary Fields"}),(0,c.jsx)(_,{fields:x})]}),(0,c.jsxs)(S,{style:{paddingBottom:"10px"},children:[(0,c.jsx)(N,{children:"Custom Fields"}),(0,c.jsx)(_,{fields:p})]}),(0,c.jsxs)(J,{children:[(0,c.jsx)(V,{onClick:ee,children:"Cancel"}),(0,c.jsx)(V,{primary:!0,disabled:!G,onClick:()=>{G&&($([...q,G]),L(null),i(!1))},children:"Insert Field"})]})]})]}),(0,c.jsxs)(j,{isOpen:r,children:[(0,c.jsxs)(X,{children:[(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,c.jsx)(M,{children:"Properties"}),(0,c.jsx)(O,{children:"Mandatory Field"})]}),(0,c.jsx)(t.QCr,{onClick:()=>{n(!1),K(null)}})]}),(0,c.jsxs)(W,{children:[(0,c.jsxs)(Q,{children:[(0,c.jsx)(Y,{children:"Label*"}),(0,c.jsx)(k,{})]}),(0,c.jsxs)(Q,{children:[(0,c.jsx)(Y,{children:"Field ID*"}),(0,c.jsx)(k,{})]}),(0,c.jsxs)(Q,{children:[(0,c.jsx)(Y,{children:"Placeholder"}),(0,c.jsx)(k,{})]}),(0,c.jsxs)(Q,{children:[(0,c.jsx)(Y,{children:"Description or Hint"}),(0,c.jsx)(E,{})]}),(0,c.jsxs)(Q,{children:[(0,c.jsx)(Y,{children:"Character Length*"}),(0,c.jsxs)("div",{style:{display:"flex",gap:"10px"},children:[(0,c.jsxs)("div",{style:{flex:1},children:[(0,c.jsx)(Z,{children:"Minimum"}),(0,c.jsx)(k,{})]}),(0,c.jsxs)("div",{style:{flex:1},children:[(0,c.jsx)(Z,{children:"Maximum"}),(0,c.jsx)(k,{})]})]})]}),(0,c.jsxs)(Q,{children:[(0,c.jsx)(Y,{children:"Visibility"}),(0,c.jsxs)(P,{children:[(0,c.jsxs)(D,{children:[(0,c.jsx)(t.mx3,{})," Hide"]}),(0,c.jsxs)(D,{children:[(0,c.jsx)(t.Ny1,{})," Show"]})]})]}),(0,c.jsxs)(Q,{children:[(0,c.jsx)(Y,{children:"Layout"}),(0,c.jsxs)(P,{children:[(0,c.jsxs)(H,{children:[(0,c.jsx)(t.PVM,{})," One Column"]}),(0,c.jsxs)(H,{children:[(0,c.jsx)(t.vgu,{})," Two Column"]})]})]})]})]})]})}},30487:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAAAwCAYAAAD+WvNWAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ1SURBVHgB7dq/a1NRGMbxtyrU6d6puiR1iUujS+rQkKUieG3ntioiiAqCIoKIUlAJ4iaIgw7+qINLS7O3poPVocSlOrTp5NRkc0r+gXreIw03uTcofTr1fT5L7w0vWfrl3OScDPxu7ewI0R4dEiIAAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyIIAyLIETFopbok9fqmTM9clkwmmzrTbrelsjgvYRjKWLHUd67ZaEjVvZ/OTU1fEmsGrP2g7Fn5scx9eOuvgyCU5ZXV1DhKY6PSbG7760x2WNZq64kZjWciOutia/n7GzdvydPyc7HE3CNsNx6l//jq56XEzPfaWice1Wxsy5ZbsXpVKvOdePz94oJYYy6gkXy+6z4Mg5SZU4nXgv+YS5s56A4/nC2XxZBC4Yx8+/rFX1+5ek1u37mXmBkcPOr/6iNKPZp9IuPj5xJzudxJvwL9/LHuY3r95p0MHTsulpj7DET7i1/jCcKACMKACMKACMKACGIuIN0Q1N3jE5khvyvdz0e34Xh6JCel4qi8evmi75y+x+5c2mbjQWfua3z8iEK9n/sk56OJrhnd/ykVC12vbWz98kcfcbrz/OD+3c697gUtV1fFEnMrUPzoQdXrG4mZVs/M37nNf76XxRXIXEBTMxc710EQuBP55Al63q0k8QPWTDYrRXci3ytyK1d8VbruDlOtMbkTrT/T0NUjujDpQhlOndED1Jo7VNU5/dlH7+MrPlepLPjHVxRNijU8yiAIv8YThAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAERhAER5A8PKriP9EZG0wAAAABJRU5ErkJggg=="},77650:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPUSURBVHgB7Zw9bNNAFMf/d3HTkFZtgkAUCaQgsTEUNr4kEAOwUQnBChIbCyAGxiYjS8vCzMcIC4wwIJgYoQMjalGRaNVC0qrfdWzuJU16TtO+UrmusN9Piuq7sxXdT+/e1Tn7FLZgtOznujXuwcdFBRR8hQLiQcX06av5vHWBN4fzamyzE1W7yl9lv+AoPDOtF5EAfOB51UOpnSjdWjFV9u87Gl+SIocwUXKb+jxh+t6mbZ3fM/6gBxSRbIoHe1WpUWgKosgx8TTcenZHCkh3AJ2OCTeNWOBW65+FZcDzN7ab4fagL6+e0HFNUC3n0LACco2TlGnJpoF9nYg1i0bSworJQ0FRFdfDKcpJtZjQ9WEVkNObjb8cgvpIfVXB6SrnpMwkZVBr0TNqt3Z1JkOODUXS/HKwzvGQ1ya1DNiVlGeSJoegPlO+tTEj7742WeiaXZlNoJwGNBnZ6BQukKCTdqUTk5lqJ6SdYNkk7gLpyNmVTgqJJdUSHHR7leB42R4iiEEEMYggBhHEIIIYHETI2NFLCIPC+AdEhUQQgwhiCG2Izb16h6jYznd137yCMFBTM8Gfig70YEeElV/CYqd5ano2WJYhxiCCGELLQX2vhprHS59HUBl+0SzvH7yL9InjCJOVb9/xp/S0We65cx3ZK+cQNqEJypxZ/1nJHZ8MtJEcuz0cVATfIUOMRQQxiCCGSO/FbNzxiVoyb5C9eg66p7ttW+ZsP5wjfdgL9kwQCZh++LhZ7js61Eyy7s/JQNuBoUfovrE3gmSIMYggBhHEIIIYRBCDCGIQQQwiiEEEMYggBhHEIIIYRBDDnt3N07rVZmtXmTP9kS4vb4VEEIMIYhBBDCKIIZIkXRl+Cef1e4SJNzuHKIhE0NLnr/hfic0Q0z1d2A12RRAt4WQvh79OvhmZ0/1mXf48doPQng+KC/J80D8ighhEEIMIYhBBDCKIQcPHD7ui3Yv2SaFa3VBV0Wh5JXx5FYnFbRFk/kMc0ajik125kmBBCy3vzZvR9EaVy37O1SjbDV0ZYF8aiWJxBZhfCtY5Ho7pfF5VoPDRbiCTbhWJobHRiY1SeG7cjNUeNjZRVHDbbW7SGf9IosghOfYdqel6JeXhVL6xuQkdwEPJvpAuoJArz9UTt+shNtBMTWJmFup9bNn5hXakKuXXdqMKPK5u7uyL5s8gEoyJg9KhXlVslDfsYba20RJJyiFB0LCiyDnYW99YyarfCOWkVY2iabyFBGCG2KcOH7fzbTZ5U1tdWEvewICvMKAV+v24RJW5ezB9GTMT0UczlT+pzeSb8Be4mxl5grIOuQAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=3218.1383eb6e.chunk.js.map