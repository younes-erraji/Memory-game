let images = [
    "1.jpg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "1.jpg",
    "2.png",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
  ],
  j = 0,
  wrong = 0,
  choix;
const container = document.querySelector(".container"),
  tries = document.querySelector(".tries span"),
  cards = (img) => {
    const card = `
      <div class="main">
        <section class='auto'>
          <div class="front">?</div>
          <div class="back"><img src="images/${img}" /></div>
        </section>
      </div>`;
    return card;
  };

let anArrayOfUniqueNumbers = [],
  numberGenerator = function (arr) {
    if (arr.length >= 16) return;
    newNumber = Math.floor(Math.random() * 16);
    if (arr.indexOf(newNumber) < 0) {
      arr.push(newNumber);
      container.innerHTML += cards(images[newNumber]);
    }
    numberGenerator(arr);
  };
numberGenerator(anArrayOfUniqueNumbers);

const divs = Array.from(document.querySelectorAll(".main section"));

const pictures = document.querySelectorAll(".container .main section");
pictures.forEach(function (picture, index) {
  picture.addEventListener("click", function () {
    if (j === 0) {
      if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        j++;
        choix = this;
      }
    } else {
      if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        if (
          this.children[1].children[0].src === choix.children[1].children[0].src
        ) {
          j = 0;
        } else {
          j = 0;
          wrong++;
          setTimeout(() => {
            this.classList.remove("clicked");
            choix.classList.remove("clicked");
            checkout();
          }, 1200);
        }
      }
    }
  });
});

start.onclick = function () {
  const st = document.querySelector(".start"),
    user = document.querySelector(".user");

  // for (let i = 9; i >= 0; i--) {
  //   setTimeout(function () {
  //     st.style.opacity = `0.${i}`;
  //   }, 400);
  // }

  let op = 1;
  let opacity = setInterval(function () {
    op -= 0.1;
    st.style.opacity = `${op.toFixed(2)}`;
    if (op <= 0) {
      clearInterval(opacity);
      st.style.display = "none";
    }
  }, 140);

  let name = prompt("Please Enter Your Name") || "Unknown";
  user.textContent = name;

  setTimeout(() => {
    for (i = 0; i < divs.length; i++) {
      divs[i].classList.remove("auto");
    }
  }, 2200);
};
function checkout() {
  tries.textContent = wrong;
  if (wrong === 8) {
    alert("Sorry! You're Done");
  }
}
