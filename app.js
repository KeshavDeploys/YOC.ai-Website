document.addEventListener("DOMContentLoaded", () => {
  // Sidebar logic
  const sideBar = document.querySelector('.sidebar');
  const menu = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  menu?.addEventListener("click", () => {
    sideBar?.classList.remove("close-sidebar");
    sideBar?.classList.add("open-sidebar");
  });

  closeIcon?.addEventListener("click", () => {
    sideBar?.classList.remove("open-sidebar");
    sideBar?.classList.add("close-sidebar");
  });

  // Contact Me scroll
  const contactBtn = document.querySelector(".Contact-btn-Top");
  contactBtn?.addEventListener("click", () => {
    const contactSection = document.querySelector(".contact-container");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  });

  // Resume download
  document.querySelectorAll(".getresume").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const resumeLink = document.createElement("a");
      resumeLink.href = "Resume.pdf";
      resumeLink.download = "Keshav_Resume.pdf";
      document.body.appendChild(resumeLink);
      resumeLink.click();
      document.body.removeChild(resumeLink);
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.getElementById("connectBtn");

  connectBtn?.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/keshav-kumar-3649812b5/", "_blank");
  });
});

/*-------------- Script for features page  ------------------*/ 

AOS.init();
 AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(12, 6, 6, 0.9)';
            } else {
                header.style.background = 'rgba(12, 6, 6, 0.618)';
            }
        });


        