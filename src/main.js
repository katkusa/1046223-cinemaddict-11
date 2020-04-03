import {createProfile} from "./components/profile.js";
import {createNavigation} from "./components/navigation.js";
import {createFilter} from "./components/filter.js";
import {createFilmCard} from "./components/film-card.js";
import {createFilmDetails} from "./components/film-details.js";
import {createFilmsList} from "./components/films-list.js";
import {createFilmsListExtra} from "./components/films-list-extra.js";
import {createShowMoreBtn} from "./components/show-more-btn.js";
import {createStatistics} from "./components/statistics.js";

const FILM_COUNT = 5;
const FILM_EXTRA_COUNT = 2;

const Place = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};
const ExtraFilmTitle = {
  TOP_RATED: `Top rated`,
  TOP_COMMENTED: `Most commented`
};

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const siteFooterStat = siteFooter.querySelector(`.footer__statistics`);

const render = (container, template, place) => container.insertAdjacentHTML(place, template);

const renderFilmCards = (container, count) => {
  for (let i = 0; i < count; i++) {
    render(container, createFilmCard(), Place.BEFOREEND);
  }
};

const init = () => {
  render(siteHeader, createProfile(), Place.BEFOREEND);
  render(siteMain, createNavigation(), Place.BEFOREEND);
  render(siteMain, createFilter(), Place.BEFOREEND);
  render(siteMain, createFilmsList(), Place.BEFOREEND);

  const filmsContainer = siteMain.querySelector(`.films`);
  const filmsListContainer = filmsContainer.querySelector(`.films-list__container`);

  renderFilmCards(filmsListContainer, FILM_COUNT);
  render(filmsListContainer, createShowMoreBtn(), Place.AFTERBEGIN);
  render(filmsContainer, createFilmsListExtra(ExtraFilmTitle.TOP_RATED), Place.BEFOREEND);
  render(filmsContainer, createFilmsListExtra(ExtraFilmTitle.TOP_COMMENTED), Place.BEFOREEND);

  const filmsExtraLists = filmsContainer.querySelectorAll(`.films-list--extra .films-list__container`);

  for (let extraList of filmsExtraLists) {
    renderFilmCards(extraList, FILM_EXTRA_COUNT);
  }

  render(siteFooter, createFilmDetails(), Place.AFTERBEGIN);
  render(siteFooterStat, createStatistics(), Place.BEFOREEND);
};

init();
