/* eslint-disable no-alert */
import getReviewer from '../data/getReviewer';
import RestoResouce from '../data/resto-api';
import { formInputReviewer } from '../views/templates/template-menu';

const postReviewer = {
  async init({ formSubmit, value }) {
    this._formSubmit = formSubmit;
    this._value = value;
    await this._renderForm();
  },

  async _renderForm() {
    this._formSubmit.innerHTML = formInputReviewer();
    const { id } = this._value;
    const buttonReviewSubmit = document.querySelector('#buttonSave');
    const nameInput = document.querySelector('#nama-reviewer');
    const reviewInput = document.querySelector('#review-text');
    buttonReviewSubmit.addEventListener('click', async () => {
      const inputValue = {
        id,
        name: nameInput.value,
        review: reviewInput.value,
      };
      await this._insertReview(inputValue);
    });
  },

  async updateReviewerInput(id) {
    const updateReviewer = await getReviewer(id);
    return updateReviewer;
  },

  async _insertReview(value) {
    try {
      const option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      };
      const { id } = this._value;
      const responseMessage = await RestoResouce.postReviewer(option);
      alert(`Data ${responseMessage} ditambahkan`);
      if (responseMessage === 'success') {
        this.updateReviewerInput(id);
      }
      window.location.href = `#/detail/${id}`;
      window.location.reload(true);
    } catch (error) {
      alert(error);
    }
  },

};

export default postReviewer;
