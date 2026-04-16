---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.060Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "Secondary opening hours"
feature_slug: "secondary-opening-hours"
latest_feature_date: "2023-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places"
  - "https://developers.google.com/maps/documentation/places/web-service/legacy/place-data-fields"
  - "https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place"
keywords:
  - "secondary"
  - "opening"
  - "hours"
  - "this"
  - "field"
  - "provides"
  - "additional"
  - "for"
---

# Secondary opening hours

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

This field provides additional opening hours for a place.

## Extended Definition

This field provides additional opening hours for a place.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- [https://developers.google.com/maps/documentation/places/web-service/legacy/place-data-fields](https://developers.google.com/maps/documentation/places/web-service/legacy/place-data-fields)
- [https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place)

## Supporting Pages

### Package google.maps.places.v1 \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- Source ID: `site-api-reference`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This field includes the special days subfield of all hours, set for dates that have exceptional hours. current secondary opening hours[] OpeningHours Contains an array of entries for the next seven days including information about secondary hours of a business.
- This field includes the special days subfield of all hours, set for dates that have exceptional hours. regular secondary opening hours[] OpeningHours Contains an array of entries for information about regular secondary hours of a business.
- For secondary opening hours and current secondary opening hours, this field means whether the secondary hours of this place is active.
- For regular opening hours and current opening hours, this field means whether the place is open.

### REST Resource: places \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- Source ID: `site-api-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "id" : string , "displayName" : { object ( LocalizedText ) } , "types" : [ string ] , "primaryType" : string , "primaryTypeDisplayName" : { object ( LocalizedText ) } , "googleMapsTypeLabel" : { object ( LocalizedText ) } , "nationalPhoneNumber" : string , "internationalPhoneNumber" : string , "formattedAddress" : string , "shortFormattedAddress" : string , "postalAddress" : { object ( PostalAddress ) } , "addressComponents" : [ { object ( AddressComponent ) } ] , "plusCode" : { object ( PlusCode ) } , "location" : { object ( LatLng ) } , "viewport" : { object ( Viewport ) } , "rating" : number , "googleMapsUri" : string , "websiteUri" : string , "reviews" : [ { object ( Review ) } ] , "regularOpeningHours" : { object ( OpeningHours ) } , "timeZone" : { object ( TimeZone ) } , "photos" : [ { object ( Photo ) } ] , "adrFormatAddress" : string , "businessStatus" : enum ( BusinessStatus ) , "openingDate" : { object ( Date ) } , "priceLevel" : enum ( PriceLevel ) , "attributions" : [ { object ( Attribution ) } ] , "iconMaskBaseUri" : string , "iconBackgroundColor" : string , "currentOpeningHours" : { object ( OpeningHours ) } , "currentSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "regularSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "editorialSummary" : { object ( LocalizedText ) } , "paymentOptions" : { object ( PaymentOptions ) } , "parkingOptions" : { object ( ParkingOptions ) } , "subDestinations" : [ { object ( SubDestination ) } ] , "fuelOptions" : { object ( FuelOptions ) } , "evChargeOptions" : { object ( EVChargeOptions ) } , "generativeSummary" : { object ( GenerativeSummary ) } , "containingPlaces" : [ { object ( ContainingPlace ) } ] , "addressDescriptor" : { object ( AddressDescriptor ) } , "googleMapsLinks" : { object ( GoogleMapsLinks ) } , "priceRange" : { object ( PriceRange ) } , "reviewSummary" : { object ( ReviewSummary ) } , "evChargeAmenitySummary" : { object ( EvChargeAmenitySummary ) } , "neighborhoodSummary" : { object ( NeighborhoodSummary ) } , "consumerAlert" : { object ( ConsumerAlert ) } , "movedPlace" : string , "movedPlaceId" : string , "utcOffsetMinutes" : integer , "userRatingCount" : integer , "takeout" : boolean , "delivery" : boolean , "dineIn" : boolean , "curbsidePickup" : boolean , "reservable" : boolean , "servesBreakfast" : boolean , "servesLunch" : boolean , "servesDinner" : boolean , "servesBeer" : boolean , "servesWine" : boolean , "servesBrunch" : boolean , "servesVegetarianFood" : boolean , "outdoorSeating" : boolean , "liveMusic" : boolean , "menuForChildren" : boolean , "servesCocktails" : boolean , "servesDessert" : boolean , "servesCoffee" : boolean , "goodForChildren" : boolean , "allowsDogs" : boolean , "restroom" : boolean , "goodForGroups" : boolean , "goodForWatchingSports" : boolean , "accessibilityOptions" : { object ( AccessibilityOptions ) } , "pureServiceAreaBusiness" : boolean } Fields name string This Place's resource name, in places/{placeId} format.
- This field includes the specialDays subfield of all hours, set for dates that have exceptional hours. currentSecondaryOpeningHours[] object ( OpeningHours ) Contains an array of entries for the next seven days including information about secondary hours of a business.
- This field includes the specialDays subfield of all hours, set for dates that have exceptional hours. regularSecondaryOpeningHours[] object ( OpeningHours ) Contains an array of entries for information about regular secondary hours of a business.
- For secondary opening hours and current secondary opening hours, this field means whether the secondary hours of this place is active.

### Place Data Fields \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/legacy/place-data-fields](https://developers.google.com/maps/documentation/places/web-service/legacy/place-data-fields)
- Source ID: `site-docs-root-2`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Basic Data Field Places API (Legacy) Places Library, Maps JavaScript API Places SDK for Android (Legacy) Places SDK for iOS (Legacy) Address Components address components address components Place.Field.ADDRESS COMPONENTS GMSPlaceFieldAddressComponents Address adr address adr address --- --- Business Status business status business status Place.Field.BUSINESS STATUS GMSPlaceFieldBusinessStatus Formatted Address formatted address formatted address Place.Field.FORMATTED ADDRESS GMSPlaceFieldFormattedAddress Viewport geometry/viewport geometry.viewport Place.Field.VIEWPORT GMSPlaceFieldViewport Location geometry/location geometry.location Place.Field.LOCATION GMSPlaceFieldCoordinate Icon icon icon --- --- Icon Mask Base URI icon mask base uri icon mask base uri Place.Field.ICON MASK URL GMSPlaceFieldIconImageURL Icon Background Color icon background color icon background color Place.Field.ICON BACKGROUND COLOR GMSPlaceFieldIconBackgroundColor Name name name Place.Field.DISPLAY NAME GMSPlaceFieldName Permanently Closed ( deprecated ) permanently closed permanently closed --- --- Photo photos photos Place.Field.PHOTO METADATAS GMSPlaceFieldPhotos Place ID place id place id Place.Field.ID GMSPlaceFieldPlaceID Plus Code plus code plus code Place.Field.PLUS CODE GMSPlaceFieldPlusCode Type type type Place.Field.TYPES GMSPlaceFieldTypes URL url url --- --- UTC Offset utc offset utc offset minutes Place.Field.UTC OFFSET GMSPlaceFieldUTCOffsetMinutes Vicinity vicinity vicinity --- --- Wheelchair Accessible Entrance wheelchair accessible entrance --- Place.Field.ACCESSIBILITY OPTIONS GMSPlaceFieldWheelchairAccessibleEntrance Contact Data Fields Field Places API (Legacy) Places Library, Maps JavaScript API Places SDK for Android (Legacy) Places SDK for iOS (Legacy) Phone Number formatted phone number formatted phone number --- --- International Phone Number international phone number international phone number Place.Field.INTERNATIONAL PHONE NUMBER GMSPlaceFieldPhoneNumber Opening Hours opening hours opening hours Place.Field.OPENING HOURS GMSPlaceFieldOpeningHours Current Opening Hours current opening hours --- Place.Field.CURRENT OPENING HOURS GMSPlaceFieldCurrentOpeningHours Secondary Opening Hours secondary opening hours --- Place.Field.SECONDARY OPENING HOURS GMSPlaceFieldSecondaryOpeningHours Website website website Place.Field.WEBSITE URI GMSPlaceFieldWebsite Atmosphere Data Fields Field Places API (Legacy) Places Library, Maps JavaScript API Places SDK for Android (Legacy) Places SDK for iOS (Legacy) Curbside Pickup curbside pickup --- Place.Field.CURBSIDE PICKUP GMSPlaceFieldCurbsidePickup Delivery delivery --- Place.Field.DELIVERY GMSPlaceFieldDelivery Dine-in dine in --- Place.Field.DINE IN GMSPlaceFieldDineIn Editorial Summary editorial summary --- Place.Field.EDITORIAL SUMMARY GMSPlaceFieldEditorialSummary Price Level price level price level Place.Field.PRICE LEVEL GMSPlaceFieldPriceLevel Rating rating rating Place.Field.RATING GMSPlaceFieldRating Reservable reservable --- Place.Field.RESERVABLE GMSPlaceFieldReservable Reviews reviews reviews Place.Field.REVIEWS --- Serves Beer serves beer --- Place.Field.SERVES BEER GMSPlaceFieldServesBeer Serves Breakfast serves breakfast --- Place.Field.SERVES BREAKFAST GMSPlaceFieldServesBreakfast Serves Brunch serves brunch --- Place.Field.SERVES BRUNCH GMSPlaceFieldServesBrunch Serves Dinner serves dinner --- Place.Field.SERVES DINNER GMSPlaceFieldServesDinner Serves Lunch serves lunch --- Place.Field.SERVES LUNCH GMSPlaceFieldServesLunch Serves Vegetarian Food serves vegetarian food --- Place.Field.SERVES VEGETARIAN FOOD GMSPlaceFieldServesVegetarianFood Serves Wine serves wine --- Place.Field.SERVES WINE GMSPlaceFieldServesWine Takeout takeout --- Place.Field.TAKEOUT GMSPlaceFieldTakeout User Ratings Total user ratings total user ratings total Place.Field.USER RATINGS COUNT GMSPlaceFieldUserRatingsTotal Places API (Legacy) fields support Find Place (Legacy) , Nearby Search (Legacy) , and Text Search (Legacy) requests all return a subset of the fields that are returned by Place Details (Legacy) requests.
- These methods do NOT return the following fields: address component adr address curbside pickup current opening hours delivery dine in editorial summary formatted phone number international phone number opening hours.periods opening hours.special days opening hours.type opening hours.weekday text reservable secondary opening hours reviews serves beer serves breakfast serves brunch serves dinner serves lunch serves vegetarian food serves wine takeout type url user ratings total utc offset minutes vicinity website wheelchair accessible entrance To return one or more of these data fields for a place, make a Place Details (Legacy) request, pass a place ID, and specify which fields to return.
- This page lists all place data fields, and explains how they are supported for each API/SDK (support for place fields varies by platform and/or feature).
- Home Products Google Maps Platform Documentation Web Services Places API Legacy Send feedback Place Data Fields Stay organized with collections Save and categorize content based on your preferences.

### Find Place (Legacy) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place)
- Source ID: `site-docs-root-2`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Contact The Contact category includes the following fields: current opening hours , formatted phone number , international phone number , opening hours , secondary opening hours , website Atmosphere The Atmosphere category includes the following fields: curbside pickup , delivery , dine in , editorial summary , price level , rating , reservable , reviews , serves beer , serves breakfast , serves brunch , serves dinner , serves lunch , serves vegetarian food , serves wine , takeout , user ratings total .
- Find Place (Legacy) examples The following example shows a Find Place (Legacy) request for "Museum of Contemporary Art Australia", including the photos , formatted address , name , rating , opening hours , and geometry fields: curl curl -L -X GET 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry&key=YOUR API KEY' HTTP https://maps.googleapis.com/maps/api/place/findplacefromtext/json ?fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry &input=Museum%20of%20Contemporary%20Art%20Australia &inputtype=textquery &key=YOUR API KEY The following example shows a Find Place (Legacy) request for "Mongolian Grill", using the locationbias parameter to prefer results within 2000 meters of the specified coordinates: curl curl -L -X GET 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Mongolian%20Grill&inputtype=textquery&fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry&locationbias=circle:2000@−33.866,151.216&key=YOUR API KEY' HTTP https://maps.googleapis.com/maps/api/place/findplacefromtext/json ?fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry &input=Mongolian%20Grill &inputtype=textquery &locationbias=circle:2000@−33.866,151.216 &key=YOUR API KEY The following example shows a Find Place (Legacy) request for a phone number.
- JSON { "candidates" : [ { "formatted address" : "140 George St, The Rocks NSW 2000, Australia" , "geometry" : { "location" : { "lat" : -33.8599358 , "lng" : 151.2090295 }, "viewport" : { "northeast" : { "lat" : -33.85824377010728 , "lng" : 151.2104386798927 }, "southwest" : { "lat" : -33.86094342989272 , "lng" : 151.2077390201073 }, }, }, "name" : "Museum of Contemporary Art Australia" , "opening hours" : { "open now" : false }, "rating" : 4.4 , }, ], "status" : "OK" , } XML <?xml version="1.0" encoding="UTF-8"?> <FindPlaceFromTextResponse> <candidates> <name>Museum of Contemporary Art Australia</name> <formatted address>140 George St, The Rocks NSW 2000, Australia</formatted address> <geometry> <location> <lat>-33.8599358</lat> <lng>151.2090295</lng> </location> <viewport> <southwest> <lat>-33.8609434</lat> <lng>151.2077390</lng> </southwest> <northeast> <lat>-33.8582438</lat> <lng>151.2104387</lng> </northeast> </viewport> </geometry> <rating>4.4</rating> <opening hours> <open now>false</open now> </opening hours> </candidates> <status>OK</status> </FindPlaceFromTextResponse> PlacesFindPlaceFromTextResponse Field Required Type Description candidates required Array< Place > Contains an array of Place candidates.
- Left unencoded, the + prefix would be decoded to a space on the server, resulting in an invalid phone number lookup. curl curl -L -X GET 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B16502530000&inputtype=phonenumber&fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry&key=YOUR API KEY' HTTP https://maps.googleapis.com/maps/api/place/findplacefromtext/json ?fields=formatted address%2Cname%2Crating%2Copening hours%2Cgeometry &input=%2B16502530000 &inputtype=phonenumber &key=YOUR API KEY Find Place (Legacy) responses A Find Place (Legacy) response contains only the data types that were specified using the fields parameter, plus html attributions .

