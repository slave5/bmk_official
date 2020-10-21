'use strict';

// skrol sakriva nav bar
var poz = window.pageXOffset;
window.onscroll = function(){
    let vrpoz = window.pageYOffset;
    if(this.poz>vrpoz){
        this.document.getElementById("navbar").style.top="0";
    }else{
        this.document.getElementById("navbar").style.top="-65px";
    }
    poz = vrpoz;
}

// slajd sou galerija
let slike = [
    "galerija/1.png",
    "galerija/2.png",
    "galerija/3.png",
    "galerija/4.png",
    "galerija/7.jpg",
    "galerija/8.jpg",
    "galerija/9.jpg",
    "galerija/12.jpg",
]
let slajd = document.getElementById("slajd");
let i = 0;
let tacke = document.getElementsByClassName("tacka");
tacke[i].className += " active";
slajd.innerHTML = `<img src="${slike[i]}" height=350>`;
i = 1;
setInterval ( function(){
    slajd.innerHTML = `<img src="${slike[i]}" height=350>`;
    tacke[slike.length-1].className = tacke[slike.length-1].className.replace(" active", "");
    if(i == slike.length-1)
    {
        tacke[i].className += " active";
        i = 0;
        tacke[slike.length-2].className = tacke[slike.length-2].className.replace(" active", "");
    }
    else
    i++;
    tacke[i-1].className += " active";
    tacke[i-2].className = tacke[i-2].className.replace(" active", "");
}, 2000);

function index(n) {
    let j=i;
    i = n;
    tacke[j-1].className = tacke[j-1].className.replace(" active", "");
}

// onload pocetna
function pocetna(){
    alert("Dobro došli!");
}
// padajuci meni
function responzivni_meni() {
    document.getElementById("padajuci_meni").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.logo_dugme')) {
      var meni = document.getElementsByClassName("meni");
      
      var i;
      for (i = 0; i < meni.length; i++) {
        var openDropdown = meni[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// youtube i insta
function prof(x) {
  if(x==1){
    window.open("https://www.youtube.com/channel/UCLqnwHyMrI88U3SumBREVGQ/videos");
  }
  else{
    window.open("https://www.instagram.com/bajamaliknindza_official/");
  }
}

// forma try catch, cookie i json
function sacuvaj(forma){
  const ime_prezime = document.getElementById("ime").value;
  const kontakt = document.getElementById("kontakt").value;
  try{
    if(ime_prezime=="") throw new Error("Nije uneto ime");
    else if(kontakt =="") throw new Error("Nije unet kontakt");
  }catch(error){
    return alert(error.message);
  }

  data={
    ime_prezime,
    kontakt
  }
  const string=JSON.stringify(data);

  setCookie(string);

}

function setCookie(string){
  document.cookie+=string+'-';
}

function getCookie(){
  const allCokie = document.cookie;
  let cookieArray = allCokie.split('-');
  cookieArray.map(message=>{
    const poruka = JSON.parse(message);
    kontakti.innerHTML+=`
    <p>Ime: ${poruka.ime_prezime}</p>
    <p>Kontakt: ${poruka.kontakt}</p>
    `
  })
}


function prozirnost(x){
  if(x==0){
    document.getElementById("opacity").style.opacity = "0.2";
  }else
  document.getElementById("opacity").style.opacity = "1";
}