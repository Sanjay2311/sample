$(document).ready(function () {
    const newsData = {
        USA: {
            trending: "Stock market sees record highs.",
            Sports: ["NBA playoffs begin this weekend.", "Super Bowl highlights released."],
            Weather: ["Storm warning issued for East Coast.", "Sunny weather expected in California."],
            Politics: ["New policies announced by the President.", "Senate debates tax reforms."]
        },
        UK: {
            trending: "Prime Minister announces new policies.",
            Sports: ["Premier League title race heats up.", "Wimbledon preparations underway."],
            Weather: ["Heavy rain expected in London.", "Mild temperatures across the UK."],
            Politics: ["Parliament discusses trade agreements.", "New bill proposed for healthcare."]
        }
    };

    function updateNews() {
        let country = $("#countrySelect").val();
        let category = $(".tab-btn.active").data("category");

        $("#trendingText").text(newsData[country].trending);
        $("#newsContent").html("");

        newsData[country][category].forEach(news => {
            $("#newsContent").append(`<div class="news-item">${news}</div>`);
        });
    }

    // Country change event
    $("#countrySelect").change(updateNews);

    // Tab click event
    $(".tab-btn").click(function () {
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");
        updateNews();
    });

    // Initialize news on page load
    updateNews();
});
