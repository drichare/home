// ニュースデータ
    //最新のやつは上に
    const newsData = [
         { title: "10/7はりんくうの誕生日", date: "2025/10/07", link: "news/item/2025/12/index.html", image: "news/item/2025/12/img/birth.png" }
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



