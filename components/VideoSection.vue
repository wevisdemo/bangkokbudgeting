<template>
  <div>
    <div class="bg-main">
      <p class="w-sm-50 text-center m-auto header-2">
        เรามาฟังคำตอบจาก ผศ.ดร.ทวิดา กมลเวชช
        ที่ปรึกษาการพัฒนาการจัดทำแผนกรุงเทพมหานคร
      </p>

      <p class="text-center m-auto header-3">
        ว่าตอนนี้กรุงเทพมหานครกำลังดำเนินการอะไรอยู่?
      </p>

      <p class="text-center m-auto text-3">(กดเล่นคลิปเพื่อฟังคำตอบ)</p>

      <div class="videos mt-5">
        <div
          class="
            d-flex
            justify-content-center
            flex-column flex-sm-row
            align-items-center
            mb-3
          "
        >
          <video width="320" height="240" controls :poster="video_pic_1">
            <source
              src="https://d208eq9ndr4893.cloudfront.net/video_1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="w-sm-50 p-sm-5">
            <p class="header-3 text-center text-sm-left">
              กรุงเทพมหานครมองเรื่องการมีส่วนร่วมโดยเฉพาะงบประมาณแบบมีส่วนร่วม
              อย่างไร?
            </p>
            <span class="w-lg-75 text-1 d-none d-md-block">
              การจะสร้างกลไกการมีส่วนร่วมให้มากที่สุด ต้องเป็นกลไกที่ทำให้เกิด
              ความรับผิดชอบ โดยถ้ามีกำหนดให้ใช้จ่ายเงิน รัฐจะเป็นคนใช้จ่ายเงิน
              ลงความต้องการของพื้นใดพื้นที่นึง และพื้นที่นั้นต้องเสียสละเวลา
              มาให้ข้อมูล ช่วยให้ความเห็นกำกับติดตาม เป็นเชิงสองฝ่ายทำงาน
              ร่วมกัน และการกำหนดกลไกงบประมาณแบบมีส่วนร่วม ช่วยหนุน
              ให้แต่ละฝ่ายมีความสม่ำเสมอในการร่วมมือ และต่องบฯ ทำให้กลไก
              มีสลักสำคัญขึ้นจึงนำไปอยู่ในแผน
            </span>
          </div>
        </div>

        <div
          class="
            d-flex
            justify-content-center
            flex-column flex-sm-row
            align-items-center
            mb-3
          "
        >
          <video width="320" height="240" controls :poster="video_pic_2">
            <source
              src="https://d208eq9ndr4893.cloudfront.net/video_2.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="w-sm-50 p-sm-5">
            <p class="header-3 text-center text-sm-left">
              ตอนนี้กรุงเทพมหานคร กำลังดำเนินการอะไรอยู่?
            </p>
            <span class="w-lg-75 text-1 d-none d-md-block">
              ปกติกรุงเทพฯ โดยเฉพาะสำนักงานเขตอาศัยความคิดเห็นจาก ประชาชนทำงาน
              ต่อไปในช่วงปี 2566 -2570 จะเป็นช่วงเน้น
              สร้างกลไกเครือข่ายภาคประชาสังคมในการเปิดพื้นที่รับฟัง ความคิดเห็น
              ระบบงบประมาณแบบมีส่วนร่วม คือ สำนักเขตจะทำ
              หน้าที่จัดทำแผนพัฒนาเขตที่มาจากการมีส่วนร่วมของตัวชุมชน
              นำเทคโนโลยีมาช่วย และเน้นการเปิดเผยข้อมูลไปพร้อมกัน
            </span>
          </div>
        </div>

        <div
          class="
            d-flex
            justify-content-center
            flex-column flex-sm-row
            align-items-center
          "
        >
          <video width="320" height="240" controls :poster="video_pic_3">
            <source
              src="https://d208eq9ndr4893.cloudfront.net/video_3.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div class="w-sm-50 p-sm-5">
            <p class="header-3 text-center text-sm-left">
              ประเทศไทย หากจะไปสู่งบประมาณ แบบมีส่วนร่วมได้ ควรเริ่มที่จุดไหน?
            </p>
            <span class="w-lg-75 text-1 d-none d-md-block">
              ต้องมีระบบ monitoring and Evaluation ในการใช้
              งบประมาณเพื่อใช้ในการตัดสินใจเชิงยุทธศาสตร์ ไม่ใช่แบบราย item
              วัตถุประสงค์ในการทำระบบนี้คือ สามารถช่วยในการปรับตัวและ
              ความก้าวหน้าเกิดขึ้น ข้อผิดพลาดช่วยกันแก้ไข และได้เรียนรู้ในด้าน
              ที่จะพัฒนาผ่านกลไกแบบมีส่วนร่วมว่าสถาปนาขึ้นได้
            </span>
          </div>
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
      illus_section_end: require("~/assets/images/illus_section_end.png"),
      video_pic_1: require("~/assets/images/cover_vdo/ELECT_Graphic_VDO-01.png"),
      video_pic_2: require("~/assets/images/cover_vdo/ELECT_Graphic_VDO-04.png"),
      video_pic_3: require("~/assets/images/cover_vdo/ELECT_Graphic_VDO-10.png"),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #000;
  padding: 59px;
  color: #fff;

  @media #{$mq-mini-mobile} {
    padding: 30px;
  }
}
</style>