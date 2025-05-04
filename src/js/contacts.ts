import type { YMapLocationRequest, Margin } from "ymaps3";
import customization from "./customization";

async function initMap(): Promise<void> {
  const mapElement = document.querySelector<HTMLElement>(
    ".contacts__map-element"
  );
  if (!mapElement) return;
  const lat = Number(mapElement.parentElement?.getAttribute("data-lat"));
  const lng = Number(mapElement.parentElement?.getAttribute("data-lng"));
  const zoom = mapElement?.parentElement?.hasAttribute("data-zoom")
    ? Number(mapElement?.parentElement?.getAttribute("data-zoom"))
    : 14;
  const pinUrl = mapElement.parentElement?.getAttribute("data-pin-url");
  if (!lat || isNaN(lat) || !lng || isNaN(lng)) return;
  await ymaps3.ready;

  const LOCATION: YMapLocationRequest = {
    center: [lng, lat],
    zoom: zoom,
  };

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    YMapControls,
  } = ymaps3;
  const { YMapZoomControl } = await ymaps3.import(
    "@yandex/ymaps3-controls@0.0.1"
  );

  const map = new YMap(mapElement, {
    location: LOCATION,
    behaviors: ["drag", "pinchZoom"],
    margin: !window.matchMedia("(max-width: 640px)").matches
      ? [0, mapElement.offsetWidth / 2.5, 0, 0]
      : [mapElement.offsetHeight / 2.5, 0, 0, 0],
  });

  map.addChild(
    new YMapDefaultSchemeLayer({
      customization: customization,
    })
  );
  map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));
  const controls = new YMapControls({
    position: "bottom left",
    orientation: "vertical",
  });
  controls.addChild(
    new YMapZoomControl({
      easing: "linear",
    })
  );
  map.addChild(controls);

  const markerElement = document.createElement("div");
  markerElement.className = "contacts__marker";
  markerElement.innerHTML = `
        <img src="${pinUrl}" alt="Метка" class="contacts__map-pin">
      `;

  const marker = new YMapMarker(
    {
      coordinates: [lng, lat],
      draggable: false,
      mapFollowsOnDrag: false,
    },
    markerElement
  );
  map.addChild(marker);
}

export default function contacts() {
  initMap();
}
