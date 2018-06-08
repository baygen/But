import {setText, play} from "./App";

let playing = false;

module.exports = async taskData => {
  console.log("Background Task success")
  console.log(taskData);
  if (!playing){
    playing = true;
    play(()=>{
      console.log('Playing finished')
      playing = false
    })
  }
  setText("Hello world!")
}
