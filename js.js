let chatpPopupEmoji = document.querySelector(".chat-popup-emoji");
let buttonEmoji = document.querySelector(".emoji-button");
buttonEmoji.addEventListener("click", (event) => {
    chatpPopupEmoji.classList.toggle("chat-popup-emoji--hidden");
})
