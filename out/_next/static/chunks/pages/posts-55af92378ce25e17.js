(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{1117:function(t,e,r){"use strict";r.r(e);var i,n,o,a,d=r(1383),c=r(7427),s=r(7294),m=r(1237),p=r(66),g=r(6572),l=r(2201),h=r(8100),u=r(1664),b=r.n(u),f=r(5944);var w=(0,c.Z)("div",{target:"e1smnpbg10"})({name:"zjik7",styles:"display:flex"}),y=(0,c.Z)(g.O,{target:"e1smnpbg9"})({name:"15ucyid",styles:"--tw-text-opacity:1;color:rgba(26, 32, 44, var(--tw-text-opacity))"}),x=(0,c.Z)("div",{target:"e1smnpbg8"})({name:"11c0rv1",styles:"margin-top:1.5rem;display:flex;flex-wrap:wrap;@media (min-width: 640px){margin-right:-2rem;}"}),v=p.ZP.div(i||(i=(0,d.Z)(["\n  ","\n  ","\n"])),{marginTop:"2.5rem",width:"100%","@media (min-width: 640px)":{width:"50%",paddingRight:"2rem"},"@media (min-width: 1024px)":{width:"33.333333%"}},(function(t){return t.featured&&(0,p.iv)(n||(n=(0,d.Z)(["\n      ","\n      "," {\n        ","\n      }\n      "," {\n        ","\n      }\n      "," {\n        ","\n      }\n      "," {\n        ","\n      }\n    "])),{width:"100% !important"},Z,{height:"100%","@media (min-width: 640px)":{flexDirection:"row !important",paddingRight:"1rem"}},R,{"@media (min-width: 640px)":{height:"24rem",minHeight:"100%",width:"50%",borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0",borderBottomLeftRadius:"0.5rem"},"@media (min-width: 1024px)":{width:"66.666667%"}},k,{"@media (min-width: 640px)":{marginRight:"-1rem",paddingLeft:"2rem",flex:"1 1 0%",borderRadius:"0",borderTopRightRadius:"0.5rem",borderBottomRightRadius:"0.5rem",borderTopWidth:"2px",borderLeftWidth:"0"}},L,{fontSize:"0.875rem",marginTop:"0.75rem",lineHeight:"2","--tw-text-opacity":"1",color:"rgba(113, 128, 150, var(--tw-text-opacity))",fontWeight:"500"})})),Z=(0,c.Z)("div",{target:"e1smnpbg7"})({name:"5sbz22",styles:"cursor:pointer;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(247, 250, 252, var(--tw-bg-opacity));border-radius:0.5rem"}),R=p.ZP.div(o||(o=(0,d.Z)(["\n  ","\n  ","\n"])),(function(t){return(0,p.iv)(a||(a=(0,d.Z)(['\n      background-image: url("','");\n    '])),t.imageSrc)}),{height:"16rem",width:"100%",backgroundSize:"cover",backgroundPosition:"center",borderTopLeftRadius:"0.5rem",borderTopRightRadius:"0.5rem"}),k=(0,c.Z)("div",{target:"e1smnpbg6"})({name:"11yhn8l",styles:"padding:2rem;border-width:2px;border-top-width:0;border-radius:0.5rem;border-top-left-radius:0;border-top-right-radius:0"}),_=(0,c.Z)("div",{target:"e1smnpbg5"})({name:"h3pfxs",styles:'text-transform:uppercase;--tw-text-opacity:1;color:rgba(100, 21, 255, var(--tw-text-opacity));font-size:0.75rem;font-weight:700;letter-spacing:0.1em;line-height:2;:after{content:"";display:block;border-bottom-width:2px;--tw-border-opacity:1;border-color:rgba(100, 21, 255, var(--tw-border-opacity));width:2rem;}'}),T=(0,c.Z)("div",{target:"e1smnpbg4"})({name:"xlswg0",styles:"margin-top:1rem;text-transform:uppercase;--tw-text-opacity:1;color:rgba(113, 128, 150, var(--tw-text-opacity));font-style:italic;font-weight:600;font-size:0.75rem"}),z=(0,c.Z)("div",{target:"e1smnpbg3"})({name:"1uzc35e",styles:"transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;margin-top:0.25rem;font-weight:900;font-size:1.5rem;--tw-text-opacity:1;color:rgba(26, 32, 44, var(--tw-text-opacity));.group:hover &{--tw-text-opacity:1;color:rgba(100, 21, 255, var(--tw-text-opacity));}transition-duration:300ms"}),L=(0,c.Z)("div",{target:"e1smnpbg2"})({name:"0",styles:""}),P=(0,c.Z)("div",{target:"e1smnpbg1"})({name:"zl1inp",styles:"display:flex;justify-content:center"}),B=(0,c.Z)(l.Z,{target:"e1smnpbg0"})({name:"15nijkv",styles:"margin-top:4rem;margin-left:auto;margin-right:auto"}),N=function(t){return fetch(t).then((function(t){return t.json()}))};e.default=function(t){var e=t.headingText,r=void 0===e?"Blog Posts":e,i=(0,s.useState)(7),n=i[0],o=i[1],a=(0,h.ZP)("/api/posts",N),d=a.data;return a.error?(0,f.tZ)("div",{children:"Failed to load"}):d?(0,f.tZ)(m.W2,{children:(0,f.BX)(m.Fc,{children:[(0,f.tZ)(w,{children:(0,f.tZ)(y,{children:r})}),(0,f.tZ)(x,{children:null===d||void 0===d?void 0:d.slice(0,n).map((function(t,e){return(0,f.tZ)(v,{featured:t.featured,children:(0,f.tZ)(b(),{href:"posts/".concat(t.id),children:(0,f.BX)(Z,{className:"group",children:[(0,f.tZ)(R,{imageSrc:t.imageSrc}),(0,f.BX)(k,{children:[(0,f.tZ)(_,{children:t.category}),(0,f.tZ)(T,{children:t.date}),(0,f.tZ)(z,{children:t.title}),t.featured&&t.description&&(0,f.tZ)(L,{children:t.description})]})]})})},e)}))}),n<d.length&&(0,f.tZ)(P,{children:(0,f.tZ)(B,{onClick:function(){o((function(t){return t+6}))},children:"Load More"})})]})}):(0,f.tZ)("div",{children:"Loading..."})}},5794:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return r(1117)}])}},function(t){t.O(0,[100,774,888,179],(function(){return e=5794,t(t.s=e);var e}));var e=t.O();_N_E=e}]);