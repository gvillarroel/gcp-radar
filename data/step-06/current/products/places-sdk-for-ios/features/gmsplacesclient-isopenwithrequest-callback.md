---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.469Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "GMSPlacesClient.isOpenWithRequest:callback:"
feature_slug: "gmsplacesclient-isopenwithrequest-callback"
latest_feature_date: "2024-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/details-place"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/text-search"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
keywords:
  - "gmsplacesclient"
  - "isopenwithrequest"
  - "callback"
  - "adds"
  - "an"
  - "api"
  - "that"
  - "determines"
---

# GMSPlacesClient.isOpenWithRequest:callback:

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Adds an API that determines whether a place is open by retrieving the details needed to compute open status.

## Extended Definition

Adds an API that determines whether a place is open by retrieving the details needed to compute open status.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)

## Supporting Pages

### Nearby Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search](https://developers.google.com/maps/documentation/places/ios-sdk/nearby-search)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSPlaceSearchNearbyRequest object to specify the required parameters for the search.
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- Nearby Search (New) requests Make a Nearby Search request by calling GMSPlacesClient searchNearbyWithRequest: , passing a GMSPlaceSearchNearbyRequest object that defines the request parameters and a callback method, of type GMSPlaceSearchNearbyResultCallback , to handle the response.
- Get open status The GMSPlacesClient object contains a member function called isOpenWithRequest ( isOpenRequest in Swift and isPlaceOpenRequest in GooglePlacesSwift) that returns a response indicating whether the place is currently open, based on the time specified in the call.

### Place Details (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/details-place](https://developers.google.com/maps/documentation/places/ios-sdk/details-place)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Required parameters Use the GMSFetchPlaceRequest object to specify the required parameters.
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- Get open status The GMSPlacesClient object contains a member function called isOpenWithRequest ( isOpenRequest in Swift and isPlaceOpenRequest in GooglePlacesSwift) that returns a response indicating whether the place is currently open, based on the time specified in the call.
- Key actions include: enabling Places API (New), using GMSPlacesClient to fetch place details with GMSFetchPlaceRequest, and specifying required place ID and data fields.

### Text Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Places Swift SDK let isOpenRequest = IsPlaceOpenRequest ( place : place ) switch await placesClient . isPlaceOpen ( with : isOpenRequest ) { case . success ( let isOpenResponse ): switch isOpenResponse . status { case true : // Handle open case false : // Handle closed case nil : // Handle unknown case . failure ( let placesError ): // Handle error } Swift let isOpenRequest = GMSPlaceIsOpenRequest ( place : place , date : nil ) GMSPlacesClient . shared (). isOpen ( with : isOpenRequest ) { response , error in if let error = error { // Handle Error } switch response . status { case . open : // Handle open case . closed : // Handle closed case . unknown : // Handle unknown } } Objective-C GMSPlaceIsOpenRequest isOpenRequest = [[ GMSPlaceIsOpenRequest alloc ] initWithPlace : place date : nil ]; [[ GMSPlacesClient sharedClient ] isOpenWithRequest : isOpenRequest callback :^ ( GMSPlaceIsOpenResponse response , NSError Nullable error ) { if ( error ) { // Handle error } switch ( response . status ) { case GMSPlaceOpenStatusOpen : // Handle open case GMSPlaceOpenStatusClosed : // Handle closed case GMSPlaceOpenStatusUnknown : // Handle unknown } }]; Pagination Text Search provides a pagination object , the hasNextPage boolean, that is returned in the first response to a Text Search call.
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- Text Search uses the Places API (New) and requires a text query, with optional location bias and filters, returning an array of GMSPlace objects. iOS implementation involves creating a GMSPlaceSearchByTextRequest and executing the search using GMSPlacesClient searchByTextWithRequest:callback: .
- Get a list of places by text search Make a Text Search request by calling GMSPlacesClient searchByTextWithRequest: , passing a GMSPlaceSearchByTextRequest object that defines the request parameters and a callback method, of type GMSPlaceSearchByTextResultCallback , to handle the response.

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The following example specifies a query string of "Soccer" and uses the types parameter to restrict results to establishments of type "sporting goods store" : Places Swift SDK let filter = AutocompleteFilter ( types : [ PlaceType ( rawValue : "sporting goods store" ) ]) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Soccer" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let filter = GMSAutocompleteFilter () filter . types = [ "sporting goods store" ] let request = GMSAutocompleteRequest ( query : "Soccer" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ "sporting goods store" ] ; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Soccer" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Use origin When you include the origin parameter in the request, specified as latitude and longitude coordinates, the API includes the straight-line distance from the origin to the destination in the response.
- You can expose your Places Autocomplete session token in order to pass it to other services that are not a part of the Places SDK for iOS, such as to Address Validation : Places Swift SDK let token = AutocompleteSessionToken () let filter = AutocompleteFilter ( origin : CLLocationCoordinate2DMake ( 39.7 , - 94.5 )) let request = AutocompleteRequest ( query : "Piz" , sessionToken : token , filter : filter ) PlacesClient . shared . fetchAutocompleteSuggestions ( request : request ) { case . success ( let suggestions ): ... case . failure ( let placesError ): print ( placesError ) } // pass token's string format to use with a service that is not a part of iOS SDK. print ( "token: \( token ) " ) Objective-C GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Piz" ]; GMSAutocompleteSessionToken token = [[ GMSAutocompleteSessionToken alloc ] init ]; request . sessionToken = token ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 39.7 longitude : -94.5 ]; filter . locationBias = GMSPlaceRectangularLocationOption ( topLocation , bottomLocation ); request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback : ^ ( NSArray<GMSAutocompleteSuggestion > Nullable results , NSError Nullable error ) { ... }]; // pass token's string format to use with a service that is not a part of iOS SDK.
- This example sets the origin to the center of San Francisco: Places Swift SDK let filter = AutocompleteFilter ( origin : CLLocation ( latitude : 37.7749 , longitude : - 122.4194 )) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Amoeba" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let origin = CLLocation ( latitude : 37.7749 , longitude : - 122.4194 ) let filter = GMSAutocompleteFilter () filter . origin = origin let request = GMSAutocompleteRequest ( query : "Amoeba" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) and distance: \( String ( describing : result . placeSuggestion ?. distanceMeters )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 37.395804 longitude : -122.077023 ]; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Amoeba" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Customize content and theme Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Add a Places Autocomplete widget (full code) Places Swift SDK struct PlaceAutocompleteDemoView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { VStack { Button ( "Search for a place" ) { showWidget . toggle () } . placeAutocomplete ( show : $ showWidget , onSelection : { ( autocompletePlaceSuggestion , autocompleteSessionToken ) in Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : autocompletePlaceSuggestion . placeID , placeProperties : [. displayName , . formattedAddress ], sessionToken : autocompleteSessionToken ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) } } } Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places Swift SDK let center = ( 37.775061 , - 122.419400 ) let radius = 5000.0 let restriction = CircularCoordinateRegion ( center : center , radius : radius ) let filter = AutocompleteFilter ( coordinateRegionRestriction : restriction ) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let center = CLLocationCoordinate2DMake ( 37.775061 , - 122.419400 ) let radius = 5000.0 let filter = GMSAutocompleteFilter () filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ) let request = GMSAutocompleteRequest ( query : "Piz" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D center = CLLocationCoordinate2DMake ( 37.775061 , -122.419400 ); radius = 5000.0 ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; With location bias, the location serves as a bias, which means results around the specified location can be returned, including results outside the specified area.

