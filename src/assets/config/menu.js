/**
 * 基础组件配置菜单
 * 后期可能会转换为JSON
 */
export const BASE_COMPONENTS = {
  type: 0,
  alias: 'base_components',
  aliasCN: '基础型组件',
  components: [
    { label: '按钮', component: 'button', id: '01' },
    { label: '分割线', component: 'hr', id: '02' }
  ]
}

export const INPUT_TEXT_COMPONENTS = {
  type: 1,
  alias: 'input_text_components',
  aliasCN: '输入型组件',
  components: [
    { label: '单行文本', component: 'input', id: '11' },
    { label: '多行文本', component: 'textarea', id: '12' },
    { label: '密码', component: 'password', id: '13' },
    { label: '计数器', component: 'number', id: '14' },
    { label: '编辑器', component: 'editor', id: '15' },
  ]
}

export const CHOOSE_COMPONENTS = {
  type: 2,
  alias: 'choose_components',
  aliasCN: '选择型控件',
  components: [
    { label: '下拉选择', component: 'select', id: '21' },
    { label: '单选框', component: 'radio', id: '22' },
    { label: '复选框', component: 'checkbox', id: '23' }
  ]
}

export const SERVICE_COMPONENTS = {
  type: 3,
  aliasEN: 'service_components',
  aliasCN: '服务型控件',
  components: [
    { label: '图片上传', component: 'upload', id: '31' },
  ]
}

export const LAYOUT_COMPONENTS = {
  type: 4,
  aliasEN: 'layout_components',
  aliasCN: '布局型控件',
  components: [
    { label: '行容器', component: 'row', id: '41' },
    { label: '表容器', component: 'table', id: '42' },
    { label: '边距', component: 'margin', id: '43' },
  ]
}
