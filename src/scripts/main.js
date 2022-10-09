import datajson from './data/DATA.json';

function getdata() {
  const { restaurants } = datajson;
  const menulist = document.querySelector('#menu-list');
  const favoriteMenu = document.querySelector('#favorite-list');
  menulist.innerHTML = '';
  restaurants.forEach((menu) => {
    menulist.innerHTML += `
        
        <article class="post-item">
            <img class="post-item-thumbnail" src="${menu.pictureId}"
              alt="${menu.name}">
            <span class="bedge-city">${menu.city}</span>
            <div class="post-item-content">
              <p class="post-item-date-author">Rating ${menu.rating}</p>
              <h1 class="post-item-title">${menu.name}</h1>
              <p class="post-item-description">${menu.description}</p>
              <a href="#" class="btn btn-info">More</a>
            </div>
          </article>

        `;
    if (menu.rating > 4) {
      favoriteMenu.innerHTML += `<article class="post-item">
      <img class="post-item-thumbnail" src="${menu.pictureId}"
        alt="${menu.name}">
      <span class="bedge-city">${menu.city}</span>
      <div class="post-item-content">
        <p class="post-item-date-author">Rating ${menu.rating}</p>
        <h1 class="post-item-title">${menu.name}</h1>
        <p class="post-item-description">${menu.description}</p>
        <a href="#" class="btn btn-info">More</a>
      </div>
    </article>`;
    }
  });
}
getdata();
