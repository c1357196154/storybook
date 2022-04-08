import MyTable from './Table.vue';

export default {
  title: 'Example/MyTable',
  component: MyTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyTable },
  template:
    '<my-table :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {name:'ch0447'},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
