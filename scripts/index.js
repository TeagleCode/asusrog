
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let currentIndex = 0;

    function updateSlider() {
      const slideWidth = slides[0].offsetWidth + 20; // include gap
      slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    prev.addEventListener('click', () => {
      if (currentIndex > 0) currentIndex--;
      updateSlider();
    });

    next.addEventListener('click', () => {
      if (currentIndex < slides.length - 3) currentIndex++; // show 3 slides at a time
      updateSlider();
    });
  

    const gallery = document.querySelector('.gallery');
        const images = document.querySelectorAll('.gallery img');

        let index = 0;
        const totalImages = images.length;
        const interval = 5000; // milliseconds

        function autoSwipe() {
            index++;
            if (index >= totalImages) {
                index = 0;
            }
            updateGallery();
        }

        function updateGallery() {
            const offset = index * images[0].clientWidth;
            gallery.style.transform = `translateX(-${offset}px)`;
        }

        // Auto swipe every few seconds
        setInterval(autoSwipe, interval);

        // Optional: Adjust on window resize
        window.addEventListener('resize', updateGallery);
