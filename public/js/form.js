// public/js/form.js
// Form 관련 JavaScript 기능 구현

console.log('Form JavaScript file loaded');

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // 기본 제출 동작 중단

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // 간단한 유효성 검사
            if (!name) {
                alert('이름을 입력해주세요.');
                nameInput.focus();
                return;
            }

            if (!email) {
                alert('이메일을 입력해주세요.');
                emailInput.focus();
                return;
            } else if (!isValidEmail(email)) {
                alert('유효한 이메일 주소를 입력해주세요.');
                emailInput.focus();
                return;
            }

            if (!message) {
                alert('메시지를 입력해주세요.');
                messageInput.focus();
                return;
            }

            // 폼 데이터 처리 (실제 서버로 전송하는 로직은 여기에 구현)
            console.log('Form submitted with validation passed');
            alert('문의가 정상적으로 접수되었습니다!');
            contactForm.reset(); // 폼 초기화
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
