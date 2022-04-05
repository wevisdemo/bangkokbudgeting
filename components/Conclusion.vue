<template>
  <div>
    <div class="bg-main text-center">
      <p class="header-3 w-sm-75 mx-auto">
        สุดท้ายเราหวังว่า จะเห็นมหานครของเรา
        เป็นไปดั่งที่เราเองวาดฝันและเรามีส่วนร่วมในการกำหนดทิศทางการใช้งบฯได้เอง
      </p>
      <div
        class="
          d-flex
          justify-content-center
          my-5
          flex-column flex-sm-row
          align-items-center
        "
      >
        <DistrictDropdown
          @change="onChangeDistrict"
          class="mb-3 mb-sm-0"
          type="3"
        />
        <div class="d-flex mx-1">
          <b-form-select
            v-model="selected"
            :options="options"
            class="select-dropdown"
            @change="onChangeProblem"
            :disabled="district == 'upcountry'"
          ></b-form-select>
        </div>
      </div>

      <div class="ogimage">
        <img
          :src="
            district == 'upcountry'
              ? `https://d208eq9ndr4893.cloudfront.net/og-image/upcountry.png`
              : `https://d208eq9ndr4893.cloudfront.net/og-image/${district}-${problem}.png`
          "
          alt=""
        />
      </div>

      <p class="text-1 mt-5">
        ร่วมส่งต่อความฝันของประชาชน
        ที่อยากมีส่วนร่วมในการพัฒนามหานครของพวกเราเอง
      </p>

      <div class="d-flex justify-content-center mt-5 align-items-center">
        <p class="btn-text-1 text mb-0 mr-2">Share</p>
        <img
          :src="icon_fb"
          class="sharer social-icon pointer mx-1"
          alt=""
          v-sharer
          data-sharer="facebook"
          :data-url="
            district == 'upcountry'
              ? `https://bangkokbudgeting.wevis.info/ogimage/upcountry`
              : `https://bangkokbudgeting.wevis.info/ogimage/${district}-${problem}`
          "
        />
        <img
          :src="icon_twitter"
          class="sharer social-icon pointer mx-1"
          alt=""
          v-sharer
          data-sharer="twitter"
          :data-url="
            district == 'upcountry'
              ? `https://bangkokbudgeting.wevis.info/ogimage/upcountry`
              : `https://bangkokbudgeting.wevis.info/ogimage/${district}-${problem}`
          "
        />
        <img
          :src="icon_line"
          class="sharer social-icon pointer mx-1"
          alt=""
          v-sharer
          data-sharer="line"
          :data-url="
            district == 'upcountry'
              ? `https://bangkokbudgeting.wevis.info/ogimage/upcountry`
              : `https://bangkokbudgeting.wevis.info/ogimage/${district}-${problem}`
          "
        />
      </div>
    </div>
    <div class="bg-main text-center">
      <p class="text-1 w-sm-50 mx-auto">
        โปรเจกต์นี้ทดลองสร้าง “งบประมาณแบบมีส่วนร่วม” ให้กับจังหวัด/เมืองต่าง ๆ
        ในประเทศไทย โดยเริ่มจากกรุงเทพมหานครเป็นต้นแบบพัฒนาไปสู่เมืองอื่น....
      </p>
      <p class="text-1 font-weight-bold">
        มาทำความรู้จักงบประมาณแบบมีส่วนร่วมเพิ่มเติมกัน
      </p>
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 class="text-1 btn-accordion d-flex justify-content-between"
              >งบประมาณแบบมีส่วนร่วม คืออะไร?
              <span class="when-closed">
                <font-awesome-icon icon="chevron-down" />
              </span>
              <span class="when-opened">
                <font-awesome-icon icon="chevron-up" /> </span
            ></b-button>
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text class="text-3 text-left"
                >Bangkok Budgeting (PB) หรือที่เรียกว่า
                งบประมาณแบบมีส่วนร่วม เป็นกระบวนการหรือเครื่องมือทางการบริหาร
                ที่ให้ประชาชนเข้าไปมีส่วนร่วมโดยตรง ในการเข้าถึงทรัพยากร
                และตัดสินใจจัดสรรงบประมาณสอดคล้องกับความต้องการของประชาชนเอง
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 class="text-1 btn-accordion d-flex justify-content-between"
              >ทำอย่างไรจะเป็นงบประมาณแบบมีส่วนร่วม? <span class="when-closed">
                <font-awesome-icon icon="chevron-down" />
              </span>
              <span class="when-opened">
                <font-awesome-icon icon="chevron-up" /> </span
            ></b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <pre class="text-3 text-left">
ตาม citizenlab ได้อธิบายถึง 8 ขั้นตอนที่เป็นได้
1.  การวางรากฐาน ต้องวางแผนการมีส่วนร่วมของประชาชนแบบไหน
2. ชี้แจงรายละเอียดให้ผู้เข้าร่วม ให้ประชาชนได้รับรู้เข้าใจตรงกัน
3. สร้างวิธีการหรือเครื่องมือรวบรวมข้อมูล มีส่วนร่วมได้ง่าย
4. วิเคราะห์ข้อมูลที่ได้รับ  โดยผู้เชี่ยวชาญที่เกี่ยวข้อง
5. แบ่งรูปแบบการมีส่วนร่วม ต้องแบ่งแยกการให้แสดงความคิดเชัดเจน
6. ชี้แจงผลลัพธ์ที่ได้ สื่อสารให้ประชาชนทุกคนทราบ ว่าผลลัพธ์ที่เกิดขึ้นได้อะไร
7. แผนงาน โครงการ ได้รับงบอนุมัติและเกิดขึ้นจริง รัฐต้องเปิดเผย 
‘อย่างโปร่งใสต่อสาธารณะ’ 
8. ทำอย่างต่อเนื่องและเป็นระบบ สร้างการมีส่วนร่วมของประชาชนให้เพิ่มขึ้นต่อไปอย่างต่อเนื่อง
</pre
              >
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 class="text-1 btn-accordion d-flex justify-content-between"
              >ตัวอย่างงบประมาณแบบมีส่วนร่วมที่เกิดขึ้นแล้ว <span class="when-closed">
                <font-awesome-icon icon="chevron-down" />
              </span>
              <span class="when-opened">
                <font-awesome-icon icon="chevron-up" /> </span
            ></b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <pre class="text-3 text-left">
1. Peñalolen, Chile เป็นการให้ประชาชนได้มีส่วนร่วมในการจัดการงบฯ ในแพลตฟอร์มออนไลน์ ภายใต้โครงการ (ในชุมชนของฉัน ฉันตัดสินใจ!) ประชาชนสามารถระบุความต้องการของชุมชนได้
2. Govanhill, Glasgow ดำเนินโครงการ ‘ความไม่เท่าเทียมทางสุขภาพ Equally Well ’ เป็นโครงการนำร่องเปิดโอกาสให้ประชาชนมีส่วนร่วมในงบฯ
3. Tower  Hamlets, ‘You Decide!’ โครงการชื่อว่า ‘คุณตัดสินใจ’ ช่วยกำหนดรูปแบบและตรวจสอบสิ่งที่สำคัญที่ควรจัดในชุมชนเป็นอันดับแรกๆ
4. Porto Alegre, BrazilI ให้คนยากจนและผู้ที่มักถูกกีดกันทางการเมือง เข้ามามีบทบาทด้วย จัดสรรงบประมาณได้มาสู่ส่วนที่จำเป็นหรือเหมาะสมมากที่สุด
              </pre>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <button class="read-btn">อ่านบทความ</button>
    </div>
  </div>
</template>

<script>
import VueSharer from "vue-sharer";
import DistrictDropdown from "./DistrictDropdown.vue";

export default {
  components: { DistrictDropdown },
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      district: "bangbon",
      selected: null,
      icon_fb: require("~/assets/images/facebook.png"),
      icon_line: require("~/assets/images/line.png"),
      icon_twitter: require("~/assets/images/twitter.png"),
      problem: 1,
      options: [
        {
          value: null,
          text: "เลือกเรื่องที่อยากแชร์",
        },
        {
          value: 1,
          text: "ในการจัดการขยะมากขึ้น",
        },
        {
          value: 2,
          text: "พัฒนาทางเท้า ทางข้ามมากขึ้น",
        },
        {
          value: 3,
          text: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม ",
        },
        {
          value: 4,
          text: "จัดการการจราจรติดขัด",
        },
        {
          value: 5,
          text: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
        },
        {
          value: 6,
          text: "เพิ่มพื้นที่สีเขียวให้มากขึ้น ",
        },
        {
          value: 7,
          text: "พัฒนาระบบการศึกษามากขึ้น",
        },
        {
          value: 8,
          text: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
        },
        {
          value: 9,
          text: "จัดระเบียบผังเมืองให้เหมาะสม ",
        },
        {
          value: 10,
          text: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ ",
        },
      ],
    };
  },
  methods: {
    onChangeDistrict(val) {
      if (val[0].en_name != null) {
        this.district = val[0].en_name;

        if (val[0].en_name == "upcountry") {
          this.selected = null;
          this.$cookies.set("isUpCountry", true);
        }

        this.$cookies.set("district", val[0].th_name);
      } else {
        this.district = "bangbon";
        this.$cookies.set("district", "bangbon");
      }
    },
    onChangeProblem(val) {
      if (val != null) {
        this.problem = val;
        var result = this.options.filter((x) => x.value == val);
        this.$cookies.set("problem", result[0].text);
      } else {
        this.problem = 1;
        this.$cookies.set("problem", "ในการจัดการขยะมากขึ้น");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-main {
  padding: 100px;

  @media #{$mq-mini-mobile} {
    padding: 30px;
  }
}

.share {
  background: #e8e4d8;
}

.accordion {
  width: 650px;
  margin: auto;
  @media #{$mq-mobile} {
    width: 100%;
  }
}

.accordion > .card > .card-header {
  background: #e8e4d8;

  .btn-accordion {
    text-align: left;
    background: none;
    color: #000;
    border: none;
  }
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.ogimage {
  border-radius: 10px;
  max-width: 1200px;
  margin: auto;

  img {
    border-radius: 10px;
    border: 1px solid #000000;
    width: 100%;
  }
}

.select-dropdown {
  width: 200px;
  font-family: "Anuphan", serif;
  font-size: 14px;
}

.read-btn {
  background: #ffffff;
  border: 2px solid #000000;
  padding: 10px;
  width: 155px;
  margin-top: 20%;
  font-family: "KondolarThai", serif;
  font-weight: bold;
  font-size: 19px;
}

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>