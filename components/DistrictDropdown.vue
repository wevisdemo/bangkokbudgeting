<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="districts"
      @change="onChange"
      :disabled="disabled"
      value-field="en_name"
      text-field="th_name"
      class="select-dropdown"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "กรุณาเลือกเขต" },
        { value: "เขตคลองสาน", text: "เขตคลองสาน" },
        { value: "เขตคลองสามวา", text: "เขตคลองสามวา" },
        { value: "เขตคลองเตย", text: "เขตคลองเตย" },
        { value: "เขตคันนายาว", text: "เขตคันนายาว" },
        { value: "เขตจตุจักร", text: "เขตจตุจักร" },
        { value: "เขตจอมทอง", text: "เขตจอมทอง" },
        { value: "เขตดอนเมือง", text: "เขตดอนเมือง" },
        { value: "เขตดินแดง", text: "เขตดินแดง" },
        { value: "เขตดุสิต", text: "เขตดุสิต" },
        { value: "เขตตลิ่งชัน", text: "เขตตลิ่งชัน" },
        { value: "เขตทวีวัฒนา", text: "เขตทวีวัฒนา" },
        { value: "เขตทุ่งครุ", text: "เขตทุ่งครุ" },
        { value: "เขตธนบุรี", text: "เขตธนบุรี" },
        { value: "เขตบางกอกน้อย", text: "เขตบางกอกน้อย" },
        { value: "เขตบางกอกใหญ่", text: "เขตบางกอกใหญ่" },
        { value: "เขตบางกะปิ", text: "เขตบางกะปิ" },
        { value: "เขตบางขุนเทียน", text: "เขตบางขุนเทียน" },
        { value: "เขตบางคอแหลม", text: "เขตบางคอแหลม" },
        { value: "เขตบางซื่อ", text: "เขตบางซื่อ" },
        { value: "เขตบางนา", text: "เขตบางนา" },
        { value: "เขตบางบอน", text: "เขตบางบอน" },
        { value: "เขตบางพลัด", text: "เขตบางพลัด" },
        { value: "เขตบางรัก", text: "เขตบางรัก" },
        { value: "เขตบางเขน", text: "เขตบางเขน" },
        { value: "เขตบางแค", text: "เขตบางแค" },
        { value: "เขตบึงกุ่ม", text: "เขตบึงกุ่ม" },
        { value: "เขตปทุมวัน", text: "เขตปทุมวัน" },
        { value: "เขตประเวศ", text: "เขตประเวศ" },
        { value: "เขตป้อมปราบศัตรูพ่าย", text: "เขตป้อมปราบศัตรูพ่าย" },
        { value: "เขตพญาไท", text: "เขตพญาไท" },
        { value: "เขตพระนคร", text: "เขตพระนคร" },
        { value: "เขตพระโขนง", text: "เขตพระโขนง" },
        { value: "เขตภาษีเจริญ", text: "เขตภาษีเจริญ" },
        { value: "เขตมีนบุรี", text: "เขตมีนบุรี" },
        { value: "เขตยานนาวา", text: "เขตยานนาวา" },
        { value: "เขตราชเทวี", text: "เขตราชเทวี" },
        { value: "เขตราษฎร์บูรณะ", text: "เขตราษฎร์บูรณะ" },
        { value: "เขตลาดกระบัง", text: "เขตลาดกระบัง" },
        { value: "เขตลาดพร้าว", text: "เขตลาดพร้าว" },
        { value: "เขตวังทองหลาง", text: "เขตวังทองหลาง" },
        { value: "เขตวัฒนา", text: "เขตวัฒนา" },
        { value: "เขตสวนหลวง", text: "เขตสวนหลวง" },
        { value: "เขตสะพานสูง", text: "เขตสะพานสูง" },
        { value: "เขตสัมพันธวงศ์", text: "เขตสัมพันธวงศ์" },
        { value: "เขตสาทร", text: "เขตสาทร" },
        { value: "เขตสายไหม", text: "เขตสายไหม" },
        { value: "เขตหนองจอก", text: "เขตหนองจอก" },
        { value: "เขตหนองแขม", text: "เขตหนองแขม" },
        { value: "เขตหลักสี่", text: "เขตหลักสี่" },
        { value: "เขตห้วยขวาง", text: "เขตห้วยขวาง" },
      ],
      districts: [
        {
          id: null,
          en_name: null,
          th_name: "กรุณาเลือกเขต",
          zipcode: "00000",
        },
        {
          id: null,
          en_name: null,
          th_name: "ทุกเขต",
          zipcode: "00000",
        },
        {
          id: null,
          en_name: null,
          th_name: "เลือกพื้นที่ของคุณ",
          zipcode: "00000",
        },
        {
          id: "0",
          en_name: "upcountry",
          th_name: "จังหวัดอื่นๆ",
          zipcode: "00000",
        },
      {
            "id": "1",
            "en_name": "khlongtoei",
            "th_name": "คลองเตย",
            "zipcode": "10110"
        },
        {
            "id": "2",
            "en_name": "khlongsan",
            "th_name": "คลองสาน",
            "zipcode": "10600"
        },
        {
            "id": "3",
            "en_name": "khlongsamwa",
            "th_name": "คลองสามวา",
            "zipcode": "10510"
        },
        {
            "id": "4",
            "en_name": "khannayao",
            "th_name": "คันนายาว",
            "zipcode": "10230"
        },
        {
            "id": "5",
            "en_name": "chatuchak",
            "th_name": "จตุจักร",
            "zipcode": "10900"
        },
        {
            "id": "6",
            "en_name": "chomthong",
            "th_name": "จอมทอง",
            "zipcode": "10150"
        },
        {
            "id": "7",
            "en_name": "donmueang",
            "th_name": "ดอนเมือง",
            "zipcode": "10210"
        },
        {
            "id": "8",
            "en_name": "dindaeng",
            "th_name": "ดินแดง",
            "zipcode": "10400"
        },
        {
            "id": "9",
            "en_name": "dusit",
            "th_name": "ดุสิต",
            "zipcode": "10300"
        },
        {
            "id": "10",
            "en_name": "talingchan",
            "th_name": "ตลิ่งชัน",
            "zipcode": "10170"
        },
        {
            "id": "11",
            "en_name": "thawiwatthana",
            "th_name": "ทวีวัฒนา",
            "zipcode": "10170"
        },
        {
            "id": "12",
            "en_name": "thungkhru",
            "th_name": "ทุ่งครุ",
            "zipcode": "10140"
        },
        {
            "id": "13",
            "en_name": "thonburi",
            "th_name": "ธนบุรี",
            "zipcode": "10600"
        },
        {
            "id": "14",
            "en_name": "bangkoknoi",
            "th_name": "บางกอกน้อย",
            "zipcode": "10700"
        },
        {
            "id": "15",
            "en_name": "bangkokyai",
            "th_name": "บางกอกใหญ่",
            "zipcode": "10600"
        },
        {
            "id": "16",
            "en_name": "bangkapi",
            "th_name": "บางกะปิ",
            "zipcode": "10240"
        },
        {
            "id": "17",
            "en_name": "bangkhunthian",
            "th_name": "บางขุนเทียน",
            "zipcode": "10150"
        },
        {
            "id": "18",
            "en_name": "bangkhen",
            "th_name": "บางเขน",
            "zipcode": "10220"
        },
        {
            "id": "19",
            "en_name": "bangkholaem",
            "th_name": "บางคอแหลม",
            "zipcode": "10120"
        },
        {
            "id": "20",
            "en_name": "bangkhae",
            "th_name": "บางแค",
            "zipcode": "10160"
        },
        {
            "id": "21",
            "en_name": "bangsue",
            "th_name": "บางซื่อ",
            "zipcode": "10800"
        },
        {
            "id": "22",
            "en_name": "bangna",
            "th_name": "บางนา",
            "zipcode": "10260"
        },
        {
            "id": "23",
            "en_name": "bangbon",
            "th_name": "บางบอน",
            "zipcode": "10150"
        },
        {
            "id": "24",
            "en_name": "bangphlat",
            "th_name": "บางพลัด",
            "zipcode": "10700"
        },
        {
            "id": "25",
            "en_name": "bangrak",
            "th_name": "บางรัก",
            "zipcode": "10500"
        },
        {
            "id": "26",
            "en_name": "buengkum",
            "th_name": "บึงกุ่ม",
            "zipcode": "10240"
        },
        {
            "id": "27",
            "en_name": "pathumwan",
            "th_name": "ปทุมวัน",
            "zipcode": "10330"
        },
        {
            "id": "28",
            "en_name": "prawet",
            "th_name": "ประเวศ",
            "zipcode": "10250"
        },
        {
            "id": "29",
            "en_name": "pomprapsattruphai",
            "th_name": "ป้อมปราบศัตรูพ่าย",
            "zipcode": "10100"
        },
        {
            "id": "30",
            "en_name": "phayathai",
            "th_name": "พญาไท",
            "zipcode": "10400"
        },
        {
            "id": "31",
            "en_name": "phrakhanong",
            "th_name": "พระโขนง",
            "zipcode": "10260"
        },
        {
            "id": "32",
            "en_name": "phranakhon",
            "th_name": "พระนคร",
            "zipcode": "10200"
        },
        {
            "id": "33",
            "en_name": "phasicharoen",
            "th_name": "ภาษีเจริญ",
            "zipcode": "10160"
        },
        {
            "id": "34",
            "en_name": "minburi",
            "th_name": "มีนบุรี",
            "zipcode": "10510"
        },
        {
            "id": "35",
            "en_name": "yannawa",
            "th_name": "ยานนาวา",
            "zipcode": "10120"
        },
        {
            "id": "36",
            "en_name": "ratchathewi",
            "th_name": "ราชเทวี",
            "zipcode": "10400"
        },
        {
            "id": "37",
            "en_name": "ratburana",
            "th_name": "ราษฏร์บูรณะ",
            "zipcode": "10140"
        },
        {
            "id": "38",
            "en_name": "latkrabang",
            "th_name": "ลาดกระบัง",
            "zipcode": "10520"
        },
        {
            "id": "39",
            "en_name": "latphrao",
            "th_name": "ลาดพร้าว",
            "zipcode": "10230"
        },
        {
            "id": "40",
            "en_name": "wangthonglang",
            "th_name": "วังทองหลาง",
            "zipcode": "10310"
        },
        {
            "id": "41",
            "en_name": "watthana",
            "th_name": "วัฒนา",
            "zipcode": "10110"
        },
        {
            "id": "42",
            "en_name": "suanluang",
            "th_name": "สวนหลวง",
            "zipcode": "10250"
        },
        {
            "id": "43",
            "en_name": "saphansung",
            "th_name": "สะพานสูง",
            "zipcode": "10240"
        },
        {
            "id": "44",
            "en_name": "samphanthawong",
            "th_name": "สัมพันธวงศ์",
            "zipcode": "10100"
        },
        {
            "id": "45",
            "en_name": "sathon",
            "th_name": "สาทร",
            "zipcode": "10120"
        },
        {
            "id": "46",
            "en_name": "saimai",
            "th_name": "สายไหม",
            "zipcode": "10220"
        },
        {
            "id": "47",
            "en_name": "nongkhaem",
            "th_name": "หนองแขม",
            "zipcode": "10160"
        },
        {
            "id": "48",
            "en_name": "nongchok",
            "th_name": "หนองจอก",
            "zipcode": "10530"
        },
        {
            "id": "49",
            "en_name": "laksi",
            "th_name": "หลักสี่",
            "zipcode": "10210"
        },
        {
            "id": "50",
            "en_name": "huaikhwang",
            "th_name": "ห้วยขวาง",
            "zipcode": "10310"
        }
      ],
    };
  },
  props: {
    disabled: Boolean,
    type: String,
  },
  created() {
    if (this.type == 1)
      this.districts = this.districts.filter(
        (x) =>
          x.th_name != "เลือกพื้นที่ของคุณ" &&
          x.th_name != "ทุกเขต" &&
          x.th_name != "จังหวัดอื่นๆ"
      );
    else if (this.type == 2)
      this.districts = this.districts.filter(
        (x) =>
          x.th_name != "กรุณาเลือกเขต" &&
          x.th_name != "จังหวัดอื่นๆ" &&
          x.th_name != "เลือกพื้นที่ของคุณ"
      );
    else
      this.districts = this.districts.filter(
        (x) => x.th_name != "กรุณาเลือกเขต" && x.th_name != "ทุกเขต"
      );
  },
  methods: {
    onChange(event) {
      var result = this.districts.filter((x) => x.en_name == event);
      this.$emit("change", result);
    },
  },
};
</script>

<style lang="scss" scoped>
.select-dropdown {
  width: 175px;
  font-family: "Anuphan", serif;
  font-size: 14px;
}
</style>