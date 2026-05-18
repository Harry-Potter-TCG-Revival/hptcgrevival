const headerHTML = `

 	<link rel="stylesheet" type="text/css" href="main.css" />
 	<link rel="stylesheet" type="text/css" href="footer.css" />
	<link rel="stylesheet" type="text/css" href="table.css" />
 	<link rel="stylesheet" type="text/css" href="footer.css" />
	<div class="navbar">
 			<a href="index.html">Home</a>
			<a href="newplayers.html">New Players</a>
 			<div class="dropdown">
 				<button class="dropbtn">Events</button>
 			<div class="dropdown-content">
				<a href="CurrentEvent.html">Current Events</a>
 				<a href="gencon.html">GenCon</a>
 				<a href="tournamentrules.html">Tournamnet Rules</a>
 				<a href="lists.html">B&R, Errata</a>
 			</div>
 			</div>
			<a href="decks.html">Deck Lists</a>
 			<div class="dropdown">
 				<button class="dropbtn">Resources</button>
 			<div class="dropdown-content">
 				<a href="ResourcesPage.html">Resources</a>
 				<a href="https://docs.google.com/document/d/14nlmMGUaKFaDvQxvix9bCwHozmtxih9B8CM10mK88Ac/edit">Rule Book</a>
 			</div>
 			</div>
			<a href="intothefloo.html"><img src="IntoTheFloo/fireplacesquare.png" style="height:1em;"/>  Into the Floo</a>
			<a href="fr.html"><img src="images/frenchflag.png" alt="french" style="height:1em;"/></a>
 			<a href="https://accio.cards" target="_blank">Accio</a>
 			<a href="about.html">About</a>
 		</div>
	 <style>
		 body {
			 background-image: url('images/pitchbackground.png');
			 background-repeat: no-repeat;
			 background-attachment: fixed;
			 background-size:cover;
		 }
	 </style>
 
`;
document.getElementById('header-placeholder').innerHTML = headerHTML;
