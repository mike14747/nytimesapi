$(document).ready(function () {
    "use strict";

    var APIKey = "WfDOk3J8YKZ73khHDWso9JoLYFFyNwkr";

    var searchTerm = "";
    var numRecords = 0;
    var startDate = "";
    var endDate = "";
    var queryURL = "";

    $("#top-articles-box").hide();

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = yyyy + mm + dd;

    $("#search-button").on("click", function () {
        searchTerm = $("#search-term").val().trim();
        if ($("#search-term").val().trim() == "") {
            $("#searchTermError").text(" This field cannot be left blank.");
        } else {
            $("#article-Placement").text("");
            $("#searchTermError").text("");
            numRecords = $("#recordsToRetrieve").val().trim();
            if ($("#start-year").val().trim() == "") {
                startDate = "20190101";
            } else {
                startDate = $("#start-year").val().trim() + "0101";
            }
            if ($("#end-year").val().trim() == "") {
                endDate = today;
            } else {
                endDate = $("#end-year").val().trim() + "1231";
            }
            queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=" + APIKey;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                if (response.response.docs.length > 0) {
                    $("#top-articles-box").show();
                    var r = response.response.docs;
                    for (var i = 0; i < numRecords; i++) {
                        var formattedDate = r[i].pub_date.slice(0, 10);
                        $("#article-Placement").append("<div class='row my-4 d-flex justify-content-center mx-auto'><div class='col-8 pb-2 border-left border-bottom'><a href='" + r[i].web_url + "' target='_blank'>" + r[i].headline.main + "</a></div><div class='col-3 pb-2 border-bottom'>" + formattedDate + "</div></div>");
                    }
                } else {
                    $("#top-articles-box").show();
                    $("#article-Placement").append("<div class='row my-4 d-flex justify-content-center mx-auto'><div class='col-11 pb-2 border-left border-bottom text-danger font-weight-bolder'>No articles were found that meet the search criteria.</div></div>");
                }
            });
        }
    });

});