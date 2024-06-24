import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,b as i,a as n,e as s,d as t,f as l}from"./app-D__VP-01.js";const u={},r=n("p",null,"数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。",-1),d=n("p",null,"元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。",-1),k=l(`<h2 id="简单的例子" tabindex="-1"><a class="header-anchor" href="#简单的例子"><span>简单的例子</span></a></h2><p>定义一对值分别为 <code>string</code> 和 <code>number</code> 的元组:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当赋值或访问一个已知索引的元素时，会得到正确的类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>

tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以只赋值其中一项:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Property &#39;1&#39; is missing in type &#39;[string]&#39; but required in type &#39;[string, number]&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="越界的元素" tabindex="-1"><a class="header-anchor" href="#越界的元素"><span>越界的元素</span></a></h2><p>当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;male&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Argument of type &#39;true&#39; is not assignable to parameter of type &#39;string | number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,14),m={href:"http://www.typescriptlang.org/docs/handbook/basic-types.html#tuple",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#%E5%85%83%E7%BB%84-tuple",target:"_blank",rel:"noopener noreferrer"};function v(g,h){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,d,i(" more "),k,n("ul",null,[n("li",null,[n("a",m,[s("Basic Types # Tuple"),t(a)]),s("("),n("a",b,[s("中文版"),t(a)]),s(")")])])])}const f=e(u,[["render",v],["__file","tuple.html.vue"]]),T=JSON.parse('{"path":"/typescript/advanced/tuple.html","title":"元组","lang":"zh-CN","frontmatter":{"title":"元组","icon":"list","category":"TypeScript","description":"数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。 元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。","head":[["meta",{"property":"og:url","content":"https://github.com/blog/typescript/advanced/tuple.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"元组"}],["meta",{"property":"og:description","content":"数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。 元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"元组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":2,"title":"简单的例子","slug":"简单的例子","link":"#简单的例子","children":[]},{"level":2,"title":"越界的元素","slug":"越界的元素","link":"#越界的元素","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"typescript/advanced/tuple.md","localizedDate":"2024年6月23日","excerpt":"<p>数组合并了相同类型的对象，而元组(Tuple)合并了不同类型的对象。</p>\\n<p>元组起源于函数编程语言(如 F#)，这些语言中会频繁使用元组。</p>\\n","autoDesc":true}');export{f as comp,T as data};