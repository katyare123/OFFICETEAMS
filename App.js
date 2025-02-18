import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: 'https://parthoffice-teams.netlify.app/' }} 
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        setSupportMultipleWindows={false}
        allowsFullscreenVideo={true}
        allowsBackForwardNavigationGestures={true}
        injectedJavaScript={`(function() {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          }
          if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android)/)) {
            document.body.style.margin = 0;
            document.documentElement.style.height = '100%';
            document.body.style.height = '100%';
            document.body.style.overflow = 'hidden';
          }
          return true;
        })();`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:'100%',
    padding:'75px',
    width:'100%',
    position:'absolute',
   
    left:'0',
     // Ensures full black background
  },
  webview: {
    flex: 1,
  },
});
