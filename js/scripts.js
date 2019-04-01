// Toggles nav drawar
$( document ).ready(function() {
    $( ".nav-toggle" ).click(function() {
        $( ".nav" ).toggleClass( "open" );
      });
});

// Get market list form json file
$.ajax({
    type: "GET",
    url: "js/markets.json",
    dataType: "json",
    
    success: function(data) {
        var markets = data.markets;
        markets.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        console.log(data)


        $.each(markets, function(i, item) {
            $('<div class="innerMarket">').html(markets[i].name + '<span>' + markets[i].address + '</span>').appendTo('.marketBox');
        });
    }
});