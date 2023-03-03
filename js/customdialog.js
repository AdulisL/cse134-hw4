
window.addEventListener("DOMContentLoaded", init);

function init() {
  //*Declarations & Definitions of variables */
  let custom = document.getElementById("custom");
  let output = document.querySelector("output");
  let alert = document.getElementById("alert");
  let confirm = document.getElementById("confirm");
  let prompt = document.getElementById("prompt");

  alert.addEventListener("click", (e) => {
    output.hidden = true;

    setTimeout(() => {
      window.alert("A custom alert generated!");
    }, 0);
  });

  confirm.addEventListener("click", function (e) {
    output.hidden = true;

    setTimeout(() => {
      output.hidden = false;
      let result = window.confirm("Are you sure?");
      if (result) output.textContent = "Successful!";
      else output.textContent = `Unsuccessful`;
    }, 0);
  });

  prompt.addEventListener("click", function (e) {
    output.hidden = true;

    setTimeout(() => {
      output.hidden = false;
      let result = window.prompt("What is your name?");
      if (result === "" || result === null) {
        output.innerHTML = "You did not enter anything";
      } else {
        output.innerHTML = `You entered: ${result}`;
      }
    }, 0);
  });

  custom.addEventListener("click", function (e) {
    output.hidden = true;

    setTimeout(() => {
      output.hidden = false;
      let result = window.confirm("If you are done click ok");
      output.innerHTML = `Done!: ${result}`;
    }, 0);
  });
}
