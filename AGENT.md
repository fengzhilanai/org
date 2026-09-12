# 项目说明

本项目是零构建纯静态官网，直接发布根目录即可。页面入口为 `index.html`，交互脚本在 `assets/main.js`，样式在 `assets/styles.css`。

## 本地预览

```bash
python3 -m http.server 8000
```

不要添加 Nest、数据库、API、运行时模板变量或需要安装依赖的构建流程。静态页面的区块导航使用 hash 链接，外部咨询表使用普通链接。
