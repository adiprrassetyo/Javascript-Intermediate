function callback() {
  console.log("Hello World");
}

function buttonClick() {
  // async
  // setTimeout(function () {
  //     callback();
  // }, 2000);
  setInterval(function () {
    callback();
  }, 2000);
  console.log("Success Click Button");
}
