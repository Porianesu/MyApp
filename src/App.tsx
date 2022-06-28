import {Platform, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import NavigationComponent from '@/components/Navigation';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from '@/store';
import {Provider} from 'mobx-react';

const App = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        {Platform.OS === 'ios' ? (
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        ) : null}
        <NavigationComponent
          initPath={props.initPath}
          initParams={props.initParams}
        />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
