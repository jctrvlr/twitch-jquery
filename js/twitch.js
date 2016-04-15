function twitch() {
$.getJSON("https://api.twitch.tv/kraken/streams/playcevo?callback=?").done(function(data) {
			if(data.stream) {
				document.getElementById("s-online").innerHTML = "Stream is currently <em>ONLINE!</em>";
				document.getElementById("s-views").innerHTML = data.stream.viewers;
				
			} else {
				document.getElementById("s-online").innerHTML = "Stream is currently <em>OFFLINE!</em>";
				document.getElementById("s-views").innerHTML = "0";
			}
			});
			}
