var app = angular.module('mirror-docs', [
	'ngRoute'
]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.html'
	})
	.when('/kinect/waarom', {
		templateUrl: 'pages/kinect/waarom.html'
	})
	.when('/kinect/hardware-setup', {
		templateUrl: 'pages/kinect/hardware_setup.html'
	})
	.when('/kinect/bevindingen', {
		templateUrl: 'pages/kinect/bevindingen.html'
	})
	.when('/leap/waarom', {
		templateUrl: 'pages/leapmotion/waarom.html'
	})
	.when('/concepts/clothing', {
		templateUrl: 'pages/clothing.html'
	})
	.when('/concepts/fitness', {
		templateUrl: 'pages/fitness.html'
	})
	.when('/concepts/good-morning', {
		templateUrl: 'pages/good_morning.html'
	})
	.when('/concepts/hub', {
		templateUrl: 'pages/hub.html'
	})
	.when('/concepts/kapper', {
		templateUrl: 'pages/kapper.html'
	})
	.when('/docs/product', {
		templateUrl: 'pages/product.html'
	})
	.when('/docs/project', {
		templateUrl: 'pages/project.html'
	})
	.when('/uiux/testopzet', {
		templateUrl: 'pages/uiux/testopzet.html'
	})

	.otherwise('/');
});
