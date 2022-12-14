const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  // button.addEventListener('click', (e) => {
  //    console.log(e.target.id)
  // });
  // });
  item.onclick = () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substring(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "=") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "=") {
      display.innerText = "Null";
      setTimeout(() => {
        display.innerText = "";
      }, 2000);
    }else{
        display.innerText += item.id;
    }
  }
});
