$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '2232419451',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '2232419451.1677ed0.bae8ef828899468e93d4f2ff64a963b6',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});