import {makeAutoObservable} from 'mobx';

class LoginStore {
  rootStore: any;
  isLogin: boolean;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
    this.isLogin = false;
    makeAutoObservable(this);
  }
  setLoginState: (newLoginState: boolean) => void = newLoginState => {
    this.isLogin = newLoginState;
  };
  get finalLoginState(): string {
    return this.isLogin ? '已登录' : '未登录';
  }
}

export default LoginStore;
