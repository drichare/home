// ニュースデータ
//最新のやつは上に
const newsData = [
    { title: "12/9はあっつーの誕生日", date: "2025/12/09", link: "news/item/2025/16/index.html", image: "news/item/2025/16/img/atsubirth.png" }
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
