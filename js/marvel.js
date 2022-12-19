const marvel = {
  render: () => {
    const urlAPI =
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f61936e7637e3b7fb8f43ee1e26816c4&hash=2696da02ccf746cb8f3692212e57d1e8";
    const container = document.querySelector("#marvel-row");
    let contentHTML = "";

    fetch(urlAPI)
      .then((res) => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      });
  },
};
marvel.render();
