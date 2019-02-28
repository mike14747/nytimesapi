$(document).ready(function () {
    // "use strict";

    var APIKey = "WfDOk3J8YKZ73khHDWso9JoLYFFyNwkr";

    var searchTerm = "";
    var numRecords = "";
    var startDate = "";
    var endDate = "";
    var queryURL = "";

    $("#search-button").on("click", function () {
        searchTerm = $("#search-term").val();
        numRecords = $("#recordsToRetrieve").val();
        startDate = $("#start-year").val() + "0101";
        endDate = $("#end-year").val() + "0227";
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            var r = response.response.docs;
            // var r = response.response.docs[0].headline.main;
            
            console.log(r);
            for (var i = 0; i < r.length; i++) {
                $("#article-Placement").append("<div class='row'><div class='col-8'><a href='" + r[i].web_url + "' target='_blank'>" + r[i].headline.main + "</a></div><div class='col-4'>" + r[i].pub_date + "</div></div></p>");
                // $("#article-Placement").append("<p>" + r[i].headline.main + "</p>");
                // console.log(r + "[" + i + "].headline.main");
                console.log(r[i].headline.main);
            }

            // headline.main, pub_date, web_url
    
        });
    });

});