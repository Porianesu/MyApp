import {Platform, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import NavigationComponent from '@/components/Navigation';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      {Platform.OS === 'ios' ? (
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      ) : null}
      <NavigationComponent
        initPath={props.initPath}
        initParams={props.initParams}
      />
    </SafeAreaView>
  );
};

export default App;
