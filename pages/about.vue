<template>
  <div>
    <div class="position-relative">
      <WvNavbar>
        <NuxtLink to="/" class="menu-link">
          <WvNavButton :dark="true" :active="true">
            Home
          </WvNavButton></NuxtLink
        >
        <NuxtLink to="/#explore" class="menu-link">
          <WvNavButton :dark="true">Explore</WvNavButton></NuxtLink
        >
        <NuxtLink to="/#idea" class="menu-link vote">
          <WvNavButton :dark="true"> Vote </WvNavButton></NuxtLink
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
    <div class="p-5">
      <h1 class="pre-box header-1 mb-5 text-center font-weight-bold">
        Bangkok Budgeting อยู่เมืองนี้ ต้องรู้เยอะ <br />
        ร่วมสร้างสรรค์ ชวนจับตา ให้งบกรุงเทพฯ ถูกใช้อย่างตรงจุด
      </h1>
      <div class="pre-box">
        <h1 class="header-2 mb-5 font-weight-bold">เกี่ยวกับโปรเจกต์นี้</h1>
        <pre class="body-text">
ทุกวันนี้...เมืองที่อาศัยและใช้ชีวิตอยู่ หลายสิ่งหลายอย่างไม่ได้เป็นไปดั่งใจและวาดฝันไว้ ปัญหาหลายอย่างเกิดขึ้นในหลายพื้นที่  เช่น ปัญหาขยะ น้ำเน่าเสีย ทางขึ้น-ลงสำหรับผู้พิการ ผู้สูงอายุ แถมลักษณะปัญหาของแต่ละพื้นที่ยังแตกต่างกันอีก คงจะดีประชาชนในฐานะผู้เสียภาษีทั้งทางตรงและทางอ้อม สามารถมีส่วนในการร่วมออกแบบการใช้งบประมาณเพื่อพัฒนาเมืองของเราเองให้ดีขึ้นและเป็นไปอย่างได้ดั่งที่ต้องการได้

ในหลายประเทศเริ่มเปิดโอกาสให้ประชาชนมีส่วนร่วมกับงบประมาณได้ในรูปแบบที่เรียกว่า “งบประมาณแบบมีส่วนร่วม” (Participatory Budgeting) ซึ่งเป็นเครื่องมือในการมีส่วนร่วมที่ให้ประชาชนในชุมชนสามารถตัดสินเกี่ยวกับการใช้งบประมาณ

ทีม Punch Up & WeVis , องค์กรต่อต้านคอร์รัปชัน (ประเทศ) , Glow Story , Hand Social Enterprise , Good Society Thailand และ Social Integrity Architecture and Mechanism Design Lab  จึงตั้งใจพัฒนาแพลตฟอร์มนี้ในรูปแบบเทคโนโลยีภาคประชาชน (Civic Tech) เพื่อเปิดเผยข้อมูลให้ทุกคนในฐานะผู้เสียภาษี ได้เข้าถึง เข้าใจ และเป็นส่วนหนึ่งของการออกแบบงบประมาณของกรุงเทพมหานคร  โดยเริ่มจากคำถามที่อาจจะคาใจหลายๆ คนว่า ตอนนี้กรุงเทพมหานครวางแผนในการแก้ปัญหาที่เกิดขึ้นอย่างไร? ใช้งบประมาณเท่าไหร่? และในฐานะประชาชน เราจะมีส่วนร่วมแสดงความคิดเห็นได้อย่างไรบ้าง? โดยเราตั้งใจว่าจะนำการร่วมโหวตและความคิดเห็นนี้รวบรวมยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป 

โปรเจกต์นี้นับเป็นโปรเจกต์ทดลองสร้างแพลตฟอร์ม “งบประมาณแบบมีส่วนร่วม” ให้กับจังหวัด/เมืองต่างๆ ในประเทศไทย โดยเริ่มจากเมืองหลวงอย่างกรุงเทพมหานครเป็นต้นแบบ แล้วพัฒนาไปสู่เมืองอื่นๆ พร้อมอยากชวนทุกคนมามีส่วนร่วมในการพัฒนาสังคมให้ดีขึ้น เริ่มต้นจากการเป็นส่วนหนึ่งในการออกแบบงบประมาณ ผ่านการตรวจสอบและมีส่วนร่วมในการแสดงความคิดเห็นเสนอโครงการกับงบประมาณในการพัฒนาเมือง 

เราเชื่อว่าอย่างน้อย...จุดเริ่มต้นนี้จะเป็นสิ่งผลักดันให้เกิดงบประมาณแบบมีส่วนร่วมอย่างแท้จริงในประเทศไทยได้!
</pre
        >

        <h1 class="header-2 mt-5 font-weight-bold">
          ที่มาของข้อมูล & ข้อจำกัด
        </h1>
        <p class="body-text">
          ทางทีมผู้พัฒนา
          ได้ใช้ข้อมูลจากเว็บไซต์ทางการของกรุงเทพมหานครตามลิงก์ต่างๆ ด้านล่าง
          อย่างไรก็ตาม
          เนื่องจากโครงสร้างของข้อมูลไม่ได้จัดทำในรูปแบบเดียวกันอย่างเป็นระบบ
          ไม่อัพเดท และไม่ครบถ้วน บางข้อมูลอยู่ในรูปแบบ pdf
          ทำให้ต้องทำการเรียบเรียงและตรวจสอบจากข้อมูลหลายแห่ง อาจส่งผลข้อมูลได้
          นอกจากนี้งบประมาณที่แสดงในเว็บไซต์ ไม่ใช่งบที่ทำการเบิกจ่ายใช้จริงๆ
          เพราะข้อมูลไม่ครบถ้วน และสอบถามไปยังหน่วยงานแล้ว
          ได้รับคำตอบว่าเป็นเรื่องเฉพาะภายในของเจ้าหน้าที่เท่านั้น
          ซึ่งได้แจ้งเตือนในเว็บ
          หากทางกรุงเทพมหานครมีการเปิดเผยข้อมูลจะนำมาอัพเดทให้ได้
        </p>

        <h1 class="header-2 mt-5 font-weight-bold">อ้างอิงข้อมูลจาก</h1>
        <div class="body-text">
          <a
            target="_blank"
            class="d-block"
            href="http://dp2.bangkok.go.th/mobile/mymenu.php"
            >http://dp2.bangkok.go.th/mobile/mymenu.php</a
          >
          <a target="_blank" class="d-block" href="https://main.bangkok.go.th/"
            >https://main.bangkok.go.th/</a
          >
          <a
            target="_blank"
            class="d-block"
            href="http://www.ratchakitcha.soc.go.th/RKJ/announce/search_result.jsp?openPageTime=1631042151747"
            >http://www.ratchakitcha.soc.go.th/RKJ/announce/search_result.jsp?openPageTime=1631042151747</a
          >
          <a
            target="_blank"
            class="d-block"
            href="https://www.citizenlab.co/blog/civic-engagement/participatory-budgeting/one-tool-multiple-possibilities-three-examples-of-participatory-budgets/
"
            >https://www.citizenlab.co/blog/civic-engagement/participatory-budgeting/one-tool-multiple-possibilities-three-examples-of-participatory-budgets/</a
          >
          <a
            target="_blank"
            class="d-block"
            href="https://www.local.gov.uk/case-studies/govanhill-glasgow
"
            >https://www.local.gov.uk/case-studies/govanhill-glasgow
          </a>
          <a
            target="_blank"
            class="d-block"
            href="https://www.local.gov.uk/case-studies/tower-hamlets-you-decide"
            >https://www.local.gov.uk/case-studies/tower-hamlets-you-decide</a
          >
          <a
            target="_blank"
            class="d-block"
            href="https://www.local.gov.uk/case-studies/case-study-porto-alegre-brazil
"
            >https://www.local.gov.uk/case-studies/case-study-porto-alegre-brazil
          </a>
          <a
            target="_blank"
            class="d-block"
            href="http://one.bangkok.go.th/info/bmainfo/plan_Work/
"
            >ศูนย์สารสนเทศของกรุงเทพมหานคร
          </a>
        </div>

        <h1 class="header-2 mt-5 font-weight-bold">
          นโยบายการนำข้อมูลไปใช้ต่อ
        </h1>
        <p class="body-text">
          ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
          และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
          Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
          โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
          และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
          <br /><br />
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
        </p>

        <h1 class="header-2 mt-5 font-weight-bold">อาสาสมัครร่วมพัฒนา</h1>
        <div class="body-text">
          <p class="font-weight-bold">เขียนโปรแกรม</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/mwlite/in/pimpatipan-angkharuengrattana-560898209"
            >พิมพ์ปฏิภาณ อังคเรืองรัตนา</a
          >,
          <a target="_blank" href="https://github.com/palminister"
            >ธนภัทร จำนงรัตน์</a
          >

          <p class="font-weight-bold mt-3">ออกแบบ</p>
          <p>นัฐพล ไก่แก้ว</p>

          <p class="font-weight-bold">สืบค้นและรวบรวมข้อมูล</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/"
            >ศุภิสรา อิศรานุกูล</a
          >,
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adisak-saiprasert-23a06910a/?fbclid=IwAR0V0TGb8Kp0ktfUsy26pove7hx4nE_-6Z9KiFdCLjWwM0vBooj8BX5MtLg"
            >อดิศักดิ์ สายประเสริฐ</a
          >

          <p class="font-weight-bold mt-3">บรรณาธิการ</p>
          <a target="_blank" href="https://www.linkedin.com/in/thanisara-r/"
            >ธนิสรา เรืองเดช</a
          >

          <p class="font-weight-bold mt-3">ประสานงานและจัดการอื่นๆ</p>
          <p>
            <a target="_blank" href="https://punchup.world/">Punch Up</a> และ
            <a target="_blank" href="https://wevis.info/">Punch Up</a>
            โปรเจกต์ Bangkok Budgeting ได้รับการสนับสนุนทุนในการดำเนินงานจาก
            <a target="_blank" href="https://www.ned.org"
              >National Endowment for Democracy (NED)</a
            >
            และ Good Society ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ
            พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup
            เพื่อดำเนินโครงการ
          </p>

          <p class="font-weight-bold mt-3">ขอขอบคุณผู้ให้ข้อมูล</p>
          <p>ผศ.ดร.ทวิดา กมลเวชช ที่ปรึกษาการพัฒนาการจัดทำแผนกรุงเทพมหานคร</p>
        </div>

        <h1 class="header-2 mt-5 font-weight-bold">Partners</h1>
        <ul class="body-text">
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/goodsocietythailand"
              >Good Society Thailand</a
            >
          </li>
          <li>
            <a target="_blank" href="https://www.glowyourstory.com/"
              >Glow Story</a
            >
          </li>
          <li>
            <a target="_blank" href="http://www.anticorruption.in.th/2016/th/"
              >ACT Thailand</a
            >
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/HANDenterprise"
              >Hand social enterprise</a
            >
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/siamlab.cu"
              >siamlab</a
            >
          </li>
        </ul>
        <div class="d-flex logo-list flex-wrap mb-5">
          <div><img :src="logo_good_society" alt="" /></div>
          <div><img :src="logo_glow" alt="" /></div>
          <div><img :src="logo_act" width="" alt="" /></div>
          <div><img :src="logo_hand" width="" alt="" /></div>
          <div><img :src="logo_siam_lab" width="" alt="" /></div>
        </div>

        <WvButtonGroup :center="true">
          <a
            target="_blank"
            href="https://docs.google.com/spreadsheets/d/125ybYpPOFaluJEvZtbCqqA-qSVilklT9BftNodBLkPI/edit#gid=1296185986"
            class="fb-btn"
            rel="noopener noreferrer"
          >
            <WvButton
              ><svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_314_173)">
                  <path
                    d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-miterlimit="10"
                  />
                  <line
                    x1="10.667"
                    y1="0.5"
                    x2="10.667"
                    y2="13"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_314_173">
                    <rect
                      width="20.8333"
                      height="20"
                      fill="white"
                      transform="translate(0.0834961 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div>ดาวน์โหลดข้อมูล</div>
            </WvButton></a
          >
          <a
            href="https://airtable.com/shryu4errnlj1LWsM"
            class="fb-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WvButton>
              <img
                width="30"
                src="data:image/png;base64,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"
                alt=""
              />
              <span>Feedback</span>
            </WvButton></a
          >
        </WvButtonGroup>

        <WvSharer
          class="mt-5"
          :center="true"
          url="https://bangkokbudgeting.wevis.info"
        />
      </div>
    </div>
    <WvFooter :dark="true" />
  </div>
</template>

<script>
import VueSharer from "vue-sharer";
import * as animationData from "~/assets/lottie/vote_icon.json";
import Lottie from "vue-lottie/src/lottie.vue";
import WvFooter from "@wevisdemo/ui/components/footer.vue";
import WvSharer from "@wevisdemo/ui/components/sharer.vue";
import WvButtonGroup from "@wevisdemo/ui/components/button-group.vue";
import WvButton from "@wevisdemo/ui/components/button.vue";
import WvNavbar from "@wevisdemo/ui/components/navbar.vue";
import WvNavButton from "@wevisdemo/ui/components/nav-button.vue";

export default {
  components: {
    Lottie,
    WvFooter,
    WvSharer,
    WvButtonGroup,
    WvButton,
    WvNavbar,
    WvNavButton,
  },
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      defaultOptions: {
        animationData: animationData.default,
        loop: true,
        autoplay: true,
      },
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
      defaultOptions: {
        animationData: animationData.default,
        loop: true,
        autoplay: true,
      },
      drawer: false,
      icon_fb: require("~/assets/images/facebook.png"),
      icon_line: require("~/assets/images/line.png"),
      icon_twitter: require("~/assets/images/twitter.png"),
      wevis_logo: require("~/assets/images/wevis_logo.svg"),
      logo_mint: require("~/assets/images/symbol-mint.png"),
      vote: require("~/assets/images/text_vote.svg"),
      logo_siam_lab: require("~/assets/images/logo_siam_lab.png"),
      logo_good_society: require("~/assets/images/logo_good_society.png"),
      logo_glow: require("~/assets/images/logo_glow.png"),
      logo_act: require("~/assets/images/logo_act.png"),
      logo_hand: require("~/assets/images/logo_hand.png"),
      logo_white: require("~/assets/images/logo-white.png"),
      download_icon: require("~/assets/images/download-icon.png"),
    };
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start();
    //   setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    // });
  },
  head() {
    return {
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pre-box {
  max-width: 900px;
  margin: auto;

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}

.menu-link {
  //color: #000 !important;
  margin: 0 20px !important;
  font-family: "Anuphan", serif;
  text-decoration: none;
  button {
    color: #000;
  }
}

.menu-link:hover {
  text-decoration: none;
}

.vote-here {
  position: absolute;
  width: 50px;
  right: 125px;
}

.menu-wrap {
  display: flex;
  background: #fff;
  padding: 20px 20px 0;
  justify-content: space-between;

  @media #{$mq-mini-mobile} {
    padding: 10px;
  }

  a {
    color: #000;
    text-decoration: none;
    margin: 0 10px;

    @media #{$mq-mini-mobile} {
      margin-left: 5px;
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

.pu-logo {
  width: 100px;

  @media #{$mq-mini-mobile} {
    width: 70px;
  }
}

a {
  color: #000;
  text-decoration: underline;
  word-break: break-word;
}

.download-btn {
  width: 360px;
  background: #ffffff;
  border: 2px solid #000000;
  padding: 10px;
  margin: auto;
  text-decoration: none;
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

.logo-list {
  align-items: center;
  @media #{$mq-mini-mobile} {
    div {
      max-width: 40px;
      margin: 0 2px;
    }

    img {
      width: 100%;
    }
  }
}

.vote button {
  color: #ff583e;
}

.menu-box {
  width: 46px;
}
</style>