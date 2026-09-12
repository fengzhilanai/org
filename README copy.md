# 风之岚科技｜AI 产品交付工作室

这是一个**零构建、纯静态官网**，参考 `/Volumes/wwx/open/fengzhilanai/solo/` 的发布方式。页面不依赖 React、Node、Nest、数据库、API 或环境变量，根目录可以直接部署到 GitHub Pages、Cloudflare Pages、Nginx 等静态托管服务。

## 项目结构

```text
.
├── index.html          # 官网首页
├── 404.html            # 静态托管错误页
├── assets/
│   ├── main.js         # 移动端菜单与滚动揭示
│   ├── styles.css      # 页面样式
│   ├── logo.png        # 风之岚科技品牌 logo
│   ├── favicon.png     # 网站图标
│   ├── og-image.png    # 社交分享图
│   └── hero-background.png
├── routes.json         # 根路径描述
└── package.json        # 项目元信息，无运行依赖
```

## 本地预览

无需安装依赖，在项目根目录执行：

```bash
python3 -m http.server 8000
```

访问 <http://localhost:8000/>。

## 发布

将根目录内容直接上传到静态托管平台即可。若平台支持自定义 404 页面，请将 `404.html` 配置为错误页。所有区块导航使用 hash 锚点，不需要 SPA fallback。

## 内容边界

本站用于服务介绍和咨询，不是自动付款页面。提交咨询不代表成交、报名或名额锁定；具体服务范围、价格、周期、付款、退款/取消/改期、数据处理和验收方式，以付款前书面确认内容为准。

请勿提交密码、API Key、访问令牌或未脱敏的敏感业务数据。
