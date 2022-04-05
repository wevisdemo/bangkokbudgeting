<template>
  <div>
    <div class="min-h-screen p-3 p-sm-5 h-auto-mobile">
      <div class="black-box">
        <div class="text-center">
          <img :src="icon_info" alt="" width="50" />
          <p
            class="
              header-3
              text-white
              font-weight-bold
              mx-auto
              mt-3
              mb-sm-5 mb-3
            "
          >
            ขอย้ำว่า! งบประมาณที่ลองเล่นก่อนหน้านี้ยังไม่ใช่
            “งบประมาณเบิกจ่ายใช้จริงๆ”
          </p>

          <b-row class="flex-column flex-xl-row">
            <b-col
              ><img :src="budget_bkk" alt="" class="budget_bkk mb-3 mb-xl-0"
            /></b-col>
            <b-col
              ><div class="white-box mt-3 mt-xl-0">
                <p class="text-1 m-0">
                  ถึงแม้ว่ากรุงเทพมหานครได้จัดทำและมีระบบติดตามและประเมินผลการใช้จ่ายงบประมาณก็จริง
                </p>
              </div>
              <div class="white-box mt-3">
                <p class="text-1 m-0">
                  แต่ส่วนที่ประชาชนสามารถเข้าถึงได้ ยังไม่มีข้อมูลงบฯ ที่ใช้จริงในแต่ละโครงการอย่างครบถ้วน
                </p>
              </div>
              <div class="white-box mt-3">
                <p class="text-1 m-0">
                  ได้แต่หวังว่ากรุงเทพมหานครจะเปิดเผยและอัพเดทข้อมูลอย่างครบถ้วนในเร็ววัน เราจะได้เอาข้อมูลมาแสดงให้ทุกคนดูกันได้
                </p>

                <a
                  href="http://dp2.bangkok.go.th/mobile/mymenu.php"
                  class="text-1"
                  target="_blank"
                  >ลองกดเพื่อเข้าไปดูระบบ</a
                >

                <p class="text-4">
                  หมายเหตุ : ทางทีมได้สอบถามไปยังหน่วยงานและได้รับคำตอบว่า
                  เป็นเรื่องเฉพาะภายในของเจ้าหน้าที่เท่านั้น
                  และข้อมูลไม่ครบทั้งหมด เพราะไม่รู้ว่าประชาชนต้องการอ่านอะไรจึงใส่แค่นั้น
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      icon_info: require("~/assets/images/icon_info.svg"),
      budget_bkk: require("~/assets/images/budget_bkk.gif"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.h-auto-mobile {
  @media #{$mq-small-laptop} {
    height: auto;
  }
}

.black-box {
  background: rgba($color: #000000, $alpha: 0.86);
  border: 1px solid #000000;
  border-radius: 10px;
  height: 100%;
  padding: 30px 115px;
  max-width: 1200px;
  margin: auto;
  @media #{$mq-mobile} {
    padding: 20px;
  }
}

.white-box {
  background: white;
  padding: 20px;
  text-align: left;
}

.budget_bkk {
  @media #{$mq-mobile} {
    width: 100%;
  }
}

.budget_bkk {
  @media #{$mq-mobile} {
    width: 100%;
  }
}
</style>