(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),i=a(8),c=a.n(i),l=a(2),s=a.n(l),u=a(4),d=a(1),g=(a(7),a(3)),h=a(6);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var m=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},v=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},b=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},k=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},y="_task-list-header-module__ganttTable__3_ygE",x="_task-list-header-module__ganttTable_Header__1nBOt",p="_task-list-header-module__ganttTable_HeaderSeparator__2eZzQ",w="_task-list-header-module__ganttTable_HeaderItem__WuQ0f",T=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,r=e.rowWidth;return o.a.createElement("div",{className:y,style:{fontFamily:a,fontSize:n}},o.a.createElement("div",{className:x,style:{height:t-2}},o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0Name"),o.a.createElement("div",{className:p,style:{height:.5*t,marginTop:.2*t}}),o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0From"),o.a.createElement("div",{className:p,style:{height:.5*t,marginTop:.25*t}}),o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0To")))},_="_task-list-table-module__taskListWrapper__3ZbQT",E="_task-list-table-module__taskListTableRow__34SS0",D="_task-list-table-module__taskListCell__3lLk3",C=function(e){var t=e.rowHeight,a=e.rowWidth,n=e.tasks,r=e.fontFamily,i=e.fontSize,c=e.locale,l={weekday:"short",year:"numeric",month:"long",day:"numeric"};return o.a.createElement("div",{className:_,style:{fontFamily:r,fontSize:i}},n.map((function(e){return o.a.createElement("div",{className:E,style:{height:t},key:"".concat(e.id,"row")},o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a},title:e.name},"\xa0",e.name),o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a}},"\xa0",e.start.toLocaleDateString(c,l)),o.a.createElement("div",{className:D,style:{minWidth:a,maxWidth:a}},"\xa0",e.end.toLocaleDateString(c,l)))})))},O="_tooltip-module__tooltipDefaultContainer__3T42e",S="_tooltip-module__tooltipDefaultContainerParagraph__29NTg",j="_tooltip-module__tooltipDetailsContainer__25P-K",M=function(e){var t=e.x,a=e.rowHeight,n=e.svgHeight,i=e.task,c=e.fontSize,l=e.fontFamily,s=e.TooltipContent,u=Object(r.useRef)(null),g=Object(r.useState)(1e3),h=Object(d.a)(g,2),m=h[0],f=h[1],v=Object(r.useState)((i.index-1)*a),b=Object(d.a)(v,2),k=b[0],y=b[1];return Object(r.useEffect)((function(){if(u.current){var e=u.current.offsetHeight,t=i.index*a+a;e>t?y(.5*e):t+e>n&&y(n-1.05*e),f(1.1*u.current.scrollWidth)}}),[u,i]),o.a.createElement("foreignObject",{x:t,y:k,width:m,height:1e3},o.a.createElement("div",{ref:u,className:j},o.a.createElement(s,{task:i,fontSize:c,fontFamily:l})))},F=function(e){var t=e.task,a=e.fontSize,n={fontSize:a,fontFamily:e.fontFamily};return o.a.createElement("div",{className:O,style:n},o.a.createElement("b",{style:{fontSize:a+6}},"".concat(t.name,": ").concat(t.start.getDate(),"-").concat(t.start.getMonth()+1,"-").concat(t.start.getFullYear()," - ").concat(t.end.getDate(),"-").concat(t.end.getMonth()+1,"-").concat(t.end.getFullYear())),o.a.createElement("p",{className:S},"Duration: ".concat(~~((t.end.getTime()-t.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:S},!!t.progress&&"Progress: ".concat(t.progress," %")))},N="_scroll-module__scroll__3f9LK",W=function(e){var t=e.scroll,a=e.ganttHeight,n=e.ganttFullHeight,i=e.headerHeight,c=e.onScroll,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){l.current&&(l.current.scrollTop=t)}),[t]),o.a.createElement("div",{style:{height:a,marginTop:i},className:N,onScroll:c,ref:l},o.a.createElement("div",{style:{height:n,width:1}}))},H=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,i=e.rowWidth,c=e.rowHeight,l=e.scrollY,s=e.tasks,u=e.selectedTaskId,d=e.setSelectedTask,g=e.locale,h=e.ganttHeight,m=e.horizontalContainerClass,f=e.TaskListHeader,v=e.TaskListTable,b=Object(r.useRef)(null);Object(r.useEffect)((function(){b.current&&(b.current.scrollTop=l)}),[l]);var k={headerHeight:t,fontFamily:a,fontSize:n,rowWidth:i},y={rowHeight:c,rowWidth:i,fontFamily:a,fontSize:n,tasks:s,locale:g,selectedTaskId:u,setSelectedTask:d};return o.a.createElement("div",null,o.a.createElement(f,Object.assign({},k)),o.a.createElement("div",{ref:b,className:m,style:h?{height:h}:{}},o.a.createElement(v,Object.assign({},y))))},L="_gantt-module__ganttVerticalContainer__CZjuD",z="_gantt-module__horizontalContainer__2B2zv",R="_gantt-module__wrapper__3eULf",Y="_grid-module__gridRow__2dZTy",P="_grid-module__gridRowLine__3rUKi",I="_grid-module__gridTick__RuwuK",B=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,i=e.gridWidth,c=e.columnWidth,l=e.todayColor,s=0,u=[],d=[o.a.createElement("line",{key:"RowLineFirst",x:"0",y1:0,x2:i,y2:0,className:P})],g=Object(h.a)(a);try{for(g.s();!(t=g.n()).done;){var f=t.value;u.push(o.a.createElement("rect",{key:"Row"+f.id,x:"0",y:s,width:i,height:r,className:Y})),d.push(o.a.createElement("line",{key:"RowLine"+f.id,x:"0",y1:s+r,x2:i,y2:s+r,className:P})),s+=r}}catch(w){g.e(w)}finally{g.f()}for(var v=new Date,b=0,k=[],y=o.a.createElement("rect",null),x=0;x<n.length;x++){var p=n[x];k.push(o.a.createElement("line",{key:p.getTime(),x1:b,y1:0,x2:b,y2:s,className:I})),(x+1!==n.length&&p.getTime()<v.getTime()&&n[x+1].getTime()>=v.getTime()||0!==x&&x+1===n.length&&p.getTime()<v.getTime()&&m(p,p.getTime()-n[x-1].getTime(),"millisecond").getTime()>=v.getTime())&&(y=o.a.createElement("rect",{x:b,y:0,width:c,height:s,fill:l})),b+=c}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},u),o.a.createElement("g",{className:"rowLines"},d),o.a.createElement("g",{className:"ticks"},k),o.a.createElement("g",{className:"today"},y))},Q=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(B,Object.assign({},e)))},V="_calendar-module__calendarBottomText__9w8d5",A="_calendar-module__calendarTopTick__1rLuZ",K="_calendar-module__calendarTopText__2q1Kt",U="_calendar-module__calendarHeader__35nLX",X=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,i=e.xText,c=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:A,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:c,x:i,className:K},t))},G=function(e){var t=e.dates,a=e.locale,r=e.viewMode,i=e.headerHeight,c=e.columnWidth,l=e.fontFamily,s=e.fontSize,u=[],g=[];switch(r){case n.Month:var h=function(){for(var e=[],n=[],r=6*c,l=.5*i,s=0;s<t.length;s++){var u=t[s],d=v(u,a);if(n.push(o.a.createElement("text",{key:d+u.getFullYear(),y:.8*i,x:c*s+.5*c,className:V},d)),0===s||u.getFullYear()!==t[s-1].getFullYear()){var g=u.getFullYear().toString();e.push(o.a.createElement(X,{key:g,value:g,x1Line:c*s,y1Line:0,y2Line:l,xText:r+c*s-u.getMonth()*c,yText:.9*l}))}}return[e,n]}(),m=Object(d.a)(h,2);u=m[0],g=m[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=1,l=.5*i,s=t.length-1;s>=0;s--){var u=t[s],d="";0!==s&&u.getMonth()===t[s-1].getMonth()||(d="".concat(v(u,a),", ").concat(u.getFullYear()));var g="W".concat(k(u));n.push(o.a.createElement("text",{key:u.getTime(),y:.8*i,x:c*s,className:V},g)),d&&(s!==t.length-1&&e.push(o.a.createElement(X,{key:d,value:d,x1Line:c*s+r*c,y1Line:0,y2Line:l,xText:c*s+c*r*.5,yText:.9*l})),r=0),r++}return[e,n]}(),b=Object(d.a)(f,2);u=b[0],g=b[1];break;case n.Day:var y=function(){for(var e=[],n=[],r=.5*i,l=0;l<t.length;l++){var s=t[l],u=s.getDate().toString();if(n.push(o.a.createElement("text",{key:s.getTime(),y:.8*i,x:c*l+.5*c,className:V},u)),l+1!==t.length&&s.getMonth()!==t[l+1].getMonth()){var d=v(s,a);e.push(o.a.createElement(X,{key:d+s.getFullYear(),value:d,x1Line:c*(l+1),y1Line:0,y2Line:r,xText:c*(l+1)-s.getDate()*c*.5,yText:.9*r}))}}return[e,n]}(),x=Object(d.a)(y,2);u=x[0],g=x[1];break;default:var p=function(){for(var e=[],s=[],u=r===n.HalfDay?2:4,d=.5*i,g=0;g<t.length;g++){var h=t[g],m=Intl.DateTimeFormat(a,{hour:"numeric"}).format(h);if(s.push(o.a.createElement("text",{key:h.getTime(),y:.8*i,x:c*g,className:V,fontFamily:l},m)),0===g||h.getDate()!==t[g-1].getDate()){var f="".concat(h.getDate()," ").concat(v(h,a));e.push(o.a.createElement(X,{key:f+h.getFullYear(),value:f,x1Line:c*g+u*c,y1Line:0,y2Line:d,xText:c*g+u*c*.5,yText:.9*d}))}}return[e,s]}(),w=Object(d.a)(p,2);u=w[0],g=w[1]}return o.a.createElement("g",{className:"calendar",fontSize:s,fontFamily:l},o.a.createElement("rect",{x:0,y:0,width:c*t.length,height:i,className:U}),g," ",u)},Z=function(e,t,a,n,r,o,i,c,l,s,u,d,h){var m=J(e.start,a,n,r),f=J(e.end,a,n,r),v=q(t,o,i),b=Object(g.a)({backgroundColor:d,backgroundSelectedColor:h,progressColor:s,progressSelectedColor:u},e.styles);return Object(g.a)(Object(g.a)({},e),{},{x1:m,x2:f,y:v,index:t,barCornerRadius:c,handleWidth:l,height:i,barChildren:[],styles:b})},J=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},q=function(e,t,a){return e*t+(t-a)/2},$=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},ee=function(e,t,a,n,r,o){var i=Object(g.a)({},a),c=!1;switch(t){case"progress":i.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),c=i.progress!==a.progress;break;case"start":var l=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);i.x1=l,(c=i.x1!==a.x1)&&(i.start=$(l,a.x1,a.start,n,r));break;case"end":var s=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);i.x2=s,(c=i.x2!==a.x2)&&(i.end=$(s,a.x2,a.end,n,r));break;case"move":var u=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]}(e-o,n,a),h=Object(d.a)(u,2),m=h[0],f=h[1];(c=m!==a.x1)&&(i.start=$(m,a.x1,a.start,n,r),i.end=$(f,a.x2,a.end,n,r),i.x1=m,i.x2=f)}return{isChanged:c,changedTask:i}},te="_bar-module__barWrapper__1gfz9",ae="_bar-module__barHandle__I78P8",ne="_bar-module__barLabel__1nTVz",re="_bar-module__barLabelOutside__h9J4Q",oe="_bar-module__barBackground__3xu5M",ie=function(e){var t=e.x,a=e.y,n=e.width,i=e.height,c=e.isSelected,l=e.progressWidth,s=e.barCornerRadius,u=e.text,g=e.hasChild,h=e.arrowIndent,m=e.styles,f=e.onMouseDown,v=Object(r.useRef)(null),b=Object(r.useState)(!0),k=Object(d.a)(b,2),y=k[0],x=k[1];Object(r.useEffect)((function(){v.current&&x(v.current.getBBox().width<n)}),[v,n]);return o.a.createElement("g",{onMouseDown:f},o.a.createElement("rect",{x:t,width:n,y:a,height:i,ry:s,rx:s,fill:c?m.backgroundSelectedColor:m.backgroundColor,className:oe}),o.a.createElement("rect",{x:t,width:l,y:a,height:i,ry:s,rx:s,fill:c?m.progressSelectedColor:m.progressColor}),o.a.createElement("text",{x:y?t+.5*n:t+n+h*+g+.2*h,y:a+.5*i,className:y?ne:re,ref:v},u))},ce=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.barCornerRadius,c=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:ae,ry:i,rx:i,onMouseDown:c})},le=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:ae,points:t,onMouseDown:a})},se=function(e){var t,a,n,r,i,c,l=e.task,s=e.arrowIndent,u=e.isProgressChangeable,d=e.isDateChangeable,g=e.onEventStart,h=e.isDelete,m=e.isSelected,f=(t=l.x1,a=l.x2,n=l.progress,(a-t)*n*.01),v=(r=f+l.x1,i=l.y,c=l.height,[r-5,i+c,r+5,i+c,r,i+c-8.66].join(","));return o.a.createElement("g",{className:te,tabIndex:0,onKeyDown:function(e){switch(e.key){case"Delete":h&&g("delete",l,e)}e.stopPropagation()},onMouseEnter:function(e){g("mouseenter",l,e)},onMouseLeave:function(e){g("mouseleave",l,e)},onDoubleClick:function(e){g("dblclick",l,e)},onFocus:function(){g("select",l)}},o.a.createElement(ie,{x:l.x1,y:l.y,width:l.x2-l.x1,height:l.height,progressWidth:f,barCornerRadius:l.barCornerRadius,text:l.name,hasChild:l.barChildren.length>0,arrowIndent:s,styles:l.styles,isSelected:m,onMouseDown:function(e){d&&g("move",l,e)}}),o.a.createElement("g",{className:"handleGroup"},d&&o.a.createElement("g",null,o.a.createElement(ce,{x:l.x1+1,y:l.y+1,width:l.handleWidth,height:l.height-2,barCornerRadius:l.barCornerRadius,onMouseDown:function(e){g("start",l,e)}}),o.a.createElement(ce,{x:l.x2-l.handleWidth-1,y:l.y+1,width:l.handleWidth,height:l.height-2,barCornerRadius:l.barCornerRadius,onMouseDown:function(e){g("end",l,e)}})),u&&o.a.createElement(le,{progressPoint:v,onMouseDown:function(e){g("progress",l,e)}})))},ue=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.arrowIndent,i=t.index>a.index?-1:1,c=a.y+a.height/2,l="M ".concat(t.x2," ").concat(t.y+t.height/2," \n  h ").concat(r," \n  v ").concat(i*n/2," \n  H ").concat(a.x1-r," \n  V ").concat(c," \n  h ").concat(r),s="".concat(a.x1,",").concat(c," \n  ").concat(a.x1-5,",").concat(c-5," \n  ").concat(a.x1-5,",").concat(c+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:l,fill:"none"}),o.a.createElement("polygon",{points:s}))};function de(e){return void 0!==e.key}var ge=function(e){var t,a=e.tasks,n=e.dates,i=e.selectedTask,c=e.rowHeight,l=e.barCornerRadius,h=e.columnWidth,m=e.barFill,f=e.barProgressColor,v=e.barProgressSelectedColor,b=e.barBackgroundColor,k=e.barBackgroundSelectedColor,y=e.handleWidth,x=e.timeStep,p=e.svg,w=e.svgHeight,T=e.arrowColor,_=e.arrowIndent,E=e.fontFamily,D=e.fontSize,C=e.setSelectedTask,O=e.onTasksChange,S=e.onDateChange,j=e.onProgressChange,F=e.onDoubleClick,N=e.onTaskDelete,W=e.TooltipContent,H=null===p||void 0===p||null===(t=p.current)||void 0===t?void 0:t.createSVGPoint(),L=Object(r.useState)({action:""}),z=Object(d.a)(L,2),R=z[0],Y=z[1],P=Object(r.useState)([]),I=Object(d.a)(P,2),B=I[0],Q=I[1],V=Object(r.useState)(null),A=Object(d.a)(V,2),K=A[0],U=A[1],X=Object(r.useState)(0),G=Object(d.a)(X,2),J=G[0],q=G[1],$=Object(r.useState)(0),te=Object(d.a)($,2),ae=te[0],ne=te[1],re=Object(r.useState)(!1),oe=Object(d.a)(re,2),ie=oe[0],ce=oe[1];Object(r.useEffect)((function(){var e=n[1].getTime()-n[0].getTime()-60*n[1].getTimezoneOffset()*1e3+60*n[0].getTimezoneOffset()*1e3;q(x*h/e)}),[h,n,x]),Object(r.useEffect)((function(){Q(function(e,t,a,n,r,o,i,c,l,s,u){var d=t[1].getTime()-t[0].getTime()-60*t[1].getTimezoneOffset()*1e3+60*t[0].getTimezoneOffset()*1e3,g=n*r/100,h=e.map((function(e,r){return Z(e,r,t,d,a,n,g,o,i,c,l,s,u)}));return h=h.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=h.findIndex((function(t){return t.id===a[e]}));-1!==n&&h[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(a,n,h,c,m,l,y,f,v,b,k))}),[a,c,l,h,n,m,y,f,v,b,k]),Object(r.useEffect)((function(){if(K){var e=B.map((function(e){return e.id===K.id?K:e}));O(e),U(null)}}),[K,B]),Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R.changedTask&&H&&(null===p||void 0===p?void 0:p.current)){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),H.x=t.clientX,n=H.matrixTransform(null===p||void 0===p||null===(a=p.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=ee(n.x,R.action,R.changedTask,J,x,ae),o=r.isChanged,i=r.changedTask,o&&(Q(B.map((function(e){return e.id===i.id?i:e}))),Y(Object(g.a)(Object(g.a)({},R),{},{changedTask:i})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(u.a)(s.a.mark((function a(n){var r,o,i,c,l,u,d,g,h,m,f,v;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=R.changedTask,i=R.action,c=R.originalTask,o&&H&&(null===p||void 0===p?void 0:p.current)&&c){a.next=3;break}return a.abrupt("return");case 3:if(n.preventDefault(),H.x=n.clientX,l=H.matrixTransform(null===p||void 0===p||null===(r=p.current.getScreenCTM())||void 0===r?void 0:r.inverse()),u=ee(l.x,i,o,J,x,ae),d=u.changedTask,g=c.start!==d.start||c.end!==d.end||c.progress!==d.progress,p.current.removeEventListener("mousemove",e),p.current.removeEventListener("mouseup",t),Y({action:""}),ce(!1),h=B.map((function(e){return e.id===d.id?d:e})),O(h),m=!0,"move"!==i&&"end"!==i&&"start"!==i||!S||!g){a.next=28;break}return a.prev=16,a.next=19,S(d);case 19:void 0!==(f=a.sent)&&(m=f),a.next=26;break;case 23:a.prev=23,a.t0=a.catch(16),m=!1;case 26:a.next=39;break;case 28:if(!j||!g){a.next=39;break}return a.prev=29,a.next=32,j(d);case 32:void 0!==(v=a.sent)&&(m=v),a.next=39;break;case 36:a.prev=36,a.t1=a.catch(29),m=!1;case 39:m||U(c);case 40:case"end":return a.stop()}}),a,null,[[16,23],[29,36]])})));return function(e){return a.apply(this,arguments)}}();ie||"move"!==R.action&&"end"!==R.action&&"start"!==R.action&&"progress"!==R.action||!(null===p||void 0===p?void 0:p.current)||(p.current.addEventListener("mousemove",e),p.current.addEventListener("mouseup",t),ce(!0))}),[B,R,J,ae,j,x,S,p,ie]);var le=function(){var e=Object(u.a)(s.a.mark((function e(t,a,n){var r,o,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}"select"===t&&C(a.id),e.next=41;break;case 4:if(!de(n)){e.next=19;break}if("delete"!==t){e.next=17;break}if(!N){e.next=17;break}return e.prev=7,e.next=10,N(a);case 10:void 0!==(r=e.sent)&&r&&(o=B.filter((function(e){return e.id!==a.id})),O(o),C("")),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error("Error on Delete. "+e.t0);case 17:e.next=41;break;case 19:if("mouseenter"!==t){e.next=23;break}R.action||Y({action:t,changedTask:a,originalTask:a}),e.next=41;break;case 23:if("mouseleave"!==t){e.next=27;break}"mouseenter"===R.action&&Y({action:""}),e.next=41;break;case 27:if("dblclick"!==t){e.next=31;break}F&&F(a),e.next=41;break;case 31:if("move"!==t){e.next=40;break}if((null===p||void 0===p?void 0:p.current)&&H){e.next=34;break}return e.abrupt("return");case 34:H.x=n.clientX,c=H.matrixTransform(null===(i=p.current.getScreenCTM())||void 0===i?void 0:i.inverse()),ne(c.x-a.x1),Y({action:t,changedTask:a,originalTask:a}),e.next=41;break;case 40:Y({action:t,changedTask:a,originalTask:a});case 41:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,a,n){return e.apply(this,arguments)}}();return o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:T,stroke:T},B.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(ue,{key:"Arrow from ".concat(e.id," to ").concat(B[t].id),taskFrom:e,taskTo:B[t],rowHeight:c,arrowIndent:_})}))}))),o.a.createElement("g",{className:"bar",fontFamily:E,fontSize:D},B.map((function(e){return o.a.createElement(se,{task:e,arrowIndent:_,isProgressChangeable:!!j&&!e.isDisabled,isDateChangeable:!!S&&!e.isDisabled,isDelete:!e.isDisabled,onEventStart:le,key:e.id,isSelected:e.id===i})}))),o.a.createElement("g",{className:"toolTip"},R.changedTask&&o.a.createElement(M,{x:R.changedTask.x2+_+.5*_,rowHeight:c,svgHeight:w,task:R.changedTask,fontFamily:E,fontSize:D,TooltipContent:W})))},he=function(e){var t=e.gridProps,a=e.calendarProps,n=e.barProps,i=e.ganttHeight,c=e.scrollY,l=e.scrollX,s=e.onScroll,u=Object(r.useRef)(null),d=Object(r.useRef)(null),h=Object(r.useRef)(null),m=Object(g.a)(Object(g.a)({},n),{},{svg:u});return Object(r.useEffect)((function(){d.current&&(d.current.scrollTop=c)}),[c]),Object(r.useEffect)((function(){h.current&&(h.current.scrollLeft=l)}),[l]),o.a.createElement("div",{className:L,ref:h,onScroll:s},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.gridWidth,height:a.headerHeight,fontFamily:n.fontFamily},o.a.createElement(G,Object.assign({},a))),o.a.createElement("div",{ref:d,className:z,style:i?{height:i,width:t.gridWidth}:{width:t.gridWidth}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.gridWidth,height:n.rowHeight*n.tasks.length,fontFamily:n.fontFamily,ref:u},o.a.createElement(Q,Object.assign({},t)),o.a.createElement(ge,Object.assign({},m)))))},me=function(e){var t=e.tasks,a=e.headerHeight,i=void 0===a?50:a,c=e.columnWidth,l=void 0===c?60:c,s=e.listCellWidth,u=void 0===s?"155px":s,g=e.rowHeight,v=void 0===g?50:g,k=e.ganttHeight,y=void 0===k?0:k,x=e.viewMode,p=void 0===x?n.Day:x,w=e.locale,_=void 0===w?"en-GB":w,E=e.barFill,D=void 0===E?60:E,O=e.barCornerRadius,S=void 0===O?3:O,j=e.barProgressColor,M=void 0===j?"#a3a3ff":j,N=e.barProgressSelectedColor,L=void 0===N?"#8282f5":N,Y=e.barBackgroundColor,P=void 0===Y?"#b8c2cc":Y,I=e.barBackgroundSelectedColor,B=void 0===I?"#aeb8c2":I,Q=e.handleWidth,V=void 0===Q?8:Q,A=e.timeStep,K=void 0===A?3e5:A,U=e.arrowColor,X=void 0===U?"grey":U,G=e.fontFamily,Z=void 0===G?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":G,J=e.fontSize,q=void 0===J?"14px":J,$=e.arrowIndent,ee=void 0===$?20:$,te=e.todayColor,ae=void 0===te?"rgba(252, 248, 227, 0.5)":te,ne=e.TooltipContent,re=void 0===ne?F:ne,oe=e.TaskListHeader,ie=void 0===oe?T:oe,ce=e.TaskListTable,le=void 0===ce?C:ce,se=e.onDateChange,ue=e.onProgressChange,de=e.onDoubleClick,ge=e.onTaskDelete,me=e.onSelect,fe=Object(r.useRef)(null),ve=Object(r.useState)(t),be=Object(d.a)(ve,2),ke=be[0],ye=be[1],xe=Object(r.useState)(""),pe=Object(d.a)(xe,2),we=pe[0],Te=pe[1],_e=Object(r.useState)(0),Ee=Object(d.a)(_e,2),De=Ee[0],Ce=Ee[1],Oe=Object(r.useState)(0),Se=Object(d.a)(Oe,2),je=Se[0],Me=Se[1],Fe=Object(r.useState)(!1),Ne=Object(d.a)(Fe,2),We=Ne[0],He=Ne[1],Le=function(e,t){var a,r=e[0].start,o=e[0].end,i=Object(h.a)(e);try{for(i.s();!(a=i.n()).done;){var c=a.value;c.start<r&&(r=c.start),c.end>o&&(o=c.end)}}catch(l){i.e(l)}finally{i.f()}switch(t){case n.Month:r=m(r,-1,"month"),r=f(r,"month"),o=m(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=m(b(r),-7,"day"),o=m(o,1.5,"month");break;default:r=f(r,"day"),o=f(o,"day"),r=m(r,-1,"day"),o=m(o,19,"day")}return[r,o]}(ke,p),ze=Object(d.a)(Le,2),Re=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=m(r,1,"month");break;case n.Week:r=m(r,7,"day");break;case n.Day:r=m(r,1,"day");break;case n.HalfDay:r=m(r,12,"hour");break;case n.QuarterDay:r=m(r,6,"hour")}o.push(r)}return o}(ze[0],ze[1],p),Ye=v*t.length,Pe=Re.length*l,Ie=ke.length*v;Object(r.useEffect)((function(){ye(t)}),[t]),Object(r.useEffect)((function(){var e=function(e){e.preventDefault();var t=De+e.deltaY;Ce(t<0?0:t>Ie-y?Ie-y:t),He(!0)};return fe.current&&y&&y<ke.length*v&&fe.current.addEventListener("wheel",e,{passive:!1}),function(){fe.current&&fe.current.removeEventListener("wheel",e)}}),[fe.current,De,y,ke,v]);var Be={columnWidth:l,gridWidth:Pe,tasks:ke,rowHeight:v,dates:Re,todayColor:ae},Qe={dates:Re,locale:_,viewMode:p,headerHeight:i,columnWidth:l,fontFamily:Z,fontSize:q},Ve={tasks:ke,selectedTask:we,setSelectedTask:function(e){var t=ke.find((function(t){return t.id===e}));if(t){if(me){var a=ke.find((function(e){return e.id===we}));a&&me(a,!1),me(t,!0)}Te(t.id)}else{if(me){var n=ke.find((function(e){return e.id===we}));n&&me(n,!1)}Te("")}},rowHeight:v,barCornerRadius:S,columnWidth:l,dates:Re,barFill:D,barProgressColor:M,barProgressSelectedColor:L,barBackgroundColor:P,barBackgroundSelectedColor:B,handleWidth:V,arrowColor:X,timeStep:K,fontFamily:Z,fontSize:q,arrowIndent:ee,svgHeight:Ye,onTasksChange:function(e){ye(e)},onDateChange:se,onProgressChange:ue,onDoubleClick:de,onTaskDelete:ge,TooltipContent:re},Ae={rowHeight:v,rowWidth:u,fontFamily:Z,fontSize:q,tasks:ke,locale:_,headerHeight:i,scrollY:De,ganttHeight:y,horizontalContainerClass:z,selectedTaskId:we,setSelectedTask:Te,TaskListHeader:ie,TaskListTable:le};return o.a.createElement("div",{className:R,onKeyDown:function(e){e.preventDefault();var t=De,a=je,n=!0;switch(e.key){case"Down":case"ArrowDown":t+=v,n=!1;break;case"Up":case"ArrowUp":t-=v,n=!1;break;case"Left":case"ArrowLeft":a-=l;break;case"Right":case"ArrowRight":a+=l}n?Me(a<0?0:a>Pe?Pe:a):Ce(t<0?0:t>Ie-y?Ie-y:t),He(!0)},tabIndex:0,ref:fe},u&&o.a.createElement(H,Object.assign({},Ae)),o.a.createElement(he,{gridProps:Be,calendarProps:Qe,barProps:Ve,ganttHeight:y,scrollY:De,scrollX:je,onScroll:function(e){je===e.currentTarget.scrollLeft||We||Me(e.currentTarget.scrollLeft),He(!1)}}),o.a.createElement(W,{ganttFullHeight:Ie,ganttHeight:y,headerHeight:i,scroll:De,onScroll:function(e){De===e.currentTarget.scrollTop||We||Ce(e.currentTarget.scrollTop),He(!1)}}))},fe=function(e){var t=e.onViewModeChange,a=e.onViewListChange,r=e.isChecked;return o.a.createElement("div",{className:"ViewContainer"},o.a.createElement("button",{className:"Button",onClick:function(){return t(n.QuarterDay)}},"Quarter of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.HalfDay)}},"Half of Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Day)}},"Day"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Week)}},"Week"),o.a.createElement("button",{className:"Button",onClick:function(){return t(n.Month)}},"Month"),o.a.createElement("div",{className:"Switch"},o.a.createElement("label",{className:"Switch_Toggle"},o.a.createElement("input",{type:"checkbox",defaultChecked:r,onClick:function(){return a(!r)}}),o.a.createElement("span",{className:"Slider"})),"Show Task List"))},ve=function(){var e=new Date,t=o.a.useState(n.Day),a=Object(d.a)(t,2),r=a[0],i=a[1],c=o.a.useState(!0),l=Object(d.a)(c,2),g=l[0],h=l[1],m=60;r===n.Month?m=300:r===n.Week&&(m=250);var f=[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"]},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",progress:70,dependencies:["Task 2"]},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),16),name:"Release & Eat Pizza",id:"Task 6",progress:e.getMonth(),dependencies:["Task 4"],styles:{progressColor:"#ffbb54",progressSelectedColor:"#ff9e0d"}},{start:new Date(e.getFullYear(),e.getMonth(),24),end:new Date(e.getFullYear(),e.getMonth(),25),name:"Closing",id:"Task 9",progress:0,isDisabled:!0}],v=function(e){return new Promise((function(t){return setTimeout(t,e)}))},b=function(e){console.log("On date change Id:"+e.id)},k=function(e){return window.confirm("Are you sure about "+e.name+" ?")},y=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(5e3);case 2:console.log("On progress change Id:"+t.id);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){alert("On Double Click event Id:"+e.id)},p=function(e,t){console.log(e.name+" has "+(t?"selected":"unselected"))};return o.a.createElement("div",null,o.a.createElement(fe,{onViewModeChange:function(e){return i(e)},onViewListChange:h,isChecked:g}),o.a.createElement("h3",null,"Gantt With Unlimited Height"),o.a.createElement(me,{tasks:f,viewMode:r,onDateChange:b,onTaskDelete:k,onProgressChange:y,onDoubleClick:x,onSelect:p,listCellWidth:g?"155px":"",columnWidth:m}),o.a.createElement("h3",null,"Gantt With Limited Height"),o.a.createElement(me,{tasks:f,viewMode:r,onDateChange:b,onTaskDelete:k,onProgressChange:y,onDoubleClick:x,onSelect:p,listCellWidth:g?"155px":"",ganttHeight:300,columnWidth:m}))};c.a.render(o.a.createElement(ve,null),document.getElementById("root"))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.72e5e93c.chunk.js.map