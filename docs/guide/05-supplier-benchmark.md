# 美国活跃模块化住宅供应商 SPEC 做法对标 — 联网调研报告

> 调研员：Modular-Agent 联网调研 | 日期：2026-08-19
> 目的：为中国 Modular House 供应商，了解美国活跃竞品**如何制作与发布产品 SPEC（技术规格文档）**，含形态、MasterFormat 遵循、关键技术条文、合规背书与发布渠道。
> 数据来源：公开 web 检索（官网、Tech Library、ICC-ES、Arcat/ArchExpo、行业媒体等）。**已核实**与**推测/未查实**严格区分标注。

---

## 〇、美国 Modular SPEC 做法的共性结论（先读这段）

1. **SPEC 形态分层**：美国活跃供应商几乎从不只发一张"产品规格表"。常见组合是四件套——**①产品 Spec Sheet（型号规格表）②Generic/标准 Plan Set（通用施工图集）③安装手册（Installation Manual）④工程/合规背书（ESR 评估报告 / HCD insignia / 字母机构 stamp）**。建制派（如 VBC、Guerdon）再加 **BIM 库、QTO、CSI 3-part specs、Shop Drawing**。
2. **MasterFormat 遵循**：真正面向建筑师/工程师的供应商会按 **CSI MasterFormat** 组织，核心落在 **Division 13 Special Construction → 13 42 00 Building Modules**（Building Modules 13 42 00）、配套 **13 34 23 Fabricated Structures**。但**很多直接面向 C 端/ADU 客户的公司并不严格走 MasterFormat**，而是用"型号 + 平面 + 性能表"的消费端口吻。**是否 MASTERFORMAT 是区分"C 端产品公司"与"建筑/GC 供货商"的分水岭。**
3. **共性关键技术条文**：尺寸（模块/户型面积/占地）、结构材料（ASTM/NDS/ACI/AISI/AISC）与体系、**耐火等级（小时）**、**抗震/风载（引 DSA/OSHPD、或 ICC-ES AC156 评估、或地震区连接）**、**能耗（HERS / Title 24 / 气密 ACH50 / R 值）**、工厂完成度（%）、连接与吊装、运输尺寸限制、保修年限。
4. **合规背书分级**：
   - **开源/低层产品**（Boxabl 面板、Mighty 面板）→ **ICC-ES ESR 评估报告**（如 ESR-4725）+ EAD / AC156 抗震。
   - **封闭式体积模块** → **NTA 或州立第三方 plan review + 工厂检验**，加州为 **HCD insignia（Title 25）**，商业模块**工厂检率 25%**（加州对 Casita Studio 已适用）。
   - **建筑级项目**（VBC/Stack/Guerdon）→ **项目级 plan review + 州政府盖章（stamping）+ 现场 AHJ**，无标准一品一证 ESR。
5. **发布渠道**：官网"技术库/Technical Library"（最主流），另可上 **ICC-ES 官网（ESR 免费下载）、Arcat、4specs、Sweets、ArchExpo（产品 Overview Book）**。BIM 库（Revit 族）是建筑级供应商加分项。

---

## 一、钢结构 / 集装箱式

### 1.1 CIMC-MBS（中集模块化）
- **SPEC 形态**：无公开"一品一证"产品 Spec Sheet；官网走项目案例路线（Autodesk 中文案例：整体式钢结构集成模块建筑系统，可堆码 30 层、90% 装修工厂化、香港 InnoCell、竹篙湾隔离中心）。交付形态为**项目级 BIM + Engineering Docs + Shop Drawing + 吊装手册**。
- **MasterFormat**：未见公开明确引用；当建筑项目做 BIM 与 CSI 深化。
- **关键技术条文**：钢结构模块堆码层高（30 层）、工厂装修完成度、多国合规（美/欧/港）、连接节点。
- **合规背书**：项目属地合规（如香港、美国州级评审），未见公开 ICC-ES ESR。
- **渠道**：官网 + LinkedIn/BuiltWorlds + Autodesk 案例。**公开 SPEC 形态：未查实/未公开。**

### 1.2 Volumetric Building Companies (VBC)
- **SPEC 形态**：**最接近建筑/GC 供货商的完整文档链**。官网 How-it-Works 明确：Design Development（锁生产档期）→ **BIM 模型 + QTO（工程量清单）输出** → **"Construction Documentation"阶段 Finalize the modular specifications** → 工厂装配线 → **各州主管机构盖章（modules inspected and stamped by state authorities）** → 运输/吊装/施工。另有 **Modular Pro Forma**（财务测算下载）。
- **MasterFormat**：走项目级 CSI/BIM（Finalize modular specifications），隐含 MasterFormat/施工文档标准。
- **关键技术条文**：木框架 1-5 层、钢框架 1-22 层（REI60/90/120+190 耐火）、模块尺寸最小/最大值、自动化产线技术规格、BIM 驱动 QTO。
- **合规背书**：工厂内由州立权威盖章（state stamping）+ 第三方工厂检验；地区（Berwick PA / Tracy CA / Topole Poland）。
- **渠道**：官网 vbc.co（How-it-Works、Modular Pro Forma 门控下载）+ BuiltWorlds。**无公开 ESR（项目级路线）。**

### 1.3 Katerra（对照：已破产）
- **状态**：2021 年破产清算。原因：疫情、无法获得履约保函、融资失败。VBC 2021 收购其加州工厂资产。
- **SPEC/教训**：曾主打"垂直整合 + DfMA/数字化制造"，但**制造可行性/成本验证不足**。对标价值在**反面教训**：光有数字化/DfMA 愿景而无可持续制造现金流与合规背书，会崩盘。
- **渠道**：已下线。**技术细节：未查实（已倒闭）。**

### 1.4 UnTower
- **状态**：3D 混凝土打印高层/模块化背景信息间接命中，**无独立 SPEC 文档可查**。
- **SPEC 形态/合规/渠道：未查实。** 建议后续直接官网确认是否仍在运营。

### 1.5 NXT Homes
- **⚠️ 检索歧义已澄清**：美国活跃的 "NXT" 是 **Clayton（Athens）旗下的"Manufactured & Modular Farmhouse Style"品牌**（德州/俄克拉荷马等 Clayton 零售网络销售），**非钢构科技公司**。
- **SPEC 形态**：HUD/州 modular 框架下的**型号平面 + 尺寸规格表（exterior-to-exterior 尺寸口径）+ 零售价目**；规格随 SA/RCA 合同文档确认。
- **MasterFormat**：不适用（manufactured housing 走 HUD/州标，非 CSI）。
- **合规背书**：HUD 制造房屋标准 / 州 modular 认证（经 Clayton 零售体系），随合同附规格。
- **渠道**：官网 info.nxtathens.com。**若用户指另一家科技型 NXT Homes，需再次定向检索。**

---

## 二、木结构体积式

### 2.1 Plant Prefab（含旗下 LivingHomes）
- **SPEC 形态**：**Plant Building System™ = Plant Panels™ + Plant Modules™**。CAD 团队产出 **3D 模型 + 生产 shop drawing + 卡车装载图（trucking load drawings）+ 详细安装手册（installation manuals）**——这是"完整 Doc Set + 物流/安装"范本。
- **MasterFormat**：中高档 prefab 走标准施工文档/CAD 体系，隐含 MasterFormat。
- **关键技术条文**：Rialto / Tejon Ranch 工厂、木构面板 + 体积模块混合系统、生产图纸、运输装载、现场安装手册。
- **合规背书**：州/当地 AHJ 项目评审 + 工厂检验；LivingHomes 走 **LEED（27 铂金 + 5 金）** 可持续背书。
- **渠道**：官网（capabilities/工厂页）+ LivingHomes 产品页（LivingHome 7, 2230 SF）+ Z6 健康标准线。**可下载安装手册/图纸（需联系/门控）。**

### 2.2 Autovol
- **SPEC 形态**：40 万平方英尺（Boise）**轻木框架体积式**；模块 1000+ 平方英尺；高完成度交付。规格为**项目级工程文档包**。
- **MasterFormat**：项目级（建筑供货商模式）。
- **关键技术条文**：模块尺寸、轻木框架、工厂完成度、体积式可堆叠。
- **合规背书**：州规章体积模块（工厂检验/州盖章）。
- **渠道**：官网 + 行业报道。**公开一品 Spec Sheet：未查实。**

### 2.3 Guerdon（Boise）
- **SPEC 形态**：大型**商业体积式模块**（多户/员工住房/酒店）。交付为**项目级模块规格 + 施工图纸 + 合规文件**。
- **MasterFormat**：建筑级/酒店标准（CSI 体系）。
- **关键技术条文**：模块尺寸、钢结构/混合、多户与酒店单元、工厂完成度、运输/吊装。
- **合规背书**：州工厂检验 + 项目 AHJ。
- **渠道**：官网 + 行业报道。**公开一品 Spec Sheet：未查实。**

### 2.4 Abodu（ADU 供应商）
- **SPEC 形态**：C 端 ADU“产品线”路线：**340–800 SF、Studio–2BR、单层**；交付为**型号平面 + 尺寸/能效规格 + 安装概览 + turnkey（含 permitting/工程/基础/utility/吊装）**。
- **MasterFormat**：不严格遵循（消费端口吻为主）。
- **关键技术条文**：户型面积/房型/层数、工厂完成度、site 基础/utility 要求、turnkey 服务清单。
- **合规背书**：加州 ADU 路径 + 当地 AHJ + 州 modular 要求（体积模块需 HCD 项）。
- **渠道**：官网产品页 + 行业对比文章（Prefab ADU 评测）。

### 2.5 Mighty Buildings（3D 打印/材料挤出，2025 传出待售）
- **SPEC 形态**：**Mighty Kit System™（工厂 3D 打印面板 + 现场组装）+ 6 款 ADU 型号**。核心是 **3D 打印 Mighty Panel（100% 聚合物复合材料，集成结构+保温+MEP+空气/水/防火屏障+内外饰面）**。
- **MasterFormat**：中高端 prefab，隐含施工文档体系。
- **关键技术条文**：**LUMUS™/Light Stone Material（UV 固化热固复合材料，5 倍混凝土抗拉/弯强、轻约 30%、含约 60% 回收料）**；面板仅 8 英寸厚 5 层材料、PU 泡棉保温定制 R 值、环氧底漆+丙烯酸面漆（无空气/水屏障）；全电动。
- **合规背书**：**EAD 标准 EAD 040287-00-0404 评估 + 按 ICC-EO AC156 抗震评估**、ICC-ES ESR 路径（面板类）。
- **渠道**：官网 Product/Technology 页 + ArchPaper/ACMA 案例。**公开 ESR 具体编号：未逐条核实。**

---

## 三、轻质 / 预制面板 + 单元

### 3.1 Boxabl（本族最强"技术库"范本）
- **SPEC 形态**：**官网设有 Technical Library，公开成套下载**：每型号 **Casita Studio/One Bedroom/Two Bedroom Specifications（Spec Sheet，约 2.4 MB）** + **Generic Plan Set（Casita Two Bedroom 2.4MB / Studio 8.7MB / Standard Generic Plans）** + **Installation Guide（5.2MB）** + **Panel Certification（3.1MB）** + **BabyBox Specifications**。还有型号 Specs（如 BXB-000009）。
- **MasterFormat**：部分遵循（Casita 有 Generic Plan Set 面向 permit）；消费端口吻为主。
- **关键技术条文**：19×19ft/约 361 SF、钢框折叠面板、**折叠后 8.5ft 宽可免特殊许可合法公路运输**、100A 120/240V 全电、30 加仑电热水器、R 值/气密、防火/防涝/飓风级材料、太阳能兼容、一天装毕、$140k turnkey。
- **合规背书**：**ICC-ES ESR-4725（2021/2018 IBC & IRC：结构性能、热障、防风雨层、抗震）** + Panel Certification 文档；**加州对 Casita 已按商业模块/面板降至 25% 检率**（Title 25 体系）。
- **渠道**：官网 boxabl.com/technical-docs（公开下载，不需门控）+ Scribd（型号 Specs）等镜像。

### 3.2 Cover（Cloud Apartments）
- **SPEC 形态**：**专利 snap installment 技术**（嵌线管道的预制木+钢单元快接 / quick-connect MEP），面向多户。交付项目级。
- **MasterFormat**：建筑/多户体系。
- **关键技术条文**：预制木+钢单元、快接 MEP、多户组装。
- **合规背书**：加州/州 modular 工厂检验。
- **状态**：运营/被收购情况需官网确认。**公开一品 Spec Sheet：未查实。**

### 3.3 Blu Homes
- **SPEC 形态**：**发布《Specification Guide》（PDF）** + **《Blu Homes Overview Book》（ArchExpo 可查）**。钢框折叠房。
- **MasterFormat**：中高档 prefab，规范工程图纸。
- **关键技术条文**：**R-38 SIP 屋面、外墙 R-28、楼板 R-32、直立锁边金属屋面、Venmar HRV、水暖/多联机 HVAC 选项**；**气密 6.0–4.0 ACH50**；节能约 50–70%；折叠钢框（运输+现场展开）；多用 SGH 结构工程（覆盖工厂制造、折叠、运输、现场展开全流程图纸逻辑）。LEED certifiable。
- **合规背书**：LEED 可持续背书 + 项目级 SGH 结构工程设计（非 ESR）。
- **渠道**：官网 + ArchExpo/GreenBuildingAdvisor。

### 3.4 LivingHomes（Plant 旗下）
- **SPEC 形态**：随 Plant Prefab 的 Plant Building System 交付完整 Doc Set（见 2.1）。
- **关键技术条文**：LivingHome 7（2230 SF）、Z6 健康可持续框架、**27 个 LEED 铂金 + 5 个金**。
- **合规背书**：LEED 为主。
- **渠道**：官网产品页。

---

## 四、酒店 / 多户

### 4.1 Stack Modular
- **SPEC 形态**：**钢结构体积式（steel volumetric）**，建筑级项目文档。实例 the Walk Norwalk：516 模块、373 户、2 栋建筑（7/5 层）、总 68 万 SF、含 58 套可负担房、2024 年 1BR/2 模块样品房。交付尺寸/结构/连接/吊装规格。
- **MasterFormat**：建筑/多户标准。
- **关键技术条文**：钢结构体积模块尺寸、模块-核心筒/模块间连接（抗震关键）、防火（模块间火焰蔓延、B3 结构稳定等国际研究共识）、吊装/运输序列。
- **合规背书**：项目级 + 州/当地评审；参与 UBC Smart Structures 高层钢模块抗震研究（WSP/Stantec/Bird 合作）。
- **渠道**：官网案例页 + 学术研究引用。

### 4.2 Nuralite
- **状态**：**未获针对性命中**，可能为小型/已停业公司。
- **SPEC 形态/合规/渠道：未查实。** 建议确认公司名/拼写后重新定向。

### 4.3 Cubico
- **状态**：**未获针对性命中**，可能为小型/已停业公司。
- **SPEC 形态/合规/渠道：未查实。** 建议确认后重新定向。

---

## 五、对标小结（给中国供应商的启示）

| 公司 | 典型 SPEC 形态 | MasterFormat? | 关键背书 | 公开渠道 |
|---|---|---|---|---|
| CIMC-MBS | 项目级 BIM+Doc（未公开一品Spec） | 隐含 | 项目属地 | 官网+案例 |
| VBC | BIM+QTO+Finalize specs+州盖章 | 是(建筑级) | 州 stamping | 官网门控 |
| Katerra | 已破产（反面教材） | — | — | 下线 |
| UnTower | 未查实 | — | — | — |
| NXT(Clayton) | 型号平面+尺寸+合同规格 | 否(HUD州标) | HUD/州modular | 官网+零售 |
| Plant Prefab | 3D+shop drawing+装载图+安装手册 | 隐含 | 州AHJ+LEED | 官网 |
| Autovol | 项目级工程包 | 隐含 | 州检验 | 官网 |
| Guerdon | 项目级模块规格 | 建筑级 | 州检验 | 官网 |
| Abodu | 型号+平面+turnkey | 否(消费端) | 州AHJ/ADU | 官网 |
| Mighty Buildings | 面板型号+材料/抗震背书 | 隐含 | EAD040287+AC156 | 官网+媒体 |
| **Boxabl** | **Spec Sheet+Plan Set+安装手册+Panel Cert(ESR)** | 部分 | **ESR-4725+25%检率** | **Technical Library公开** |
| Cover | snap单元+快接MEP(项目) | 建筑级 | 州检验 | 官网(需确认) |
| Blu Homes | **Specification Guide PDF+Overview Book** | 隐含 | LEED+SGH工程 | 官网+ArchExpo |
| LivingHomes | 随Plant Doc Set | 隐含 | LEED铂金/金 | 官网 |
| Stack Modular | 钢结构体积+连接/耐火规格 | 建筑级 | 项目级+抗震研究 | 官网+学术 |
| Nuralite / Cubico | 未查实 | — | — | — |

**给中国供应商的核心对标建议**：
1. **公开"技术库"**：像 Boxabl 一样把 **Spec Sheet + Generic Plan Set + 安装手册 + 认证文件**做成官网公开下载区——这是 C 端与 permit 双赢，比只有"项目案例"更能被美国买家/建筑师迅速采纳入规格书。
2. **走合规背书补齐信任**：低层/面板产品申请 **ICC-ES ESR**（如 ESR-4725 模板），体积式进入加州要对接 **HCD insignia / Title 25 工厂检率体系**，建筑级要有 **州第三方 plan review + 盖章**。
3. **按 MasterFormat 13 42 00 Building Modules / 13 34 23 组织一份 CSI 3-part spec**，并出 BIM 族——这是打进美国建筑师/MEP 工作流的关键，也是多数竞品（除 VBC/Blu）仍较弱的空白可抢占点。
4. **技术条文覆盖四大硬指标**：尺寸与占地、耐火、抗震（含高烈度区连接设计）、能耗（HERS/Title 24/ACH50/R 值），并明确写出工厂完成度、连接与吊装、运输宽度限制、保修年限。

---

*调研说明：本报告基于公开 web 检索，Nuralite、Cubico、UnTower、CIMC-MBS 公开一品 SPEC 形态未能核实，已如实标注；NXT 存在公司名歧义，已按美活跃实体（Clayton NXT）处理。*
