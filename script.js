const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

let loading = document.getElementById("loading");
window.addEventListener("load", function () {
  loading.style.display = "none";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

let search = document.getElementById("collapsibleNavbar");
let header_js = document.getElementById("header_js");
header_js.style.background = "none";
search.style.background = "none";

window.onscroll = function (params) {
  let value = scrollY;
  if (scrollY >= 250) {
    header_js.style.background = "white";
    header_js.style.transition = "0.5s";
  } else {
    header_js.style.background = "none";
  }
};

// buy ___________________________________________________________________________

function abuy() {
  let a = document.getElementById("value1").value;
  let b = document.getElementById("value2").value;
  let span1 = document.getElementById("span1");
  const rege = /^[a-zA-Z\s'-]+$/;
  if (
    (a == "" || b == "" || a,
    b == null || rege.test(a) === false || rege.test(b) === false)
  ) {
    span1.innerHTML = "Name/Last Name*";
    span1.style.color = "red";
    document.getElementById("value1").style.border = "1px red solid";
    document.getElementById("value1").value = "";
    document.getElementById("value2").style.border = "1px red solid";
    document.getElementById("value2").value = "";
  } else {
    span1.innerHTML = "Name/Last Name :";
    span1.style.color = "black";
    document.getElementById("value1").style.border = "1px black solid";
  }
  let c = document.getElementById("value_adresse").value;
  let span2 = document.getElementById("span2");
  if (c == "") {
    span2.innerHTML = "Adresse*";
    span2.style.color = "red";
    document.getElementById("value_adresse").style.border = "1px red solid";
    document.getElementById("value_adresse").value = "";
  } else {
    span2.innerHTML = "Adresse :";
    span2.style.color = "black";
    document.getElementById("value_adresse").style.border = "1px black solid";
  }

  let d = document.getElementById("value_city").value;
  let span3 = document.getElementById("span3");
  if (d == "") {
    span3.innerHTML = "Your City*";
    span3.style.color = "red";
    document.getElementById("value_city").style.border = "1px red solid";
    document.getElementById("value_city").value = "";
  } else {
    span3.innerHTML = "Your City :";
    span3.style.color = "black";
    document.getElementById("value_city").style.border = "1px black solid";
  }

  let e = document.getElementById("value_postal").value;
  let span4 = document.getElementById("span4");
  if ((e == "") | (isNaN(e) == true)) {
    span4.innerHTML = "Postal*";
    span4.style.color = "red";
    document.getElementById("value_postal").style.border = "1px red solid";
    document.getElementById("value_postal").value = "";
  } else {
    span4.innerHTML = "Postal :";
    span4.style.color = "black";
    document.getElementById("value_postal").style.border = "1px black solid";
  }

  let j = document.getElementById("value_phone").value;
  let span5 = document.getElementById("span5");
  if ((j == "") | (isNaN(j) == true)) {
    span5.innerHTML = "Phone Number*";
    span5.style.color = "red";
    document.getElementById("value_phone").style.border = "1px red solid";
    document.getElementById("value_phone").value = "";
  } else {
    span5.innerHTML = "Phone Number :";
    span5.style.color = "black";
    document.getElementById("value_phone").style.border = "1px black solid";
  }

  let h = document.getElementById("value_email").value;
  let span6 = document.getElementById("span6");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (h == "" || emailRegex.test(h) == false) {
    span6.innerHTML = "Your Email*";
    span6.style.color = "red";
    document.getElementById("value_email").style.border = "1px red solid";
    document.getElementById("value_email").value = "";
  } else {
    span6.innerHTML = "Your Email :";
    span6.style.color = "black";
    document.getElementById("value_email").style.border = "1px black solid";
  }

  let m = document.getElementById("value_pass").value;
  let span7 = document.getElementById("span7");
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (m == "" || regex.test(m) === false) {
    span7.innerHTML = "Create Your Password*";
    span7.style.color = "red";
    document.getElementById("value_pass").style.border = "1px red solid";
    document.getElementById("value_pass").value = "";
  } else {
    span7.innerHTML = "Create Your Password :";
    span7.style.color = "black";
    document.getElementById("value_pass").style.border = "1px black solid";
  }
}
function acontact() {
  let a = document.getElementById("value1").value;
  let b = document.getElementById("value2").value;
  const rege = /^[a-zA-Z\s'-]+$/;
  if (a == "" || rege.test(a) === false) {
    document.getElementById("value1").style.border = "1px red solid";
    document.getElementById("value1").value = "";
  } else {
    document.getElementById("value1").style.border = "1px black solid";
  }
  if (b == "") {
    document.getElementById("value2").style.border = "1px red solid";
    document.getElementById("value2").value = "";
  } else {
    document.getElementById("value2").style.border = "1px black solid";
  }
  let h = document.getElementById("value_email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if ((h == "") | (emailRegex.test(h) === false)) {
    document.getElementById("value_email").style.border = "1px red solid";
    document.getElementById("value_email").value = "";
  } else {
    document.getElementById("value_email").style.border = "1px black solid";
  }
}

// buy ___________________________________________________________________________

function add_0() {
  let no1 = document.getElementById("no1").value;
  document.getElementById("no1").value = Number(no1) - 1;
}
function add_1() {
  let no1 = document.getElementById("no1").value;
  document.getElementById("no1").value = Number(no1) + 1;
}

// books ___________________________________________________________________________
document.getElementById("Ga").style.display = "block";
document.getElementById("book").style.display = "none";

function clo_h() {
  document.getElementById("Ga").style.display = "block";
  document.getElementById("book").style.display = "none";
  document.title = "Richa | HOME";
  document.getElementById("b-img").src = "";
  document.getElementById("b-name").innerHTML = "";
  document.getElementById("b-about").innerHTML = "";
  document.getElementById("prix").innerHTML = "";
}
function clo_g() {
  document.getElementById("Ga").style.display = "block";
  document.getElementById("book").style.display = "none";
  document.title = "Richa | Gallery";
  document.getElementById("b-img").src = "";
  document.getElementById("b-name").innerHTML = "";
  document.getElementById("b-about").innerHTML = "";
  document.getElementById("prix").innerHTML = "";
}
function book(nom) {
  window.scrollTo(0, 0);
  document.title = "Richa | Book";
  document.getElementById("Ga").style.display = "none";
  document.getElementById("book").style.display = "block";
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("On");
      document.getElementById("b-img").src = data[nom - 1].url;
      document.getElementById("b-name").innerHTML = data[nom - 1].name;
      document.getElementById("b-about").innerHTML = data[nom - 1].about;
      document.getElementById("prix").innerHTML = data[nom - 1].prix;
      document.getElementById("prix").innerHTML += data[nom - 1].prix2;
    });
}
function cart_add(cn) {
  let cart = document.getElementById("cart");
  let cart_p = document.getElementById("cart_p");
  let cart_d = document.getElementById("cart_d");
  let cart_tt = document.getElementById("cart_tt");
  let nup = cart_p.textContent;
  let nut = cart_tt.textContent;

  if (cn === "a") {
    cart.style.display = "none";
  }
  if (cn == 0) {
    cart.style.display = "block";
  }
  if (Number(cn) > 0) {
    cart_p.innerHTML = Number(nup) + 1;

    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        cart_d.innerHTML += `<div class="car${nup}" id="cart_dd"><img src="${
          data[cn - 1].url
        }" alt=""><h5>${data[cn - 1].name}</h5><span>${
          data[cn - 1].prix
        }</span><button onclick="cart_r(${nup},${cn})" ><i class="fi fi-rr-trash"></i></button></div>`;
        cart_tt.innerHTML = Number(nut) + Number(data[cn - 1].prix3);
      });
  }
}
function cart_r(cr, cn) {
  const cars = document.getElementsByClassName(`car${cr}`);
  for (let i = 0; i < cars.length; i++) {
    cars[i].remove();
  }
  let nup = cart_p.textContent;
  let nut = cart_tt.textContent;
  cart_p.innerHTML = Number(nup) - 1;
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      cart_tt.innerHTML = Number(nut) - Number(data[cn - 1].prix3);
    });
}
