import RNFetchBlob from 'rn-fetch-blob';

export const downloadImages = (url = '') => {
  console.log(url);
  RNFetchBlob.config({
    fileCache: true,
    addAndroidDownloads: {
      useDownloadManager: true,
      notification: true,
      mime: 'image/png',
      mediaScannable: true,
      description: 'File downloaded by download manager.',
    },
  })
    .fetch('GET', url)
    .then(resp => {
      // the path of downloaded file
      console.log({save: true, path: resp.path()});
    })
    .catch(res => console.log(res));
};
