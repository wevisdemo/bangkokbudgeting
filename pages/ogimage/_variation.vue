<template>
  <div>
    <!-- <div style="height: 630px; overflow: auto" class="d-">
      <div
        class="ogimage text-center position-relative"
        :id="'test-' + i"
        v-for="(item, i) in districts"
        key="i"
      >
      <div class="position-absolute w-100">
        <img :src="wevis_logo" alt="" style="width: 200px;background: #ddd9cd;">
      </div>
        <h1 class="header-2" style="padding-top: 81px">
          พวกเราชาว “{{ item.th_name }}”
        </h1>
        <h1 class="header-1 font-weight-bold">
          ต้องการให้ใช้งบเพื่อฟื้นฟู<br />สถานที่ท่องเที่ยวสำคัญ
        </h1>

        <div
          class="d-flex position-absolute justify-content-center w-100"
          style="bottom: 0"
        >
          <p class="text-3 font-weight-bold">#GoodSociety2021</p>
          <p class="ml-3 text-3 font-weight-bold">#อยู่เมืองนี้ต้องรู้เยอะ</p>
        </div>
      </div>
    </div>
    <hr />
    <button @click="test2">Download</button>
    <div id="result"></div> -->
  </div>
</template>

<script>
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

export default {
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content: this.$cookies.get("isUpCountry")
            ? "https://d208eq9ndr4893.cloudfront.net/og-image/upcountry.png"
            : "https://d208eq9ndr4893.cloudfront.net/og-image/" +
              this.$route.params.variation +
              ".png",
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content: this.$cookies.get("isUpCountry")
            ? "https://d208eq9ndr4893.cloudfront.net/og-image/upcountry.png"
            : "https://d208eq9ndr4893.cloudfront.net/og-image/" +
              this.$route.params.variation +
              ".png",
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            this.$route.params.variation.split("-")[0] == "upcountry"
              ? "พวกเราอยากมีส่วนร่วมกับการออกแบบใช้งบเพื่อพัฒนาเมืองและมีแพลตฟอร์มของเราเช่นกัน"
              : "พวกเราชาว" +
                this.districts.filter(
                  (x) => x.en_name == this.$route.params.variation.split("-")[0]
                )[0].th_name +
                "ต้องการให้ใช้งบเพื่อ" +
                this.options.filter(
                  (x) => x.value == this.$route.params.variation.split("-")[1]
                )[0].text,
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "ร่วมส่งต่อความฝันของประชาชนที่อยากมีส่วนร่วมในการพัฒนามหานครของพวกเราเอง",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            this.$route.params.variation.split("-")[0] == "upcountry"
              ? "พวกเราอยากมีส่วนร่วมกับการออกแบบใช้งบเพื่อพัฒนาเมืองและมีแพลตฟอร์มของเราเช่นกัน"
              : "พวกเราชาว" +
                this.districts.filter(
                  (x) => x.en_name == this.$route.params.variation.split("-")[0]
                )[0].th_name +
                "ต้องการให้ใช้งบเพื่อ" +
                this.options.filter(
                  (x) => x.value == this.$route.params.variation.split("-")[1]
                )[0].text,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "ร่วมส่งต่อความฝันของประชาชนที่อยากมีส่วนร่วมในการพัฒนามหานครของพวกเราเอง",
        },
      ],
    };
  },
  data() {
    return {
      data: [
        "พระนคร",
        "ป้อมปราบศัตรูพ่าย",
        "สัมพันธวงศ์",
        "บางรัก",
        "ปทุมวัน",
        "ยานนาวา",
        "ดุสิต",
        "พญาไท",
        "ห้วยขวาง",
        "พระโขนง",
        "บางกะปิ",
        "บางเขน",
        "มีนบุรี",
        "ลาดกระบัง",
        "หนองจอก",
        "ธนบุรี",
        "คลองสาน",
        "บางกอกใหญ่",
        "บางกอกน้อย",
        "ตลิ่งชัน",
        "ภาษีเจริญ",
        "หนองแขม",
        "บางขุนเทียน",
        "ราษฎร์บูรณะ",
        "ดอนเมือง",
        "จตุจักร",
        "ลาดพร้าว",
        "บึงกุ่ม",
        "สาทร",
        "บางคอแหลม",
        "บางซื่อ",
        "ราชเทวี",
        "คลองเตย",
        "ประเวศ",
        "บางพลัด",
        "จอมทอง",
        "ดินแดง",
        "สวนหลวง",
        "วัฒนา",
        "บางแค",
        "หลักสี่",
        "สายไหม",
        "คันนายาว",
        "สะพานสูง",
        "วังทองหลาง",
        "คลองสามวา",
        "บางนา",
        "ทวีวัฒนา",
        "ทุ่งครุ",
        "บางบอน",
      ],
      districts: [
        {
          id: "1",
          en_name: "bangbon",
          th_name: "บางบอน",
          zipcode: "10150",
        },
        {
          id: "2",
          en_name: "bangkapi",
          th_name: "บางกะปิ",
          zipcode: "10240",
        },
        {
          id: "3",
          en_name: "bangkhae",
          th_name: "บางแค",
          zipcode: "10160",
        },
        {
          id: "4",
          en_name: "bangkhen",
          th_name: "บางเขน",
          zipcode: "10220",
        },
        {
          id: "5",
          en_name: "bangkholaem",
          th_name: "บางคอแหลม",
          zipcode: "10120",
        },
        {
          id: "6",
          en_name: "bangkhunthian",
          th_name: "บางขุนเทียน",
          zipcode: "10150",
        },
        {
          id: "7",
          en_name: "bangna",
          th_name: "บางนา",
          zipcode: "10260",
        },
        {
          id: "8",
          en_name: "bangphlat",
          th_name: "บางพลัด",
          zipcode: "10700",
        },
        {
          id: "9",
          en_name: "bangrak",
          th_name: "บางรัก",
          zipcode: "10500",
        },
        {
          id: "10",
          en_name: "bangsue",
          th_name: "บางซื่อ",
          zipcode: "10800",
        },
        {
          id: "11",
          en_name: "bangkoknoi",
          th_name: "บางกอกน้อย",
          zipcode: "10700",
        },
        {
          id: "12",
          en_name: "bangkokyai",
          th_name: "บางกอกใหญ่",
          zipcode: "10600",
        },
        {
          id: "13",
          en_name: "buengkum",
          th_name: "บึงกุ่ม",
          zipcode: "10240",
        },
        {
          id: "14",
          en_name: "chatuchak",
          th_name: "จตุจักร",
          zipcode: "10900",
        },
        {
          id: "15",
          en_name: "chomthong",
          th_name: "จอมทอง",
          zipcode: "10150",
        },
        {
          id: "16",
          en_name: "dindaeng",
          th_name: "ดินแดง",
          zipcode: "10400",
        },
        {
          id: "17",
          en_name: "donmueang",
          th_name: "ดอนเมือง",
          zipcode: "10210",
        },
        {
          id: "18",
          en_name: "dusit",
          th_name: "ดุสิต",
          zipcode: "10300",
        },
        {
          id: "19",
          en_name: "huaikhwang",
          th_name: "ห้วยขวาง",
          zipcode: "10310",
        },
        {
          id: "20",
          en_name: "khannayao",
          th_name: "คันนายาว",
          zipcode: "10230",
        },
        {
          id: "21",
          en_name: "khlongsamwa",
          th_name: "คลองสามวา",
          zipcode: "10510",
        },
        {
          id: "22",
          en_name: "khlongsan",
          th_name: "คลองสาน",
          zipcode: "10600",
        },
        {
          id: "23",
          en_name: "khlongtoei",
          th_name: "คลองเตย",
          zipcode: "10110",
        },
        {
          id: "24",
          en_name: "laksi",
          th_name: "หลักสี่",
          zipcode: "10210",
        },
        {
          id: "25",
          en_name: "latkrabang",
          th_name: "ลาดกระบัง",
          zipcode: "10520",
        },
        {
          id: "26",
          en_name: "latphrao",
          th_name: "ลาดพร้าว",
          zipcode: "10230",
        },
        {
          id: "27",
          en_name: "minburi",
          th_name: "มีนบุรี",
          zipcode: "10510",
        },
        {
          id: "28",
          en_name: "nongchok",
          th_name: "หนองจอก",
          zipcode: "10530",
        },
        {
          id: "29",
          en_name: "nongkhaem",
          th_name: "หนองแขม",
          zipcode: "10160",
        },
        {
          id: "30",
          en_name: "pathumwan",
          th_name: "ปทุมวัน",
          zipcode: "10330",
        },
        {
          id: "31",
          en_name: "phasicharoen",
          th_name: "ภาษีเจริญ",
          zipcode: "10160",
        },
        {
          id: "32",
          en_name: "phayathai",
          th_name: "พญาไท",
          zipcode: "10400",
        },
        {
          id: "33",
          en_name: "phrakhanong",
          th_name: "พระโขนง",
          zipcode: "10260",
        },
        {
          id: "34",
          en_name: "phranakhon",
          th_name: "พระนคร",
          zipcode: "10200",
        },
        {
          id: "35",
          en_name: "pomprapsattruphai",
          th_name: "ป้อมปราบศัตรูพ่าย",
          zipcode: "10100",
        },
        {
          id: "36",
          en_name: "prawet",
          th_name: "ประเวศ",
          zipcode: "10250",
        },
        {
          id: "37",
          en_name: "ratburana",
          th_name: "ราษฏร์บูรณะ",
          zipcode: "10140",
        },
        {
          id: "38",
          en_name: "ratchathewi",
          th_name: "ราชเทวี",
          zipcode: "10400",
        },
        {
          id: "39",
          en_name: "saimai",
          th_name: "สายไหม",
          zipcode: "10220",
        },
        {
          id: "40",
          en_name: "samphanthawong",
          th_name: "สัมพันธวงศ์",
          zipcode: "10100",
        },
        {
          id: "41",
          en_name: "saphansung",
          th_name: "สะพานสูง",
          zipcode: "10240",
        },
        {
          id: "42",
          en_name: "sathon",
          th_name: "สาทร",
          zipcode: "10120",
        },
        {
          id: "43",
          en_name: "suanluang",
          th_name: "สวนหลวง",
          zipcode: "10250",
        },
        {
          id: "44",
          en_name: "talingchan",
          th_name: "ตลิ่งชัน",
          zipcode: "10170",
        },
        {
          id: "45",
          en_name: "thawiwatthana",
          th_name: "ทวีวัฒนา",
          zipcode: "10170",
        },
        {
          id: "46",
          en_name: "thonburi",
          th_name: "ธนบุรี",
          zipcode: "10600",
        },
        {
          id: "47",
          en_name: "thungkhru",
          th_name: "ทุ่งครุ",
          zipcode: "10140",
        },
        {
          id: "48",
          en_name: "wangthonglang",
          th_name: "วังทองหลาง",
          zipcode: "10310",
        },
        {
          id: "49",
          en_name: "watthana",
          th_name: "วัฒนา",
          zipcode: "10110",
        },
        {
          id: "50",
          en_name: "yannawa",
          th_name: "ยานนาวา",
          zipcode: "10120",
        },
      ],
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
      text: "",
      img: [],
      wevis_logo: require("~/assets/images/wevis_logo.svg"),
    };
  },
  mounted() {
    //this.test();
    window.location.href = "https://bangkokbudgeting.wevis.info";
  },
  methods: {
    test() {
      this.districts.forEach((element, i) => {
        html2canvas(document.querySelector("#test-" + i)).then((canvas) => {
          var dataURL = canvas.toDataURL("image/png");
          dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

          var img = document.createElement("img");
          img.src = dataURL;
          img.id = "result-" + element.en_name;
          document.getElementById("result").appendChild(img);
        });
      });
    },
    test2() {
      var JSZip = require("jszip");
      var zip = new JSZip();
      zip.file("Hello.html", "Hello World\n");
      zip.folder("images");

      document.querySelectorAll("img").forEach((element, i) => {
        var img = zip.folder("images");
        img.file(
          element.id.replace("result-", "") + "-9.png",
          element.src.replace(/^data:image\/(png|jpg);base64,/, ""),
          {
            base64: true,
          }
        );
      });

      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "og-wv-9.zip");
      });
    },
  },
};
</script>

<style scoped>
.ogimage {
  background-image: url("@/assets/images/ogimage/OG-09.png");
  width: 1200px;
  height: 630px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}
</style>