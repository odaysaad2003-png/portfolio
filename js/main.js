
AOS.init();
 $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,          // عدد العناصر اللي تظهر
    loop: true,        // يخليها تلف باستمرار
    // nav: true,         // يظهر أزرار prev/next
    // dots: false,        // يظهر الدوتس
    autoplay: true,    // تشغيل تلقائي
    autoplayTimeout: 2000, // مدة الانتظار
    // animateOut: 'fadeOut', // نوع الأنيميشن عند الخروج
    animateIn: 'fadeIn'    // نوع الأنيميشن عند الدخول
  });
});


//burger


const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-header-bg");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
    burger.classList.toggle("active");
});


// burger.addEventListener("click", () => {

// });
//burger





// scroll style
// JavaScript فقط للـProgress Bar
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress-bar');

function getMaxScroll() {
    return Math.max(
        document.documentElement.scrollHeight - document.documentElement.clientHeight,
        1
    );
}

window.addEventListener("scroll",()=>{
const scrollTop = window.scrollY;

  const docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );

  const winHeight = window.innerHeight;  // me showed smaal

  const maxScroll = docHeight - winHeight;

  const percentage = (scrollTop / maxScroll) * 100;

  progressBar.style.width = `${percentage}%`;
})


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
progressContainer.addEventListener('click', scrollToTop);


// scroll style///////////////////////////////////////////////////////////////

 // تحديد الهيدر
const header = document.getElementById("head");

// إضافة/إزالة الكلاس عند السكرول
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
   window.addEventListener("scroll", () => {
      if(window.scrollY > 700){
      header.style.height = "5px"
      header.style.opacity = "0"

    }else{
         header.style.height ="170px"
         header.style.opacity ="1"
    }
    });

//modaaaal



const servicesData = {
  web: {
    title: "Web Development",
    desc: "I build fast, responsive, and scalable websites using modern technologies like JavaScript and Bootstrap.",
    img: "imges/broject-midgernephoto/oday_saad_-_____________2a190136-ed11-4182-b67a-da34f98ec9cd.jpg"
  },
  design: {
    title: "UI/UX Design",
    desc: "I design clean and user-friendly interfaces that improve user experience.",
    img: "imges/photo coding/land.jpg"
  },
  responsive: {
    title: "Responsive Design",
    desc: "Your website will look perfect on all devices: mobile, tablet, and desktop.",
    img: "imges/broject-midgernephoto/gallery-01.png"
  }
};

const modal = document.getElementById("serviceModal");
const title = document.getElementById("modalTitle");
const desc = document.getElementById("modalDesc");
const img = document.getElementById("modalImg");

document.querySelectorAll(".service-box").forEach(box => {
  box.addEventListener("click", () => {
    let key = box.dataset.service;

    title.textContent = servicesData[key].title;
    desc.textContent = servicesData[key].desc;
    img.src = servicesData[key].img;

    modal.style.display = "flex";
     modal.style.visibility= "visible";
  modal.style.opacity= "1"
  });
});

const closeBtn = document.getElementById("closeModal");

if (closeBtn) {
  closeBtn.onclick = () => {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  };
}
if(closeBtn){
  modal.addEventListener("click", (e) => {
  if (e.target === modal) {
     modal.style.visibility= "hidden";
  modal.style.opacity= "0";
  }
});
}
  //click outsid modal to close


//modaaaal

//portfolio
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove active
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let filter = btn.dataset.filter;

    projects.forEach(project => {
      let category = project.dataset.category;

      if(filter === "all" || category === filter){
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });

  });
});


// modal broject
const projectModal = document.getElementById("projectModal");
const projectModalImg = document.getElementById("projectModalImg");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalDesc = document.getElementById("projectModalDesc");
const closeProjectModal = document.getElementById("closeProjectModal");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
      projectModal.style. opacity = 1;
  projectModal.style. visibility = "visible";

    projectModalImg.src = card.querySelector("img").src;
    projectModalTitle.textContent = card.querySelector("h3").textContent;
    projectModalDesc.textContent = card.querySelector("p").textContent;
  });


// btn detals
// card.querySelector(".details").addEventListener("click", (e) => {
//   e.stopPropagation();
//   projectModal.style.display = "flex";
//      projectModal.style. opacity = 1;
//   projectModal.style. visibility = "visible";
// });
//lagenaaah elzer

});

if(closeProjectModal){
closeProjectModal.onclick = () => {
  projectModal.style.opacity = 0;
  projectModal.style.visibility = "hidden";
 
};
}

if(projectModal){
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.style.opacity = 0;
    projectModal.style.visibility = "hidden";
  }
});
}


// projectModal.addEventListener("click",(e)=>{
//   if(e.target.classList.contains("modal")){
//        projectModal.style. opacity = 0;
//   projectModal.style. visibility = "hidden";
//   }
// })
//project

// skils




// skils

//skills section pages

window.addEventListener("DOMContentLoaded",(()=>{
  const skillItems = document.querySelectorAll(".cont");

function animateNumber(el, target) {
  let start = 0;
  let end = parseInt(target);
  let speed = 20;

  let interval = setInterval(() => {
    start++;
    el.textContent = start + "%";

    if (start >= end) {
      clearInterval(interval);
    }
  }, speed);
}

const observerskilspags = new IntersectionObserver((entries) => {
  console.log(document.querySelectorAll(".cont"));
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const item = entry.target;

      const span = item.querySelector(".fill");
      const number = item.querySelector("h2 span");

      const value = span.dataset.width;

      // fill bar
      span.style.setProperty("--width", value + "%");

      item.classList.add("active");

      // animate number
      animateNumber(number, value);

      observerskilspags.unobserve(item);
    }
  });
}, { threshold: 0.3 });

skillItems.forEach(item => observerskilspags.observe(item));

}))
//skills section pages















///// intersiction observe api show element

const elements = document.querySelectorAll(".reveal");

const observershowelemnt = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15 // يبدأ يظهر لما 15% من العنصر يدخل الشاشة
});

elements.forEach(el => observershowelemnt.observe(el));


///// intersiction observe api show element

//foter***********************************************************
document.querySelector(".copy").innerHTML =
`© ${new Date().getFullYear()} Made By Oday`;
//footer

// طريقة الكتابة ديناميكية

const text = ` I'm a Front-End Developer passionate about building modern,
 clean and interactive web experiences using HTML, CSS and JavaScript.
 I enjoy solving problems, turning ideas into real interfaces,
        and constantly improving my development skills through real projects.`;

const target = document.getElementById("about-text");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 30); // سرعة الكتابة
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);



/ طريقة الكتابة ديناميكية/

// carosiellll



const swiper = new Swiper(".myCarousel", {
  loop: true,

  slidesPerView: "auto", // مهم عشان 200px تشتغل صح
  spaceBetween: 20,

  speed: 7000, // 🔥 حركة بطيئة وناعمة جدًا

  autoplay: {
    delay: 0,              // بدون توقف
    disableOnInteraction: false,
  },
pauseOnMouseEnter: true,
  freeMode: true,          // 🔥 حركة سحب طبيعية
  freeModeMomentum: false,   // استمرار الحركة بعد السحب

  grabCursor: true,        // شكل اليد بالماوس
spaceBetween: 15,
  mousewheel: true,   // تحريك بالماوس كمان
  nav: false,
dots: false,     
});
// carosiellll




const shar2 = document.getElementById("share2")



shar2.addEventListener("click",()=>{
  document.querySelector(".share-box2").classList.toggle("activ")
})
















