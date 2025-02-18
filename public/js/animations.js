// public/js/animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in on scroll effect
    const elements = document.querySelectorAll('.fade-in-scroll');

    function checkScroll() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('active');
            } else {
                element.classList.remove('active'); // 필요에 따라 스크롤 벗어날 때 active 클래스 제거
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll); // 반응형 고려
    checkScroll(); // 초기 로드 시 체크

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
