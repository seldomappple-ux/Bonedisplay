# BoneDisplay™ // 沉浸式视听画册与叙事引擎

> **An Audiovisual Scrollytelling & Digital Zine Engine for creatives, photographers, musicians, and designers.**  
> 移动端优先 · 声画节拍同步 (BPM-Sync) · 暗房美学 · 数据与素材 100% 解耦

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)
[![JavaScript: Vanilla ES6+](https://img.shields.io/badge/JavaScript-Vanilla%20ES6%2B-yellow.svg)](#)
[![Design: Darkroom Zine](https://img.shields.io/badge/Design-Darkroom%20Zine-black.svg)](#)
[![Architecture: Schema--Driven](https://img.shields.io/badge/Architecture-Schema--Driven-blue.svg)](#)

---

## 🏛️ 项目起源与理念 (Philosophy)

传统的作品集与个人主页模板大都充斥着千篇一律的白底栅格与平庸卡片瀑布流。

**BoneDisplay** 旨在打破这一陈规，将**现场演出的声学张力**、**独立摄影画册（Photo Zine）的杂志级排印**与**暗房慢门色温**融为一体。它不仅是一个网页，而是一个具备独立呼吸感、手势交互与节拍律动的**数字展览装置**。

本项目从成熟的舞台摄影独立站点中提炼演进而来，已彻底完成**素材与代码骨架的 100% 解耦**。你无需触碰复杂的 DOM 逻辑，只需替换多媒体资源并编辑一份 `site.config.js`，即可快速衍生出专属的：
- 📸 **独立摄影师 / 视觉艺术家现场画册**
- 🎸 **独立乐队 / 音乐人巡演专辑发布页 (EPK)**
- 👗 **潮流 / 先锋时尚品牌胶囊系列 Lookbook**
- 🎨 **3D 概念设计 / 影视先导交互展示页**
- 👤 **极具个人辨识度的沉浸式数字自我介绍**

---

## ✨ 核心特性 (Key Features)

1. **声画节拍同步引擎 (BPM Rhythmic Sync)**：
   - 随音乐的节拍周期自动换算毫秒级卡点；
   - 采用自调度单链定时器，杜绝传统 `setInterval` 累加与竞态；
   - 深度兼容现代移动端浏览器的 Autoplay 限制，支持触摸即解锁与优雅淡入淡出。

2. **双缓冲乒乓切图系统 (Ping-Pong Double Buffering)**：
   - 画格切换采用底层图层与表层图层交替淡入淡出（Ping-Pong Buffer）；
   - 配合智能邻近画作预解码（Neighbor Pre-decoding），彻底消灭移动端切图白屏与二次重绘闪烁。

3. **原生级移动端手势与系统事件深度接管**：
   - **Popstate 路由阻断**：按安卓物理返回键或 iOS 侧滑返回时，优先优雅关闭画廊检视层，不退出网页；
   - **屏幕边缘轻滑返回 (Native Edge Swipe Dismiss)**：真实物理阻尼跟随；
   - **Touch-Action 精细化防冲突**：杜绝手势与系统下拉刷新发生冲突。

4. **流体暗房微物理学 (Fluid Scrollytelling Physics)**：
   - **镜头快门旋转盘 (Rotor Iris)**：随滚动高度实时精密旋转；
   - **慢门游丝光轨 (SVG Light Trails)**：随滚动视差动态计算生长；
   - **慢门环境光晕 (Caustic Ambient Bleed)**：随滚动由赤橙演进为冷蓝与暗金。

5. **单一真实数据源架构 (100% Schema-Driven)**：
   - 全站所有文字、诗行、章节、图片路径、社媒链接均由根目录的 `site.config.js` 单点驱动；
   - 零私人隐私泄露，自带开箱即用的几何暗房 SVG 占位素材库。

---

## 📂 工程架构设计 (Project Architecture)

```text
bonedisplay/
├── assets/
│   ├── audio/                     # 节拍音频存放目录
│   ├── css/
│   │   └── bonedisplay.css        # 暗房质感、光晕、胶片颗粒核心样式库
│   ├── icons/                     # 通用矢量图标
│   └── placeholders/              # 免版权开箱即用占位素材库 (SVG)
├── scripts/
│   └── check_assets.py            # 素材健康与配置完整度自动化体检脚本
├── src/
│   ├── core/                      # 引擎核心模块
│   │   ├── AudioEngine.js         # 音频调度与 BPM 律动
│   │   ├── GestureEngine.js       # 触控、边缘滑动与 Popstate 历史栈
│   │   ├── PingPongSlider.js      # 双缓冲无闪烁轮换滑块
│   │   ├── ScrollPhysics.js       # 镜头旋转与视差滚动物理
│   │   └── ViewerEngine.js        # 巨幅暗室检视层与预解码
│   └── renderer/                  # 动态挂载与配置解析渲染器
├── .gitignore                     # Git 忽略规范
├── index.html                     # 语义化无硬编码的纯净 HTML 骨架
├── LICENSE                        # MIT 开源许可证
├── package.json                   # NPM 脚本与项目元数据
├── README.md                      # 开源说明文档 (当前文件)
└── site.config.js                 # 全局配置中心与内容 Schema
```

---

## ⚡ 快速上手 (Quick Start)

### 1. 克隆仓库
```bash
git clone https://github.com/seldomappple/bonedisplay.git
cd bonedisplay
```

### 2. 本地预览 (零依赖秒启动)
因为采用纯原生 ESM 架构，你无需复杂的编译等待：
```bash
# 方式 A：使用内置脚本
npm run dev

# 方式 B：使用任意静态服务器 (如 Python、Live Server)
python -m http.server 3000
```
在浏览器中打开 `http://localhost:3000` 即可体验。

### 3. 一键校验素材完整性
在替换自己的图片与音频后，运行体检脚本确保无 404 或超大体积图片：
```bash
npm run check-assets
```

---

## 🛠️ 自定义配置指南 (Customization)

所有自定义均在根目录的 `site.config.js` 中完成：

```javascript
export const SITE_CONFIG = {
  // 修改品牌与宣言
  profile: {
    brand: "YOUR_BRAND™",
    tagline: "YOUR CUSTOM TAGLINE",
    manifesto: {
      paragraphs: ["你的态度宣言第一行", "第二行..."]
    }
  },

  // 修改背景音乐与节拍卡点
  audio: {
    src: "assets/audio/your_song.mp3",
    bpm: 120, // 调整为对应曲目的真实 BPM
    label: "120 BPM"
  },

  // 自由配置你的章节作品集
  chapters: [
    {
      id: "chapter-01",
      number: "01",
      title: "作品集第一章",
      items: [
        { src: "assets/images/01.webp", title: "作品名", caption: "参数或背后的故事" }
      ]
    }
  ]
};
```

---

## 🗺️ 演进路线图 (Roadmap)

- [x] **第一阶段：骨架剥离与解耦**
  - [x] 抽离所有个人私有素材与硬编码
  - [x] 建立 `site.config.js` 标准 Schema
  - [x] 搭建开源项目结构与自动化体检脚本
- [ ] **第二阶段：引擎模块化 (Engine Core Modularization)**
  - [ ] 封装独立类库：`AudioEngine`, `GestureEngine`, `PingPongSlider`, `ScrollPhysics`
  - [ ] 移除内联 CSS，整合统一设计变量
- [ ] **第三阶段：配置化渲染器 (Schema-Driven Dynamic Renderer)**
  - [ ] 根据 `site.config.js` 自动生成 DOM 章节，消灭冗余 HTML
- [ ] **第四阶段：智能视听升级**
  - [ ] 基于 Web Audio API 的实时频谱瞬态检测（真正的自动鼓点卡点）
  - [ ] WebGL 慢门流光与着色器特效

---

## 📄 开源许可证 (License)

本项目基于 [MIT 许可证](LICENSE) 开源。欢迎自由使用、复刻（Fork）以及构建属于你自己的创意数字展陈。
