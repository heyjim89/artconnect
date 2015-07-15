console.log($)

var pageState = function () {
   setTimeout(function () {
       $('.grid').html(JSON.parse(localStorage["contents"]));
   }, 500);
};

pageState();

$(document).on('ready', function() {
    var AllPieces = []
    var pieceId = 0;


    var Piece = function (src, artist, description) {
        this.src = src;
        this.artist = artist;
        this.description = description;
        this.id = pieceId++;
        this.el = null;
        AllPieces.push(this);
        console.log(this)
    }

    Piece.prototype.create = function () {
        var $pieceBlock = $('<figure class="effect-zoe" id="one"> <img src="' + this.src + '" alt="img25" id="one" /><figcaption> <h2 class = "piece-name"> "' + this.artist + '" <span> </span></h2><p class="icon-links"> <a href="#"> <span class="icon-heart"> </span></a><a href="#"> <span class="icon-eye"> </span></a><a href="#"> <span class = "icon-paper-clip"> </span></a></p> <p class="description"> </p><input name="star1" class="input-field star" placeholder="value"/> </figcaption> </figure> ');
        this.el = $pieceBlock;

        return this.el
    }

    // working on some logic here to make even .quote-block divs a med. gray BG color
    // console.log(this.id % 2)
    // 	if ( (this.id % 2) != 0 ){
    // 		$('.quote-block').addClass('.even-block');
    // 	}

    // --- RATING --- //

    $(document).on('click', '#submit', function(){
        var q = $('#src').val();
        var a = $('#artist').val();
        var d = $('#description').val();

               // if (q === '') {
               //     $('.qt-err').after('<p class="error">Oops, please enter a quote.</p>')
               //     setTimeout(function () {
               //         var error = $('.error').fadeOut(4000).remove();
               //     }, 6000);
               // }
        
               // if (a === '') {
               //     $('.auth-err').after('<p class="error">Oops, please enter an author.</p>')
               //     setTimeout(function () {
               //         var error = $('.error').fadeOut(4000).remove();
               //     }, 6000);
               // } else {
        var setPiece = new Piece(q, a, d);

        $('input').val('');
        console.log("ABOUT TO APPEND")
        $('.grid').append(setPiece.create());
        //                                $('.quote-text').last().append(q);
        //                                $('.author').last().append('-' + ' ' + a);


        localStorage["contents"] = JSON.stringify($('.grid').html());
    });
});

//
////
///       OLD CODE FOR NON LOCAL STORAGE
///


//    var data = {
//        "images": [

//            {
//                "src": "http://i.imgur.com/W2YoxQy.jpg",
//                "firstName": "Knowledge",
//                "lastName": "Customs",
//                "description": "A custom piece commissioned by Jim Dwyer"
//            },

//            {
//                "src": "http://i.imgur.com/fHlXEjA.jpg",
//                "firstName": "Jason Burrus",
//                "lastName": "Rose Roads",
//                "description": "A custom by Jason Burrus and Rose Roads"
//                   },
//            {
//                "src": "http://i.imgur.com/1ULewEl.jpg",
//                "firstName": "Robert",
//                "lastName": "Mickelson",
//                "description": "A custom AR-15 replica by Robert Mickelson"
//                   },
//            {
//                "src": "http://i.imgur.com/jLX2OqI.jpg",
//                "firstName": "Junichi",
//                "lastName": "Kojima",
//                "description": "A mib from Rose Roads (Junichi Kojima)"

//            },
//            {
//                "src": "http://i.imgur.com/KcQqn1E.jpg",
//                "firstName": "John",
//                "lastName": "Kobuki",
//                "description": "A mib from John Kobuki"

//            }
//        ]


//    };

//    data.images.forEach(function (obj) {
//        var img = new Image();
//        img.src = obj.src;
//        var firstName = obj.firstName;
//        var lastName = obj.lastName;
//        var description = obj.description;

//        var code = "<figure class='effect-zoe' id='one'> <img src='" + img.src + "' alt='img25' id='one' /><figcaption> <h2 class = 'piece-name'> " + firstName + " <span> " + lastName + " </span></h2><p class='icon-links'> <a href='#'> <span class='icon-heart'> </span></a><a href='#'> <span class='icon-eye'> </span></a><a href='#'> <span class = 'icon-paper-clip'> </span></a></p> <p class='description'>" + description + " </p><input name='star1' class='input-field star' placeholder='value'/> </figcaption> </figure> "

//        var output = $.parseHTML(code);

//        $('.grid').append(output);

//        localStorage["contents"] = JSON.stringify($('.grid').html());

//    });
// });