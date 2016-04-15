function twitch() {
$.getJSON("https://api.twitch.tv/kraken/streams/playcevo?callback=?").done(function(data) {
			if(data.stream) {
				document.getElementById("s-online").innerHTML = "Stream is currently <em>ONLINE playing " + data.stream.game + "!</em>";
				document.getElementById("s-views").innerHTML = data.stream.viewers;
				document.getElementById("s-tviews").innerHTML = data.stream.channel.views;
				document.getElementById("s-followers").innerHTML = data.stream.channel.followers ;
				document.getElementById("s-preview").innerHTML = "<img src=\"" + data.stream.preview.medium + "\">";
				
				
			} else {
				document.getElementById("s-online").innerHTML = "Stream is currently <em>OFFLINE!</em>";
				document.getElementById("s-views").innerHTML = "0";
				document.getElementById("s-tviews").innerHTML = data.stream.channel.views;
				document.getElementById("s-followers").innerHTML = data.stream.channel.views;
			}
			});
			}
