(this["webpackJsonpgantt-task-react-example"]=this["webpackJsonpgantt-task-react-example"]||[]).push([[0],{10:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);a(10);var n,r=a(0),o=a.n(r),s=a(9),i=a.n(s),c=a(4),l=a.n(c),u=a(5),d=a(3),g=a(1),h=a(7);!function(e){e.QuarterDay="Quarter Day",e.HalfDay="Half Day",e.Day="Day",e.Week="Week",e.Month="Month"}(n||(n={}));var m=function(e,t,a){return new Date(e.getFullYear()+("year"===a?t:0),e.getMonth()+("month"===a?t:0),e.getDate()+("day"===a?t:0),e.getHours()+("hour"===a?t:0),e.getMinutes()+("minute"===a?t:0),e.getSeconds()+("second"===a?t:0),e.getMilliseconds()+("millisecond"===a?t:0))},f=function(e,t){var a=["millisecond","second","minute","hour","day","month","year"],n=function(e){var n=a.indexOf(t);return a.indexOf(e)<=n};return new Date(e.getFullYear(),n("year")?0:e.getMonth(),n("month")?1:e.getDate(),n("day")?0:e.getHours(),n("hour")?0:e.getMinutes(),n("minute")?0:e.getSeconds(),n("second")?0:e.getMilliseconds())},b=function(e,t){var a,r=e[0].start,o=e[0].start,s=Object(h.a)(e);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.start<r&&(r=i.start),i.end>o&&(o=i.end)}}catch(c){s.e(c)}finally{s.f()}switch(t){case n.Month:r=m(r,-1,"month"),r=f(r,"month"),o=m(o,1,"year"),o=f(o,"year");break;case n.Week:r=f(r,"day"),o=f(o,"day"),r=m(p(r),-7,"day"),o=m(o,1.5,"month");break;case n.Day:r=f(r,"day"),o=f(o,"day"),r=m(r,-1,"day"),o=m(o,19,"day");break;default:r=f(r,"day"),o=f(o,"day"),r=m(r,-1,"day"),o=m(o,5,"day")}return[r,o]},v=function(e,t,a){for(var r=new Date(e),o=[r];r<t;){switch(a){case n.Month:r=m(r,1,"month");break;case n.Week:r=m(r,7,"day");break;case n.Day:r=m(r,1,"day");break;case n.HalfDay:r=m(r,12,"hour");break;case n.QuarterDay:r=m(r,6,"hour")}o.push(r)}return o},y=function(e,t){var a=new Intl.DateTimeFormat(t,{month:"long"}).format(e);return a=a.replace(a[0],a[0].toLocaleUpperCase())},p=function(e){var t=e.getDay(),a=e.getDate()-t+(0===t?-6:1);return new Date(e.setDate(a))},k=function(e){var t=new Date(e.valueOf()),a=(t.getDay()+6)%7;t.setDate(t.getDate()-a+3);var n=t.valueOf();t.setMonth(0,1),4!==t.getDay()&&t.setMonth(0,1+(4-t.getDay()+7)%7);var r=(1+Math.ceil((n-t.valueOf())/6048e5)).toString();return 1===r.length?"0".concat(r):r},x="_task-list-header-module__ganttTable__3_ygE",j="_task-list-header-module__ganttTable_Header__1nBOt",_="_task-list-header-module__ganttTable_HeaderSeparator__2eZzQ",w="_task-list-header-module__ganttTable_HeaderItem__WuQ0f",T=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,r=e.rowWidth;return o.a.createElement("div",{className:x,style:{fontFamily:a,fontSize:n}},o.a.createElement("div",{className:j,style:{height:t-2}},o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0Name"),o.a.createElement("div",{className:_,style:{height:.5*t,marginTop:.2*t}}),o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0From"),o.a.createElement("div",{className:_,style:{height:.5*t,marginTop:.25*t}}),o.a.createElement("div",{className:w,style:{minWidth:r}},"\xa0To")))},O="_task-list-table-module__taskListWrapper__3ZbQT",E="_task-list-table-module__taskListTableRow__34SS0",C="_task-list-table-module__taskListCell__3lLk3",D=function(e){var t=e.rowHeight,a=e.rowWidth,n=e.tasks,r=e.fontFamily,s=e.fontSize,i=e.locale,c={weekday:"short",year:"numeric",month:"long",day:"numeric"};return o.a.createElement("div",{className:O,style:{fontFamily:r,fontSize:s}},n.map((function(e){return o.a.createElement("div",{className:E,style:{height:t},key:"".concat(e.id,"row")},o.a.createElement("div",{className:C,style:{minWidth:a,maxWidth:a},title:e.name},"\xa0",e.name),o.a.createElement("div",{className:C,style:{minWidth:a,maxWidth:a}},"\xa0",e.start.toLocaleDateString(i,c)),o.a.createElement("div",{className:C,style:{minWidth:a,maxWidth:a}},"\xa0",e.end.toLocaleDateString(i,c)))})))},S="_tooltip-module__tooltipDefaultContainer__3T42e",M="_tooltip-module__tooltipDefaultContainerParagraph__29NTg",W="_tooltip-module__tooltipDetailsContainer__25P-K",N="_tooltip-module__tooltipDetailsContainerHidden__3gVAq",F=function(e){var t=e.task,a=e.rowHeight,n=e.svgContainerHeight,s=e.svgContainerWidth,i=e.scrollX,c=e.scrollY,l=e.arrowIndent,u=e.fontSize,d=e.fontFamily,h=e.headerHeight,m=e.taskListWidth,f=e.TooltipContent,b=Object(r.useRef)(null),v=Object(r.useState)(0),y=Object(g.a)(v,2),p=y[0],k=y[1],x=Object(r.useState)(0),j=Object(g.a)(x,2),_=j[0],w=j[1];return Object(r.useEffect)((function(){if(b.current){var e=t.x2+l+.5*l+m-i,r=t.index*a-c+h,o=1.1*b.current.offsetHeight,u=1.1*b.current.offsetWidth,d=o+r-c;u+e>m+s&&(e=t.x1+m-l-.5*l-i-u),e<m?(e=s+m-u,r+=a):d>n-c&&(r=n-o),k(r),w(e)}}),[b.current,t,l,i,c,h,m,a,n,s]),o.a.createElement("div",{ref:b,className:_?W:N,style:{left:_,top:p}},o.a.createElement(f,{task:t,fontSize:u,fontFamily:d}))},H=function(e){var t=e.task,a=e.fontSize,n={fontSize:a,fontFamily:e.fontFamily};return o.a.createElement("div",{className:S,style:n},o.a.createElement("b",{style:{fontSize:a+6}},"".concat(t.name,": ").concat(t.start.getDate(),"-").concat(t.start.getMonth()+1,"-").concat(t.start.getFullYear()," - ").concat(t.end.getDate(),"-").concat(t.end.getMonth()+1,"-").concat(t.end.getFullYear())),t.end.getTime()-t.start.getTime()!==0&&o.a.createElement("p",{className:M},"Duration: ".concat(~~((t.end.getTime()-t.start.getTime())/864e5)," day(s)")),o.a.createElement("p",{className:M},!!t.progress&&"Progress: ".concat(t.progress," %")))},L="_vertical-scroll-module__scroll__1eT-t",R=function(e){var t=e.scroll,a=e.ganttHeight,n=e.ganttFullHeight,s=e.headerHeight,i=e.onScroll,c=Object(r.useRef)(null);return Object(r.useEffect)((function(){c.current&&(c.current.scrollTop=t)}),[t]),o.a.createElement("div",{style:{height:a,marginTop:s},className:L,onScroll:i,ref:c},o.a.createElement("div",{style:{height:n,width:1}}))},z=function(e){var t=e.headerHeight,a=e.fontFamily,n=e.fontSize,s=e.rowWidth,i=e.rowHeight,c=e.scrollY,l=e.tasks,u=e.selectedTask,d=e.setSelectedTask,g=e.locale,h=e.ganttHeight,m=e.taskListRef,f=e.horizontalContainerClass,b=e.TaskListHeader,v=e.TaskListTable,y=Object(r.useRef)(null);Object(r.useEffect)((function(){y.current&&(y.current.scrollTop=c)}),[c]);var p={headerHeight:t,fontFamily:a,fontSize:n,rowWidth:s},k={rowHeight:i,rowWidth:s,fontFamily:a,fontSize:n,tasks:l,locale:g,selectedTaskId:u?u.id:"",setSelectedTask:d};return o.a.createElement("div",{ref:m},o.a.createElement(b,Object.assign({},p)),o.a.createElement("div",{ref:y,className:f,style:h?{height:h}:{}},o.a.createElement(v,Object.assign({},k))))},P="_grid-module__gridRow__2dZTy",Y="_grid-module__gridRowLine__3rUKi",I="_grid-module__gridTick__RuwuK",B=function(e){var t,a=e.tasks,n=e.dates,r=e.rowHeight,s=e.svgWidth,i=e.columnWidth,c=e.todayColor,l=0,u=[],d=[o.a.createElement("line",{key:"RowLineFirst",x:"0",y1:0,x2:s,y2:0,className:Y})],g=Object(h.a)(a);try{for(g.s();!(t=g.n()).done;){var f=t.value;u.push(o.a.createElement("rect",{key:"Row"+f.id,x:"0",y:l,width:s,height:r,className:P})),d.push(o.a.createElement("line",{key:"RowLine"+f.id,x:"0",y1:l+r,x2:s,y2:l+r,className:Y})),l+=r}}catch(j){g.e(j)}finally{g.f()}for(var b=new Date,v=0,y=[],p=o.a.createElement("rect",null),k=0;k<n.length;k++){var x=n[k];y.push(o.a.createElement("line",{key:x.getTime(),x1:v,y1:0,x2:v,y2:l,className:I})),(k+1!==n.length&&x.getTime()<b.getTime()&&n[k+1].getTime()>=b.getTime()||0!==k&&k+1===n.length&&x.getTime()<b.getTime()&&m(x,x.getTime()-n[k-1].getTime(),"millisecond").getTime()>=b.getTime())&&(p=o.a.createElement("rect",{x:v,y:0,width:i,height:l,fill:c})),v+=i}return o.a.createElement("g",{className:"gridBody"},o.a.createElement("g",{className:"rows"},u),o.a.createElement("g",{className:"rowLines"},d),o.a.createElement("g",{className:"ticks"},y),o.a.createElement("g",{className:"today"},p))},X=function(e){return o.a.createElement("g",{className:"grid"},o.a.createElement(B,Object.assign({},e)))},K="_calendar-module__calendarBottomText__9w8d5",V="_calendar-module__calendarTopTick__1rLuZ",Q="_calendar-module__calendarTopText__2q1Kt",A="_calendar-module__calendarHeader__35nLX",G=function(e){var t=e.value,a=e.x1Line,n=e.y1Line,r=e.y2Line,s=e.xText,i=e.yText;return o.a.createElement("g",{className:"calendarTop"},o.a.createElement("line",{x1:a,y1:n,x2:a,y2:r,className:V,key:t+"line"}),o.a.createElement("text",{key:t+"text",y:i,x:s,className:Q},t))},U=function(e){var t=e.dateSetup,a=e.locale,r=e.viewMode,s=e.headerHeight,i=e.columnWidth,c=e.fontFamily,l=e.fontSize,u=[],d=[];switch(t.viewMode){case n.Month:var h=function(){for(var e=[],n=[],r=6*i,c=.5*s,l=0;l<t.dates.length;l++){var u=t.dates[l],d=y(u,a);if(n.push(o.a.createElement("text",{key:d+u.getFullYear(),y:.8*s,x:i*l+.5*i,className:K},d)),0===l||u.getFullYear()!==t.dates[l-1].getFullYear()){var g=u.getFullYear().toString();e.push(o.a.createElement(G,{key:g,value:g,x1Line:i*l,y1Line:0,y2Line:c,xText:r+i*l-u.getMonth()*i,yText:.9*c}))}}return[e,n]}(),m=Object(g.a)(h,2);u=m[0],d=m[1];break;case n.Week:var f=function(){for(var e=[],n=[],r=1,c=.5*s,l=t.dates,u=l.length-1;u>=0;u--){var d=l[u],g="";0!==u&&d.getMonth()===l[u-1].getMonth()||(g="".concat(y(d,a),", ").concat(d.getFullYear()));var h="W".concat(k(d));n.push(o.a.createElement("text",{key:d.getTime(),y:.8*s,x:i*u,className:K},h)),g&&(u!==l.length-1&&e.push(o.a.createElement(G,{key:g,value:g,x1Line:i*u+r*i,y1Line:0,y2Line:c,xText:i*u+i*r*.5,yText:.9*c})),r=0),r++}return[e,n]}(),b=Object(g.a)(f,2);u=b[0],d=b[1];break;case n.Day:var v=function(){for(var e=[],n=[],r=.5*s,c=t.dates,l=0;l<c.length;l++){var u=c[l],d=u.getDate().toString();if(n.push(o.a.createElement("text",{key:u.getTime(),y:.8*s,x:i*l+.5*i,className:K},d)),l+1!==c.length&&u.getMonth()!==c[l+1].getMonth()){var g=y(u,a);e.push(o.a.createElement(G,{key:g+u.getFullYear(),value:g,x1Line:i*(l+1),y1Line:0,y2Line:r,xText:i*(l+1)-u.getDate()*i*.5,yText:.9*r}))}}return[e,n]}(),p=Object(g.a)(v,2);u=p[0],d=p[1];break;default:var x=function(){for(var e=[],l=[],u=r===n.HalfDay?2:4,d=.5*s,g=t.dates,h=0;h<g.length;h++){var m=g[h],f=Intl.DateTimeFormat(a,{hour:"numeric"}).format(m);if(l.push(o.a.createElement("text",{key:m.getTime(),y:.8*s,x:i*h,className:K,fontFamily:c},f)),0===h||m.getDate()!==g[h-1].getDate()){var b="".concat(m.getDate()," ").concat(y(m,a));e.push(o.a.createElement(G,{key:b+m.getFullYear(),value:b,x1Line:i*h+u*i,y1Line:0,y2Line:d,xText:i*h+u*i*.5,yText:.9*d}))}}return[e,l]}(),j=Object(g.a)(x,2);u=j[0],d=j[1]}return o.a.createElement("g",{className:"calendar",fontSize:l,fontFamily:c},o.a.createElement("rect",{x:0,y:0,width:i*t.dates.length,height:s,className:A}),d," ",u)},Z=function(e){var t=e.taskFrom,a=e.taskTo,n=e.rowHeight,r=e.taskHeight,s=e.arrowIndent,i=t.index>a.index?-1:1,c=a.y+r/2,l="M ".concat(t.x2," ").concat(t.y+r/2," \n  h ").concat(s," \n  v ").concat(i*n/2," \n  H ").concat(a.x1-s," \n  V ").concat(c," \n  h ").concat(s),u="".concat(a.x1,",").concat(c," \n  ").concat(a.x1-5,",").concat(c-5," \n  ").concat(a.x1-5,",").concat(c+5);return o.a.createElement("g",{className:"arrow"},o.a.createElement("path",{strokeWidth:"1.5",d:l,fill:"none"}),o.a.createElement("polygon",{points:u}))},J=function(e,t,a,n,r,o,s,i,c,l,u,d,g,h,m,f,b,v,y){var p;switch(e.type){case"milestone":p=$(e,t,a,n,r,o,s,i,c,v,y);break;case"project":p=q(e,t,a,n,r,o,s,i,c,h,m,f,b);break;default:p=q(e,t,a,n,r,o,s,i,c,l,u,d,g)}return p},q=function(e,t,a,n,r,o,s,i,c,l,u,g,h){var m=ee(e.start,a,n,r),f=ee(e.end,a,n,r),b=te(t,o,s),v=Object(d.a)({backgroundColor:g,backgroundSelectedColor:h,progressColor:l,progressSelectedColor:u},e.styles),y=e.type;return"task"===y&&f-m<2*c&&(y="smalltask",f=m+2*c),Object(d.a)(Object(d.a)({},e),{},{typeInternal:y,x1:m,x2:f,y:b,index:t,barCornerRadius:i,handleWidth:c,height:s,barChildren:[],styles:v})},$=function(e,t,a,n,r,o,s,i,c,l,u){var g=ee(e.start,a,n,r),h=te(t,o,s),m=g-.5*s,f=g+.5*s,b=s/1.414,v=Object(d.a)({backgroundColor:l,backgroundSelectedColor:u,progressColor:"",progressSelectedColor:""},e.styles);return Object(d.a)(Object(d.a)({},e),{},{end:e.start,x1:m,x2:f,y:h,index:t,barCornerRadius:i,handleWidth:c,typeInternal:e.type,progress:0,height:b,barChildren:[],styles:v})},ee=function(e,t,a,n){var r=~~((e.getTime()-t[0].getTime()+e.getTimezoneOffset()-t[0].getTimezoneOffset())/a);return Math.round((r+(e.getTime()-t[r].getTime()-60*e.getTimezoneOffset()*1e3+60*t[r].getTimezoneOffset()*1e3)/a)*n)},te=function(e,t,a){return e*t+(t-a)/2},ae=function(e,t,a){return(t-e)*a*.01},ne=function(e,t,a){return[e-5,t+a,e+5,t+a,e,t+a-8.66].join(",")},re=function(e,t,a){var n=Math.round((e-a.x1)/t)*t,r=a.x1+n;return[r,r+a.x2-a.x1]},oe=function(e,t,a,n,r){var o=new Date((e-t)/n*r+a.getTime());return o=new Date(o.getTime()+6e4*(o.getTimezoneOffset()-a.getTimezoneOffset()))},se=function(e,t,a,n,r,o){var s;switch(a.type){case"milestone":s=ce(e,t,a,n,r,o);break;default:s=ie(e,t,a,n,r,o)}return s},ie=function(e,t,a,n,r,o){var s=Object(d.a)({},a),i=!1;switch(t){case"progress":s.progress=function(e,t){if(e>=t.x2)return 100;if(e<=t.x1)return 0;var a=t.x2-t.x1;return Math.round(100*(e-t.x1)/a)}(e,a),i=s.progress!==a.progress;break;case"start":var c=function(e,t,a){e>=a.x2-2*a.handleWidth&&(e=a.x2-2*a.handleWidth);var n=Math.round((e-a.x1)/t)*t;return a.x1+n}(e,n,a);s.x1=c,(i=s.x1!==a.x1)&&(s.start=oe(c,a.x1,a.start,n,r));break;case"end":var l=function(e,t,a){e<=a.x1+2*a.handleWidth&&(e=a.x1+2*a.handleWidth);var n=Math.round((e-a.x2)/t)*t;return a.x2+n}(e,n,a);s.x2=l,(i=s.x2!==a.x2)&&(s.end=oe(l,a.x2,a.end,n,r));break;case"move":var u=re(e-o,n,a),h=Object(g.a)(u,2),m=h[0],f=h[1];(i=m!==a.x1)&&(s.start=oe(m,a.x1,a.start,n,r),s.end=oe(f,a.x2,a.end,n,r),s.x1=m,s.x2=f)}return{isChanged:i,changedTask:s}},ce=function(e,t,a,n,r,o){var s=Object(d.a)({},a),i=!1;switch(t){case"move":var c=re(e-o,n,a),l=Object(g.a)(c,2),u=l[0],h=l[1];(i=u!==a.x1)&&(s.start=oe(u,a.x1,a.start,n,r),s.end=s.start,s.x1=u,s.x2=h)}return{isChanged:i,changedTask:s}};function le(e){return void 0!==e.key}var ue="_bar-module__barWrapper__KxSXS",de="_bar-module__barHandle__3w_5u",ge="_bar-module__barBackground__31ERP",he=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,s=e.isSelected,i=e.progressWidth,c=e.barCornerRadius,l=e.styles,u=e.onMouseDown;return o.a.createElement("g",{onMouseDown:u},o.a.createElement("rect",{x:t,width:n,y:a,height:r,ry:c,rx:c,fill:s?l.backgroundSelectedColor:l.backgroundColor,className:ge}),o.a.createElement("rect",{x:t,width:i,y:a,height:r,ry:c,rx:c,fill:s?l.progressSelectedColor:l.progressColor}))},me=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,s=e.barCornerRadius,i=e.onMouseDown;return o.a.createElement("rect",{x:t,y:a,width:n,height:r,className:de,ry:s,rx:s,onMouseDown:i})},fe=function(e){var t=e.progressPoint,a=e.onMouseDown;return o.a.createElement("polygon",{className:de,points:t,onMouseDown:a})},be=function(e){var t=e.task,a=e.isProgressChangeable,n=e.isDateChangeable,r=e.onEventStart,s=e.isSelected,i=ae(t.x1,t.x2,t.progress),c=ne(i+t.x1,t.y,t.height),l=t.height-2;return o.a.createElement("g",{className:ue,tabIndex:0},o.a.createElement(he,{x:t.x1,y:t.y,width:t.x2-t.x1,height:t.height,progressWidth:i,barCornerRadius:t.barCornerRadius,styles:t.styles,isSelected:s,onMouseDown:function(e){n&&r("move",t,e)}}),o.a.createElement("g",{className:"handleGroup"},n&&o.a.createElement("g",null,o.a.createElement(me,{x:t.x1+1,y:t.y+1,width:t.handleWidth,height:l,barCornerRadius:t.barCornerRadius,onMouseDown:function(e){r("start",t,e)}}),o.a.createElement(me,{x:t.x2-t.handleWidth-1,y:t.y+1,width:t.handleWidth,height:l,barCornerRadius:t.barCornerRadius,onMouseDown:function(e){r("end",t,e)}})),a&&o.a.createElement(fe,{progressPoint:c,onMouseDown:function(e){r("progress",t,e)}})))},ve=function(e){var t=e.task,a=e.isProgressChangeable,n=e.isDateChangeable,r=e.onEventStart,s=e.isSelected,i=ae(t.x1,t.x2,t.progress),c=ne(i+t.x1,t.y,t.height);return o.a.createElement("g",{className:ue,tabIndex:0},o.a.createElement(he,{x:t.x1,y:t.y,width:t.x2-t.x1,height:t.height,progressWidth:i,barCornerRadius:t.barCornerRadius,styles:t.styles,isSelected:s,onMouseDown:function(e){n&&r("move",t,e)}}),o.a.createElement("g",{className:"handleGroup"},a&&o.a.createElement(fe,{progressPoint:c,onMouseDown:function(e){r("progress",t,e)}})))},ye="_milestone-module__milestoneWrapper__RRr13",pe="_milestone-module__milestoneBackground__2P2B1",ke=function(e){var t=e.task,a=e.isDateChangeable,n=e.onEventStart,r=e.isSelected,s="rotate(45 ".concat(t.x1+.356*t.height," \n    ").concat(t.y+.85*t.height,")");return o.a.createElement("g",{tabIndex:0,className:ye},o.a.createElement("rect",{fill:r?t.styles.backgroundSelectedColor:t.styles.backgroundColor,x:t.x1,width:t.height,y:t.y,height:t.height,rx:t.barCornerRadius,ry:t.barCornerRadius,transform:s,className:pe,onMouseDown:function(e){a&&n("move",t,e)}}))},xe="_project-module__projectWrapper__1KJ6x",je="_project-module__projectBackground__2RbVy",_e="_project-module__projectTop__2pZMF",we=function(e){var t=e.task,a=e.isSelected,n=a?t.styles.backgroundSelectedColor:t.styles.backgroundColor,r=a?t.styles.progressSelectedColor:t.styles.progressColor,s=ae(t.x1,t.x2,t.progress),i=t.x2-t.x1,c=[t.x1,t.y+t.height/2-1,t.x1,t.y+t.height,t.x1+15,t.y+t.height/2-1].join(","),l=[t.x2,t.y+t.height/2-1,t.x2,t.y+t.height,t.x2-15,t.y+t.height/2-1].join(",");return o.a.createElement("g",{tabIndex:0,className:xe},o.a.createElement("rect",{fill:n,x:t.x1,width:i,y:t.y,height:t.height,rx:t.barCornerRadius,ry:t.barCornerRadius,className:je}),o.a.createElement("rect",{x:t.x1,width:s,y:t.y,height:t.height,ry:t.barCornerRadius,rx:t.barCornerRadius,fill:r}),o.a.createElement("rect",{fill:n,x:t.x1,width:i,y:t.y,height:t.height/2,rx:t.barCornerRadius,ry:t.barCornerRadius,className:_e}),o.a.createElement("polygon",{className:_e,points:c,fill:n}),o.a.createElement("polygon",{className:_e,points:l,fill:n}))},Te="_task-list-module__barLabel__3zRJQ",Oe="_task-list-module__barLabelOutside__3KcaM",Ee=function(e){var t=Object(d.a)({},e),a=t.task,n=t.arrowIndent,s=t.isDelete,i=t.taskHeight,c=t.isSelected,l=t.onEventStart,u=Object(r.useRef)(null),h=Object(r.useState)(o.a.createElement("div",null)),m=Object(g.a)(h,2),f=m[0],b=m[1],v=Object(r.useState)(!0),y=Object(g.a)(v,2),p=y[0],k=y[1];Object(r.useEffect)((function(){switch(a.typeInternal){case"milestone":b(o.a.createElement(ke,Object.assign({},e)));break;case"project":b(o.a.createElement(we,Object.assign({},e)));break;case"smalltask":b(o.a.createElement(ve,Object.assign({},e)));break;default:b(o.a.createElement(be,Object.assign({},e)))}}),[a,c]),Object(r.useEffect)((function(){u.current&&k(u.current.getBBox().width<a.x2-a.x1)}),[u,a]);return o.a.createElement("g",{onKeyDown:function(e){switch(e.key){case"Delete":s&&l("delete",a,e)}e.stopPropagation()},onMouseEnter:function(e){l("mouseenter",a,e)},onMouseLeave:function(e){l("mouseleave",a,e)},onDoubleClick:function(e){l("dblclick",a,e)},onFocus:function(){l("select",a)}},f,o.a.createElement("text",{x:function(){var e=a.x2-a.x1,t=a.barChildren.length>0;return p?a.x1+.5*e:a.x1+e+n*+t+.2*n}(),y:a.y+.5*i,className:p?Te:Oe,ref:u},a.name))},Ce=function(e){var t,a=e.tasks,n=e.dates,s=e.ganttEvent,i=e.selectedTask,c=e.rowHeight,d=e.columnWidth,h=e.timeStep,m=e.svg,f=e.taskHeight,b=e.arrowColor,v=e.arrowIndent,y=e.fontFamily,p=e.fontSize,k=e.setGanttEvent,x=e.setFailedTask,j=e.setSelectedTask,_=e.onDateChange,w=e.onProgressChange,T=e.onDoubleClick,O=e.onDelete,E=null===m||void 0===m||null===(t=m.current)||void 0===t?void 0:t.createSVGPoint(),C=Object(r.useState)(0),D=Object(g.a)(C,2),S=D[0],M=D[1],W=Object(r.useState)(0),N=Object(g.a)(W,2),F=N[0],H=N[1],L=Object(r.useState)(!1),R=Object(g.a)(L,2),z=R[0],P=R[1];Object(r.useEffect)((function(){var e=n[1].getTime()-n[0].getTime()-60*n[1].getTimezoneOffset()*1e3+60*n[0].getTimezoneOffset()*1e3;M(h*d/e)}),[d,n,h]),Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.changedTask&&E&&null!==m&&void 0!==m&&m.current){e.next=2;break}return e.abrupt("return");case 2:t.preventDefault(),E.x=t.clientX,n=E.matrixTransform(null===m||void 0===m||null===(a=m.current.getScreenCTM())||void 0===a?void 0:a.inverse()),r=se(n.x,s.action,s.changedTask,S,h,F),o=r.isChanged,i=r.changedTask,o&&k({action:s.action,changedTask:i});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var a=Object(u.a)(l.a.mark((function a(n){var r,o,i,c,u,d,g,f,b,v,y;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(o=s.action,i=s.originalSelectedTask,(c=s.changedTask)&&E&&null!==m&&void 0!==m&&m.current&&i){a.next=3;break}return a.abrupt("return");case 3:if(n.preventDefault(),E.x=n.clientX,u=E.matrixTransform(null===m||void 0===m||null===(r=m.current.getScreenCTM())||void 0===r?void 0:r.inverse()),d=se(u.x,o,c,S,h,F),g=d.changedTask,f=i.start!==g.start||i.end!==g.end||i.progress!==g.progress,m.current.removeEventListener("mousemove",e),m.current.removeEventListener("mouseup",t),k({action:""}),P(!1),b=!0,"move"!==o&&"end"!==o&&"start"!==o||!_||!f){a.next=26;break}return a.prev=14,a.next=17,_(g);case 17:void 0!==(v=a.sent)&&(b=v),a.next=24;break;case 21:a.prev=21,a.t0=a.catch(14),b=!1;case 24:a.next=37;break;case 26:if(!w||!f){a.next=37;break}return a.prev=27,a.next=30,w(g);case 30:void 0!==(y=a.sent)&&(b=y),a.next=37;break;case 34:a.prev=34,a.t1=a.catch(27),b=!1;case 37:b||x(i);case 38:case"end":return a.stop()}}),a,null,[[14,21],[27,34]])})));return function(e){return a.apply(this,arguments)}}();z||"move"!==s.action&&"end"!==s.action&&"start"!==s.action&&"progress"!==s.action||null===m||void 0===m||!m.current||(m.current.addEventListener("mousemove",e),m.current.addEventListener("mouseup",t),P(!0))}),[s,S,F,w,h,_,m,z]);var Y=function(){var e=Object(u.a)(l.a.mark((function e(t,a,n){var r,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}"select"===t&&j(a.id),e.next=41;break;case 4:if(!le(n)){e.next=19;break}if("delete"!==t){e.next=17;break}if(!O){e.next=17;break}return e.prev=7,e.next=10,O(a);case 10:void 0!==(r=e.sent)&&r&&k({action:t,changedTask:a}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.error("Error on Delete. "+e.t0);case 17:e.next=41;break;case 19:if("mouseenter"!==t){e.next=23;break}s.action||k({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 23:if("mouseleave"!==t){e.next=27;break}"mouseenter"===s.action&&k({action:""}),e.next=41;break;case 27:if("dblclick"!==t){e.next=31;break}T&&T(a),e.next=41;break;case 31:if("move"!==t){e.next=40;break}if(null!==m&&void 0!==m&&m.current&&E){e.next=34;break}return e.abrupt("return");case 34:E.x=n.clientX,i=E.matrixTransform(null===(o=m.current.getScreenCTM())||void 0===o?void 0:o.inverse()),H(i.x-a.x1),k({action:t,changedTask:a,originalSelectedTask:a}),e.next=41;break;case 40:k({action:t,changedTask:a,originalSelectedTask:a});case 41:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,a,n){return e.apply(this,arguments)}}();return o.a.createElement("g",{className:"content"},o.a.createElement("g",{className:"arrows",fill:b,stroke:b},a.map((function(e){return e.barChildren.map((function(t){return o.a.createElement(Z,{key:"Arrow from ".concat(e.id," to ").concat(a[t].id),taskFrom:e,taskTo:a[t],rowHeight:c,taskHeight:f,arrowIndent:v})}))}))),o.a.createElement("g",{className:"bar",fontFamily:y,fontSize:p},a.map((function(e){return o.a.createElement(Ee,{task:e,arrowIndent:v,taskHeight:f,isProgressChangeable:!!w&&!e.isDisabled,isDateChangeable:!!_&&!e.isDisabled,isDelete:!e.isDisabled,onEventStart:Y,key:e.id,isSelected:!!i&&e.id===i.id})}))))},De="_gantt-module__ganttVerticalContainer__CZjuD",Se="_gantt-module__horizontalContainer__2B2zv",Me="_gantt-module__wrapper__3eULf",We=function(e){var t=e.gridProps,a=e.calendarProps,n=e.barProps,s=e.ganttHeight,i=e.scrollY,c=e.scrollX,l=Object(r.useRef)(null),u=Object(r.useRef)(null),g=Object(r.useRef)(null),h=Object(d.a)(Object(d.a)({},n),{},{svg:l});return Object(r.useEffect)((function(){u.current&&(u.current.scrollTop=i)}),[i]),Object(r.useEffect)((function(){g.current&&(g.current.scrollLeft=c)}),[c]),o.a.createElement("div",{className:De,ref:g},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.svgWidth,height:a.headerHeight,fontFamily:n.fontFamily},o.a.createElement(U,Object.assign({},a))),o.a.createElement("div",{ref:u,className:Se,style:s?{height:s,width:t.svgWidth}:{width:t.svgWidth}},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.svgWidth,height:n.rowHeight*n.tasks.length,fontFamily:n.fontFamily,ref:l},o.a.createElement(X,Object.assign({},t)),o.a.createElement(Ce,Object.assign({},h)))))},Ne="_horizontal-scroll-module__scroll__19jgW",Fe=function(e){var t=e.scroll,a=e.svgWidth,n=e.taskListWidth,s=e.onScroll,i=Object(r.useRef)(null);return Object(r.useEffect)((function(){i.current&&(i.current.scrollLeft=t)}),[t]),o.a.createElement("div",{style:{marginLeft:n},className:Ne,onScroll:s,ref:i},o.a.createElement("div",{style:{width:a,height:1}}))},He=function(e){var t=e.tasks,a=e.headerHeight,s=void 0===a?50:a,i=e.columnWidth,c=void 0===i?60:i,l=e.listCellWidth,u=void 0===l?"155px":l,d=e.rowHeight,h=void 0===d?50:d,m=e.ganttHeight,f=void 0===m?0:m,y=e.viewMode,p=void 0===y?n.Day:y,k=e.locale,x=void 0===k?"en-GB":k,j=e.barFill,_=void 0===j?60:j,w=e.barCornerRadius,O=void 0===w?3:w,E=e.barProgressColor,C=void 0===E?"#a3a3ff":E,S=e.barProgressSelectedColor,M=void 0===S?"#8282f5":S,W=e.barBackgroundColor,N=void 0===W?"#b8c2cc":W,L=e.barBackgroundSelectedColor,P=void 0===L?"#aeb8c2":L,Y=e.projectProgressColor,I=void 0===Y?"#7db59a":Y,B=e.projectProgressSelectedColor,X=void 0===B?"#59a985":B,K=e.projectBackgroundColor,V=void 0===K?"#fac465":K,Q=e.projectBackgroundSelectedColor,A=void 0===Q?"#f7bb53":Q,G=e.milestoneBackgroundColor,U=void 0===G?"#f1c453":G,Z=e.milestoneBackgroundSelectedColor,q=void 0===Z?"#f29e4c":Z,$=e.handleWidth,ee=void 0===$?8:$,te=e.timeStep,ae=void 0===te?3e5:te,ne=e.arrowColor,re=void 0===ne?"grey":ne,oe=e.fontFamily,se=void 0===oe?"Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue":oe,ie=e.fontSize,ce=void 0===ie?"14px":ie,le=e.arrowIndent,ue=void 0===le?20:le,de=e.todayColor,ge=void 0===de?"rgba(252, 248, 227, 0.5)":de,he=e.TooltipContent,me=void 0===he?H:he,fe=e.TaskListHeader,be=void 0===fe?T:fe,ve=e.TaskListTable,ye=void 0===ve?D:ve,pe=e.onDateChange,ke=e.onProgressChange,xe=e.onDoubleClick,je=e.onDelete,_e=e.onSelect,we=Object(r.useRef)(null),Te=Object(r.useRef)(null),Oe=Object(r.useState)((function(){var e=b(t,p),a=Object(g.a)(e,2),n=a[0],r=a[1];return{viewMode:p,dates:v(n,r,p)}})),Ee=Object(g.a)(Oe,2),Ce=Ee[0],De=Ee[1],Ne=Object(r.useState)(h*_/100),He=Object(g.a)(Ne,2),Le=He[0],Re=He[1],ze=Object(r.useState)(0),Pe=Object(g.a)(ze,2),Ye=Pe[0],Ie=Pe[1],Be=Object(r.useState)(0),Xe=Object(g.a)(Be,2),Ke=Xe[0],Ve=Xe[1],Qe=Object(r.useState)(f),Ae=Object(g.a)(Qe,2),Ge=Ae[0],Ue=Ae[1],Ze=Object(r.useState)([]),Je=Object(g.a)(Ze,2),qe=Je[0],$e=Je[1],et=Object(r.useState)({action:""}),tt=Object(g.a)(et,2),at=tt[0],nt=tt[1],rt=Object(r.useState)(),ot=Object(g.a)(rt,2),st=ot[0],it=ot[1],ct=Object(r.useState)(null),lt=Object(g.a)(ct,2),ut=lt[0],dt=lt[1],gt=Object(r.useState)(0),ht=Object(g.a)(gt,2),mt=ht[0],ft=ht[1],bt=Object(r.useState)(0),vt=Object(g.a)(bt,2),yt=vt[0],pt=vt[1],kt=Object(r.useState)(!1),xt=Object(g.a)(kt,2),jt=xt[0],_t=xt[1],wt=Ce.dates.length*c,Tt=qe.length*h;Object(r.useEffect)((function(){var e=b(t,p),a=Object(g.a)(e,2),n=a[0],r=a[1],o=v(n,r,p);De({dates:o,viewMode:p}),$e(function(e,t,a,n,r,o,s,i,c,l,u,d,g,h,m,f,b){var v=t[1].getTime()-t[0].getTime()-60*t[1].getTimezoneOffset()*1e3+60*t[0].getTimezoneOffset()*1e3,y=e.map((function(e,y){return J(e,y,t,v,a,n,r,o,s,i,c,l,u,d,g,h,m,f,b)}));return y=y.map((function(e,t){for(var a=e.dependencies||[],n=function(e){var n=y.findIndex((function(t){return t.id===a[e]}));-1!==n&&y[n].barChildren.push(t)},r=0;r<a.length;r++)n(r);return e}))}(t,o,c,h,Le,O,ee,C,M,N,P,I,X,V,A,U,q))}),[t,p,h,O,c,Le,ee,C,M,N,P,I,X,V,A,U,q]),Object(r.useEffect)((function(){var e=at.changedTask,t=at.action;if(e)if("delete"===t)nt({action:""}),$e(qe.filter((function(t){return t.id!==e.id})));else if("move"===t||"end"===t||"start"===t||"progress"===t){var a=qe.find((function(t){return t.id===e.id}));if(a&&(a.start.getTime()!==e.start.getTime()||a.end.getTime()!==e.end.getTime()||a.progress!==e.progress)){var n=qe.map((function(t){return t.id===e.id?e:t}));$e(n)}}}),[at,qe]),Object(r.useEffect)((function(){ut&&($e(qe.map((function(e){return e.id!==ut.id?e:ut}))),dt(null))}),[ut,qe]),Object(r.useEffect)((function(){var e=h*_/100;e!==Le&&Re(e)}),[h,_,Le]),Object(r.useEffect)((function(){u||Ie(0),Te.current&&Ie(Te.current.offsetWidth)}),[Te,u]),Object(r.useEffect)((function(){we.current&&Ve(we.current.offsetWidth-Ye)}),[we,Ye]),Object(r.useEffect)((function(){Ue(f?f+s:t.length*h+s)}),[f,t]),Object(r.useEffect)((function(){var e=function(e){if(e.shiftKey||e.deltaX){var t=e.deltaX?e.deltaX:e.deltaY,a=yt+t;a<0?a=0:a>wt&&(a=wt),pt(a),e.preventDefault()}else{var n=mt+e.deltaY;n<0?n=0:n>Tt-f&&(n=Tt-f),n!==mt&&(ft(n),e.preventDefault())}_t(!0)};return we.current&&we.current.addEventListener("wheel",e,{passive:!1}),function(){we.current&&we.current.removeEventListener("wheel",e)}}),[we.current,mt,yt,f,wt]);var Ot=function(e){var t=qe.find((function(t){return t.id===e})),a=qe.find((function(e){return!!st&&e.id===st.id}));_e&&(a&&_e(a,!1),t&&_e(t,!0)),it(t)},Et={columnWidth:c,svgWidth:wt,tasks:t,rowHeight:h,dates:Ce.dates,todayColor:ge},Ct={dateSetup:Ce,locale:x,viewMode:p,headerHeight:s,columnWidth:c,fontFamily:se,fontSize:ce},Dt={tasks:qe,dates:Ce.dates,ganttEvent:at,selectedTask:st,rowHeight:h,taskHeight:Le,columnWidth:c,arrowColor:re,timeStep:ae,fontFamily:se,fontSize:ce,arrowIndent:ue,svgWidth:wt,setGanttEvent:nt,setFailedTask:dt,setSelectedTask:Ot,onDateChange:pe,onProgressChange:ke,onDoubleClick:xe,onDelete:je},St={rowHeight:h,rowWidth:u,fontFamily:se,fontSize:ce,tasks:qe,locale:x,headerHeight:s,scrollY:mt,ganttHeight:f,horizontalContainerClass:Se,selectedTask:st,taskListRef:Te,setSelectedTask:Ot,TaskListHeader:be,TaskListTable:ye};return o.a.createElement("div",null,o.a.createElement("div",{className:Me,onKeyDown:function(e){e.preventDefault();var t=mt,a=yt,n=!0;switch(e.key){case"Down":case"ArrowDown":t+=h,n=!1;break;case"Up":case"ArrowUp":t-=h,n=!1;break;case"Left":case"ArrowLeft":a-=c;break;case"Right":case"ArrowRight":a+=c}n?(a<0?a=0:a>wt&&(a=wt),pt(a)):(t<0?t=0:t>Tt-f&&(t=Tt-f),ft(t)),_t(!0)},tabIndex:0,ref:we},u&&o.a.createElement(z,Object.assign({},St)),o.a.createElement(We,{gridProps:Et,calendarProps:Ct,barProps:Dt,ganttHeight:f,scrollY:mt,scrollX:yt}),at.changedTask&&o.a.createElement(F,{arrowIndent:ue,rowHeight:h,svgContainerHeight:Ge,svgContainerWidth:Ke,fontFamily:se,fontSize:ce,scrollX:yt,scrollY:mt,task:at.changedTask,headerHeight:s,taskListWidth:Ye,TooltipContent:me}),o.a.createElement(R,{ganttFullHeight:Tt,ganttHeight:f,headerHeight:s,scroll:mt,onScroll:function(e){mt===e.currentTarget.scrollTop||jt||ft(e.currentTarget.scrollTop),_t(!1)}})),o.a.createElement(Fe,{svgWidth:wt,taskListWidth:Ye,scroll:yt,onScroll:function(e){yt===e.currentTarget.scrollLeft||jt||pt(e.currentTarget.scrollLeft),_t(!1)}}))},Le=(a(8),a(2)),Re=function(e){var t=e.onViewModeChange,a=e.onViewListChange,r=e.isChecked;return Object(Le.jsxs)("div",{className:"ViewContainer",children:[Object(Le.jsx)("button",{className:"Button",onClick:function(){return t(n.QuarterDay)},children:"Quarter of Day"}),Object(Le.jsx)("button",{className:"Button",onClick:function(){return t(n.HalfDay)},children:"Half of Day"}),Object(Le.jsx)("button",{className:"Button",onClick:function(){return t(n.Day)},children:"Day"}),Object(Le.jsx)("button",{className:"Button",onClick:function(){return t(n.Week)},children:"Week"}),Object(Le.jsx)("button",{className:"Button",onClick:function(){return t(n.Month)},children:"Month"}),Object(Le.jsxs)("div",{className:"Switch",children:[Object(Le.jsxs)("label",{className:"Switch_Toggle",children:[Object(Le.jsx)("input",{type:"checkbox",defaultChecked:r,onClick:function(){return a(!r)}}),Object(Le.jsx)("span",{className:"Slider"})]}),"Show Task List"]})]})};var ze=function(){var e=o.a.useState(n.Day),t=Object(g.a)(e,2),a=t[0],r=t[1],s=o.a.useState(function(){var e=new Date;return[{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),15),name:"Some Project",id:"ProjectSample",progress:25,type:"project"},{start:new Date(e.getFullYear(),e.getMonth(),1),end:new Date(e.getFullYear(),e.getMonth(),2,12,28),name:"Idea",id:"Task 0",progress:45,type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),2),end:new Date(e.getFullYear(),e.getMonth(),4,0,0),name:"Research",id:"Task 1",progress:25,dependencies:["Task 0"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),4),end:new Date(e.getFullYear(),e.getMonth(),8,0,0),name:"Discussion with team",id:"Task 2",progress:10,dependencies:["Task 1"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),9,0,0),name:"Developing",id:"Task 3",progress:2,dependencies:["Task 2"],type:"task",project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),8),end:new Date(e.getFullYear(),e.getMonth(),10),name:"Review",id:"Task 4",type:"task",progress:70,dependencies:["Task 2"],project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),15),end:new Date(e.getFullYear(),e.getMonth(),15),name:"Release",id:"Task 6",progress:e.getMonth(),type:"milestone",dependencies:["Task 4"],project:"ProjectSample"},{start:new Date(e.getFullYear(),e.getMonth(),18),end:new Date(e.getFullYear(),e.getMonth(),19),name:"Party Time",id:"Task 9",progress:0,isDisabled:!0,type:"task"}]}()),i=Object(g.a)(s,2),c=i[0],h=i[1],m=o.a.useState(!0),f=Object(g.a)(m,2),b=f[0],v=f[1],y=60;a===n.Month?y=300:a===n.Week&&(y=250);var p=function(e){console.log("On date change Id:"+e.id);var t=c.map((function(t){return t.id===e.id?e:t}));if(e.project){var a=function(e,t){for(var a=e.filter((function(e){return e.project===t})),n=a[0].start,r=a[0].end,o=0;o<a.length;o++){var s=a[o];n.getTime()>s.start.getTime()&&(n=s.start),r.getTime()<s.end.getTime()&&(r=s.end)}return[n,r]}(t,e.project),n=Object(g.a)(a,2),r=n[0],o=n[1],s=t[t.findIndex((function(t){return t.id===e.project}))];if(s.start.getTime()!==r.getTime()||s.end.getTime()!==o.getTime()){var i=Object(d.a)(Object(d.a)({},s),{},{start:r,end:o});t=t.map((function(t){return t.id===e.project?i:t}))}}h(t)},k=function(e){var t=window.confirm("Are you sure about "+e.name+" ?");return t&&h(c.filter((function(t){return t.id!==e.id}))),t},x=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(c.map((function(e){return e.id===t.id?t:e}))),console.log("On progress change Id:"+t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){alert("On Double Click event Id:"+e.id)},_=function(e,t){console.log(e.name+" has "+(t?"selected":"unselected"))};return Object(Le.jsxs)("div",{children:[Object(Le.jsx)(Re,{onViewModeChange:function(e){return r(e)},onViewListChange:v,isChecked:b}),Object(Le.jsx)("h3",{children:"Gantt With Unlimited Height"}),Object(Le.jsx)(He,{tasks:c,viewMode:a,onDateChange:p,onDelete:k,onProgressChange:x,onDoubleClick:j,onSelect:_,listCellWidth:b?"155px":"",columnWidth:y}),Object(Le.jsx)("h3",{children:"Gantt With Limited Height"}),Object(Le.jsx)(He,{tasks:c,viewMode:a,onDateChange:p,onDelete:k,onProgressChange:x,onDoubleClick:j,onSelect:_,listCellWidth:b?"155px":"",ganttHeight:300,columnWidth:y})]})};i.a.render(Object(Le.jsx)(ze,{}),document.getElementById("root"))},8:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.acf4fe8d.chunk.js.map