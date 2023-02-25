import{_ as s,a}from"./chunks/pre-virt_vb-18.7338228b.js";import{_ as n,c as e,o as l,a as p}from"./app.9b08bf72.js";const o="/assets/basic-install_reflector.ce3aae53.png",t="/assets/basic-install_check-efi.0c257da9.png",c="/assets/basic-install_ping.e5fdc927.png",i="/assets/basic-install_time.0541bfe2.png",r="/assets/basic-install_mirrorlist-1.2fbb4cac.png",d="/assets/basic-install_mirrorlist-2.d629c732.png",b="/assets/basic-install_partition-1.9b193f41.png",C="/assets/basic-install_partition-2.7f37722f.png",m="/assets/basic-install_partition-3.6e0ec78d.png",u="/assets/basic-install_partition-4.663d6a2c.png",h="/assets/basic-install_partition-5.7730dea4.png",y="/assets/basic-install_partition-6.3737931f.png",A="/assets/basic-install_partition-7.0f3c6bbd.png",g="/assets/basic-install_partition-8.6b57cad5.png",v="/assets/basic-install_partition-9.fba9a5fd.png",D="/assets/basic-install_partition-10.f9b2012a.png",_="/assets/basic-install_partition-11.83f16eaa.png",f="/assets/basic-install_partition-12.0de4b9b6.png",E="/assets/basic-install_partition-13.a9c4fea3.png",k="/assets/basic-install_partition-14.75c5863b.png",B="/assets/basic-install_mkswap.92fdda71.png",F="/assets/basic-install_mkbtrfs-1.8feffffd.png",x="/assets/basic-install_mkbtrfs-2.74f8990b.png",w="/assets/basic-install_mkbtrfs-3.84a4679a.png",z="/assets/basic-install_mkbtrfs-4.8e3e329b.png",U="/assets/basic-install_mkbtrfs-5.fac45751.png",I="/assets/basic-install_mount-1.ce6900a2.png",S="/assets/basic-install_mount-2.b981dee5.png",G="/assets/basic-install_mount-3.868a3905.png",R="/assets/basic-install_mount-4.f161aad4.png",T="/assets/basic-install_pacstrap-1.5e46be8d.png",q="/assets/basic-install_pacstrap-2.4c230553.png",L="/assets/basic-install_fstab.c776c4b8.png",N="/assets/basic-install_chroot.673ef529.png",W="/assets/basic-install_set-name-and-timezone-1.a309cba5.png",O="/assets/basic-install_set-name-and-timezone-2.15374034.png",M="/assets/basic-install_set-name-and-timezone-3.fd00d670.png",V="/assets/basic-install_set-name-and-timezone-4.48ebabec.png",P="/assets/basic-install_locale-1.59ffa6db.png",$="/assets/basic-install_locale-2.25d6b784.png",J="/assets/basic-install_locale-3.ee2c4269.png",X="/assets/basic-install_passwd.72a75688.png",Z="/assets/basic-install_grub-1.3ebef03b.png",j="/assets/basic-install_grub-2.e9c8c11f.png",H="/assets/basic-install_grub-3.d220f785.png",K="/assets/os-prober-1.d6dd12a6.png",Y="/assets/basic-install_finish.3543840a.png",Q="/assets/basic-install_last-step-1.5ed5cd59.png",ss="/assets/basic-install_last-step-2.c76786d2.png",as="/assets/basic-install_last-step-3.59f72c70.png",ns="/assets/basic-install_neofetch.d338d5c5.png",us=JSON.parse('{"title":"archlinux 基础安装","description":"","frontmatter":{},"headers":[{"level":2,"title":"0. 进入安装环境","slug":"_0-进入安装环境","link":"#_0-进入安装环境","children":[]},{"level":2,"title":"1. 禁用 reflector 服务","slug":"_1-禁用-reflector-服务","link":"#_1-禁用-reflector-服务","children":[]},{"level":2,"title":"2. 再次确认是否为 UEFI 模式","slug":"_2-再次确认是否为-uefi-模式","link":"#_2-再次确认是否为-uefi-模式","children":[]},{"level":2,"title":"3. 连接网络","slug":"_3-连接网络","link":"#_3-连接网络","children":[{"level":3,"title":"若使用无线连接","slug":"若使用无线连接","link":"#若使用无线连接","children":[]},{"level":3,"title":"若使用有线连接","slug":"若使用有线连接","link":"#若使用有线连接","children":[]}]},{"level":2,"title":"4. 测试网络连通性","slug":"_4-测试网络连通性","link":"#_4-测试网络连通性","children":[]},{"level":2,"title":"5. 更新系统时钟","slug":"_5-更新系统时钟","link":"#_5-更新系统时钟","children":[]},{"level":2,"title":"6. 更换国内软件仓库镜像源加快下载速度","slug":"_6-更换国内软件仓库镜像源加快下载速度","link":"#_6-更换国内软件仓库镜像源加快下载速度","children":[]},{"level":2,"title":"7. 分区和格式化（使用 Btrfs 文件系统）","slug":"_7-分区和格式化-使用-btrfs-文件系统","link":"#_7-分区和格式化-使用-btrfs-文件系统","children":[{"level":3,"title":"7-1. 分区","slug":"_7-1-分区","link":"#_7-1-分区","children":[]},{"level":3,"title":"7-2. 格式化并创建 Btrfs 子卷","slug":"_7-2-格式化并创建-btrfs-子卷","link":"#_7-2-格式化并创建-btrfs-子卷","children":[]}]},{"level":2,"title":"8. 挂载","slug":"_8-挂载","link":"#_8-挂载","children":[]},{"level":2,"title":"9. 安装系统","slug":"_9-安装系统","link":"#_9-安装系统","children":[]},{"level":2,"title":"10. 生成 fstab 文件","slug":"_10-生成-fstab-文件","link":"#_10-生成-fstab-文件","children":[]},{"level":2,"title":"11. change root","slug":"_11-change-root","link":"#_11-change-root","children":[]},{"level":2,"title":"12. 设置主机名与时区","slug":"_12-设置主机名与时区","link":"#_12-设置主机名与时区","children":[]},{"level":2,"title":"13. 硬件时间设置","slug":"_13-硬件时间设置","link":"#_13-硬件时间设置","children":[]},{"level":2,"title":"14. 设置 Locale","slug":"_14-设置-locale","link":"#_14-设置-locale","children":[]},{"level":2,"title":"15. 为 root 用户设置密码","slug":"_15-为-root-用户设置密码","link":"#_15-为-root-用户设置密码","children":[]},{"level":2,"title":"16. 安装微码","slug":"_16-安装微码","link":"#_16-安装微码","children":[]},{"level":2,"title":"17. 安装引导程序","slug":"_17-安装引导程序","link":"#_17-安装引导程序","children":[]},{"level":2,"title":"18. 完成安装","slug":"_18-完成安装","link":"#_18-完成安装","children":[]},{"level":2,"title":"🎉 祝贺！🎉","slug":"🎉-祝贺-🎉","link":"#🎉-祝贺-🎉","children":[]}],"relativePath":"guide/rookie/basic-install.md","lastUpdated":1677171045000}'),es={name:"guide/rookie/basic-install.md"},ls=p("",255),ps=[ls];function os(ts,cs,is,rs,ds,bs){return l(),e("div",null,ps)}const hs=n(es,[["render",os]]);export{us as __pageData,hs as default};
