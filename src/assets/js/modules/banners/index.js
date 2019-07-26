import Sortable from 'sortablejs';
import { ready } from '../../utils/utils.js';

ready(function() {

  const banners = document.getElementById('sortBanners');

  if (banners) {
    new Sortable(document.getElementById('sortBanners'), {
      animation: 150,
      filter: '.card--new-banner'
    });
  }

});
