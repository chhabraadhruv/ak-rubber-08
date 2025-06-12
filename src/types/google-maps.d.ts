
declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element | null, opts?: MapOptions);
      fitBounds(bounds: LatLngBounds, padding?: number | Padding): void;
      setZoom(zoom: number): void;
      getZoom(): number;
      setCenter(latlng: LatLng | LatLngLiteral): void;
      getCenter(): LatLng;
      panTo(latlng: LatLng | LatLngLiteral): void;
      getBounds(): LatLngBounds | undefined;
      getDiv(): Element;
      setOptions(options: MapOptions): void;
    }

    interface MapOptions {
      center?: LatLng | LatLngLiteral;
      zoom?: number;
      mapTypeControl?: boolean;
      streetViewControl?: boolean;
      fullscreenControl?: boolean;
      zoomControl?: boolean;
      styles?: MapTypeStyle[];
    }

    interface MapTypeStyle {
      featureType?: string;
      elementType?: string;
      stylers?: any[];
    }

    interface Padding {
      top: number;
      right: number;
      bottom: number;
      left: number;
    }

    class Marker {
      constructor(opts?: MarkerOptions);
      addListener(eventName: string, handler: Function): void;
      setPosition(latlng: LatLng | LatLngLiteral): void;
      getPosition(): LatLng | undefined;
      setMap(map: Map | null): void;
      setTitle(title: string): void;
      getTitle(): string;
    }

    interface MarkerOptions {
      position?: LatLng | LatLngLiteral;
      map?: Map;
      title?: string;
      icon?: string | Icon;
    }

    interface Icon {
      url: string;
      scaledSize?: Size;
      anchor?: Point;
    }

    class InfoWindow {
      constructor(opts?: InfoWindowOptions);
      open(map?: Map, anchor?: Marker): void;
      close(): void;
      setContent(content: string | Element): void;
    }

    interface InfoWindowOptions {
      content?: string | Element;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }

    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    class LatLngBounds {
      constructor();
      extend(point: LatLng | LatLngLiteral): LatLngBounds;
    }

    class Size {
      constructor(width: number, height: number);
    }

    class Point {
      constructor(x: number, y: number);
    }
  }
}

export {};
