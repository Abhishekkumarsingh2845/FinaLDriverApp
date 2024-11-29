
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RNFS from 'react-native-fs';
import * as Progress from 'react-native-progress';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const downloadImage = async () => {
    const imageUri =
      'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png';
    const fileUri = `${RNFS.DownloadDirectoryPath}/261.jpg`;

    setIsDownloading(true);
    setDownloadComplete(false);

    try {
      const downloadOptions = {
        fromUrl: imageUri,
        toFile: fileUri,
        progress: res => {
          const progress = res.bytesWritten / res.contentLength;
          setProgress(progress);
        },
        progressDivider: 1,
      };

      await RNFS.downloadFile(downloadOptions).promise;

      setIsDownloading(false);
      setDownloadComplete(true);
      console.log('File downloaded to:', fileUri);
    } catch (error) {
      console.error('Download failed', error);
      setIsDownloading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        }}
        style={styles.image}
      />
      {isDownloading ? (
        <Progress.Circle size={50} indeterminate={true} color="#007BFF" />
      ) : (
        <TouchableOpacity onPress={downloadImage} style={styles.downloadButton}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      )}
      {downloadComplete && !isDownloading && (
        <Text style={styles.successText}>Download complete!</Text>
      )}
      {isDownloading && !downloadComplete && (
        <Text style={styles.progressText}>
          Downloading... {Math.round(progress * 100)}%
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  downloadText: {
    color: '#fff',
    fontSize: 16,
  },
  successText: {
    marginTop: 20,
    color: 'green',
    fontSize: 16,
  },
  progressText: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default App;
