// function initMap() {
//     //var location = { lat: 33.8034, lng: -84.3963 };
//     var location = { lat: 41.716667, lng: 44.783333 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: location,
//         zoom: 8,
//         mapId: "4504f8b37365c3d0",
//         disableDefaultUI: true,
//     });
//     const locationTag = document.createElement("div");

//     locationTag.className = "location-tag";
//     locationTag.textContent = "Georgia";

//     const markerView = new google.maps.marker.AdvancedMarkerView({
//         map,
//         position: location,
//         content: locationTag,
//     });
// }
// window.addEventListener("resize", function () {
//     google.maps.event.trigger(map, "resize");
// });

function initMap() {
    var markers = [
        {
            location: new google.maps.LatLng(42.34964, 42.99947),
            label: "Tkibuli",
        },
        {
            location: new google.maps.LatLng(42.3452778, 43.4194444),
            label: "Sachkhere",
        },
        {
            location: new google.maps.LatLng(42.286339, 43.276051),
            label: "Chiatura",
        },
        {
            location: new google.maps.LatLng(42.18311, 42.97724),
            label: "Trejola",
        },
        {
            location: new google.maps.LatLng(41.98422, 44.11578),
            label: "Gori",
        },
    ];
    var map;
    var georgia = new google.maps.LatLng(41.716667, 44.783333);

    var stylez = [
        {
            featureType: "all",
            elementType: "all",
            stylers: [{ saturation: -100 }],
        },
    ];

    var mapOptions = {
        zoom: 6,
        center: georgia,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "tehgrayz"],
        },
        // mapId: "4504f8b37365c3d0",
        // mapId: "4504f8b37365c3d0",
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const locationTag = document.createElement("div");

    locationTag.className = "location-tag";
    locationTag.textContent = "Georgia";

    // const markerView = new google.maps.marker.AdvancedMarkerView({
    //     map,
    //     position: location,
    //     content: locationTag,
    // });
    // var marker = new google.maps.Marker({
    //     position: location,
    //     map: map,
    //     title: "San Francisco",
    // });
    var mapType = new google.maps.StyledMapType(stylez, { name: "Grayscale" });
    map.mapTypes.set("tehgrayz", mapType);
    map.setMapTypeId("tehgrayz");

    function CustomOverlay(position, label, map, overlays) {
        this.position = position;
        this.label = label;
        this.map = map;
        this.overlays = overlays;
        this.setMap(map);
    }

    CustomOverlay.prototype = new google.maps.OverlayView();

    CustomOverlay.prototype.onAdd = function () {
        var div = document.createElement("div");
        div.className = "location-tag";
        // div.textContent = "Georgia";
        div.innerHTML = this.label;

        this.getPanes().overlayImage.appendChild(div);
        this.div = div;
        //  this.checkOverlaps();
    };

    CustomOverlay.prototype.draw = function () {
        var point = this.getProjection().fromLatLngToDivPixel(this.position);
        if (point) {
            this.div.style.left = point.x + "px";
            this.div.style.top = point.y + "px";
        }
    };

    CustomOverlay.prototype.onRemove = function () {
        this.div.parentNode.removeChild(this.div);
        this.div = null;
    };

    // CustomOverlay.prototype.checkOverlaps = function () {
    //     var self = this;
    //     var offset = 30;
    //     var overlaps = true;

    //     while (overlaps) {
    //         overlaps = false;
    //         console.log("Overlaps : ", overlaps);
    //         for (var i = 0; i < self.overlays.length; i++) {
    //             if (self.overlays[i] !== self) {
    //                 var position = self.overlays[i].position;
    //                 var point = self
    //                     .getProjection()
    //                     .fromLatLngToDivPixel(position);

    //                 if (
    //                     point &&
    //                     Math.abs(point.x - parseInt(self.div.style.left)) <
    //                         offset &&
    //                     Math.abs(point.y - parseInt(self.div.style.top)) <
    //                         offset
    //                 ) {
    //                     overlaps = true;
    //                     self.position = new google.maps.LatLng(
    //                         self.position.lat() + 0.0002,
    //                         self.position.lng() + 0.0002
    //                     );
    //                     break;
    //                 }
    //             }
    //         }
    //     }

    //     self.draw();
    // };

    var overlays = [];
    markers.map((item) => {
        var marker = new CustomOverlay(
            item.location,
            item.label,
            map,
            overlays
        );
        overlays.push(marker);
    });
}

window.initMap = initMap;
