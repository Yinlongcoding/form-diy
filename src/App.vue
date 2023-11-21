<template>
  <div id="app">
    <article class="form-diy-container">
      <LeftMenu ref="left"/>
      <MiddleView ref="middle"/>
      <RightConfig/>
    </article>
  </div>
</template>
<script>
import LeftMenu from '@/view/layout/LeftMenu.vue';
import MiddleView from '@/view/layout/MiddleView.vue';
import RightConfig from '@/view/layout/RightConfig.vue';

export default {
  name: "Home",
  components: {
    LeftMenu,
    MiddleView,
    RightConfig
  },
  data() {
    return {
      
    }
  },
  mounted() {
    this.toggleSortTable();
  },
  methods: {
    toggleSortTable() {
      const middleDrag = this.$refs['middle'].getMiddleDragCmp();
      const leftDrag = this.$refs['left'];
      
      leftDrag.addDraggableItem(middleDrag);
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  height: 100vh;
  .form-diy-container {
    height: 100%;
    display: flex;
  }
}
</style>

