const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "as u should <3";
  gif.src =
    "https://as2.ftcdn.net/v2/jpg/02/45/35/27/1000_F_245352781_97QCbSkxm2EAA7p2Ots55VmQL2ZXFmoF.jpg";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "masi spo don me tmir";
  gif.src =
    "https://media.tenor.com/vULtWU3JdPQAAAAC/mirna-muhd.gif";
});