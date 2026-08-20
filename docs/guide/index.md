# 引导蓝图（Guide / Blueprint）

> **12 份引导文件**是如何支撑起本站「完整版 SPEC 框架」的**设计母本**。本站主目录是 `spec/`（MasterFormat 框架）；本区解释「框架从哪来、怎么读、怎么续写」。

## 引导文件 → 框架的映射

| 引导文件 | 如何引导主框架 |
|---|---|
| **00 操作手册总纲** | 定义章节分类矩阵（通用 vs 特定）→ 决定 `spec/divisions/*` 与 `spec/types/*` 的组织 |
| **01 共享框架合规底座** | Division 00/01/07/13通用/21-28/31-33/48 的骨架 + §0.4 规范分布矩阵 |
| **02/03/04 结构类型框架** | 各自 `spec/types/*` 视图 + Section 层类型差异 |
| **05 供应商SPEC做法对标** | 决定文档形态（Spec Sheet/Plan Set/安装手册/ESR四件套） |
| **06 材料设备清单** | 每个「产品/材料」子节的美标性能 + 中美对应（GB↔US） |
| **07/08/09 可投用SECTION** | MasterFormat 三段式**现成模板**：05 12 钢 / 13 34 23 UHPC / 06 16 木覆面 |
| EN Executive Summary | 给美方/投资的英文概览（含平台 L1-L4 愿景） |

## 12 份引导文件清单

| # | 文件 | 本站位置 |
|---|---|---|
| 00 | 操作手册总纲（全局技术与流程） | [guide/00](./00-operation-manual) |
| 01 | 共享框架合规底座 | [guide/01](./01-base) |
| 02 | 钢结构框架 | [spec/types/steel](../spec/types/steel) |
| 03 | 混凝土/UHPC 框架 | [spec/types/concrete-uhpc](../spec/types/concrete-uhpc) |
| 04 | 木结构框架 | [spec/types/wood](../spec/types/wood) |
| 05 | 供应商 SPEC 做法对标 | [guide/05](./05-supplier-benchmark) |
| 06 | 材料设备清单（中美对应） | [guide/06](./06-materials) |
| 07 | 可投用 SECTION 05 12 00 结构钢 | [guide/sections#07](./sections) |
| 08 | 可投用 SECTION 13 34 23 UHPC | [guide/sections#08](./sections) |
| 09 | 可投用 SECTION 06 16 00 木覆面 | [guide/sections#09](./sections) |
| 10 | 标准与竞品动态跟踪清单 | [l2/10](../l2/10-tracking-list) |
| EN | 英文 Overview | [guide/en-overview](./en-overview) |

## 阅读路径（推荐）
1. **新人**：读 [00 操作手册总纲](./00-operation-manual) → 理解章节矩阵与合规流程
2. **要框架**：进 `spec/`（MasterFormat Division + 结构类型视图）
3. **要可直接投用**：看 [可投用 SECTION 三件套](./sections)
4. **要写材料**：用 [06 材料清单](./06-materials)
