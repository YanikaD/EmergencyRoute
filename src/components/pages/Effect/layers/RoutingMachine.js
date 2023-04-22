import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "./RoutingMachine.css"

const createRoutineMachineLayer = () => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(26.538626,-78.801586),
      L.latLng(26.537630729533845, -78.68523347616812)
      ],
    lineOptions: {
      styles: [{ color: "#ff0000", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    createMarker: function(i, waypoint, n) {
      // create a marker with a blue icon
      if (waypoint===L.latLng(26.537630729533845, -78.68523347616812)){
        return L.marker(waypoint.latLng, {
          icon: L.icon({
            iconUrl: "https://www.flaticon.com/free-icons/church",
            // shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41]
          }),
          draggable: true
        });
      }

      return L.marker(waypoint.latLng, {
        icon: L.icon({
          iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        }),
        draggable: true
      });
    }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
