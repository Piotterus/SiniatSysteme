import React, {useContext} from 'react';
import WebView from 'react-native-webview';
import CustomFooter from '../../components/footers/CustomFooter';
import ApiContext from '../../contexts/ApiContext';
import {SafeAreaView} from 'react-native';
import {SiniatHeader} from '../../components/headers/CustomHeaders';

const PrivacyScreen = () => {
  const {siteUrl} = useContext(ApiContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <SiniatHeader />
      <WebView
        style={{flex: 1}}
        source={{uri: siteUrl + 'privacy'}}
        cacheEnabled={false}
      />
      <CustomFooter />
    </SafeAreaView>
  );
};

export default PrivacyScreen;
