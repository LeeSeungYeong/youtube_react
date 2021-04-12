(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__3pAdW"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__1gBtH",grid:"video_item_grid__1uYF_",list:"video_item_list__1w7Ve",video:"video_item_video__8SsPB",metadata:"video_item_metadata__3eDvR",thumbnail:"video_item_thumbnail__ARQWd",title:"video_item_title__289ju",channel:"video_item_channel__3i8We"}},4:function(e,t,a){e.exports={header:"search_header_header__3aXI6",logo:"search_header_logo__4KeBl",input:"search_header_input__1RHv6",button:"search_header_button__1HpkQ",buttonImg:"search_header_buttonImg__1rX6B"}},5:function(e,t,a){e.exports={app:"app_app__3jVyG",content:"app_content__3xQs_",detail:"app_detail__3RCPz",list:"app_list__2V2Im"}},50:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(5),l=a.n(o),u=a(3),d=a.n(u),p=a(0),_=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,i="list"===e.display?d.a.list:d.a.grid;return Object(p.jsx)("li",{className:"".concat(d.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(p.jsxs)("div",{className:d.a.video,children:[Object(p.jsx)("img",{className:d.a.thumbnail,src:a.thumbnails.medium.url,alt:"video-thumbnails"}),Object(p.jsxs)("div",{className:d.a.metadata,children:[Object(p.jsx)("p",{className:d.a.title,children:a.title}),Object(p.jsxs)("p",{className:d.a.channel,children:[" ",a.channelTitle]})]})]})})})),h=a(21),m=a.n(h),j=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(p.jsx)("ul",{className:m.a.videos,children:t.map((function(e){return Object(p.jsx)(_,{video:e,onVideoClick:a,display:n},e.id)}))})},b=a(4),v=a.n(b),O=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;t(e)};return Object(p.jsxs)("header",{className:v.a.header,children:[Object(p.jsxs)("div",{className:v.a.logo,children:[Object(p.jsx)("img",{className:v.a.img,src:"youtube_react/images/logo.png"}),Object(p.jsx)("h1",{className:v.a.title,children:"Youtube"})]}),Object(p.jsx)("input",{className:v.a.input,ref:a,type:"search",placeholder:"Search..",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(p.jsx)("button",{className:v.a.button,type:"submit",onClick:function(){i()},children:Object(p.jsx)("img",{className:v.a.buttonImg,src:"youtube_react/images/search.png",alt:"search"})})]})})),x=a(7),f=a.n(x),y=function(e){var t=e.video;return Object(p.jsxs)("section",{className:f.a.detail,children:[Object(p.jsx)("iframe",{className:f.a.video,id:"ytplayer",type:"text/html",title:"yotube video player",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(p.jsx)("h1",{children:t.snippet.title}),Object(p.jsx)("h2",{children:t.snippet.channelTitle}),Object(p.jsx)("pre",{className:f.a.description,children:t.snippet.description})]})};var g=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],_=u[1],h=Object(n.useCallback)((function(e){t.search(e).then((function(e){s(e),_(null)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(O,{onSearch:h}),Object(p.jsxs)("section",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(y,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(j,{videos:c,onVideoClick:function(e){_(e)},display:d?"list":"grid"})})]})]})},N=a(11),k=a(6),w=a.n(k),C=a(9),I=a(22),R=a(23),S=function(){function e(t){Object(I.a)(this,e),this.youtube=t}return Object(R.a)(e,[{key:"mostPopular",value:function(){var e=Object(C.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:"25"}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(C.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:"25",q:t,type:"video"}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),P=a(24),V=new S(a.n(P).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyCwCUk7-O8nUFPR_a5_Lj3JXh7IjCwEg8Q"}}));s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g,{youtube:V})}),document.getElementById("root"))},7:function(e,t,a){e.exports={detail:"video_detail_detail__15a_p",description:"video_detail_description__2ymwA"}}},[[50,1,2]]]);
//# sourceMappingURL=main.8516d616.chunk.js.map