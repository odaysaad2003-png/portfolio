   /*
    proggress skils home pages
    */

    const skillssection = document.getElementById("skillssec")
    const skilsproggres = document.querySelectorAll(".progress-bar")
    const spancount = document.querySelectorAll(".progress-text span")


    let started = false


    const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    // 🟣 skils (counter)
    // 🔵 skills
    if (entry.target.id === "skillssec" && entry.isIntersecting) {

      skilsproggres.forEach((span) => {
        span.style.width = span.dataset.width;
      });

    }
    if (entry.target.id === "skillssec" && entry.isIntersecting) {

      spancount.forEach((span) => {
        span.textContent = span.dataset.count;
      });

    }


 
});

}, {
  threshold: 0.5
});
observer.observe(skillssection);