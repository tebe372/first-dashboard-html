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
            stylers: [
                { saturation: -100 },
                { lightness: getStyleVar("--map-lightness") },
            ],
        },
    ];

    var mapOptions = {
        zoom: 6,
        center: georgia,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "tehgrayz"],
        },
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    const locationTag = document.createElement("div");

    locationTag.className = "location-tag";
    locationTag.textContent = "Georgia";

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
        div.innerHTML = this.label;

        this.getPanes().overlayImage.appendChild(div);
        this.div = div;
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
