import Sound from 'react-native-sound';

Sound.setCategory('Playback');

// See notes below about preloading sounds within initialization code below.
const alert = new Sound('frog.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('SOUND failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('SOUND duration in seconds: ' + alert.getDuration() + 'number of channels: ' + alert.getNumberOfChannels());
});

// export const play = (callback) => playAlertTrack().then(callback);

export const playAlertTrack = () => new Promise((res, rej) => {
  alert.play(success => {
    if (success) return res();
    alert.reset();
    return rej();
  });
});

export const releaseSounds = () => {
  alert.release();
};

