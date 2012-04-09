var overlays = ['lower'];
var offset = 0.5;
var scale = 0.3;

function showLowerThird() {
  hideLowerThird();
  var imageURL = document.getElementById('urlInput').value;
  console.log("URL: " + imageURL);
  var lowerthird = gapi.hangout.av.effects.createImageResource(imageURL);
  overlays['lower'] = lowerthird.createFaceTrackingOverlay(
      {'trackingFeature':
       gapi.hangout.av.effects.FaceTrackingFeature.NOSE_ROOT,
	   'offset': {0, 0},
       'scale': 0.3});
	   
  overlays['lower'].setVisible(true);
  overlays['lower'].setScale(parseFloat(scale));
  overlays['lower'].setOffset(0, parseFloat(offset));
  console.log("Image: " + lowerthird);
}

function hideLowerThird() {
  for (var index in overlays) {
    overlays[index].setVisible(false);
  }
}

function init() {
  gapi.hangout.onApiReady.add(function(eventObj) {
	if (eventObj.isApiReady) {
        console.log('Hangout Lower Third loaded');
	}
  });
}
gadgets.util.registerOnLoadHandler(init);