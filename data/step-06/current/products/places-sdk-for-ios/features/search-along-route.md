---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.460Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Search Along Route"
feature_slug: "search-along-route"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/sar-overview"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/search-along-route"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes"
keywords:
  - "search"
  - "along"
  - "route"
  - "lets"
  - "you"
  - "for"
  - "places"
  - "predefined"
---

# Search Along Route

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Search Along Route lets you search for places along predefined routes and calculate routing summaries to matching places; Search Along Route lets you search for places along predefined routes and calculate routing summaries to matching places.

## Extended Definition

Search Along Route lets you search for places along predefined routes and calculate routing summaries to matching places; Search Along Route lets you search for places along predefined routes and calculate routing summaries to matching places.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/sar-overview](https://developers.google.com/maps/documentation/places/ios-sdk/sar-overview)
- [https://developers.google.com/maps/documentation/places/ios-sdk/search-along-route](https://developers.google.com/maps/documentation/places/ios-sdk/search-along-route)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)

## Supporting Pages

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/sar-overview](https://developers.google.com/maps/documentation/places/ios-sdk/sar-overview)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, consider the route from the origin, referred to as a waypoint in the Routes API, to the destination as calculated by the Routes API: When you search along the route, the search is biased to return places near the route with minimal detour times from the origin to the destination.
- Overview of search along route Search along route features are available in the following Places (New) APIs: Text Search (New) only: Search for places along a predefined trip route.
- Text Search (New) lets you use this calculated route to perform a search along a route .
- However, while the locationBias and locationRestriction options let you specify a region to bias the search results, the search along route feature in Text Search also lets you bias the search results to include those with minimal detour times from the route origin to the route destination.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/search-along-route](https://developers.google.com/maps/documentation/places/ios-sdk/search-along-route)
- Source ID: `site-docs-root`
- Final score: 253
- Re-rank relevance: N/A

Evidence snippets:
- In the following example, the polyline defines the route from: Origin : 1600 Amphitheatre Parkway, Mountain View, CA Destination : 24 Willie Mays Plaza, San Francisco, CA The trip's encoded polyline for this route is represented by the string: wblcFptchVIFOd@G@EVw@Ms@dHKR}ApNAAF @Hf@TjAb@bBb@ @n@p@^Rd@ @Vz@HVz@nDLt@?d@Kr@c@ @mDG?@aEfGkCnDuChDm@bb@[@{GhHeEdEciBnnBkCDkC DaClEuKjT Z l@Qb@iR @}EzJ AdB Und@kAfCaOjZkg@vcAqBzD ]rr@iBlEaBxEgArD}AlG}AhHsAIeAnH{@dIq@dJgL iBq@rHu@vGgAtHwArHaBhHkBzG DpJ}Nbc@iBhGkA EgC LcIjb@oAhG AvDgAdDkApC BzCiBpCsFvGii@vn@scAxlAmLjNgSzUeRjT{TzWqExEmG FuNlMmMhLaRvPqOlNmbAl}@mFlF{PlOmJfIoElE}LtMiSbU HI}}@jcAwl@vp@oAbBqA BeAhCm@tBg@fCWrBQ BI DaB rBO D[bEa@Dm@pDaAdE{@vC BbEkB Def@ z@sEzHKJeS ]}KS{\\ l@cXpe@sBpDm@bAuCxDkBrBiC BwCtByBnAcBx@}Bt@{Bn@gh@ LaOpDeFhAoDj@aE^kVrA E^iEr@yD @uBr@gMjF EnAcCh@eFr@ DRsAD}@Jsu@xCWDqIV}BCeCOyDm@cBa@ DmA}JeE CwAsBcBiBoBuAqBmOoX{CuEkB CoDqDkVoUoD{CeE DkEkC FeCqB}@sDuAoDgAeCe@cCW}CK}BDaDTeOlBcuBrYaNlBq@Dyd@rGyFt@yBb@eBf@oCnAoBlAkIpGkAp@wBbAaCt@oFdAwKjBoGxA{FbByIjC HfB @KmNdDuC @uFzBcH C{@\\[?sBv@}@VaBVoA@y@EmAQcA[w@]aBkAeAkA}BuDUKs@uAqBsCwBcCgAiAiN MyKsJsG{GkBaBiBuA{BwAwDkBcOaHiC AiCg@}BQcCAcBHqBVkB@qEjAu@LgCVgAHwG@sG?mABsH^eNr@mBXy@NqBt@uAt@aBlAkAlA}BtCyApBiAdB BxB{AB}@j@oAf@s@PeCVcIf@gAAkAQy@YiAo@ A{@ DgEgJqM DeEaM}PoBiCzAsBw@kAdAGVk@f@q@z@C Note: Search along route only supports an encoded polyline, which can be passed as a string and includes compression with minimal lossiness.
- Note: Because search along route returns places with minimal detour times from origin to destination, in cases where the route origin and destination are the same or close to one another, search along route may not return any results.
- By default, Text Search (New) performs the search along the entire route from the origin to the destination as defined by the polyline.
- Home Products Google Maps Platform Documentation iOS Places SDK for iOS Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift class GMSPlaceRoutingSummary : NSObject Objective-C @interface GMSPlaceRoutingSummary : NSObject GMSPlaceSearchAlongRouteParameters Additional parameters for searching along a route.
- Declaration Swift class GMSPlaceRouteModifiers : NSObject Objective-C @interface GMSPlaceRouteModifiers : NSObject GMSPlaceRoutingParameters Parameters to configure the routing calculations to the places in the response, both along a route (where result ranking will be influenced) and for calculating travel times on results.
- Declaration Swift class GMSPlaceSearchAlongRouteParameters : NSObject Objective-C @interface GMSPlaceSearchAlongRouteParameters : NSObject GMSPlaceSearchByTextRequest Represents a text search request definition to be sent via GMSPlacesClient .
- Declaration Swift class GMSAutocompleteResultsViewController : UIViewController , UISearchResultsUpdating Objective-C @interface GMSAutocompleteResultsViewController : UIViewController < UISearchResultsUpdating > GMSAutocompleteSessionToken This class represents a session token to uniquely identify a series of queries to the Google Places API Services for fetching place predictions for a partial search string.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift class GMSPlaceRoutingSummary : NSObject Objective-C @interface GMSPlaceRoutingSummary : NSObject GMSPlaceSearchAlongRouteParameters Additional parameters for searching along a route.
- Declaration Swift class GMSPlaceRouteModifiers : NSObject Objective-C @interface GMSPlaceRouteModifiers : NSObject GMSPlaceRoutingParameters Parameters to configure the routing calculations to the places in the response, both along a route (where result ranking will be influenced) and for calculating travel times on results.
- Declaration Swift class GMSPlaceSearchAlongRouteParameters : NSObject Objective-C @interface GMSPlaceSearchAlongRouteParameters : NSObject GMSPlaceSearchByTextRequest Represents a text search request definition to be sent via GMSPlacesClient .
- Declaration Swift class GMSAutocompleteResultsViewController : UIViewController , UISearchResultsUpdating Objective-C @interface GMSAutocompleteResultsViewController : UIViewController < UISearchResultsUpdating > GMSAutocompleteSessionToken This class represents a session token to uniquely identify a series of queries to the Google Places API Services for fetching place predictions for a partial search string.

