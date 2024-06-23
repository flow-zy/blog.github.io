import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,b as o,a as n,e as s,f as p}from"./app-BfzwvKLN.js";const c={},l=n("p",null,"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。",-1),i=n("p",null,[s("JavaScript 用一个 "),n("code",null,"{...}"),s(" 表示一个对象，键值对以 "),n("code",null,"xxx: xxx"),s(" 形式申明，用 "),n("code",null,","),s(" 隔开。")],-1),r=p(`<p>JavaScript 的对象可用于描述现实世界中的某个对象。例如，为了描述 flow，我们可以用若干键值对来描述他:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">isHandsome</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1998</span><span class="token punctuation">,</span>
  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.76</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>最后一个键值对不需要在末尾加 <code>,</code>，如果加了，有的浏览器(如低版本的 IE)将报错。</p></div><p>上述对象申明了一个 <code>name</code> 属性，值是 <code>&#39;flow&#39;</code>，<code>birth</code> 属性，值是 <code>1998</code>，以及其他一些属性。最后，把这个对象赋值给变量 <code>flow</code> 后，就可以通过变量 <code>flow</code> 来获取 flow 的属性了:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>flow<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;flow&#39;</span>
flow<span class="token punctuation">.</span>birth<span class="token punctuation">;</span> <span class="token comment">// 1998</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问属性是通过 <code>.</code> 操作符完成的，但这要求属性名必须是一个有效的变量名。如果属性名包含特殊字符，就必须用 <code>&#39;&#39;</code> 括起来:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> mrshope <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mrs.Hope&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;middle-school&quot;</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mrshope</code> 的属性名 <code>middle-school</code> 不是一个有效的变量，就需要用 <code>&#39;&#39;</code> 括起来。访问这个属性也无法使用 <code>.</code> 操作符，必须用 <code>[&#39;xxx&#39;]</code> 来访问:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>mrshope<span class="token punctuation">[</span><span class="token string">&quot;middle-school&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;No.1 Middle School&#39;</span>
mrshope<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// &#39;Mrs.Hope&#39;</span>
mrshope<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// &#39;Mrs.Hope&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用 <code>mrshope[&#39;name&#39;]</code> 来访问 <code>mrshope</code> 的 <code>name</code> 属性，不过 <code>mrshope.name</code> 的写法更简洁。我们在编写 JavaScript 代码的时候，属性名尽量使用标准的变量名，这样就可以直接通过 <code>object.prop</code> 的形式访问一个属性了。</p><p>实际上 JavaScript 对象的所有属性都是字符串，不过属性对应的值可以是任意数据类型。</p><p>如果访问一个不存在的属性会返回什么呢? JavaScript 规定，访问不存在的属性不报错，而是返回 <code>undefined</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flow<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flow<span class="token punctuation">.</span>house<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 JavaScript 的对象是动态类型，您可以自由地给一个对象添加或删除属性:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

flow<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
flow<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">22</span><span class="token punctuation">;</span> <span class="token comment">// 新增一个 age 属性</span>
flow<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 22</span>
<span class="token keyword">delete</span> flow<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// 删除 age 属性</span>
flow<span class="token punctuation">.</span>age<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">delete</span> flow<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 删除 name 属性</span>
flow<span class="token punctuation">.</span>name<span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token keyword">delete</span> flow<span class="token punctuation">.</span>school<span class="token punctuation">;</span> <span class="token comment">// 删除一个不存在的 school 属性也不会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要检测 <code>flow</code> 是否拥有某一属性，可以用 <code>in</code> 操作符:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">birth</span><span class="token operator">:</span> <span class="token number">1998</span><span class="token punctuation">,</span>
  <span class="token literal-property property">school</span><span class="token operator">:</span> <span class="token string">&quot;No.1 Middle School&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.76</span><span class="token punctuation">,</span>
  <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token literal-property property">car</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token string">&quot;name&quot;</span> <span class="token keyword">in</span> flow<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token string">&quot;grade&quot;</span> <span class="token keyword">in</span> flow<span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过要小心，如果 <code>in</code> 判断一个属性存在，这个属性不一定是 <code>flow</code> 的，它可能是 <code>flow</code> 继承得到的:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;toString&quot;</span> <span class="token keyword">in</span> flow<span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 <code>toString</code> 定义在 object 对象中，而所有对象最终都会在原型链上指向 object，所以 <code>flow</code> 也拥有 <code>toString</code> 属性。</p><p>要判断一个属性是否是 <code>flow</code> 自身拥有的，而不是继承得到的，可以用 <code>hasOwnProperty()</code> 方法:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> flow <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;flow&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

flow<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
flow<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&quot;toString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function u(d,k){return e(),t("div",null,[l,i,o(" more "),r])}const b=a(c,[["render",u],["__file","object.html.vue"]]),g=JSON.parse('{"path":"/js/guide/object.html","title":"对象","lang":"zh-CN","frontmatter":{"title":"对象","icon":"object","category":"JavaScript","tag":["快速上手"],"description":"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。 JavaScript 用一个 {...} 表示一个对象，键值对以 xxx: xxx 形式申明，用 , 隔开。","head":[["meta",{"property":"og:url","content":"https://github.com/blog/js/guide/object.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"对象"}],["meta",{"property":"og:description","content":"JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。 JavaScript 用一个 {...} 表示一个对象，键值对以 xxx: xxx 形式申明，用 , 隔开。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对象\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":2.51,"words":753},"filePathRelative":"js/guide/object.md","localizedDate":"2024年6月23日","excerpt":"<p>JavaScript 的对象是一种无序的集合数据类型，它由若干键值对组成。</p>\\n<p>JavaScript 用一个 <code>{...}</code> 表示一个对象，键值对以 <code>xxx: xxx</code> 形式申明，用 <code>,</code> 隔开。</p>\\n","autoDesc":true}');export{b as comp,g as data};