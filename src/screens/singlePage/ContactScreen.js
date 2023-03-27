import React, {useContext} from 'react';
import WebView from 'react-native-webview';
import CustomFooter from '../../components/footers/CustomFooter';
import ApiContext from '../../contexts/ApiContext';
import {Platform, SafeAreaView} from 'react-native';
import {SiniatHeader} from '../../components/headers/CustomHeaders';
import {ScreenWidth} from '@rneui/base';

const ContactScreen = () => {
  const {siteUrl} = useContext(ApiContext);

  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'initial-scale=1.0, maximum-scale=1.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

  return (
    <SafeAreaView style={{flex: 1}}>
      <SiniatHeader />
      <WebView
        style={{flex: 1, width: ScreenWidth}}
        scalesPageToFit={Platform.OS !== 'android'}
        source={{uri: siteUrl + 'kontakt'}}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        cacheEnabled={false}
      />
      <CustomFooter />
    </SafeAreaView>
  );
};

export default ContactScreen;
