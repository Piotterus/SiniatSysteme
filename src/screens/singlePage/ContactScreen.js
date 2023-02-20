import React, {useContext} from 'react';
import WebView from 'react-native-webview';
import CustomFooter from '../../components/footers/CustomFooter';
import ApiContext from '../../contexts/ApiContext';
import {SafeAreaView} from 'react-native';

const ContactScreen = () => {
  const {siteUrl} = useContext(ApiContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        source={{uri: siteUrl + 'kontakt'}}
        cacheEnabled={false}
      />
      <CustomFooter />
    </SafeAreaView>
  );
};

export default ContactScreen;
