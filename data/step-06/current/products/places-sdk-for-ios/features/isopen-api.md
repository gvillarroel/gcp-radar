---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.472Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "isOpen API"
feature_slug: "isopen-api"
latest_feature_date: "2023-07-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/text-search"
keywords:
  - "isopen"
  - "api"
  - "returns"
  - "whether"
  - "place"
  - "is"
  - "open"
  - "at"
---

# isOpen API

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Returns whether a place is open at a specific time using its opening-hours data.

## Extended Definition

Returns whether a place is open at a specific time using its opening-hours data.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)

## Supporting Pages

### Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- Get open status The GMSPlacesClient object contains a member function called isOpenWithRequest ( isOpenRequest in Swift and isPlaceOpenRequest in GooglePlacesSwift) that returns a response indicating whether the place is currently open, based on the time specified in the call.
- Note: The deprecated GMSPlace isOpen: and GMSPlace isOpenAtDate: functions may be inaccurate and are not meant to be used with Places API (New).
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSFetchPlaceRequest object to specify the required parameters.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift func isOpen () -> GMSPlaceOpenStatus Objective-C - ( GMSPlaceOpenStatus ) isOpen ; Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. iconBackgroundColor Background color of the icon according to Place type, to color the view behind the icon.
- Return Value GMSPlaceOpenStatusOpen if the place is open, GMSPlaceOpenStatusClosed if the place is closed, and GMSPlaceOpenStatusUnknown if the open status is unknown. -isOpen Deprecated (This method is deprecated in favor of GMSPlacesClient#isOpen:place:callback and will be removed in a future release.
- Declaration Swift var currentOpeningHours : GMSOpeningHours ? { get } Objective-C @property ( nonatomic , strong , readonly , nullable ) GMSOpeningHours currentOpeningHours ; secondaryOpeningHours Returns an array of this place’s secondary hour(s) of operation over the next seven days.
- Declaration Swift var openingHours : GMSOpeningHours ? { get } Objective-C @property ( nonatomic , strong , readonly , nullable ) GMSOpeningHours openingHours ; currentOpeningHours Returns this place’s hours of operation over the next seven days.

### Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- Get open status The GMSPlacesClient object contains a member function called isOpenWithRequest ( isOpenRequest in Swift and isPlaceOpenRequest in GooglePlacesSwift) that returns a response indicating whether the place is currently open, based on the time specified in the call.
- Additionally, the API can check a place's open status via GMSPlacesClient isOpenWithRequest: and charges different billing SKUs based on the requested data.\n"]]
- Note: The deprecated GMSPlace isOpen: and GMSPlace isOpenAtDate: functions may be inaccurate and are not meant to be used with Places API (New).

### Text Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- GMSPlaceSearchByTextRequest request = [[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"pizza in New York" placeProperties : @[ GMSPlacePropertyName , GMSPlacePropertyPlaceID ] ]; request . isOpenNow = YES ; request . includedType = @"restaurant" ; request . maxResultCount = 5 ; request . minRating = 3.5 ; request . rankPreference = GMSPlaceSearchByTextRankPreferenceDistance ; request . isStrictTypeFiltering = YES ; request . priceLevels = @[ @( kGMSPlacesPriceLevelFree ) , @( kGMSPlacesPriceLevelCheap ) ] ; request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , -74.0 ), 200.0 ); // Array to hold the places in the response placeResults = [ NSArray array ]; // Create the GMSPlaceSearchByTextRequest object. [ placesClient searchByTextWithRequest : request callback : ^ ( NSArray<GMSPlace > Nullable placeResults , NSError Nullable error ) { if ( error != nil ) { NSLog ( @"An error occurred %@" , [ error localizedDescription ]); return ; } else { if ( placeResults . count > 0 ) { // Get list of places. placeResults = placeResults ; } } } ]; Text Search responses The Text Search API returns an array of matches in the form of GMSPlace objects, with one GMSPlace object per matching place.
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- Get open status The GMSPlacesClient object contains a member function called isOpenWithRequest ( isOpenRequest in Swift and isPlaceOpenRequest in GooglePlacesSwift) that returns a response indicating whether the place is currently open, based on the time specified in the call.
- Note: The deprecated GMSPlace isOpen: and GMSPlace isOpenAtDate: functions may be inaccurate and are not meant to be used with Places API (New).

