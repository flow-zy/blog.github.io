import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as c,c as i,b as l,a as t,e as o,d,f as a}from"./app-BGAn4IFu.js";const p={},h=t("p",null,"在小程序中所有页面的路由全部由框架进行管理。",-1),s={id:"页面栈",tabindex:"-1"},m={class:"header-anchor",href:"#页面栈"},u=a("<p>框架以栈的形式维护了当前的所有页面。当发生路由切换的时候，页面栈的表现如下:</p><table><thead><tr><th>路由方式</th><th>页面栈表现</th></tr></thead><tbody><tr><td>初始化</td><td>新页面入栈</td></tr><tr><td>打开新页面</td><td>新页面入栈</td></tr><tr><td>页面重定向</td><td>当前页面出栈，新页面入栈</td></tr><tr><td>页面返回</td><td>页面不断出栈，直到目标返回页</td></tr><tr><td>Tab 切换</td><td>页面全部出栈，只留下新的 Tab 页面</td></tr><tr><td>重加载</td><td>页面全部出栈，只留下新的页面</td></tr></tbody></table><p>开发者可以使用 <code>getCurrentPages()</code> 函数获取当前页面栈。</p>",3),g={id:"路由方式",tabindex:"-1"},b={class:"header-anchor",href:"#路由方式"},_=a('<p>对于路由的触发方式以及页面生命周期函数如下:</p><p>| 路由方式 | 触发时机 | 路由前页面 | 路由后页面 | | ---------- | ------------------------------------------------------------------------------- | -------------------- | -------------- | ------------------ | | 初始化 | 小程序打开的第一个页面 | | onLoad, onShow | | 打开新页面 | 调用 API <code>wx.navigateTo</code><br>使用组件 <code>&lt;navigator open-type=&quot;navigateTo&quot;/&gt;</code> | onHide | onLoad, onShow | | 页面重定向 | 调用 API <code>wx.redirectTo</code><br>使用组件 <code>&lt;navigator open-type=&quot;redirectTo&quot;/&gt;</code> | onUnload | onLoad, onShow | | 页面返回 | 调用 API <code>wx.navigateBack</code><br>使用组件 <code>&lt;navigator open-type=&quot;navigateBack&quot;&gt;</code> | 用户按左上角返回按钮 | onUnload | onShow | | Tab 切换 | 调用 API <code>wx.switchTab</code><br>使用组件 <code>&lt;navigator open-type=&quot;switchTab&quot;/&gt;</code> | 用户切换 Tab | | 各种情况请参考下表 | | 重启动 | 调用 API <code>wx.reLaunch</code><br>使用组件 <code>&lt;navigator open-type=&quot;reLaunch&quot;/&gt;</code> | onUnload | onLoad, onShow |</p><p>Tab 切换对应的生命周期(以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例):</p><table><thead><tr><th>当前页面</th><th>路由后页面</th><th>触发的生命周期(按顺序)</th></tr></thead><tbody><tr><td>A</td><td>A</td><td>Nothing happened</td></tr><tr><td>A</td><td>B</td><td>A.onHide(), B.onLoad(), B.onShow()</td></tr><tr><td>A</td><td>B(再次打开)</td><td>A.onHide(), B.onShow()</td></tr><tr><td>C</td><td>A</td><td>C.onUnload(), A.onShow()</td></tr><tr><td>C</td><td>B</td><td>C.onUnload(), B.onLoad(), B.onShow()</td></tr><tr><td>D</td><td>B</td><td>D.onUnload(), C.onUnload(), B.onLoad(), B.onShow()</td></tr><tr><td>D(从转发进入)</td><td>A</td><td>D.onUnload(), A.onLoad(), A.onShow()</td></tr><tr><td>D(从转发进入)</td><td>B</td><td>D.onUnload(), B.onLoad(), B.onShow()</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li><code>navigateTo</code>, <code>redirectTo</code> 只能打开非 tabBar 页面。</li><li><code>switchTab</code> 只能打开 tabBar 页面。</li><li><code>reLaunch</code> 可以打开任意页面。</li><li>页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。</li><li>调用页面路由带的参数可以在目标页面的 <code>onLoad</code> 中获取。</li></ul></div>',5);function y(w,B){const e=n("Badge");return c(),i("div",null,[h,l(" more "),t("h2",s,[t("a",m,[t("span",null,[o("页面栈 "),d(e,{text:"重要",type:"error"})])])]),u,t("h2",g,[t("a",b,[t("span",null,[o("路由方式 "),d(e,{text:"重要",type:"error"})])])]),_])}const A=r(p,[["render",y],["__file","route.html.vue"]]),f=JSON.parse('{"path":"/mini-app/guide/service/route.html","title":"页面路由","lang":"zh-CN","frontmatter":{"title":"页面路由","icon":"router","category":"小程序","description":"在小程序中所有页面的路由全部由框架进行管理。","head":[["meta",{"property":"og:url","content":"https://github.com/newNotes/mini-app/guide/service/route.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"页面路由"}],["meta",{"property":"og:description","content":"在小程序中所有页面的路由全部由框架进行管理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面路由\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":2,"title":"页面栈","slug":"页面栈","link":"#页面栈","children":[]},{"level":2,"title":"路由方式","slug":"路由方式","link":"#路由方式","children":[]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":1.92,"words":576},"filePathRelative":"mini-app/guide/service/route.md","localizedDate":"2024年6月23日","excerpt":"<p>在小程序中所有页面的路由全部由框架进行管理。</p>\\n","autoDesc":true}');export{A as comp,f as data};
