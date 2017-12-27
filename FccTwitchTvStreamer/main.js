$(document).ready(function () {
  
    var streamers = ["freecodecamp", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    streamers.forEach(function(user) {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + user + "?callback=?", function(data) {
            var name = data.display_name
            var logo = data.logo
            var status = data.status
            var link = data.url;
            
            if (data.partner===true) { 
                $("#streamInfo").prepend(
                "<div class='row streaming'><div class='col-xs-2 logo'><img src=" + logo + "></div>" + "<div class = 'col-xs-4 name'><a class='streaming' href=" 
                + link + " target='_blank'>" + name + "</a></div>" + "<div class = 'col-xs-6 status'>Streaming: " + status +"</div></div>"
                );
            } else {
                $("#streamInfo").prepend(
                "<div class='row offline'><div class='col-xs-2 logo'><img src=" + logo + "></div>" + "<div class = 'col-xs-4 name'><a class='offline' href=" 
                + link + " target='_blank'>" + name + "</a></div>" + "<div class = 'col-xs-6 status'>Offline</div></div>"
                );
            }
        });
    });
});
    