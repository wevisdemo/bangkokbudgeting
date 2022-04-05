<template>
  <div>
    <div class="bg-main text-center">
      <p class="header-3 m-0">
        รู้หรือไม่<br class="d-none d-sm-block" />กรุงเทพมหานครวางแผนพัฒนาระยะ
        20 ปี <br class="d-none d-sm-block" />
        (พ.ศ. 2556-2575) ขึ้นมาเพื่อจะก้าวไปสู่การเป็น
      </p>
      <div class="header-2 font-weight-bold">“มหานครแห่งเอเชีย”</div>
      <img :src="illus_open_01" alt="" class="mt-3 img-mobile" width="696" />
      <p class="header-3 mt-3">แล้วปี 2565 เรากำลังเดินมาถึงครึ่งทางแล้ว</p>
      <img
        :src="year_chart"
        alt=""
        class="my-3 img-mobile d-none d-md-block"
        width="550"
      />
      <img
        :src="year_chart_mobile"
        alt=""
        class="my-3 img-mobile d-block d-md-none"
        width="300"
      />
      <p class="header-3 mt-5">
        แต่ทุกวันนี้...กรุงเทพมหานครก็ยังดูไม่เหมือนเมืองในฝันที่เราวาดไว้ใช่ไหม?<br />
        แล้วอะไรล่ะที่ยังเป็นปัญหาที่ค้างคาใจคุณอยู่ทุกวันนี้
      </p>
      <p class="text-3 sub">(คลิกเพื่อเลือกปัญหา)</p>

      <div class="d-flex justify-content-center mt-5 problem-box">
        <div v-for="(item, i) in problems.filter((x) => x.id < 5)" :key="i">
          <div
            @click="showProblemResult(item)"
            class="problem-pic"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/images/problem/problem_' + item.id + '.png') +
                ')',
              '--varName': item.color,
            }"
          ></div>
          <p class="text-2 m-auto font-weight-bold problem-name">
            {{ item.name }}
          </p>
        </div>
      </div>

      <div class="d-flex justify-content-center mt-3 problem-box">
        <div v-for="(item, i) in problems.filter((x) => x.id > 4)" :key="i">
          <div
            @click="showProblemResult(item)"
            class="problem-pic"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/images/problem/problem_' + item.id + '.png') +
                ')',
              '--varName': item.color,
            }"
          ></div>
          <p class="text-2 m-auto font-weight-bold problem-name">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="
        h-100vh
        result
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
      v-if="isShow"
      id="result-box"
    >
      <div
        class="result-box text-center"
        :style="{
          background: results[0].color,
        }"
      >
        <h1 class="header-3 font-weight-bold my-3">{{ results[0].title }}</h1>
        <img :src="results[0].pic" alt="" class="mb-3" width="150" />
        <p class="text-2 m-0 font-weight-bold">
          ยังเป็นปัญหาที่ยังค้างคาใจคุณอยู่
        </p>
        <p class="text-4 m-0">
          กรุงเทพมหานครวางแผนแก้ไขประเด็นนี้เช่นกันเพื่อกรุงเทพมหานครเป็น
        </p>
        <p class="text-2 m-0 font-weight-bold">{{ results[0].side }}</p>
        <div class="header-3 header-box my-3">
          ในมิติ “{{ results[0].dimemsion }}”
        </div>

        <div class="text-2 institute-box">
          หน่วยงานที่ <b> “ต้องรับผิดชอบในการแก้ปัญหานี้”</b> คือ
          <ul class="text-left" v-if="results[0].institute.length > 0">
            <li v-for="(item,i) in results[0].institute" :key="i">{{item.name}}</li>
          </ul>
        </div>
      </div>

      <img
        :src="arrow_desktop"
        alt=""
        class="mt-5 d-none d-md-block"
        width="75"
      />
      <img :src="arrow_mobile" alt="" class="mt-5 d-block d-md-none" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      year_chart: require("~/assets/images/desktop_timeline.svg"),
      year_chart_mobile: require("~/assets/images/mobile_timeline.svg"),
      sample: require("~/assets/images/sample.png"),
      illus_open_01: require("~/assets/images/illus_open_01.png"),
      color: "#FFF",
      title: "น้ำเน่าเสีย ขยะ ฝุ่นละออง",
      pic: require("~/assets/images/problem/problem_1.png"),
      arrow_desktop: require("~/assets/images/arrow_desktop.gif"),
      arrow_mobile: require("~/assets/images/arrow_mobile.gif"),
      results: [
        {
          color: "#FFF",
          title: "",
          pic: "",
          dimemsion: "",
          institute: "",
          side: "",
        },
      ],
      isShow: false,
      problems: [
        {
          id: 1,
          name: "น้ำเน่าเสีย ขยะ ฝุ่นละออง",
          img: require("~/assets/images/problem/problem_1.png"),
          color: "#538DFF",
          dimemsion: "ปลอดมลพิษ",
          institute: [
            {
              name: "สำนักการระบายน้ำ",
            },
            {
              name: "สำนักสิ่งแวดล้อม",
            },
             {
              name: "สำนักงานเขต",
            },
          ],
          side: "มหานครปลอดภัย",
        },
        {
          id: 2,
          name: "พื้นที่สีเขียวและสวนสาธารณะ",
          img: require("~/assets/images/problem/problem_2.png"),
          color: "#6ADC7B",
          dimemsion: "พื้นที่สวนสาธารณะ พื้นที่สีเขียวกระจายทั่วพื้นที่",
          institute: [
            {
              name: "สำนักสิ่งแวดล้อม",
            },
            {
              name: "สำนักผังเมือง",
            },
            {
              name: "สำนักงานเขต",
            },
          ],
          side: "มหานครสีเขียวสะดวกสบาย",
        },
        {
          id: 3,
          name: "การทุจริตคอร์รัปชั่น",
          img: require("~/assets/images/problem/problem_3.png"),
          color: "#FF8310",
          dimemsion: "การเมืองสีขาว",
          institute: [
            {
              name: "สำนักงานคณะกรรมการข้าราชการกรุงเทพมหานคร",
            },
            {
              name: "สำนักปลัดกรุงเทพมหานคร",
            },
          ],
          side: "มหานครประชาธิปไตย",
        },
        {
          id: 4,
          name: "สาธารณูปโภคพื้นฐานให้ผู้พิการ",
          img: require("~/assets/images/problem/problem_4.png"),
          color: "#FF583E",
          dimemsion:
            "การจัดสิ่งอำนวยความสะดวก สวัสดิการและการสงเคราะห์ และการดูแลสุขภาพให้กับผู้สูงอายุคนพิการ และผู้ด้อยโอกาส",
          institute: [
            {
              name: "สำนักพัฒนาสังคม",
            },
            {
              name: "สำนักอนามัย",
            },
            {
              name: "สำนักการโยธา",
            },
            {
              name: "สำนักงานเขต",
            },
            {
              name: "กระทรวงแรงงานกระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์กรมโยธาธิการ",
            },
          ],
          side: "มหานครสำหรับทุกคน",
        },
        {
          id: 5,
          name: "ระบบสารสนเทศในการให้บริการประชาชน",
          img: require("~/assets/images/problem/problem_5.png"),
          color: "#D170FF",
          dimemsion: "เทคโนโลยีสารสนเทศ",
          institute: [
            {
              name: "สำนักยุทธศาสตร์และประเมินผล",
            },
            {
              name: "หน่วยงานด้านไอทีภายในสำนักและเขตต่าง ๆ",
            },
          ],
          side: "การบริหารจัดการเมืองมหานคร",
        },
        {
          id: 6,
          name: "แหล่งท่องเที่ยวเสื่อมโทรม",
          img: require("~/assets/images/problem/problem_6.png"),
          color: "#C3DA14",
          dimemsion: "เมืองแห่งนักท่องเที่ยวระดับโลก",
          institute: [
            {
              name: "สำนักวัฒนธรรม กีฬาและการท่องเที่ยว ",
            },
            {
              name: "สำนักยุทธศาสตร์และประเมินผล",
            },
            {
              name: "กรมการท่องเที่ยว",
            },
            {
              name: "การท่องเที่ยวแห่งประเทศไทย",
            },
          ],
          side: "มหานครแห่งเศรษฐกิจและเรียนรู้",
        },
        {
          id: 7,
          name: "การจัดระบียบความหนาแน่นของเมือง",
          img: require("~/assets/images/problem/problem_7.png"),
          color: "#FF9FDF",
          dimemsion: "กรุงเทพมหานครเติบโตอย่างเป็นระเบียบตามผังเมืองรวม",
          institute: [
            {
              name: "สำนักผังเมือง",
            },
            {
              name: "สำนักงานเขต",
            },
          ],
          side: "มหานครกระชับ",
        },
      ],
    };
  },
  created() {},
  methods: {
    showProblemResult(data) {
      this.isShow = true;
      setTimeout(
        () => document.getElementById("result-box").scrollIntoView(),
        500
      );
      this.results[0].color = data.color;
      this.results[0].title = data.name;
      this.results[0].pic = data.img;
      this.results[0].dimemsion = data.dimemsion;
      this.results[0].institute = data.institute;
      this.results[0].side = data.side;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-mobile {
  margin: auto;
  @media #{$mq-mobile} {
    width: 100%;
  }
}

.sub {
  color: #737373;
}

.bg-main {
  background: #e8e4d8;
  padding: 121px;
  @media #{$mq-mini-mobile} {
    padding: 50px 20px;
  }
}

.result {
  background: #e8e4d8;
  mix-blend-mode: normal;
  @media #{$mq-mini-mobile} {
    height: auto;
  }
}

.black-box {
  background: rgba(0, 0, 0, 0.86);
  color: #fff;
  padding: 42px 86px;
  width: 650px;
  border-radius: 10px;
  margin: 0 auto;
}

.border-black-box {
  border: 1px solid #000000;
  width: 396px;
  font-weight: bold;
  margin: 20px auto;
}

.result-box {
  width: 383px;
  //background: #ffffff;
  padding: 26px 44px;
  @media #{$mq-mini-mobile} {
    width: 90%;
  }
}

.chevron-down {
  font-size: 18px;
}

.header-box {
  background: #fff;
  border: 1px solid #000000;
  font-weight: bold;
}

.institute-box {
  background: #f4f4f4;
  border: 1px solid #000000;
  padding: 10px;
}

.problem-name {
  width: 180px;
  @media #{$mq-mini-mobile} {
    width: 140px;
  }
}

.problem-box {
  @media #{$mq-mini-mobile} {
    flex-wrap: wrap;
  }
}

.problem-pic {
  width: 150px;
  height: 150px;
  margin: 10px auto;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  @media #{$mq-mini-mobile} {
    width: 110px;
    height: 110px;
    margin: 5px auto;
  }
}

.problem-pic:hover:before {
  height: 100%;
}

.problem-pic:before {
  content: "";
  border-radius: 50%;
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  bottom: 0;
  opacity: 0.7;
  mix-blend-mode: multiply;
  background: linear-gradient(
    0deg,
    var(--varName) 0%,
    rgba(83, 141, 255, 0) 100%
  );
}
.sub {
  color: #737373;
}
</style>