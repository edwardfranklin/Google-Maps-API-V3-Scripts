// Google Viewport Management Too Many Markers! Solution to https://developers.google.com/maps/articles/toomanymarkers?hl=en#viewportmarkermanagement - Edward Franklin http://www.franklinsconsultancy.com

markerDrag = false;
google.maps.event.addListener(map, 'idle', function() {
if(!markerDrag) {
updateMap();
}
});
google.maps.event.addListener(marker, 'dragstart', function() {
markerDrag = true;
});
google.maps.event.addListener(marker, 'dragend', function() {

markerDrag = false;
});