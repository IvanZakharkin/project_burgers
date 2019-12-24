ymaps.ready(init);




function init() {
    const myMap = new ymaps.Map("yandex-map", {
    center: [59.929657, 30.362167],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
    });

    const myPlacemark1 = new ymaps.Placemark(
        [59.97, 30.30], 
        {
            hintContent: 'адрес...',
            balloonContent: 'Самые вкусные бургеры! Заходите по адресу: адрес...'
        }, 
        {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-15, -27],
        
    });
    const myPlacemark2 = new ymaps.Placemark([59.94, 30.38],
        {
            hintContent: 'адрес...',
            balloonContent: 'Самые вкусные бургеры! Заходите по адресу: адрес...'
        }, 
        {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-15, -27]
    });
    const myPlacemark3 = new ymaps.Placemark([59.91, 30.49],
        {
            hintContent: 'адрес...',
            balloonContent: 'Самые вкусные бургеры! Заходите по адресу: адрес...'
        }, 
        {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-15, -27]
    });
    const myPlacemark4 = new ymaps.Placemark([59.88, 30.31], 
        {
            hintContent: 'адрес...',
            balloonContent: 'Самые вкусные бургеры! Заходите по адресу: адрес...'
        }, 
        {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-15, -27]
    });

    myMap.geoObjects.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3).add(myPlacemark4);
};
