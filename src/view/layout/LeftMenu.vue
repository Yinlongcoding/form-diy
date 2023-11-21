<template>
  <article class="form-diy left-menu">
    <h3 class="menu-title">控件菜单</h3>
    <div class="menu-list">
      <section v-for="menu in menuList" class="menu-list-group">
        <h4 class="menu-group-name">{{ menu.aliasCN }}</h4>
        <draggable
          ref="left-draggable"
          class="menu-group-wrap"
          :group="{ name: 'cmps', pull: 'clone', put: false }"
          :sort="false"
          :clone="cloneDog"
          @end="dragEnd"
        >
          <transition-group tag="div" class="menu-item-wrap">
            <div
              class="menu-item"
              v-for="item in menu.components"
              :key="item.id"
            >
              <i class="menu-item-icon" v-show="item.icon"></i>
              <span class="menu-item-name">{{ item.label }}</span>
            </div>
          </transition-group>
        </draggable>
      </section>
    </div>
  </article>
</template>
<script>
import MENU from "@/assets/config/menu";
import draggable from "vuedraggable";

export default {
  name: "LeftMenu",
  components: {
    draggable,
  },
  data() {
    return {
      menuList: MENU,
      disable: true,
      // group: {
      //   name: "cmps",
      //   pull: 'clone',
      //   put: false
      // },
      ghostClass: "ghost",
      sort: false,
      cmps: [],
    };
  },
  mounted() {},
  methods: {
    addDraggableItem(draggable) {
      // 从外部传进的 draggable 实例里获取到它的 dom 元素和配置
      const el = draggable.el;

      const options = draggable.option;

      // 通过组件内部的 draggable 实例获取到 sortable 的构造函数
      const innerDraggable = this.$refs["left-draggable"][0];
      const sortableConstructor = innerDraggable._sortable.constructor;

      // 创建 sortable 实例，将外部的 draggable 实例注入进来
      new sortableConstructor(el, options);
    },
    cloneDog(e) {
      console.log(e);
    },

    dragEnd(e) {
      console.log("dragEnd", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.left-menu {
  width: 260px;
  height: 100%;
  border-right: 1px solid #e4e7ed;

  .menu-title {
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  .menu-group-name {
    font-weight: 300;
  }

  .menu-group-wrap {
    .menu-item-wrap {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .menu-item {
        width: 48%;
        height: 34px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        line-height: 32px;
        text-align: center;
        margin-bottom: 10px;
        cursor: pointer;

        .menu-item-name {
          font-weight: 300;
          user-select: none;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
