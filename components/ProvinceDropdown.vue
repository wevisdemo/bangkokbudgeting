<template>
  <div>
    <b-form-select
      class="select-dropdown"
      v-model="selected"
      :options="options"
      @change="onChange"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "กรุณาเลือกจังหวัด" },
        { value: "กระบี่", text: "กระบี่" },
        // { value: "กรุงเทพมหานคร", text: "กรุงเทพมหานคร" },
        { value: "กาญจนบุรี", text: "กาญจนบุรี" },
        { value: "กาฬสินธุ์", text: "กาฬสินธุ์" },
        { value: "กำแพงเพชร", text: "กำแพงเพชร" },
        { value: "ขอนแก่น", text: "ขอนแก่น" },
        { value: "จันทบุรี", text: "จันทบุรี" },
        { value: "ฉะเชิงเทรา", text: "ฉะเชิงเทรา" },
        { value: "ชลบุรี", text: "ชลบุรี" },
        { value: "ชัยนาท", text: "ชัยนาท" },
        { value: "ชัยภูมิ", text: "ชัยภูมิ" },
        { value: "ชุมพร", text: "ชุมพร" },
        { value: "ตรัง", text: "ตรัง" },
        { value: "ตราด", text: "ตราด" },
        { value: "ตาก", text: "ตาก" },
        { value: "นครนายก", text: "นครนายก" },
        { value: "นครปฐม", text: "นครปฐม" },
        { value: "นครพนม", text: "นครพนม" },
        { value: "นครราชสีมา", text: "นครราชสีมา" },
        { value: "นครศรีธรรมราช", text: "นครศรีธรรมราช" },
        { value: "นครสวรรค์", text: "นครสวรรค์" },
        { value: "นนทบุรี", text: "นนทบุรี" },
        { value: "นราธิวาส", text: "นราธิวาส" },
        { value: "น่าน", text: "น่าน" },
        { value: "บึงกาฬ", text: "บึงกาฬ" },
        { value: "บุรีรัมย์", text: "บุรีรัมย์" },
        { value: "ปทุมธานี", text: "ปทุมธานี" },
        { value: "ประจวบคีรีขันธ์", text: "ประจวบคีรีขันธ์" },
        { value: "ปราจีนบุรี", text: "ปราจีนบุรี" },
        { value: "ปัตตานี", text: "ปัตตานี" },
        { value: "พระนครศรีอยุธยา", text: "พระนครศรีอยุธยา" },
        { value: "พะเยา", text: "พะเยา" },
        { value: "พังงา", text: "พังงา" },
        { value: "พัทลุง", text: "พัทลุง" },
        { value: "พิจิตร", text: "พิจิตร" },
        { value: "พิษณุโลก", text: "พิษณุโลก" },
        { value: "ภูเก็ต", text: "ภูเก็ต" },
        { value: "มหาสารคาม", text: "มหาสารคาม" },
        { value: "มุกดาหาร", text: "มุกดาหาร" },
        { value: "ยะลา", text: "ยะลา" },
        { value: "ยโสธร", text: "ยโสธร" },
        { value: "ระนอง", text: "ระนอง" },
        { value: "ระยอง", text: "ระยอง" },
        { value: "ราชบุรี", text: "ราชบุรี" },
        { value: "ร้อยเอ็ด", text: "ร้อยเอ็ด" },
        { value: "ลพบุรี", text: "ลพบุรี" },
        { value: "ลำปาง", text: "ลำปาง" },
        { value: "ลำพูน", text: "ลำพูน" },
        { value: "ศรีสะเกษ", text: "ศรีสะเกษ" },
        { value: "สกลนคร", text: "สกลนคร" },
        { value: "สงขลา", text: "สงขลา" },
        { value: "สตูล", text: "สตูล" },
        { value: "สมุทรปราการ", text: "สมุทรปราการ" },
        { value: "สมุทรสงคราม", text: "สมุทรสงคราม" },
        { value: "สมุทรสาคร", text: "สมุทรสาคร" },
        { value: "สระบุรี", text: "สระบุรี" },
        { value: "สระแก้ว", text: "สระแก้ว" },
        { value: "สิงห์บุรี", text: "สิงห์บุรี" },
        { value: "สุพรรณบุรี", text: "สุพรรณบุรี" },
        { value: "สุราษฎร์ธานี", text: "สุราษฎร์ธานี" },
        { value: "สุรินทร์", text: "สุรินทร์" },
        { value: "สุโขทัย", text: "สุโขทัย" },
        { value: "หนองคาย", text: "หนองคาย" },
        { value: "หนองบัวลำภู", text: "หนองบัวลำภู" },
        { value: "อำนาจเจริญ", text: "อำนาจเจริญ" },
        { value: "อุดรธานี", text: "อุดรธานี" },
        { value: "อุตรดิตถ์", text: "อุตรดิตถ์" },
        { value: "อุทัยธานี", text: "อุทัยธานี" },
        { value: "อุบลราชธานี", text: "อุบลราชธานี" },
        { value: "อ่างทอง", text: "อ่างทอง" },
        { value: "เชียงราย", text: "เชียงราย" },
        { value: "เชียงใหม่", text: "เชียงใหม่" },
        { value: "เพชรบุรี", text: "เพชรบุรี" },
        { value: "เพชรบูรณ์", text: "เพชรบูรณ์" },
        { value: "เลย", text: "เลย" },
        { value: "แพร่", text: "แพร่" },
        { value: "แม่ฮ่องสอน", text: "แม่ฮ่องสอน" },
      ],
    };
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
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