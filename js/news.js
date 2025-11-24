// ニュースデータ
//最新のやつは上に
const newsData = [
    { title: "11/23はいつくの誕生日", date: "2025/11/24", link: "news/item/2025/14/index.html", image: "news/item/2025/14/img/itsuku.jpg" }
];

const newsList = document.getElementById("news-list");
newsData.forEach((news, index) => {
    const li = document.createElement("li");
    li.className = "news-item-wrapper";
    li.innerHTML = `
        <a href="${news.link}" class="news-item">
            <img src="${news.image}" alt="${news.title}">
            <div class="news-content">
                <span class="news-date">${news.date}</span>
                <h3>${news.title}</h3>
            </div>
        </a>
    `;
    newsList.appendChild(li);
});
