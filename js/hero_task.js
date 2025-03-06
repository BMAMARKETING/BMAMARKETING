document.addEventListener("DOMContentLoaded", function () {
    let heroText = document.getElementById("hero-text");
    let heroSubtext = document.getElementById("hero-subtext");
    let text = "Let's Grow Your <strong>Business Together</strong>";
    let words = text.split(" ");

    function typeEffect(index = 0) {
        heroText.innerHTML = "";

        function addWord(i) {
            if (i < words.length) {
                heroText.innerHTML += words[i] + " ";
                setTimeout(() => addWord(i + 1), 300);
            } else {
                setTimeout(() => typeEffect(), 2000); // Restart after delay
            }
        }

        addWord(0);
    }

    typeEffect();

    let images = document.querySelectorAll(".carousel img");
    let dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function changeSlide() {
        images[currentIndex].classList.remove("active");
        dots[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
        dots[currentIndex].classList.add("active");
    }

    setInterval(changeSlide, 2000);
});




