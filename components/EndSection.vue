<template>
  <div>
    <div class="bg-main">
      <p class="w-75 text-center m-auto text-1">
        นี่เป็นเพียงจุดเริ่มต้นของการผลักดันเป็นสู่สังคมที่ดี (Good Society)
        <br /><br />

        ที่ฝั่งประชาชนอย่างพวกเราจะเข้ามามีส่วนในการเปิดข้อมูลและแสดงความคิดเห็น
        การวางแผนและการใช้งบประมาณของกรุงเทพมหานครได้
      </p>

      <img :src="illus_section_end" alt="" class="w-75 my-3" />

      <p class="w-75 text-center m-auto text-1">
        และทางทีมได้สอบถามไปถึง
        “ที่ปรึกษาเรื่องการจัดทำแผนพัฒนาของกรุงเทพมหานคร” <br /><br />

        เกี่ยวกับความหวังในการเห็น<br />
        <b>“ระบบงบประมาณแบบมีส่วนร่วม (Bangkok Budgeting)”</b><br />
        ที่จะเกิดขึ้นโดยกรุงเทพมหานคร
      </p>
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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #e8e4d8;
  padding: 96px 139px;
  text-align: center;

  @media #{$mq-mobile} {
    padding: 36px 10px;
  }
}
</style>