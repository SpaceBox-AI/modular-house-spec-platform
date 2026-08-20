# 中国 Modular House 进入美国加州市场 —— 共享规范框架底座（Common Framework）

> **用途**：本文件是钢结构/混凝土/UHPC/木结构各类型 SPEC 框架的**共享底座**，各结构类型框架都以本文件为**通用章节（Division 00/01 + 法规与合规）**之模板与依据，再叠加各自结构专用章节（Division 03/05/06/13 结构核心）与机电章节（Division 21–28）。
>
> **指导文件（编制依据）**：
> 1. `CSI MasterFormat 模块化建筑章节映射表 (3).xlsx` —— 章节骨架与模块化特殊语言（8 工作表）
> 2. `UHPC 模块作为永久性住宅.docx` —— HCD FBH 全流程合规（insignia/DAA/QAA/Gate/ITP）
> 3. `加州模块化供应商与案例研究报告.md` —— 加州供应商、案例、HCD 法规实证
> 4. spec-agent `spec_knowledge_base` 章节模板（MasterFormat 三段式/五类别：标准/性能/供应商/安装/维保）

---

## 0. 合规总纲（所有结构类型共用）

> 📌 源自 `UHPC 模块作为永久性住宅.docx` 与 `加州模块化供应商与案例研究报告.md` 交叉整理。

### 0.1 加州法规路径总览

| 路径 | 法规依据 | 适用 | 责任 |
|---|---|---|---|
| **FBH（Factory-Built Housing）** | HSC §19980、Title 25 Ch.3 Subch.1、Title 24 | 各结构类型模块化住宅通用主路径 | 供应商+业主+HCD |
| **HCD insignia** | HSC §19980（出厂前贴附） | 每模块出厂强制 | 供应商 |
| **DAA/QAA 第三方** | Title 25、HCD FBH 307/305 | DAA审图、QAA检验 | HCD认证第三方 |
| **产品技术依据** | ESR-5874（UHPC专用） | UHPC 模块结构/耐火/材料 | UHPC供应商+结构师+DAA |
| **现场建筑许可** | 地方 AHJ（Planning/Building/Fire/Public Works） | 现场安装、基础、接口、CO | 业主/建筑师/总包 |
| **替代路径（须区分排除）** | HUD 24 CFR 3280（Villa 类） | 非 FBH 产品，规范须明确允许或排除 | 规范作者 |
| **商业模块制造商** | Title 25 §3032（Boxabl 类，25%检验） | 降低州检频率 | HCD |

### 0.2 关键合规硬性要求（写入 Division 01 通用条款）

1. **HCD insignia**：所有在加州首销的 FBH 部件/系统出厂前加贴 insignia（HSC §19980）；经 HCD 批准 QAA 且先有图纸批准（Title 25 Ch.3 Subch.1）。
2. **检验频率（Title 25 §3032）**：新型号初始 **100% 检验**；**首批 10 台**须全检并批准后方可考虑降低频率（Boxabl Casita 经 HCD 降至 25%，减 75%）。
3. **三重放行门槛（发运前）**：DAA 批准图纸 = 现场许可图纸版本；QAA 检查完成且具 HCD insignia；所有 NCR 关闭或有书面偏差处置。
4. **双轨并行管理**：HCD 管工厂产品设计批准 + 质量；地方 AHJ 管现场安装/场地/基础/接口/最终使用。地方建筑许可图纸须每页带 DAA 批准标识 + DAA 批准的安装说明。
5. **验收证据链**：建立**统一合规追溯矩阵**，将每项 ESR 条件、批准图纸版本、工厂检验点、模块编号、运输批次、现场连接、最终检查结果全部关联。

### 0.3 供应链兼容性要点（源自供应商与案例研究）

- 中国供应商对标案例：**CIMC-MBS（全钢、海运集装箱角柱锁紧、中国制造→加州派检验员赴厂）**、**Stack Modular（结构钢体积式、the Walk Norwalk 373户）** —— 均有"加州派检验员赴中国工厂/州外工厂批准"先例，证明**进口模块路径可行**。
- **供应风险条款**（写入制造商资格：投标人须证明财务能力）——加州本地厂不稳（Harbinger/Factory_OS 2026.2 WARN 关闭、Mighty 2025 待售、Veev 2023 清算、Katerra 2021 破产、ZETA 2016 关厂、RAD Urban 倒闭）。
- **现场接口公开信息稀薄** → 规范须要求制造商提供加工图/节点详图（Shattuck 角柱锁紧、Mayfair 现场门户/剪力墙、Cloud PlantCloudConnect snap MEP、LifeMoves 单元-基础连接）。

### 0.4 加州 + 联邦规范流程分布矩阵（★本项核心：规范分布到各章节★）

> 📌 本节把**加州（State of California）与美国联邦（Federal）的规范与合规流程**按 Division/章节**显式分布**——每个章节不止写材料与工艺，还必须把它们对应的**法规条文 + 合规流程停点**写进该章的「引用标准」「性能要求」「安装与执行」三个子节。下表是全项目唯一权威对照，各结构类型框架据此展开，避免遗漏与重复。

#### 0.4.1 加州规范分布（State of California）

| Division / SECTION | 加州规范及条文 | 合规流程锚点（写进该章「执行」子节） | 停点/验收 |
|---|---|---|---|
| Division 00（00 41 00 投标资格） | 加州法院/县政府**采购法**（California Public Contract Code，适用政府项目）；SB 800 Right to Repair（业主-建筑商保修界面） | 预审：HCD insignia 能力 / DAA/QAA 合作史 / 第三方检验参与意愿 / 财务能力（防倒闭，参照近期 WARN 厂家） | 入围资格文件验核 |
| Division 01（01 33 00 提交） | **HSC §19980**（insignia 出厂前置）；**Title 25 Ch.3 Subch.1**（HCD FBH）；HCD FBH 305/307 | DAA 批准图纸 = 现场许可图纸版本；委派设计责任书；隐蔽前 hold point | 图纸 DAA 章 + 提交清单验核 |
| Division 01（01 43 00 QA / 01 45 00 QC） | **Title 25 §3032**（检验频率：新型号 100%、首 10 台全检、可降频至 25%）；HCD FBH QA 计划 | QAA 第三方检验；FAT/SAT 双停点；NCR 关闭；QAA 签字 | Insignia 出厂核验、检率审计 |
| Division 01（01 66 00 吊装/运输） | **Caltrans** 运输限重/限高/许可；CASBP（California Advancement for offsite Best Practices）如涉；Cal/OSHA 现场吊装 | 吊装方案（专工签字）；运输路线限高限重图 | 吊装前安全交底、Caltrans 许可核验 |
| Division 03（03 30 00 基础） | **CBC**（Title 24 Part 2，地基/混凝土章节）；**ASCE 7**（加州 D/E 抗震，经 CBC 引用）；2019 CBC 附 13（Existing/现场震后）不适用新建 | 基础/转换层预埋锚栓 ±2mm；基础验收单（监理+模块厂会签 hold point） | 基础标高/平整度实测交接 |
| Division 05（05 12 00 钢结构） | **CBC（IBC 本章节）+ ASCE 7 + AISC 360**；**AWS D1.8** 加州 D/E 抗震焊接 | 委派设计经**加州执照 SE** 复核签字；扭矩记录 + NDT；抗震焊接 D1.8 | 结构第三方检验停点 |
| Division 06（木结构） | **CBC（IBC Ch.23 + 州修正）**；NDS/WFCM；**Type IIIA/V 层高限制**（CBC） | 委派设计（NDS 计算）经加州执照 SE 复核；州外工厂批准先例（Autovol/Guerdon） | 覆面板/剪力连续性检验 |
| Division 07（隔热/防火封堵） | **CBC Title 24 Part 6 节能**（Envelope R/U 值、气密）；**CFC（California Fire Code，Title 24 Part 9）** 防火封堵；**CRC（California Residential Code，Title 24 Part 2.5）** 1-2户 | 跨模块防火分隔（07 84）；现场水密/气密测试责任划分（07 25/27） | 保温连续性、防火封堵点位验收 |
| Division 13（13 42 00 模块本体） | **Title 25 §3032**（检验频率）+ **HSC §19980**（insignia）；**CBC**；**ICC/MBI 1200/1205** 州采纳状态 | 出厂 FAT + insignia 贴附；现场 SAT；三重放行（DAA 版 / QAA+insignia / NCR 关闭） | 出厂与现场双重停点 |
| Division 13（13 48 00 抗震/声学） | **ASCE 7 / CBC** 抗震连接；**Title 24 Part 6 + 州声学（若适用）** | 模块间接振连续、抗震连接设计 | 安装后检查 |
| Division 21–28（机电） | **Title 24 Part 6 能源**（CEC/Energy Code）；**CPLC（California Plumbing Code，Title 24 Part 5）**；**CEC Electrical（Title 24 Part 3 / California Electrical Code，基于 NEC）**；**CFC** 消防/喷淋 | 工厂预测试 + 现场 TAB/压力试验；抗震支吊架（按 CBC）；即插即接接口 | 调试、现场验收测试 |
| Division 31–33（场地/吊装） | **CBC 地基**；**CFC 场地消防通道**；地方 AHJ（Planning/Building/Fire/Public Works）许可 | 吊车站位/通道、基础开挖、市政接口 | 地方建筑许可 + 场地验收 |
| Division 48（光伏） | **Title 24 Part 6**（PV 与储能新规）；**CPUC / SGIP**（激励，如适用） | 屋面 PV 与模块接口、屋面防火 | 电气验收 + 消防 |

#### 0.4.2 联邦规范分布（Federal / 全美）

> ⚠️ 关键提示：**加州规格并非只写加州法**——凡产品在海运进口、终端销售、联邦融资/保险住宅上使用时，必须下沉联邦条文。中国供应商尤其要分清「**HUD Manufactured（若走）**」与「**FHA/HUD 结构单户 + 进口/劳工/环保联邦法**」。

| 联邦法规 | 内容 | 分布章节与经济影响 |
|---|---|---|
| **HUD 24 CFR 3280/3282**（Manufactured Housing，**可选路径**） | 若作非 FBH 的 Manufactured 产品：联邦结构/防火/能耗/通风 Minimum Property Standards（MPS）+ 联邦标签（red certification label）+ HUD 工厂程序 | **Division 00/01/13**：须在规范里**显式允许或排除**（默认×排除，仅当产品确走此路径才启用条款） |
| **FHA / HUD MPS**（结构单户 Minimum Property Standards） | 需 FHA/联邦融资的住宅结构、能耗、耐用性最低标准 | **Division 03/05/06/13**：材料/构件符合 MPS 的项（常引用 ASTM 等同） |
| **ADA 2010 Standards**（Americans with Disabilities Act）+ **CBC Chapter 11B**（加州采纳） | 无障设计：门宽、动线、卫浴、厨房、单元通行走廊 | **Division 13（模块内部**）、08/10/22/26**：无障碍构件规格现场核验 | 加州市州项目/公共可达单位强制 |
| **Fair Housing Act**（FHA 公平住宅，HUD） | 无障设计要求在 4 户+住宅适用单位 | **Division 13 模块**：可达单元数、可变空间（switchable） |
| **Lead 40 CFR Part 745（若涉旧房翻新/**现场补建） | 含铅漆翻新 RRP 规则；加州还另有 Proposition 65 警告 | **Division 01（现场）/02**：翻新类现场作业通知/认证 |
| **EPA / 可持续** | 非强制，但绿色标签（如需要）：ENERGY STAR（加州 Title 24 常对齐）、LEED 关联 | **Division 01/48**：能效指标与认证提交 |
| **OSHA 29 CFR 1910**（工厂/场外制造 安全）+ **OSHA 29 CFR 1926**（现场吊装/施工安全） | 厂内与现场独立合规，但工期/停工风险 | **Division 01 66（吊装）**、01 74（施工） |
| **进口/关税/合规**（中国出口方） | 美国认可制造标准（如 AAC 板材 **ESR-4725** 类比）、木材 **ISPM-15 烟熏/**热处理、钢铁 Section 232 关税、USMCA 原产地（若涉） | **Division 01 60（产品要求）供应商提交**：材料产地/原产证、海关合规声明 |

#### 0.4.3 使用说明（写给编制者）

1. 每写一个 SECTION 的「引用标准」子节时，对照上表补上对应加州/联邦条文（例如 Division 05 不写 CBC 属遗漏，Division 13 不写 insignia 属遗漏）。
2. 每写「安装与执行」子节时，把上表「合规流程锚点」列的停点（DAA 批准、QAA 签字、insignia、三重放行、Caltrans、CFC 封堵、CEC 节能、ADA 检验）落成该章可执行验收条款。
3. **国家层（Federal）**固定写进 Division 00/01 总则（HUD 3280 排除声明、FHA MPS、ADA、Lead、OSHA、进口合规 5 项），**结构性/工艺性联邦条文**分布到对应结构 Division（3/5/6/13）。
4. 加州主路径永远以 **Title 25 HCD FBH + HSC §19980 + Title 24** 为骨架；联邦层是叠加而非替代。

---

## 1. Division 00 — 采购与合同要求（Procurement & Contracting）

| 章节 | 名称 | 模块化要求（供框架展开） |
|---|---|---|
| 00 00 00 | 合同与采购汇总 | 声明项目采用模块化/场外建造（OMC / Off-Site Modular Construction），定义 module 为单元交付单位 |
| 00 41 00 | 投标与采购 | 制造商资格预审：HCD insignia 能力、DAA/QAA 合作史、财务能力（防供应风险）、第三方检验参与意愿 |
| 00 72 00 | 一般条件 | 明确工厂/现场保修界面划分；**SB 800 Right to Repair** 保修年限（1/2/4/5/10 年）并入合同 |

---

## 2. Division 01 — 一般要求（General Requirements）★核心★

> 📌 本分部是模块化 SPEC 的**灵魂**，承载"模块化特殊语言"。23 条特殊语言检查清单全部落位本章或对应专业分部。

| 章节 | 名称 | ★模块化特殊语言★（依 Excel 清单） |
|---|---|---|
| **01 33 00** | Submittal Procedures 提交资料程序 | 模块加工图、模块 BIM 模型协调、**委派设计责任书**、工厂首件/样板、出厂检验报告、吊装与运输方案；**封闭前隐蔽工程校验停点（hold point）**；模块间接口加工图深度与冲突协调责任人（设计方/模块厂/总包） |
| **01 43 00** | Quality Assurance 质量保证 | 工厂质量计划（FQP）、**可追溯编号**、焊缝与高强度螺栓检验记录、MEP 出厂压力测试记录；**模块出厂合格证 + 第三方驻厂检验**；委派设计符合 IBC/当地 AHJ |
| **01 45 00** | Quality Control 质量控制 | 检验停点（hold point）、**出厂验收 FAT、现场接收 SAT 双重停点**；不合格品处置流程；运输损伤修复流程与返厂判定标准；FAT/SAT 清单项目定制 |
| **01 60 00** | Product Requirements 产品要求 | 模块为"场外预制装配体"；**模块编号、批次、原材料可追溯**；限制现场替代（替代需委派设计复核） |
| **01 66 00** | Product Storage & Handling ★核心★ | 模块运输（振动/倾覆/临时支撑/包装/防潮/路线限高限重）、**吊装（经设计的吊点、重心、平衡梁、吊装方案、禁止非批准吊点、吊车站位与顺序）**、临时防风雨保护、模块标识与就位顺序；**吊装方案专业工程师签字**（源自检查清单：01 66 00 / 05 50 00 / 31 20 00） |
| **01 73 00** | Execution Requirements 执行要求 | 模块就位容差、**累积容差控制**、就位顺序与临时连接、已完工作保护；累积容差与基础容差衔接；容差体系与 ISO 19650 模型一致 |
| 01 74 19 | Construction Waste Mgmt | 区分工厂废弃物（厂内处理）与现场包装废弃物回收 |
| **01 77 00** | Closeout Procedures 竣工收尾 | 模块级 O&M、出厂测试记录移交、**保修界面划分（厂内隐蔽工程 vs 现场）**；模块级 O&M、设备标签与隐蔽连接记录（01 78 23）；模块接口现场变更与隐蔽连接竣工位置、竣工模型更新（01 78 39） |

### 2.1 委派设计条款（Design Delegation）——写入 01 43/01 33

- 模块结构（钢/混凝土/木）、**底盘、吊装构件、临时支撑、MEP 集成**由模块厂委派设计并签字。
- **吊耳、吊点构件、平衡梁**经结构工程师复核，**禁止使用非批准吊点**（计算书、签章、吊装方案）。
- 结构计算、图纸签章由加州执照工程师（California licensed SE）复核（UHPC 改造须由加州执照工程师复核，见 UHPC docx）。

### 2.2 规范引用（Division 01 列出，依 spec-agent 模板）

- **IBC（California Building Code, CBC）**：2025 Title 24；IBC 2021 基
- **IRC**：1-2 户住宅路径
- **ICC/MBI 1200-2021**（OSMC：工厂制造环境/供应链/结构模块/现场组装流程/角色责任/文档）
- **ICC/MBI 1205-2021**（检验与法规合规：许可/厂内现场终检/第三方检验/徽章数据牌）
- **HCD**：Title 25 Ch.3 Subch.1、HCD FBH 305/307
- **MasterSpec / SpecLink**：三段式 Part 1 General / Part 2 Products / Part 3 Execution 模板基底

---

## 3. Division 07 — 防水/保温/防火封堵（Thermal & Moisture）★核心★

> 这是模块化建筑区别于传统现浇的**第二关键分部**（接缝/密封处理）。

| 章节 | 名称 | ★模块化特殊语言★ |
|---|---|---|
| **07 21 00** | Thermal Insulation | **模块间保温连续性、现场接缝保温补做** |
| **07 25 00** | Weather Barriers | **模块间防水/防潮过渡、现场密封、现场水密性测试责任** |
| **07 27 00** | Air Barriers | **模块间气密连续性、鼓风门/气密性测试责任划分（出厂 vs 现场）** |
| 07 46 00 | Siding | 工厂与现场挂板划分、模块间接缝处理、损伤修复 |
| **07 62 00** | Metal Flashing & Trim | **模块拼缝金属泛水、屋面/墙面过渡、女儿墙现场密封；模块间节点详图** |
| **07 84 00** | Firestopping | **模块间防火封堵、楼/屋面、管井与 MEP 穿透防火封堵、耐火极限连续性** |
| **07 90 00** | Joint Protection | **模块间密封胶/背衬/伸缩缝/现场密封；密封胶种类、背衬深度、养护与现场密封验收** |

---

## 4. Division 13/14 — 建筑模块主体与特殊构造 ★用户指定核心★

| 章节 | 名称 | 应用 |
|---|---|---|
| **13 34 00 / 13 34 19** | Fabricated Engineered Structures / Metal Building Systems | 预制工程结构、金属建筑体系现场组装、构件编号、委派设计 |
| **13 34 23** | Fabricated Structures（含 .13 便携移动、.14 预制教室、.16 控制亭、.19 穹顶、.23 变电站控制室、.26 冷库） | **委派设计、出厂容差、运输与吊装、现场组装连接、模块间密封；吊点/重心/运输支撑/现场就位与连接验收** |
| **13 42 00** | **Building Modules（建筑模块，13 40 00 Integrated Construction 组）★模块化本体核心★** | 含 13 42 13 卫浴、13 42 25 酒店、13 42 33 公寓、13 42 43 宿舍、13 42 46 教育、13 42 63 拘留单元。**委派设计、出厂与现场容差、吊装运输、模块间结构/MEP/密封连接、出厂验收与现场接收、可追溯编号。建议设独立分项** |
| 13 44 00 | Modular Mezzanines | 模块化夹层委派设计、连接 |
| **13 48 00** | Sound, Vibration & Seismic Control | **模块间声学连续性、隔振、抗震连接** |
| 13 49 00 | Radiation Protection | 医疗/实验室模块（仅特定项目） |
| 14 20 00 | Elevators | 模块化井道与预制构件协调（仅含预制井道时） |

---

## 5. Division 21–28 — 机电/消防/弱电（所有结构类型共用模块化接口语言）

| 章节 | 名称 | ★模块化特殊语言★ |
|---|---|---|
| 21 05 00 / 21 13 00 | Fire Suppression Common / Sprinkler | **工厂预制消防管道+现场耦合、抗震支吊架、出厂与现场水压试验划分；跨模块喷淋管道、柔性接管、喷头运输保护、现场水压试验** |
| 22 05 00 / 22 11 00 / 22 13 00 / 22 14 00 / 22 40 00 | Plumbing Common/Water/Sanitary/Storm/Fixtures | **工厂压力试验+现场重连、套管与支吊架、检修口；模块间给水连接/冲洗/消毒/压力试验；排水坡度连续+现场耦合+模块接口清扫口；卫浴器具运输保护**（22 40 00：TOTO/系统卫浴重点） |
| 23 05 00 / 23 05 93 / 23 07 00 / 23 31 00 / 23 33 00 / 23 34 00 / 23 81 00 | HVAC Common/TAB/Insulation/Ducts/Accessories/Fans/Decentralized | **出厂与现场测试责任划分、隔振、检修口；模块就位后 TAB、临时封堵、出厂预功能与现场功能测试划分；模块间现场接缝保温补做；跨模块风管连接+漏风测试+运输临时封堵；模块接口风阀/检修口；PTAC/VRF/风机盘管模块化集成** |
| 25 05 00 / 25 30 00 | Integrated Automation | BAS 集成、点位表、跨模块设备寻址、出厂预测试；传感器/控制器出厂测试与现场调试 |
| 26 05 00 / 26 05 19 / 26 05 26 / 26 05 33 / 26 24 16 / 26 27 26 / 26 50 00 | Electrical Common/Cables/Grounding/Raceways/Panelboards/Wiring/Lighting | **模块化布线、接地跨接、临时保护、现场端接；电缆软管、即插式连接器、标识与现场端接；模块框架跨模块接地连续性、跨接；模块接口线管对中、备用线管与穿线；工厂安装配电箱、馈线端接** |
| 27 05 00 / 27 10 00 | Communications / Structured Cabling | 数据线槽、标识、跳线、出厂预测试；跨模块布线、安装后测试认证 |
| 28 05 00 / 28 31 00 | Safety & Security / Fire Detection | 设备寻址、线槽、出厂预测试；**模块火灾报警设备、现场互连、验收测试** |

---

## 6. Division 31–33 — 场地/吊装/市政接口

| 章节 | 名称 | 模块化要求 |
|---|---|---|
| **31 20 00** | Earth Moving ★核心★ | **吊车通道与站位、模块堆场、运输路线限高限重、临时垫层** |
| 31 23 00 | Excavation and Fill | 基础与管线接续开挖 |
| 32 12 00 / 32 13 00 | Flexible/Rigid Paving | 运输路线与吊车垫层恢复 |
| 33 05/10/30/40/70 00 | Utilities | 室外管网与模块接口（给水/排水/雨水/电气接入模块接口） |

---

## 7. Division 48 — 光伏（可选）

| 章节 | 名称 | 模块化要求 |
|---|---|---|
| 48 14 00 | Solar Energy Production Equipment | 模块屋面 PV 集成、屋面接口（仅含 PV 时） |

---

## 8. 通用三段式模板（spec-agent 章节格式规范）

每个具体章节按下述**五类别结构**展开（spec-agent `spec_knowledge_base` 标准重组格式）：

```
## SECTION <编号> — <英文名>（<中文名>）

### 1. 章节信息与关联
MasterFormat | 层级 | 横向关联 Division | 数据来源

### 2. 引用标准（标准类别）
- <标准代号> <名称>（*EN: ...*）      ← ASTM/AISC/AWS/NDS/ACI/NFPA/IBC 等

### 3. 性能要求（性能类别）
- <性能指标、荷载、耐火、能效、容差等具体数值>

### 4. 产品/材料/供应商（供应商类别）
- <材质、牌号、供应商资格、认证>

### 5. 安装与执行（安装类别）
- <施工方法、检验停点、吊装、连接、接口>

### 6. 维护与保修（维保类别）
- <维护周期、保修年限、检验触发条件>
```

---

*（本共享底座由 Modular-Agent 依据三份指导文件 + spec-agent 模板编制；各结构类型框架文件引用本文件）*
