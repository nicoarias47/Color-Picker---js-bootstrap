const imput = document.getElementById("imputColor");

const btn = document.querySelector(".btn-primary");

const text = document.querySelector(".lead");

const card = document.querySelector(".card");

btn.addEventListener("click", () => {
  text.textContent = imput.value;
  card.style.backgroundColor = imput.value;
  //copiar text
  navigator.clipboard
    .writeText(imput.value)
    .then(() => console.log("texto copiado: " + imput.value))
    .catch((e) => console.log(e));
});
