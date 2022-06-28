import React from 'react';
import {Button, Text, View} from 'react-native';
import {observer, useLocalObservable} from 'mobx-react';
import store from '@/store';

interface ILoginProps {}
const Login: React.FC<ILoginProps> = () => {
  const {
    loginStore: {isLogin, finalLoginState, setLoginState},
  } = useLocalObservable(() => store);
  const changeLoginState = () => {
    setLoginState(!isLogin);
  };
  return (
    <View>
      <Text>登录页面</Text>
      <Text>{finalLoginState}</Text>
      <Button title={'更换登录状态'} onPress={changeLoginState} />
    </View>
  );
};
export default observer(Login);
