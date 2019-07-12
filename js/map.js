
  ymaps.ready(init);
  var myMap;

  var myOptions = {
    
      center: [41.353000, 69.247000],
      zoom: 16,
      searchControlProvider: 'yandex#search'
  };

  function init() {
    myMap = new ymaps.Map("map", myOptions);

    myMap.behaviors.disable('scrollZoom');

    markerImage = '../img/marker.png';
    markerSize = [100, 123];

    tashkent = new ymaps.Placemark([41.354657, 69.254074], {
      hintContent: "<h3>Almus Main Office</h3>"
    }, {
      iconLayout: 'default#image',
      iconImageHref: markerImage,
      iconImageSize: markerSize
    });


    myMap.geoObjects
      .add(tashkent);
  }