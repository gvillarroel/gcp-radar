---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.042Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "movedPlace"
feature_slug: "movedplace"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places"
  - "https://developers.google.com/maps/documentation/places/web-service/place-details"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/place-photos"
keywords:
  - "movedplace"
  - "field"
  - "that"
  - "returns"
  - "the"
  - "next"
  - "place"
  - "resource"
---

# movedPlace

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

A field that returns the next place resource for a relocated place.

## Extended Definition

A field that returns the next place resource for a relocated place.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- [https://developers.google.com/maps/documentation/places/web-service/place-details](https://developers.google.com/maps/documentation/places/web-service/place-details)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- [https://developers.google.com/maps/documentation/places/web-service/place-photos](https://developers.google.com/maps/documentation/places/web-service/place-photos)

## Supporting Pages

### REST Resource: places \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- Source ID: `site-api-reference`
- Final score: 237
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage . googleMapsLinks object ( GoogleMapsLinks ) Links to trigger different Google Maps actions. priceRange object ( PriceRange ) The price range associated with a Place. reviewSummary object ( ReviewSummary ) AI-generated summary of the place using user reviews. evChargeAmenitySummary object ( EvChargeAmenitySummary ) The summary of amenities near the EV charging station. neighborhoodSummary object ( NeighborhoodSummary ) A summary of points of interest near the place. consumerAlert object ( ConsumerAlert ) The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies. movedPlace string If this Place is permanently closed and has moved to a new Place, this field contains the new Place's resource name, in places/{placeId} format.
- JSON representation { "periods" : [ { object ( Period ) } ] , "weekdayDescriptions" : [ string ] , "secondaryHoursType" : enum ( SecondaryHoursType ) , "specialDays" : [ { object ( SpecialDay ) } ] , "nextOpenTime" : string , "nextCloseTime" : string , "openNow" : boolean } Fields periods[] object ( Period ) The periods that this place is open during the week.
- JSON representation { "name" : string , "id" : string , "displayName" : { object ( LocalizedText ) } , "types" : [ string ] , "primaryType" : string , "primaryTypeDisplayName" : { object ( LocalizedText ) } , "googleMapsTypeLabel" : { object ( LocalizedText ) } , "nationalPhoneNumber" : string , "internationalPhoneNumber" : string , "formattedAddress" : string , "shortFormattedAddress" : string , "postalAddress" : { object ( PostalAddress ) } , "addressComponents" : [ { object ( AddressComponent ) } ] , "plusCode" : { object ( PlusCode ) } , "location" : { object ( LatLng ) } , "viewport" : { object ( Viewport ) } , "rating" : number , "googleMapsUri" : string , "websiteUri" : string , "reviews" : [ { object ( Review ) } ] , "regularOpeningHours" : { object ( OpeningHours ) } , "timeZone" : { object ( TimeZone ) } , "photos" : [ { object ( Photo ) } ] , "adrFormatAddress" : string , "businessStatus" : enum ( BusinessStatus ) , "openingDate" : { object ( Date ) } , "priceLevel" : enum ( PriceLevel ) , "attributions" : [ { object ( Attribution ) } ] , "iconMaskBaseUri" : string , "iconBackgroundColor" : string , "currentOpeningHours" : { object ( OpeningHours ) } , "currentSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "regularSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "editorialSummary" : { object ( LocalizedText ) } , "paymentOptions" : { object ( PaymentOptions ) } , "parkingOptions" : { object ( ParkingOptions ) } , "subDestinations" : [ { object ( SubDestination ) } ] , "fuelOptions" : { object ( FuelOptions ) } , "evChargeOptions" : { object ( EVChargeOptions ) } , "generativeSummary" : { object ( GenerativeSummary ) } , "containingPlaces" : [ { object ( ContainingPlace ) } ] , "addressDescriptor" : { object ( AddressDescriptor ) } , "googleMapsLinks" : { object ( GoogleMapsLinks ) } , "priceRange" : { object ( PriceRange ) } , "reviewSummary" : { object ( ReviewSummary ) } , "evChargeAmenitySummary" : { object ( EvChargeAmenitySummary ) } , "neighborhoodSummary" : { object ( NeighborhoodSummary ) } , "consumerAlert" : { object ( ConsumerAlert ) } , "movedPlace" : string , "movedPlaceId" : string , "utcOffsetMinutes" : integer , "userRatingCount" : integer , "takeout" : boolean , "delivery" : boolean , "dineIn" : boolean , "curbsidePickup" : boolean , "reservable" : boolean , "servesBreakfast" : boolean , "servesLunch" : boolean , "servesDinner" : boolean , "servesBeer" : boolean , "servesWine" : boolean , "servesBrunch" : boolean , "servesVegetarianFood" : boolean , "outdoorSeating" : boolean , "liveMusic" : boolean , "menuForChildren" : boolean , "servesCocktails" : boolean , "servesDessert" : boolean , "servesCoffee" : boolean , "goodForChildren" : boolean , "allowsDogs" : boolean , "restroom" : boolean , "goodForGroups" : boolean , "goodForWatchingSports" : boolean , "accessibilityOptions" : { object ( AccessibilityOptions ) } , "pureServiceAreaBusiness" : boolean } Fields name string This Place's resource name, in places/{placeId} format.
- JSON representation { "name" : string , "relativePublishTimeDescription" : string , "text" : { object ( LocalizedText ) } , "originalText" : { object ( LocalizedText ) } , "rating" : number , "authorAttribution" : { object ( AuthorAttribution ) } , "publishTime" : string , "flagContentUri" : string , "googleMapsUri" : string , "visitDate" : { object ( Date ) } } Fields name string A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: places/{placeId}/reviews/{review} ). relativePublishTimeDescription string A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. text object ( LocalizedText ) The localized text of the review. originalText object ( LocalizedText ) The review text in its original language. rating number A number between 1.0 and 5.0, also called the number of stars. authorAttribution object ( AuthorAttribution ) This review's author. publishTime string ( Timestamp format) Timestamp for the review.

### Place Details (New) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/place-details](https://developers.google.com/maps/documentation/places/web-service/place-details)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example requests place information about Marche IGA St-Canut in Quebec, Canada: curl -X GET -H 'Content-Type: application/json' \ -H 'x-Goog-Api-Key: API KEY ' \ -H 'X-Goog-FieldMask: id,displayName, businessStatus,movedPlace,movedPlaceId ' \ https://places.googleapis.com/v1/places/ChIJUfQdGInVzkwRzAjmjzWB7CQ The request returns the following response: { "id" : "ChIJUfQdGInVzkwRzAjmjzWB7CQ" , "businessStatus" : "CLOSED PERMANENTLY" , "displayName" : { "text" : "Marche IGA St-Canut" , "languageCode" : "en" }, "movedPlace" : "places/ChIJ36QT7n8qz0wRDqVZ UBlUlQ" , "movedPlaceId" : "ChIJ36QT7n8qz0wRDqVZ UBlUlQ" } To request details about the new place, use the Place resource name in the movedPlace field in a new Place Details (New) request.
- For places that have moved to a new location , Place Details (New) returns CLOSED PERMANENTLY in the businessStatus field and returns the new location in the movedPlace and movedPlaceId fields of the response body.
- For places that are permanently closed , Place Details (New) returns CLOSED PERMANENTLY in the businessStatus field and omits the movedPlace and movedPlaceId fields in the response body.
- The movedPlace and movedPlaceId fields of a place result only point to the next location, not the last known location.

### Package google.maps.places.v1 \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- Source ID: `site-api-reference`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Fields name string The resource name of a photo media in the format: places/{place id}/photos/{photo reference}/media . photo uri string A short-lived uri that can be used to render the photo.
- Fields name string A reference representing this place review which may be used to look up this place review again (also called the API "resource" name: places/{place id}/reviews/{review} ). relative publish time description string A string of formatted recent time, expressing the review time relative to the current time in a form appropriate for the language and country. text LocalizedText The localized text of the review. original text LocalizedText The review text in its original language. rating double A number between 1.0 and 5.0, also called the number of stars. author attribution AuthorAttribution This review's author. publish time Timestamp Timestamp for the review. flag content uri string A link where users can flag a problem with the review. google maps uri string A link to show the review on Google Maps. visit date Date The date when the author visited the place.
- See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage . google maps links GoogleMapsLinks Links to trigger different Google Maps actions. price range PriceRange The price range associated with a Place. review summary ReviewSummary AI-generated summary of the place using user reviews. ev charge amenity summary EvChargeAmenitySummary The summary of amenities near the EV charging station. neighborhood summary NeighborhoodSummary A summary of points of interest near the place. consumer alert ConsumerAlert The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies. moved place string If this Place is permanently closed and has moved to a new Place, this field contains the new Place's resource name, in places/{place id} format.
- Fields places[] Place A list of places that meets user's requirements like places types, number of places and specific location restriction. routing summaries[] RoutingSummary A list of routing summaries where each entry associates to the corresponding place in the same index in the places field.

### Place Photos (New) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/place-photos](https://developers.google.com/maps/documentation/places/web-service/place-photos)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request a place photo The example request below returns an image using its resource name , resizing it so that it is at most 400 pixels tall and wide: https://places.googleapis.com/v1/places/ChIJ2fzCmcW7j4AR2JzfXBBoh6E/photos/ATKogpeivkIjQ1FT7QmbeT33nBSwqLhdPvIWHfrG1WfmgrFjeZYpS Ls7c7rj8jejN9QGzlx4GoAH0atSvUzATDrgrZic tTEJdeITdWL-oG3TWi5HqZoLozrjTaxoAIxmROHfV5KXVcLeTdCC6kmZExSy0CLVIG3lAPIgmvUiewNf-ZHYE4-jXYwPQpWHJgqVosvZJ6KWEgowEA-qRAzNTu9VH6BPFqHakGQ7EqBAeYOiU8Dh-xIQC8FcBJiTi0xB4tr-MYXUaF0p AqzAhJcDE6FAgLqG1s7EsME0o36w2nDRHA-IuoISBC3SIahINE3Xwq2FzEZE6TpNTFVfgTpdPhV8CGLeqrauHn2I6ePm-2hA8-87aO7aClXKJJVzlQ1dc JuHz6Ks07d2gglw-ZQ3ibCTF5lMtCF9O-9JHyRQXsfuXw/media ?maxHeightPx=400&maxWidthPx=400&key= API KEY The response of a successful Place Photos (New) request is an image.
- The following example shows a Place Details (New) request that includes photos in the field mask so that the response includes the photos[] array in the response: curl -X GET \ -H 'Content-Type: application/json' -H "X-Goog-Api-Key: API KEY " \ -H "X-Goog-FieldMask: id,displayName, photos " \ https://places.googleapis.com/v1/places/ChIJ2fzCmcW7j4AR2JzfXBBoh6E An example of a photos[] array in the response is shown below. ... "photos" : [ { "name" : "places/ChIJ2fzCmcW7j4AR2JzfXBBoh6E/photos/AUacShh3 Dd8yvV2JZMtNjjbbSbFhSv-0VmUN-uasQ2Oj00XB63irPTks0-A 1rMNfdTunoOVZfVOExRRBNrupUf8TY4Kw5iQNQgf2rwcaM8hXNQg7KDyvMR5B-HzoCE1mwy2ba9yxvmtiJrdV-xBgO8c5iJL65BCd0slyI1" , "widthPx" : 6000 , "heightPx" : 4000 , "authorAttributions" : [ { "displayName" : "John Smith" , "uri" : "//maps.google.com/maps/contrib/101563" , "photoUri" : "//lh3.googleusercontent.com/a-/AD cFT-b=s100-p-k-no-mo" } ] }, ...
- Quota exceeded (403) If your request exceeds your available quota, the server returns an HTTP 403 status and displays the following image to indicate that the quota has been exceeded: Invalid request (404) If the server is unable to understand your request, it returns HTTP 400 status, which indicates an invalid request.
- Place Photos (New) requests A Place Photos (New) request is an HTTP GET request to a URL in the form: https://places.googleapis.com/v1/ NAME /media?key= API KEY & PARAMETERS Where the following parameters are required: NAME contains the resource name of the photo.

