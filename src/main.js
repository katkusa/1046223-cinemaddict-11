import {createProfile} from "./components/profile";
import {createNavigation} from "./components/navigation";
import {createFilter} from "./components/filter";
import {createFilmDetails} from "./components/film-details";
import {createFilmsList} from "./components/films-list";
import {createFilmsListExtra} from "./components/films-list-extra";
import {createShowMoreBtn} from "./components/show-more-btn";
import {createStatistics} from "./components/statistics";
import {renderFilmCards} from "./components/film-card";
import {render} from "./components/utils";
import {Place, ExtraFilmTitle, FILM_COUNT, FILM_EXTRA_COUNT} from "./components/consts";

const siteHeader = document.querySelector(`.header`);
const siteMain = document.querySelector(`.main`);
const siteFooter = document.querySelector(`.footer`);
const siteFooterStat = siteFooter.querySelector(`.footer__statistics`);

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
