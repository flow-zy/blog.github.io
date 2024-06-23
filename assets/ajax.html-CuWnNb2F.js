import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,b as p,a as n,e as a,f as o}from"./app-BGAn4IFu.js";const c={},i=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"章节过时"),n("p",null,[a("目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 "),n("code",null,"axios"),a(" 来进行请求。")])],-1),l=o(`<p>用 JavaScript 写 Ajax 前面已经介绍过了，主要问题就是不同浏览器需要写不同代码，并且状态和错误处理写起来很麻烦。</p><p>用 jQuery 的相关对象来处理 AJAX，不但不需要考虑浏览器问题，代码也能大大简化。</p><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax"><span>Ajax</span></a></h2><p>jQuery 在全局对象 jQuery (也就是 <code>$</code>) 绑定了 <code>ajax()</code> 函数，可以处理 Ajax 请求。<code>ajax(url, settings)</code> 函数需要接收一个 URL 和一个可选的 settings 对象，常用的选项如下:</p><ul><li><p>async: 是否异步执行 Ajax 请求，默认为 <code>true</code>；</p></li><li><p>method: 发送的 Method，缺省为 <code>&#39;GET&#39;</code>，可指定为 <code>&#39;POST&#39;</code> 、<code>&#39;PUT&#39;</code> 等；</p></li><li><p>contentType: 发送 POST 请求的格式，默认值为 <code>&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</code>，也可以指定为 <code>text/plain</code>、<code>application/json</code>；</p></li><li><p>data: 发送的数据，可以是字符串、数组或 object。如果是 <code>GET</code> 请求，data 将被转换成 <code>query</code> 附加到 URL 上，如果是 <code>POST</code> 请求，根据 <code>contentType</code> 把 <code>data</code> 序列化成合适的格式；</p></li><li><p>headers: 发送的额外的 HTTP 头，必须是一个 object；</p></li><li><p>dataType: 接收的数据格式，可以指定为 <code>&#39;html&#39;</code>、<code>&#39;xml&#39;</code>、<code>&#39;json&#39;</code>、<code>&#39;text&#39;</code> 等，缺省情况下根据响应的 <code>Content-Type</code> 猜测。</p></li></ul><p>下面的例子发送一个 <code>GET</code> 请求，并返回一个 JSON 格式的数据:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jqxhr <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;/api/categories&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 请求已经发送了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，如何用回调函数处理返回的数据和出错时的响应呢?</p><p>还记得 Promise 对象吗? jQuery 的 <code>jqXHR</code> 对象类似一个 Promise 对象，我们可以用链式写法来处理各种回调:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ajaxLog</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> txt <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  txt<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span>txt<span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#test-response-text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> jqxhr <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;/api/categories&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">ajaxLog</span><span class="token punctuation">(</span><span class="token string">&quot;成功, 收到的数据: &quot;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">xhr<span class="token punctuation">,</span> status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">ajaxLog</span><span class="token punctuation">(</span><span class="token string">&quot;失败: &quot;</span> <span class="token operator">+</span> xhr<span class="token punctuation">.</span>status <span class="token operator">+</span> <span class="token string">&quot;, 原因: &quot;</span> <span class="token operator">+</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">always</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">ajaxLog</span><span class="token punctuation">(</span><span class="token string">&quot;请求完成: 无论成功或失败都会调用&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>get</span></a></h2><p>对常用的 Ajax 操作，jQuery 提供了一些辅助方法。由于 GET 请求最常见，所以 jQuery 提供了 <code>get()</code> 方法，可以这么写:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jqxhr <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/path/to/resource&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Bob Lee&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">check</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个参数如果是 object，jQuery 自动把它变成 <code>query string</code> 然后加到 URL 后面，实际的 URL 是:</p><p><code>/path/to/resource?name=Bob%20Lee&amp;check=1</code></p><p>这样我们就不用关心如何用 URL 编码并构造一个 <code>query string</code> 了。</p><h2 id="post" tabindex="-1"><a class="header-anchor" href="#post"><span>post</span></a></h2><p><code>post()</code> 和 <code>get()</code> 类似，但是传入的第二个参数默认被序列化为 <code>application/x-www-form-urlencoded</code>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jqxhr <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&quot;/path/to/resource&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Bob Lee&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">check</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际构造的数据 <code>name=Bob%20Lee&amp;check=1</code> 作为 POST 的 body 被发送。</p><h2 id="getjson" tabindex="-1"><a class="header-anchor" href="#getjson"><span>getJSON</span></a></h2><p>由于 JSON 用得越来越普遍，所以 jQuery 也提供了 <code>getJSON()</code> 方法来快速通过 GET 获取一个 JSON 对象:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> jqxhr <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">&quot;/path/to/resource&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Bob Lee&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">check</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// data已经被解析为JSON对象了</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全限制" tabindex="-1"><a class="header-anchor" href="#安全限制"><span>安全限制</span></a></h2><p>jQuery 的 Ajax 完全封装的是 JavaScript 的 Ajax 操作，所以它的安全限制和前面讲的用 JavaScript 写 Ajax 完全一样。</p><p>如果需要使用 JSONP，可以在 <code>ajax()</code> 中设置 <code>jsonp: &#39;callback&#39;</code>，让 jQuery 实现 JSONP 跨域加载数据。</p><p>关于跨域的设置请参考浏览器 Ajax 一节中 CORS 的设置。</p>`,27);function u(r,d){return t(),e("div",null,[i,p(" more "),l])}const m=s(c,[["render",u],["__file","ajax.html.vue"]]),j=JSON.parse('{"path":"/jquery/ajax.html","title":"AJAX","lang":"zh-CN","frontmatter":{"title":"AJAX","icon":"ajax","category":"jQuery","description":"章节过时 目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 axios 来进行请求。","head":[["meta",{"property":"og:url","content":"https://github.com/newNotes/jquery/ajax.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"AJAX"}],["meta",{"property":"og:description","content":"章节过时 目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 axios 来进行请求。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AJAX\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":2,"title":"Ajax","slug":"ajax","link":"#ajax","children":[]},{"level":2,"title":"get","slug":"get","link":"#get","children":[]},{"level":2,"title":"post","slug":"post","link":"#post","children":[]},{"level":2,"title":"getJSON","slug":"getjson","link":"#getjson","children":[]},{"level":2,"title":"安全限制","slug":"安全限制","link":"#安全限制","children":[]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":2.73,"words":819},"filePathRelative":"jquery/ajax.md","localizedDate":"2024年6月23日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">章节过时</p>\\n<p>目前，一套代码已经可以在多个浏览器上运行良好了，所以 jQuery 的意义并不大。在 Node.js 中，我们使用 <code>axios</code> 来进行请求。</p>\\n</div>\\n","autoDesc":true}');export{m as comp,j as data};
