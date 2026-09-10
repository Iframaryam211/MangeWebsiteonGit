document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       ACTIVE NAVBAR
    ========================= */

    const currentPage = document.body.dataset.page;

    const navLinks =
        document.querySelectorAll(".nav-link[data-page]");

    navLinks.forEach(function (link) {

        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }

    });
    const searchForm = document.querySelector(".cake-search");
const searchInput = document.getElementById("cakeSearch");

if (searchForm && searchInput) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const value = searchInput.value.trim().toLowerCase();

        if (value === "") {
            alert("Please enter a cake name 🍰");
            return;
        }

        alert(
            "You searched for: " +
            value +
            " 🍰"
        );

        searchInput.value = "";

    });

}

    /* =========================
       MESSAGE BUTTONS
    ========================= */

    const messageButtons =
        document.querySelectorAll(".js-message");

    messageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const message =
                this.dataset.message ||
                "Thanks for visiting Sweet Crumbs! 🍰";

            let messageBox =
                this.closest("main, section, .about-box, .sidebar-card, .carousel")
                    ?.querySelector(".message-box");

            if (!messageBox) {

                messageBox =
                    document.getElementById("homeMessage");

            }

            if (!messageBox) {

                messageBox =
                    document.getElementById("cakesMessage");

            }

            if (!messageBox) {

                messageBox =
                    document.getElementById("aboutMessage");

            }

            if (messageBox) {

                messageBox.textContent = message;

                messageBox.classList.add("show");

            }


            /* Active button */

            messageButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

    // =======================================
// CAROUSEL BUTTONS
// =======================================

const carouselButtons =
    document.querySelectorAll(".carousel-btn");

const carouselMessage =
    document.getElementById("carouselMessage");

const carouselMessageText =
    document.getElementById("carouselMessageText");


carouselButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active from all buttons
        carouselButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Make clicked button active
        this.classList.add("active");

        // Get message
        const message =
            this.getAttribute("data-message");

        // Change paragraph
        carouselMessageText.textContent = message;

        // Show message box
        carouselMessage.classList.add("show");

    });

});


    /* =========================
       CONTACT FORM
    ========================= */

    const form =
        document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name")
                    .value.trim();

            const cakeType =
                document.getElementById("cakeType")
                    .value;

            const messageBox =
                document.getElementById("contactMessage");


            messageBox.textContent =
                `Thank you, ${name}! We received your ${cakeType} request. We'll get back to you soon. 💕`;

            messageBox.classList.add("show");


            form.reset();

        });

    }

});
document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // 1. ACTIVE NAVBAR
    // =====================================================

    const currentPage = document.body.dataset.page;

    const navLinks = document.querySelectorAll(
        ".nav-link[data-page]"
    );

    navLinks.forEach(function (link) {

        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }

    });


    // =====================================================
    // 2. ALL MESSAGE BUTTONS
    // =====================================================

    const messageButtons = document.querySelectorAll(".js-message");


    messageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // ---------------------------------------------
            // Active button
            // ---------------------------------------------

            // Sirf related group ke buttons inactive hon
            const buttonGroup =
                this.closest(
                    ".carousel-caption, " +
                    ".feature-card, " +
                    ".sidebar-card, " +
                    ".sidebar-list, " +
                    ".service-card, " +
                    ".about-content, " +
                    ".mission-box, " +
                    ".offer-box"
                );

            if (buttonGroup) {

                const groupButtons =
                    buttonGroup.querySelectorAll(".js-message");

                groupButtons.forEach(function (btn) {
                    btn.classList.remove("active");
                });

            }

            this.classList.add("active");


            // ---------------------------------------------
            // Message text
            // ---------------------------------------------

            const text =
                this.getAttribute("data-message");


            if (!text) {
                return;
            }


            // =================================================
            // SIDEBAR BUTTON
            // =================================================

            const sidebar =
                this.closest(".sidebar-card");

            if (sidebar) {

                const sidebarMessage =
                    document.getElementById("sidebarMessage");

                if (sidebarMessage) {

                    sidebarMessage.textContent = text;

                    sidebarMessage.classList.add("show");

                }

                return;
            }


            // =================================================
            // HOME PAGE
            // =================================================

            if (currentPage === "home") {

                const homeMessage =
                    document.getElementById("homeMessage");

                if (homeMessage) {

                    homeMessage.textContent = text;

                    homeMessage.classList.add("show");

                }

                return;
            }


            // =================================================
            // ABOUT PAGE
            // =================================================

            if (currentPage === "about") {

                const aboutMessage =
                    document.getElementById("aboutMessage");

                if (aboutMessage) {

                    aboutMessage.textContent = text;

                    aboutMessage.classList.add("show");

                }

                return;
            }


            // =================================================
            // SERVICES PAGE
            // =================================================

            if (currentPage === "services") {

                const servicesMessage =
                    document.getElementById("servicesMessage");

                if (servicesMessage) {

                    servicesMessage.textContent = text;

                    servicesMessage.classList.add("show");

                }

                return;
            }

        });

    });


    // =====================================================
    // 3. SEARCH BAR
    // =====================================================

    const searchForm =
        document.querySelector(".cake-search");

    const searchInput =
        document.getElementById("cakeSearch");


    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchValue =
                searchInput.value.trim();


            if (searchValue === "") {

                alert("Please enter a cake name 🍰");

                return;
            }


            alert(
                "You searched for: " +
                searchValue +
                " 🍰"
            );


            searchInput.value = "";

        });

    }


    // =====================================================
    // 4. CONTACT FORM
    // =====================================================

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const nameInput =
                document.getElementById("name");

            const cakeType =
                document.getElementById("cakeType");

            const messageBox =
                document.getElementById("contactMessage");


            const name =
                nameInput.value.trim();

            const selectedCake =
                cakeType.value;


            if (name === "" || selectedCake === "") {

                messageBox.textContent =
                    "⚠️ Please enter your name and select a cake.";

                messageBox.classList.add("show");

                return;
            }


            messageBox.textContent =
                "💌 Thank you, " +
                name +
                "! Your request for " +
                selectedCake +
                " has been received. Sweet Crumbs will contact you soon. 🍰";


            messageBox.classList.add("show");


            contactForm.reset();

        });

    }


    // =====================================================
    // 5. BUTTON ACTIVE ANIMATION
    // =====================================================

    const allCakeButtons =
        document.querySelectorAll(".cake-btn");


    allCakeButtons.forEach(function (button) {

        button.addEventListener("mousedown", function () {

            this.style.transform =
                "scale(0.96)";

        });


        button.addEventListener("mouseup", function () {

            this.style.transform =
                "";

        });

    });


});

document.querySelectorAll(".carousel-action").forEach(function(button) {

    button.addEventListener("click", function() {

        alert(this.dataset.message);

    });

});