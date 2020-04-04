import {createFilmCard} from "./film-card";
import {Place} from "./consts";

const render = (container, template, place) => container.insertAdjacentHTML(place, template);

const renderFilmCards = (container, count) => {
  for (let i = 0; i < count; i++) {
    render(container, createFilmCard(), Place.BEFOREEND);
  }
};

export {render, renderFilmCards};
