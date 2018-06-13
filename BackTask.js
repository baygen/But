import { setText } from "./App";
import { playAlertTrack } from "./src/modules/Sounds";

let playing = false;

module.exports = async taskData => {
  console.log("Background Task success")
  console.log(taskData);
  if (!playing) {
    playing = true;
    playAlertTrack().then(() => {
      console.log('Playing finished')
      playing = false
    })
  }
  setText("Hello world!")
}
