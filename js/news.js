// ニュースデータ
    //最新のやつは上に
    const newsData = [
          { title: "えいと加入のお知らせ", date: "2025/09/05", link: "news/item/2025/10/index.html", image: "news/item/2025/10/img/eitojoin.png" },
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

