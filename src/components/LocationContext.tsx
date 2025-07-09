'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Grote plaatsen en hun provincies
const LOCATIONS = [
  { city: 'Heerlen', lat: 50.888174, lon: 5.979499, province: 'Limburg' },
  { city: 'Maastricht', lat: 50.851368, lon: 5.690973, province: 'Limburg' },
  { city: 'Roermond', lat: 51.194167, lon: 5.9875, province: 'Limburg' },
  { city: 'Sittard', lat: 51.000833, lon: 5.866944, province: 'Limburg' },
  { city: 'Venlo', lat: 51.370374, lon: 6.172403, province: 'Limburg' },
  // Voeg hier meer steden/provincies toe indien gewenst
];

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    0.5 - Math.cos(dLat) / 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    (1 - Math.cos(dLon)) / 2;
  return R * 2 * Math.asin(Math.sqrt(a));
}

interface LocationContextType {
  city: string;
  province: string;
  geoTried: boolean;
}

const LocationContext = createContext<LocationContextType>({
  city: 'Heerlen',
  province: 'Limburg',
  geoTried: false,
});

export function LocationProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState('Heerlen');
  const [province, setProvince] = useState('Limburg');
  const [geoTried, setGeoTried] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoTried(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let minDist = Infinity;
        let closest = LOCATIONS[0];
        for (const loc of LOCATIONS) {
          const dist = getDistance(latitude, longitude, loc.lat, loc.lon);
          if (dist < minDist) {
            minDist = dist;
            closest = loc;
          }
        }
        setCity(closest.city);
        setProvince(closest.province);
        setGeoTried(true);
      },
      () => { setGeoTried(true); },
      { enableHighAccuracy: false, timeout: 5000 }
    );
  }, []);

  return (
    <LocationContext.Provider value={{ city, province, geoTried }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
} 