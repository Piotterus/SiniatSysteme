import React, {useCallback, useContext, useRef, useState} from 'react';
import WebView from 'react-native-webview';
import CustomFooter from '../../components/footers/CustomFooter';
import ApiContext from '../../contexts/ApiContext';
import {Platform, SafeAreaView, View} from 'react-native';
import {SiniatHeader} from '../../components/headers/CustomHeaders';
import {ScreenWidth} from '@rneui/base';
import LanguageContext from '../../contexts/LanguageContext';
import {useFocusEffect} from '@react-navigation/native';

const EasyboardScreen = () => {
  const {siteUrl} = useContext(ApiContext);
  const {activeLanguageCode} = useContext(LanguageContext);
  const [loading, setLoading] = useState(true);

  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'initial-scale=1.0, maximum-scale=1.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

  let uri = siteUrl + 'easyboard';

  useFocusEffect(
    useCallback(() => {
      setLoading(false);
      return () => setLoading(true);
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <SiniatHeader />
      {loading === true && <View style={{flex: 1}} />}
      {loading === false && (
        <WebView
          style={{flex: 1, width: ScreenWidth}}
          scalesPageToFit={Platform.OS !== 'android'}
          source={{uri: uri}}
          injectedJavaScript={INJECTEDJAVASCRIPT}
          cacheEnabled={false}
          useWebkit={false}
          startInLoadingState={true}
        />
      )}
      <CustomFooter />
    </SafeAreaView>
  );
};

export default EasyboardScreen;
