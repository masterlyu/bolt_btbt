// public/js/darkmode.js
// 다크 모드 관련 JavaScript 기능 구현

console.log('Darkmode JavaScript file loaded');

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle'); // 가정: 다크 모드 토글 버튼이 있다고 가정
    const body = document.body;

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            // 다크 모드 상태를 로컬 스토리지 또는 쿠키에 저장하여 페이지 로드 시 유지하는 기능 추가 가능
        });
    }
});
