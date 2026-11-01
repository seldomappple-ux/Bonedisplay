/**
 * BoneDisplay™ — Global Configuration & Content Schema
 * 单一真实数据源 (Single Source of Truth)
 * 
 * 将所有个人文案、多媒体资产路径、BPM 节拍与展陈章节彻底解耦。
 * 使用者仅需修改此配置文件并替换 assets 目录资源，即可生成专属的视听数字画册。
 */

export const SITE_CONFIG = {
  // 1. 站点基础元数据
  meta: {
    title: "BoneDisplay™ // Audiovisual Scrollytelling Engine",
    description: "A mobile-first, beat-synchronized digital zine and showcase engine for photographers, visual artists, and music performers.",
    lang: "zh-HK",
    author: "BoneDisplay Community"
  },

  // 2. 创作者与品牌身份 (Profile & Brand)
  profile: {
    brand: "BONEDISPLAY™",
    alias: "DIGITAL ZINE 01",
    location: "30°16'N 120°09'E",
    city: "HANGZHOU",
    timezone: "CST (UTC+8)",
    tagline: "咫尺迷離 TOO CLOSE TO FOCUS.",
    subtagline: "演出現場 · 俱樂部 · 音樂節 · 和一些人像",
    manifesto: {
      paragraphs: [
        "沒有標準機位，也不等燈光就緒。",
        "通常在台下第一排，或者散場後的街頭。",
        "拍一些演出、俱樂部，和剛好在場的人。"
      ],
      english: "No fixed angles, no waiting for the right light. Usually in the front row, or on the street after the show. Just live music, clubs, and the people who happened to be there."
    }
  },

  // 3. 背景原声与节拍引擎配置 (Audiovisual & BPM Sync)
  audio: {
    enabled: true,
    src: "assets/audio/ambient_beat.mp3",
    bpm: 73, // 节拍 BPM (如 73, 120, 85 等)，引擎将自动换算周期卡点
    targetVolume: 0.95,
    autoFadeIn: true,
    label: "73 BPM"
  },

  // 4. 视觉主题与色温微调
  theme: {
    accentColor: "#FF4D00",
    secondaryColor: "#FF8A00",
    voidBackground: "#060504",
    grainOpacity: 0.032
  },

  // 5. 开屏序幕配置 (Curtain Splash)
  curtain: {
    title: "咫尺迷離",
    subtitle: "Too close to focus.",
    enterButtonText: "進入畫廊",
    showWatermark: true,
    watermarkSrc: "assets/placeholders/logo_matrix.svg"
  },

  // 6. 首屏动能律动滑块 (Kinetic Hero Switcher)
  hero: {
    badge: "ARCHIVE // 01",
    taglineTop: "TOO",
    taglineMiddle: "CLOSE",
    taglineBottom: "to FOCUS.",
    works: [
      {
        src: "assets/placeholders/hero_01.svg",
        title: "慢門光軌與現場",
        caption: "1/8s handheld in the front pit — Decisive transient moment."
      },
      {
        src: "assets/placeholders/hero_02.svg",
        title: "赤焰逆光 · 舞台聲浪",
        caption: "Decisive moment in high-contrast stage flash."
      },
      {
        src: "assets/placeholders/hero_03.svg",
        title: "Livehouse 爆裂特寫",
        caption: "Feedback and raw proximity in front of the amplifier."
      }
    ]
  },

  // 7. 核心展陈章节 (Chapters / Sections)
  chapters: [
    {
      id: "chapter-01",
      number: "01",
      whisper: "01 — Light Trails & Riot",
      title: "慢門與失真光軌",
      type: "in-frame-switcher", // 原版排版内画格切换
      items: [
        {
          src: "assets/placeholders/feat1_01.svg",
          title: "主舞台極光狂瀾 01",
          caption: "OUTDOOR ARENA • 體積光束切穿夜空"
        },
        {
          src: "assets/placeholders/feat1_02.svg",
          title: "器樂後搖 · 赤紅音牆 02",
          caption: "Post-rock resonance and crimson stage wash."
        }
      ]
    },
    {
      id: "chapter-02",
      number: "02",
      whisper: "02 — Darkroom Resonance",
      title: "暗房暗涌 · 激奏特寫",
      type: "split-frames", // 广角 + 竖构图双画框
      wideFrame: [
        {
          src: "assets/placeholders/feat2_01.svg",
          title: "暗房暗涌 · 激奏特寫",
          caption: "MAO LIVEHOUSE • 超近距離貼近音箱一米的爆裂動作。"
        }
      ],
      verticalFrame: [
        {
          src: "assets/placeholders/feat2_02.svg",
          title: "爆裂指法 · 冷光反差",
          caption: "Silver halide high grain on fingerboard."
        }
      ]
    },
    {
      id: "chapter-03",
      number: "03",
      whisper: "03 — Street & Halide",
      title: "散場之後 · 街頭膠卷",
      type: "horizontal-reel", // 横向胶卷惯性流
      items: [
        {
          src: "assets/placeholders/feat3_01.svg",
          title: "俱樂部午夜 · 後簾直閃",
          caption: "28MM • Sweat, flash, and raw proximity on the floor."
        },
        {
          src: "assets/placeholders/feat3_02.svg",
          title: "散場街角 · 孤光剪影",
          caption: "Neon reflection and midnight cigarette smoke."
        }
      ]
    }
  ],

  // 8. 巨幅无框暗室全量画廊 (Exhibition Viewer Dataset)
  exhibition: [
    {
      id: "ex-01",
      src: "assets/placeholders/hero_01.svg",
      title: "慢門光軌與現場",
      caption: "Decisive transient capture."
    },
    {
      id: "ex-02",
      src: "assets/placeholders/hero_02.svg",
      title: "赤焰逆光 · 舞台聲浪",
      caption: "High-contrast silver halide exposure."
    },
    {
      id: "ex-03",
      src: "assets/placeholders/feat1_01.svg",
      title: "主舞台極光狂瀾",
      caption: "Outdoor arena smoke and strobes."
    }
  ],

  // 9. 联络与社交矩阵 (Social & Modals)
  social: {
    email: "creator@example.com",
    links: [
      {
        label: "Instagram",
        url: "https://instagram.com",
        icon: "instagram",
        isModal: false
      },
      {
        label: "微信 // Wechat",
        isModal: true,
        modalId: "modal-wechat",
        qrImage: "assets/placeholders/qr_placeholder.svg",
        hint: "掃描二維碼或保存至相簿"
      },
      {
        label: "小紅書 // Xiaohongshu",
        isModal: true,
        modalId: "modal-redbook",
        qrImage: "assets/placeholders/qr_placeholder.svg",
        linkUrl: "https://xiaohongshu.com",
        hint: "掃描二維碼或直達主頁"
      }
    ]
  },

  // 10. 页脚与数字印章 (Colophon)
  colophon: {
    signatureText: "DESIGN BY BONEDISPLAY",
    copyright: "© 2026 BoneDisplay Engine. Open Source MIT License."
  }
};
