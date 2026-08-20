import { defineConfig } from 'vitepress'

// Modular House 美国市场平台 —— 静态站骨架（重构版）
// 关键架构：*** 12 份交付文件只是「引导蓝图」；网站主目录导航骨架 =
//          由这 12 份文件引导出来的「完整版 MasterFormat SPEC 框架」***
// 结构：
//   /                    首页
//   /spec/divisions/*    MasterFormat Division 00-48（跨结构类型通用章节框架）
//   /spec/types/*        结构类型视图（钢/混凝土UHPC/木）——同一 Section 的各类型展开
//   /guide/*             引导蓝图解读（操作手册/材料清单/供货商对标 → 如何撑起框架）
//   /blueprint/*         12 份原始交付（设计母本，只读归档）
//   /l2/                 动态雷达；/l3/ 论证服务；/l4/ 运营中台
// i18n：root=中文，en 未来补 /en/ 一键切换

export default defineConfig({
  lang: 'zh-CN',
  title: 'Modular House 美国市场 SPEC 平台',
  base: '/modular-house-spec-platform/',
  description:
    '由大而全的美标 MasterFormat SPEC 框架为导航，服务中国 Modular House 整合商与分部分项供应商打开美国市场。',

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: 'SPEC 框架', link: '/spec/', activeMatch: '/spec/' },
          { text: '结构类型', link: '/spec/types/steel', activeMatch: '/spec/types/' },
          { text: '引导蓝图', link: '/guide/', activeMatch: '/guide/' },
          { text: '动态雷达 L2', link: '/l2/', activeMatch: '/l2/' },
          { text: '论证服务 L3', link: '/l3/', activeMatch: '/l3/' },
          { text: '运营中台 L4', link: '/l4/', activeMatch: '/l4/' },
        ],
        sidebar: {
          '/spec/divisions/': [
            {
              text: 'MasterFormat Division（完整 SPEC 框架）',
              items: [
                { text: 'Division 00 — 采购与合同', link: '/spec/divisions/00' },
                { text: 'Division 01 — 一般要求（模块化灵魂）', link: '/spec/divisions/01' },
                { text: 'Division 03 — 混凝土', link: '/spec/divisions/03' },
                { text: 'Division 05 — 金属/钢结构', link: '/spec/divisions/05' },
                { text: 'Division 06 — 木/塑料/复合', link: '/spec/divisions/06' },
                { text: 'Division 07 — 保温防水气密防火封堵', link: '/spec/divisions/07' },
                { text: 'Division 09 — 防火与装修', link: '/spec/divisions/09' },
                { text: 'Division 13 — 楼面/模块本体', link: '/spec/divisions/13' },
                { text: 'Division 14 — 电梯', link: '/spec/divisions/14' },
                { text: 'Division 21-28 — 机电/消防/弱电', link: '/spec/divisions/21-28' },
                { text: 'Division 31-33 — 场地/吊装/市政', link: '/spec/divisions/31-33' },
                { text: 'Division 48 — 光伏', link: '/spec/divisions/48' },
              ],
            },
          ],
          '/spec/types/': [
            {
              text: '结构类型视图',
              items: [
                { text: '钢结构（volumetric）', link: '/spec/types/steel' },
                { text: '混凝土 / UHPC', link: '/spec/types/concrete-uhpc' },
                { text: '木结构 / CLT', link: '/spec/types/wood' },
              ],
            },
          ],
          '/guide/': [
            {
              text: '引导蓝图（方法论文档）',
              items: [
                { text: '操作手册总纲', link: '/guide/00-operation-manual' },
                { text: '共享框架合规底座', link: '/guide/01-base' },
                { text: '材料设备清单（中美对应）', link: '/guide/06-materials' },
                { text: '供应商 SPEC 做法对标', link: '/guide/05-supplier-benchmark' },
                { text: '可投用 SECTION 三件套', link: '/guide/sections' },
                { text: '英文 Overview', link: '/guide/en-overview' },
              ],
            },
          ],
          '/l2/': [
            {
              text: '动态雷达 L2',
              items: [
                { text: '总览与跟踪清单', link: '/l2/10-tracking-list' },
                { text: '分品类竞品对标', link: '/l2/competitors' },
                { text: '标准异动', link: '/l2/standards' },
                { text: '政策与进口', link: '/l2/policy' },
              ],
            },
          ],
          '/l3/': [{ text: '论证服务', items: [{ text: '服务与流程', link: '/l3/' }] }],
          '/l4/': [{ text: '运营中台', items: [{ text: '知识回流', link: '/l4/' }] }],
        },
      },
    },
  },

  head: [
    [
      'meta',
      { name: 'keywords', content: 'Modular House, 装配式住房, 美国市场, SPEC, MasterFormat, 加州, 美标合规, 钢结构, 混凝土, UHPC, 木结构' },
    ],
  ],

  lastUpdated: true,
  cleanUrls: true,
  markdown: { lineNumbers: true },
})
