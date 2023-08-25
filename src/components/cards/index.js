// Funktion schreiben die als payload = parameter einen articels array bekommt.
// return ein string

export function setCards(articles) {
  return articles
    .map((article) => {
      return `
      <div class="card">      
        <img class="img"
         src=${article.image.url}
        img>
        <div class="letter"></div>
        <div class="author">
          ${article.author}
        </div>
        <div class="date">
          ${article.dateAdded}
        </div>
        <div class="title">
          ${article.title}
        </div>
        </div>
      `;
    })
    .join("");
}

export function searchArticles(articles, searchTerm) {
  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return filteredArticles;
}
