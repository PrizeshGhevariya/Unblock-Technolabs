// -- PARALAAX
  para1 = document.getElementById("pg1-l-para1");
  para12 = document.getElementById("pg1-l-para12");

  para2 = document.getElementById("pg1-l-para2");
  para3 = document.getElementById("pg1-rgt-c");
  // para4 = document.getElementById("pg2-para1");
  window.addEventListener("scroll",() => {
    let svalue = window.scrollY;
    para1.style.marginLeft = svalue * -0.5 + 'px';
    para12.style.marginLeft = svalue * -0.5 + 'px';
    para2.style.marginLeft = svalue * -0.5 + 'px';
    para3.style.right = svalue * -1 + 'px';
    // para4.style.marginLeft = svalue * 0.9  + 'px';
    // para1.style.right = svalue * -0.5 + 'px';

  });
 

// --- BUTTON


const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.magnetic').forEach(el => el.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
  
  this.style.transform = 'translate('+ mx * 0.2 +'px, '+ my * 0.2 +'px)';
  this.style.transform += 'rotate3d('+ mx * -0.2 +', '+ my * -0.1 +', 0, 12deg)';
  this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
}));
$$
$$('.magnetic').forEach(el => el.addEventListener('mouseleave', function() {
 
  this.style.transform = 'translate3d(0px, 0px, 0px)';
  this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
  this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));

var csr = document.getElementById('cursor');

$$('.cmagnifier').forEach(el => el.addEventListener('mousemove', function(e) {
  const pos = this.getBoundingClientRect();
  const mx = e.clientX - pos.left - pos.width/2; 
  const my = e.clientY - pos.top - pos.height/2;
  csr.style.height = '67px';
  csr.style.width = '67px';
  
}));
$$
$$('.cmagnifier').forEach(el => el.addEventListener('mouseleave', function() {
  csr.style.height = '10px';
  csr.style.width = '10px';
}));



var pgpara1h31 = document.getElementById('pgpara1h3-1');
var pg1lpara1 = document.getElementById('pg1-l-para1w');

pg1lpara1.addEventListener("mouseover", function () {
  pgpara1h31.style.display = "block";
});
pg1lpara1.addEventListener("mouseout", function () {
  pgpara1h31.style.display = "none";
  pg1lpara1.style.display = "block";
});

// const counter = document.getElementById("counter-1");
// let count = 0;
// const interval = setInterval(() => {
//   counter.innerHTML = count;
//   count++;
//   if (count > 100) {
//     clearInterval(interval);
//   }
// }, 37);
var myVar;

function intro() {
  myVar = setTimeout(showPage, 5000);
}  

function showPage() {
  document.getElementById("ut-intro").style.display = "none";
  document.getElementById("pages").style.display = "block";
  document.getElementById("footer").style.display = "block";
  
}  

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".pages");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 0 + "px"
  crsr.style.top = dets.y + 0 + "px"
})  


// pageup = document.getElementById("pageup");

// var myScrollFunc1 = function () {
//     var y = window.scrollY;  
//     if (y >= 240) {
//         pageup.className = "pageup pshow"  
//     } else {
//         pageup.className = "pageup phide"  
//     }
// };

// window.addEventListener("scroll", myScrollFunc1);


navdepth = document.getElementById("navbar");
menu = document.getElementById("menu");
manus = document.getElementById("nav-menus");
lis = document.getElementById("lis-bg");
cls = document.getElementById("lis-clsr");
mln1 = document.getElementById("mln1");
mln2 = document.getElementById("mln2");
navlg = document.getElementById("nav-logo");
pgup = document.getElementById("pagedwn");

// pgl = document.getElementById("pg1-lft-c");
// pgr = document.getElementById("pg1-rgt-c");
act1 = document.getElementById("home");
act2 = document.getElementById("home1");
act3 = document.getElementById("services1");
act4 = document.getElementById("about1");
pgidf1 = document.getElementById("pgidtfrbg");


var menuscroll = function () {
  var y = window.scrollY;
  if (y <= 400) {
    pgidf1.className = "pgidtfrbgh";
    navbar.className = "navbar";
    menu.className = "menu";
    manus.className = "nav-menus";
    lis.className = "lis-bg";
    cls.className = "lis-clsr";
    mln1.className = "mln1";
    mln2.className = "mln2";
    act1.className = "act";
    act2.className = "act";
    navlg.className = "nav-logo";

  } else {
    lis.className = "lis-bg";
    cls.className = "lis-clsr";
    mln1.className = "mln1";
    mln2.className = "mln2";
    menu.className = "menu2";
    navbar.className = "navbar2";
    manus.className = "nav-menus2";
    act1.className = "home";
    act2.className = "home";
    navlg.className = "nav-logo";
    pgidf1.className = "pgidtfrbg";

    

  }
}
  
window.addEventListener("scroll", menuscroll);

var menuscroll2 = function () {
  var y2 = window.scrollY;
  
  if (y2 >= 400) {
    act3.className = "act";
    pgidf1.className = "pgidtfrbg1";
    
  } else {
    act3.className = "services1";
    // pgidf1.className = "pgidtfrbg"
    

  }
};

window.addEventListener("scroll", menuscroll2);

var menuscroll3 = function () {
  var y3 = window.scrollY;
  
  if (y3 >= 800) {
    act3.className = "act";
    pgidf1.className = "pgidtfrbg2";
    
  } else {
    act3.className = "services1";
    // pgidf1.className = "pgidtfrbg"
    

  }
};

window.addEventListener("scroll", menuscroll3);


// document.getElementsByTagName('html')[0].style.overflow = 'auto';



navmenu = document.getElementById("pgidtfr");
navmenu.style.display = "flex";
menu9 = document.getElementById("lis-clsr");
menu9 = document.getElementById("menu");
menu9.onclick = function () {
  navmenu = document.querySelector(".mln1")
  navmenu.classList.toggle("mnl1");
  navmenu = document.querySelector(".mln2")
  navmenu.classList.toggle("mnl2");
  navmenu = document.querySelector(".lis-bg")
  navmenu.classList.toggle("lis");
  navmenu = document.querySelector(".lis-clsr")
  navmenu.classList.toggle("cls");
  navmenu = document.querySelector(".nav-logo16")
  navmenu.classList.toggle("lg");
  navmenu = document.getElementById("nav-logo-img16")
  navmenu.classList.toggle("l16");
  navmenu = document.querySelector(".navbar2")
  navmenu.classList.toggle("mn");
  navmenu = document.getElementById("pgidtfr");
  navmenu.classList.toggle("sp");
  // .style.display= "none";
  // navmenu8 = document.querySelector(".lis-rmv")
  // navmenu8.classList.toggle("opn");
  navmenu = document.getElementById("html")
  navmenu.classList.toggle("scroll-lock");
  // navmenu = document.getElementsByTagName('html')
  // navmenu[0].style.overflow = 'hidden';

}


menu3 = document.getElementById("lis-clsr");
menu3.onclick = function () {
// menu3.addEventListener("click", () => {
  navmenu = document.querySelector(".mln1")
  navmenu.classList.toggle("mnl1");
  navmenu = document.querySelector(".mln2")
  navmenu.classList.toggle("mnl2");
  navmenu = document.querySelector(".lis-bg")
  navmenu.classList.toggle("lis");
  navmenu = document.querySelector(".lis-clsr")
  navmenu.classList.toggle("cls");
  navmenu = document.querySelector(".nav-logo")
  navmenu.classList.toggle("lg");
  navmenu = document.querySelector(".navbar2")
  navmenu.classList.toggle("mn");
  navmenu = document.getElementById("html")
  navmenu.classList.toggle("scroll-lock");
  // navmenu = document.getElementsByTagName('html')
  // navmenu[0].style.overflow = 'auto';
  
  // document.getElementsByTagName('html')[0].style.overflow = 'auto';

};

// var magnets = document.querySelectorAll('.magnetic')
// var strength = 50

// magnets.forEach((magnet) => {
//   magnet.addEventListener('mousemove', moveMagnet);
//   magnet.addEventListener('mouseout', function (event) {
//     TweenMax.to(event.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut })
//   });
// });

// function moveMagnet(event) {
//   var magnetButton = event.currentTarget
//   var bounding = magnetButton.getBoundingClientRect()

//   //console.log(magnetButton, bounding)

//   TweenMax.to(magnetButton, 1, {
//     x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
//     y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
//     ease: Power4.easeOut
//   })

//   //magnetButton.style.transform = 'translate(' + (((( event.clientX - bounding.left)/(magnetButton.offsetWidth))) - 0.5) * strength + 'px,'+ (((( event.clientY - bounding.top)/(magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
// }




// homes = document.getElementById("home");

// var home = function () {
//   var y = window.scrollY;
//   if (y <= 400) {
//     homes.className = "home"

//   } else {
//     homes.className = "act"
//   }
// };

// window.addEventListener("scroll", home);
