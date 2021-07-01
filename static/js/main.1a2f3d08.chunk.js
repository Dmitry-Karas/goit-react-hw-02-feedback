(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c,a,r,i,o,s,l,j,d,b,u=n(2),x=n.n(u),f=n(7),g=n.n(f),O=n(8),h=n(9),p=n(10),m=n(14),v=n(13),k=n(5),y=n(3),w=n(4),F=w.a.ul(c||(c=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),z=w.a.li(a||(a=Object(y.a)(["\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n"]))),P=w.a.p(r||(r=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: 500;\n  color: ",";\n\n  & svg {\n    margin-right: 5px;\n  }\n"])),(function(e){return(e.good?"limegreen":e.neutral&&"darkgrey")||e.bad&&"tomato"||"cornflowerblue"})),B=n(1),T=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage,i=void 0===r?0:r;return Object(B.jsxs)(F,{children:[Object(B.jsx)(z,{children:Object(B.jsxs)(P,{good:!0,children:[Object(B.jsx)(k.e,{})," Good: ",t]})}),Object(B.jsx)(z,{children:Object(B.jsxs)(P,{neutral:!0,children:[Object(B.jsx)(k.f,{})," Neutral: ",n]})}),Object(B.jsx)(z,{children:Object(B.jsxs)(P,{bad:!0,children:[Object(B.jsx)(k.a,{})," Bad: ",c]})}),Object(B.jsx)(z,{children:Object(B.jsxs)(P,{total:!0,children:[Object(B.jsx)(k.c,{})," Total: ",a]})}),Object(B.jsx)(z,{children:Object(B.jsxs)(P,{percentage:!0,children:[Object(B.jsx)(k.d,{}),"Positive: ",i," %"]})})]})},C=w.a.section(i||(i=Object(y.a)(["\n  padding: 40px 0;\n"]))),S=w.a.h2(o||(o=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n\n  text-transform: uppercase;\n  font-size: 32px;\n  text-align: center;\n\n  & svg {\n    margin-left: 20px;\n  }\n"]))),N=function(e){var t=e.title,n=e.children;return Object(B.jsxs)(C,{children:[t&&Object(B.jsxs)(S,{children:[t,"Please leave feedback"===t&&Object(B.jsx)(k.b,{}),"Statistics"===t&&Object(B.jsx)(k.g,{})]}),n]})},J=w.a.div(s||(s=Object(y.a)(["\n  width: 1024px;\n  margin: 0 auto;\n  padding: 0 30px;\n"]))),L=function(e){var t=e.children;return Object(B.jsx)(J,{children:t})},M=w.a.button(l||(l=Object(y.a)(["\n  width: 150px;\n  padding: 5px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  cursor: pointer;\n  outline: none;\n\n  text-transform: capitalize;\n  font-size: 18px;\n  font-weight: 500;\n\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.2);\n  }\n"]))),A=function(e){var t=e.feedback,n=e.onClick;return Object(B.jsxs)(M,{type:"button","data-feedback":t,onClick:n,children:["good"===t&&Object(B.jsx)(k.e,{size:"100",color:"limegreen",style:{marginBottom:10}}),"neutral"===t&&Object(B.jsx)(k.f,{size:"100",color:"darkgrey",style:{marginBottom:10}}),"bad"===t&&Object(B.jsx)(k.a,{size:"100",color:"tomato",style:{marginBottom:10}}),t]})},E=w.a.ul(j||(j=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n"]))),G=w.a.li(d||(d=Object(y.a)(["\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n"]))),I=function(e){var t=e.options,n=e.onLeaveFeedback;return t=Object.keys(t),Object(B.jsx)(E,{children:t.map((function(e){return Object(B.jsx)(G,{children:Object(B.jsx)(A,{feedback:e,onClick:n})},e)}))})},q=w.a.p(b||(b=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  color: cornflowerblue;\n\n  & svg {\n    margin-left: 10px;\n  }\n"]))),D=n(12),H=function(){return Object(B.jsxs)(q,{children:["No feedback given ",Object(B.jsx)(D.a,{size:"26"})]})},K=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedbackOptions=function(t){var n=t.currentTarget.dataset.feedback;e.setState((function(e){return Object(O.a)({},n,e[n]+1)}))},e}return Object(p.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}))}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback(),t=this.state.good;return Math.round(100*t/e)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(N,{title:"Please leave feedback",children:Object(B.jsx)(L,{children:Object(B.jsx)(I,{options:this.state,onLeaveFeedback:this.handleFeedbackOptions})})}),Object(B.jsx)(N,{title:"Statistics",children:Object(B.jsx)(L,{children:a>0?Object(B.jsx)(T,{good:t,neutral:n,bad:c,total:a,positivePercentage:r}):Object(B.jsx)(H,{message:"No feedback given"})})})]})}}]),n}(u.Component);n(24);g.a.render(Object(B.jsx)(x.a.StrictMode,{children:Object(B.jsx)(K,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.1a2f3d08.chunk.js.map