---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.042Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "movedPlaceId"
feature_slug: "movedplaceid"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/place-details"
  - "https://developers.google.com/maps/documentation/places/web-service/place-id"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places"
  - "https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place"
keywords:
  - "movedplaceid"
  - "field"
  - "that"
  - "returns"
  - "the"
  - "place"
  - "id"
  - "of"
---

# movedPlaceId

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

A field that returns the place ID of a relocated place's next location.

## Extended Definition

A field that returns the place ID of a relocated place's next location.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/place-details](https://developers.google.com/maps/documentation/places/web-service/place-details)
- [https://developers.google.com/maps/documentation/places/web-service/place-id](https://developers.google.com/maps/documentation/places/web-service/place-id)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- [https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place)

## Supporting Pages

### Place Details (New) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/place-details](https://developers.google.com/maps/documentation/places/web-service/place-details)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For places that have moved to a new location , Place Details (New) returns CLOSED PERMANENTLY in the businessStatus field and returns the new location in the movedPlace and movedPlaceId fields of the response body.
- For places that are permanently closed , Place Details (New) returns CLOSED PERMANENTLY in the businessStatus field and omits the movedPlace and movedPlaceId fields in the response body.
- In this example, you include addressDescriptors in the field mask: curl -X GET https://places.googleapis.com/v1/places/ChIJ8WvuSB7Lj4ARFyHppkxDRQ4 \ -H 'Content-Type: application/json' -H "X-Goog-Api-Key: API KEY " \ -H "X-Goog-FieldMask: name,displayName, addressDescriptor " The response includes the place specified in the request, a list of nearby landmarks and their distance from the place, and a list of areas and their containment relationship to the place: { "name" : "places/ChIJ8WvuSB7Lj4ARFyHppkxDRQ4" , "displayName" : { "text" : "Macy's" , "languageCode" : "en" }, "addressDescriptor" : { "landmarks" : [ { "name" : "places/ChIJVVVVUB7Lj4ARXyb4HFVDV8s" , "placeId" : "ChIJVVVVUB7Lj4ARXyb4HFVDV8s" , "displayName" : { "text" : "Westfield Valley Fair" , "languageCode" : "en" }, "types" : [ "clothing store" , "department store" , "establishment" , "food" , "movie theater" , "point of interest" , "restaurant" , "shoe store" , "shopping mall" , "store" ], "spatialRelationship" : "WITHIN" , "straightLineDistanceMeters" : 220.29175 }, { "name" : "places/ChIJ62 oCR7Lj4AR MGWkSPotD4" , "placeId" : "ChIJ62 oCR7Lj4AR MGWkSPotD4" , "displayName" : { "text" : "Nordstrom" , "languageCode" : "en" }, "types" : [ "clothing store" , "department store" , "establishment" , "point of interest" , "shoe store" , "store" ], "straightLineDistanceMeters" : 329.45178 }, { "name" : "places/ChIJmx1c5x7Lj4ARJXJy CU JbE" , "placeId" : "ChIJmx1c5x7Lj4ARJXJy CU JbE" , "displayName" : { "text" : "Monroe Parking Garage" , "languageCode" : "en" }, "types" : [ "establishment" , "parking" , "point of interest" ], "straightLineDistanceMeters" : 227.05153 }, { "name" : "places/ChIJxcwBziHLj4ARUQLAvtzkRCM" , "placeId" : "ChIJxcwBziHLj4ARUQLAvtzkRCM" , "displayName" : { "text" : "Studios Inn by Daiwa Living California Inc." , "languageCode" : "en" }, "types" : [ "establishment" , "lodging" , "point of interest" , "real estate agency" ], "straightLineDistanceMeters" : 299.9955 }, { "name" : "places/ChIJWWIlNx7Lj4ARpe1E0ob- GI" , "placeId" : "ChIJWWIlNx7Lj4ARpe1E0ob- GI" , "displayName" : { "text" : "Din Tai Fung" , "languageCode" : "en" }, "types" : [ "establishment" , "food" , "point of interest" , "restaurant" ], "straightLineDistanceMeters" : 157.70943 } ], "areas" : [ { "name" : "places/ChIJb3F-EB7Lj4ARnHApQ Hu1gI" , "placeId" : "ChIJb3F-EB7Lj4ARnHApQ Hu1gI" , "displayName" : { "text" : "Westfield Valley Fair" , "languageCode" : "en" }, "containment" : "WITHIN" }, { "name" : "places/ChIJXYuykB Lj4AR1Ot8nU5q26Q" , "placeId" : "ChIJXYuykB Lj4AR1Ot8nU5q26Q" , "displayName" : { "text" : "Valley Fair" , "languageCode" : "en" }, "containment" : "WITHIN" }, { "name" : "places/ChIJtYoUX2DLj4ARKoKOb1G0CpM" , "placeId" : "ChIJtYoUX2DLj4ARKoKOb1G0CpM" , "displayName" : { "text" : "Central San Jose" , "languageCode" : "en" }, "containment" : "WITHIN" } ] } } Get place details for a moved place If a place referenced in your app has relocated, you can use the movedPlace and movedPlaceId fields to get the details of the new place.
- The following fields trigger the Place Details Pro SKU : accessibilityOptions businessStatus containingPlaces displayName googleMapsLinks googleMapsUri iconBackgroundColor iconMaskBaseUri openingDate primaryType primaryTypeDisplayName pureServiceAreaBusiness subDestinations timeZone utcOffsetMinutes The following fields trigger the Place Details Enterprise SKU : currentOpeningHours currentSecondaryOpeningHours internationalPhoneNumber nationalPhoneNumber priceLevel priceRange rating regularOpeningHours regularSecondaryOpeningHours userRatingCount websiteUri The following fields trigger the Place Details Enterprise + Atmosphere SKU : allowsDogs curbsidePickup delivery dineIn editorialSummary evChargeAmenitySummary evChargeOptions fuelOptions generativeSummary goodForChildren goodForGroups goodForWatchingSports liveMusic menuForChildren neighborhoodSummary parkingOptions paymentOptions outdoorSeating reservable restroom reviews reviewSummary routingSummaries servesBeer servesBreakfast servesBrunch servesCocktails servesCoffee servesDessert servesDinner servesLunch servesVegetarianFood servesWine takeout Text Search and Nearby Search only placeId A textual identifier that uniquely identifies a place, returned from a Text Search (New) or Nearby Search (New) .

### Place IDs \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/place-id](https://developers.google.com/maps/documentation/places/web-service/place-id)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- The following example is a search request for places of type 'restaurant' within a 1500m radius of a point in Sydney, Australia, containing the word 'cruise': https : //maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key= YOUR API KEY The response includes a place ID in the place id field, as shown in this snippet: { "html attributions" : [], "results" : [ { "geometry" : { "location" : { "lat" : -33.870775, "lng" : 151.199025 } }, ... "place id" : "ChIJrTLr-GyuEmsRBfy61i59si0", ... } ], "status" : "OK" } Now you can send a Place Details (Legacy) request , putting the place ID in the place id parameter: https://maps.googleapis.com/maps/api/place/details/json?place id=ChIJrTLr-GyuEmsRBfy61i59si0&key= YOUR API KEY Save place IDs for later use Place IDs are exempt from the caching restrictions stated in Section 3.2.3(b) of the Google Maps Platform Terms of Service.
- To refresh results in the event of an obsolete place ID, store the original request that returned each place ID and re-issue the request as needed.
- These place ID types include: Street addresses that don't exist in Google Maps as precise addresses, but are inferred from a range of addresses.
- Places API (New) Using the Places API, you can find a place ID by doing a Text Search (New) request. curl -X POST -d '{ "textQuery" : "Spicy Vegetarian Food in Sydney, Australia" }' \ -H 'Content-Type: application/json' -H 'X-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: places.id,places.displayName,places.formattedAddress' \ 'https://places.googleapis.com/v1/places:searchText' The response includes a place ID in the id field, as shown below: { "places": [ { "id": "ChIJs5ydyTiuEmsR0fRSlU0C7k0", "formattedAddress": "29 King St, Sydney NSW 2000, Australia", "displayName": { "text": "Peace Harmony", "languageCode": "en" } }, ... } Now you can now make a Place Details (New) request by including the place ID in the request URL: https://places.googleapis.com/v1/places/ChIJs5ydyTiuEmsR0fRSlU0C7k0?fields=id,displayName&key= API KEY Places API (Legacy) Using the Places API, you can find a place ID by doing a Place Search request.

### REST Resource: places \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- Source ID: `site-api-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- This field is only populated if the business status is FUTURE OPENING. priceLevel enum ( PriceLevel ) Price level of the place. attributions[] object ( Attribution ) A set of data provider that must be shown with this result. iconMaskBaseUri string A truncated URL to an icon mask.
- JSON representation { "name" : string , "id" : string , "displayName" : { object ( LocalizedText ) } , "types" : [ string ] , "primaryType" : string , "primaryTypeDisplayName" : { object ( LocalizedText ) } , "googleMapsTypeLabel" : { object ( LocalizedText ) } , "nationalPhoneNumber" : string , "internationalPhoneNumber" : string , "formattedAddress" : string , "shortFormattedAddress" : string , "postalAddress" : { object ( PostalAddress ) } , "addressComponents" : [ { object ( AddressComponent ) } ] , "plusCode" : { object ( PlusCode ) } , "location" : { object ( LatLng ) } , "viewport" : { object ( Viewport ) } , "rating" : number , "googleMapsUri" : string , "websiteUri" : string , "reviews" : [ { object ( Review ) } ] , "regularOpeningHours" : { object ( OpeningHours ) } , "timeZone" : { object ( TimeZone ) } , "photos" : [ { object ( Photo ) } ] , "adrFormatAddress" : string , "businessStatus" : enum ( BusinessStatus ) , "openingDate" : { object ( Date ) } , "priceLevel" : enum ( PriceLevel ) , "attributions" : [ { object ( Attribution ) } ] , "iconMaskBaseUri" : string , "iconBackgroundColor" : string , "currentOpeningHours" : { object ( OpeningHours ) } , "currentSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "regularSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "editorialSummary" : { object ( LocalizedText ) } , "paymentOptions" : { object ( PaymentOptions ) } , "parkingOptions" : { object ( ParkingOptions ) } , "subDestinations" : [ { object ( SubDestination ) } ] , "fuelOptions" : { object ( FuelOptions ) } , "evChargeOptions" : { object ( EVChargeOptions ) } , "generativeSummary" : { object ( GenerativeSummary ) } , "containingPlaces" : [ { object ( ContainingPlace ) } ] , "addressDescriptor" : { object ( AddressDescriptor ) } , "googleMapsLinks" : { object ( GoogleMapsLinks ) } , "priceRange" : { object ( PriceRange ) } , "reviewSummary" : { object ( ReviewSummary ) } , "evChargeAmenitySummary" : { object ( EvChargeAmenitySummary ) } , "neighborhoodSummary" : { object ( NeighborhoodSummary ) } , "consumerAlert" : { object ( ConsumerAlert ) } , "movedPlace" : string , "movedPlaceId" : string , "utcOffsetMinutes" : integer , "userRatingCount" : integer , "takeout" : boolean , "delivery" : boolean , "dineIn" : boolean , "curbsidePickup" : boolean , "reservable" : boolean , "servesBreakfast" : boolean , "servesLunch" : boolean , "servesDinner" : boolean , "servesBeer" : boolean , "servesWine" : boolean , "servesBrunch" : boolean , "servesVegetarianFood" : boolean , "outdoorSeating" : boolean , "liveMusic" : boolean , "menuForChildren" : boolean , "servesCocktails" : boolean , "servesDessert" : boolean , "servesCoffee" : boolean , "goodForChildren" : boolean , "allowsDogs" : boolean , "restroom" : boolean , "goodForGroups" : boolean , "goodForWatchingSports" : boolean , "accessibilityOptions" : { object ( AccessibilityOptions ) } , "pureServiceAreaBusiness" : boolean } Fields name string This Place's resource name, in places/{placeId} format.
- JSON representation { "name" : string , "relativePublishTimeDescription" : string , "text" : { object ( LocalizedText ) } , "originalText" : { object ( LocalizedText ) } , "rating" : number , "authorAttribution" : { object ( AuthorAttribution ) } , "publishTime" : string , "flagContentUri" : string , "googleMapsUri" : string , "visitDate" : { object ( Date ) } } Fields name string A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: places/{placeId}/reviews/{review} ). relativePublishTimeDescription string A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. text object ( LocalizedText ) The localized text of the review. originalText object ( LocalizedText ) The review text in its original language. rating number A number between 1.0 and 5.0, also called the number of stars. authorAttribution object ( AuthorAttribution ) This review's author. publishTime string ( Timestamp format) Timestamp for the review.
- See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage . googleMapsLinks object ( GoogleMapsLinks ) Links to trigger different Google Maps actions. priceRange object ( PriceRange ) The price range associated with a Place. reviewSummary object ( ReviewSummary ) AI-generated summary of the place using user reviews. evChargeAmenitySummary object ( EvChargeAmenitySummary ) The summary of amenities near the EV charging station. neighborhoodSummary object ( NeighborhoodSummary ) A summary of points of interest near the place. consumerAlert object ( ConsumerAlert ) The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies. movedPlace string If this Place is permanently closed and has moved to a new Place, this field contains the new Place's resource name, in places/{placeId} format.

### Find Place (Legacy) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Find Place (Legacy) request returns a subset of the fields that are returned by a Place Details (Legacy) request.
- JSON { "candidates" : [ { "formatted address" : "140 George St, The Rocks NSW 2000, Australia" , "geometry" : { "location" : { "lat" : -33.8599358 , "lng" : 151.2090295 }, "viewport" : { "northeast" : { "lat" : -33.85824377010728 , "lng" : 151.2104386798927 }, "southwest" : { "lat" : -33.86094342989272 , "lng" : 151.2077390201073 }, }, }, "name" : "Museum of Contemporary Art Australia" , "opening hours" : { "open now" : false }, "rating" : 4.4 , }, ], "status" : "OK" , } XML <?xml version="1.0" encoding="UTF-8"?> <FindPlaceFromTextResponse> <candidates> <name>Museum of Contemporary Art Australia</name> <formatted address>140 George St, The Rocks NSW 2000, Australia</formatted address> <geometry> <location> <lat>-33.8599358</lat> <lng>151.2090295</lng> </location> <viewport> <southwest> <lat>-33.8609434</lat> <lng>151.2077390</lng> </southwest> <northeast> <lat>-33.8582438</lat> <lng>151.2104387</lng> </northeast> </viewport> </geometry> <rating>4.4</rating> <opening hours> <open now>false</open now> </opening hours> </candidates> <status>OK</status> </FindPlaceFromTextResponse> PlacesFindPlaceFromTextResponse Field Required Type Description candidates required Array< Place > Contains an array of Place candidates.
- Left unencoded, the + prefix would be decoded to a space on the server, resulting in an invalid phone number lookup. curl curl -L -X GET 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B16502530000&inputtype=phonenumber&fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry&key=YOUR API KEY' HTTP https://maps.googleapis.com/maps/api/place/findplacefromtext/json ?fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry &input=%2B16502530000 &inputtype=phonenumber &key=YOUR API KEY Find Place (Legacy) responses A Find Place (Legacy) response contains only the data types that were specified using the fields parameter, plus html attributions .
- This is a whole number, ranging from 1 to 5. relative time description required string The time that the review was submitted in text, relative to the current time. time required number The time that the review was submitted, measured in the number of seconds since since midnight, January 1, 1970 UTC. author url optional string The URL to the user's Google Maps Local Guides profile, if available. language optional string An IETF language code indicating the language of the returned review.This field contains the main language tag only, and not the secondary tag indicating country or region.

