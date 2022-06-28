import LoginStore from '@/store/login';
import {autorun} from 'mobx';
class RootStore {
  loginStore: LoginStore;
  constructor() {
    this.loginStore = new LoginStore(this);
    autorun(() => {
      console.log('登录状态发生变化', this.loginStore.isLogin);
    });
  }
}
const rootStore = new RootStore();
export default rootStore;
