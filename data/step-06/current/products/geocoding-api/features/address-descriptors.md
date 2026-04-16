---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.811Z"
product_name: "Geocoding API"
product_slug: "geocoding-api"
feature_name: "Address descriptors"
feature_slug: "address-descriptors"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.destinations/searchDestinations"
  - "https://developers.google.com/maps/documentation/geolocation"
  - "https://developers.google.com/maps/documentation/geocoding/geocoding"
  - "https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress"
keywords:
  - "address"
  - "descriptors"
  - "is"
  - "preview"
  - "that"
  - "adds"
  - "extra"
  - "location"
---

# Address descriptors

Product: Geocoding API
Coverage: MEDIUM

## Step 02 Summary

Address descriptors is a preview feature that adds extra location context using landmarks and areas.

## Extended Definition

Address descriptors is a preview feature that adds extra location context using landmarks and areas.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.destinations/searchDestinations](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.destinations/searchDestinations)
- [https://developers.google.com/maps/documentation/geolocation](https://developers.google.com/maps/documentation/geolocation)
- [https://developers.google.com/maps/documentation/geocoding/geocoding](https://developers.google.com/maps/documentation/geocoding/geocoding)
- [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress)

## Supporting Pages

### "Method: geocode.destinations.searchDestinations \_|\_ Geocoding API \_|\_\

- URL: [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.destinations/searchDestinations](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.destinations/searchDestinations)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, a place that represents a house or an apartment complex can be used as the primary query, but places that represent a locality or an administrative area cannot be used as the primary query. primary query can be only one of the following: place string The resource name of a place, in places/{placeId} format. addressQuery object ( SearchDestinationsRequest.AddressQuery ) A street address. locationQuery object ( SearchDestinationsRequest.LocationQuery ) A precise location.
- HTTP request Request body JSON representation Response body JSON representation Authorization scopes SearchDestinationsRequest.AddressQuery JSON representation SearchDestinationsRequest.LocationQuery JSON representation SearchDestinationsRequest.LocationQuery.PlaceFilter JSON representation PlaceView.StructureType SearchDestinationsRequest.LocationQuery.PlaceFilter.Addressability NavigationPoint.TravelMode Destination JSON representation PlaceView JSON representation Landmark JSON representation Landmark.Tag Entrance JSON representation Entrance.Tag NavigationPoint JSON representation NavigationPoint.Usage This method performs a destination lookup and returns a list of destinations.
- Request body The request body contains data with the following structure: JSON representation { "travelModes" : [ enum ( NavigationPoint.TravelMode ) ] , "languageCode" : string , "regionCode" : string , // Union field primary query can be only one of the following: "place" : string , "addressQuery" : { object ( SearchDestinationsRequest.AddressQuery ) } , "locationQuery" : { object ( SearchDestinationsRequest.LocationQuery ) } // End of list of possible types for union field primary query . } Fields travelModes[] enum ( NavigationPoint.TravelMode ) Optional.
- JSON representation { "place" : string , "placeId" : string , "displayName" : { object ( LocalizedText ) } , "primaryType" : string , "types" : [ string ] , "formattedAddress" : string , "postalAddress" : { object ( PostalAddress ) } , "structureType" : enum ( PlaceView.StructureType ) , "location" : { object ( LatLng ) } , "displayPolygon" : { object } } Fields place string This Place's resource name, in places/{placeId} format.

### Geolocation API overview \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/geolocation](https://developers.google.com/maps/documentation/geolocation)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Geolocation API is a service that accepts an HTTPS request with the cell tower and Wi-Fi access points that a mobile client can detect.
- The following example shows the request URL and an example request body: curl - X POST "https://www.googleapis.com/geolocation/v1/geolocate?key= YOUR API KEY " \ - H "Content-Type: application/json" \ - d \ ' { "homeMobileCountryCode" : 310 , "homeMobileNetworkCode" : 410 , "radioType" : "gsm" , "carrier" : "Vodafone" , "considerIp" : true } ' The API can return data for a number of common cellular data fields as indicated below.
- What you can do with the Geolocation API With the Geolocation API, you can use geospatial data from cell towers and WiFi nodes to get the location of a device that does not have built-in geolocation or GPS.
- For web browsers and mobile devices that already provide geolocation capabilities , use the following instead: Browsers with HTML5 geolocation : Use the Maps Javascript API.

### Geocode an address \_|\_ Geocoding API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/geocoding/geocoding](https://developers.google.com/maps/documentation/geocoding/geocoding)
- Source ID: `site-docs-root`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The complete JSON object is in the form: { "results" : [ { "place" : "//places.googleapis.com/places/ChIJF4Yf2Ry7j4AR 1AkytDyAE" , "placeId" : "ChIJF4Yf2Ry7j4AR 1AkytDyAE" , "location" : { "latitude" : 37.422010799999995 , "longitude" : -122.08474779999999 }, "granularity" : "ROOFTOP" , "viewport" : { "low" : { "latitude" : 37.420656719708511 , "longitude" : -122.08547523029148 }, "high" : { "latitude" : 37.4233546802915 , "longitude" : -122.0827772697085 } }, "formattedAddress" : "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA" , "postalAddress" : { "regionCode" : "US" , "languageCode" : "en" , "postalCode" : "94043" , "administrativeArea" : "CA" , "locality" : "Mountain View" , "addressLines" : [ "1600 Amphitheatre Pkwy" ] }, "addressComponents" : [ { "longText" : "1600" , "shortText" : "1600" , "types" : [ "street number" ] }, { "longText" : "Amphitheatre Parkway" , "shortText" : "Amphitheatre Pkwy" , "types" : [ "route" ], "languageCode" : "en" }, ... ], "types" : [ "street address" ], "plusCode" : { "globalCode" : "849VCWC8+R4" , "compoundCode" : "CWC8+R4 Mountain View, CA, USA" } } ] } Required parameters address — The street address or Plus Code that you want to geocode.
- Box 13 San Francisco" Names of businesses, chains, or categories combined with locations where these entities are not available "Tesco near Dallas, Texas" Ambiguous queries with multiple interpretations "Charger drop-off" Historical names no longer in use "Middlesex United Kingdom" Non-geospatial elements or intent "How many boats are in Ventura Harbor?" Unofficial or vanity names "The Jenga" "The Helter Skelter" For example, the following example passes the URL encoded address string "1600 Amphitheatre Parkway, Mountain View, CA": https://geocode.googleapis.com/v4/geocode/address/ 1600+Amphitheatre+Parkway,+Mountain+View,+CA ?key= API KEY Notice that the "+" character in the URL is converted to a space.
- For example, a geocode request for the address "Washington" can return results for Washington, D.C. and for the US state of Washington: https://geocode.googleapis.com/v4/geocode/address/Washington?key= API KEY The response is in the form: { "results" : [ { "place" : "//places.googleapis.com/places/ChIJW-T2Wt7Gt4kRKl2I1CJFUsI" , "placeId" : "ChIJW-T2Wt7Gt4kRKl2I1CJFUsI" , "location" : { "latitude" : 38.9071923 , "longitude" : -77.0368707 }, "granularity" : "APPROXIMATE" , "viewport" : { "low" : { "latitude" : 38.7916449 , "longitude" : -77.119759 }, "high" : { "latitude" : 38.9958641 , "longitude" : -76.909393 } }, "bounds" : { "low" : { "latitude" : 38.7916449 , "longitude" : -77.119759 }, "high" : { "latitude" : 38.9958641 , "longitude" : -76.909393 } }, "formattedAddress" : "Washington, DC, USA" , "addressComponents" : [ { "longText" : "Washington" , "shortText" : "Washington" , "types" : [ "locality" , "political" ], "languageCode" : "en" }, ... ], "types" : [ "locality" , "political" ] }, { "place" : "//places.googleapis.com/places/ChIJ-bDD5 lhVQRuvNfbGh4QpQ" , "placeId" : "ChIJ-bDD5 lhVQRuvNfbGh4QpQ" , "location" : { "latitude" : 47.7510741 , "longitude" : -120.7401386 }, "granularity" : "APPROXIMATE" , "viewport" : { "low" : { "latitude" : 45.543541 , "longitude" : -124.84897389999999 }, "high" : { "latitude" : 49.0024945 , "longitude" : -116.91607109999998 } }, "bounds" : { "low" : { "latitude" : 45.543541 , "longitude" : -124.84897389999999 }, "high" : { "latitude" : 49.0024442 , "longitude" : -116.91607109999998 } }, "formattedAddress" : "Washington, USA" , "addressComponents" : [ { "longText" : "Washington" , "shortText" : "WA" , "types" : [ "administrative area level 1" , "political" ], "languageCode" : "en" }, ... ], "types" : [ "administrative area level 1" , "political" ] } ] } However, adding a locationBias parameter defining a bounding box around the north-east part of the US results in this geocode returning only the city of Washington, D.C.: https://geocode.googleapis.com/v4/geocode/address/Washington ?locationBias.rectangle.low.latitude=36.47 & locationBias.rectangle.low.longitude=-84.72 & locationBias.rectangle.high.latitude=43.39 & locationBias.rectangle.high.longitude=-65.90 & key= API KEY Region biasing In a geocoding request, you can instruct the Geocoding service to return results biased to a particular region by using the regionCode parameter.
- For example, a geocode for "Toledo" returns results for the US and for Spain: https://geocode.googleapis.com/v4/geocode/address/Toledo?key= API KEY Response: { "results" : [ { "place" : "//places.googleapis.com/places/ChIJeU4e C2HO4gRRcM6RZ IPHw" , "placeId" : "ChIJeU4e C2HO4gRRcM6RZ IPHw" , "location" : { "latitude" : 41.652805199999996 , "longitude" : -83.5378674 }, "granularity" : "APPROXIMATE" , "viewport" : { "low" : { "latitude" : 41.579513 , "longitude" : -83.6944089 }, "high" : { "latitude" : 41.733036 , "longitude" : -83.4493851 } }, "bounds" : { "low" : { "latitude" : 41.579513 , "longitude" : -83.6944089 }, "high" : { "latitude" : 41.733036 , "longitude" : -83.4493851 } }, "formattedAddress" : "Toledo, OH, USA" , "addressComponents" : [ { "longText" : "Toledo" , "shortText" : "Toledo" , "types" : [ "locality" , "political" ], "languageCode" : "en" }, ... ], "types" : [ "locality" , "political" ] }, { "place" : "//places.googleapis.com/places/ChIJkwyrlqwLag0RiQIn2fdIshM" , "placeId" : "ChIJkwyrlqwLag0RiQIn2fdIshM" , "location" : { "latitude" : 39.8628296 , "longitude" : -4.0273067 }, "granularity" : "APPROXIMATE" , "viewport" : { "low" : { "latitude" : 39.8116682 , "longitude" : -4.179933 }, "high" : { "latitude" : 39.9251319 , "longitude" : -3.8148935 } }, "bounds" : { "low" : { "latitude" : 39.8116682 , "longitude" : -4.179933 }, "high" : { "latitude" : 39.9251319 , "longitude" : -3.8148935 } }, "formattedAddress" : "Toledo, España" , "addressComponents" : [ { "longText" : "Toledo" , "shortText" : "Toledo" , "types" : [ "administrative area level 4" , "political" ], "languageCode" : "es" }, ... ], "types" : [ "administrative area level 4" , "political" ] }, ... ] } A geocoding request for "Toledo" with regionCode=es (Spain) only returns results from Spain: https://geocode.googleapis.com/v4/geocode/address/Toledo? regionCode=es & key= API KEY Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Method: geocode.address.geocodeAddress \_|\_ Geocoding API \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress](https://developers.google.com/maps/documentation/geocoding/reference/rest/v4/geocode.address/geocodeAddress)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Authorization scopes Requires one of the following OAuth scopes: https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/maps-platform.geocode https://www.googleapis.com/auth/maps-platform.geocode.address Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP request Query parameters Request body Response body Authorization scopes This method performs an address geocode, which maps an address to a LatLng.
- This location serves as a bias which means results around the given location are preferred. languageCode string Optional.
- HTTP request GET https://geocode.googleapis.com/v4/geocode/address The URL uses gRPC Transcoding syntax.

