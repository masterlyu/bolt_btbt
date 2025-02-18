// script.js
console.log('BTBT Homepage script loaded');

document.addEventListener('DOMContentLoaded', function() {
  // 솔루션 섹션 JSON 데이터 로드 및 표시
  fetch('./public/solutions.json')
    .then(response => response.json())
    .then(solutions => {
      const solutionsGrid = document.querySelector('#solutions .solutions-grid');
      solutions.forEach(solution => {
        const solutionCard = document.createElement('div');
        solutionCard.classList.add('solution-card');

        const icon = document.createElement('img');
        icon.src = solution.icon; // or `public/${solution.icon}` if needed and icon is relative path
        icon.alt = solution.name + ' 아이콘';
        solutionCard.appendChild(icon);

        const name = document.createElement('h4');
        name.textContent = solution.name;
        solutionCard.appendChild(name);

        const description = document.createElement('p');
        description.textContent = solution.description;
        solutionCard.appendChild(description);

        solutionsGrid.appendChild(solutionCard);
      });
    })
    .catch(error => console.error('Error fetching solutions:', error));

  // RSS 피드 URL (사용자 블로그 RSS URL로 변경 필요)
  const rssFeedUrl = 'https://blog.rss.naver.com/btbt8080.xml'; // 예시 RSS URL
  const newsFeedContainer = document.querySelector('#news .news-feed');

  fetch(rssFeedUrl)
    .then(response => response.text())
    .then(xmlText => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      const items = xmlDoc.querySelectorAll('item');

      let newsItemsHTML = '<ul>';
      let itemCount = 0;
      items.forEach(item => {
        if (itemCount >= 5) return; // 최대 5개 항목만 표시
        const title = item.querySelector('title').textContent;
        const link = item.querySelector('link').textContent;
        newsItemsHTML += `<li><a href="${link}" target="_blank">${title}</a></li>`;
        itemCount++;
      });
      newsItemsHTML += '</ul>';
      newsFeedContainer.innerHTML = newsItemsHTML;
    })
    .catch(error => console.error('Error fetching RSS feed:', error));
});
