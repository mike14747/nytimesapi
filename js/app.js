$(document).ready(function () {
    // "use strict";

    var APIKey = "WfDOk3J8YKZ73khHDWso9JoLYFFyNwkr";

    var searchTerm = "";
    var numRecords = 0;
    var startDate = "";
    var endDate = "";
    var queryURL = "";
    var newDate = "";

    $("#search-button").on("click", function () {
        searchTerm = $("#search-term").val().trim();
        numRecords = $("#recordsToRetrieve").val().trim();
        // startDate = $("#start-year").val().trim() + "0101";
        // endDate = $("#end-year").val().trim() + "0228";
        if ($("#start-year").val().trim() == "") {
            startDate = "20190101";
        } else {
            startDate = $("#start-year").val().trim() + "0101";
        }
        if ($("#end-year").val().trim() == "") {
            endDate = "20190228";
        } else {
            endDate = $("#end-year").val().trim() + "0228";
        }
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            var r = response.response.docs;

            for (var i = 0; i < numRecords; i++) {
                $("#article-Placement").append("<div class='row border-bottom mb-3'><div class='col-8 border-left p-2'><a href='" + r[i].web_url + "' target='_blank'>" + r[i].headline.main + "</a></div><div class='col-4'>" + r[i].pub_date + "</div></div>");
            }

            // headline.main, pub_date, web_url
    
        });
    });

});