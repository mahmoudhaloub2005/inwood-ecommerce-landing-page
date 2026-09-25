const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(function (card) {

    card.addEventListener("click", function () {

        categoryCards.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


const categoryLinks = document.querySelectorAll(
    ".category-list a[data-category]"
);

categoryLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const categoryName = this.dataset.category;

        const selectedCard =
            document.querySelector("." + categoryName);

        if (selectedCard) {

            categoryCards.forEach(function (card) {
                card.classList.remove("active");
            });

            selectedCard.classList.add("active");
        }

    });

});


const searchBtn = document.getElementById("searchBtn");

const categorySearch =
    document.getElementById("categorySearch");

searchBtn.addEventListener("click", function () {

    document
        .getElementById("categories")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(function () {

        categorySearch.focus();

    }, 500);

});

const productsSlider = document.getElementById("productsSlider");
const productPrev = document.getElementById("productPrev");
const productNext = document.getElementById("productNext");


productNext.addEventListener("click", function () {

    productsSlider.scrollBy({
        left: 300,
        behavior: "smooth"
    });

});


productPrev.addEventListener("click", function () {

    productsSlider.scrollBy({
        left: -300,
        behavior: "smooth"
    });

});


/* Special Package Scroll */

const specialListWrapper = document.getElementById("specialListWrapper");
const specialScrollUp = document.getElementById("specialScrollUp");
const specialScrollDown = document.getElementById("specialScrollDown");

specialScrollUp.addEventListener("click", function () {
    specialListWrapper.scrollBy({
        top: -120,
        behavior: "smooth"
    });
});

specialScrollDown.addEventListener("click", function () {
    specialListWrapper.scrollBy({
        top: 120,
        behavior: "smooth"
    });
});


/* Special Package Change Main Product */

const specialItems = document.querySelectorAll(".special-item");
const mainSpecialImage = document.getElementById("mainSpecialImage");
const mainSpecialTitle = document.getElementById("mainSpecialTitle");
const mainSpecialPrice = document.getElementById("mainSpecialPrice");
const mainSpecialDescription = document.getElementById("mainSpecialDescription");
const specialMainInfo = document.querySelector(".special-main-info");

specialItems.forEach(function (item) {

    item.addEventListener("click", function () {

        specialItems.forEach(function (el) {
            el.classList.remove("active-special-item");
        });

        this.classList.add("active-special-item");

        const image = this.dataset.image;
        const title = this.dataset.title;
        const price = this.dataset.price;
        const description = this.dataset.description;

        mainSpecialImage.classList.remove("change-animation");
        specialMainInfo.classList.remove("change-animation");
        mainSpecialDescription.classList.remove("change-animation");

        void mainSpecialImage.offsetWidth;

        mainSpecialImage.src = image;
        mainSpecialTitle.textContent = title;
        mainSpecialPrice.textContent = price;
        mainSpecialDescription.textContent = description;

        mainSpecialImage.classList.add("change-animation");
        specialMainInfo.classList.add("change-animation");
        mainSpecialDescription.classList.add("change-animation");

    });

});

/* Our Own Creation */

const creationSlider =
    document.querySelector(".creation-slider");

const creationPrev =
    document.getElementById("creationPrev");

const creationNext =
    document.getElementById("creationNext");

const creationRooms =
    document.querySelectorAll(".creation-room");


creationNext.addEventListener("click", function () {

    creationSlider.scrollBy({
        left: 320,
        behavior: "smooth"
    });

});


creationPrev.addEventListener("click", function () {

    creationSlider.scrollBy({
        left: -320,
        behavior: "smooth"
    });

});


creationRooms.forEach(function (room) {

    room.addEventListener("click", function () {

        creationRooms.forEach(function (item) {
            item.classList.remove("active-room");
        });

        this.classList.add("active-room");

    });

});


/* Benefits Animation */

const benefitsSection =
    document.querySelector(".benefits-section");

const benefitCards =
    document.querySelectorAll(".benefit-card");


const benefitsObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                benefitCards.forEach(function (card, index) {

                    setTimeout(function () {

                        card.classList.add("show-benefit");

                    }, index * 180);

                });

            }

        });

    }, {
        threshold: 0.25
    });


benefitsObserver.observe(benefitsSection);



/* Testimonials */

const testimonials = [
    {
        image: "../assets/images/Testimonial.png",
        text: "“My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you.”",
        name: "Leona Paul",
        role: "CEO of Floatcom"
    },

    {
        image: "../assets/images/living.jpeg",
        text: "“The furniture quality was excellent and the buying process was simple and comfortable. I really enjoyed the whole experience.”",
        name: "Emma Watson",
        role: "Interior Designer"
    },

    {
        image: "../assets/images/homeimage.png",
        text: "“A beautiful collection with excellent service. Everything was delivered on time and matched what I expected.”",
        name: "Daniel James",
        role: "Customer"
    },

    {
        image: "../assets/images/dinning.jpeg",
        text: "“I loved the modern designs and the attention to detail. I would definitely recommend this store to others.”",
        name: "Sophia Miller",
        role: "Architect"
    }
];


let currentTestimonial = 0;

const testimonialImage =
    document.getElementById("testimonialImage");

const testimonialText =
    document.getElementById("testimonialText");

const testimonialName =
    document.getElementById("testimonialName");

const testimonialRole =
    document.getElementById("testimonialRole");

const testimonialPrev =
    document.getElementById("testimonialPrev");

const testimonialNext =
    document.getElementById("testimonialNext");

const testimonialVisual =
    document.querySelector(".testimonial-image-box");

const testimonialInfo =
    document.querySelector(".testimonial-info");

const progressFill =
    document.querySelector(".testimonial-progress-fill");


function showTestimonial(index) {

    const item = testimonials[index];

    testimonialVisual.classList.remove("change-review");
    testimonialInfo.classList.remove("change-review");

    void testimonialVisual.offsetWidth;

    testimonialImage.src = item.image;
    testimonialText.textContent = item.text;
    testimonialName.textContent = item.name;
    testimonialRole.textContent = item.role;

    testimonialVisual.classList.add("change-review");
    testimonialInfo.classList.add("change-review");

    const progress =
        ((index + 1) / testimonials.length) * 100;

    progressFill.style.width = progress + "%";
}


testimonialNext.addEventListener("click", function () {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    showTestimonial(currentTestimonial);

});


testimonialPrev.addEventListener("click", function () {

    currentTestimonial--;

    if (currentTestimonial < 0) {
        currentTestimonial =
            testimonials.length - 1;
    }

    showTestimonial(currentTestimonial);

});


showTestimonial(currentTestimonial);


/* Newsletter Animation */

const newsletterSection =
    document.querySelector(".newsletter-section");

const newsletterObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                newsletterSection.classList.add(
                    "show-newsletter"
                );

            }

        });

    }, {
        threshold: 0.25
    });


newsletterObserver.observe(newsletterSection);



/* Newsletter Form */

const newsletterForm =
    document.getElementById("newsletterForm");

const newsletterEmail =
    document.getElementById("newsletterEmail");

const newsletterMessage =
    document.getElementById("newsletterMessage");


newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const email =
            newsletterEmail.value.trim();

        if (email === "") {

            newsletterMessage.textContent =
                "Please enter your email.";

            return;
        }


        newsletterMessage.textContent =
            "Thank you for subscribing!";

        newsletterEmail.value = "";

    }
);




/* Footer Animation */

const footer = document.querySelector(".footer");

const footerObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                footer.classList.add("show-footer");

            }

        });

    }, {
        threshold: 0.15
    });


footerObserver.observe(footer);



/* Mobile Navbar */

const menuBtn = document.getElementById("menuBtn");
const navLinksMenu = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinksMenu.classList.toggle("open");

    const isOpen =
        navLinksMenu.classList.contains("open");

    menuBtn.setAttribute(
        "aria-expanded",
        isOpen
    );

    if (isOpen) {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    }

});


const mobileNavLinks =
    document.querySelectorAll("#navLinks a");

mobileNavLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinksMenu.classList.remove("open");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
document.addEventListener("click", function (event) {

    const navbar =
        document.querySelector(".navbar");

    if (!navbar.contains(event.target)) {

        navLinksMenu.classList.remove("open");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});