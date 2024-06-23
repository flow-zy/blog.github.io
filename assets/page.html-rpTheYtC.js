import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,b as s,a as t,e as p,f as o}from"./app-BGAn4IFu.js";const i={},l=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"提示"),t("p",null,[t("code",null,"page.ts"),p(" 用于小程序页面渲染。")])],-1),c=o(`<h2 id="插件的引入" tabindex="-1"><a class="header-anchor" href="#插件的引入"><span>插件的引入</span></a></h2><p>首先在 <code>ts</code> 文件头部引入 <code>page</code> 与 <code>@mptool/enhance</code>。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> $Page <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;\`@mptool/enhance&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> xxx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path/to/page/ts&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><h3 id="resolvepage" tabindex="-1"><a class="header-anchor" href="#resolvepage"><span>resolvePage()</span></a></h3><p><code>(option: PageQuery, page?: PageData, setGlobal = true) =&gt; PageData | null</code></p><p><strong>简介:</strong></p><ul><li><p>性质: 同步函数</p></li><li><p>描述: 预处理 <code>page</code> 数据写入全局数据</p></li><li><p>用法: 在页面 <code>onNavigate</code> 时调用，</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>setGlobal</td><td>是否将处理后的数据写入到全局数据中</td></tr></tbody></table></li><li><p>返回: 处理后的 page 配置</p></li></ul><p><strong>案例:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onNavigate</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">resolvePage</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setpage" tabindex="-1"><a class="header-anchor" href="#setpage"><span>setPage()</span></a></h3><p><code>({ option, ctx, handle }: SetPageOption, page?: ComponentData[] | undefined, preload?: boolean) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置本地界面数据，如果传入 <code>page</code> 参数，则根据 <code>handle</code> 的值决定是否在 <code>setData</code> 前处理 <code>page</code>。</p><p>如果没有传入 <code>page</code>，则使用 <code>PageOption.data.page</code>。之后根据 <code>preload</code> 的值决定是否对页面链接进行预加载。</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>object</td><td>配置对象</td></tr><tr><td>page</td><td>页面数据</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table><p><code>object</code> 参数:</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面传参</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>handle [default:false]</td><td>页面是否已经被处理</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span>option<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> option<span class="token punctuation">,</span> ctx<span class="token operator">:</span> <span class="token keyword">this</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setonlinepage" tabindex="-1"><a class="header-anchor" href="#setonlinepage"><span>setOnlinePage()</span></a></h3><p><code>(option: PageOption, ctx: PageInstanceWithPage, preload = true) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 设置在线界面数据</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>option</td><td>页面跳转参数</td></tr><tr><td>ctx</td><td>页面指针</td></tr><tr><td>preload [default:true]</td><td>是否预加载子页面</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span>res<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setOnlinePage</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="popnotice" tabindex="-1"><a class="header-anchor" href="#popnotice"><span>popNotice()</span></a></h3><p><code>(id: string) =&gt; void</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 弹出通知</p></li><li><p>用法: 在页面 <code>onLoad</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>id</td><td>当前界面的标识符</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">popNotice</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcolor" tabindex="-1"><a class="header-anchor" href="#getcolor"><span>getColor()</span></a></h3><p><code>(grey?: boolean) =&gt; Colors</code></p><p><strong>简介:</strong></p><ul><li><p>描述: 获得页面背景相关颜色</p></li><li><p>用法: 在页面 <code>onShow</code> 时调用</p></li><li><p>性质: 同步函数</p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>grey [default:false]</td><td>页面是否为灰色背景</td></tr></tbody></table></li></ul><p><strong>案例:</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      color<span class="token operator">:</span> <span class="token function">getColor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>page<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>grey<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function d(r,u){return a(),e("div",null,[l,s(" more "),c])}const k=n(i,[["render",d],["__file","page.html.vue"]]),m=JSON.parse('{"path":"/mini-app/framework/page.html","title":"Page 插件","lang":"zh-CN","frontmatter":{"title":"Page 插件","icon":"page","category":"小程序","description":"提示 page.ts 用于小程序页面渲染。","head":[["meta",{"property":"og:url","content":"https://github.com/newNotes/mini-app/framework/page.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"Page 插件"}],["meta",{"property":"og:description","content":"提示 page.ts 用于小程序页面渲染。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page 插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":2,"title":"插件的引入","slug":"插件的引入","link":"#插件的引入","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"resolvePage()","slug":"resolvepage","link":"#resolvepage","children":[]},{"level":3,"title":"setPage()","slug":"setpage","link":"#setpage","children":[]},{"level":3,"title":"setOnlinePage()","slug":"setonlinepage","link":"#setonlinepage","children":[]},{"level":3,"title":"popNotice()","slug":"popnotice","link":"#popnotice","children":[]},{"level":3,"title":"getColor()","slug":"getcolor","link":"#getcolor","children":[]}]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":1.58,"words":475},"filePathRelative":"mini-app/framework/page.md","localizedDate":"2024年6月23日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p><code>page.ts</code> 用于小程序页面渲染。</p>\\n</div>\\n","autoDesc":true}');export{k as comp,m as data};
