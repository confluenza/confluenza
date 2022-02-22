"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[738],{7648:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return c},default:function(){return r}});var t=n(7896),o=n(1461),s=(n(2784),n(5647)),m=n(5322),p=["components"],c={path:"/users/mdx",title:"Using MDX in Confluenza",tag:"user",sortIndex:30},d={_frontmatter:c};function r(e){var a=e.components,n=(0,o.Z)(e,p);return(0,s.mdx)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://mdxjs.com"},"MDX")," allows you to use JSX directly in your Markdown documents."),(0,s.mdx)("p",null,"Imagine, you are documenting a component. Wouldn't it be nice to actually show a working component\ndirectly in your Markdown document? I mean, not a screenshot, or code snippet, but real rendered\ncomponent. MDX makes it possible."),(0,s.mdx)("p",null,"Below you see a component that renders its content with a border of the given thickness."),(0,s.mdx)(m.q,{thickness:5,mdxType:"WithBorder"},"This text should appear in a border `5px` thick."),(0,s.mdx)("p",null,"This component is imported as any other regular react component with:"),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,s.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"import")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{")," WithBorder ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"from")," ",(0,s.mdx)("span",{parentName:"code",className:"token string"},"'../../components/mdx'")))),(0,s.mdx)("blockquote",null,(0,s.mdx)("p",{parentName:"blockquote"},"The import statement must be placed directly after ",(0,s.mdx)("em",{parentName:"p"},"frontmatter")," if one is used.")),(0,s.mdx)(m.m,{mdxType:"ImportingMDXDocuments"}),(0,s.mdx)("h2",{id:"enabling-mdx-support-in-confluenza",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h2",href:"#enabling-mdx-support-in-confluenza","aria-label":"enabling mdx support in confluenza permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Enabling MDX support in Confluenza"),(0,s.mdx)("p",null,"In Confluenza, you can use MDX documents the same way you use regular Markdown documents.\nIf you want your MDX document to be visible to Confluenza, just make sure it has a valid\nfrontmatter with a ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"path"),", ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"title"),", and ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"tag"),". For MDX documents, Confluenza does not\nsupport the ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"content")," frontmatter attribute, but you can still import external content\ninto your MDX documents the way we show above by using a regular javascript ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"import")," statement."),(0,s.mdx)("h2",{id:"when-you-do-not-have-any-mdx-documents",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h2",href:"#when-you-do-not-have-any-mdx-documents","aria-label":"when you do not have any mdx documents permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"When you do not have any MDX documents"),(0,s.mdx)("p",null,"Because of how Gatsby works, when there are no MDX documents,\nneither MDX nodes nor the corresponding GraphQL types will be created. This will make Gatsby failing."),(0,s.mdx)("p",null,"There are two solutions: first, make sure you do have MDX content. Just create a ",(0,s.mdx)("em",{parentName:"p"},"dummy")," MDX document\nwith a frontmatter similar to this one:"),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"markdown"},(0,s.mdx)("pre",{parentName:"div",className:"language-markdown"},(0,s.mdx)("code",{parentName:"pre",className:"language-markdown"},(0,s.mdx)("span",{parentName:"code",className:"token front-matter-block"},(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"---"),"\n",(0,s.mdx)("span",{parentName:"span",className:"token front-matter yaml language-yaml"},"path: /dummy\ntitle: Dummy\ntag: dummy"),"\n",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"---"))))),(0,s.mdx)("p",null,"The values do not relly matter, just make sure they do not conflict with your actual content and that ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"path"),",\n",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"title"),", and ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"tag")," attributes are defined."),(0,s.mdx)("p",null,"Another approach would be add the following to your site's ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"gatsby-config.js"),":"),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,s.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"exports",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.mdx)("span",{parentName:"code",className:"token function-variable function"},"createSchemaCustomization")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.mdx)("span",{parentName:"code",className:"token parameter"},(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"{")," actions ",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},"}")),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"=>")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"const")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{")," createTypes",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},",")," createFieldExtension ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"=")," actions\n  ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"createFieldExtension"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token literal-property property"},"name"),(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token string"},"'noMdx'"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token function-variable function"},"extend"),(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"=>")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"resolve")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),(0,s.mdx)("span",{parentName:"code",className:"token parameter"},"source",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},",")," args",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},",")," context",(0,s.mdx)("span",{parentName:"span",className:"token punctuation"},",")," info"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"if")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),"source",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"["),"info",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"."),"fieldName",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"]"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"return")," context",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"."),(0,s.mdx)("span",{parentName:"code",className:"token function"},"defaultFieldResolver"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),"\n            source",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n            args",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n            context",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n            info\n          ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")"),"\n        ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}")," ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"else")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"return")," ",(0,s.mdx)("span",{parentName:"code",className:"token string"},"''"),"\n        ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")"),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")"),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token keyword"},"const")," typeDefs ",(0,s.mdx)("span",{parentName:"code",className:"token operator"},"=")," ",(0,s.mdx)("span",{parentName:"code",className:"token template-string"},(0,s.mdx)("span",{parentName:"span",className:"token template-punctuation string"},"`"),(0,s.mdx)("span",{parentName:"span",className:"token string"},"\n    type Mdx implements Node @infer {\n      frontmatter: MdxFrontmatter,\n    }\n    type MdxFrontmatter @infer {\n      title: String @noMdx,\n      path: String @noMdx,\n      tag: String @noMdx\n    }\n  "),(0,s.mdx)("span",{parentName:"span",className:"token template-punctuation string"},"`")),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token function"},"createTypes"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"("),"typeDefs",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},")"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,s.mdx)("p",null,"Here we basicaly make sure that ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"Mdx")," and ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"MdxFrontmatter")," are defined with ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"title"),", ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"path"),", and ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"tag"),"."),(0,s.mdx)("blockquote",null,(0,s.mdx)("p",{parentName:"blockquote"},"Unfortunatley, we could not just add this to ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"gatsby-node.js")," of the ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"gatsby-theme-confluenza")," package.\nIt would work in a source plugin, but is not allowed in themes.")),(0,s.mdx)("blockquote",null,(0,s.mdx)("p",{parentName:"blockquote"},"You will experience similar problems when your site has MDX but no single Markdown content.\nThis is far less probable that there is no single Markdown document in your source tree,\nbut in such a case, just make sure, you add a dummy Markdown file,\nor you use a similar hack that we show above working for ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"Mdx")," and ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"MdxFrontmatter")," schema types.")),(0,s.mdx)("p",null,(0,s.mdx)("code",{parentName:"p",className:"language-text"},"gatsby-theme-confluenza")," also provides an option to disable support for MDX:"),(0,s.mdx)("div",{className:"gatsby-highlight","data-language":"javascript"},(0,s.mdx)("pre",{parentName:"div",className:"language-javascript"},(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token literal-property property"},"resolve"),(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token string"},"'@confluenza/gatsby-theme-confluenza'"),(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},","),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token literal-property property"},"options"),(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",(0,s.mdx)("span",{parentName:"code",className:"token literal-property property"},"mdx"),(0,s.mdx)("span",{parentName:"code",className:"token operator"},":")," ",(0,s.mdx)("span",{parentName:"code",className:"token boolean"},"false"),"\n  ",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",(0,s.mdx)("span",{parentName:"code",className:"token punctuation"},"}")))),(0,s.mdx)("p",null,"Notice though that you still\nneed to make sure that ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"Mdx")," and ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"MdxFrontmatter")," schema types are created - so even in the case you turn\nsupport for MDX off, you still need to either use a dummy file, or update the GraphQL schema types in\nyour ",(0,s.mdx)("code",{parentName:"p",className:"language-text"},"gatsby-node.js"),"."),(0,s.mdx)("h2",{id:"emoji",style:{position:"relative"}},(0,s.mdx)("a",{parentName:"h2",href:"#emoji","aria-label":"emoji permalink",className:"anchor before"},(0,s.mdx)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"EMOJI"),(0,s.mdx)("p",null,"Confluenza MDX supports slack-style emoji: 🎉, 😻."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-users-using-mdx-mdx-a8281b550b572fff0d41.js.map