import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,f as t}from"./app-D__VP-01.js";const p={},o=t(`<p>ES6对数字的拓展主要包括以下几个方面：</p><ol><li>二进制和八进制表示法：ES6中引入了二进制和八进制的新表示法，分别使用<code>0b</code>和<code>0o</code>作为前缀。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> binary <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span> <span class="token comment">// 二进制表示，相当于十进制的10</span>
<span class="token keyword">const</span> octal <span class="token operator">=</span> <span class="token number">0o12</span><span class="token punctuation">;</span> <span class="token comment">// 八进制表示，相当于十进制的10</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>binary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>octal<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>Number.isFinite()</code>：用于判断一个值是否为有限的数值。与全局的<code>isFinite()</code>函数相比，<code>Number.isFinite()</code>不会将非数值的值转换为数值。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>Number.isInteger()</code>：用于判断一个值是否为整数。与全局的<code>isInteger()</code>函数相比，<code>Number.isInteger()</code>不会将非数值的值转换为数值。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">5.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>Number.parseInt()</code>：用于将字符串解析成整数。与全局的<code>parseInt()</code>函数相比，<code>Number.parseInt()</code>只能解析整数，也不会忽略字符串开头的空格。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;123.45&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：123</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">&#39;   123   &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><code>Number.parseFloat()</code>：用于将字符串解析成浮点数。与全局的<code>parseFloat()</code>函数相比，<code>Number.parseFloat()</code>不会忽略字符串开头的空格。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;3.14&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3.14</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">&#39;   3.14   &#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3.14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>安全整数范围：ES6引入了<code>Number.MIN_SAFE_INTEGER</code>和<code>Number.MAX_SAFE_INTEGER</code>两个常量，用于表示JavaScript中的安全整数范围。这些范围以<code>-2^53 + 1</code>和<code>2^53 - 1</code>为界。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MIN_SAFE_INTEGER</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：-9007199254740991</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_SAFE_INTEGER</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：9007199254740991</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li><code>Number.isNaN()</code>：用于判断一个值是否为NaN。与全局的<code>isNaN()</code>函数相比，<code>Number.isNaN()</code>严格判断，只有当值为NaN时才返回true。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li><code>Number.isSafeInteger()</code>：用于判断一个值是否为安全整数。与全局的<code>isSafeInteger()</code>函数相比，<code>Number.isSafeInteger()</code>不会将非数值的值转换为数值。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isSafeInteger</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isSafeInteger</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isSafeInteger</span><span class="token punctuation">(</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9"><li><code>Math.sign()</code>：用于判断一个数值的符号，返回1（正数）、-1（负数）、0（0）或NaN（非数值）。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：-1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：NaN</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10"><li><code>Math.trunc()</code>：用于去除一个数值的小数部分，返回整数部分。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3.14</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：-3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>指数运算符：ES2016引入了指数运算符 <code>**</code>，用于计算一个数的指数幂。例如：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","number.html.vue"]]),d=JSON.parse('{"path":"/js/es/number.html","title":"数值的扩展","lang":"zh-CN","frontmatter":{"title":"数值的扩展","icon":"number","category":"JavaScript","order":5,"description":"ES6对数字的拓展主要包括以下几个方面： 二进制和八进制表示法：ES6中引入了二进制和八进制的新表示法，分别使用0b和0o作为前缀。例如： Number.isFinite()：用于判断一个值是否为有限的数值。与全局的isFinite()函数相比，Number.isFinite()不会将非数值的值转换为数值。例如： Number.isInteger()：...","head":[["meta",{"property":"og:url","content":"https://github.com/blog/js/es/number.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"数值的扩展"}],["meta",{"property":"og:description","content":"ES6对数字的拓展主要包括以下几个方面： 二进制和八进制表示法：ES6中引入了二进制和八进制的新表示法，分别使用0b和0o作为前缀。例如： Number.isFinite()：用于判断一个值是否为有限的数值。与全局的isFinite()函数相比，Number.isFinite()不会将非数值的值转换为数值。例如： Number.isInteger()：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数值的扩展\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":2.31,"words":693},"filePathRelative":"js/es/number.md","localizedDate":"2024年6月23日","excerpt":"<p>ES6对数字的拓展主要包括以下几个方面：</p>\\n<ol>\\n<li>二进制和八进制表示法：ES6中引入了二进制和八进制的新表示法，分别使用<code>0b</code>和<code>0o</code>作为前缀。例如：</li>\\n</ol>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">const</span> binary <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0b1010</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 二进制表示，相当于十进制的10</span>\\n<span class=\\"token keyword\\">const</span> octal <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0o12</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 八进制表示，相当于十进制的10</span>\\n\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>binary<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：10</span>\\nconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>octal<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 输出：10</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,d as data};