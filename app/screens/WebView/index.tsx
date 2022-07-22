import React, {useEffect, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import {WebView} from 'react-native-webview';
import {View} from '../../components/Themed';
import {RootStackScreenProps} from '../../navigation/types';
export default function MyWebView({route}: RootStackScreenProps<'MyWebView'>) {
  const [url, setUrl] = useState<string>('http://dichvunuoc.vn/show/hh_home');
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (route.params.url) {
      setUrl(route.params.url);
    }
  }, [route.params.url]);

  return (
    <View style={{flex: 1}}>
      {loading && (
        <Spinner
          visible={true}
          textContent={`${route.params.title} ...`}
          textStyle={{color: '#fff', fontSize: 20}}
        />
      )}
      <WebView
        source={{
          uri: url,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadEnd={() => {
          console.log('load xong');

          setLoading(false);
        }}
      />
    </View>
  );
}
