app.controller('MenuController', MenuController)
	.controller('HeadController', HeadController)
	.controller('HomePageController',['$scope', HomePageController])
	.controller('NewsPageController',['$scope', NewsPageController])
	.controller('BlogPageController',['$scope', BlogPageController])
	.controller('ContactPageController',['$scope', ContactPageController])
	.controller('AboutPageController',['$scope', AboutPageController]);	

function MenuController($scope) {
	$scope.items = [
		{
			name: 'home',
			state: 'main'
		},
		{
			name: 'news',
			state: 'news'
		},
		{
			name: 'blog',
			state: 'blog'
		},
		{
			name: 'contact us',
			state: 'contact'
		},
		{
			name: 'about',
			state: 'about'
		}
	];
}

function HeadController($scope) {
	$scope.name = "FlyDev Studio";	
}

function HomePageController($scope) {
	$scope.apps = [
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

	];
}

function NewsPageController($scope) {
	$scope.news = [
		{
			date: new Date('13.05.2015'),
			header: 'Birthday of our perspective company!',
			text: ' Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit.\
					Sed tempus dui sit amet est dapibus,\
					sit amet dapibus ipsum euismod.'
		},
		{
			date: new Date('23.07.2015'),
			header: 'Microsoft corporate site redesign!',
			text: ' Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit.\
					Sed tempus dui sit amet est dapibus,\
					sit amet dapibus ipsum euismod.'
		},
		{
			date: new Date('06.11.2015'),
			header: 'Our company cost increased by 50%!',
			text: ' Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit.\
					Sed tempus dui sit amet est dapibus,\
					sit amet dapibus ipsum euismod.'
		},
		{
			date: new Date('04.03.2016'),
			header: 'We have carried out 250 projects!',
			text: ' Lorem ipsum dolor sit amet, \
					consectetur adipiscing elit.\
					Sed tempus dui sit amet est dapibus,\
					sit amet dapibus ipsum euismod.'
		}];
}

function BlogPageController($scope) {
	$scope.blog = "Blog!";
}

function ContactPageController($scope) {
	$scope.contact = "Contact us!";
}

function AboutPageController($scope) {
	$scope.about = "About Us!";
}