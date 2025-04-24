const translations = {
  en: {
    logoText: "Super Market",
    langBtn: "عربي"
  },
  ar: {
    logoText: "سوبر ماركت",
    langBtn: "English"
  }
};

let currentLang = 'en';

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  switchLanguage(currentLang);
});

function switchLanguage(lang) {
  document.getElementById("logoText").textContent = translations[lang].logoText;
  document.getElementById("langBtn").textContent = translations[lang].langBtn;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}
  //images 

  document.addEventListener("DOMContentLoaded", function () {
    let scrollContainer = document.querySelector(".gallery");
  let btnLeft = document.getElementById("btnleft");
  let btnRight = document.getElementById("btnright");



  scrollContainer.addEventListener("wheel", (evt) => {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft + evt.deltaY,
      behavior: 'smooth' // تأثير التحريك السلس
    });
  });
  // scrollContainer.addEventListener("wheel", (evt) => {
  //   evt.preventDefault();
  //   scrollContainer.scrollLeft += evt.deltaY;
  // }, { passive: false });



  btnLeft.addEventListener ("click" , () => {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft - 150,
      behavior: 'smooth' // تأثير التحريك السلس
    });
  });

  btnRight.addEventListener ("click" , () => {
    scrollContainer.scrollTo({
      left: scrollContainer.scrollLeft + 150,
      behavior: 'smooth' // تأثير التحريك السلس
    });
  });

  })
  









  //video
  
  let videoPlraye = document.getElementById("videoPlayer");
  let myVideo = document.getElementById("myVideo");

  function stopVideo(){
    videoPlraye.style.display = "none"

  }
  
  function playVideo(file){
    myVideo.src = file;
    videoPlraye.style.display = "block"
   }