(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{86:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),c=n.n(r),i=n(113),s=n(114),l=n(25),d=n(2),m=Object(a.createContext)({score:0,setScore:function(){},pick:"",setPick:function(){}}),b=function(e){var t=e.children,n=Object(a.useState)(function(){var e=localStorage.getItem("score");return e?parseInt(e):0}()),o=Object(l.a)(n,2),r=o[0],c=o[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),b=s[0],j=s[1];return Object(d.jsx)(m.Provider,{value:{score:r,setScore:c,pick:b,setPick:j},children:t})},j=n(31),h=n(10),p=n(115),u=n(89),O=n(3),x=n(107),g=n(118),f=Object(x.a)((function(e){return Object(g.a)({header:Object(O.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:e.palette.common.background,width:"50vw",minHeight:"max-content",border:"2px",borderStyle:"solid",borderRadius:".5rem",borderColor:e.palette.common.headerOutline,padding:"1rem 1.5rem",margin:"1rem auto 2rem auto"},e.breakpoints.down("md"),{width:"90vw"}),titleBox:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",backgroundColor:e.palette.common.background,minHeight:"max-content"},title:Object(O.a)({textTransform:"uppercase",fontSize:"2rem",margin:"-4px",padding:0,color:e.palette.common.score,fontWeight:600},e.breakpoints.down("md"),{fontSize:"1.5rem"}),scoreBox:Object(O.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.common.score,minHeight:"max-content",textTransform:"uppercase",padding:"1rem 2.5em",borderRadius:"6px"},e.breakpoints.down("md"),{padding:".5rem 1.5rem",borderRadius:"6px"}),scoreTitle:Object(O.a)({fontSize:"1rem",color:e.palette.common.scoreText},e.breakpoints.down("md"),{fontSize:".8rem"}),score:Object(O.a)({fontSize:"3.5rem",fontWeight:700,color:e.palette.common.darkText},e.breakpoints.down("md"),{fontSize:"2.5rem"})})})),w=n(59),k=Object(w.a)({palette:{primary:{main:"hsl(229, 25%, 31%)"},secondary:{main:"hsl(349, 71%, 52%)"},common:{white:"#ffffff",score:"#dde0e1",shadow:"#a3b0c7",darkText:"hsl(229, 25%, 31%)",scoreText:"hsl(229, 64%, 46%)",headerOutline:"hsl(217, 16%, 45%)",scissorsGradient:"hsl(39, 89%, 49%) to hsl(40, 84%, 53%)",paperGradient:"hsl(230, 89%, 62%) to hsl(230, 89%, 65%)",rockGradient:"hsl(349, 71%, 52%) to hsl(349, 70%, 56%)",lizardGradient:"hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",cyanGradient:"hsl(189, 59%, 53%) to hsl(189, 58%, 57%)"},background:{default:"white"}},typography:{fontFamily:["Barlow Semi Condensed","sans-serif"].join(",")},overrides:{MuiTooltip:{tooltip:{backgroundColor:"#ffffff",color:"hsl(229, 25%, 31%)",fontSize:"10px"}}},breakpoints:{values:{xs:0,sm:375,md:960,lg:1366,xl:1920}}}),y=function(){var e=f(k),t=Object(a.useContext)(m).score;return Object(d.jsxs)(p.a,{className:e.header,children:[Object(d.jsxs)(p.a,{className:e.titleBox,children:[Object(d.jsx)(u.a,{variant:"h3",className:e.title,children:"Rock"}),Object(d.jsx)(u.a,{variant:"h3",className:e.title,children:"Paper"}),Object(d.jsx)(u.a,{variant:"h3",className:e.title,children:"Scissors"})]}),Object(d.jsxs)(p.a,{className:e.scoreBox,children:[Object(d.jsx)(u.a,{variant:"h3",className:e.scoreTitle,children:"score"}),Object(d.jsx)(u.a,{variant:"h3",className:e.score,children:t})]})]})},C=n(108),v=n(6),N=n.p+"static/media/icon-rock.476e90a9.svg",S=n.p+"static/media/icon-paper.8b57a6b1.svg",T=n.p+"static/media/icon-scissors.3b1a5d7e.svg",B=Object(x.a)((function(e){return Object(g.a)({main:{borderRadius:"50%",transition:"transform .2s, box-shadow .2s","&:hover":{boxShadow:"0px 10px 10px 1px ".concat(e.palette.common.headerOutline),transform:"scale(1.05) perspective(0px)"}},btn:Object(O.a)({padding:"1.1rem",background:"radial-gradient(".concat(e.palette.common.white,", ").concat(e.palette.common.score,")")},e.breakpoints.down("md"),{padding:".8rem"}),btnBig:Object(O.a)({padding:"1.7rem"},e.breakpoints.down("md"),{padding:".8rem"}),icon:Object(O.a)({position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"3rem",height:"3rem"},e.breakpoints.down("md"),{width:"2.6rem",height:"2.6rem"}),iconBig:Object(O.a)({width:"4.5rem",height:"4.5rem"},e.breakpoints.down("md"),{width:"2.6rem",height:"2.6rem"}),iconContainer:Object(O.a)({position:"relative",justifyContent:"center",alignItems:"center",height:"7rem",width:"7rem",borderRadius:"50%",backgroundColor:e.palette.common.white,boxShadow:"inset 0px 7px 2px ".concat(e.palette.common.shadow)},e.breakpoints.down("md"),{boxShadow:"inset 0px 6px 2px ".concat(e.palette.common.shadow),height:"6rem",width:"6rem"}),iconContainerBig:Object(O.a)({height:"10rem",width:"10rem","&::before":Object(O.a)({content:'""',height:"10rem",width:"10rem"},e.breakpoints.down("md"),{height:"5.8rem",width:"6rem"})},e.breakpoints.down("md"),{height:"6rem",width:"6rem"}),btnRock:Object(O.a)({background:"linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))","&::before":Object(O.a)({content:'""',height:"9.5rem",width:"9rem",backgroundColor:"#a6243c",position:"absolute",display:"block",borderRadius:"50%",bottom:"-5%",zIndex:-1},e.breakpoints.down("md"),{height:"7.5rem",width:"7rem"})},e.breakpoints.down("md"),{height:"7.3rem",width:"7.3rem"}),btnPaper:Object(O.a)({background:"linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))","&::before":Object(O.a)({content:'""',height:"9.5rem",width:"9rem",backgroundColor:"#2037a8",position:"absolute",display:"block",borderRadius:"50%",bottom:"-5%",zIndex:-1},e.breakpoints.down("md"),{height:"7.5rem",width:"7rem"})},e.breakpoints.down("md"),{height:"7.3rem",width:"7.3rem"}),btnScissors:Object(O.a)({background:"linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))","&::before":Object(O.a)({content:'""',height:"9.5rem",width:"9rem",backgroundColor:"#d18d0f",position:"absolute",display:"block",borderRadius:"50%",bottom:"-5%",zIndex:-1},e.breakpoints.down("md"),{height:"7.5rem",width:"7rem"})},e.breakpoints.down("md"),{height:"7.3rem",width:"7.3rem"}),btnRockBig:{"&::before":Object(O.a)({height:"13rem",width:"13rem"},e.breakpoints.down("md"),{height:"7.5rem",width:"7rem"})},btnPaperBig:{"&::before":Object(O.a)({height:"13rem",width:"13rem"},e.breakpoints.down("md"),{height:"7.5rem",width:"7rem"})},btnScissorsBig:{"&::before":Object(O.a)({height:"13rem",width:"13rem"},e.breakpoints.down("md"),{height:"7.5rem",width:"7rem"})}})})),I=function(e){var t,n=e.type,o=e.size,r=e.disabled,c=B(),i=Object(a.useContext)(m).setPick;return Object(d.jsx)(p.a,{className:c.main,children:Object(d.jsx)(C.a,{disableRipple:r,onClick:function(){!r&&i(n)},component:j.b,to:"/game",className:Object(v.a)(c.btn,(t={},Object(O.a)(t,c.btnRock,"rock"===n),Object(O.a)(t,c.btnPaper,"paper"===n),Object(O.a)(t,c.btnScissors,"scissors"===n),Object(O.a)(t,c.btnRockBig,"rock"===n&&"big"===o),Object(O.a)(t,c.btnPaperBig,"paper"===n&&"big"===o),Object(O.a)(t,c.btnScissorsBig,"scissors"===n&&"big"===o),Object(O.a)(t,c.btnBig,"big"===o),t)),children:Object(d.jsx)(p.a,{className:Object(v.a)(c.iconContainer,Object(O.a)({},c.iconContainerBig,"big"===o)),children:Object(d.jsx)("img",{src:function(e){return"rock"===e?N:"paper"===e?S:"scissors"===e?T:void 0}(n),alt:"pick btn",className:Object(v.a)(c.icon,Object(O.a)({},c.iconBig,"big"===o))})})})})},z=n.p+"static/media/bg-triangle.c0c30b56.svg",R=n(109),P=n(32),D=n(110),M=n(116),E=n(111),F=n(112),G=n(52),H=n.n(G),W=n.p+"static/media/image-rules.258b753f.svg",A=Object(x.a)((function(e){return Object(g.a)({main:{padding:"2rem"},modal:Object(O.a)({},e.breakpoints.down("md"),{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}),top:Object(O.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:".5rem"},e.breakpoints.down("md"),{justifyContent:"center",marginTop:"4rem"}),title:Object(O.a)({fontSize:"1.8rem",fontWeight:700,color:e.palette.common.darkText,textTransform:"uppercase"},e.breakpoints.down("md"),{fontSize:"2.5rem"}),closeBtn:{fontSize:"1.9rem",marginRight:"1rem",color:e.palette.common.darkText,opacity:.5},closeBtnPhone:{fontSize:"1.9rem",color:e.palette.common.darkText,opacity:.5,marginBottom:"4rem"},content:Object(O.a)({padding:"1rem 2rem 2rem 2rem"},e.breakpoints.down("md"),{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}),btn:{padding:".3rem 2rem",color:e.palette.common.score,borderColor:e.palette.common.score,borderRadius:".5rem","&:hover":{color:e.palette.common.white,borderColor:e.palette.common.white}}})})),J=function(){var e=A(),t=Object(P.a)(),n=Object(R.a)(t.breakpoints.down("md")),o=Object(a.useState)(!1),r=Object(l.a)(o,2),c=r[0],i=r[1],s=function(){i(!1)};return Object(d.jsxs)(p.a,{className:e.main,children:[Object(d.jsx)(D.a,{variant:"outlined",color:"primary",className:e.btn,onClick:function(){i(!0)},children:"Rules"}),Object(d.jsxs)(M.a,{fullScreen:n,open:c,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:e.modal,children:[Object(d.jsxs)(p.a,{className:e.top,children:[Object(d.jsx)(E.a,{disableTypography:!0,className:e.title,children:"Rules"}),!n&&Object(d.jsx)(C.a,{onClick:s,color:"primary",children:Object(d.jsx)(H.a,{className:e.closeBtn})})]}),Object(d.jsx)(F.a,{className:e.content,children:Object(d.jsx)("img",{src:W,alt:"rules"})}),n&&Object(d.jsx)(C.a,{onClick:s,color:"primary",children:Object(d.jsx)(H.a,{className:e.closeBtnPhone})})]})]})},L=Object(x.a)((function(e){return Object(g.a)({startBtn:{padding:".3rem 2rem",color:e.palette.common.score,borderColor:e.palette.common.score,borderRadius:".5rem","&:hover":{color:e.palette.common.white,borderColor:e.palette.common.white}}})})),Y=function(){var e=L(),t=Object(h.f)(),n=Object(h.g)(),o=Object(a.useContext)(m).setScore;return Object(d.jsx)(D.a,{onClick:function(){o(0),"/game"===n.pathname&&t.push("/")},className:e.startBtn,children:"Sart New Match"})},q=Object(x.a)((function(e){return Object(g.a)({footer:Object(O.a)({position:"absolute",bottom:0,right:"2rem",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center"},e.breakpoints.down("md"),{justifyContent:"space-between",right:"1.5rem"})})})),K=function(){var e=q();return Object(d.jsxs)(p.a,{className:e.footer,children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(Y,{})}),Object(d.jsx)(p.a,{children:Object(d.jsx)(J,{})})]})},Q=Object(x.a)((function(e){return Object(g.a)({boardMain:{display:"flex",flexDirection:"column",justifyContent:"center"},boardContent:Object(O.a)({marginTop:"2rem",position:"relative",display:"flex",justifyContent:"center"},e.breakpoints.down("md"),{marginTop:"0",height:"50vh",width:"100vw"}),triangle:Object(O.a)({position:"absolute",height:"16rem",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:0},e.breakpoints.down("md"),{height:"10rem"}),btnsContainer:Object(O.a)({display:"flex",height:"52vh"},e.breakpoints.down("md"),{marginTop:"2rem",height:"42vh"}),btnRock:Object(O.a)({zIndex:1,alignSelf:"flex-end"},e.breakpoints.down("md"),{margin:"2rem -2rem"}),btnPaper:Object(O.a)({zIndex:1},e.breakpoints.down("md"),{marginTop:"2rem"}),btnScissors:Object(O.a)({zIndex:1},e.breakpoints.down("md"),{marginTop:"2rem"})})})),U=function(){var e=Q();return Object(d.jsxs)(p.a,{className:e.boardMain,children:[Object(d.jsx)(y,{}),Object(d.jsxs)(p.a,{className:e.boardContent,children:[Object(d.jsxs)(p.a,{className:e.btnsContainer,children:[Object(d.jsx)(p.a,{className:e.btnPaper,children:Object(d.jsx)(I,{type:"paper"})}),Object(d.jsx)(p.a,{className:e.btnRock,children:Object(d.jsx)(I,{type:"rock"})}),Object(d.jsx)(p.a,{className:e.btnScissors,children:Object(d.jsx)(I,{type:"scissors"})})]}),Object(d.jsx)("img",{src:z,alt:"",className:e.triangle})]}),Object(d.jsx)(K,{})]})},V=n(117),X=Object(x.a)((function(e){return Object(g.a)({gameMain:{display:"flex",flexDirection:"column",justifyContent:"center"},gameContent:{display:"flex",flexDirection:"column",width:"fit-content",justifyContent:"space-around",alignItems:"center"},titles:{display:"flex",flexDirection:"row",width:"70vw",justifyContent:"space-around"},content:Object(O.a)({display:"flex",flexDirection:"row",width:"55vw",justifyContent:"space-around"},e.breakpoints.down("md"),{width:"90vw"}),youBtn:Object(O.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"35vh",zIndex:2},e.breakpoints.down("md"),{height:"25vh"}),houseBtn:Object(O.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"35vh",zIndex:2},e.breakpoints.down("md"),{height:"25vh"}),hole:Object(O.a)({position:"relative",height:"13.5rem",width:"13.5rem",borderRadius:"50%",background:"radial-gradient(10rem at center, #1a2538 45%, ".concat(e.palette.primary.main," 93%)"),boxShadow:"inset 0px 0px 20px 5px  #0004","&::after":Object(O.a)({content:'""',height:"13rem",width:"13rem",backgroundColor:"#1a2538",position:"absolute",display:"block",borderRadius:"50%",bottom:"-5%",zIndex:-1},e.breakpoints.down("md"),{height:"8rem",width:"8rem"})},e.breakpoints.down("md"),{height:"8rem",width:"8rem"}),resultContainer:Object(O.a)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"35vh"},e.breakpoints.down("md"),{height:"15vh"}),resultContent:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},result:Object(O.a)({fontSize:"3rem",color:e.palette.common.white,textTransform:"uppercase",margin:".5rem 1rem"},e.breakpoints.down("md"),{fontSize:"3.5rem"}),btn:{backgroundColor:e.palette.common.white,textAlign:"center",color:e.palette.common.darkText,padding:".7rem",borderRadius:".5rem",minWidth:"80%"},pickTitle:{width:"10rem",margin:".5rem .5rem 3rem .5rem",color:e.palette.common.score,textTransform:"uppercase",fontSize:"1.2rem"},show:{display:"flex"},hide:{display:"none"},win:{color:"white"},lose:{color:e.palette.secondary.main},draw:{color:"grey"}})})),Z=function(){var e,t,n,o,r,c,i=X(),s=Object(P.a)(),b=Object(R.a)(s.breakpoints.down("md")),x=Object(h.f)(),g=Object(a.useContext)(m),f=g.pick,w=g.score,k=g.setScore,C=Object(a.useState)(""),N=Object(l.a)(C,2),S=N[0],T=N[1],B=Object(a.useState)(null),z=Object(l.a)(B,2),M=z[0],E=z[1],F=Object(a.useState)(!1),G=Object(l.a)(F,2),H=G[0],W=G[1];return Object(a.useEffect)((function(){if(""===f)return x.push("/")})),Object(a.useEffect)((function(){var e=["rock","paper","scissors"][Math.floor(3*Math.random())];T(e)}),[f]),Object(a.useEffect)((function(){E(function(e,t){return"rock"===e&&"scissors"===t||"scissors"===e&&"paper"===t||"paper"===e&&"rock"===t?"you win":"rock"===e&&"paper"===t||"scissors"===e&&"rock"===t||"paper"===e&&"scissors"===t?"you lose":"draw"}(f,S))}),[f,S]),Object(a.useEffect)((function(){var e=setTimeout((function(){"you win"===M?k(w+1):"you lose"===M&&k(w-1)}),1e3);return function(){return clearTimeout(e)}}),[M]),Object(a.useEffect)((function(){localStorage.setItem("score",w.toString())}),[w]),Object(a.useEffect)((function(){var e=setTimeout((function(){W(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),Object(d.jsxs)(p.a,{className:i.gameMain,children:[Object(d.jsx)(y,{}),Object(d.jsxs)(p.a,{className:i.gameContent,children:[Object(d.jsx)(V.a,{smDown:!0,children:Object(d.jsxs)(p.a,{className:i.titles,children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(u.a,{align:"center",className:i.pickTitle,children:"You Picked"})}),Object(d.jsx)(p.a,{children:Object(d.jsx)(u.a,{align:"center",className:i.pickTitle,children:"The House Picked"})})]})}),Object(d.jsxs)(p.a,{className:i.content,children:[Object(d.jsx)(p.a,{className:i.youBtn,id:"pickBtn",children:Object(d.jsx)(I,{disabled:!0,type:f,size:"big"})}),Object(d.jsx)(V.a,{smDown:!0,children:Object(d.jsx)(p.a,{className:i.resultContainer,children:Object(d.jsxs)(p.a,{className:Object(v.a)(i.resultContent,(e={},Object(O.a)(e,i.show,!0===H),Object(O.a)(e,i.hide,!1===H),e)),children:[Object(d.jsx)(u.a,{align:"center",className:Object(v.a)(i.result,(t={},Object(O.a)(t,i.win,"you win"===M),Object(O.a)(t,i.lose,"you lose"===M),Object(O.a)(t,i.draw,"draw"===M),t)),children:M}),Object(d.jsx)(D.a,{component:j.b,to:"/",variant:"contained",className:i.btn,id:"playBtn",children:"Play Again"})]})})}),Object(d.jsxs)(p.a,{className:i.houseBtn,children:[Object(d.jsx)(p.a,{className:Object(v.a)(i.hole,(n={},Object(O.a)(n,i.show,!1===H),Object(O.a)(n,i.hide,!0===H),n))}),Object(d.jsxs)(p.a,{id:"#housePick",className:Object(v.a)((o={},Object(O.a)(o,i.show,!0===H),Object(O.a)(o,i.hide,!1===H),o)),children:[Object(d.jsx)(I,{disabled:!0,type:S,size:"big"}),";"]})]})]}),b&&Object(d.jsxs)(p.a,{className:i.titles,children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(u.a,{align:"center",className:i.pickTitle,children:"You Picked"})}),Object(d.jsx)(p.a,{children:Object(d.jsx)(u.a,{align:"center",className:i.pickTitle,children:"The House Picked"})})]}),b&&Object(d.jsx)(p.a,{className:i.resultContainer,children:Object(d.jsxs)(p.a,{className:Object(v.a)(i.resultContent,(r={},Object(O.a)(r,i.show,!0===H),Object(O.a)(r,i.hide,!1===H),r)),children:[Object(d.jsx)(u.a,{align:"center",className:Object(v.a)(i.result,(c={},Object(O.a)(c,i.win,"you win"===M),Object(O.a)(c,i.lose,"you lose"===M),Object(O.a)(c,i.draw,"draw"===M),c)),children:M}),Object(d.jsx)(D.a,{component:j.b,to:"/",variant:"contained",className:i.btn,children:"Play Again"})]})})]}),Object(d.jsx)(K,{})]})},$=Object(x.a)((function(e){return Object(g.a)({main:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center",background:"radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",height:"100vh",padding:"2rem"},startBtn:{position:"absolute",bottom:"2rem",right:"10rem",padding:".3rem 2rem",color:e.palette.common.score,borderColor:e.palette.common.score,borderRadius:".5rem","&:hover":{color:e.palette.common.white,borderColor:e.palette.common.white}}})})),_=function(){var e=$();return Object(d.jsx)(b,{children:Object(d.jsx)(p.a,{className:e.main,children:Object(d.jsx)(j.a,{children:Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{exact:!0,path:"/",component:U}),Object(d.jsx)(h.a,{exact:!0,path:"/game",component:Z})]})})})})};var ee=function(){return Object(d.jsxs)(i.a,{theme:k,children:[Object(d.jsx)(s.a,{}),Object(d.jsx)(_,{})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(ee,{})}),document.getElementById("root")),te()}},[[86,1,2]]]);
//# sourceMappingURL=main.41b631bc.chunk.js.map