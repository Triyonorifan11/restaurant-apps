import CONFIG from '../../globals/config';

const createMenuTemplate = (menu) => `
    <article class="post-item">
        <img class="post-item-thumbnail" src="${CONFIG.BASE_IMG_URL + menu.pictureId}" alt="${menu.name}">
        <span class="bedge-city">${menu.city}</span>
        <div class="post-item-content">
            <p class="post-item-date-author">⭐️ Rating ${menu.rating}</p>
            <h1 class="post-item-title">${menu.name}</h1>
            <p class="post-item-description">${menu.description}</p>
            <a href="#/detail/${menu.id}" class="btn btn-info">Detail</a>
        </div>
    </article>
`;

const createmenuDetailTemplate = (menu) => `

    <article class="post-item">
        <img class="post-item-thumbnail" src="${CONFIG.BASE_IMG_URL + menu.pictureId}" alt="${menu.name}">
        <span class="bedge-city">${menu.city}</span>
        <div class="post-item-content">
            <p class="post-item-date-author">⭐️ Rating ${menu.rating}</p>
            <h1 class="post-item-title">${menu.name}</h1>
            <p class="post-item-description">${menu.description}</p>
        </div>
    </article>

`;
export { createMenuTemplate, createmenuDetailTemplate };
