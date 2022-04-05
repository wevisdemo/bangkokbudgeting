<template>
  <div>
    <!-- <div class="h-100vh bg-main d-flex justify-content-center align-items-center">
      <h1 class="header-1 font-weight-bold">coming soon on 12 November</h1>
    </div> -->

    <div class="position-relative">
      <WvNavbar :dark="true">
        <NuxtLink to="/" class="menu-link">
          <WvNavButton :dark="true" :active="true">
            Home
          </WvNavButton></NuxtLink
        >
        <NuxtLink to="/#explore" class="menu-link">
          <WvNavButton :dark="true">Explore</WvNavButton></NuxtLink
        >
        <NuxtLink to="/#idea" class="menu-link vote">
          <WvNavButton :dark="true" >
            Vote
          </WvNavButton></NuxtLink
        >
        <NuxtLink to="/about" class="menu-link">
          <WvNavButton :dark="true">About</WvNavButton></NuxtLink
        >
      </WvNavbar>
      <div class="vote-here d-none d-sm-block">
        <div v-if="menu_list[2].name === 'Vote'">
          <lottie :options="defaultOptions"></lottie>
        </div>
      </div>
    </div>
    <IntroSection />
    <ProblemSection />
    <ScoreSection />
    <ExploreTreeMap id="explore" />
    <TreeMapSection />
    <ProjectSection />
    <ChooseProjectSection id="idea" />
    <EndSection />
    <VideoSection />
    <Conclusion />
    <WvFooter :dark="true" />
    <div class="cookie-tab" v-if="cookies">
      <div class="d-flex justify-content-center box">
        <button class="text-1 font-weight-bold mr-sm-3" @click="saveCookies()">
          ยอมรับ
        </button>
        <p class="btn-text-2 m-0">
          Punch Up ให้ความสำคัญต่อข้อมูลส่วนบุคคลของท่าน และใช้คุกกี้ (Cookies)
          เพื่อจุดประสงค์ในการพัฒนาประสบการณ์
          การใช้งานในเว็บไซต์นี้เท่านั้นและจะไม่กระทำการเก็บรวบรวม ใช้
          หรือเปิดเผยข้อมูลส่วนบุคคลของท่าน เพื่อประโยชน์อย่างอื่น
          การเข้าใช้งานเว็บไซต์นี้ถือว่าท่านได้อนุญาตให้เราใช้คุกกี้ตาม
          เงื่อนไขที่แจ้งไว้
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import * as animationData from "~/assets/lottie/vote_icon.json";
import Lottie from "vue-lottie/src/lottie.vue";
import WvFooter from "@wevisdemo/ui/components/footer.vue";
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
import WvNavButton from "@wevisdemo/ui/components/nav-button.vue";

export default {
  components: { Lottie, WvFooter, WvNavbar,WvNavButton },
  data() {
    return {
      uuid: uuid.v1(),
      defaultOptions: {
        animationData: animationData.default,
        loop: true,
        autoplay: true,
      },
      cookies: false,
      logo: require("~/assets/images/logo-black.png"),
      logo_white: require("~/assets/images/symbol-mint.png"),
      vote: require("~/assets/images/text_vote.svg"),
      wevis_logo: require("~/assets/images/wevis_logo.svg"),
      menu_list: [
        {
          name: "Home",
          value: "/",
        },
        {
          name: "Explore",
          value: "/#explore",
        },
        {
          name: "Vote",
          value: "/#idea",
        },
        {
          name: "About",
          value: "/about",
        },
      ],
      drawer: false,
    };
  },
  mounted() {
    if (this.$cookies.get("uuid") === undefined) {
      this.cookies = true;
    } else {
      this.cookies = false;
    }
  },
  head() {
    return {
      uuid: uuid.v1(),
      cookies: true,
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: "https://d208eq9ndr4893.cloudfront.net/og_image.png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: "https://d208eq9ndr4893.cloudfront.net/og_image.png",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Bangkok Budgeting อยู่เมืองนี้ ต้องรู้เยอะ",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Bangkok Budgeting อยู่เมืองนี้ ต้องรู้เยอะ",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "ร่วมสร้างสรรค์ ชวนจับตาให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด",
        },
      ],
    };
  },
  methods: {
    async saveCookies() {
      if (!this.$cookies.get("uuid")) {
        this.$cookies.set("uuid", this.uuid);
        this.$cookies.set("isVoted", false);
        this.cookies = false;

        const messageRef = this.$fire.database.ref("user");
        const user_seq = this.$fire.database
          .ref("sequence")
          .child("user_sequence");

        try {
          var a = await user_seq.once("value");
          var r = a.val();

          await messageRef.child(++r).set({
            isInBkk: "",
            hasHouseReg: "",
            district: "",
            province: "",
            userid: this.$cookies.get("uuid"),
          });

          user_seq.set(r);
        } catch (e) {
          alert(e);
          return;
        }
        console.log("create user success");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;
}

.menu-link {
  color: #fff;
  margin: 0 20px !important;
  font-family: "Anuphan", serif;
}

.menu-link:hover {
  text-decoration: none;
}

.vote-here {
  position: absolute;
  width: 50px;
  right: 125px;
}

.cookie-tab {
  position: fixed;
  bottom: 0;
  background: #000000;
  width: 100%;
  padding: 19px;
  color: #fff;
  z-index: 999;
  .box {
    width: 599px;
    margin: auto;

    @media #{$mq-mini-mobile} {
      width: auto;
      flex-direction: column;
      text-align: center;
    }

    button {
      border: 1px solid #ffffff;
      background: transparent;
      color: #fff;
      padding: 0 20px;
      height: 45px;
      margin: auto 0;

      @media #{$mq-mini-mobile} {
        width: 100px;
        margin: 0 auto 10px;
      }
    }
  }
}

.menu-wrap {
  display: flex;
  background: #e8e4d8;
  padding: 20px 20px 0;
  justify-content: space-between;

  @media #{$mq-mini-mobile} {
    padding: 10px 10px 0;
  }

  a {
    color: #000;
    text-decoration: none;
    margin: 0 10px;

    @media #{$mq-mini-mobile} {
      margin-left: 10px;
    }
  }
  a.active {
    font-weight: bold;
  }
}

.menus {
  font-size: 12px;
  font-weight: bold;
}

.wevis-logo {
  width: 100px;
}

.footer {
  background: #000000;
  padding: 40px;

  @media #{$mq-mini-mobile} {
    flex-direction: column;
    padding: 20px;
  }
}

.social a {
  color: #fff;
  padding: 10px 0;
  margin-left: 30px;
  font-size: 24px;

  @media #{$mq-mini-mobile} {
    margin-left: 10px;
  }
}

.vote button {
  color: #ff583e;
}

.menu-box {
  width: 40px;
}
</style>
