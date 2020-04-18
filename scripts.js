// JS scripts
$( document ).ready(function() {
    // -------------Quotes Section-------------
    // loading icon for quotes carousel
    const whileLoading = (on, id) => {
        if (on) {
            $(`${id}`).append(`
                <div class="loaderContainer d-flex align-items center">  
                    <div id="loading" class="d-flex spinner-border justify-content-center" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            `);
        } else {
            $(".loaderContainer").remove();
        }
    }
    // Creates each carousel item of quotes
    const getQuotes = () => {
        $.ajax({
            type: "GET",
            url: "https://smileschool-api.hbtn.info/quotes",
            beforeSend: () => whileLoading(1, "#carouselQuote"),
            success: function(res) {
                for (let i in res) {
                    $("#carouselInnerQuotes").append(`
                        <div class="carousel-item py-5 p-md-5">
                                <div class="item-inner d-md-flex flex-row">
                                    <img src="${res[i].pic_url}" width="160px" height="160px" class="d-block mx-auto rounded-circle mr-2" alt="Author of the quote 2">
                                    <div class="carousel-caption d-md-block text-left">
                                        <p>${res[i].text}</p>
                                        <p class="font-weight-bold">${res[i].name}</p>
                                        <p class="font-italic">${res[i].title}</p>
                                    </div>
                                </div>
                        </div> 
                    `);
                    if (i == 0) $("#carouselInnerQuotes .carousel-item").first().addClass("active");
                    whileLoading();
                }
            }
        })
    }


// -------------Tutorial Section-------------
// Creates each slide with multiple carousel-items
const cardSlider = () => {
    $('#innerVideos').carousel({
    interval: 10000
    })

    $('.carousel #itemTutorial').each(function(){
        let next = $(this).next();
        if (!next.length) next = $(this).siblings().first();
        next.children(':first-child').clone().appendTo($(this));
        
        for (let i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) next = $(this).siblings().first();
            next.children(':first-child').clone().appendTo($(this));
        }
});

  
};
// Creates a carousel item for each tutorial card
const makeTutorialCard = () => {
    $.ajax({
        type: "GET",
        url: "https://smileschool-api.hbtn.info/popular-tutorials",
        beforeSend: () => whileLoading(1, "#innerVideos"),
        success: function(res) {
            for (let i of res) {
                $("#innerVideos").append(`
                    <div id="itemTutorial" class="carousel-item justify-content-center card-${i.id}">
                        <div class="card border-0 d-none d-lg-flex mr-5">
                            <img src="${i.thumb_url}" class="card-img-top d-block" alt="${i.keywords[0]} ${i.keywords[1]}" width="255px" height="154px">
                            <img src="/images/play.png" class="position-absolute play-icon" width="64px" height="64px">
                            <div class="card-body">
                                <div>
                                    <h6 class="font-weight-bold">${i.title}</h6>
                                    <p class="card-text text-gray">${i["sub-title"]}</p>
                                    <span class="d-flex flex-row">
                                        <img src="${i.author_pic_url}" class="rounded-circle" alt="${i.keywords[0]} ${i.keywords[1]}" width="30px" height="30px">
                                        <p class="profile-video font-weight-bold ml-3">${i.author}</p>
                                    </span>
                                </div>
                                <span class="d-flex flex-row justify-content-between">
                                    <span id="stars">
                                    </span>
                                    <p class="profile-video p-0 m-0">${i.duration}</p>
                                </span>
                            </div>  
                        </div>
                    </div> 
                `);
                for (let j = 0; j < i.star; j++)
                    $(`.card-${i.id} #stars`).append(`<img src="./images/star_on.png" alt="one full star" width="15px"></img>`);
            }
            $("#itemTutorial").first().addClass("active");
            cardSlider();
            whileLoading();
        }
    })
}

    // Calling all the functions
    getQuotes();
    makeTutorialCard();
}); 