import {setText} from "./App";

module.exports = async taskData => {
  console.log("Background Task success")
  console.log(taskData);
  setText("Hello world!")
}
