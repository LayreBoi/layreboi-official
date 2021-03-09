(function() {
    var quotes = [
      {
          text: "LayreBoi, having fun at making music!",
      },
      {
          text: "Oh heya, nice to see you!",
      },
	  {
	      text: "Hmm, there's something interesting going on...",
	  },
	  {
	      text: "Welcome, visitor~",
	  },
	  {
		  text: "Watch out, there might be an upcoming release!",
	  },
	  {
		  text: "Hey have you seen TTien63..?",
	  },
	  {
		  text: "Yo wassup!",
	  },
	  {
		  text: "<i>You'll be my heart crystal forever~~</i>",
	  }
    ];
    var randomtext = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("gawrguraidk").innerHTML =
      '<p><center>'+randomtext.text+'</center></p>';
  })();