const BASE_URL = "https://bangkokbudgeting.wevis.info";
const array = [];
const arrayDistrict = ["bangbon", "bangkapi", "bangkhae", "bangkhen", "bangkholaem", "bangkhunthian", "bangna", "bangphlat", "bangrak", "bangsue", "bangkoknoi", "bangkokyai", "buengkum", "chatuchak", "chomthong", "dindaeng", "donmueang", "dusit", "huaikhwang", "khannayao", "khlongsamwa", "khlongsan", "khlongtoei", "laksi", "latkrabang", "latphrao", "minburi", "nongchok", "nongkhaem", "pathumwan", "phasicharoen", "phayathai", "phrakhanong", "phranakhon", "pomprapsattruphai", "prawet", "ratburana", "ratchathewi", "saimai", "samphanthawong", "saphansung", "sathon", "suanluang", "talingchan", "thawiwatthana", "thonburi", "thungkhru", "wangthonglang", "watthana", "yannawa"]

const arrayProblem = ["ในการจัดการขยะมากขึ้น", "พัฒนาทางเท้าทางข้ามมากขึ้น", "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม", "จัดการการจราจรติดขัด", "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง", "เพิ่มพื้นที่สีเขียวให้มากขึ้น", "พัฒนาระบบการศึกษามากขึ้น", "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ", "จัดระเบียบผังเมืองให้เหมาะสม", "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ"]

for (var i = 0; i < arrayDistrict.length; i++) {
  for (var j = 0; j < 10; j++) {
    array.push("/ogimage/" + arrayDistrict[i] + "-" + (j + 1));
  }
}

array.push("/ogimage/upcountry")

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Bangkok Budgeting อยู่เมืองนี้ ต้องรู้เยอะ",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด"
      },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },

      {
        hid: "twitter:url",
        property: "twitter:url",
        content: BASE_URL
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://wevis.info/wp-content/uploads/2022/01/favicon.png' },
      { rel: 'stylesheet', href: 'https://design-systems.wevis.info/typography.css' },
    ]
  },

  generate: {
    dir: 'dist',
  },
  // router: {
  //   base: "/bangkokbudgeting/"
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/main.scss",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
    "v-autocomplete/dist/v-autocomplete.css",
    '@wevisdemo/ui/styles/typography.css',
    '@wevisdemo/ui/styles/components.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "./plugins/vue-slick-carousel.js" },
    { src: "./plugins/vue-dragscroll.js", mode: "client" },
    { src: "~/plugins/vue-awesome-swiper", mode: "client" },
    { src: "~/plugins/vue-material-checkbox.js", mode: "client" },
    { src: '~/plugins/jszip', mode: 'client' },
    { src: '~/plugins/html2canvas', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
    "@nuxtjs/fontawesome",
    "@nuxtjs/moment",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCwIBLPmMURCSdqe_rQqC4gFrUtteLwbfI",
          authDomain: "participatory-budgeting-a5f34.firebaseapp.com",
          databaseURL:
            "https://participatory-budgeting-a5f34-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "participatory-budgeting-a5f34",
          storageBucket: "participatory-budgeting-a5f34.appspot.com",
          messagingSenderId: "412280397430",
          appId: "1:412280397430:web:d2fd56e866108d5c3c0957"
        },
        services: {
          database: true
        }
      }
    ]
  ],

  moment: {
    locales: ["th"]
  },

  fontawesome: {
    icons: {
      solid: [
        "faStar",
        "faChevronDown",
        "faChevronUp",
        "faArrowDown",
        "faArrowRight",
        "faTimes",
      ],
      brands: [
        "faInstagram",
        "faFacebook",
        "faTwitter",
        "faLinkedin",
      ]
    }
  },

  //loading: '~/components/Loading.vue',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "cookie-universal-nuxt",
    '@nuxtjs/axios',
    'vue-plausible'
  ],
  styleResources: {
    scss: ["~/assets/styles/variables.scss"]
  },

  plausible: {
    domain: 'bangkokbudgeting.wevis.info',
    apiHost: 'https://analytics.punchup.world',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    routes: array
  }
};
