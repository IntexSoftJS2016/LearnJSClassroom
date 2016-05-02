var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('main',{
		url: '/',
		templateUrl: 'index.html',
		views: {
			'headerTemplate': {
				templateUrl: 'pages/headerTemplate.html',
				controller: 'HeadController'
			},
			'navTemplate': {
				templateUrl: 'pages/navTemplate.html',
				controller: 'MenuController'
			},
			'mainTemplate': {
				templateUrl: 'pages/home.html',
				controller: 'HomePageController'
			},			
			'footerTemplate': {
				templateUrl: 'pages/footerTemplate.html'
			}
		}
	})
	.state('news',{
		url: '/news',
		templateUrl: 'index.html',
		views: {
			'headerTemplate': {
				templateUrl: 'pages/headerTemplate.html',
				controller: 'HeadController'
			},
			'navTemplate': {
				templateUrl: 'pages/navTemplate.html',
				controller: 'MenuController'
			},
			'mainTemplate': {
				templateUrl: 'pages/news.html',
				controller: 'NewsPageController'
			},
			'footerTemplate': {
				templateUrl: 'pages/footerTemplate.html'
			}
		}
	})
	.state('blog',{
		url: '/blog',
		templateUrl: 'index.html',
		views: {
			'headerTemplate': {
				templateUrl: 'pages/headerTemplate.html',
				controller: 'HeadController'
			},
			'navTemplate': {
				templateUrl: 'pages/navTemplate.html',
				controller: 'MenuController'
			},
			'mainTemplate': {
				templateUrl: 'pages/blog.html',
				controller: 'BlogPageController'
			},
			'footerTemplate': {
				templateUrl: 'pages/footerTemplate.html'
			}
		}
	})
	.state('contact',{
		url: '/contact',
		templateUrl: 'index.html',
		views: {
			'headerTemplate': {
				templateUrl: 'pages/headerTemplate.html',
				controller: 'HeadController'
			},
			'navTemplate': {
				templateUrl: 'pages/navTemplate.html',
				controller: 'MenuController'
			},
			'mainTemplate': {
				templateUrl: 'pages/contact.html',
				controller: 'ContactPageController'
			},
			'footerTemplate': {
				templateUrl: 'pages/footerTemplate.html'
			}
		}
	})
	.state('about',{
		url: '/about',
		templateUrl: 'index.html',
		views: {
			'headerTemplate': {
				templateUrl: 'pages/headerTemplate.html',
				controller: 'HeadController'
			},
			'navTemplate': {
				templateUrl: 'pages/navTemplate.html',
				controller: 'MenuController'
			},
			'mainTemplate': {
				templateUrl: 'pages/about.html',
				controller: 'AboutPageController'
			},
			'footerTemplate': {
				templateUrl: 'pages/footerTemplate.html'
			}
		}
	});
			
});