import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-BGAn4IFu.js";const p={},o=t(`<ol><li><p>展开运算符（Spread Operator）： 展开运算符（<code>...</code>）可以将可迭代对象（如数组或字符串）展开为单独的元素，或将多个元素合并为数组。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：[1, 2, 3, 4, 5, 6]</span>

<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> chars <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>str<span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：[&#39;H&#39;, &#39;e&#39;, &#39;l&#39;, &#39;l&#39;, &#39;o&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>可选链运算符（Optional Chaining Operator）： 可选链运算符（<code>?.</code>）用于安全地访问嵌套的属性或调用嵌套的函数，避免出现未定义或空值时的错误。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">&#39;New York&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>address<span class="token operator">?.</span>city<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：New York</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>address<span class="token operator">?.</span>country<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>空值合并运算符（Nullish Coalescing Operator）： 空值合并运算符（<code>??</code>）用于确定一个值为<code>null</code>或<code>undefined</code>时使用默认值。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> defaultName <span class="token operator">=</span> name <span class="token operator">??</span> <span class="token string">&#39;Unknown&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>defaultName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：Unknown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>BigInt数据类型和运算符： ES6引入了BigInt数据类型，可以表示任意精度的整数。此外，BigInt有自己的运算符，如<code>+</code>、<code>-</code>、<code>*</code>、<code>**</code>等。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> bigInt1 <span class="token operator">=</span> <span class="token function">BigInt</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1n</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bigInt2 <span class="token operator">=</span> <span class="token number">123n</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sum <span class="token operator">=</span> bigInt1 <span class="token operator">+</span> bigInt2<span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：9007199254740993n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1),e=[o];function c(l,i){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","operator.html.vue"]]),d=JSON.parse(`{"path":"/js/es/operator.html","title":"运算符的拓展","lang":"zh-CN","frontmatter":{"title":"运算符的拓展","icon":"operator","category":"Javascript","order":10,"description":"展开运算符（Spread Operator）： 展开运算符（...）可以将可迭代对象（如数组或字符串）展开为单独的元素，或将多个元素合并为数组。 可选链运算符（Optional Chaining Operator）： 可选链运算符（?.）用于安全地访问嵌套的属性或调用嵌套的函数，避免出现未定义或空值时的错误。 空值合并运算符（Nullish Coale...","head":[["meta",{"property":"og:url","content":"https://github.com/newNotes/js/es/operator.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"运算符的拓展"}],["meta",{"property":"og:description","content":"展开运算符（Spread Operator）： 展开运算符（...）可以将可迭代对象（如数组或字符串）展开为单独的元素，或将多个元素合并为数组。 可选链运算符（Optional Chaining Operator）： 可选链运算符（?.）用于安全地访问嵌套的属性或调用嵌套的函数，避免出现未定义或空值时的错误。 空值合并运算符（Nullish Coale..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运算符的拓展\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":0.95,"words":285},"filePathRelative":"js/es/operator.md","localizedDate":"2024年6月23日","excerpt":"<ol>\\n<li>\\n<p>展开运算符（Spread Operator）：\\n展开运算符（<code>...</code>）可以将可迭代对象（如数组或字符串）展开为单独的元素，或将多个元素合并为数组。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> arr1 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> arr2 <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span>arr1<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>arr2<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：[1, 2, 3, 4, 5, 6]</span>\\n\\n<span class=\\"token keyword\\">const</span> str <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'Hello'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> chars <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">...</span>str<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>chars<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：['H', 'e', 'l', 'l', 'o']</span>\\n</code></pre></div></li>\\n<li>\\n<p>可选链运算符（Optional Chaining Operator）：\\n可选链运算符（<code>?.</code>）用于安全地访问嵌套的属性或调用嵌套的函数，避免出现未定义或空值时的错误。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'Alice'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">address</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">city</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'New York'</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">.</span>address<span class=\\"token operator\\">?.</span>city<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：New York</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">.</span>address<span class=\\"token operator\\">?.</span>country<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：undefined</span>\\n</code></pre></div></li>\\n<li>\\n<p>空值合并运算符（Nullish Coalescing Operator）：\\n空值合并运算符（<code>??</code>）用于确定一个值为<code>null</code>或<code>undefined</code>时使用默认值。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> defaultName <span class=\\"token operator\\">=</span> name <span class=\\"token operator\\">??</span> <span class=\\"token string\\">'Unknown'</span><span class=\\"token punctuation\\">;</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>defaultName<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：Unknown</span>\\n</code></pre></div></li>\\n<li>\\n<p>BigInt数据类型和运算符：\\nES6引入了BigInt数据类型，可以表示任意精度的整数。此外，BigInt有自己的运算符，如<code>+</code>、<code>-</code>、<code>*</code>、<code>**</code>等。</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> bigInt1 <span class=\\"token operator\\">=</span> <span class=\\"token function\\">BigInt</span><span class=\\"token punctuation\\">(</span>Number<span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">MAX_SAFE_INTEGER</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1n</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> bigInt2 <span class=\\"token operator\\">=</span> <span class=\\"token number\\">123n</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">const</span> sum <span class=\\"token operator\\">=</span> bigInt1 <span class=\\"token operator\\">+</span> bigInt2<span class=\\"token punctuation\\">;</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>sum<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：9007199254740993n</span>\\n</code></pre></div></li>\\n</ol>","autoDesc":true}`);export{k as comp,d as data};
