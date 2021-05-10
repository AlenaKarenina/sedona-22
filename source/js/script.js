const menu = document.querySelector ('.main-nav');
const buttonMenu = document.querySelector ('.main-nav__toggle');

menu.classList.remove('main-nav--nojs');

buttonMenu.addEventListener('click', function(evt){
  evt.preventDefault();
  buttonMenu.classList.toggle('main-nav__toggle--opened');
  menu.classList.toggle('main-nav--opened');
});

(function(){
  var mapСontent = document.querySelector("#map");
  if (mapСontent) {
    ymaps.ready(function () {
      var map = new ymaps.Map('map', {
        center: [35.13924190506243,-111.68733431549558],
        zoom: 10,
        scrollZoom: false,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),
      Placemark = new ymaps.Placemark([35.14924190506243,-111.68733431549558], {
        balloonContent: 'Седона, туристический городок в Аризоне'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker.svg',
        iconImageSize: [27, 27],
        iconImageOffset: [-17, -27],
      });

      map.geoObjects.add(Placemark);
      map.behaviors.disable('scrollZoom');
      map.controls.add('zoomControl');
      var roadcontrolState = map.controls.get('zoomControl').state.get('size');
      map.controls.get('zoomControl').options.set('size', 'small');
    });
  };
})();
