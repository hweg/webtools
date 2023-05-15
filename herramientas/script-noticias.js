window.addEventListener('load', function () {
    fetchNews();
});

function fetchNews() {
    var apiKey = '70e7d017afdb4f9586521d88ce90bac1'; // Reemplaza con tu propia API Key de NewsAPI
    var apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.log(error));
}

function displayNews(articles) {
    var newsList = document.getElementById('news-list');

    articles.forEach(function (article) {
        var newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        var newsTitle = document.createElement('h2');
        newsTitle.textContent = article.title;

        var newsDescription = document.createElement('p');
        newsDescription.textContent = article.description;

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDescription);

        newsList.appendChild(newsItem);
    });
}
