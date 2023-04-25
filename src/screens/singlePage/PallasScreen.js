import React, {useContext} from 'react';
import WebView from 'react-native-webview';
import CustomFooter from '../../components/footers/CustomFooter';
import ApiContext from '../../contexts/ApiContext';
import {Platform, SafeAreaView} from 'react-native';
import {SiniatHeader} from '../../components/headers/CustomHeaders';
import {ScreenWidth} from '@rneui/base';
import LanguageContext from '../../contexts/LanguageContext';

const PallasScreen = () => {
  const {siteUrl} = useContext(ApiContext);
  const {activeLanguageCode} = useContext(LanguageContext);

  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'initial-scale=1.0, maximum-scale=1.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

  let uri = siteUrl + 'pallas/' + activeLanguageCode;

  return (
    <SafeAreaView style={{flex: 1}}>
      <SiniatHeader />
      <WebView
        style={{flex: 1, width: ScreenWidth}}
        scalesPageToFit={Platform.OS !== 'android'}
        source={{uri: uri}}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        cacheEnabled={false}
        useWebkit={false}
      />
      <CustomFooter />
    </SafeAreaView>
  );
};

export default PallasScreen;
