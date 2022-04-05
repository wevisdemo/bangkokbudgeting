<template>
  <div>
    <div class="min-h-screen bg-main py-5">
      <p class="header-3 text-center w-sm-50 mx-auto mb-5">
        ตัวอย่างโครงการที่เกิดขึ้นจริงปี 2564 ในแต่ละด้าน
        พอจะมีโครงการไหนที่เคยได้เห็นหรือได้ยินกันบ้างไหม?
      </p>

      <b-tabs v-model="tabIndex" class="mx-auto tab-project">
        <b-tab active title-link-class="tab-1" @click="resetSlide(1)">
          <template #title>
            <img :src="logo_project_1" width="24" alt="" />
            <p class="m-0 text-3 d-inline-block" v-if="tabIndex == 0">
              มหานครปลอดภัย
            </p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions" ref="slide-1">
              <div
                v-for="(item, index) in project.filter(
                  (x) => x.dimension == 'มหานครปลอดภัย'
                )"
                :key="index"
                class="text-left px-2"
              >
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> :
                  {{ $moment(item.startdate).format("LL") }}
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> :
                  {{ $moment(item.enddate).format("LL") }}
                </p>

                <div class="d-flex text-4 my-1">
                  <b class="mr-1">สถานะ : </b> {{ item.status }}
                  <img
                    width="20"
                    :src="
                      item.status == 'ดำเนินการเสร็จสิ้น'
                        ? icon_finish
                        : icon_in_process
                    "
                    alt=""
                  />
                </div>

                <p class="text-1 font-weight-bold">{{ item.name }}</p>
                <img
                  class="project-img"
                  :src="
                    require(`@/assets/images/section_project_bkk/issue_1/${item.path}`)
                  "
                  width="100%"
                  alt=""
                />
                <p class="text-4 mb-0 mt-2">
                  <b>ผลลัพธ์</b> : {{ item.result }}
                </p>

                <div class="p-2 border-dark border mt-2">
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้รับ : </b>
                    <span class="status">{{ item.budget }}</span> บาท
                  </p>
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้ใช้ไป : </b>
                    <span :class="{ status: item.used != '-' }">{{
                      item.used
                    }}</span>
                    <span v-if="item.used != '-'">บาท</span>
                  </p>
                  <p class="text-4 m-0">
                    <b>หน่วยงานที่รับผิดชอบ</b> : {{ item.institude }}
                  </p>
                  <div class="text-4 m-0">
                    <a :href="item.link" class="" target="_blank">ลิงค์</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>

        <b-tab title-link-class="tab-2" @click="resetSlide(2)">
          <template #title>
            <img :src="logo_project_2" width="24" alt="" />
            <p class="m-0 text-3 d-inline-block" v-if="tabIndex == 1">
              มหานครสีเขียวสะดวกสบาย
            </p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions" ref="slide-2">
              <div
                v-for="(item, index) in project.filter(
                  (x) => x.dimension == 'มหานครสีเขียวสะดวกสบาย'
                )"
                :key="index"
                class="text-left px-2"
              >
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> :
                  {{ $moment(item.startdate).format("LL") }}
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> :
                  {{ $moment(item.enddate).format("LL") }}
                </p>

                <div class="d-flex text-4 my-1">
                  <b class="mr-1">สถานะ : </b> {{ item.status }}
                  <img
                    width="20"
                    :src="
                      item.status == 'ดำเนินการเสร็จสิ้น'
                        ? icon_finish
                        : icon_in_process
                    "
                    alt=""
                  />
                </div>

                <p class="text-1 font-weight-bold">{{ item.name }}</p>
                <img
                  class="project-img"
                  :src="
                    require(`@/assets/images/section_project_bkk/issue_2/${item.path}`)
                  "
                  width="100%"
                  alt=""
                />
                <p class="text-4 mb-0 mt-2">
                  <b>ผลลัพธ์</b> : {{ item.result }}
                </p>

                <div class="p-2 border-dark border mt-2">
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้รับ : </b>
                    <span class="status">{{ item.budget }}</span> บาท
                  </p>
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้ใช้ไป : </b>
                    <span :class="{ status: item.used != '-' }">{{
                      item.used
                    }}</span>
                    <span v-if="item.used != '-'">บาท</span>
                  </p>
                  <p class="text-4 m-0">
                    <b>หน่วยงานที่รับผิดชอบ</b> : {{ item.institude }}
                  </p>
                  <div class="text-4 m-0">
                    <a :href="item.link" class="" target="_blank">ลิงค์</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>

        <b-tab title-link-class="tab-3" @click="resetSlide(3)">
          <template #title>
            <img :src="logo_project_3" width="24" alt="" />
            <p class="m-0 text-3 d-inline-block" v-if="tabIndex == 2">
              มหานครสำหรับทุกคน
            </p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions" ref="slide-3">
              <div
                v-for="(item, index) in project.filter(
                  (x) => x.dimension == 'มหานครสำหรับทุกคน'
                )"
                :key="index"
                class="text-left px-2"
              >
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> :
                  {{ $moment(item.startdate).format("LL") }}
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> :
                  {{ $moment(item.enddate).format("LL") }}
                </p>

                <div class="d-flex text-4 my-1">
                  <b class="mr-1">สถานะ : </b> {{ item.status }}
                  <img
                    width="20"
                    :src="
                      item.status == 'ดำเนินการเสร็จสิ้น'
                        ? icon_finish
                        : icon_in_process
                    "
                    alt=""
                  />
                </div>

                <p class="text-1 font-weight-bold">{{ item.name }}</p>
                <img
                  class="project-img"
                  :src="
                    require(`@/assets/images/section_project_bkk/issue_3/${item.path}`)
                  "
                  width="100%"
                  alt=""
                />
                <p class="text-4 mb-0 mt-2">
                  <b>ผลลัพธ์</b> : {{ item.result }}
                </p>

                <div class="p-2 border-dark border mt-2">
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้รับ : </b>
                    <span class="status">{{ item.budget }}</span> บาท
                  </p>
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้ใช้ไป : </b>
                    <span :class="{ status: item.used != '-' }">{{
                      item.used
                    }}</span>
                    <span v-if="item.used != '-'">บาท</span>
                  </p>
                  <p class="text-4 m-0">
                    <b>หน่วยงานที่รับผิดชอบ</b> : {{ item.institude }}
                  </p>
                  <div class="text-4 m-0">
                    <a :href="item.link" class="" target="_blank">ลิงค์</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>

        <b-tab title-link-class="tab-4" @click="resetSlide(4)">
          <template #title>
            <img :src="logo_project_4" width="24" alt="" />
            <p class="m-0 text-3 d-inline-block" v-if="tabIndex == 3">
              มหานครกระชับ
            </p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions" ref="slide-4">
              <div
                v-for="(item, index) in project.filter(
                  (x) => x.dimension == 'มหานครกระชับ'
                )"
                :key="index"
                class="text-left px-2"
              >
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> :
                  {{ $moment(item.startdate).format("LL") }}
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> :
                  {{ $moment(item.enddate).format("LL") }}
                </p>

                <div class="d-flex text-4 my-1">
                  <b class="mr-1">สถานะ : </b> {{ item.status }}
                  <img
                    width="20"
                    :src="
                      item.status == 'ดำเนินการเสร็จสิ้น'
                        ? icon_finish
                        : icon_in_process
                    "
                    alt=""
                  />
                </div>

                <p class="text-1 font-weight-bold">{{ item.name }}</p>
                <img
                  class="project-img"
                  :src="
                    require(`@/assets/images/section_project_bkk/issue_4/${item.path}`)
                  "
                  width="100%"
                  alt=""
                />
                <p class="text-4 mb-0 mt-2">
                  <b>ผลลัพธ์</b> : {{ item.result }}
                </p>

                <div class="p-2 border-dark border mt-2">
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้รับ : </b>
                    <span class="status">{{ item.budget }}</span> บาท
                  </p>
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้ใช้ไป : </b>
                    <span :class="{ status: item.used != '-' }">{{
                      item.used
                    }}</span>
                    <span v-if="item.used != '-'">บาท</span>
                  </p>
                  <p class="text-4 m-0">
                    <b>หน่วยงานที่รับผิดชอบ</b> : {{ item.institude }}
                  </p>
                  <div class="text-4 m-0">
                    <a :href="item.link" class="" target="_blank">ลิงค์</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>

        <b-tab title-link-class="tab-5" @click="resetSlide(5)">
          <template #title>
            <img :src="logo_project_5" width="24" alt="" />
            <p class="m-0 text-3 d-inline-block" v-if="tabIndex == 4">
              มหานครประชาธิปไตย
            </p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions" ref="slide-5">
              <div
                v-for="(item, index) in project.filter(
                  (x) => x.dimension == 'มหานครประชาธิปไตย'
                )"
                :key="index"
                class="text-left px-2"
              >
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> :
                  {{ $moment(item.startdate).format("LL") }}
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> :
                  {{ $moment(item.enddate).format("LL") }}
                </p>

                <div class="d-flex text-4 my-1">
                  <b class="mr-1">สถานะ : </b> {{ item.status }}
                  <img
                    width="20"
                    :src="
                      item.status == 'ดำเนินการเสร็จสิ้น'
                        ? icon_finish
                        : icon_in_process
                    "
                    alt=""
                  />
                </div>

                <p class="text-1 font-weight-bold">{{ item.name }}</p>
                <img
                  class="project-img"
                  :src="
                    require(`@/assets/images/section_project_bkk/issue_5/${item.path}`)
                  "
                  width="100%"
                  alt=""
                />
                <p class="text-4 mb-0 mt-2">
                  <b>ผลลัพธ์</b> : {{ item.result }}
                </p>

                <div class="p-2 border-dark border mt-2">
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้รับ : </b>
                    <span class="status">{{ item.budget }}</span> บาท
                  </p>
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้ใช้ไป : </b>
                    <span :class="{ status: item.used != '-' }">{{
                      item.used
                    }}</span>
                    <span v-if="item.used != '-'">บาท</span>
                  </p>
                  <p class="text-4 m-0">
                    <b>หน่วยงานที่รับผิดชอบ</b> : {{ item.institude }}
                  </p>
                  <div class="text-4 m-0">
                    <a :href="item.link" class="" target="_blank">ลิงค์</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>

        <b-tab title-link-class="tab-6" @click="resetSlide(6)">
          <template #title>
            <img :src="logo_project_6" width="24" alt="" />
            <p class="m-0 text-3 d-inline-block" v-if="tabIndex == 5">
              มหานครแห่งเศรษฐกิจและการเรียนรู้
            </p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions" ref="slide-6">
              <div
                v-for="(item, index) in project.filter(
                  (x) => x.dimension == 'มหานครแห่งเศรษฐกิจและการเรียนรู้'
                )"
                :key="index"
                class="text-left px-2"
              >
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> :
                  {{ $moment(item.startdate).format("LL") }}
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> :
                  {{ $moment(item.enddate).format("LL") }}
                </p>

                <div class="d-flex text-4 my-1">
                  <b class="mr-1">สถานะ : </b> {{ item.status }}
                  <img
                    width="20"
                    :src="
                      item.status == 'ดำเนินการเสร็จสิ้น'
                        ? icon_finish
                        : icon_in_process
                    "
                    alt=""
                  />
                </div>

                <p class="text-1 font-weight-bold">{{ item.name }}</p>
                <img
                  class="project-img"
                  :src="
                    require(`@/assets/images/section_project_bkk/issue_6/${item.path}`)
                  "
                  width="100%"
                  alt=""
                />
                <p class="text-4 mb-0 mt-2">
                  <b>ผลลัพธ์</b> : {{ item.result }}
                </p>

                <div class="p-2 border-dark border mt-2">
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้รับ : </b>
                    <span class="status">{{ item.budget }}</span> บาท
                  </p>
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้ใช้ไป : </b>
                    <span :class="{ status: item.used != '-' }">{{
                      item.used
                    }}</span>
                    <span v-if="item.used != '-'">บาท</span>
                  </p>
                  <p class="text-4 m-0">
                    <b>หน่วยงานที่รับผิดชอบ</b> : {{ item.institude }}
                  </p>
                  <div class="text-4 m-0">
                    <a :href="item.link" class="" target="_blank">ลิงค์</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>

        <b-tab title-link-class="tab-7" @click="resetSlide(7)">
          <template #title>
            <img :src="logo_project_7" width="24" alt="" />
            <p class="m-0 text-3 d-inline-block" v-if="tabIndex == 6">
              การบริหารจัดการเมืองมหานคร
            </p>
          </template>
          <div class="p-4">
            <VueSlickCarousel v-bind="slickOptions" ref="slide-7">
              <div
                v-for="(item, index) in project.filter(
                  (x) => x.dimension == 'การบริหารจัดการเมืองมหานคร'
                )"
                :key="index"
                class="text-left px-2"
              >
                <p class="text-4 m-0">
                  <b>เริ่มต้นโครงการ</b> :
                  {{ $moment(item.startdate).format("LL") }}
                </p>
                <p class="text-4 m-0">
                  <b>สิ้นสุดโครงการ</b> :
                  {{ $moment(item.enddate).format("LL") }}
                </p>
                <div class="d-flex text-4 my-1">
                  <b class="mr-1">สถานะ : </b> {{ item.status }}
                  <img
                    width="20"
                    :src="
                      item.status == 'ดำเนินการเสร็จสิ้น'
                        ? icon_finish
                        : icon_in_process
                    "
                    alt=""
                  />
                </div>
                <p class="text-1 font-weight-bold">{{ item.name }}</p>
                <img
                  :src="
                    require(`@/assets/images/section_project_bkk/issue_7/${item.path}`)
                  "
                  width="100%"
                  alt=""
                />
                <p class="text-4 mb-0 mt-2">
                  <b>ผลลัพธ์</b> : {{ item.result }}
                </p>

                <div class="p-2 border-dark border mt-2">
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้รับ : </b>
                    <span class="status">{{ item.budget }}</span> บาท
                  </p>
                  <p class="text-4 m-0">
                    <b>งบประมาณที่ได้ใช้ไป : </b>
                    <span :class="{ status: item.used != '-' }">{{
                      item.used
                    }}</span>
                    <span v-if="item.used != '-'">บาท</span>
                  </p>
                  <p class="text-4 m-0">
                    <b>หน่วยงานที่รับผิดชอบ</b> : {{ item.institude }}
                  </p>
                  <div class="text-4 m-0">
                    <a :href="item.link" class="" target="_blank">ลิงค์</a>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </b-tab>
      </b-tabs>
    </div>
    <div class="bg-main min-h-screen ">
      <div class="d-flex justify-content-center h-100 position-relative">
        <img :src="section_5_pic" alt="" class="mx-3 section_5_pic" />
        <div class="section-text">
          <h3 class="header-3">
            ในปีถัดไป 2565 กรุงเทพมหานครจะมุ่งพัฒนาและขับเคลื่อน <b> “มหานครทั้ง 7
            ด้าน”</b> ให้เกิดขึ้นต่อไป
          </h3>
          <br />
          <h3 class="text-1">
            ถ้าบางส่วนของงบฯ ที่คุณมีส่วนช่วยตัดสินใจให้ถูกใช้อย่างตรงจุดได้
            (Bangkok Budgeting)
          </h3>
          <br />
          <h3 class="text-1">คุณคิดว่าควรนำไปพัฒนากับเรื่องอะไรบ้าง?</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as projects from "~/assets/data/project.json";

export default {
  data() {
    return {
      tabIndex: 0,
      project: projects.default,
      section_5_pic: require("~/assets/images/section_5_pic.png"),
      logo_project_1: require("~/assets/images/section_project_bkk/icon_bar_01.svg"),
      logo_project_2: require("~/assets/images/section_project_bkk/icon_bar_02.svg"),
      logo_project_3: require("~/assets/images/section_project_bkk/icon_bar_03.svg"),
      logo_project_4: require("~/assets/images/section_project_bkk/icon_bar_04.svg"),
      logo_project_5: require("~/assets/images/section_project_bkk/icon_bar_05.svg"),
      logo_project_6: require("~/assets/images/section_project_bkk/icon_bar_06.svg"),
      logo_project_7: require("~/assets/images/section_project_bkk/icon_bar_07.svg"),
      icon_finish: require("~/assets/images/section_project_bkk/icon_finish.svg"),
      icon_in_process: require("~/assets/images/section_project_bkk/icon_in_process.svg"),
      slickOptions: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        infinite: false,
        centerPadding: "50px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  methods: {
    resetSlide(id) {
      this.$refs["slide-" + id].goTo(0);
    },
  },
};
</script>

<style lang="scss">
.tab-1 {
  background-color: #538dff !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-2 {
  background-color: #6adc7b !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-3 {
  background-color: #ff583e !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-4 {
  background-color: #ff9fdf !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-5 {
  background-color: #ff8310 !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-6 {
  background-color: #c3da14 !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-7 {
  background-color: #d170ff !important;
  color: #000 !important;
  font-weight: bold;
}

.tab-content {
  border: 1px solid #000000;
  border-radius: 0px 10px 0px 0px;

  @media #{$mq-mini-mobile} {
    border-radius: 0;
  }
}

.nav {
  @media #{$mq-mini-mobile} {
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }
}

.nav-tabs .nav-link {
  border-color: #000 !important;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  @media #{$mq-mini-mobile} {
    display: flex;
    align-items: center;
    height: 100%;

    p {
      white-space: nowrap;
    }
  }
}
</style>

<style lang="scss" scoped>
.bg-main {
  padding: 96px 139px;
  text-align: center;

  @media #{$mq-mobile} {
    padding: 20px;
  }
}

.section_5_pic {
  max-width: 600px;
  @media #{$mq-mini-mobile} {
    width: 100%;
  }
}

.section-text {
  position: absolute;
  top: 35%;
  max-width: 480px;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media #{$mq-mini-mobile} {
    h3 {
      font-size: 12px;
    }
  }
}

.status {
  padding: 2px 10px;
  background: #c4c4c4;
  font-weight: bold;
}

a {
  word-break: break-all;
  color: #538dff;
  font-weight: bold;
}

.tab-project {
  max-width: 1000px;
  @media #{$mq-mobile} {
    width: 100%;
  }
}
</style>