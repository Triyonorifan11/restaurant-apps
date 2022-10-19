import CONFIG from '../../globals/config';

const createMenuTemplate = (resto) => `
    <article class="post-item" tabindex="0">
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

    <article class="post-item" tabindex="0">
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

const createLikeRestoButtonTemplate = () => `
    <button aria-label="like this resto" id="likeButton" class="favoriteRestoButton">
        <i class="bi bi-chat-heart"></i>
    </button>
`;

const createUnlikeRestoButtonTemplate = () => `

    <button aria-label="unlike this resto" id="likeButton" class="favoriteRestoButton">
        <i class="bi bi-chat-heart-fill"></i>
    </button>

`;

const addReviewerButton = (resto) => `
    <a href="#/addreview/${resto.id}" class="btn btn-info">Add Review</a>
`;

const formInputReviewer = () => `
    <div class="card-body">
        <div class="form-group">
            <label for="nama-reviewer" class="form-label">Nama</label>
            <input id="nama-reviewer" type="text" class="form-control" placeholder="Name" required>
        </div>
        <div class="form-group">
            <label for="review-text" class="form-label">Review</label>
            <textarea name="review-text" id="review-text" rows="4" class="form-control" required placeholder="Add review"></textarea>
        </div>
        <div class="form-group">
            <button id="buttonSave" class="btn btn-info">Add Review</button>
        </div>
    </div>
`;

export {
  createMenuTemplate,
  createmenuDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  menuOfRestoDetail,
  curtomerReview,
  addReviewerButton,
  formInputReviewer,
};
