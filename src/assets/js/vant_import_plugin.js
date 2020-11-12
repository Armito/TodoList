import { Button, Field } from 'vant'

const install = (app) => {
  app.use(Button);
  app.use(Field);
};

export default {
  install
}