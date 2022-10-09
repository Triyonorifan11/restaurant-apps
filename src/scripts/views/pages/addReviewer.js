const addreviewFromReviewer = {
  async render() {
    return `
    <section class="resto-content">
        <div class="daftar-menu">
            <h2 class="label-menu">Add Review Here</h2>
            <div class="post-menu" id="resto-list"></div>
        </div>
    </section>
`;
  },

  async afterRender() {
    console.log('this after render');
  },
};

export default addreviewFromReviewer;
