const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})



let loading = document.getElementById('loading');
window.addEventListener("load", function () {
  loading.style.display = "none";
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






let search = document.getElementById('collapsibleNavbar');
let header_js = document.getElementById('header_js');
header_js.style.background = 'none';
search.style.background = 'none';

window.onscroll = function (params) {
  let value = scrollY;
  if (scrollY >= 300) {
    header_js.style.background = 'rgba(255, 255, 255,.5)';
    search.style.background = 'rgba(255, 255, 255,.5)';
    header_js.style.transition = '0.5s';
    search.style.transition = '0.5s';

  }
  else {
    header_js.style.background = 'none';
    search.style.background = 'none';

  }
}



// buy ___________________________________________________________________________

function abuy() {
  let a = document.getElementById("value1").value;
  let b = document.getElementById("value2").value;
  let span1 = document.getElementById("span1");
  if (a == "") {
    span1.innerHTML = "Name/Last Name*";
    span1.style.color = "red";
    document.getElementById("value1").style.border = "1px red solid";
    document.getElementById("value1").value = "";
  } else {
    span1.innerHTML = "Name/Last Name";
    span1.style.color = "black";
    document.getElementById("value1").style.border = "1px black solid";
  }
  if (b == "") {
    span1.innerHTML = "Name/Last Name*";
    span1.style.color = "red";
    document.getElementById("value2").style.border = "1px red solid";
    document.getElementById("value2").value = "";
  } else {
    span1.innerHTML = "Name/Last Name";
    span1.style.color = "black";
    document.getElementById("value2").style.border = "1px black solid";
  }

  let c = document.getElementById("value_adresse").value;
  let span2 = document.getElementById("span2");
  if (c == "") {
    span2.innerHTML = "Adresse*";
    span2.style.color = "red";
    document.getElementById("value_adresse").style.border = "1px red solid";
    document.getElementById("value_adresse").value = "";
  } else {
    span2.innerHTML = "Adresse:";
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
    span3.innerHTML = "Your City:";
    span3.style.color = "black";
    document.getElementById("value_city").style.border = "1px black solid";
  }

  let e = document.getElementById("value_postal").value;
  let span4 = document.getElementById("span4");
  if (e == "" | isNaN(e) == true) {
    span4.innerHTML = "Postal*";
    span4.style.color = "red";
    document.getElementById("value_postal").style.border = "1px red solid";
    document.getElementById("value_postal").value = "";
  } else {
    span4.innerHTML = "Postal:";
    span4.style.color = "black";
    document.getElementById("value_postal").style.border = "1px black solid";
  }

  let j = document.getElementById("value_phone").value;
  let span5 = document.getElementById("span5");
  if ((j == "") | (isNaN(j) == true)) {
    span5.innerHTML = "Phone Number*";
    span5.style.color = "red";
    document.getElementById("value_phone").style.border = "1px red solid";
    document.getElementById('value_phone').value = "";
  } else {
    span5.innerHTML = "Phone Number:";
    span5.style.color = "black";
    document.getElementById("value_phone").style.border = "1px black solid";
  }

  let h = document.getElementById("value_email").value;
  let span6 = document.getElementById("span6");
  let index = h.indexOf("@");
  if (h == "" | index == -1) {
    span6.innerHTML = "Your Email*";
    span6.style.color = "red";
    document.getElementById("value_email").style.border = "1px red solid";
    document.getElementById("value_email").value = "";
  } else {
    document.getElementById("value_email").style.border = "1px black solid";
  }


  let m = document.getElementById("value_pass").value;
  let span7 = document.getElementById("span7");
  let inde = h.indexOf("@");
  if ((m == "")) {
    span7.innerHTML = "Create Your Password*";
    span7.style.color = "red";
    document.getElementById("value_pass").style.border = "1px red solid";
    document.getElementById("value_pass").value = "";
  } else {
    span7.innerHTML = "Create Your Password:";
    span7.style.color = "black";
    document.getElementById("value_pass").style.border = "1px black solid";
  }

}
function acontact() {

  let a = document.getElementById("value1").value;
  let b = document.getElementById("value2").value;
  let span1 = document.getElementById("span1");
  if (a == "") {
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
  let span6 = document.getElementById("span6");
  let index = h.indexOf("@");
  if (h == "" | index == -1) {
    document.getElementById("value_email").style.border = "1px red solid";
    document.getElementById("value_email").value = "";
  } else {
    document.getElementById("value_email").style.border = "1px black solid";
  }

}



// buy ___________________________________________________________________________

function add_0() {
  let no1 = document.getElementById('no1').value;
  document.getElementById('no1').value = Number(no1) - 1;
}
function add_1() {
  let no1 = document.getElementById('no1').value;
  document.getElementById('no1').value = Number(no1) + 1;
}


// books ___________________________________________________________________________
document.getElementById("Ga").style.display = 'block';
document.getElementById("book").style.display = 'none';

function clo_h() {
  document.getElementById("Ga").style.display = 'block';
  document.getElementById("book").style.display = 'none';
  document.title = 'Richa | HOME';

}
function clo_g() {
  document.getElementById("Ga").style.display = 'block';
  document.getElementById("book").style.display = 'none';
  document.title = 'Richa | Gallery';

}
function book(nom) {
  window.scrollTo(0, 0);
  document.title = 'Richa | Book';
  document.getElementById("Ga").style.display = 'none';
  document.getElementById("book").style.display = 'block';
  let b_img = document.getElementById("b-img");
  let b_name = document.getElementById("b-name");
  let b_about = document.getElementById("b-about");
  let b_10 = document.querySelector(".b-co2-2");

  if (nom == 1) {
    b_img.src = "./imge/arabic/44.jpeg";
    b_name.innerHTML = "#44 You Can";
    b_about.innerHTML = "financière. Il y explique comment l'investissement, l'immobilier, la création et l'acquisitiond'entreprises peuvent être utilisés pour construire sa richesse et devenir financièrementindépendant.";
    b_10.innerHTML = "<p>100Dh <sup>200Dh</sup></p>";
  }
  if (nom == 2) {
    b_img.src = "./imge/arabic/الأب الغني الأب الفقير.jpeg";
    b_name.innerHTML = "الأب الغني الأب الفقير";
    b_about.innerHTML = "Père riche, père pauvre est un livre de Robert Kiyosaki et de Sharon Lechter paru en 1997. De style autobiographique, Robert Kiyosaki utilise un ensemble de paraboles et d'exemples tirés de son propre parcours afin de souligner l'importance de développer son intelligence financière. Il y explique comment l'investissement, l'immobilier, la création et l'acquisitiond'entreprises peuvent être utilisés pour construire sa richesse et devenir financièremen tindépendant";
    b_10.innerHTML = "<p>200Dh <sup>250Dh</sup></p>";
  }
  if (nom == 3) {
    b_img.src = "./imge/arabic/44.jpeg";
    b_name.innerHTML = "#44 You Can";
    b_about.innerHTML = "financière. Il y explique comment l'investissement, l'immobilier, la création et l'acquisitiond'entreprises peuvent être utilisés pour construire sa richesse et devenir financièrementindépendant.";
    b_10.innerHTML = "<p>100Dh <sup>200Dh</sup></p>";
  }

}
