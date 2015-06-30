var app = angular.module('mirror-docs', [
	'ngRoute'
]);

app.config(function($routeProvider) {
	$routeProvider

	/*
	 * Home
	 */
	.when('/', {
		templateUrl: 'pages/home.html'
	})

	/*
	 * Onderzoeken
	 */
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
	.when('/research/gestures', {
		templateUrl: 'pages/research/gestures.html'
	})
	.when('/research/gestures-kinect', {
		templateUrl: 'pages/research/gestures-kinect.html'
	})
	.when('/research/voice-as-input', {
		templateUrl: 'pages/research/voice/voice-as-input.html'
	})
	.when('/research/voice-calibration', {
		templateUrl: 'pages/research/voice/voice-calibration.html'
	})
	.when('/research/perspectief', {
		templateUrl: 'pages/research/perspectief.html'
	})

	/*
	 * Architectuur
	 */
	.when('/architecture/architectuur', {
		templateUrl: 'pages/architecture/architectuur.html'
	})

	/*
	 * Documentatie
	 */
	.when('/docs/product', {
		templateUrl: 'pages/product.html'
	})
	.when('/docs/project', {
		templateUrl: 'pages/project.html'
	})

	/*
	 * Code Documentatie
	 */
	.when('/code-docs/interactions', {
		templateUrl: 'pages/code-docs/interactions.html'
	})

	/*
	 * Concepten
	 */
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

	/*
	 * Kinect
	 */
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
	.when('/kinect/testresultaten-voice', {
		templateUrl: 'pages/kinect/testresultaten_voice.html'
	})
	.when('/kinect/face-recognition', {
		templateUrl: 'pages/kinect/face_recognition.html'
	})

	/*
	 * Leap Motion
	 */
	.when('/leap/waarom', {
		templateUrl: 'pages/leapmotion/waarom.html'
	})
	.when('/leap/hoewerkthet', {
		templateUrl: 'pages/leapmotion/hoe_werkt_het.html'
	})
	.when('/leap/bevindingen', {
		templateUrl: 'pages/leapmotion/bevindingen.html'
	})
	.when('/leap/usertest', {
		templateUrl: 'pages/leapmotion/usertest.html'
	})

	/*
	 * Server
	 */
	.when('/server/waarom', {
		templateUrl: 'pages/server/waarom.html'
	})
	.when('/server/bevindingen', {
		templateUrl: 'pages/server/bevindingen.html'
	})
	.when('/server/setup', {
		templateUrl: 'pages/server/setup.html'
	})

	/*
	 * UI/UX
	 */
	.when('/uiux/testopzet', {
		templateUrl: 'pages/uiux/testopzet.html'
	})

	.otherwise('/');
});
