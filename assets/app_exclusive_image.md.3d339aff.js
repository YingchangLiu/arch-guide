import{_ as a,c as e,o as s,a as n}from"./app.9b08bf72.js";const r="/assets/gimp.fc98f8ed.png",l="/assets/aseprite.9ac4f9e2.png",p="/assets/rawtherapee.4b82cd98.png",i="/assets/kolourpaint.987ffcf9.png",t="/assets/inkscape.9847c486.png",o="/assets/Art_Bot.15082d5d.svg",c="/assets/krita.e81bc9b3.png",A=JSON.parse('{"title":"图像制作","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"🖼️ 位图编辑","slug":"🖼️-位图编辑","link":"#🖼️-位图编辑","children":[{"level":3,"title":"GIMP","slug":"gimp","link":"#gimp","children":[]},{"level":3,"title":"Aseprite","slug":"aseprite","link":"#aseprite","children":[]},{"level":3,"title":"RawTherapee","slug":"rawtherapee","link":"#rawtherapee","children":[]},{"level":3,"title":"KolourPaint","slug":"kolourpaint","link":"#kolourpaint","children":[]}]},{"level":2,"title":"🖼️ 矢量图编辑","slug":"🖼️-矢量图编辑","link":"#🖼️-矢量图编辑","children":[{"level":3,"title":"Inkscape","slug":"inkscape","link":"#inkscape","children":[]}]},{"level":2,"title":"🎨 绘画","slug":"🎨-绘画","link":"#🎨-绘画","children":[{"level":3,"title":"Krita","slug":"krita","link":"#krita","children":[]}]},{"level":2,"title":"🖼️ GIF 制作","slug":"🖼️-gif-制作","link":"#🖼️-gif-制作","children":[{"level":3,"title":"Gifcurry","slug":"gifcurry","link":"#gifcurry","children":[]}]}],"relativePath":"app/exclusive/image.md","lastUpdated":1677171045000}'),d={name:"app/exclusive/image.md"},h=n(`<h1 id="图像制作" tabindex="-1">图像制作 <a class="header-anchor" href="#图像制作" aria-hidden="true">#</a></h1><blockquote><h3 id="🌺-乱花渐欲迷人眼-浅草才能没马蹄" tabindex="-1">🌺 乱花渐欲迷人眼，浅草才能没马蹄 <a class="header-anchor" href="#🌺-乱花渐欲迷人眼-浅草才能没马蹄" aria-hidden="true">#</a></h3><p>本小节讨论如何在 archlinux 上编辑、管理位图以及矢量图，以及绘画。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#🖼️-位图编辑">🖼️ 位图编辑</a><ul><li><a href="#gimp">GIMP</a></li><li><a href="#aseprite">Aseprite</a></li><li><a href="#rawtherapee">RawTherapee</a></li><li><a href="#kolourpaint">KolourPaint</a></li></ul></li><li><a href="#🖼️-矢量图编辑">🖼️ 矢量图编辑</a><ul><li><a href="#inkscape">Inkscape</a></li></ul></li><li><a href="#🎨-绘画">🎨 绘画</a><ul><li><a href="#krita">Krita</a></li></ul></li><li><a href="#🖼️-gif-制作">🖼️ GIF 制作</a><ul><li><a href="#gifcurry">Gifcurry</a></li></ul></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="🖼️-位图编辑" tabindex="-1">🖼️ 位图编辑 <a class="header-anchor" href="#🖼️-位图编辑" aria-hidden="true">#</a></h2><h3 id="gimp" tabindex="-1">GIMP <a class="header-anchor" href="#gimp" aria-hidden="true">#</a></h3><p><a href="https://www.gimp.org/" target="_blank" rel="noreferrer">GIMP</a> 是一个自由开源的位图图像编辑器。其对标 <a href="https://www.adobe.com/cn/" target="_blank" rel="noreferrer">Adobe</a> 的 <a href="https://www.adobe.com/cn/products/photoshop.html" target="_blank" rel="noreferrer">Photoshop</a><sup>EULA</sup>。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/gimp/" target="_blank" rel="noreferrer">GIMP</a><sup>extra / cn / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-6oaAM" id="tab-U7r68ZN" checked="checked"><label for="tab-U7r68ZN">sh</label><input type="radio" name="group-6oaAM" id="tab-VBn0-Tr"><label for="tab-VBn0-Tr">sh</label><input type="radio" name="group-6oaAM" id="tab-r0KmI4H"><label for="tab-r0KmI4H">sh</label></div><div class="blocks"><p>::: code-group-item extra</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gimp</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item cn (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gimp-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aur/gimp-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+r+`" alt="gimp"></p><h3 id="aseprite" tabindex="-1">Aseprite <a class="header-anchor" href="#aseprite" aria-hidden="true">#</a></h3><p><a href="https://www.aseprite.org/" target="_blank" rel="noreferrer">Aseprite</a> 是一款像素艺术绘制工具。</p><p>安装 <a href="https://aur.archlinux.org/packages/aseprite/" target="_blank" rel="noreferrer">Aseprite</a><sup>EULA / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-qEBhU" id="tab-QVFwWeF" checked="checked"><label for="tab-QVFwWeF">sh</label><input type="radio" name="group-qEBhU" id="tab-wUdCkXl"><label for="tab-wUdCkXl">sh</label><input type="radio" name="group-qEBhU" id="tab-tLiiiIQ"><label for="tab-tLiiiIQ">sh</label></div><div class="blocks"><p>::: code-group-item aur</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aseprite</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (bin)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aseprite-bin</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aseprite-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+l+`" alt="aseprite"></p><h3 id="rawtherapee" tabindex="-1">RawTherapee <a class="header-anchor" href="#rawtherapee" aria-hidden="true">#</a></h3><p><a href="https://rawtherapee.com/" target="_blank" rel="noreferrer">RawTherapee</a> 是一个自由开源的跨平台 RAW 格式图像处理程序。</p><p>安装 <a href="https://archlinux.org/packages/community/x86_64/rawtherapee/" target="_blank" rel="noreferrer">RawTherapee</a><sup>community / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-7nmCx" id="tab-r0CPg0i" checked="checked"><label for="tab-r0CPg0i">sh</label><input type="radio" name="group-7nmCx" id="tab-TX8zP9a"><label for="tab-TX8zP9a">sh</label></div><div class="blocks"><p>::: code-group-item community</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rawtherapee</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rawtherapee-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+p+`" alt="rawtherapee"></p><h3 id="kolourpaint" tabindex="-1">KolourPaint <a class="header-anchor" href="#kolourpaint" aria-hidden="true">#</a></h3><p>KolourPaint 是 KDE 开发的一个简单易用的自由开源的绘图程序（类似 Windows 自带的画图），可以创建点阵图像。可用来对图片进行润色和简单编辑。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/kolourpaint/" target="_blank" rel="noreferrer">KolourPaint</a><sup>extra / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-3ey0Q" id="tab-1I8hmkK" checked="checked"><label for="tab-1I8hmkK">sh</label><input type="radio" name="group-3ey0Q" id="tab-_z6hYjb"><label for="tab-_z6hYjb">sh</label></div><div class="blocks"><p>::: code-group-item extra</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kolourpaint</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kolourpaint-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+i+`" alt="kolourpaint"></p><h2 id="🖼️-矢量图编辑" tabindex="-1">🖼️ 矢量图编辑 <a class="header-anchor" href="#🖼️-矢量图编辑" aria-hidden="true">#</a></h2><h3 id="inkscape" tabindex="-1">Inkscape <a class="header-anchor" href="#inkscape" aria-hidden="true">#</a></h3><p>Inkscape 是自由开源的矢量图形编辑器。该软件的开发目标是成为强大的绘图软件，且能完全遵循与支持 XML、SVG 及 CSS 等开放性的标准格式。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/inkscape/" target="_blank" rel="noreferrer">Inkscape</a><sup>extra / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-GVORC" id="tab-Mb8Tyuw" checked="checked"><label for="tab-Mb8Tyuw">sh</label><input type="radio" name="group-GVORC" id="tab-A9niLr0"><label for="tab-A9niLr0">sh</label></div><div class="blocks"><p>::: code-group-item extra</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">inkscape</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">inkscape-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+t+'" alt="inkscape"></p><blockquote><h4 id="📑-相关资料-什么是矢量图形" tabindex="-1">📑 相关资料：什么是矢量图形？ <a class="header-anchor" href="#📑-相关资料-什么是矢量图形" aria-hidden="true">#</a></h4><p>矢量图形是计算机图形学中用点、直线或者多边形等基于数学方程的几何图元表示的图像。</p><p>矢量图形与使用像素表示图像的位图不同。任意放大矢量图形，不会丢失细节或影响清晰度。</p><p>下面这个图片便是矢量图，可以尝试将其放大：</p><p><img src="'+o+`" alt="Art_Bot"></p></blockquote><h2 id="🎨-绘画" tabindex="-1">🎨 绘画 <a class="header-anchor" href="#🎨-绘画" aria-hidden="true">#</a></h2><h3 id="krita" tabindex="-1">Krita <a class="header-anchor" href="#krita" aria-hidden="true">#</a></h3><p><a href="https://krita.org/zh/" target="_blank" rel="noreferrer">Krita</a> 是一个自由开源的位图图像编辑器。它针对数字绘画和动画创作特化，提供包括低干扰用户界面、OpenGL 加速画布、色彩管理、功能强大的笔刷引擎、非破坏性图层和蒙版、图层分组、矢量图形支持和可切换界面预设等在内的一系列特色功能。</p><p>安装 <a href="https://archlinux.org/packages/extra/x86_64/krita/" target="_blank" rel="noreferrer">Krita</a><sup>extra / aur</sup>：</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-H-3hM" id="tab-NtTSCgy" checked="checked"><label for="tab-NtTSCgy">sh</label><input type="radio" name="group-H-3hM" id="tab-LwcFdWH"><label for="tab-LwcFdWH">sh</label></div><div class="blocks"><p>::: code-group-item extra</p><div class="language-sh active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">krita</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>::: ::: code-group-item aur (git)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">krita-git</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>:::</p></div></div><p><img src="`+c+`" alt="krita"></p><h2 id="🖼️-gif-制作" tabindex="-1">🖼️ GIF 制作 <a class="header-anchor" href="#🖼️-gif-制作" aria-hidden="true">#</a></h2><h3 id="gifcurry" tabindex="-1">Gifcurry <a class="header-anchor" href="#gifcurry" aria-hidden="true">#</a></h3><p><a href="https://lettier.github.io/gifcurry/" target="_blank" rel="noreferrer">Gifcurry</a> 是面向 GIF 制作者的开源、Haskell 构建的视频编辑器。</p><p>安装 <a href="https://aur.archlinux.org/packages/gifcurry/" target="_blank" rel="noreferrer">Gifcurry</a><sup>aur</sup>：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">yay</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gifcurry</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,43),u=[h];function b(g,m,y,C,v,k){return s(),e("div",null,u)}const D=a(d,[["render",b]]);export{A as __pageData,D as default};
