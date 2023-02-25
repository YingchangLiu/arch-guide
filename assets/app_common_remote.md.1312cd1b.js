import{_ as a,c as s,o as e,a as n}from"./app.9b08bf72.js";const m=JSON.parse('{"title":"远程连接","description":"","frontmatter":{},"headers":[{"level":2,"title":"RealVNC","slug":"realvnc","link":"#realvnc","children":[]}],"relativePath":"app/common/remote.md","lastUpdated":1677187157000}'),r={name:"app/common/remote.md"},l=n(`<h1 id="远程连接" tabindex="-1">远程连接 <a class="header-anchor" href="#远程连接" aria-hidden="true">#</a></h1><blockquote><h3 id="🔗-蒹葭苍苍-白露为霜" tabindex="-1">🔗 蒹葭苍苍，白露为霜 <a class="header-anchor" href="#🔗-蒹葭苍苍-白露为霜" aria-hidden="true">#</a></h3><p>这一小节讨论如何在 archlinux 上远程连接另外的计算机以及如何远程连接运行 archlinux 的计算机。</p></blockquote><blockquote><h3 id="🔖-这一节将会讨论" tabindex="-1">🔖 这一节将会讨论： <a class="header-anchor" href="#🔖-这一节将会讨论" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>目录</summary><nav class="table-of-contents"><ul><li><a href="#realvnc">RealVNC</a></li></ul></nav></details></blockquote><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>指南中带有 <sup>aur</sup> 角标的软件代表是在 <a href="https://aur.archlinux.org/" target="_blank" rel="noreferrer">AUR</a>（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>cn</sup> 角标的软件代表是在 <a href="https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/" target="_blank" rel="noreferrer">archlinuxcn</a>（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。</p><p>指南中带有 <sup>EULA</sup> 角标的软件代表是 <a href="https://www.gnu.org/proprietary/proprietary.html" target="_blank" rel="noreferrer">专有软件</a>。请自行斟酌是否使用。</p></div><h2 id="realvnc" tabindex="-1">RealVNC <a class="header-anchor" href="#realvnc" aria-hidden="true">#</a></h2><p>RealVNC 是一家提供远程访问软件的公司，成立于 2002 年。该软件由服务器(VNC 服务器，英语：VNC Server)和客户端(VNC 查看器，英语：VNC Viewer)组成，该软件通过 VNC 协议来远程控制另一台计算机的屏幕[1]。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">realvnc-vnc-server</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动与开机设置</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vncserver-x11-serviced</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vncserver-x11-serviced</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">ℹ️ 提示</p><p>一般情况下以上设置就已经能够让 realvnc 比较完美地在 arch 下运行了，然后在菜单栏点击 realvnc 图标进行初始化运行。</p></div>`,10),t=[l];function p(c,o,i,d,h,u){return e(),s("div",null,t)}const b=a(r,[["render",p]]);export{m as __pageData,b as default};
