
onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // Intro Text Animation
    const introText = document.querySelector('.intro-text');

    // Show intro text after 1 second
    setTimeout(() => {
        introText.classList.add('show');
    }, 1000);

    // Background Music Control
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const playIcon = musicToggle.querySelector('.play-icon');
    const pauseIcon = musicToggle.querySelector('.pause-icon');

    // Set initial state to playing
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
    musicToggle.classList.add('playing');
    let isPlaying = true;

    // Auto play music
    bgMusic.play().catch(() => {
        // If autoplay blocked, reset to play button
        isPlaying = false;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        musicToggle.classList.remove('playing');
    });

    musicToggle.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            musicToggle.classList.remove('playing');
        } else {
            bgMusic.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            musicToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });

    // Show photos after intro text and flowers bloom (9 seconds)
    const photoGallery = document.querySelector('.photo-gallery');
    const anniversaryTitle = document.querySelector('.anniversary-title');

    setTimeout(() => {
        photoGallery.classList.add('show');
        anniversaryTitle.classList.add('show');
    }, 9000);

    // Photo enlargement functionality
    const photos = document.querySelectorAll('.photo-polaroid');

    photos.forEach(photo => {
        photo.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling to body

            // Close any other enlarged photos
            photos.forEach(p => {
                if (p !== photo) {
                    p.classList.remove('enlarged');
                }
            });

            // Toggle enlarged state
            photo.classList.toggle('enlarged');
        });
    });

    // Click outside to close enlarged photo
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.photo-polaroid')) {
            photos.forEach(photo => {
                photo.classList.remove('enlarged');
            });
        }
    });
};
