document.addEventListener('DOMContentLoaded', function () {
    const videoContainers = document.querySelectorAll('.video-container');

    function checkVisibility() {
        videoContainers.forEach(container => {
            const rect = container.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                container.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on page load
});