cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.cordova.plugins.barcodescanner/www/barcodescanner.js",
        "id": "com.cordova.plugins.barcodescanner.BarcodeScanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "file": "plugins/com.cordova.plugins.barcodescanner/src/browser/BarcodeScannerProxy.js",
        "id": "com.cordova.plugins.barcodescanner.BarcodeScannerProxy",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
        "id": "org.apache.cordova.camera.Camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
        "id": "org.apache.cordova.camera.CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/www/Camera.js",
        "id": "org.apache.cordova.camera.camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.camera/src/browser/CameraProxy.js",
        "id": "org.apache.cordova.camera.CameraProxy",
        "runs": true
    },
    {
        "file": "plugins/com.cordova.plugins.sms/www/sms.js",
        "id": "com.cordova.plugins.sms.Sms",
        "clobbers": [
            "window.sms"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.cordova.plugins.barcodescanner": "2.2.0",
    "cordova-plugin-whitelist": "1.1.0",
    "org.apache.cordova.camera": "0.3.6",
    "org.apache.cordova.geolocation": "0.3.12",
    "com.cordova.plugins.sms": "0.1.2"
}
// BOTTOM OF METADATA
});