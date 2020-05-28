function sendMessage() {
    let message = document.querySelector(".send-msg input");
    let msg = message.value;
    if(msg == "") return false;
    let msgHistory = document.querySelector("div.history");
    let newHistory = msgHistory.innerHTML;
    newHistory += `<p>Anyone: ${msg}</p`;
    msgHistory.innerHTML = newHistory;
    message.value = "";
}