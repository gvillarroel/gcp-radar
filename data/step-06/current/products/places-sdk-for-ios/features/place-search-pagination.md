---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.462Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Place Search pagination"
feature_slug: "place-search-pagination"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes"
keywords:
  - "place"
  - "search"
  - "pagination"
  - "is"
  - "now"
  - "supported"
  - "in"
  - "results"
---

# Place Search pagination

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Pagination is now supported in Place Search results; Pagination is now supported in Place Search results.

## Extended Definition

Pagination is now supported in Place Search results; Pagination is now supported in Place Search results.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)

## Supporting Pages

### Text Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Swift public struct PlaceSearchPagination { public var pageSize : Int public var hasNextPage : Bool public func fetchNextPage () async - > SearchByTextResponse } public struct SearchByTextResponse { public var pagination : PlaceSearchPagination ? public var places : [ Place ]? public var error : PlaceError ? } PlacesClient . swift public func searchByText ( with request : SearchByTextRequest ) async - > SearchByTextResponse let searchByTextRequest = SearchByTextRequest ( textQuery : "restaurants" , placeProperties : [ PlaceProperty . displayName ], locationBias : CircularCoordinateRegion ( center : CLLocationCoordinate2D ( latitude : 0 , longitude : 0 ), radius : 100 )) searchByTextRequest . maxResultCount = 10 var searchByTextResponse = await PlacesClient . shared . searchByText ( with : searchByTextRequest ) print ( "Found \( searchByTextResponse . places . count ) places" ) searchByTextResponse . pagination . pageSize = 20 // Continue making requests until no more results are found in pagination object while searchByTextResponse . pagination . hasNextPage { searchByTextResponse = await searchByTextResponse . pagination . fetchNextPage () print ( "Found \( searchByTextResponse . places . count ) places" ) } Objective-C GMSPlaceSearchByTextRequest searchByTextRequest = [[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"restaurants" placeProperties : @[ GMSPlacePropertyAll ] ]; searchByTextRequest . maxResultCount = 10 ; block void ( ^ recursiveCallback )( GMSPlaceSearchByTextResponse , NSError ); recursiveCallback = ^ ( GMSPlaceSearchByTextResponse response , NSError error ) { NSLog ( @"Found %d places" , response . places . count ); if ( response . pagination . hasNextPage ) { [ response . pagination fetchNextPageWithCompletion : recursiveCallback ]; } }; [ GMSPlacesClient . sharedClient searchByTextWithRequest : searchByTextRequest completion : recursiveCallback ]; Required parameters Use the GMSPlaceSearchByTextRequest object to specify the required parameters for the search.
- Places Swift SDK let restriction = GMSPlaceRectangularLocationOption ( northEast : CLLocationCoordinate2D ( latitude : 20 , longitude : 30 ), southWest : CLLocationCoordinate2D ( latitude : 40 , longitude : 50 ) ) let searchByTextRequest = SearchByTextRequest ( textQuery : "pizza in New York" , placeProperties : [ . name , . placeID ], locationRestriction : restriction , includedType : . restaurant , maxResultCount : 5 , minRating : 3.5 , priceLevels : [ . moderate , . inexpensive ], isStrictTypeFiltering : true ) switch await placesClient . searchByText ( with : searchByTextRequest ) { case . success ( let places ): // Handle places case . failure ( let placesError ): // Handle error } Swift // Create the GMSPlaceSearchByTextRequest object. let myProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . placeID ]. map { $0 . rawValue } let request = GMSPlaceSearchByTextRequest ( textQuery : "pizza in New York" , placeProperties : myProperties ) request . isOpenNow = true request . includedType = "restaurant" request . maxResultCount = 5 request . minRating = 3.5 request . rankPreference = . distance request . isStrictTypeFiltering = true request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , - 74.0 ), 200.0 ) // Array to hold the places in the response var placeResults : [ GMSPlace ] = [] let callback : GMSPlaceSearchByTextResultCallback = { [ weak self ] results , error in guard let self , error == nil else { if let error { print ( error . localizedDescription ) } return } guard let results = results as ? [ GMSPlace ] else { return } placeResults = results } GMSPlacesClient . shared (). searchByText ( with : request , callback : callback ) Objective-C // Create the GMSPlaceSearchByTextRequest object.
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Pagination Text Search provides a pagination object , the hasNextPage boolean, that is returned in the first response to a Text Search call.
- GMSPlaceSearchByTextRequest request = [[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"pizza in New York" placeProperties : @[ GMSPlacePropertyName , GMSPlacePropertyPlaceID ] ]; request . isOpenNow = YES ; request . includedType = @"restaurant" ; request . maxResultCount = 5 ; request . minRating = 3.5 ; request . rankPreference = GMSPlaceSearchByTextRankPreferenceDistance ; request . isStrictTypeFiltering = YES ; request . priceLevels = @[ @( kGMSPlacesPriceLevelFree ) , @( kGMSPlacesPriceLevelCheap ) ] ; request . locationBias = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 40.7 , -74.0 ), 200.0 ); // Array to hold the places in the response placeResults = [ NSArray array ]; // Create the GMSPlaceSearchByTextRequest object. [ placesClient searchByTextWithRequest : request callback : ^ ( NSArray<GMSPlace > Nullable placeResults , NSError Nullable error ) { if ( error != nil ) { NSLog ( @"An error occurred %@" , [ error localizedDescription ]); return ; } else { if ( placeResults . count > 0 ) { // Get list of places. placeResults = placeResults ; } } } ]; Text Search responses The Text Search API returns an array of matches in the form of GMSPlace objects, with one GMSPlace object per matching place.

### Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Places Swift SDK let restriction = CircularCoordinateRegion ( center : CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), radius : 500 ) let searchNearbyRequest = SearchNearbyRequest ( locationRestriction : restriction , placeProperties : [ . name , . coordinate ], includedTypes : [ . restaurant , . cafe ], ) switch await placesClient . searchNearby ( with : searchNearbyRequest ) { case . success ( let places ): // Handle places case . failure ( let placesError ): // Handle error } Swift // Array to hold the places in the response var placeResults : [ GMSPlace ] = [] // Define the search area as a 500 meter diameter circle in San Francisco, CA. let circularLocationRestriction = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , - 122.3965 ), 500 ) // Specify the fields to return in the GMSPlace object for each place in the response. let placeProperties = [ GMSPlaceProperty . name , GMSPlaceProperty . coordinate ]. map { $0 . rawValue } // Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return. var request = GMSPlaceSearchNearbyRequest ( locationRestriction : circularLocationRestriction , placeProperties : placeProperties ) let includedTypes = [ "restaurant" , "cafe" ] request . includedTypes = includedTypes let callback : GMSPlaceSearchNearbyResultCallback = { [ weak self ] results , error in guard let self , error == nil else { if let error { print ( error . localizedDescription ) } return } guard let results = results as ? [ GMSPlace ] else { return } placeResults = results } GMSPlacesClient . shared (). searchNearby ( with : request , callback : callback ) Objective-C // Array to hold the places in the response placeResults = [ NSArray array ]; // Define the search area as a 500 meter diameter circle in San Francisco, CA. id<GMSPlaceLocationRestriction> circularLocation = GMSPlaceCircularLocationOption ( CLLocationCoordinate2DMake ( 37.7937 , -122.3965 ), 500 ); // Create the GMSPlaceSearchNearbyRequest, specifying the search area and GMSPlace fields to return.
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSPlaceSearchNearbyRequest object to specify the required parameters for the search.
- NSArray<NSString > includedTypes = @[ @"restaurant" , @"cafe" ] ; request . includedTypes = [[ NSMutableArray alloc ] initWithArray : includedTypes ]; [ placesClient searchNearbyWithRequest : request callback : ^ ( NSArray<GMSPlace > Nullable places , NSError Nullable error ) { if ( error != nil ) { NSLog ( @"An error occurred %@" , [ error localizedDescription ]); return ; } else { // Get list of places. placeResults = places ; } } ]; Nearby Search responses The Nearby Search API returns an array of matches in the form of GMSPlace objects, with one GMSPlace object per matching place.
- Optional parameters Use the GMSPlaceSearchNearbyRequest object to specify the optional parameters for the search. includedTypes/excludedTypes, includedPrimaryTypes/excludedPrimaryTypes Lets you specify a list of types from types Table A used to filter the search results.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference](https://developers.google.com/maps/documentation/places/ios-sdk/reference)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift class GMSAutocompleteResultsViewController : UIViewController , UISearchResultsUpdating Objective-C @interface GMSAutocompleteResultsViewController : UIViewController < UISearchResultsUpdating > GMSAutocompleteSessionToken This class represents a session token to uniquely identify a series of queries to the Google Places API Services for fetching place predictions for a partial search string.
- Declaration Swift class GMSPlaceNeighborhoodSummary : NSObject , GMSPlaceAISummary Objective-C @interface GMSPlaceNeighborhoodSummary : NSObject < GMSPlaceAISummary > GMSPlacePagination Pagination object for {@link GMSPlaceSearchResponse}.
- It is now recommended to use UISearchController with GMSAutocompleteResultsViewController to display autocomplete results using the iOS search UI.
- This parameter may be nil. / - ( instancetype ) initWithFilter :( nullable GMSAutocompleteFilter ) filter NS DESIGNATED INITIALIZER GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Delegate to be notified with autocomplete prediction results. / @property ( nonatomic , weak , nullable ) id < GMSAutocompleteFetcherDelegate > delegate GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Filter to apply to autocomplete suggestions (can be nil). / @property ( nonatomic , strong , nullable ) GMSAutocompleteFilter autocompleteFilter GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Provide a GMSAutocompleteSessionToken for tracking the specific autocomplete query flow. / - ( void ) provideSessionToken :( nullable GMSAutocompleteSessionToken ) sessionToken GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Notify the fetcher that the source text to autocomplete has changed.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift class GMSAutocompleteResultsViewController : UIViewController , UISearchResultsUpdating Objective-C @interface GMSAutocompleteResultsViewController : UIViewController < UISearchResultsUpdating > GMSAutocompleteSessionToken This class represents a session token to uniquely identify a series of queries to the Google Places API Services for fetching place predictions for a partial search string.
- Declaration Swift class GMSPlaceNeighborhoodSummary : NSObject , GMSPlaceAISummary Objective-C @interface GMSPlaceNeighborhoodSummary : NSObject < GMSPlaceAISummary > GMSPlacePagination Pagination object for {@link GMSPlaceSearchResponse}.
- It is now recommended to use UISearchController with GMSAutocompleteResultsViewController to display autocomplete results using the iOS search UI.
- This parameter may be nil. / - ( instancetype ) initWithFilter :( nullable GMSAutocompleteFilter ) filter NS DESIGNATED INITIALIZER GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Delegate to be notified with autocomplete prediction results. / @property ( nonatomic , weak , nullable ) id < GMSAutocompleteFetcherDelegate > delegate GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Filter to apply to autocomplete suggestions (can be nil). / @property ( nonatomic , strong , nullable ) GMSAutocompleteFilter autocompleteFilter GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Provide a GMSAutocompleteSessionToken for tracking the specific autocomplete query flow. / - ( void ) provideSessionToken :( nullable GMSAutocompleteSessionToken ) sessionToken GMS AVAILABLE BUT DEPRECATED MSG ( "Use <code>GMSPlacesClient#fetchAutocompleteSuggestionsFromRequest:callback:</code> " "instead." ) ; / Notify the fetcher that the source text to autocomplete has changed.

