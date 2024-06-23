import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,f as s}from"./app-BGAn4IFu.js";const e={},p=s(`<h2 id="wx-getsysteminfo-object-object" tabindex="-1"><a class="header-anchor" href="#wx-getsysteminfo-object-object"><span>wx.getSystemInfo(Object object)</span></a></h2><p>获取系统信息</p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><p>Object object</p><table><thead><tr><th>属性</th><th>类型</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td>success</td><td>function</td><td>否</td><td>接口调用成功的回调函数</td></tr><tr><td>fail</td><td>function</td><td>否</td><td>接口调用失败的回调函数</td></tr><tr><td>complete</td><td>function</td><td>否</td><td>接口调用结束的回调函数(调用成功、失败都会执行)</td></tr></tbody></table><h3 id="object-success-回调函数" tabindex="-1"><a class="header-anchor" href="#object-success-回调函数"><span>object.success 回调函数</span></a></h3><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th><th>最低版本</th></tr></thead><tbody><tr><td>brand</td><td>string</td><td>设备品牌</td><td>1.5.0</td></tr><tr><td>model</td><td>string</td><td>设备型号</td><td></td></tr><tr><td>pixelRatio</td><td>number</td><td>设备像素比</td><td></td></tr><tr><td>screenWidth</td><td>number</td><td>屏幕宽度，单位 px</td><td>1.1.0</td></tr><tr><td>screenHeight</td><td>number</td><td>屏幕高度，单位 px</td><td>1.1.0</td></tr><tr><td>windowWidth</td><td>number</td><td>可使用窗口宽度，单位 px</td><td></td></tr><tr><td>windowHeight</td><td>number</td><td>可使用窗口高度，单位 px</td><td></td></tr><tr><td>statusBarHeight</td><td>number</td><td>状态栏的高度，单位 px</td><td>1.9.0</td></tr><tr><td>language</td><td>string</td><td>微信设置的语言</td><td></td></tr><tr><td>version</td><td>string</td><td>微信版本号</td><td></td></tr><tr><td>system</td><td>string</td><td>操作系统及版本</td><td></td></tr><tr><td>platform</td><td>string</td><td>客户端平台</td><td></td></tr><tr><td>fontSizeSetting</td><td>number</td><td>用户字体大小(单位 px)。以微信客户端「我-设置-通用-字体大小」中的设置为准</td><td>1.5.0</td></tr><tr><td>SDKVersion</td><td>string</td><td>客户端基础库版本</td><td>1.1.0</td></tr><tr><td>benchmarkLevel</td><td>number</td><td>设备性能等级(仅 Android 小游戏)。<br>取值为: -2 或 0(该设备无法运行小游戏)，-1(性能未知)，&gt;=1(设备性能值，该值越高，设备性能越好，目前最高不到 50)</td><td>1.8.0</td></tr><tr><td>albumAuthorized</td><td>boolean</td><td>允许微信使用相册的开关(仅 iOS 有效)</td><td>2.6.0</td></tr><tr><td>cameraAuthorized</td><td>boolean</td><td>允许微信使用摄像头的开关</td><td>2.6.0</td></tr><tr><td>locationAuthorized</td><td>boolean</td><td>允许微信使用定位的开关</td><td>2.6.0</td></tr><tr><td>microphoneAuthorized</td><td>boolean</td><td>允许微信使用麦克风的开关</td><td>2.6.0</td></tr><tr><td>notificationAuthorized</td><td>boolean</td><td>允许微信通知的开关</td><td>2.6.0</td></tr><tr><td>notificationAlertAuthorized</td><td>boolean</td><td>允许微信通知带有提醒的开关(仅 iOS 有效)</td><td>2.6.0</td></tr><tr><td>notificationBadgeAuthorized</td><td>boolean</td><td>允许微信通知带有标记的开关(仅 iOS 有效)</td><td>2.6.0</td></tr><tr><td>notificationSoundAuthorized</td><td>boolean</td><td>允许微信通知带有声音的开关(仅 iOS 有效)</td><td>2.6.0</td></tr><tr><td>bluetoothEnabled</td><td>boolean</td><td>蓝牙的系统开关</td><td>2.6.0</td></tr><tr><td>locationEnabled</td><td>boolean</td><td>地理位置的系统开关</td><td>2.6.0</td></tr><tr><td>wifiEnabled</td><td>boolean</td><td>Wi-Fi 的系统开关</td><td>2.6.0</td></tr><tr><td>safeArea</td><td>Object</td><td>在竖屏正方向下的安全区域</td><td>2.7.0</td></tr></tbody></table><h4 id="res-safearea-的结构" tabindex="-1"><a class="header-anchor" href="#res-safearea-的结构"><span>res.safeArea 的结构</span></a></h4><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>number</td><td>安全区域左上角横坐标</td></tr><tr><td>right</td><td>number</td><td>安全区域右下角横坐标</td></tr><tr><td>top</td><td>number</td><td>安全区域左上角纵坐标</td></tr><tr><td>bottom</td><td>number</td><td>安全区域右下角纵坐标</td></tr><tr><td>width</td><td>number</td><td>安全区域的宽度，单位逻辑像素</td></tr><tr><td>height</td><td>number</td><td>安全区域的高度，单位逻辑像素</td></tr></tbody></table><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>pixelRatio<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-wx-getsysteminfosync" tabindex="-1"><a class="header-anchor" href="#object-wx-getsysteminfosync"><span>Object wx.getSystemInfoSync()</span></a></h2><p><code>wx.getSystemInfo</code> 的同步版本</p><p>直接返回异步版本的 <code>res</code></p><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>pixelRatio<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>platform<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Do something when catch error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updatemanager-wx-getupdatemanager" tabindex="-1"><a class="header-anchor" href="#updatemanager-wx-getupdatemanager"><span>UpdateManager wx.getUpdateManager()</span></a></h2><p>获取全局唯一的版本更新管理器，用于管理小程序更新。关于小程序的更新机制，可以查看运行机制文档。</p><p>返回值: UpdateManager</p><h2 id="updatemanager" tabindex="-1"><a class="header-anchor" href="#updatemanager"><span>UpdateManager</span></a></h2><p>更新管理器对象，用来管理更新，可通过 <code>wx.getUpdateManager</code> 接口获取实例。UpdateManager 有多个方法</p><h3 id="updatemanager-applyupdate" tabindex="-1"><a class="header-anchor" href="#updatemanager-applyupdate"><span>UpdateManager.applyUpdate()</span></a></h3><p>强制小程序重启并使用新版本。在小程序新版本下载完成后(即收到 <code>onUpdateReady</code> 回调)调用。</p><h3 id="updatemanager-oncheckforupdate-function-callback" tabindex="-1"><a class="header-anchor" href="#updatemanager-oncheckforupdate-function-callback"><span>UpdateManager.onCheckForUpdate(function callback)</span></a></h3><p>监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。</p><p>Function callback</p><p>向微信后台请求检查更新结果事件的回调函数</p><p>参数</p><p>Object res</p><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>hasUpdate</td><td>boolean</td><td>是否有新版本</td></tr></tbody></table><h3 id="updatemanager-onupdateready-function-callback" tabindex="-1"><a class="header-anchor" href="#updatemanager-onupdateready-function-callback"><span>UpdateManager.onUpdateReady(function callback)</span></a></h3><p>监听小程序有版本更新事件。客户端主动触发下载(无需开发者触发)，下载成功后回调</p><h3 id="updatemanager-onupdatefailed-function-callback" tabindex="-1"><a class="header-anchor" href="#updatemanager-onupdatefailed-function-callback"><span>UpdateManager.onUpdateFailed(function callback)</span></a></h3><p>监听小程序更新失败事件。小程序有新版本，客户端主动触发下载(无需开发者触发)，下载失败(可能是网络原因等)后回调</p><p>示例代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onCheckForUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求完新版本信息的回调</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>hasUpdate<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新提示&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;新版本已经准备好，是否重启应用? &quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span>
        <span class="token comment">// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启</span>
        updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

updateManager<span class="token punctuation">.</span><span class="token function">onUpdateFailed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 新版本下载失败</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),o=[p];function c(d,i){return t(),a("div",null,o)}const r=n(e,[["render",c],["__file","system.html.vue"]]),k=JSON.parse('{"path":"/mini-app/guide/service/api/system.html","title":"系统相关 API","lang":"zh-CN","frontmatter":{"title":"系统相关 API","icon":"OS","category":"小程序","description":"wx.getSystemInfo(Object object) 获取系统信息 参数 Object object object.success 回调函数 参数 Object res res.safeArea 的结构 示例代码 Object wx.getSystemInfoSync() wx.getSystemInfo 的同步版本 直接返回异步版本的 re...","head":[["meta",{"property":"og:url","content":"https://github.com/newNotes/mini-app/guide/service/api/system.html"}],["meta",{"property":"og:site_name","content":"ZY 学习笔记"}],["meta",{"property":"og:title","content":"系统相关 API"}],["meta",{"property":"og:description","content":"wx.getSystemInfo(Object object) 获取系统信息 参数 Object object object.success 回调函数 参数 Object res res.safeArea 的结构 示例代码 Object wx.getSystemInfoSync() wx.getSystemInfo 的同步版本 直接返回异步版本的 re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-23T14:28:05.000Z"}],["meta",{"property":"article:author","content":"flow-zy"}],["meta",{"property":"article:modified_time","content":"2024-06-23T14:28:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统相关 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-23T14:28:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"flow-zy\\",\\"url\\":\\"https://flow-zy.github.io/newNotes/\\"}]}"]]},"headers":[{"level":2,"title":"wx.getSystemInfo(Object object)","slug":"wx-getsysteminfo-object-object","link":"#wx-getsysteminfo-object-object","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"object.success 回调函数","slug":"object-success-回调函数","link":"#object-success-回调函数","children":[]}]},{"level":2,"title":"Object wx.getSystemInfoSync()","slug":"object-wx-getsysteminfosync","link":"#object-wx-getsysteminfosync","children":[]},{"level":2,"title":"UpdateManager wx.getUpdateManager()","slug":"updatemanager-wx-getupdatemanager","link":"#updatemanager-wx-getupdatemanager","children":[]},{"level":2,"title":"UpdateManager","slug":"updatemanager","link":"#updatemanager","children":[{"level":3,"title":"UpdateManager.applyUpdate()","slug":"updatemanager-applyupdate","link":"#updatemanager-applyupdate","children":[]},{"level":3,"title":"UpdateManager.onCheckForUpdate(function callback)","slug":"updatemanager-oncheckforupdate-function-callback","link":"#updatemanager-oncheckforupdate-function-callback","children":[]},{"level":3,"title":"UpdateManager.onUpdateReady(function callback)","slug":"updatemanager-onupdateready-function-callback","link":"#updatemanager-onupdateready-function-callback","children":[]},{"level":3,"title":"UpdateManager.onUpdateFailed(function callback)","slug":"updatemanager-onupdatefailed-function-callback","link":"#updatemanager-onupdatefailed-function-callback","children":[]}]}],"git":{"createdTime":1719152885000,"updatedTime":1719152885000,"contributors":[{"name":"overflow_z","email":"wz19121@eyeah.net","commits":1}]},"readingTime":{"minutes":3.42,"words":1026},"filePathRelative":"mini-app/guide/service/api/system.md","localizedDate":"2024年6月23日","excerpt":"<h2>wx.getSystemInfo(Object object)</h2>\\n<p>获取系统信息</p>\\n<h3>参数</h3>\\n<p>Object object</p>\\n<table>\\n<thead>\\n<tr>\\n<th>属性</th>\\n<th>类型</th>\\n<th>必填</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>success</td>\\n<td>function</td>\\n<td>否</td>\\n<td>接口调用成功的回调函数</td>\\n</tr>\\n<tr>\\n<td>fail</td>\\n<td>function</td>\\n<td>否</td>\\n<td>接口调用失败的回调函数</td>\\n</tr>\\n<tr>\\n<td>complete</td>\\n<td>function</td>\\n<td>否</td>\\n<td>接口调用结束的回调函数(调用成功、失败都会执行)</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{r as comp,k as data};
