import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as l,d as c,w as i,f as p,a as n,e as s}from"./app-BGAn4IFu.js";const u={},d=p('<h3 id="元素特性" tabindex="-1"><a class="header-anchor" href="#元素特性"><span>元素特性</span></a></h3><ul><li><p>一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。</p></li><li><p>内联元素的 <code>width</code> <code>height</code> 与内容一致。您无法设置内联元素的 <code>width</code> <code>height</code>。</p></li><li><p>如果您想控制内联元素的尺寸，您需要为元素设置 <code>display: block;</code> 或 <code>display: inline-block</code>。<code>inline-block</code> 混合了 <code>inline</code> 和 <code>block</code> 的特性。</p></li></ul><h3 id="摆放特性" tabindex="-1"><a class="header-anchor" href="#摆放特性"><span>摆放特性</span></a></h3><p>正常布局流(在布局介绍里提到过)是一套在浏览器视口内放置、组织元素的系统。默认的，块级元素按照基于其父元素的书写顺序(默认值: <code>horizontal-tb</code>)的块流动方向(block flow direction)放置。</p><p>每个块级元素会在上一个元素下面另起一行，它们会被设置好的 <code>margin</code> 分隔。在英语，或者其他水平书写、自上而下模式里，块级元素是垂直组织的。</p><p>内联元素的表现有所不同: 它们不会另起一行；只要在其父级块级元素的宽度内有足够的空间，它们与其他内联元素、相邻的文本内容(或者被包裹的)被安排在同一行。如果空间不够，溢出的文本或元素将移到新的一行。</p><p>如果两个相邻的元素都设置了 <code>margin</code> 并且两个 <code>margin</code> 有重叠，那么更大的设置会被保留，小的则会消失。这被称为外边距叠加。</p>',7),r=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("h1")]),n("span",{class:"token punctuation"},">")]),s("fronted document flow"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("h1")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  I am a fronted block level element. My adjacent block level elements sit on new
  lines below me.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
  inline elements `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("like this one"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(" and "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("this one"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(` sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements will
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("wrap onto a new line if possible (like this one containing text)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`,
  or just go on to a new line if not, much like this image will do:
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("img")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://mdn.mozillademos.org/files/13360/long.jpg"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("p")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},"p"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 84"),n("span",{class:"token punctuation"},","),s(" 104"),n("span",{class:"token punctuation"},","),s(" 0.3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 2px solid "),n("span",{class:"token function"},"rgb"),n("span",{class:"token punctuation"},"("),s("255"),n("span",{class:"token punctuation"},","),s(" 84"),n("span",{class:"token punctuation"},","),s(" 104"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},"span"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" white"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid black"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function m(h,g){const a=t("CodeDemo");return o(),l("div",null,[d,c(a,{id:"code-demo-35",type:"normal",title:"%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E4%BE%8B%E5%AD%90",code:"eJxtU01v2zAM/SuEgQEtathJsw5DlvXQ2w7DjrvkIluMrUQfhiTXyYr+95GSmy7NLv6gyPce+aiXoo9GF+ti0y8fd97ZiBKka0eDNsJOu2lT08nWbu1moBfADxAGBLzlNtq1B9D4jBpQI5dV8PMEQu5Fyxj/SQgQVARnweLEkFpZDNAgsYHBiqhq5jpTPp1A4k6MOsKEEAZhYblYfAK3g9gjTErGnn/c6GEQnllnphKElVxEURABotCaEemTk9teaQktd8Kyf1EoOsqZIbm2R9X1EdRckFPhjnikVLaDO4ZrnJfoc1WdK667+J1VBCSJIo3ulDCN8J2yoYInbMUYkDvJMaLTWgyBeMq5CQa6QLgcgE3V/6CWYB154GJ/LUhZHvy7KRue7KNWByRUbtjipk6xNIl8/PEkO8lwrCQIg8nONGF+EX2PPvtw3omIx0jCJJI+lUykwRAuQbbUwTUcefOMnteRZ/5R+KSyq1nh5MVAGNHRltKCZTnEMrgQVKMRbi5aTJ4KZRmYdd3OnZWM6DzsxxChc7yuV5DUXAlmbHuKvEEqIzq2RGu6R+skS5kOgm+/b+myxSGs69pIWxn3h5KERONC5XxX75TGUC9Xqy+LWjvbVfuh2xZQk1nZuaIs2hDosg7wktZOtIfOu9HKNfiuETf3Dw8lfP1c0vWgx6Ja3X57X8813A9HCE4rydkXyTlv3uk1RYZjiuQtOgdeeXvS/bvin3oV8YJteWZrNCXm8uL1L6GAhjE="},{default:i(()=>[r,k]),_:1})])}const y=e(u,[["render",m],["__file","flow.html.vue"]]),f=JSON.parse('{"path":"/css/layout/flow.html","title":"正常布局流","lang":"zh-CN","frontmatter":{"title":"正常布局流","icon":"flow","order":2,"category":"CSS","description":"元素特性 一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。 内联元素的 width height 与内容一致。您无法设置内联元素的 width height。 如果您想控制内联元素的尺寸，您需要为元素设置 display: block; 或 display: inline-block。inline-block 混合了 inline...","head":[["meta",{"property":"og:url","content":"https://github.com/newNotes/css/layout/flow.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"正常布局流"}],["meta",{"property":"og:description","content":"元素特性 一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。 内联元素的 width height 与内容一致。您无法设置内联元素的 width height。 如果您想控制内联元素的尺寸，您需要为元素设置 display: block; 或 display: inline-block。inline-block 混合了 inline..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"正常布局流\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":3,"title":"元素特性","slug":"元素特性","link":"#元素特性","children":[]},{"level":3,"title":"摆放特性","slug":"摆放特性","link":"#摆放特性","children":[]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":1.89,"words":567},"filePathRelative":"css/layout/flow.md","localizedDate":"2024年6月23日","excerpt":"<h3>元素特性</h3>\\n<ul>\\n<li>\\n<p>一个块级元素的内容宽度是其父元素的 100%，其高度与其内容高度一致。</p>\\n</li>\\n<li>\\n<p>内联元素的 <code>width</code> <code>height</code> 与内容一致。您无法设置内联元素的 <code>width</code> <code>height</code>。</p>\\n</li>\\n<li>\\n<p>如果您想控制内联元素的尺寸，您需要为元素设置 <code>display: block;</code> 或 <code>display: inline-block</code>。<code>inline-block</code> 混合了 <code>inline</code> 和 <code>block</code> 的特性。</p>\\n</li>\\n</ul>","autoDesc":true}');export{y as comp,f as data};