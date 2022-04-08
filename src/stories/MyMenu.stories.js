import MyMenu from './MyMenu.vue'

export default {
    title:'Example/Test/MyMenu',
    component:MyMenu
}
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyMenu },
    template: '<my-menu v-bind="$props" />',
  });

  export const Menu = Template.bind({}) 
  Menu.args = {
    variant: '',
  };