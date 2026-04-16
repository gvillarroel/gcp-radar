---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:06.062Z"
product_name: "Places API"
product_slug: "places-api"
feature_name: "Wheelchair-accessible restrooms"
feature_slug: "wheelchair-accessible-restrooms"
latest_feature_date: "2023-10-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rpc/google.maps.places.v1"
  - "https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places"
  - "https://developers.google.com/maps/documentation/places/web-service/op-overview"
  - "https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place"
keywords:
  - "wheelchair"
  - "accessible"
  - "restrooms"
  - "this"
  - "accessibility"
  - "option"
  - "indicates"
  - "whether"
---

# Wheelchair-accessible restrooms

Product: Places API
Coverage: MEDIUM

## Step 02 Summary

This accessibility option indicates whether a place has wheelchair-accessible restrooms.

## Extended Definition

This accessibility option indicates whether a place has wheelchair-accessible restrooms.

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
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- X hours and 15 minutes. user rating count int32 The total number of reviews (with or without text) for this place. takeout bool Specifies if the business supports takeout. delivery bool Specifies if the business supports delivery. dine in bool Specifies if the business supports indoor or outdoor seating options. curbside pickup bool Specifies if the business supports curbside pickup. reservable bool Specifies if the place supports reservations. serves breakfast bool Specifies if the place serves breakfast. serves lunch bool Specifies if the place serves lunch. serves dinner bool Specifies if the place serves dinner. serves beer bool Specifies if the place serves beer. serves wine bool Specifies if the place serves wine. serves brunch bool Specifies if the place serves brunch. serves vegetarian food bool Specifies if the place serves vegetarian food. outdoor seating bool Place provides outdoor seating. live music bool Place provides live music. menu for children bool Place has a children's menu. serves cocktails bool Place serves cocktails. serves dessert bool Place serves dessert. serves coffee bool Place serves coffee. good for children bool Place is good for children. allows dogs bool Place allows dogs. restroom bool Place has restroom. good for groups bool Place accommodates groups. good for watching sports bool Place is suitable for watching sports. accessibility options AccessibilityOptions Information about the accessibility options a place offers. pure service area business bool Indicates whether the place is a pure service area business.
- Index Places (interface) AddressDescriptor (message) AddressDescriptor.Area (message) AddressDescriptor.Area.Containment (enum) AddressDescriptor.Landmark (message) AddressDescriptor.Landmark.SpatialRelationship (enum) AuthorAttribution (message) AutocompletePlacesRequest (message) AutocompletePlacesRequest.LocationBias (message) AutocompletePlacesRequest.LocationRestriction (message) AutocompletePlacesResponse (message) AutocompletePlacesResponse.Suggestion (message) AutocompletePlacesResponse.Suggestion.FormattableText (message) AutocompletePlacesResponse.Suggestion.PlacePrediction (message) AutocompletePlacesResponse.Suggestion.QueryPrediction (message) AutocompletePlacesResponse.Suggestion.StringRange (message) AutocompletePlacesResponse.Suggestion.StructuredFormat (message) Circle (message) ContentBlock (message) ContextualContent (message) ContextualContent.Justification (message) ContextualContent.Justification.BusinessAvailabilityAttributesJustification (message) ContextualContent.Justification.ReviewJustification (message) ContextualContent.Justification.ReviewJustification.HighlightedText (message) ContextualContent.Justification.ReviewJustification.HighlightedText.HighlightedTextRange (message) EVChargeOptions (message) EVChargeOptions.ConnectorAggregation (message) EVConnectorType (enum) FuelOptions (message) FuelOptions.FuelPrice (message) FuelOptions.FuelPrice.FuelType (enum) GetPhotoMediaRequest (message) GetPlaceRequest (message) Photo (message) PhotoMedia (message) Place (message) Place.AccessibilityOptions (message) Place.AddressComponent (message) Place.Attribution (message) Place.BusinessStatus (enum) Place.ConsumerAlert (message) Place.ConsumerAlert.Details (message) Place.ConsumerAlert.Details.Link (message) Place.ContainingPlace (message) Place.EvChargeAmenitySummary (message) Place.GenerativeSummary (message) Place.GoogleMapsLinks (message) Place.NeighborhoodSummary (message) Place.OpeningHours (message) Place.OpeningHours.Period (message) Place.OpeningHours.Period.Point (message) Place.OpeningHours.SecondaryHoursType (enum) Place.OpeningHours.SpecialDay (message) Place.ParkingOptions (message) Place.PaymentOptions (message) Place.PlusCode (message) Place.ReviewSummary (message) Place.SubDestination (message) Polyline (message) PriceLevel (enum) PriceRange (message) Review (message) RouteModifiers (message) RoutingParameters (message) RoutingPreference (enum) RoutingSummary (message) RoutingSummary.Leg (message) SearchNearbyRequest (message) SearchNearbyRequest.LocationRestriction (message) SearchNearbyRequest.RankPreference (enum) SearchNearbyResponse (message) SearchTextRequest (message) SearchTextRequest.EVOptions (message) SearchTextRequest.LocationBias (message) SearchTextRequest.LocationRestriction (message) SearchTextRequest.RankPreference (enum) SearchTextRequest.SearchAlongRouteParameters (message) SearchTextResponse (message) TravelMode (enum) Places Service definition for the Places API.
- This is guaranteed to be provided. coffee ContentBlock A summary of the nearby coffee options. restaurant ContentBlock A summary of the nearby restaurants. store ContentBlock A summary of the nearby stores. flag content uri string A link where users can flag a problem with the summary. disclosure text LocalizedText The AI disclosure message "Summarized with Gemini" (and its localized variants).
- This information is updated regularly. ev charge options EVChargeOptions Information of ev charging options. generative summary GenerativeSummary AI-generated summary of the place. containing places[] ContainingPlace List of places in which the current place is located. address descriptor AddressDescriptor The address descriptor of the place.

### REST Resource: places \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places](https://developers.google.com/maps/documentation/places/web-service/reference/rest/v1/places)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- X hours and 15 minutes. userRatingCount integer The total number of reviews (with or without text) for this place. takeout boolean Specifies if the business supports takeout. delivery boolean Specifies if the business supports delivery. dineIn boolean Specifies if the business supports indoor or outdoor seating options. curbsidePickup boolean Specifies if the business supports curbside pickup. reservable boolean Specifies if the place supports reservations. servesBreakfast boolean Specifies if the place serves breakfast. servesLunch boolean Specifies if the place serves lunch. servesDinner boolean Specifies if the place serves dinner. servesBeer boolean Specifies if the place serves beer. servesWine boolean Specifies if the place serves wine. servesBrunch boolean Specifies if the place serves brunch. servesVegetarianFood boolean Specifies if the place serves vegetarian food. outdoorSeating boolean Place provides outdoor seating. liveMusic boolean Place provides live music. menuForChildren boolean Place has a children's menu. servesCocktails boolean Place serves cocktails. servesDessert boolean Place serves dessert. servesCoffee boolean Place serves coffee. goodForChildren boolean Place is good for children. allowsDogs boolean Place allows dogs. restroom boolean Place has restroom. goodForGroups boolean Place accommodates groups. goodForWatchingSports boolean Place is suitable for watching sports. accessibilityOptions object ( AccessibilityOptions ) Information about the accessibility options a place offers. pureServiceAreaBusiness boolean Indicates whether the place is a pure service area business.
- JSON representation { "name" : string , "id" : string , "displayName" : { object ( LocalizedText ) } , "types" : [ string ] , "primaryType" : string , "primaryTypeDisplayName" : { object ( LocalizedText ) } , "googleMapsTypeLabel" : { object ( LocalizedText ) } , "nationalPhoneNumber" : string , "internationalPhoneNumber" : string , "formattedAddress" : string , "shortFormattedAddress" : string , "postalAddress" : { object ( PostalAddress ) } , "addressComponents" : [ { object ( AddressComponent ) } ] , "plusCode" : { object ( PlusCode ) } , "location" : { object ( LatLng ) } , "viewport" : { object ( Viewport ) } , "rating" : number , "googleMapsUri" : string , "websiteUri" : string , "reviews" : [ { object ( Review ) } ] , "regularOpeningHours" : { object ( OpeningHours ) } , "timeZone" : { object ( TimeZone ) } , "photos" : [ { object ( Photo ) } ] , "adrFormatAddress" : string , "businessStatus" : enum ( BusinessStatus ) , "openingDate" : { object ( Date ) } , "priceLevel" : enum ( PriceLevel ) , "attributions" : [ { object ( Attribution ) } ] , "iconMaskBaseUri" : string , "iconBackgroundColor" : string , "currentOpeningHours" : { object ( OpeningHours ) } , "currentSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "regularSecondaryOpeningHours" : [ { object ( OpeningHours ) } ] , "editorialSummary" : { object ( LocalizedText ) } , "paymentOptions" : { object ( PaymentOptions ) } , "parkingOptions" : { object ( ParkingOptions ) } , "subDestinations" : [ { object ( SubDestination ) } ] , "fuelOptions" : { object ( FuelOptions ) } , "evChargeOptions" : { object ( EVChargeOptions ) } , "generativeSummary" : { object ( GenerativeSummary ) } , "containingPlaces" : [ { object ( ContainingPlace ) } ] , "addressDescriptor" : { object ( AddressDescriptor ) } , "googleMapsLinks" : { object ( GoogleMapsLinks ) } , "priceRange" : { object ( PriceRange ) } , "reviewSummary" : { object ( ReviewSummary ) } , "evChargeAmenitySummary" : { object ( EvChargeAmenitySummary ) } , "neighborhoodSummary" : { object ( NeighborhoodSummary ) } , "consumerAlert" : { object ( ConsumerAlert ) } , "movedPlace" : string , "movedPlaceId" : string , "utcOffsetMinutes" : integer , "userRatingCount" : integer , "takeout" : boolean , "delivery" : boolean , "dineIn" : boolean , "curbsidePickup" : boolean , "reservable" : boolean , "servesBreakfast" : boolean , "servesLunch" : boolean , "servesDinner" : boolean , "servesBeer" : boolean , "servesWine" : boolean , "servesBrunch" : boolean , "servesVegetarianFood" : boolean , "outdoorSeating" : boolean , "liveMusic" : boolean , "menuForChildren" : boolean , "servesCocktails" : boolean , "servesDessert" : boolean , "servesCoffee" : boolean , "goodForChildren" : boolean , "allowsDogs" : boolean , "restroom" : boolean , "goodForGroups" : boolean , "goodForWatchingSports" : boolean , "accessibilityOptions" : { object ( AccessibilityOptions ) } , "pureServiceAreaBusiness" : boolean } Fields name string This Place's resource name, in places/{placeId} format.
- Resource: Place JSON representation LocalizedText JSON representation PostalAddress JSON representation AddressComponent JSON representation PlusCode JSON representation LatLng JSON representation Viewport JSON representation Review JSON representation AuthorAttribution JSON representation Date JSON representation OpeningHours JSON representation Period JSON representation Point JSON representation SecondaryHoursType SpecialDay JSON representation TimeZone JSON representation Photo JSON representation BusinessStatus PriceLevel Attribution JSON representation PaymentOptions JSON representation ParkingOptions JSON representation SubDestination JSON representation AccessibilityOptions JSON representation FuelOptions JSON representation FuelPrice JSON representation FuelType Money JSON representation EVChargeOptions JSON representation ConnectorAggregation JSON representation EVConnectorType GenerativeSummary JSON representation ContainingPlace JSON representation AddressDescriptor JSON representation Landmark JSON representation SpatialRelationship Area JSON representation Containment GoogleMapsLinks JSON representation PriceRange JSON representation ReviewSummary JSON representation EvChargeAmenitySummary JSON representation ContentBlock JSON representation NeighborhoodSummary JSON representation ConsumerAlert JSON representation Details JSON representation Link JSON representation Methods Resource: Place All the information representing a Place.
- JSON representation { "wheelchairAccessibleParking" : boolean , "wheelchairAccessibleEntrance" : boolean , "wheelchairAccessibleRestroom" : boolean , "wheelchairAccessibleSeating" : boolean } Fields wheelchairAccessibleParking boolean Place offers wheelchair accessible parking. wheelchairAccessibleEntrance boolean Places has wheelchair accessible entrance. wheelchairAccessibleRestroom boolean Place has wheelchair accessible restroom. wheelchairAccessibleSeating boolean Place has wheelchair accessible seating.

### About the Places API (New) \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/op-overview](https://developers.google.com/maps/documentation/places/web-service/op-overview)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Accessibility options The Places API (New) includes the following accessibility option fields: Field Description wheelchairAccessibleParking Place offers wheelchair-accessible parking. wheelchairAccessibleEntrance Place has a wheelchair-accessible entrance. wheelchairAccessibleRestroom Place has a wheelchair-accessible restroom. wheelchairAccessibleSeating Place has wheelchair-accessible seating.
- Options include the following: Diesel Regular unleaded Midgrade Premium SP91 SP91 E10 SP92 SP95 E10 SP98 SP99 SP100 LPG E80 E85 Methane Biodiesel Truck diesel evChargeOptions Number of electric vehicle (EV) chargers at this station.
- New fields, attributes, and accessibility options The Places API (New) includes new fields, attributes, and accessibility options to provide users with more information about a place.
- Try the AI-powered summaries demo open in new Migrate to the New Places APIs If you are an existing Places API (New) customer and want to migrate your app to use the new APIs, see the following migration documentation: Migrate to Place Details (New) Migrate to Nearby Search (New) Migrate to Text Search (New) Migrate to Place Photos (New) Migrate to Autocomplete (New) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Find Place (Legacy) \_|\_ Places API \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place](https://developers.google.com/maps/documentation/places/web-service/legacy/search-find-place)
- Source ID: `site-docs-root-2`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Don't programmatically parse the formatted address. website optional string The authoritative website for this place, such as a business' homepage. wheelchair accessible entrance optional boolean Specifies if the place has an entrance that is wheelchair-accessible.
- This is a whole number, ranging from 1 to 5. relative time description required string The time that the review was submitted in text, relative to the current time. time required number The time that the review was submitted, measured in the number of seconds since since midnight, January 1, 1970 UTC. author url optional string The URL to the user's Google Maps Local Guides profile, if available. language optional string An IETF language code indicating the language of the returned review.This field contains the main language tag only, and not the secondary tag indicating country or region.
- See Geometry for more information. icon optional string Contains the URL of a suggested icon which may be displayed to the user when indicating this result on a map. icon background color optional string Contains the default HEX color code for the place's category. icon mask base uri optional string Contains the URL of a recommended icon, minus the .svg or .png file type extension. international phone number optional string Contains the place's phone number in international format.
- For example, for places in Sydney, Australia during daylight saving time this would be 660 (+11 hours from UTC), and for places in California outside of daylight saving time this would be -480 (-8 hours from UTC). vicinity optional string For establishment ( types:["establishment", ...]) results only, the vicinity field contains a simplified address for the place, including the street name, street number, and locality, but not the province/state, postal code, or country.

