# Amazon EKS Workshop 全量中文离线/在线静态文档全书

> 官方 Amazon EKS Workshop (www.eksworkshop.com / aws-samples/eks-workshop-v2) 的 100% 完整本地化镜像与全量专业中文化工程。

## ✨ 特性亮点

- **全量 396 篇官方实验全量精翻**：涵盖 9 大核心业务专题（简介、基础、自动伸缩、网络、安全性、可观测性、自动化、AI/ML、实战排障）及 Fastpaths。18.5 万中文字符，逐字逐句翻译所有指引、参数解释、注意提示框与终端输出。
- **413 张高清架构与拓扑图本地化**：零外链图床、零远程 CDN 依赖，断网完全可用。
- **全栈按需懒加载 (Lazy-Loading Architecture)**：
  - **文档模块分块懒加载**：将 8.4MB 语料拆分为 12 个独立模块 Chunk (`js/chunks/chunk-*.js`)，首屏加载体积降低超过 **96%**（由 10.6MB 骤降至 ~390KB），按需秒级加载。
  - **图片原生懒加载**：全量 269 处 DOM 图片均注入 `loading="lazy"` 与 `decoding="async"`，滚动到视口才发起请求，极度节省带宽与内存。
  - **搜索索引懒加载**：2.12MB 的倒排搜索索引在用户点击搜索或按下 `Ctrl + K` 时才按需装载。
- **双击直接运行 (Zero-Server Architecture)**：彻底规避 Chromium 内核在 `file://` 协议下的 CORS 跨域拦截，直接在 Windows / macOS / Linux 双击 `index.html` 即可流畅浏览，无需启动 Node.js 或本地 Web 服务。
- **1:1 像素级 Docusaurus 界面**：双层顶部导航、左侧可折叠目录树、灰色 `[实验室]` 徽章、面包屑路径、代码一键复制、明暗双主题切换与全局离线即时搜索。
- **27 / 27 项端到端黑盒自动化测试全绿**：涵盖资产完整性、文档覆盖率、云原生标准术语规范（拒绝机翻）与静态无依赖架构。

## 🚀 快速使用

### 1. 本地双击浏览
直接双击打开目录下的 `index.html`，通过 Edge、Chrome 或任意现代浏览器浏览。

### 2. GitHub Pages 在线部署
仓库已内置 `.nojekyll` 与 `_redirects`：
1. 在仓库的 **Settings** -> **Pages** 中；
2. **Build and deployment** 选择 **Deploy from a branch**；
3. Branch 选择 **main** / **(root)**，点击 **Save**；
4. 几秒钟后即可通过 `https://<用户名>.github.io/<仓库名>/` 全球高速访问。

## 🛠️ 项目结构

```text
eks-workshop-full-zh/
├── index.html              # 纯静态核心入口
├── docusaurus.css          # Docusaurus v3 像素级复刻核心样式
├── theme.css               # 主题定制、亮暗色切换与懒加载动画
├── logo.svg                # EKS Workshop 矢量 Logo
├── .nojekyll               # 禁用 GitHub Pages Jekyll 过滤
├── _redirects              # SPA 路由重定向配置
├── js/
│   ├── app.js              # 纯客户端路由器与模块懒加载调度器
│   ├── nav_tree.js         # 全局层级导航目录树
│   ├── chunks_manifest.js  # 章节到 Chunk 的按需映射表
│   ├── search_index.js     # 全文检索倒排索引 (按需懒加载)
│   ├── docs_bundle.js      # 全量离线回退包 (保留完整兼容性)
│   └── chunks/             # 按需拆分的模块化语料 Chunks
│       ├── chunk-introduction.js
│       ├── chunk-fundamentals.js
│       ├── chunk-autoscaling.js
│       ├── chunk-networking.js
│       ├── chunk-security.js
│       ├── chunk-observability.js
│       ├── chunk-automation.js
│       ├── chunk-aiml.js
│       ├── chunk-troubleshooting.js
│       ├── chunk-fastpaths.js
│       ├── chunk-cleanup.js
│       └── chunk-misc.js
├── assets/                 # 本地化静态资产库
└── img/                    # 本地化架构示意图
```

## 📜 许可证

基于 AWS 官方开源协议，文档内容归属于 Amazon Web Services。
中文化与离线系统由 Antigravity 团队构建。
