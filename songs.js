$(document).ready(function() {

    // Use jQuery to get a reference to `load-songs`
  $("#load-songs")[0]


    // Use jQuery to get a reference to `song-list`
    $("#song-list")[0]

    /*
        Attach a click handler to the button with jQuery. When
        the button is clicked, use $.ajax() to load `songs.json`
        from the file system
    */
})

   /*
        Chain a `.then()` method to the ajax call, and when
        it is complete build a DOM component for each song with
        the following structure. Use the jQuery append() method
        to put an HTML representation of each song the DOM as a
        child component of the .

            <section class="song">
                <h1 class="song__title">{Title of song}</h1>
                <section class="song__description">
                    Performed by {artist} on the album {album}
                </section>
            </section>

    */

//element in the .each function can also be omitted and "this" can be used to access values within the ojects
    $("#load-songs").click (function() {

        return $.getJSON("http://localhost:8088/songs").then(function(song){
           $(song).each(function(index, element) {
              $("#song-list").append(`<section class="song">
              <h1 class="song__title">${this.title}</h1>
              <section class="song__description">
                  Performed by ${element.artist} on the album ${element.album}
              </section>
          </section>
`)
           })
    })
    })






