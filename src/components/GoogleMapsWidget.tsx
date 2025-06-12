
import { useEffect, useRef, useState } from 'react';

// Extend the Window interface to include google
declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options: any) => any;
        Marker: new (options: any) => any;
        InfoWindow: new (options: any) => any;
        LatLngBounds: new () => any;
        LatLng: new (lat: number, lng: number) => any;
        Size: new (width: number, height: number) => any;
        Point: new (x: number, y: number) => any;
      };
    };
  }
}

interface Location {
  lat: number;
  lng: number;
  title: string;
  address: string;
  hours: string;
}

const locations: Location[] = [
  {
    lat: 28.4595,
    lng: 77.0266,
    title: "AK Rubber Spares - Main Branch",
    address: "Shop No. 2, 434/8 Madanpuri Road, Opp. Laxmi Bazaar, New Colony, Gurgaon (HR) - 122001",
    hours: "Open Mon-Sat: 9 AM - 7 PM"
  },
  {
    lat: 28.6692,
    lng: 77.2309,
    title: "AK Rubber Spares - Delhi Store",
    address: "2789/5, Lothian Road, Near P.N.B. Bank, Kashmere Gate, Delhi - 110006",
    hours: "Open Mon-Sat: 11 AM - 7 PM"
  }
];

export default function GoogleMapsWidget() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [apiKey, setApiKey] = useState('');
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.google?.maps) return;

      try {
        // Center the map between both locations
        const centerLat = (locations[0].lat + locations[1].lat) / 2;
        const centerLng = (locations[0].lng + locations[1].lng) / 2;

        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 10,
          center: { lat: centerLat, lng: centerLng },
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
          styles: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [{ color: "#1a1a1a" }]
            },
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#ffffff" }]
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [{ color: "#374151" }]
            }
          ]
        });

        mapInstanceRef.current = map;

        // Add markers for each location
        locations.forEach((location) => {
          const marker = new window.google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: location.title,
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#f59e0b">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              `),
              scaledSize: new window.google.maps.Size(32, 32),
              anchor: new window.google.maps.Point(16, 32)
            }
          });

          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="color: #1f2937; max-width: 250px;">
                <h3 style="margin: 0 0 8px 0; font-weight: 600;">${location.title}</h3>
                <p style="margin: 0 0 4px 0; font-size: 14px;">${location.address}</p>
                <p style="margin: 0; font-size: 12px; color: #6b7280;">${location.hours}</p>
              </div>
            `
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        // Fit map to show both locations
        const bounds = new window.google.maps.LatLngBounds();
        locations.forEach(location => {
          bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
        });
        map.fitBounds(bounds);
        setMapError(false);
      } catch (error) {
        console.error('Error initializing Google Maps:', error);
        setMapError(true);
      }
    };

    const loadGoogleMaps = () => {
      if (!apiKey) return;

      if (window.google?.maps) {
        initMap();
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        script.onerror = () => setMapError(true);
        document.head.appendChild(script);
      }
    };

    if (apiKey) {
      loadGoogleMaps();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [apiKey]);

  if (!apiKey) {
    return (
      <div className="w-full h-96 rounded-lg border border-gray-700 bg-gray-800 flex flex-col items-center justify-center p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Google Maps Configuration</h3>
        <p className="text-gray-300 mb-4 text-center">
          To display the map, please enter your Google Maps API key:
        </p>
        <input
          type="text"
          placeholder="Enter Google Maps API Key"
          className="w-full max-w-md px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-4"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        <p className="text-xs text-gray-400 text-center">
          Get your API key from{' '}
          <a 
            href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Cloud Console
          </a>
        </p>
      </div>
    );
  }

  if (mapError) {
    return (
      <div className="w-full h-96 rounded-lg border border-gray-700 bg-gray-800 flex flex-col items-center justify-center p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Map Loading Error</h3>
        <p className="text-gray-300 mb-4 text-center">
          There was an error loading the Google Maps. Please check your API key and try again.
        </p>
        <button
          onClick={() => {
            setApiKey('');
            setMapError(false);
          }}
          className="px-4 py-2 bg-primary text-black rounded-md hover:bg-primary/90 transition-colors"
        >
          Enter New API Key
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-700">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
