<template>
  <div>
    <div class="min-h-screen">
      <div class="position-absolute w-100 logo-box">
        <a href="https://punchup.world/project/" target="_blank"> </a>
      </div>
      <div class="bg-main pt-0">
        <div class="d-flex justify-content-center overflow-hidden">
          <img
            :src="intro_pic_mobile"
            class="intro_pic d-block d-xl-none"
            width=""
          />
          <img :src="intro_pic" class="intro_pic d-none d-xl-block" width="" />
        </div>
      </div>
      <div
        class="min-h-screen bg-main d-flex justify-content-center flex-column"
      >
        <div class="black-box text-center">
          <p class="text-1 m-0">
            ทุกวันนี้เมืองที่เราใช้ชีวิตยังมีหลายอย่างไม่ได้เป็นแบบที่เราวาดฝันไว้ใช่ไหม?
            <br /><br />

            เราเองในฐานะประชาชนผู้เสียภาษีทางตรงและทางอ้อมก็ควรได้ร่วมออกแบบการใช้งบประมาณของเมืองเพื่อสร้างเมืองในแบบที่เราต้องการได้
          </p>
          <p class="header-3 mt-4 green">
            ถ้างั้นขอชวนมาลองเริ่มต้นที่เมืองหลวงอย่างกรุงเทพมหานครกันก่อนเลย!!
          </p>
          <p class="text-4 mt-5 text-uppercase">
            โปรเจกต์นี้เป็นเพียงจุดเริ่มต้นที่ตั้งใจให้ทุกคนได้มีส่วนร่วมทดลองออกแบบงบประมาณ<br
              class="d-none d-sm-block"
            />ที่จะผลักดันให้เมืองของเราน่าอยู่ สร้างสังคมที่ดี (Good
            Society)<br class="d-none d-sm-block" />
            โดยเริ่มจากกรุงเทพมหานครเพื่อเป็นต้นแบบส่งต่อไปยังจังหวัดอื่นๆ
          </p>
        </div>
        <div class="d-flex justify-content-center mt-5 align-items-center">
          <p class="btn-text-1 text mb-0 mr-2">Share</p>
          <img
            :src="icon_fb"
            class="mx-1 pointer"
            width=""
            v-sharer
            data-sharer="facebook"
            :data-url="`https://bangkokbudgeting.wevis.info`"
          />

          <img
            :src="icon_twitter"
            class="mx-1 pointer"
            width=""
            v-sharer
            data-sharer="twitter"
            :data-url="`https://bangkokbudgeting.wevis.info`"
          />
          <img
            :src="icon_line"
            class="mx-1 pointer"
            width=""
            v-sharer
            data-sharer="line"
            :data-url="`https://bangkokbudgeting.wevis.info`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSharer from "vue-sharer";
import Lottie from "vue-lottie/src/lottie.vue";
import * as liftAnimationData from "~/assets/lottie/intro.json";

export default {
  name: "App",
  components: { Lottie },
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      defaultOptions: {
        animationData: liftAnimationData.default,
        loop: true,
        autoplay: true,
      },
      currStep: null,
      isShow: true,
      intro_pic: require("~/assets/images/desktop_open_text.gif"),
      intro_pic_mobile: require("~/assets/images/mobile_open_text.gif"),
      icon_fb: require("~/assets/images/facebook.png"),
      icon_line: require("~/assets/images/line.png"),
      icon_twitter: require("~/assets/images/twitter.png"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;

  @media #{$mq-tablet} {
    height: auto;
    padding: 50px 0;
  }
}

.black-box {
  background: rgba(0, 0, 0, 0.86);
  color: #fff;
  padding: 42px 86px;
  width: 650px;
  border-radius: 10px;
  margin: 0 auto;

  @media #{$mq-mini-mobile} {
    width: 90%;
    padding: 24px;
  }
}

.pu-logo {
  width: 100vw;
}

.intro_pic {
  width: 100vw;
}
</style>