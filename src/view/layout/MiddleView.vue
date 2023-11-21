<template>
  <article class="middle-view">
    <button @click="clearConfig">清空</button>
    <button @click="getJson">获取JSON</button>
    <draggable class="menu-group-wrap" group="cmps" v-model="cmps" style="height: 300px;" ref="middle-drag" @add="addOne" >
      <transition-group tag="div" class="menu-item-wrap">
        <div v-for="item in cmps" :key="item.id" class="menu-item">
          {{ item.label }}
        </div>
      </transition-group>
    </draggable>
  </article>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "MiddleView",
  data() {
    return {
      cmps: [
      { label: '行容器', component: 'row', id: '41' },
      { label: '表哥容器', component: 'table', id: '42' },
      { label: '边距', component: 'margin', id: '43' }
    ],
    };
  },
  mounted() {
  },
  components: {
    draggable,
  },
  methods: {
    getMiddleDragCmp() {
      const dragCmp = this.$refs['middle-drag'];
      return {
        el: dragCmp.$el,
        option: dragCmp._sortable.options
      };
    },
    clearConfig() {
      this.cmps = [];
    },
    getJson() {
      console.log(this.cmps);
      console.log(this.$refs['middle-drag']);
    },
    addOne() {
      console.log(arguments);
    },
  },
};
</script>
<style lang="scss" scoped>
.middle-view {
  width: calc(100vw - 610px);
  border-right: 1px solid #e4e7ed;

  .middle-cmps-view {
    height: 100%;
    width: 100%;
  }
}
</style>
