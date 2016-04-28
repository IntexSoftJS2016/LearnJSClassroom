var app = angular.module('app', []);

app.controller('MenuCtrl', MenuCtrl);
app.controller('HeadCtrl', HeadCtrl);
app.controller('ContentCtrl', ContentCtrl);

function MenuCtrl() {
	this.items = ["home", "news", "blog", "contact us", "about"];
}

function HeadCtrl() {
	this.name = "FlyDev Studio";	
}

function ContentCtrl() {
	this.apps = [
		{
			name: "SnapHack",
			description: "Lorem ipsum dolor sit amet, \
						 consectetur adipiscing elit.\
						 Sed tempus dui sit amet est dapibus,\
						 sit amet dapibus ipsum euismod. Nulla\
						 cursus faucibus justo a mollis. \
						 Sed facilisis semper lacinia.",
			price: 1.99,
			available: true
		},
		{
			name: "PastaGram",
			description: "Lorem ipsum dolor sit amet, \
						 consectetur adipiscing elit.\
						 Sed tempus dui sit amet est dapibus,\
						 sit amet dapibus ipsum euismod. Nulla\
						 cursus faucibus justo a mollis. \
						 Sed facilisis semper lacinia.",
			price: 2.99,
			available: true
		},
		{
			name: "ProgTube",
			description: "Lorem ipsum dolor sit amet, \
						 consectetur adipiscing elit.\
						 Sed tempus dui sit amet est dapibus,\
						 sit amet dapibus ipsum euismod. Nulla\
						 cursus faucibus justo a mollis. \
						 Sed facilisis semper lacinia.",
			price: 0.99,
			available: true
		},
		{
			name: "AlienGlobe",
			description: "Lorem ipsum dolor sit amet, \
						 consectetur adipiscing elit.\
						 Sed tempus dui sit amet est dapibus,\
						 sit amet dapibus ipsum euismod. Nulla\
						 cursus faucibus justo a mollis. \
						 Sed facilisis semper lacinia.",
			price: "Free",
			available: false
		},
		{
			name: "HyperSoft",
			description: "Lorem ipsum dolor sit amet, \
						 consectetur adipiscing elit.\
						 Sed tempus dui sit amet est dapibus,\
						 sit amet dapibus ipsum euismod. Nulla\
						 cursus faucibus justo a mollis. \
						 Sed facilisis semper lacinia.",
			price: 19.99,
			available: false
		}

	]
}