"use strict";(self.webpackChunkcourses=self.webpackChunkcourses||[]).push([[677],{161:(e,s,l)=>{l.d(s,{Z:()=>i});var t=l(400),n=l(810);const r=function(e){var s=e.links;return(0,t.h)("div",{class:"breadcrumb"},(0,t.h)("div",{class:"breadcrumb-wrapper"},(0,t.h)("p",{class:"breadcrumb-element"},s.map((function(e,l){return(0,t.h)(t.HY,{key:l},e.href?(0,t.h)(n.rU,{href:e.href},e.text):(0,t.h)("span",{class:"active"},e.text),l<s.length-1&&(0,t.h)("span",null," > "))})))))},a=function(e){var s=e.text;return(0,t.h)("div",{class:"mega-row cms-row bg-grey-full vertical-spacing-bottom"},(0,t.h)("div",{class:"container"},(0,t.h)("div",{class:"row"},(0,t.h)("div",{class:"col col-sm-12"},(0,t.h)("div",{class:"text-element noresize"},(0,t.h)("h1",{class:"title-lvl-1"},s))))))},c=function(){return(0,t.h)("div",{class:"mega-row cms-row"},(0,t.h)("div",{class:"container container-medium"},(0,t.h)("div",{class:"row"},(0,t.h)("div",{class:"col col-sm-8"},(0,t.h)("div",{class:"text-element noresize"},(0,t.h)("h2",null,"Kursangebote"),(0,t.h)("p",null,"Sie sind interessiert an einem Kurs für Ihre Mitarbeitenden?"),(0,t.h)("p",null,"Wählen Sie mit wenigen Klicks aus, welche Kombination aus Kursen für Sie und Ihr Unternehmen am Meisten Sinn machen."))),(0,t.h)("div",{class:"col col-sm-4"},(0,t.h)("div",{class:"push push--theme-green noresize"},(0,t.h)("div",{class:"push-wrapper",style:"background-image: url('https://www.soprema.ch/files/resize/outside/400-400-dl-2x_c54e0a3d392335451150669b08b66c66.webp')"},(0,t.h)("div",{class:"push-content wysiwyg"},(0,t.h)("p",{class:"title-lvl-3"},"KURSBROSCHÜRE 2023"),(0,t.h)("p",null,(0,t.h)("a",{class:"button",href:"https://www.soprema.ch/files/2023-schulungsbroschuere-de_d71c998ecd7145324fe1b919058924d0.pdf",target:"_blank",rel:"noopener"},"Herunterladen")))))))))},i=function(e){var s=e.hasCallout,l=void 0===s?"false":s,n=e.breadcrumbLinks,i=e.titleText,u=e.children;return(0,t.h)(t.HY,null,(0,t.h)(r,{links:n}),(0,t.h)(a,{text:i}),"true"===l&&(0,t.h)(c,null),u)}},677:(e,s,l)=>{l.r(s),l.d(s,{default:()=>c});var t=l(400),n=l(810),r=l(161),a=function(e){var s=e.pack,l=e.courses,r=e.setSelectedCourses;return(0,t.h)("div",{class:"guides-element custom-guides-element span-4"},(0,t.h)("div",{class:"small-tule small-tule--light small-tule--image-link"},(0,t.h)(n.rU,{href:"/courses",class:"small-tule-wrapper",onClick:function(){var e=s.items.map((function(e){var t=l.find((function(s){return s.name===e.item}));return t||console.error("No course found matching item ".concat(e.item," in pack ").concat(s.name)),t})).filter(Boolean);r(e)},"aria-label":"Select courses from ".concat(s.name)},(0,t.h)("div",{class:"small-tule-container"},(0,t.h)("div",{class:"small-tule-content wysiwyg"},(0,t.h)("h3",{class:"small-tule-title"},s.name),(0,t.h)("ul",null,s.desc.map((function(e){return(0,t.h)("li",null,e)}))),(0,t.h)("p",{class:"small-tule-button small-tule--custom-button"}," "))))))};const c=function(e){var s=e.packs,l=e.courses,n=e.setSelectedCourses,c={home:{href:"/",text:"Home"},current:{text:"Firmenkurse"}};return(0,t.h)(r.Z,{hasCallout:"true",breadcrumbLinks:[c.home,c.current],titleText:"Firmenkurse"},(0,t.h)("div",{class:"mega-row cms-row vertical-spacing-bottom"},(0,t.h)("div",{class:"container container-medium"},(0,t.h)("div",{class:"row"},(0,t.h)("div",{class:"col col-sm-12"},(0,t.h)("div",{class:"guides noresize",style:""},(0,t.h)("div",{class:"guides-wrapper custom-guides-wrapper"},s.map((function(e){return(0,t.h)(a,{key:e.name,pack:e,courses:l,setSelectedCourses:n})})))))))))}}}]);