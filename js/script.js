const container = document.querySelector(".container");
const qrCodebutton = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")


// Gerar QR Code
const geradorQrCode = () => {
    qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodebutton.innerText = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodebutton.innerText = "Código criado!"
    })
}

qrCodebutton.addEventListener("click", () => {
    geradorQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        geradorQrCode();
    }
})

// Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodebutton.innerText = "Gerar QR Code!"
    }
})
