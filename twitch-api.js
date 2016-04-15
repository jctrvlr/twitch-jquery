function twitch() {
$.getJSON("https://api.twitch.tv/kraken/streams/bajheera?callback=?").done(function(data) {
			if(data.stream) {
				document.getElementById("s-online").innerHTML = "Stream is currently <em>ONLINE!</em>";
				document.getElementById("s-views").innerHTML = data.stream.viewers;
				document.getElementById("stream-slide").innerHTML = "<img src=\"" + data.stream.preview.large + "\" alt=\"\" data-bgposition=\"center center\" data-bgfit=\"cover\" data-bgrepeat=\"no-repeat\" class=\"rev-slidebg\"><div class=\"tp-caption NotGeneric-Title tp-resizeme\" 		id=\"slide-396-layer-1\" data-x=\"center\" data-hoffset=\"\" data-y=\"center\" data-voffset=\"\" data-width=\"['auto','auto','auto','auto']\"data-height=\"['auto','auto','auto','auto']\"  data-splitin=\"chars\" data-splitout=\"none\" data-responsive_offset=\"on\" style=\" z-index: 5; white-space: nowrap; font-size: 50px; line-height: 30px;\"><strong>Live now with " + data.stream.viewers + " viewers! </strong>	</div>";
				
			} else {
				document.getElementById("s-online").innerHTML = "Stream is currently <em>OFFLINE!</em>";
				document.getElementById("s-views").innerHTML = "0";
			}
			});
			}
