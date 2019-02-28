$(document).ready(function () {
    // "use strict";

    var APIKey = "WfDOk3J8YKZ73khHDWso9JoLYFFyNwkr";

    var searchTerm = "";
    var numRecords = "";
    var startDate = "";
    var endDate = "";
    var shorthand = "response.docs";
    var queryURL = "";

    $("#search-button").on("click", function () {
        searchTerm = $("#search-term").val();
        searchTerm = "baseball";
        numRecords = $("#recordsToRetrieve").val();
        startDate = $("#start-year").val() + "0101";
        endDate = $("#end-year").val() + "0227";
        startDate = "20190101";
        endDate = "20190228";
        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + APIKey;
        // queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;
        // queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=WfDOk3J8YKZ73khHDWso9JoLYFFyNwkr";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
    
            // console.log(JSON.stringify(response));
    
            // $("#article-Placement").append("<p>" + JSON.stringify(response) + "</p>");

            var r = response.response.docs;
            // var r = response.response.docs[0].web_url;
            // console.log(r);
            for (var i = 0; i < r.length; i++) {
                // $("#article-Placement").append("<p>" + r + "[" + i + "]." + web_url + "</p>");
                console.log(r + "[" + i + "].web_url");
            }

            // response.headline.main
            // response.pub_date
            // response.web_url
    
        });
    });

    /*
    $("#clear-results-button").on("click", function () {
        $("#search-term").val("");
        $("#recordsToRetrieve").val("");
        $("#start-year").val("");
        $("#end-year").val("");
    });
    */

});