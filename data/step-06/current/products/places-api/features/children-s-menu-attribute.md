---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.054Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "Children's menu attribute"
feature_slug: "children-s-menu-attribute"
latest_feature_date: "2023-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places"
  - "https://developers.google.com/maps/documentation/places/web-service/op-overview"
  - "https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place"
keywords:
  - "children"
  - "menu"
  - "attribute"
  - "this"
  - "indicates"
  - "whether"
  - "place"
  - "has"
---

# Children's menu attribute

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

This attribute indicates whether a place has a children's menu.

## Extended Definition

This attribute indicates whether a place has a children's menu.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- [https://developers.google.com/maps/documentation/places/web-service/op-overview](https://developers.google.com/maps/documentation/places/web-service/op-overview)
- [https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place)

## Supporting Pages

### Package google.maps.places.v1 \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1](https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- X hours and 15 minutes. user rating count int32 The total number of reviews (with or without text) for this place. takeout bool Specifies if the business supports takeout. delivery bool Specifies if the business supports delivery. dine in bool Specifies if the business supports indoor or outdoor seating options. curbside pickup bool Specifies if the business supports curbside pickup. reservable bool Specifies if the place supports reservations. serves breakfast bool Specifies if the place serves breakfast. serves lunch bool Specifies if the place serves lunch. serves dinner bool Specifies if the place serves dinner. serves beer bool Specifies if the place serves beer. serves wine bool Specifies if the place serves wine. serves brunch bool Specifies if the place serves brunch. serves vegetarian food bool Specifies if the place serves vegetarian food. outdoor seating bool Place provides outdoor seating. live music bool Place provides live music. menu for children bool Place has a children's menu. serves cocktails bool Place serves cocktails. serves dessert bool Place serves dessert. serves coffee bool Place serves coffee. good for children bool Place is good for children. allows dogs bool Place allows dogs. restroom bool Place has restroom. good for groups bool Place accommodates groups. good for watching sports bool Place is suitable for watching sports. accessibility options AccessibilityOptions Information about the accessibility options a place offers. pure service area business bool Indicates whether the place is a pure service area business.
- See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage . google maps links GoogleMapsLinks Links to trigger different Google Maps actions. price range PriceRange The price range associated with a Place. review summary ReviewSummary AI-generated summary of the place using user reviews. ev charge amenity summary EvChargeAmenitySummary The summary of amenities near the EV charging station. neighborhood summary NeighborhoodSummary A summary of points of interest near the place. consumer alert ConsumerAlert The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies. moved place string If this Place is permanently closed and has moved to a new Place, this field contains the new Place's resource name, in places/{place id} format.
- This field will not be populated if this Place has not moved. moved place id string If this Place is permanently closed and has moved to a new Place, this field contains the new Place's place ID.
- This field will not be populated if this Place has not moved. utc offset minutes int32 Number of minutes this place's timezone is currently offset from UTC.

### REST Resource: places \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- Source ID: `site-api-reference`
- Final score: 203
- Re-rank relevance: N/A

Evidence snippets:
- X hours and 15 minutes. userRatingCount integer The total number of reviews (with or without text) for this place. takeout boolean Specifies if the business supports takeout. delivery boolean Specifies if the business supports delivery. dineIn boolean Specifies if the business supports indoor or outdoor seating options. curbsidePickup boolean Specifies if the business supports curbside pickup. reservable boolean Specifies if the place supports reservations. servesBreakfast boolean Specifies if the place serves breakfast. servesLunch boolean Specifies if the place serves lunch. servesDinner boolean Specifies if the place serves dinner. servesBeer boolean Specifies if the place serves beer. servesWine boolean Specifies if the place serves wine. servesBrunch boolean Specifies if the place serves brunch. servesVegetarianFood boolean Specifies if the place serves vegetarian food. outdoorSeating boolean Place provides outdoor seating. liveMusic boolean Place provides live music. menuForChildren boolean Place has a children's menu. servesCocktails boolean Place serves cocktails. servesDessert boolean Place serves dessert. servesCoffee boolean Place serves coffee. goodForChildren boolean Place is good for children. allowsDogs boolean Place allows dogs. restroom boolean Place has restroom. goodForGroups boolean Place accommodates groups. goodForWatchingSports boolean Place is suitable for watching sports. accessibilityOptions object ( AccessibilityOptions ) Information about the accessibility options a place offers. pureServiceAreaBusiness boolean Indicates whether the place is a pure service area business.
- JSON representation { "name" : string , "id" : string , "displayName" : { object ( LocalizedText ) } , "types" : [ string ] , "primaryType" : string , "primaryTypeDisplayName" : { object ( LocalizedText ) } , "googleMapsTypeLabel" : { object ( LocalizedText ) } , "nationalPhoneNumber" : string , "internationalPhoneNumber" : string , "formattedAddress" : string , "shortFormattedAddress" : string , "postalAddress" : { object ( PostalAddress ) } , "addressComponents" : [ { object ( AddressComponent ) } ] , "plusCode" : { object ( PlusCode ) } , "location" : { object ( LatLng ) } , "viewport" : { object ( Viewport ) } , "rating" : number , "googleMapsUri" : string , "websiteUri" : string , "reviews" : [ { object ( Review ) } ] , "regularOpeningHours" : { object ( OpeningHours ) } , "timeZone" : { object ( TimeZone ) } , "photos" : [ { object ( Photo ) } ] , "adrFormatAddress" : string , "businessStatus" : enum ( BusinessStatus ) , "openingDate" : { object ( Date ) } , "priceLevel" : enum ( PriceLevel ) , "attributions" : [ { object ( Attribution ) } ] , "iconMaskBaseUri" : string , "iconBackgroundColor" : string , "currentOpeningHours" : { object ( OpeningHours ) } , "currentSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "regularSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "editorialSummary" : { object ( LocalizedText ) } , "paymentOptions" : { object ( PaymentOptions ) } , "parkingOptions" : { object ( ParkingOptions ) } , "subDestinations" : [ { object ( SubDestination ) } ] , "fuelOptions" : { object ( FuelOptions ) } , "evChargeOptions" : { object ( EVChargeOptions ) } , "generativeSummary" : { object ( GenerativeSummary ) } , "containingPlaces" : [ { object ( ContainingPlace ) } ] , "addressDescriptor" : { object ( AddressDescriptor ) } , "googleMapsLinks" : { object ( GoogleMapsLinks ) } , "priceRange" : { object ( PriceRange ) } , "reviewSummary" : { object ( ReviewSummary ) } , "evChargeAmenitySummary" : { object ( EvChargeAmenitySummary ) } , "neighborhoodSummary" : { object ( NeighborhoodSummary ) } , "consumerAlert" : { object ( ConsumerAlert ) } , "movedPlace" : string , "movedPlaceId" : string , "utcOffsetMinutes" : integer , "userRatingCount" : integer , "takeout" : boolean , "delivery" : boolean , "dineIn" : boolean , "curbsidePickup" : boolean , "reservable" : boolean , "servesBreakfast" : boolean , "servesLunch" : boolean , "servesDinner" : boolean , "servesBeer" : boolean , "servesWine" : boolean , "servesBrunch" : boolean , "servesVegetarianFood" : boolean , "outdoorSeating" : boolean , "liveMusic" : boolean , "menuForChildren" : boolean , "servesCocktails" : boolean , "servesDessert" : boolean , "servesCoffee" : boolean , "goodForChildren" : boolean , "allowsDogs" : boolean , "restroom" : boolean , "goodForGroups" : boolean , "goodForWatchingSports" : boolean , "accessibilityOptions" : { object ( AccessibilityOptions ) } , "pureServiceAreaBusiness" : boolean } Fields name string This Place's resource name, in places/{placeId} format.
- See address descriptor regional coverage in https://developers.google.com/maps/documentation/geocoding/address-descriptors/coverage . googleMapsLinks object ( GoogleMapsLinks ) Links to trigger different Google Maps actions. priceRange object ( PriceRange ) The price range associated with a Place. reviewSummary object ( ReviewSummary ) AI-generated summary of the place using user reviews. evChargeAmenitySummary object ( EvChargeAmenitySummary ) The summary of amenities near the EV charging station. neighborhoodSummary object ( NeighborhoodSummary ) A summary of points of interest near the place. consumerAlert object ( ConsumerAlert ) The consumer alert message for the place when we detect suspicious review activity on a business or a business violates our policies. movedPlace string If this Place is permanently closed and has moved to a new Place, this field contains the new Place's resource name, in places/{placeId} format.
- JSON representation { "date" : { object ( Date ) } , "truncated" : boolean , "day" : integer , "hour" : integer , "minute" : integer } Fields date object ( Date ) Date in the local timezone for the place. truncated boolean Whether or not this endpoint was truncated.

### About the Places API (New) \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/op-overview](https://developers.google.com/maps/documentation/places/web-service/op-overview)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Attributes The Places API (New) includes several new attributes: Attribute Description outdoorSeating Place provides outdoor seating. liveMusic Place provides live music. menuForChildren Place has a children's menu. servesCocktails Place serves cocktails. servesDessert Place serves dessert. servesCoffee Place serves coffee. goodForChildren Place is good for children. allowsDogs Place allows dogs. restroom Place has a restroom. goodForGroups Place accommodates groups. goodForWatchingSports Place is suitable for watching sports.
- Try the AI-powered summaries demo open in new Migrate to the New Places APIs If you are an existing Places API (New) customer and want to migrate your app to use the new APIs, see the following migration documentation: Migrate to Place Details (New) Migrate to Nearby Search (New) Migrate to Text Search (New) Migrate to Place Photos (New) Migrate to Autocomplete (New) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Accessibility options The Places API (New) includes the following accessibility option fields: Field Description wheelchairAccessibleParking Place offers wheelchair-accessible parking. wheelchairAccessibleEntrance Place has a wheelchair-accessible entrance. wheelchairAccessibleRestroom Place has a wheelchair-accessible restroom. wheelchairAccessibleSeating Place has wheelchair-accessible seating.
- While some EV chargers have multiple connectors, each charger can only charge one vehicle at a time; as a result, this field reflects the number of available EV chargers at a given time. shortFormattedAddress A short, human-readable address for a place. primaryType The primary type of the given result.

### Find Place (Legacy) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place)
- Source ID: `site-docs-root-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Don't programmatically parse the formatted address. website optional string The authoritative website for this place, such as a business' homepage. wheelchair accessible entrance optional boolean Specifies if the place has an entrance that is wheelchair-accessible.
- Anonymous reviews are attributed to "A Google user". rating required number The user's overall rating for this place.
- See Geometry for more information. icon optional string Contains the URL of a suggested icon which may be displayed to the user when indicating this result on a map. icon background color optional string Contains the default HEX color code for the place's category. icon mask base uri optional string Contains the URL of a recommended icon, minus the .svg or .png file type extension. international phone number optional string Contains the place's phone number in international format.
- For example, for places in Sydney, Australia during daylight saving time this would be 660 (+11 hours from UTC), and for places in California outside of daylight saving time this would be -480 (-8 hours from UTC). vicinity optional string For establishment ( types:["establishment", ...]) results only, the vicinity field contains a simplified address for the place, including the street name, street number, and locality, but not the province/state, postal code, or country.

