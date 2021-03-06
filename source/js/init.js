const moduleName = `angular-image-cropper`;

angular.module(moduleName, [])
	.factory(`cropHost`, require(`./classes/crop-host`))
	.factory(`cropPubSub`, require(`./classes/crop-pubsub`))
	.factory(`cropAreaCircle`, require(`./classes/crop-area-circle`))
	.factory(`cropAreaSquare`, require(`./classes/crop-area-square`))
	.factory(`cropAreaRectangle`, require(`./classes/crop-area-rectangle`))
	.service(`cropEXIF`, require(`./classes/crop-exif`))
	.factory(`cropArea`, require(`./classes/crop-area`))
	.factory(`cropCanvas`, require(`./classes/crop-canvas`))
	.directive(`uiCropper`, require(`./ui-cropper`));

module.exports = moduleName;