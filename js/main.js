$(document).ready(function () {
    var data = {
        "images": [

            {
                "src": "http://i.imgur.com/W2YoxQy.jpg",
                "firstName": "Knowledge",
                "lastName": "Customs",
                "description": "A custom piece commissioned by Jim Dwyer"
            },

            {
                "src": "http://i.imgur.com/fHlXEjA.jpg",
                "firstName": "Jason Burrus",
                "lastName": "Rose Roads",
                "description": "A custom by Jason Burrus and Rose Roads"
                   },
            {
                "src": "http://i.imgur.com/1ULewEl.jpg",
                "firstName": "Robert",
                "lastName": "Mickelson",
                "description": "A custom AR-15 replica by Robert Mickelson"
                   },
            {
                "src": "http://i.imgur.com/jLX2OqI.jpg",
                "firstName": "Junichi",
                "lastName": "Kojima",
                "description": "A mib from Rose Roads (Junichi Kojima)"

            }
        ]


    };
    data.images.forEach(function (obj) {
        var img = new Image();
        img.src = obj.src;
        var firstName = obj.firstName;
        var lastName = obj.lastName;
        var description = obj.description;

        var code = "<figure class='effect-zoe' id='one'> <img src='" + img.src + "' alt='img25' id='one' /><figcaption> <h2 class = 'piece-name'> " + firstName + " <span> " + lastName + " </span></h2><p class='icon-links'> <a href='#'> <span class='icon-heart'> </span></a><a href='#'> <span class='icon-eye'> </span></a><a href='#'> <span class = 'icon-paper-clip'> </span></a></p> <p class='description'>" + description + " </p> </figcaption> </figure> "

        var output = $.parseHTML(code);

        $('.grid').append(output);
    });
});
