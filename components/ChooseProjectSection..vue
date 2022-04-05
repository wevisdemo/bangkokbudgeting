<template>
  <div>
    <div
      class="p-sm-5 p-3 text-center project-wrapper"
      v-if="isShowChooseProject"
    >
      <p class="header-3">เลือกโครงการที่อยากพัฒนาเลือกได้ 3 โครงการ</p>
      <b-row class="justify-content-center">
        <b-col cols="2" class="d-none d-sm-block">
          <!-- <img :src="illus_section_05" alt="" class="h-100vh" /> -->
          <div class="coin-img"></div>
        </b-col>
        <b-col cols="12" sm="8">
          <div
            class="choice mb-3 mx-auto"
            :class="[
              { islimit: isLimit && !item.isSelected },
              { islimit: isHide },
            ]"
            v-for="(item, index) in project"
            :key="index"
            :style="{
              '--color-hover': item.colorHover,
              backgroundColor: item.isSelected
                ? item.colorHover
                : item.colorOriginal,
            }"
            @click="setSelected(item.id, item.isSelected)"
          >
            <p class="header-3 m-0 font-weight-bold">{{ item.name }}</p>
            <p class="text-4 m-0">({{ item.desc }})</p>
          </div>
        </b-col>
        <b-col cols="2" class="d-none d-sm-block">
          <div class="coin-img"></div>
        </b-col>
      </b-row>

      <div class="text-center">
        <button
          class="sent-comment text-3"
          :disabled="selected_project.length == 0"
          v-if="!isHide"
          @click="sendData"
        >
          ส่งความคิดเห็น
        </button>
        <img
          :src="illus_section_05_horizontal"
          alt=""
          class="w-100 d-block d-sm-none my-3"
        />
      </div>
    </div>

    <div
      class="h-100vh bg-main loading-div p-xl-5"
      :class="{ 'd-none': !isShowLoading }"
    >
      <div class="d-flex justify-content-center h-100 position-relative">
        <div class="lottie-img">
          <lottie :options="defaultOptions"></lottie>
        </div>
      </div>
      <div class="section-text text-center">
        <h3 class="header-2 font-weight-bold m-auto">
          เรากำลังส่งข้อมูลของคุณ...
        </h3>
        <p class="text-1 mx-auto">
          ข้อมูลนี้จะรวบรวมยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป
        </p>
      </div>
    </div>

    <div class="p-3 p-sm-5 text-center h-auto-mobile" id="vote-result">
      <p class="header-3 m-0">ไอเดียโดนใจชาวกรุงเทพฯ ผู้ใช้แพลตฟอร์มนี้</p>
      <p class="text-2 sub">(เลือกดูผลโหวตโครงการจากผู้เล่นทั้งหมด)</p>

      <div class="d-flex justify-content-center">
        <div class="d-flex mx-1 flex-column flex-sm-row text-left">
          <span class="text-3 mr-2 my-auto">ประเภทประชากร</span>
          <b-form-select
            v-model="selected"
            :options="options"
            class="select-dropdown"
            @change="onChangePeopleType"
          ></b-form-select>
        </div>
        <div class="d-flex mx-1 flex-column flex-sm-row text-left">
          <span class="text-3 mr-2 my-auto">พื้นที่</span
          ><DistrictDropdown
            @change="onChangeDistrictFilter"
            :disabled="selected == 3"
            type="2"
          />
        </div>
      </div>

      <div v-for="(item, index) in project" :key="index" class="chart-box">
        <div class="d-flex text px-3">
          <p class="text-1 my-auto">{{ item.name }}</p>
          <p class="text-1 my-auto">
            ({{
              project_count[index].count != 0
                ? (
                    (parseInt(project_count[index].count) /
                      project_count.reduce(
                        (previous, current) => previous + current.count,
                        0
                      )) *
                    100
                  ).toFixed(2) + "%"
                : "0%"
            }})
          </p>
        </div>
        <div
          :style="{
            width:
              project_count[index].count != 0
                ? (
                    (parseInt(project_count[index].count) /
                      project_count.reduce(
                        (previous, current) => previous + current.count,
                        0
                      )) *
                    100
                  ).toFixed(2) + '%'
                : '0%',
            backgroundColor: item.colorHover,
          }"
        ></div>
      </div>
      <hr class="mx-auto my-4" />
      <div
        class="
          d-flex
          justify-content-center
          flex-column flex-lg-row
          mx-auto
          text-left
          mt-3
          budget-box
        "
      >
        <p class="m-0 text-3 w-auto">เทียบกับสัดส่วนงบประมาณกรุงเทพฯ ปี 2564</p>
        <div class="chart w-100 d-flex">
          <div class="bg-blue chart" style="width: 57.81%"></div>
          <div class="bg-green chart" style="width: 13.45%"></div>
          <div class="bg-red chart" style="width: 19.02%"></div>
          <div class="bg-pink chart" style="width: 0.28%"></div>
          <div class="bg-green-2 chart" style="width: 0.18%"></div>
          <div class="bg-purple chart" style="width: 9.26%"></div>
          <div class="bg-orange chart" style="width: 0%"></div>
        </div>
      </div>

      <div
        class="
          d-flex
          flex-column flex-sm-row
          text-left
          mt-5
          justify-content-center
        "
      >
        <div>
          <div class="d-flex align-items-center">
            <div class="bg-blue project-hover mr-3"></div>
            <p class="text-3 m-0">มหานครปลอดภัย (57.81%)</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bg-green project-hover mr-3"></div>
            <p class="text-3 m-0">มหานครสีเขียวสะดวกสบาย (13.45%)</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bg-red project-hover mr-3"></div>
            <p class="text-3 m-0">มหานครสำหรับทุกคน (19.02%)</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bg-pink project-hover mr-3"></div>
            <p class="text-3 m-0">มหานครกระชับ (0.28%)</p>
          </div>
        </div>
        <div class="ml-0 ml-md-4">
          <div class="d-flex align-items-center">
            <div class="bg-green-2 project-hover mr-3"></div>
            <p class="text-3 m-0">มหานครแห่งเศรษฐกิจและเรียนรู้ (0.18%)</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bg-purple project-hover mr-3"></div>
            <p class="text-3 m-0">การบริหารจัดการเมืองมหานคร (9.26%)</p>
          </div>
          <div class="d-flex align-items-center">
            <div class="bg-orange project-hover mr-3"></div>
            <p class="text-3 m-0">มหานครประชาธิปไตย (0%)</p>
          </div>
        </div>
      </div>

      <button class="sent-comment text-3 mt-5" @click="showModalComment">
        <div class="d-flex">
          <img :src="icon_idea" width="20" class="mr-2" alt="" />
          เสนอไอเดียเพิ่มเติม
        </div>
      </button>
    </div>

    <b-modal
      id="modal-2"
      ref="asking-modal"
      title="Second Modal"
      no-fade
      centered
      hide-footer
      hide-header
      hide-backdrop
    >
      <div class="asking-box p-3 text-center">
        <b-button class="close-btn" @click="$bvModal.hide('modal-2')">
          <font-awesome-icon :icon="['fas', 'times']" class="backward mr-1" />
        </b-button>
        <p class="text-1 font-weight-bold">ขอสอบถามสั้นๆเกี่ยวกับคุณ</p>
        <p class="text-4">
          คำตอบของคุณจะใช้เพื่อการประมวลผลข้อมูลบนแพลตฟอร์มนี้และรวบรวมเพื่อ
          ยื่นต่อผู้ว่าราชการจังหวัดกรุงเทพมหานครและหน่วยงานที่เกี่ยวข้องต่อไป
        </p>
        <p class="text-4 mb-1">
          คุณใช้ชีวิตอยู่ในกรุงเทพมหานครหรือไม่? (เรียน/ทำงาน/พักอาศัย)
        </p>
        <div class="text-center">
          <button
            class="isinbkk-btn btn-text-1"
            @click="onClickBkk(true)"
            :class="{
              selected:
                user_info[0].isinbkk == true && user_info[0].isinbkk != null,
            }"
          >
            ใช่
          </button>
          <button
            class="isinbkk-btn btn-text-1"
            @click="onClickBkk(false)"
            :class="{
              selected:
                user_info[0].isinbkk == false && user_info[0].isinbkk != null,
            }"
          >
            ไม่ใช่
          </button>
        </div>
        <p class="text-4 mb-0 mt-2" v-if="isShowDistrict">คุณอยู่เขตไหน?</p>
        <DistrictDropdown
          @change="onChangeDistrict"
          v-if="isShowDistrict"
          type="1"
        />
        <p class="text-4 mb-0 mt-2" v-if="isShowProvince">คุณอยู่จังหวัดไหน?</p>
        <ProvinceDropdown @change="onChangeProvince" v-if="isShowProvince" />
        <p class="text-4 mb-0 mt-2" v-if="isShowDistrict">มีทะเบียนบ้านไหม?</p>
        <div class="text-center" v-if="isShowDistrict">
          <button
            class="has-house-reg-btn btn-text-1"
            @click="onClickHouseReg(true)"
            :class="{
              selected:
                user_info[0].hashousereg == true &&
                user_info[0].hashousereg != null,
            }"
          >
            มี
          </button>
          <button
            class="has-house-reg-btn btn-text-1"
            @click="onClickHouseReg(false)"
            :class="{
              selected:
                user_info[0].hashousereg == false &&
                user_info[0].hashousereg != null,
            }"
          >
            ไม่มี
          </button>
        </div>

        <button
          class="has-house-reg-btn btn-text-1 mt-3"
          @click="onCheckHasCompleteAnswer()"
          :disabled="isDisabled"
        >
          ยืนยัน
        </button>
      </div>
    </b-modal>

    <b-modal
      id="modal-comment"
      ref="comment-modal"
      title="Second Modal"
      no-fade
      centered
      hide-footer
      hide-header
    >
      <p class="header-3 text-white text-center">
        ขอเสนอโครงการเพิ่มเติมเพื่อออกแบบงบประมาณพัฒนาเมือง
      </p>
      <div class="comment-box p-4 text-center">
        <p class="text-1 text-left">มีอะไรเพิ่มเติมอยากเสนอกรุงเทพฯไหม?</p>
        <div>
          <textarea
            name=""
            class="form-control text-4"
            v-model="comment"
            placeholder="เช่น เสนอให้มีโครงการสอนภาษาญี่ปุ่น..."
            id=""
            cols="30"
            rows="10"
            @keyup="onChangeComment"
          ></textarea>
        </div>
        <button
          class="sent-comment text-3 mt-3 bg-white"
          :disabled="isDisabledComment"
          @click="sendComment"
        >
          ส่ง
        </button>
      </div>
    </b-modal>

    <b-modal
      id="modal-cookie"
      ref="cookie-modal"
      title="Second Modal"
      centered
      hide-footer
      hide-header
      hide-backdrop
      no-close-on-backdrop
    >
      <div class="asking-box p-4 text-center" style="min-height: auto">
        <img :src="icon_info" alt="" width="100" />
        <p class="text-1 text-center mt-3">
          กรุณากดยอมรับคุกกี้ก่อน{{ alertText }}
        </p>
      </div>
    </b-modal>

    <b-modal
      id="modal-success"
      ref="success-modal"
      title="Second Modal"
      centered
      hide-footer
      hide-header
      hide-backdrop
      no-close-on-backdrop
    >
      <div class="asking-box p-4 text-center" style="min-height: auto">
        <img :src="icon_info" alt="" width="100" />
        <p class="text-1 text-center mt-3">ส่งสำเร็จ</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
const googleSheetUrlProject =
  "https://cheesy.punchup.world/api/project/617ba453e90567588618dcfb/sheet/project/row";
const googleSheetUrlComment =
  "https://cheesy.punchup.world/api/project/617ba453e90567588618dcfb/sheet/comment/row";
import Axios from "axios";
import * as animationData from "~/assets/lottie/send_project_loading.json";
import * as test from "~/assets/data/test.json";
import firebase from "firebase";
import Lottie from "vue-lottie/src/lottie.vue";

export default {
  components: { Lottie },
  data() {
    return {
      tests: test.default,
      defaultOptions: {
        animationData: animationData.default,
        loop: true,
        autoplay: true,
      },
      alertText: "",
      tabIndex: 0,
      isDisabled: true,
      isDisabledComment: true,
      selected: 1,
      district: null,
      comment: "",
      illus_section_05: require("~/assets/images/illus_section_05.svg"),
      illus_section_05_horizontal: require("~/assets/images/illus_section_05_horizontal.svg"),
      icon_info: require("~/assets/images/icon_info.svg"),
      icon_idea: require("~/assets/images/icon_idea.svg"),
      project: [
        {
          id: 1,
          name: "ปรับปรุงระบบจัดการขยะ",
          desc: "มหานครปลอดภัย",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 2,
          name: "พัฒนาทางเท้า ทางข้าม",
          desc: "มหานครสีเขียวสะดวกสบาย",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 3,
          name: "ปรับปรุงการระบายน้ำและจัดการน้ำท่วม",
          desc: "มหานครปลอดภัย",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 4,
          name: "จัดการการจราจรติดขัด",
          desc: "มหานครสีเขียวสะดวกสบาย",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 5,
          name: "ติดตั้งแสงสว่างและกล้องวงจรอย่างทั่วถึง",
          desc: "มหานครปลอดภัย",
          colorHover: "#538DFF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 6,
          name: "เพิ่มพื้นที่สีเขียว",
          desc: "มหานครสีเขียวสะดวกสบาย",
          colorHover: "#6ADC7B",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 7,
          name: "พัฒนาระบบการศึกษา",
          desc: "มหานครสำหรับทุกคน",
          colorHover: "#C3DA14",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 8,
          name: "สร้างแพลตฟอร์มการมีส่วนร่วมและแสดงความคิดเห็นในการใช้งบฯ",
          desc: "มหานครประชาธิปไตย",
          colorHover: "#D170FF",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 9,
          name: "จัดระเบียบผังเมืองให้เหมาะสม",
          desc: "มหานครกระชับ",
          colorHover: "#FF583E",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
        {
          id: 10,
          name: "ฟื้นฟูสถานที่ท่องเที่ยวสำคัญ",
          desc: "มหานครแห่งเศรษฐกิจและเรียนรู้",
          colorHover: "#C3DA14",
          colorOriginal: "#e5e5e5",
          isSelected: false,
        },
      ],
      project_count: [
        { id: 1, count: 0 },
        { id: 2, count: 0 },
        { id: 3, count: 0 },
        { id: 4, count: 0 },
        { id: 5, count: 0 },
        { id: 6, count: 0 },
        { id: 7, count: 0 },
        { id: 8, count: 0 },
        { id: 9, count: 0 },
        { id: 10, count: 0 },
      ],
      selected_project: [],
      isLimit: false,
      isShowChooseProject: true,
      isShowLoading: false,
      isHide: true,
      isShowDistrict: false,
      isShowProvince: false,
      isAcceptCookie: false,
      isAllDistrict: true,
      sumProject: 0,
      options: [
        {
          value: 1,
          text: "คนกรุงเทพฯ / มีทะเบียนบ้าน",
        },
        {
          value: 2,
          text: "คนกรุงเทพฯ / ไม่มีทะเบียนบ้าน",
        },
        {
          value: 3,
          text: "คนจังหวัดอื่นๆ",
        },
      ],
      user_info: [
        {
          isinbkk: null,
          district: null,
          province: null,
          hashousereg: null,
        },
      ],
    };
  },
  mounted() {
    //this.getData();
    this.getChartData();

    if (
      !this.$cookies.get("isVoted") ||
      this.$cookies.get("isVoted") === undefined
    ) {
      this.isHide = false;
    } else {
      this.isHide = true;
    }
  },
  computed: {
    setWidth(count) {
      var result = 0;
      if (count != 0) result = 100 / count;
      return result;
    },
  },
  methods: {
    async getData() {
      this.isShowLoading = false;

      this.project_count.forEach((element, i) => {
        element.count = 0;
      });

      this.sumProject = 0;

      const ref = this.$fire.database.ref("user");
      var array = [];

      try {
        const snapshots = await ref.once("value");

        if (snapshots.val() != null) {
          for (const [key, value] of Object.entries(snapshots.val())) {
            if (this.selected == 1) {
              if (
                value.isInBkk &&
                value.hasHouseReg &&
                value.district == this.district
              ) {
                array.push(value.userid);
              } else if (
                value.isInBkk &&
                value.hasHouseReg &&
                this.district == null
              ) {
                array.push(value.userid);
              }
            } else if (this.selected == 2) {
              if (
                value.isInBkk &&
                !value.hasHouseReg &&
                value.district == this.district
              ) {
                array.push(value.userid);
              } else if (
                value.isInBkk &&
                !value.hasHouseReg &&
                this.district == null
              ) {
                array.push(value.userid);
              }
            } else {
              if (!value.isInBkk) array.push(value.userid);
            }
          }
        }
      } catch (e) {
        alert(e);
      }

      const refProject = this.$fire.database.ref("project");

      try {
        const snapshots = await refProject.once("value");
        if (snapshots.val() != null) {
          for (const [key, value] of Object.entries(snapshots.val())) {
            for (const arr of array) {
              if (arr == value.userid) {
                if (value.projectid == 1) {
                  this.project_count[0].count += 1;
                } else if (value.projectid == 2) {
                  this.project_count[1].count += 1;
                } else if (value.projectid == 3) {
                  this.project_count[2].count += 1;
                } else if (value.projectid == 4) {
                  this.project_count[3].count += 1;
                } else if (value.projectid == 5) {
                  this.project_count[4].count += 1;
                } else if (value.projectid == 6) {
                  this.project_count[5].count += 1;
                } else if (value.projectid == 7) {
                  this.project_count[6].count += 1;
                } else if (value.projectid == 8) {
                  this.project_count[7].count += 1;
                } else if (value.projectid == 9) {
                  this.project_count[8].count += 1;
                } else {
                  this.project_count[9].count += 1;
                }
              }
            }
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    onChangeComment() {
      if (this.comment != "") this.isDisabledComment = false;
      else this.isDisabledComment = true;
    },
    showModalComment() {
      if (this.$cookies.get("uuid") === undefined) {
        this.alertText = "เสนอไอเดียเพิ่มเติม";
        this.$refs["cookie-modal"].show();
        setTimeout(() => {
          this.$refs["cookie-modal"].hide();
        }, 2000);
      } else {
        if (
          this.$cookies.get("hasAnswer") !== undefined &&
          this.$cookies.get("hasAnswer")
        )
          this.$refs["comment-modal"].show();
        else this.$refs["asking-modal"].show();
      }
    },
    setSelected(id, val) {
      if (this.$cookies.get("uuid") === undefined) {
        this.alertText = "โหวตโครงการ";
        this.$refs["cookie-modal"].show();
        setTimeout(() => {
          this.$refs["cookie-modal"].hide();
        }, 2000);
      } else {
        if (
          this.$cookies.get("hasAnswer") !== undefined &&
          this.$cookies.get("hasAnswer")
        ) {
          this.onCheckIsDuplicate(id);
          if (this.selected_project.length <= 3) {
            var filter = this.project.filter((x) => x.id == id);
            if (!val) filter[0].isSelected = true;
            else filter[0].isSelected = false;
          } else {
          }

          if (this.selected_project.length >= 3) this.isLimit = true;
          else this.isLimit = false;
        } else this.$refs["asking-modal"].show();
      }
    },
    onCheckIsDuplicate(id) {
      if (this.selected_project.length > 0) {
        var index = this.selected_project.indexOf(id);
        if (index !== -1) {
          this.selected_project.splice(index, 1);
        } else this.selected_project.push(id);
      } else {
        this.selected_project.push(id);
      }
    },
    async getChartData() {
      this.project_count.forEach((element, i) => {
        element.count = 0;
      });

      const ref = this.$fire.database.ref("voteProject");

      try {
        const snapshots = await ref.once("value");

        if (this.selected == 1) {
          if (this.isAllDistrict) {
            for (const [key, value] of Object.entries(
              snapshots.val().all_district
            )) {
              var index = key.replace("project_", "");
              this.project_count[parseInt(index) - 1].count = value;
            }
          } else {
            for (const [key, value] of Object.entries(
              snapshots.val().choice_1[this.district.replace("เขต", "")]
            )) {
              var index = key.replace("project_", "");
              this.project_count[parseInt(index) - 1].count = value;
            }
          }
        } else if (this.selected == 2) {
          if (this.isAllDistrict) {
            for (const [key, value] of Object.entries(
              snapshots.val().all_district_nohousereg
            )) {
              var index = key.replace("project_", "");
              this.project_count[parseInt(index) - 1].count = value;
            }
          } else {
            for (const [key, value] of Object.entries(
              snapshots.val().choice_2[this.district.replace("เขต", "")]
            )) {
              var index = key.replace("project_", "");
              this.project_count[parseInt(index) - 1].count = value;
            }
          }
        } else {
          for (const [key, value] of Object.entries(snapshots.val().choice_3)) {
            var index = key.replace("project_", "");
            this.project_count[parseInt(index) - 1].count = value;
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    async sendData() {
      this.isShowLoading = true;
      this.isHide = true;

      var array = [];
      var arrayForExcel = [];
      var arrayFb = [];

      const messageRef = this.$fire.database.ref("user");

      for (var i = 0; i < this.selected_project.length; i++) {
        var result = this.project.filter(
          (x) => x.id == this.selected_project[i]
        );

        array.push({
          projectid: this.selected_project[i],
          userid: this.$cookies.get("uuid"),
        });

        arrayForExcel.push({
          userid: this.$cookies.get("uuid"),
          projectid: this.selected_project[i],
          name: this.project.filter((x) => x.id == this.selected_project[i])[0]
            .name,
          dimension: this.project.filter(
            (x) => x.id == this.selected_project[i]
          )[0].desc,
          district: "",
          province: "",
          hashousereg: "",
          isinbkk: "",
          date: this.$moment().format("DD-MM-YYYY"),
        });
      }

      try {
        var data = await messageRef.once("value");
        var r = data.val();

        for (const [key, value] of Object.entries(r)) {
          if (value.userid == this.$cookies.get("uuid")) {
            arrayFb.push(value);
            break;
          }
        }
      } catch (e) {
        alert(e);
        return;
      }

      this.updateVoteProjectCount(arrayFb, this.selected_project);

      for (var i = 0; i < arrayForExcel.length; i++) {
        arrayForExcel[i].district =
          arrayFb[0].district == "" ? "-" : arrayFb[0].district;
        arrayForExcel[i].province =
          arrayFb[0].province == "" ? "-" : arrayFb[0].province;

        if (arrayFb[0].isInBkk) {
          if (arrayFb[0].hasHouseReg) arrayForExcel[i].hashousereg = "มี";
          else arrayForExcel[i].hashousereg = "ไม่มี";
        } else arrayForExcel[i].hashousereg = "-";

        arrayForExcel[i].isinbkk = arrayFb[0].isInBkk ? "อยู่" : "ไม่อยู่";
      }

      const sequence = this.$fire.database
        .ref("sequence")
        .child("project_sequence");
      const messageRefProject = this.$fire.database.ref("project");

      try {
        var a = await sequence.once("value");
        var count = a.val();

        for (var i = 0; i < array.length; i++) {
          await messageRefProject.child(++count).set(array[i]);
        }

        sequence.set(count);
      } catch (e) {
        alert(e);
        return;
      }

      await this.$axios
        .$post(googleSheetUrlProject, arrayForExcel)
        .then((response) => {
          console.log("send");
        })
        .catch((error) => {
          console.log(error);
        });

      this.$cookies.set("isVoted", true);

      this.isLimit = true;

      setTimeout(() => {
        this.getChartData();

        this.project.forEach((element) => {
          element.isSelected = false;
        });

        var element = document.getElementById("vote-result");
        element.scrollIntoView();
      }, 3000);
    },
    async updateVoteProjectCount(data, selected_project) {
      const refHasHouseReg = this.$fire.database.ref(
        "voteProject/all_district"
      );
      const refNoHouseReg = this.$fire.database.ref(
        "voteProject/all_district_nohousereg"
      );

      if (data[0].isInBkk && data[0].hasHouseReg) {
        const ref = this.$fire.database.ref(
          "voteProject/choice_1/" + data[0].district.replace("เขต", "")
        );

        selected_project.forEach((element) => {
          ref
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
          refHasHouseReg
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
        });
      } else if (data[0].isInBkk && !data[0].hasHouseReg) {
        const ref = this.$fire.database.ref(
          "voteProject/choice_2/" + data[0].district.replace("เขต", "")
        );

        selected_project.forEach((element) => {
          ref
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
          refNoHouseReg
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
        });
      } else {
        const ref = this.$fire.database.ref("voteProject/choice_3");
        selected_project.forEach((element) => {
          ref
            .child("project_" + element)
            .set(firebase.database.ServerValue.increment(1));
        });
      }

      const refCount = this.$fire.database.ref("voteProject/user_count");
      refCount.set(firebase.database.ServerValue.increment(1));
    },
    async sendComment() {
      this.isDisabledComment = true;

      const messageRef = this.$fire.database.ref("user");

      var arrayFb = [];

      try {
        var data = await messageRef.once("value");
        var r = data.val();

        for (const [key, value] of Object.entries(r)) {
          if (value.userid == this.$cookies.get("uuid")) {
            arrayFb.push(value);
            break;
          }
        }
      } catch (e) {
        alert(e);
        return;
      }

      await this.$axios
        .$post(googleSheetUrlComment, [
          {
            userid: arrayFb[0].userid,
            comment: this.comment,
            district: arrayFb[0].district == "" ? "-" : arrayFb[0].district,
            province: arrayFb[0].province == "" ? "-" : arrayFb[0].province,
            hashousereg: arrayFb[0].hasHouseReg != "" ? "มี" : "-",
            isinbkk: arrayFb[0].isInBkk != "" ? "อยู่" : "ไม่อยู่",
            date: this.$moment().format("DD-MM-YYYY"),
          },
        ])
        .then((response) => {
          console.log("send");
          this.$refs["success-modal"].show();
          setTimeout(() => {
            this.comment = "";
            this.$refs["comment-modal"].hide();
            this.$refs["success-modal"].hide();
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onChangeDistrictFilter(val) {
      this.district = null;
      if (val[0].th_name != "ทุกเขต") {
        this.district = "เขต" + val[0].th_name;
        this.isAllDistrict = false;
      } else this.isAllDistrict = true;
      this.getChartData();
    },
    onChangePeopleType(val) {
      this.selected = val;
      this.getChartData();
    },
    async onChangeDistrict(val) {
      this.user_info[0].district = val;
      this.onCheckDisabled();
      const ref = this.$fire.database.ref("user");

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("district").set("เขต" + val[0].th_name);
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    async onChangeProvince(val) {
      const ref = this.$fire.database.ref("user");
      this.user_info[0].province = val;
      this.onCheckDisabled();

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("province").set(val);
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    async onClickBkk(val) {
      if (val) {
        this.isShowDistrict = true;
        this.isShowProvince = false;

        this.user_info[0].province = null;
      } else {
        this.user_info[0].district = null;
        this.user_info[0].hashousereg = null;
        this.isShowDistrict = false;
        this.isShowProvince = true;
      }

      const ref = this.$fire.database.ref("user");
      this.user_info[0].isinbkk = val;
      this.onCheckDisabled();

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("isInBkk").set(val);

            if (val) {
              refUser.child("province").set("");
            } else {
              refUser.child("district").set("");
              refUser.child("hasHouseReg").set("");
            }
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    async onClickHouseReg(val) {
      const ref = this.$fire.database.ref("user");
      this.user_info[0].hashousereg = val;
      this.onCheckDisabled();

      try {
        const snapshots = await ref.once("value");
        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            refUser.child("hasHouseReg").set(val);
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    async onCheckHasCompleteAnswer(val) {
      const ref = this.$fire.database.ref("user");

      try {
        const snapshots = await ref.once("value");

        for (const [key, value] of Object.entries(snapshots.val())) {
          if (value.userid == this.$cookies.get("uuid")) {
            const refUser = this.$fire.database.ref("user/" + key);
            const snapshotsUser = await refUser.once("value");

            if (
              snapshotsUser.val().isInBkk &&
              snapshotsUser.val().district != "" &&
              snapshotsUser.val().hasHouseReg != null
            ) {
              this.$cookies.set("hasAnswer", true);
              this.$refs["asking-modal"].hide();
            } else {
              if (snapshotsUser.val().province != "") {
                this.$cookies.set("hasAnswer", true);
                this.$refs["asking-modal"].hide();
              }
            }
          }
        }
      } catch (e) {
        alert(e);
      }
    },
    onCheckDisabled() {
      if (this.user_info[0].isinbkk != null) {
        if (this.user_info[0].isinbkk) {
          if (
            this.user_info[0].district != null &&
            this.user_info[0].hashousereg != null
          ) {
            this.isDisabled = false;
          } else {
            this.isDisabled = true;
          }
        } else {
          if (this.user_info[0].province != null) {
            this.isDisabled = false;
          } else {
            this.isDisabled = true;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.h-auto-mobile {
  @media #{$mq-small-laptop} {
    height: auto;
  }
}

.selected {
  background: #ccc !important;
  border-color: #ccc !important;
  font-weight: 600;
}

.coin-img {
  background-image: url("@/assets/images/illus_section_05.svg");
  height: 100%;
  background-repeat: no-repeat repeat;
  background-size: contain;
  background-position: center;
}

.choice {
  background-color: #e5e5e5;
  border-radius: 10px;
  width: 100%;
  padding: 7px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: 0.2s;
}

.choice:hover {
  border: 3px solid var(--color-hover);
}

.sent-comment {
  background: none;
  padding: 10px;
  border: 0.75px solid #000000;
  border-radius: 5px;
}

.sent-comment:disabled {
  border: 0.75px solid #e5e5e5;
}

.islimit {
  opacity: 0.5;
  pointer-events: none;
}

.section-text {
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 500px;

  p {
    margin-top: 75%;
  }

  @media #{$mq-tablet} {
    max-width: 384px;
  }

  @media #{$mq-mini-mobile} {
    width: 100%;

    p {
      margin-top: 85%;
    }
  }
}

.loading-div {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 999;
}

.chart {
  height: 41.87px;
}

.chart-box {
  height: 41.87px;
  text-align: left;
  width: 735px;
  margin: 10px auto;
  background: #ececec;
  position: relative;

  @media #{$mq-mobile} {
    width: 100%;
  }

  .text {
    position: absolute;
    //top: 5px;
    z-index: 1;
    justify-content: space-between;
    width: 100%;

    @media #{$mq-tablet} {
      top: 0;
    }

    p:first-child {
      // white-space: nowrap;
      // text-overflow: ellipsis;
      @media #{$mq-mini-mobile} {
        width: 75%;
        font-size: 11px;
      }
      //overflow: hidden;
    }
  }

  div {
    position: absolute;
    //padding: 0 20px;
    height: 41.87px;
    transition: 0.3s;
  }
}

.select-dropdown {
  width: 200px;
  font-family: "Anuphan", serif;
  font-size: 14px;
  @media #{$mq-mini-mobile} {
    width: 120px;
  }
}

.asking-box {
  background: rgba($color: #000000, $alpha: 0.86);
  border-radius: 10px;
  color: #fff;
  min-height: 340px;

  .close-btn {
    position: absolute;
    background: none;
    border: none;
    padding: 0;
    top: 35px;
    left: 35px;

    .fa-times {
      font-size: 20px;
      color: #fff;
    }
  }
}

.comment-box {
  background: #dedede;
  border: 1px solid #000000;
  border-radius: 10px;
  min-height: 340px;
  @media #{$mq-mini-mobile} {
    min-height: auto;
  }
}

.has-house-reg-btn,
.isinbkk-btn {
  background: #ffffff;
  border: 1px solid #ffffff;
  padding: 5px;
  width: 50px;
}

.budget-box {
  width: 735px;
  @media #{$mq-mobile} {
    width: 100%;
  }
}

.project-hover {
  width: 16px;
  height: 16px;
  border-radius: 3px;
}

.sub {
  color: #737373;
}

.lottie-img {
  max-width: 992px;
  overflow: hidden;
  @media #{$mq-tablet} {
    max-width: 600px;
  }
  @media #{$mq-mini-mobile} {
    min-width: 600px;
  }
}

.project-wrapper {
  max-width: 1200px;
  margin: auto;
}

hr {
  max-width: 735px;
}
</style>