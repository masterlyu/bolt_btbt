// public/js/solutions.js
// Solutions 관련 JavaScript 기능 구현 (예: 특정 문제 해결 기능)

console.log('Solutions JavaScript file loaded');

// solutions.json 파일에서 솔루션 목록을 가져와서 화면에 표시하는 기능
async function loadSolutions() {
    try {
        const response = await fetch('./solutions.json');
        const solutionsData = await response.json();
        const solutionsGrid = document.querySelector('#solutions .solutions-grid');

        if (solutionsGrid) {
            solutionsData.solutions.forEach(solution => {
                const solutionCard = createSolutionCard(solution);
                solutionsGrid.appendChild(solutionCard);
            });
        } else {
            console.error('Solutions grid element not found');
        }
    } catch (error) {
        console.error('Error loading solutions:', error);
    }
}

function createSolutionCard(solution) {
    const card = document.createElement('div');
    card.classList.add('solution-card');

    const icon = document.createElement('img');
    icon.src = solution.icon; // or solution.iconUrl if it's a URL
    icon.alt = `${solution.title} 아이콘`;
    card.appendChild(icon);

    const title = document.createElement('h3');
    title.textContent = solution.title;
    card.appendChild(title);

    const description = document.createElement('p');
    description.textContent = solution.description;
    card.appendChild(description);

    return card;
}


loadSolutions();
