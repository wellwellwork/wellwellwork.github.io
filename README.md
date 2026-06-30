# wellwell.work

> 好好工作 · WellWell Work — 一家追求"好好工作"的独立公司主页

托管在 [wellwell.work](https://wellwell.work)，使用 [nextjs-starter-zoe-app](https://github.com/jiusanzhou/nextjs-starter-zoe-app) 作为主题引擎，通过 GitHub Actions 自动构建部署到 GitHub Pages。

## 结构

```
.
├── zoe-site.yaml         # 站点配置（标题、导航、Hero、产品、Stats 等）
├── content/
│   ├── posts/            # 博客文章（Markdown）
│   └── pages/            # 独立页面（如 about）
├── public/               # 静态资源（图片、favicon、CNAME）
└── .github/workflows/
    └── deploy.yml        # CI/CD：拉框架 → 注入数据 → build → 发布
```

## 工作方式

仓库**只保留数据**，不包含框架代码。每次 push 时，GitHub Actions：

1. Checkout 本仓库（`site/`）
2. Checkout 主题框架 [nextjs-starter-zoe-app](https://github.com/jiusanzhou/nextjs-starter-zoe-app)（`theme/`）
3. 把 `site/zoe-site.yaml`、`site/content/*`、`site/public/*` 注入到 `theme/`
4. `pnpm install && pnpm build`
5. 把 `theme/out/` 部署到 GitHub Pages

这样框架升级自动跟随，仓库只关心内容。

## 主题

当前使用 **`wellwell`** 主题（暖橙 + 自然绿，纸感杂志气质），定义在框架的 `src/styles/themes.css`。

切换主题：修改 `zoe-site.yaml` 中的 `theme:` 字段。

## 本地预览

如需本地预览，可手动 clone 框架并注入数据：

```bash
git clone https://github.com/jiusanzhou/nextjs-starter-zoe-app theme
cp -r content/* theme/content/
cp -r public/* theme/public/
cp zoe-site.yaml theme/
cd theme
pnpm install
pnpm dev
```

## License

[MIT](./LICENSE)
