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
	.when('/kinect/gestures', {
		templateUrl: 'pages/kinect/gestures.html'
	})
	.when('/kinect/voice', {
		templateUrl: 'pages/kinect/voice.html'
	})
	.when('/leap/waarom', {
		templateUrl: 'pages/leapmotion/waarom.html'
	})
	.when('/leap/hoewerkthet', {
		templateUrl: 'pages/leapmotion/hoe_werkt_het.html'
	})
	.when('/leap/bevindingen', {
		templateUrl: 'pages/leapmotion/bevindingen.html'
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
	.when('/research/facerecognition', {
		templateUrl: 'pages/research/facerecognition.html'
	})
	.when('/research/eyetracking', {
		templateUrl: 'pages/research/eyetracking.html'
	})
	.when('/research/smartphone', {
		templateUrl: 'pages/research/smartphone.html'
	})
	.when('/research/identificatie', {
		templateUrl: 'pages/research/identificatie.html'
	})
	.when('/research/interface', {
		templateUrl: 'pages/research/interface.html'
	})
	.when('/uiux/testopzet', {
		templateUrl: 'pages/uiux/testopzet.html'
	})

	.otherwise('/');
});
