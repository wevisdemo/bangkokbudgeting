<template>
  <div>
    <div class="bg-main">
      <div class="wrapper">
        <div class="d-flex flex-column flex-sm-row align-items-center justify-content-center">
          <p class="text-3 mr-3">Produced by</p>
        </div>

        <hr class="m-5 lines" />

        <h1 class="header-5 mb-5">About This Project</h1>

        <p class="text-1 w-75 m-auto">
          งานชิ้นนี้เป็น Studio Project ของเรา
          ที่ตั้งใจทดลองหยิบเรื่องที่พวกเราสนใจ
          มาตั้งคำถามและเล่าผ่านข้อมูลเชิงโครงสร้าง (Structured Data)
          ในการเลือกข้อมูลมาพัฒนางานชิ้นนี้ ทีมงานได้ลองเข้าไปดูเว็บไซต์
          ร้านหนังสือออนไลน์ต่างๆ แล้วเลือกเว็บไซต์ที่มีข้อมูลค่อนข้างสมบูรณ์
          รวมทั้งมีการจัดโครงสร้างเว็บไซต์ที่เป็นระบบ สามารถเก็บรวบรวมข้อมูลได้
          <br /><br />
          ข้อมูลในงานชิ้นนี้ อาจไม่ได้ครอบคลุมหนังสือทั้งหมดที่มีในประเทศไทย
          แต่ทั้งหมดมาจาก Official Website ดังต่อไปนี้
        </p>

        <p class="text-3 w-75 mx-auto mt-5">
          This is our studio project that we aim to tell a story about the issue
          what we're interested in through structured data. After visiting
          various online bookstore websites, we choose some of them that has
          quite complete information. including a systematic website structure
          so we can gather information <br /><br />This story may not include
          all books available in Thailand but all from the official website of
          the bookstore as follows
        </p>

        <ul class="text-1 mx-auto text-left my-5 web-list font-weight-bold">
          <li><a target="_blank" href="https://readery.co">Readery</a></li>
          <li>
            <a target="_blank" href="https://www.asiabooks.com">Asiabook</a>
          </li>
          <li>
            <a target="_blank" href="https://thailand.kinokuniya.com"
              >Kinokuniya Thailand</a
            >
          </li>
          <li><a target="_blank" href="https://www.naiin.com">Naiin</a></li>
          <li>
            <a target="_blank" href="http://www.seawrite.com">S.E.A Write</a>
          </li>
          <li><a target="_blank" href="https://www.csrcpall.com">7 Book</a></li>
          <li><a target="_blank" href="https://www.obec.go.th/">OBEC</a></li>
        </ul>

        <p class="text-1 m-0">
          หากมีข้อสงสัยหรือคำแนะนำเพิ่มเติมใดๆ เกี่ยวกับงานนี้
          ทักมาหาพวกเราได้ที่
        </p>
        <a class="text-1 font-weight-bold" target="_blank" href="https://m.me/punchupworld">m.me/punchupworld</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #4b4b40;
  color: #fffbdb;
  text-align: center;
}

.wrapper {
  max-width: 1000px;
  margin: auto;
  padding: 142px 0;
   @media #{$mq-mini-mobile} {
  padding: 68px 0;
   }
}

.lines {
  border-color: #fffbdb;
}

.web-list {
  width: 300px;
}

a {
  text-decoration: none;
  color: #fffbdb;
}

a:hover {
  text-decoration: underline;
}
</style>