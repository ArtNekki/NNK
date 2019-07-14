export default class MainNav {
  constructor({ target }) {
    this._container = document.querySelector(target);
    this._onLoad();
  }

  _onLoad() {
    this._container.addEventListener('click', this._onClick.bind(this));
    this._currentActiveItem = this._container.querySelector('.is-active');
    this._closableContainer = this._container.closest('[data-closable]');
  }

  _onClick(e) {
    e.preventDefault();
    const link = e.target.closest('[data-tabs-target]');

    if (link) {
      this.changeActiveItem(link.getAttribute('href'));
      this._closableContainer.style.display = 'none';
    }
  }

  changeActiveItem(id) {
    if (this._currentActiveItem) {
      this._currentActiveItem.classList.remove('is-active')
    }

    const activeLink = this._container.querySelector(`[href='${id}']`);

    if (activeLink) {
      const activeItem = activeLink.parentNode;
      activeItem.classList.add('is-active');
      this._currentActiveItem = activeItem;
      this.onChange(activeLink);
    }
  }

  onChange(activeLink) {

  }
}
