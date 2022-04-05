<template>
  <div class="treemap">
    <div class="checkbox-legend-small text-explain">
      <div>
        <span class="bold-baht">฿</span> | งบที่หน่วยงานขอได้
        <span class="regular-baht">฿</span> | งบที่กรุงเทพตั้งไว้ในแผนฯ
      </div>
      <div>
        (หน่วยล้านบาท)
      </div>
    </div>
    <div class="navigate-small" :id="parentId" v-on:click="navigateBack">
      <div class="navigate-text">
        <p>{{ selectedNode.id }}</p>
        <div>
          {{ selectedNode.id === "ทั้งหมด" ? "" : "[" }}
          <strong>
            {{
              selectedNode.id === "ทั้งหมด"
                ? ""
                : `฿${
                    selectedNode.value
                      ? selectedNode.value.toLocaleString()
                      : ""
                  }`
            }}
          </strong>
          {{
            selectedNode.id === "ทั้งหมด"
              ? ""
              : `/ ฿${
                  selectedNode.id
                    ? selectedNode.id.split("/ ").length == 2
                      ? outerSum
                          .get(selectedNode.id.split("/ ")[1])
                          .toLocaleString()
                      : innerSum
                          .get(selectedNode.id.split("/ ")[2])
                          .toLocaleString()
                    : ""
                } ]`
          }}
        </div>
      </div>
      <div>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8.49142" cy="8.49142" r="8.49142" fill="black" />
          <path
            d="M10.6143 5.00018L5.30713 8.71518L10.6143 12.4302"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="wrapper">
      <div>
        <div class="navigate" :id="parentId" v-on:click="navigateBack">
          <div class="navigate-text">
            <p>{{ selectedNode.id }}</p>
            <div>
              {{ selectedNode.id === "ทั้งหมด" ? "" : "[" }}
              <strong>
                {{
                  selectedNode.id === "ทั้งหมด"
                    ? ""
                    : `฿${
                        selectedNode.value
                          ? selectedNode.value.toLocaleString()
                          : ""
                      }`
                }}
              </strong>
              {{
                selectedNode.id === "ทั้งหมด"
                  ? ""
                  : `/ ฿${
                      selectedNode.id
                        ? selectedNode.id.split("/ ").length == 2
                          ? outerSum
                              .get(selectedNode.id.split("/ ")[1])
                              .toLocaleString()
                          : innerSum
                              .get(selectedNode.id.split("/ ")[2])
                              .toLocaleString()
                        : ""
                    } ]`
              }}
            </div>
          </div>
          <div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.49142" cy="8.49142" r="8.49142" fill="black" />
              <path
                d="M10.6143 5.00018L5.30713 8.71518L10.6143 12.4302"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <svg
          :height="windowHeight"
          style="margin-left: 0px;"
          class="svg-class"
          :width="windowWidth"
        >
          <g style="shape-rendering: crispEdges;" transform="translate(0,20)">
            <transition-group name="list" tag="g" class="depth">
              <g
                class="children"
                v-for="children in selectedNode._children"
                :key="'c_' + children.id"
              >
                <rect
                  v-for="child in children._children"
                  class="child"
                  :id="child.id"
                  :key="child.id"
                  :height="y(child.y1) - y(child.y0)"
                  :width="x(child.x1) - x(child.x0)"
                  :x="x(child.x0)"
                  :y="y(child.y0)"
                ></rect>

                <rect
                  class="parent"
                  v-on:click="selectNode"
                  :id="children.id"
                  :key="children.id"
                  :x="x(children.x0)"
                  :y="y(children.y0)"
                  :width="x(children.x1 - children.x0 + children.parent.x0)"
                  :height="y(children.y1 - children.y0 + children.parent.y0)"
                  :style="{
                    fill: colorMap[children.id.split('/ ')[1]]
                  }"
                >
                  <!-- The title attribute -->
                  <!-- <title>
                ด้าน{{ children.data[0] || children.data.type }} ขอได้
                {{ children.value.toLocaleString() }}ล้านบาท จากที่ตั้งไว้
                {{
                  outerSum.get(children.data[0])
                    ? outerSum.get(children.data[0]).toLocaleString()
                    : innerSum.get(children.data.type)
                    ? innerSum.get(children.data.type).toLocaleString()
                    : innerSum.get(children.data[0]).toLocaleString()
                }}ล้านบาท
              </title> -->
                </rect>

                <!-- Text inside treemap -->
                <text
                  :dy="y(children.y1) - y(children.y0) - 70"
                  :key="
                    't_' +
                      children.id +
                      (children.data[0] || children.data.type)
                  "
                  :x="x(children.x0) + 10"
                  :y="y(children.y0) + 6"
                  :style="{
                    'fill-opacity':
                      windowWidth >= breakWidth
                        ? y(children.y1 - children.y0 + children.parent.y0) >=
                            70 &&
                          x(children.x1 - children.x0 + children.parent.x0) >=
                            82 &&
                          children.id.split(' > ').length !== 2
                          ? '1'
                          : '0'
                        : y(children.y1 - children.y0 + children.parent.y0) >=
                            73 &&
                          x(children.x1 - children.x0 + children.parent.x0) >=
                            50 &&
                          children.id.split(' > ').length !== 2
                        ? '1'
                        : '0',
                    'font-size': windowWidth >= breakWidth ? '14px' : '12px'
                  }"
                >
                  {{ children.data[0] || children.data.type }}
                </text>

                <text
                  :dy="y(children.y1) - y(children.y0) - 45"
                  :key="'t_' + children.id + children.value"
                  :x="x(children.x0) + 10"
                  :y="y(children.y0) + 6"
                  :style="{
                    'fill-opacity':
                      windowWidth >= breakWidth
                        ? y(children.y1 - children.y0 + children.parent.y0) >=
                            70 &&
                          x(children.x1 - children.x0 + children.parent.x0) >=
                            82
                          ? '1'
                          : '0'
                        : y(children.y1 - children.y0 + children.parent.y0) >=
                            62 &&
                          x(children.x1 - children.x0 + children.parent.x0) >=
                            50
                        ? '1'
                        : '0',
                    'font-size': windowWidth >= breakWidth ? '21px' : '16px',
                    'font-weight': 'bold'
                  }"
                >
                  ฿{{ children.value.toLocaleString() }}
                </text>

                <text
                  :dy="y(children.y1) - y(children.y0) - 25"
                  :key="'t_' + children.id"
                  :x="x(children.x0) + 10"
                  :y="y(children.y0) + 6"
                  :style="{
                    'fill-opacity':
                      windowWidth >= breakWidth
                        ? y(children.y1 - children.y0 + children.parent.y0) >=
                            70 &&
                          x(children.x1 - children.x0 + children.parent.x0) >=
                            82
                          ? '1'
                          : '0'
                        : y(children.y1 - children.y0 + children.parent.y0) >=
                            62 &&
                          x(children.x1 - children.x0 + children.parent.x0) >=
                            50
                        ? '1'
                        : '0',
                    'font-size': windowWidth >= breakWidth ? '16px' : '12px'
                  }"
                >
                  ฿{{
                    outerSum.get(children.data[0])
                      ? outerSum.get(children.data[0]).toLocaleString()
                      : innerSum.get(children.data.type)
                      ? innerSum.get(children.data.type).toLocaleString()
                      : innerSum.get(children.data[0])
                      ? innerSum.get(children.data[0]).toLocaleString()
                      : ""
                  }}
                </text>
              </g>
            </transition-group>

            <!-- Navigation -->
            <!-- <g class="grandparent">
              <rect
                :height="margin.top + 10"
                :width="windowWidth"
                :y="(margin.top + 2) * -1"
                v-on:click="selectNode"
                :id="parentId"
              ></rect>

              <text dy=".65em" x="6" y="-14">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  ></path>
                </svg>
                {{
                  selectedNode.id === "ทั้งหมด"
                    ? selectedNode.id
                    : selectedNode.id +
                      ` (฿${
                        selectedNode.value
                          ? selectedNode.value.toLocaleString()
                          : ""
                      }/ ฿${
                        selectedNode.id
                          ? selectedNode.id.split("/ ").length == 2
                            ? outerSum
                                .get(selectedNode.id.split("/ ")[1])
                                .toLocaleString()
                            : innerSum
                                .get(selectedNode.id.split("/ ")[2])
                                .toLocaleString()
                          : ""
                      })`
                }}
              </text>
            </g> -->
          </g>
        </svg>
      </div>
      <client-only>
        <!-- <div class="checkbox-legend-small text-explain">
          <div>
            <span class="bold-baht">฿</span> | งบที่หน่วยงานขอได้
            <span class="regular-baht">฿</span> | งบที่กรุงเทพตั้งไว้ในแผนฯ
          </div>
          <div class="small-text">
            (หน่วยล้านบาท)
          </div>
        </div> -->
        <div class="checkbox-legend text-explain">
          <div class="symbol-explain">
            <ul>
              <li>
                <span class="bold-baht">฿</span> | งบที่หน่วยงานขอได้ (ล้านบาท)
              </li>
              <li>
                <span class="regular-baht">฿</span> | งบที่กรุงเทพตั้งไว้ในแผนฯ
              </li>
            </ul>
          </div>
          <div class="checkbox-area">
            <div>
              <ul>
                <div class="legendTitle">เลือกปี</div>
                <li>
                  <Checkbox
                    value="2561"
                    v-model="selectedYear"
                    color="#FFFFFF"
                    :size="18"
                    checked
                    :disabled="
                      this.selectedYear.length === 1 &&
                      this.selectedYear[0] === '2561'
                        ? true
                        : false
                    "
                  >
                    <div class="label">
                      2561
                      <div style="padding-left: 1.5px">
                        <StackedBar
                          year="2561"
                          v-if="rawData"
                          :data="rawData"
                        />
                      </div>
                    </div>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox
                    value="2562"
                    v-model="selectedYear"
                    color="#FFFFFF"
                    :size="18"
                    checked
                    :disabled="
                      this.selectedYear.length === 1 &&
                      this.selectedYear[0] === '2562'
                        ? true
                        : false
                    "
                  >
                    <div class="label">
                      2562
                      <StackedBar year="2562" v-if="rawData" :data="rawData" />
                    </div>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox
                    value="2563"
                    v-model="selectedYear"
                    color="#FFFFFF"
                    :size="18"
                    checked
                    :disabled="
                      this.selectedYear.length === 1 &&
                      this.selectedYear[0] === '2563'
                        ? true
                        : false
                    "
                  >
                    <div class="label">
                      2563
                      <StackedBar year="2563" v-if="rawData" :data="rawData" />
                    </div>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox
                    value="2564"
                    v-model="selectedYear"
                    color="#FFFFFF"
                    :size="18"
                    checked
                    :disabled="
                      this.selectedYear.length === 1 &&
                      this.selectedYear[0] === '2564'
                        ? true
                        : false
                    "
                  >
                    <div class="label">
                      2564
                      <StackedBar year="2564" v-if="rawData" :data="rawData" />
                    </div>
                  </Checkbox>
                </li>
                <!-- <li>
                <Checkbox
                  value="2565"
                  v-model="selectedYear"
                  color="#FFFFFF"
                  :size="18"
                  checked
                >
                  <div class="label">
                    2565
                  </div>
                </Checkbox>
              </li> -->
              </ul>
              <!-- <div class="symbol-explain-small">
                <p><span class="bold-baht">฿</span> | งบที่หน่วยงานขอได้</p>
                <p><span class="normal-baht">฿</span> | งบที่หน่วยงานขอได้</p>
                <p><span style="opacity:0">฿ |</span> (ล้านบาท)</p>
              </div> -->
            </div>
            <ul>
              <div class="legendTitle">เลือกด้าน</div>
              <li>
                <Checkbox
                  value="มหานครปลอดภัย"
                  v-model="selectedStrategy"
                  color="#538DFF"
                  :size="18"
                  checked
                  :disabled="selectedInner ? true : false"
                >
                  <div class="label">มหานครปลอดภัย</div>
                </Checkbox>
              </li>
              <li>
                <Checkbox
                  value="มหานครสีเขียวสะดวกสบาย"
                  v-model="selectedStrategy"
                  color="#6ADC7B"
                  :size="18"
                  checked
                  :disabled="selectedInner ? true : false"
                >
                  <div class="label">มหานครสีเขียวสะดวกสบาย</div>
                </Checkbox>
              </li>
              <li>
                <Checkbox
                  value="มหานครสำหรับทุกคน"
                  v-model="selectedStrategy"
                  color="#FF583E"
                  :size="18"
                  checked
                  :disabled="selectedInner ? true : false"
                >
                  <div class="label">
                    มหานครสำหรับทุกคน
                  </div>
                </Checkbox>
              </li>
              <li>
                <Checkbox
                  value="มหานครกระชับ"
                  v-model="selectedStrategy"
                  color="#FF9FDF"
                  :size="18"
                  checked
                  :disabled="selectedInner ? true : false"
                >
                  <div class="label">มหานครกระชับ</div>
                </Checkbox>
              </li>
              <li>
                <Checkbox
                  value="มหานครประชาธิปไตย"
                  v-model="selectedStrategy"
                  color="#FF8310"
                  :size="18"
                  checked
                  :disabled="selectedInner ? true : false"
                >
                  <div class="label">มหานครประชาธิปไตย</div>
                </Checkbox>
              </li>
              <li>
                <Checkbox
                  value="มหานครแห่งเศรษฐกิจและเรียนรู้"
                  v-model="selectedStrategy"
                  color="#C3DA14"
                  :size="18"
                  checked
                  :disabled="selectedInner ? true : false"
                >
                  <div class="label">มหานครแห่งเศรษฐกิจและเรียนรู้</div>
                </Checkbox>
              </li>
              <li>
                <Checkbox
                  value="การบริหารจัดการเมืองมหานคร"
                  v-model="selectedStrategy"
                  color="#D170FF"
                  :size="18"
                  checked
                  :disabled="selectedInner ? true : false"
                >
                  <div class="label">การบริหารจัดการเมืองมหานคร</div>
                </Checkbox>
              </li>
            </ul>
          </div>
          <!-- <div class="symbol-explain">
            <ul>
              <li>
                <span class="bold-baht">฿</span> | งบที่หน่วยงานขอได้ (ล้านบาท)
              </li>
              <li>
                <span class="regular-baht">฿</span> | งบที่กรุงเทพตั้งไว้ในแผนฯ
              </li>
            </ul>
          </div> -->
        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import { scaleLinear, scaleOrdinal } from "d3-scale";
import { hierarchy, treemap } from "d3-hierarchy";
import { csv, group, rollup, sum } from "d3";

let d3 = {
  scaleLinear: scaleLinear,
  scaleOrdinal: scaleOrdinal,
  hierarchy: hierarchy,
  treemap: treemap,
  group: group,
  rollup: rollup,
  sum: sum,
  csv: csv
};

export default {
  name: "Treemap",
  data() {
    return {
      url:
        "https://raw.githubusercontent.com/electinth/participatory-budgeting/main/assets/data/budget.csv",
      rawData: null,
      nestedData: null,
      outerSum: null,
      innerSum: null,
      windowWidth: 0,
      windowHeight: 0,
      maxWidth: 1250,
      breakWidth: 799,
      labelWidth: 345,
      rootNode: {},
      margin: {
        top: 20,
        right: 0,
        bottom: 0,
        left: 0
      },
      selected: null,
      selectedInner: null,
      selectedYear: [],
      selectedStrategy: [],
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
    selectedNode(newData, oldData) {
    },
    selectedYearCompute() {
      if (this.selectedYear.length === 0) {
        this.selectedYear = ["2561", "2562", "2563", "2564"];
      }
      this.updateData();
      // this.initialize();
    },
    selectedStrategyCompute() {
      if (this.selectedStrategy.length === 0) {
        this.selectedStrategy = [
          "มหานครปลอดภัย",
          "มหานครสีเขียวสะดวกสบาย",
          "มหานครสำหรับทุกคน",
          "มหานครกระชับ",
          "มหานครประชาธิปไตย",
          "มหานครแห่งเศรษฐกิจและเรียนรู้",
          "การบริหารจัดการเมืองมหานคร"
        ];
      }
      this.updateData();
    }
  },

  async mounted() {
    let that = this;

    that.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      window.addEventListener("resize", this.getWindowHeight);

      //Init
      that.getWindowWidth();
      that.getWindowHeight();
    });

    const raw = await d3.csv(that.url);
    const budget = raw
      .filter(({ year }) => year != "")
      .map(data => ({
        strategy: data["strategy"],
        type: data["type"],
        year: data["year"],
        received: parseFloat(
          data["งบประมาณข้อบัญญัติ(ล้านบาท)"].replace(",", "")
        ),
        expected: parseFloat(data["งบประมาณตามแผน(ล้านบาท)"].replace(",", ""))
      }));
    this.rawData = budget;

    that.updateData();
  },

  computed: {
    parentId() {
      if (
        this.selectedNode.parent === undefined ||
        this.selectedNode.parent === null
      ) {
        return this.selectedNode.id;
      } else {
        return this.selectedNode.parent.id;
      }
    },
    x() {
      return d3
        .scaleLinear()
        .domain([0, this.windowWidth])
        .range([0, this.windowWidth]);
    },
    y() {
      return d3
        .scaleLinear()
        .domain([0, this.windowHeight - this.margin.top - this.margin.bottom])
        .range([0, this.windowHeight - this.margin.top - this.margin.bottom]);
    },
    treemap() {
      return d3
        .treemap()
        .size([this.windowWidth, this.windowHeight])
        .round(false)
        .paddingInner(0);
    },
    selectedNode() {
      let node = null;

      if (this.selected) {
        let nd = this.getNodeById(this.rootNode, this.selected, this);
    
        if (nd._children) {
          node = nd;
        } else {
          node = nd.parent;
        }
      } else {
        node = this.rootNode;
      }

      // Recalculates the y and x domains
      this.x.domain([node.x0, node.x0 + (node.x1 - node.x0)]);
      this.y.domain([node.y0, node.y0 + (node.y1 - node.y0)]);

      return node;
    },
    selectedYearCompute() {
      return this.selectedYear;
    },
    selectedStrategyCompute() {
      return this.selectedStrategy;
    }
  },
  methods: {
    updateData() {
      let that = this;
      if (this.rawData) {
        let filteredBudget = this.rawData.filter(
          ({ year, strategy }) =>
            this.selectedYear.includes(year) &&
            this.selectedStrategy.includes(strategy)
        );

        let strategies = [];
        let types = [];
        let merged = [];
        let selectedYearName = this.selectedYear.join(".");

        filteredBudget.forEach(item => {
          if (!strategies.includes(item.strategy)) {
            strategies.push(item.strategy);
            if (!types.includes(item.type)) {
              types.push(item.type);
              merged.push({
                strategy: item.strategy,
                type: item.type,
                expected: item.expected,
                received: item.received,
                year: selectedYearName
              });
            }
          } else {
            if (!types.includes(item.type)) {
              types.push(item.type);
              merged.push({
                strategy: item.strategy,
                type: item.type,
                expected: item.expected,
                received: item.received,
                year: selectedYearName
              });
            } else {
              merged.find((element, index) => {
                if (
                  element.strategy === item.strategy &&
                  element.type === item.type
                ) {
                  merged[index] = {
                    strategy: item.strategy,
                    type: item.type,
                    expected: (merged[index].expected += item.expected),
                    received: (merged[index].received += item.received),
                    year: selectedYearName
                  };
                }
              });
            }
          }
        });

        const nestedMerged = d3.group(
          merged,
          data => data.strategy,
          data => data.type
        );

        that.outerSum = d3.rollup(
          merged,
          v => d3.sum(v, d => d.expected),
          d => d.strategy
        );
        that.innerSum = d3.rollup(
          merged,
          v => d3.sum(v, d => d.expected),
          d => d.type
        );

        that.nestedData = nestedMerged;
        that.initialize();
        that.accumulate(that.rootNode, that);
        that.treemap(that.rootNode);
      }
    },
    initialize() {
      let that = this;

      if (that.nestedData) {
        that.rootNode = d3
          .hierarchy(that.nestedData)
          .eachBefore(function(d) {
            d.id =
              (d.parent ? d.parent.id + "/ " : "") +
              (d.data[0] || d.data.type || "ทั้งหมด");
          })
          .sum(d => d.received)
          .sort(function(a, b) {
            return b.height - a.height || b.value - a.value;
          });
        that.rootNode.x = that.rootNode.y = 0;
        that.rootNode.x1 = that.windowWidth;
        that.rootNode.y1 = that.windowHeight;
        that.rootNode.depth = 0;
      }
    },
    accumulate(d, context) {
      d._children = d.children;

      if (d._children) {
        d.value = d._children.reduce(function(p, v) {
          return p + context.accumulate(v, context);
        }, 0);
        return d.value;
      } else {
        return d.value;
      }
    },
    // Helper method - gets a node by its id attribute
    getNodeById(node, id, context) {
      if (node.id === id) {
        return node;
      } else if (node._children) {
        for (let i = 0; i < node._children.length; i++) {
          let nd = context.getNodeById(node._children[i], id, context);
          if (nd) {
            return nd;
          }
        }
      }
    },
    selectNode(event) {
      this.selected = event.target.id;
      this.selectedInner = event.target.id.split("/ ")[1];
    },
    navigateBack() {
      this.selected = this.selectedNode.parent
        ? this.selectedNode.parent.id
        : this.selected;

      this.selected === "ทั้งหมด" ? (this.selectedInner = null) : null;
    },
    getWindowWidth(event) {
      let currentWidth = document.documentElement.clientWidth;
      if (currentWidth >= this.maxWidth) {
        this.windowWidth = this.maxWidth - this.labelWidth;
      } else if (
        currentWidth > this.breakWidth &&
        currentWidth < this.maxWidth
      ) {
        this.windowWidth = currentWidth - this.labelWidth;
      } else {
        // this.windowWidth = currentWidth;
        this.windowWidth = currentWidth - 38;
      }
    },

    getWindowHeight(event) {
      let currentWidth = document.documentElement.clientWidth;
      let currentHeight = document.documentElement.clientHeight;
      if (currentHeight <= 780 && currentWidth >= this.breakWidth) {
        this.windowHeight = 550;
      } else if (currentWidth < this.breakWidth) {
        this.windowHeight = currentHeight - currentHeight * 0.3;
      } else {
        this.windowHeight = currentHeight - currentHeight * 0.3;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

<style lang="scss" scoped>
$breakWidth: 799px;

.svg-class {
  position: relative;
  z-index: 1;
  margin-top: -18px;
  @media (max-width: $breakWidth) {
    // padding-left: 20px;
    // padding-right: 20px;
  }
}
.wrapper {
  display: flex;
  justify-content: center;
  padding-left: 20px;
  @media (max-width: $breakWidth) {
    // small
    // max-width: 599px;
    flex-wrap: wrap;
    padding-left: 0;
    // align-items: center;
    // padding: 20px 10px 20px 10px;
  }
}
text {
  font-family: "KondolarThai", serif;
  pointer-events: none;
}

// .small-text {
//   font-size: 12px;
//   @media #{$mq-mini-mobile} {
//     font-size: 10px;
//   }
// }

.checkbox-legend-small {
  display: none;
  @media (max-width: $breakWidth) {
    // small
    display: flex;
    flex-direction: column;
    max-width: $breakWidth;
    margin: 0.5em 1.6em 1.5em 1.6em;
    // background: #eeeeee;
    background: white;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    // width: 800px;
    flex-wrap: nowrap;
    align-items: center;
    padding: 5px 10px 5px 10px;
  }
}
.checkbox-legend {
  display: flex;
  align-self: flex-start;
  margin: 0 1.4em 1.4em 1.4em;
  padding: 20px;
  background: #eeeeee;
  font-family: "KondolarThai", serif;
  font-size: 14px;
  max-width: 270px;
  flex-flow: column;
  align-items: top;
  @media (max-width: $breakWidth) {
    // small
    max-width: $breakWidth;
    width: 800px;
    flex-wrap: nowrap;
    align-items: center;
    margin: 1.4em 1.6em 1.4em 1.6em;
    padding: 10px 10px 10px 10px;
  }
}

.checkbox-area {
  display: flex;
  flex-wrap: wrap;
  line-height: 0;
  justify-content: left;
  @media (max-width: $breakWidth) {
    // small
    max-width: 599px;
    flex-wrap: nowrap;
    justify-content: center;
  }
}
// .symbol-explain-small {
//   display: none;
//   line-height: 0.5;
//   @media (max-width: $breakWidth) {
//     // small
//     display: flex;
//     flex-flow: row wrap;
//     // background-color: white;
//     max-width: 220px;
//     // padding: 15px 0 0 10px;
//   }
//   @media #{$mq-mini-mobile} {
//     display: flex;
//     flex-flow: row wrap;
//     // background-color: white;
//     max-width: 145px;
//     // padding: 15px 0 0 10px;
//   }
//   @media (max-width: 400px) {
//     // small
//     display: flex;
//     flex-flow: row wrap;
//     // background-color: white;
//     max-width: 125px;
//     padding-left: 5px;
//     padding-top: 5px;
//     // padding: 15px 0 0 10px;
//   }
// }
// .symbol-explain-small > p {
//   // margin-top: 14px;
// }

.symbol-explain {
  background-color: white;
  max-width: max-content;
  padding: 0 5px 0 10px;
  // border-radius: 10px;
  text-align: left;
  @media (max-width: $breakWidth) {
    // small
    display: none;
  }
}

.bold-baht {
  font-size: 21px;
  font-weight: bold;
  @media (max-width: $breakWidth) {
    // small
    font-size: 16px;
  }
}

.regular-baht {
  font-size: 16px;
  padding: 0 1.5px 0 1.5px;
  @media (max-width: $breakWidth) {
    // small
    font-size: 12px;
  }
}

.text-explain,
.grandparent text {
  font-family: "KondolarThai", serif;
  font-size: 14px;
  @media #{$mq-mini-mobile} {
    font-size: 12px;
  }
}
.navigate {
  display: flex;
  width: 100%;
  position: relative;
  z-index: 5;
  // margin: 1.4em 0 1.4em 0;
  // margin: 1.4em 1.4em 1.4em 1.4em;
  padding: 10px;
  cursor: pointer;
  background: #eeeeee;
  justify-content: space-between;
  @media (max-width: $breakWidth) {
    display: none;
  }
}
.navigate-small {
  display: none;
  @media (max-width: $breakWidth) {
    // small
    display: flex;
    width: 100%;
    position: relative;
    z-index: 5;
    padding: 10px;
    cursor: pointer;
    background: #eeeeee;
    justify-content: space-between;
    border-left: 20px solid white;
    border-right: 20px solid white;
  }
  // @media (max-width: 490px) {
  //   margin: 1.4em 1.4em 1.4em 1.4em;
  // }
}
.navigate:hover {
  background-color: #e2e2e2;
}
.navigate-text,
.navigate-text p {
  display: flex;
  flex-direction: column;
  // flex-wrap: wrap;
  font-family: "KondolarThai", serif;
  font-size: 14px;
  text-align: left;
  padding-right: 3px;
  margin: 0;
  // flex-shrink: 10;
  // margin: 1.4em 1.4em 1.4em 1.4em;
  // padding: 20px;
  // background: #eeeeee;
  @media #{$mq-mini-mobile} {
    font-size: 12px;
  }
}
.legendTitle {
  font-weight: bold;
  text-align: left;
  font-family: "KondolarThai", serif;
  font-size: 16px;
  padding: 10px 0px 10px 5px;
  @media #{$mq-mini-mobile} {
    font-size: 14px;
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 10px 10px 10px 0px;
}

.m-chckbox--container {
  line-height: 0;
  margin: 3px;
  @media #{$mq-mini-mobile} {
    margin: 1px;
  }
}

::v-deep .m-chckbox--label {
  position: relative;
  padding-left: 0;
  cursor: pointer;
  flex-shrink: 10 !important;
}
::v-deep .m-chckbox--group > div > svg {
  fill: black;
  stroke: black;
  stroke-width: 1;
}

.label {
  display: flex;
  line-height: 1;
  transform: translateY(6px);
  text-align: left;
  padding-left: 10px;
}

// .grandparent text {
//   font-weight: bold;
// }

rect {
  fill: none;
  stroke: #fff;
}

rect.parent,
.grandparent rect {
  stroke-width: 3px;
}

.grandparent rect {
  fill: #eeeeee;
}

.grandparent:hover rect {
  fill: #e5e5e5;
}

.children rect.parent,
.grandparent rect {
  cursor: pointer;
}

.children rect.parent {
  fill: #bbb;
  fill-opacity: 0.98;
}

.children:hover rect.child {
  fill: rgb(0, 0, 0);
  /* fill: black; */
  fill-opacity: 1;
}

.children text {
  font-size: 0.8em;
}

// .grandparent text {
//   font-size: 14px;
//   @media #{$mq-mini-mobile} {
//     font-size: 12px;
//   }
// }

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
}
</style>
