import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as c,c as l,b as r,a as n,d as e,w as u,e as s,f as o}from"./app-BfzwvKLN.js";const d={},k=n("p",null,"类型断言(Type Assertion)可以用来手动指定一个值的类型。",-1),m=o(`<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token operator">&lt;</span>类型<span class="token operator">&gt;</span>值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code>值 <span class="token keyword">as</span> 类型<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 tsx 语法(React 的 jsx 语法的 ts 版)中必须用后一种。</p><h2 id="例子-将一个联合类型的变量指定为一个更加具体的类型" tabindex="-1"><a class="header-anchor" href="#例子-将一个联合类型的变量指定为一个更加具体的类型"><span>例子: 将一个联合类型的变量指定为一个更加具体的类型</span></a></h2>`,6),g=n("strong",null,"只能访问此联合类型的所有类型里共有的属性或方法",-1),b=o(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,22): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>
<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型的属性或方法，比如:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>something<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> something<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,19): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>
<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
<span class="token comment">// index.ts(3,26): error TS2339: Property &#39;length&#39; does not exist on type &#39;string | number&#39;.</span>
<span class="token comment">//   Property &#39;length&#39; does not exist on type &#39;number&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，获取 <code>something.length</code> 的时候会报错。</p><p>此时可以使用类型断言，将 <code>something</code> 断言成 <code>string</code>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">getLength</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>something<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>something<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> something<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型断言的用法如上，在需要断言的变量前加上 <code>&lt;Type&gt;</code> 即可。</p><p><strong>类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的</strong>:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">toBoolean</span><span class="token punctuation">(</span>something<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span>something<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.ts(2,10): error TS2352: Type &#39;string | number&#39; cannot be converted to type &#39;boolean&#39;.</span>
<span class="token comment">//   Type &#39;number&#39; is not comparable to type &#39;boolean&#39;.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2>`,10),v={href:"https://basarat.gitbooks.io/typescript/content/docs/types/type-assertion.html",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B(type-guards-and-differentiating-types)",target:"_blank",rel:"noopener noreferrer"};function f(_,E){const p=a("RouteLink"),t=a("ExternalLinkIcon");return c(),l("div",null,[k,r(" more "),m,n("p",null,[e(p,{to:"/typescript/basics/union-types.html#%E8%AE%BF%E9%97%AE%E8%81%94%E5%90%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E6%88%96%E6%96%B9%E6%B3%95"},{default:u(()=>[s("之前提到过")]),_:1}),s("，当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们"),g,s(":")]),b,n("ul",null,[n("li",null,[n("a",v,[s("TypeScript Deep Dive / Type Assertion"),e(t)])]),n("li",null,[n("a",h,[s("Advanced Types # Type Guards and Differentiating Types"),e(t)]),s("("),n("a",y,[s("中文版"),e(t)]),s(")")])])])}const T=i(d,[["render",f],["__file","type-assertion.html.vue"]]),B=JSON.parse('{"path":"/typescript/basics/type-assertion.html","title":"类型断言","lang":"zh-CN","frontmatter":{"title":"类型断言","icon":"boolean","category":"TypeScript","description":"类型断言(Type Assertion)可以用来手动指定一个值的类型。","head":[["meta",{"property":"og:url","content":"https://github.com/blog/typescript/basics/type-assertion.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"类型断言"}],["meta",{"property":"og:description","content":"类型断言(Type Assertion)可以用来手动指定一个值的类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类型断言\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"例子: 将一个联合类型的变量指定为一个更加具体的类型","slug":"例子-将一个联合类型的变量指定为一个更加具体的类型","link":"#例子-将一个联合类型的变量指定为一个更加具体的类型","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"typescript/basics/type-assertion.md","localizedDate":"2024年6月23日","excerpt":"<p>类型断言(Type Assertion)可以用来手动指定一个值的类型。</p>\\n","autoDesc":true}');export{T as comp,B as data};