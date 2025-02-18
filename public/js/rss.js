// public/js/rss.js
// RSS 피드 관련 JavaScript 기능 구현 (예: RSS 파싱, 표시)

console.log('RSS JavaScript file loaded');

// 간단한 RSS 피드 파싱 및 표시 예시 (실제 RSS 파싱 라이브러리 사용 권장)
async function fetchRSSFeed(url) {
    try {
        const response = await fetch(url);
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        const newsFeedContainer = document.querySelector('#news .news-feed');

        if (newsFeedContainer) {
            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;

                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                const itemTitle = document.createElement('a');
                itemTitle.href = link;
                itemTitle.textContent = title;
                itemTitle.target = '_blank'; // 새 탭에서 열기
                newsItem.appendChild(itemTitle);
                newsFeedContainer.appendChild(newsItem);
            });
        } else {
            console.error('News feed container element not found');
        }


    } catch (error) {
        console.error('Error fetching RSS feed:', error);
    }
}

// 예시 RSS 피드 URL (실제 RSS URL로 변경 필요)
const rssFeedUrl = 'https://blog.example.com/rss'; // 실제 RSS URL로 변경
fetchRSSFeed(rssFeedUrl); // 실제 RSS 피드 URL 사용 시 주석 해제
