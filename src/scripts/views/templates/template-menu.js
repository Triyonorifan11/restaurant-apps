import CONFIG from '../../globals/config';

const createMenuTemplate = (resto) => `
    <article class="post-item">
        <img class="post-item-thumbnail" src="${CONFIG.BASE_IMG_URL + resto.pictureId}" alt="${resto.name}">
        <span class="bedge-city">${resto.city}</span>
        <div class="post-item-content">
            <p class="post-item-date-author">⭐️ Rating ${resto.rating}</p>
            <h1 class="post-item-title">${resto.name}</h1>
            <p class="post-item-description">${resto.description}</p>
            <a href="#/detail/${resto.id}" class="btn btn-info">Detail</a>
        </div>
    </article>
`;

const createmenuDetailTemplate = (resto) => `

    <article class="post-item">
        <img class="post-item-thumbnail" src="${CONFIG.BASE_IMG_URL + resto.pictureId}" alt="${resto.name}">
        <span class="bedge-city">${resto.city} </span>
        <div class="post-item-content">
            <p class="post-item-date-author">⭐️ Rating ${resto.rating}</p>
            <h1 class="post-item-title">${resto.name}</h1>
            <p>Address: ${resto.address}</p>
        </div>
    </article>
    <div class"detail">
        <h2>Dskription</h2>
        <p class="post-item-description">${resto.description}</p>
    </div>

`;

const menuOfRestoDetail = (menu) => `
    <div class="menus">${menu.name}</div>
`;

const curtomerReview = (customer) => `
    <div class="menus">
        <p>Name : ${customer.name}</p>
        <p>Review : ${customer.review}</p>
        <p>Date : ${customer.date}</p>
    </div>
`;

const likeButton = () => `
    <button aria-label="like this movie" id="likeButton" class="favoriteRestoButton">
        <i class="bi bi-chat-heart"></i>
    </button>
`;

const unlikeButton = () => `

    <button aria-label="unlike this movie" id="likeButton" class="favoriteRestoButton">
        <i class="bi bi-chat-heart-fill"></i>
    </button>

`;

const addReviewerButton = () => `
    <a href="#/addReview" class="btn btn-info">Add Review</a>
`;
export {
  createMenuTemplate,
  createmenuDetailTemplate,
  likeButton, unlikeButton,
  menuOfRestoDetail,
  curtomerReview,
  addReviewerButton,
};
