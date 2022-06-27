import Index from '@/pages/Index';
import {RootStackParamList} from '@/types/navigation';
import Login from '@/pages/Login';
export default [
  {
    name: 'Index',
    component: Index,
    options: {
      headerMode: 'screen',
      headerShown: false,
    },
  },
  {
    name: 'Login',
    component: Login,
    options: {
      headerMode: 'screen',
      headerShown: false,
    },
  },
] as Array<{
  name: keyof RootStackParamList;
  component: () => JSX.Element;
  options: any;
}>;
