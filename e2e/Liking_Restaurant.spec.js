/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restoes', ({ I }) => {
  I.seeElement('#query');
  I.see('There are no restaurants to show', '.restoes-not-found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('There are no restaurants to show', '.restoes-not-found');
  I.amOnPage('/');

  pause();

  I.seeElement('.post-item-content a');
  const firstResto = locate('.post-item-content a').first();
  const firstRestoTitle = await I.grabTextFrom('.post-item-title');
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestoTitle = await I.grabTextFrom('.post-item-title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  // unlike
  I.seeElement('.post-item-content a');

  const restoUnlike = locate('.post-item-content a').first();
  // const restoTitle = await I.grabTextFrom(restoUnlike);
  I.click(restoUnlike);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  I.see('There are no restaurants to show', '.restoes-not-found');
});
