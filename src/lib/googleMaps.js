export function getGoogleMapsEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    // If client accidentally pastes an embed URL,
    // use it directly for the iframe.
    if (parsed.pathname.includes("/maps/embed")) {
      return url;
    }

    // Try to extract coordinates from Google Maps URL
    const coordinateMatch = url.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);

    if (coordinateMatch) {
      const lat = coordinateMatch[1];
      const lng = coordinateMatch[2];

      return `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
    }

    // Fallback
    return `https://www.google.com/maps?q=${encodeURIComponent(
      url,
    )}&output=embed`;
  } catch {
    return "";
  }
}
