# Modular House 美国市场 SPEC 平台（静态站）

> 帮中国 Modular House 整合商 + 分部分项供应商打开美国市场。**主目录导航骨架 = 完整版 MasterFormat SPEC 框架**（由 12 份引导文件推导）。

## 核心技术决策
**12 份交付文件只是「引导蓝图」，不是网站主目录。** 网站主目录 = 由这些文件引导出来的**完整版 MasterFormat SPEC 框架**：
- `spec/divisions/*`：Division 00-48（跨结构类型通用章节）
- `spec/types/*`：结构类型视图（钢 / 混凝土UHPC / 木）——同内容按类型切分
- `guide/*`：12 份引导文件解读（蓝图 → 如何撑起框架）

## 技术栈
- **VitePress** v1.6.4，静态站，Markdown 即内容
- 中文主语言（root locale）+ i18n 英文版预留（未来 `/en/`）
- 无需数据库，GitHub Pages / 任意静态托管部署

## 目录结构
```
modular-platform-site/
├── package.json
├── README.md
└── docs/
    ├── .vitepress/config.mts      # 站点配置 + 导航 + i18n 预留
    ├── index.md                   # 首页（四大板块入口）
    ├── spec/                      # ⭐主目录：完整 MasterFormat SPEC 框架
    │   ├── index.md               # Division 总览（00-48 骨架）
    │   ├── divisions/             # 12 个 Division 页（SECTION 清单 + 类型适用）
    │   └── types/                 # 钢结构 / 混凝土UHPC / 木（类型视图 + 覆盖矩阵）
    ├── guide/                     # 引导蓝图（12 份交付 → 如何撑起框架）
    │   ├── index.md
    │   ├── sections.md            # 可投用 SECTION 三件套入口
    │   ├── 00-operation-manual.md … 09-*.md / en-overview.md
    ├── l2/                        # 动态雷达（10 跟踪清单 + competitors/standards/policy）
    ├── l3/                        # 论证服务
    └── l4/                        # 运营中台
```

## 命令
```bash
cd modular-platform-site
npm install          # 已装
npm run dev          # 本地预览 http://localhost:5173
NODE_OPTIONS=--max-old-space-size=2048 npm run build   # 生成静态产物
npm run preview      # 预览构建产物
```

## 内容维护
- **新增 Division/SECTION**：在 `spec/divisions/` 加页，并按 `spec/types/` 更新类型覆盖矩阵。
- **完整条款深化**：照 `guide/sections.md` 三段式模板（Part1/2/3 + 3 停点 + 中美换算）逐步灌入。
- **引导文件同步**：`guide/` 中的 00-09 来自 `../SPEC框架/` 交付，变更时同步拷贝。
- **L2 动态**：`10-tracking-list` 为清单；competitors/standards/policy 由 cron 填充。

## i18n
当前 root locale=中文。未来补 `docs/en/` 内容 + 切换即英文版（用户要求一键可切）。

## 部署（GitHub Actions → Pages，自动）
仓库：`SpaceBox-AI/modular-house-spec-platform`，部署 URL：`https://spacebox-ai.github.io/modular-house-spec-platform/`

流程：推送 `main` 分支 → GitHub Actions workflow（`.github/workflows/deploy.yml`）自动 build + 发布到 GitHub Pages（Pages source 需设为 **GitHub Actions**）。
```bash
git add -A && git commit -m "..." && git push origin main
```
- base 已设 `/modular-house-spec-platform/`，匹配该子路径。
- 本地 build 检查：`NODE_OPTIONS=--max-old-space-size=2048 npm run build`。
环境注意：macOS 无 `timeout`；npm install 偶发 SIGKILL（内存尖峰，重跑即可）。
