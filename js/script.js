window.addEventListener("keypress", verifyKey)

function sendMessage() {
    let message = document.querySelector(".send-msg input");
    let msg = message.value;
    if(msg == "") return false;
    let msgHistoric = document.querySelector("div.historic");
    let newHistoric = msgHistoric.innerHTML;
    newHistoric += `<p>Anyone: ${msg}</p`;
    msgHistoric.innerHTML = newHistoric;
    message.value = "";
    message.focus();

    msgHistoric.scrollTop = msgHistoric.scrollHeight;
}

function verifyKey(e) {
	if(e.keyCode == 13) {
        sendMessage();
	}
}