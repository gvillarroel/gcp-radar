---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.044Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "postalAddress"
feature_slug: "postaladdress"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/text-search"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.type"
keywords:
  - "postaladdress"
  - "field"
  - "that"
  - "provides"
  - "postal"
  - "address"
  - "information"
  - "for"
---

# postalAddress

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

A field that provides postal-service address information for search and place details requests.

## Extended Definition

A field that provides postal-service address information for search and place details requests.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- [https://developers.google.com/maps/documentation/places/web-service/text-search](https://developers.google.com/maps/documentation/places/web-service/text-search)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.type](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.type)

## Supporting Pages

### REST Resource: places \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- Source ID: `site-api-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "id" : string , "displayName" : { object ( LocalizedText ) } , "types" : [ string ] , "primaryType" : string , "primaryTypeDisplayName" : { object ( LocalizedText ) } , "googleMapsTypeLabel" : { object ( LocalizedText ) } , "nationalPhoneNumber" : string , "internationalPhoneNumber" : string , "formattedAddress" : string , "shortFormattedAddress" : string , "postalAddress" : { object ( PostalAddress ) } , "addressComponents" : [ { object ( AddressComponent ) } ] , "plusCode" : { object ( PlusCode ) } , "location" : { object ( LatLng ) } , "viewport" : { object ( Viewport ) } , "rating" : number , "googleMapsUri" : string , "websiteUri" : string , "reviews" : [ { object ( Review ) } ] , "regularOpeningHours" : { object ( OpeningHours ) } , "timeZone" : { object ( TimeZone ) } , "photos" : [ { object ( Photo ) } ] , "adrFormatAddress" : string , "businessStatus" : enum ( BusinessStatus ) , "openingDate" : { object ( Date ) } , "priceLevel" : enum ( PriceLevel ) , "attributions" : [ { object ( Attribution ) } ] , "iconMaskBaseUri" : string , "iconBackgroundColor" : string , "currentOpeningHours" : { object ( OpeningHours ) } , "currentSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "regularSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "editorialSummary" : { object ( LocalizedText ) } , "paymentOptions" : { object ( PaymentOptions ) } , "parkingOptions" : { object ( ParkingOptions ) } , "subDestinations" : [ { object ( SubDestination ) } ] , "fuelOptions" : { object ( FuelOptions ) } , "evChargeOptions" : { object ( EVChargeOptions ) } , "generativeSummary" : { object ( GenerativeSummary ) } , "containingPlaces" : [ { object ( ContainingPlace ) } ] , "addressDescriptor" : { object ( AddressDescriptor ) } , "googleMapsLinks" : { object ( GoogleMapsLinks ) } , "priceRange" : { object ( PriceRange ) } , "reviewSummary" : { object ( ReviewSummary ) } , "evChargeAmenitySummary" : { object ( EvChargeAmenitySummary ) } , "neighborhoodSummary" : { object ( NeighborhoodSummary ) } , "consumerAlert" : { object ( ConsumerAlert ) } , "movedPlace" : string , "movedPlaceId" : string , "utcOffsetMinutes" : integer , "userRatingCount" : integer , "takeout" : boolean , "delivery" : boolean , "dineIn" : boolean , "curbsidePickup" : boolean , "reservable" : boolean , "servesBreakfast" : boolean , "servesLunch" : boolean , "servesDinner" : boolean , "servesBeer" : boolean , "servesWine" : boolean , "servesBrunch" : boolean , "servesVegetarianFood" : boolean , "outdoorSeating" : boolean , "liveMusic" : boolean , "menuForChildren" : boolean , "servesCocktails" : boolean , "servesDessert" : boolean , "servesCoffee" : boolean , "goodForChildren" : boolean , "allowsDogs" : boolean , "restroom" : boolean , "goodForGroups" : boolean , "goodForWatchingSports" : boolean , "accessibilityOptions" : { object ( AccessibilityOptions ) } , "pureServiceAreaBusiness" : boolean } Fields name string This Place's resource name, in places/{placeId} format.
- Resource: Place JSON representation LocalizedText JSON representation PostalAddress JSON representation AddressComponent JSON representation PlusCode JSON representation LatLng JSON representation Viewport JSON representation Review JSON representation AuthorAttribution JSON representation Date JSON representation OpeningHours JSON representation Period JSON representation Point JSON representation SecondaryHoursType SpecialDay JSON representation TimeZone JSON representation Photo JSON representation BusinessStatus PriceLevel Attribution JSON representation PaymentOptions JSON representation ParkingOptions JSON representation SubDestination JSON representation AccessibilityOptions JSON representation FuelOptions JSON representation FuelPrice JSON representation FuelType Money JSON representation EVChargeOptions JSON representation ConnectorAggregation JSON representation EVConnectorType GenerativeSummary JSON representation ContainingPlace JSON representation AddressDescriptor JSON representation Landmark JSON representation SpatialRelationship Area JSON representation Containment GoogleMapsLinks JSON representation PriceRange JSON representation ReviewSummary JSON representation EvChargeAmenitySummary JSON representation ContentBlock JSON representation NeighborhoodSummary JSON representation ConsumerAlert JSON representation Details JSON representation Link JSON representation Methods Resource: Place All the information representing a Place.
- Because values in addressLines do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear.
- The type label may be different from the primary type display name and may not be a supported type in Places API Place Types table . nationalPhoneNumber string A human-readable phone number for the place, in national format. internationalPhoneNumber string A human-readable phone number for the place, in international format. formattedAddress string A full, human-readable address for this place. shortFormattedAddress string A short, human-readable address for this place. postalAddress object ( PostalAddress ) The address in postal address format. addressComponents[] object ( AddressComponent ) Repeated components for each locality level.

### Package google.maps.places.v1 \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- Source ID: `site-api-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- The type label may be different from the primary type display name and may not be a supported type in Places API Place Types table . national phone number string A human-readable phone number for the place, in national format. international phone number string A human-readable phone number for the place, in international format. formatted address string A full, human-readable address for this place. short formatted address string A short, human-readable address for this place. postal address PostalAddress The address in postal address format. address components[] AddressComponent Repeated components for each locality level.
- Fields type EVConnectorType The connector type of this aggregation. max charge rate kw double The static max charging rate in kw of each connector in the aggregation. count int32 Number of connectors in this aggregation. availability last update time Timestamp The timestamp when the connector availability information in this aggregation was last updated. available count int32 Number of connectors in this aggregation that are currently available. out of service count int32 Number of connectors in this aggregation that are currently out of service.
- This field includes the special days subfield of all hours, set for dates that have exceptional hours. current secondary opening hours[] OpeningHours Contains an array of entries for the next seven days including information about secondary hours of a business.
- This field includes the special days subfield of all hours, set for dates that have exceptional hours. regular secondary opening hours[] OpeningHours Contains an array of entries for information about regular secondary hours of a business.

### Text Search (New) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/text-search](https://developers.google.com/maps/documentation/places/web-service/text-search)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- The following fields trigger the Text Search Pro SKU : places.accessibilityOptions places.addressComponents places.addressDescriptor places.adrFormatAddress places.businessStatus places.containingPlaces places.displayName places.formattedAddress places.googleMapsLinks places.googleMapsUri places.iconBackgroundColor places.iconMaskBaseUri places.location places.openingDate places.photos places.plusCode places.postalAddress places.primaryType places.primaryTypeDisplayName places.pureServiceAreaBusiness places.shortFormattedAddress places.searchUri places.subDestinations places.timeZone places.types places.utcOffsetMinutes places.viewport Address descriptors are generally available for customers in India and are experimental elsewhere.
- In this example, you include addressDescriptors in the field mask: curl -X POST -d '{ "textQuery": "clothes", "maxResultCount": 5, "locationBias": { "circle": { "center": { "latitude": 37.321328, "longitude": -121.946275 } } }, "rankPreference":"RANK PREFERENCE UNSPECIFIED" }' \ -H 'Content-Type: application/json' \ -H "X-Goog-Api-Key: API KEY " \ -H "X-Goog-FieldMask: places.displayName, places.addressDescriptor " \ https://places.googleapis.com/v1/places:searchText The response includes the place specified in the request, a list of nearby landmarks and their distance from the place, and a list of areas and their containment relationship to the place: { "places" : [ { "displayName" : { "text" : "Urban Outfitters" , "languageCode" : "en" }, "addressDescriptor" : { "landmarks" : [ { "name" : "places/ChIJVVVVUB7Lj4ARXyb4HFVDV8s" , "placeId" : "ChIJVVVVUB7Lj4ARXyb4HFVDV8s" , "displayName" : { "text" : "Westfield Valley Fair" , "languageCode" : "en" }, "types" : [ "clothing store" , "department store" , "establishment" , "food" , "movie theater" , "point of interest" , "restaurant" , "shoe store" , "shopping mall" , "store" ], "spatialRelationship" : "WITHIN" , "straightLineDistanceMeters" : 133.72855 }, { "name" : "places/ChIJ62 oCR7Lj4AR MGWkSPotD4" , "placeId" : "ChIJ62 oCR7Lj4AR MGWkSPotD4" , "displayName" : { "text" : "Nordstrom" , "languageCode" : "en" }, "types" : [ "clothing store" , "department store" , "establishment" , "point of interest" , "shoe store" , "store" ], "straightLineDistanceMeters" : 250.99161 }, { "name" : "places/ChIJ8WvuSB7Lj4ARFyHppkxDRQ4" , "placeId" : "ChIJ8WvuSB7Lj4ARFyHppkxDRQ4" , "displayName" : { "text" : "Macy's" , "languageCode" : "en" }, "types" : [ "clothing store" , "department store" , "establishment" , "point of interest" , "store" ], "straightLineDistanceMeters" : 116.24196 }, { "name" : "places/ChIJ9d3plB Lj4ARzyaU5bn80WY" , "placeId" : "ChIJ9d3plB Lj4ARzyaU5bn80WY" , "displayName" : { "text" : "Bank of America Financial Center" , "languageCode" : "en" }, "types" : [ "bank" , "establishment" , "finance" , "point of interest" ], "straightLineDistanceMeters" : 121.61515 }, { "name" : "places/ChIJaXCjxvXLj4ARCPmQpvJ52Lw" , "placeId" : "ChIJaXCjxvXLj4ARCPmQpvJ52Lw" , "displayName" : { "text" : "Bloomingdale's" , "languageCode" : "en" }, "types" : [ "clothing store" , "department store" , "establishment" , "furniture store" , "home goods store" , "point of interest" , "shoe store" , "store" ], "straightLineDistanceMeters" : 81.32396 } ], "areas" : [ { "name" : "places/ChIJb3F-EB7Lj4ARnHApQ Hu1gI" , "placeId" : "ChIJb3F-EB7Lj4ARnHApQ Hu1gI" , "displayName" : { "text" : "Westfield Valley Fair" , "languageCode" : "en" }, "containment" : "WITHIN" }, { "name" : "places/ChIJXYuykB Lj4AR1Ot8nU5q26Q" , "placeId" : "ChIJXYuykB Lj4AR1Ot8nU5q26Q" , "displayName" : { "text" : "Valley Fair" , "languageCode" : "en" }, "containment" : "WITHIN" }, { "name" : "places/ChIJtYoUX2DLj4ARKoKOb1G0CpM" , "placeId" : "ChIJtYoUX2DLj4ARKoKOb1G0CpM" , "displayName" : { "text" : "Central San Jose" , "languageCode" : "en" }, "containment" : "WITHIN" } ] } }, /.../ ] } Find businesses opening in the future The following example shows a Text Search (New) request for businesses opening in the future in New Meadows, Idaho: curl -X POST \ -H "Content-Type: application/json" \ -H "X-Goog-Api-Key: API KEY " \ -H "X-Goog-FieldMask: places.id,places.displayName, places.businessStatus,places.openingDate " \ -d '{ "textQuery": "Roberts Greenhouse and Tree Farm", "includeFutureOpeningBusinesses": true , "maxResultCount": 20, "locationBias": { "circle": { "center": {"latitude": 44.9755100, "longitude": -116.2842180}, "radius": 20 } } }' \ "https://places.googleapis.com/v1/places:searchText" The response includes businesses that will open in the future, along with their business status and anticipated opening date: { "places" : [ { "id" : "ChIJp1-VoKWJplQRMz8g-7Wa3Do" , "businessStatus" : "FUTURE OPENING" , "displayName" : { "text" : "Roberts Greenhouse and Tree Farm" , "languageCode" : "en" }, "openingDate" : { "year" : 2026 , "month" : 4 , "day" : 15 } } ] } Try it!
- This request only returns the first 10 results for places that are open. curl -X POST -d '{ "textQuery" : "vegetarian food", "pageSize" : "10", "locationRestriction": { "rectangle": { "low": { "latitude": 40.477398, "longitude": -74.259087 }, "high": { "latitude": 40.91618, "longitude": -73.70018 } } } }' \ -H 'Content-Type: application/json' \ -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.id,places.formattedAddress' \ 'https://places.googleapis.com/v1/places:searchText' Bias to an area using locationBias The following example shows a Text Search (New) request for "vegetarian food" biased to a location within 500 meters of a point in downtown San Francisco.
- This request only returns the first 10 results for places that are open. curl -X POST -d '{ "textQuery" : "vegetarian food", "openNow": true, "pageSize": 10, "locationBias": { "circle": { "center": {"latitude": 37.7937, "longitude": -122.3965}, "radius": 500.0 } }, }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.displayName,places.formattedAddress' \ 'https://places.googleapis.com/v1/places:searchText' Search for EV chargers with a minimum charging rate Use minimumChargingRateKw and connectorTypes to search for places with available chargers that are compatible with your EV.

### Package google.type \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.type](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.type)
- Source ID: `site-api-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Because values in address lines do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear.
- PostalAddress Represents a postal address, such as for postal delivery or payments addresses.
- Fields revision int32 The schema revision of the PostalAddress .
- Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States). sorting code string Optional.

