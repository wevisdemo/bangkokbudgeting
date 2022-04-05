<template>
  <div class="stack">
    <div v-for="value in values" :key="value[0]">
      <div
        :style="{
          'background-color': colorMap[value[0]],
          height: '16px',
          width: scale(value[1]) + 'px'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { scaleLinear } from "d3-scale";
import { rollup, sum } from "d3";
let d3 = {
  scaleLinear: scaleLinear,
  rollup: rollup,
  sum: sum
};
export default {
  name: "App",
  props: {
    year: String,
    data: []
  },
  components: {},
  data() {
    return {
      values: null,
      total: 0,
      scale: null,
      maxRange: 150,
      currentWidth: 0,
      colorMap: {
        มหานครปลอดภัย: `#538DFF`,
        มหานครสีเขียวสะดวกสบาย: `#6ADC7B`,
        มหานครสำหรับทุกคน: `#FF583E`,
        มหานครกระชับ: `#FF9FDF`,
        มหานครประชาธิปไตย: `#FF8310`,
        มหานครแห่งเศรษฐกิจและเรียนรู้: `#C3DA14`,
        การบริหารจัดการเมืองมหานคร: `#D170FF`
      }
    };
  },
  watch: {
    maxRange() {
      this.scale = d3
        .scaleLinear()
        .domain([0, this.total])
        .range([0, this.maxRange]);
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      this.getWindowWidth();
    });
    const filteredData = this.data.filter(({ year }) => year == this.year);
    this.values = d3.rollup(
      filteredData,
      v => d3.sum(v, d => d.received),
      d => d.strategy
    );

    this.values.forEach(element => {
      this.total += element;
    });

    this.scale = d3
      .scaleLinear()
      .domain([0, this.total])
      .range([0, this.maxRange]);
  },
  methods: {
    getWindowWidth(event) {
      this.currentWidth = document.documentElement.clientWidth;
      if (this.currentWidth < 400) {
        this.maxRange = 55;
      } else if (this.currentWidth < 600) {
        this.maxRange = 80;
      } else {
        this.maxRange = 150;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>

<style lang="scss" scoped>
.stack {
  display: flex;
  padding-left: 10px;
  transform: translateY(-2px);
}
</style>
