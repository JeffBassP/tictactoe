(this.webpackJsonptictactoereact=this.webpackJsonptictactoereact||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),u=(a(12),a(1)),i=(a(13),a(14),a(4));a(15);var s=function(e){var t=e.value,a=e.onClick,n=t?"squares ".concat(t):"squares";return c.a.createElement("button",{className:n,onClick:a},t)},o=(a(16),function(e){var t=e.squares,a=e.onClick;return c.a.createElement("div",{className:"board"},t.map((function(e,t){return c.a.createElement(s,{key:t,value:e,onClick:function(){return a(t)}})})))}),m=(a(17),function(e){var t=e.player1,a=e.player2,l=Object(n.useState)([Array(9).fill(null)]),r=Object(u.a)(l,2),s=r[0],m=r[1],v=Object(n.useState)(0),E=Object(u.a)(v,2),d=E[0],b=E[1],f=Object(n.useState)(!0),p=Object(u.a)(f,2),O=p[0],j=p[1],N=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(u.a)(t[a],3),c=n[0],l=n[1],r=n[2];if(e[c]&&e[c]===e[l]&&e[c]===e[r])return e[c]}return null}(s[d]),g=O?"X":"O",y=O?t:a;return c.a.createElement("div",null,c.a.createElement("div",{className:"game"},c.a.createElement(o,{squares:s[d],onClick:function(e){var t=s.slice(0,d+1),a=t[d],n=Object(i.a)(a);N||n[e]||(n[e]=g,m([].concat(Object(i.a)(t),[n])),b(t.length),j(!O))}}),c.a.createElement("div",{className:"info-wrapper"},c.a.createElement("h3",null,N?"Winner: ".concat(y=O?a:t," - ").concat(N):"'Next Player: ".concat(y," - ").concat(g)))),c.a.createElement("div",{className:"buttons-game"},c.a.createElement("div",{className:"btn-game"},"Restart"),c.a.createElement("div",{className:"btn-game",onClick:function(){window.location.reload(!1)}},"Exit")))}),v=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),s=i[0],o=i[1],v=Object(n.useState)(""),E=Object(u.a)(v,2),d=E[0],b=E[1];return!0===a?c.a.createElement(m,{player1:s,player2:d}):c.a.createElement("div",{className:"create-users"},c.a.createElement("h1",{className:"title-players"},"Please enter the Players name:"),c.a.createElement("input",{type:"text",placeholder:"Player 1",value:s,onChange:function(e){return o(e.target.value)}}),c.a.createElement("input",{type:"text",placeholder:"Player 2",value:d,onChange:function(e){return b(e.target.value)}}),c.a.createElement("div",{className:"buttons-start"},c.a.createElement("div",{className:"start-game",onClick:function(){l(!0)}},"Start"),c.a.createElement("div",{className:"start-game"},"Back")))};var E=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"title"},c.a.createElement("p",null,"\uff34\uff49\uff43\u3000\uff34\uff41\uff43\u3000\uff34\uff4f\uff45\u3000\u30cc\u30d5\u3076")),c.a.createElement("div",null,a?c.a.createElement("div",null):c.a.createElement("div",{className:"button-start",onClick:function(){l(!0)}},"Start a new game"),a?c.a.createElement("div",null):c.a.createElement("div",{className:"button-start"},"Exit")),c.a.createElement("div",null,a?c.a.createElement(v,null):c.a.createElement("div",null)))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d16f3328.chunk.js.map