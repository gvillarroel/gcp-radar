---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.461Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Autocomplete session token exposure"
feature_slug: "autocomplete-session-token-exposure"
latest_feature_date: "2025-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-session-tokens"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing"
keywords:
  - "autocomplete"
  - "session"
  - "token"
  - "exposure"
  - "places"
  - "tokens"
  - "can"
  - "now"
---

# Autocomplete session token exposure

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Places Autocomplete session tokens can now be exposed for use by other services such as Address Validation; Places Autocomplete session tokens can now be exposed for use by other services such as Address Validation.

## Extended Definition

Places Autocomplete session tokens can now be exposed for use by other services such as Address Validation; Places Autocomplete session tokens can now be exposed for use by other services such as Address Validation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens](https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-session-tokens](https://developers.google.com/maps/documentation/places/ios-sdk/place-session-tokens)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing](https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing)

## Supporting Pages

### Use session tokens \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens](https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens)
- Source ID: `site-docs-root`
- Final score: 239
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["This document details the use of session tokens with the Places API.
- Home Products Google Maps Platform Documentation iOS Places SDK for iOS Send feedback Use session tokens Stay organized with collections Save and categorize content based on your preferences.
- Select platform: Android iOS Web Service Session tokens group the query and selection phases of a user autocomplete search into a discrete session for billing purposes.
- Page Summary outlined flag Session tokens are used to group autocomplete search queries and selections for billing purposes.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-session-tokens](https://developers.google.com/maps/documentation/places/ios-sdk/place-session-tokens)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Session tokens cannot be exchanged between Places API (Legacy) endpoints and Places API (New) or Address Validation endpoints.
- Select platform: Android iOS JavaScript Web Service Session tokens Session tokens are user-generated strings (or objects) that track Autocomplete (New) calls as sessions .
- Autocomplete (New) uses session tokens to group the query and selection phases of a user autocomplete search into a discrete session for billing purposes.
- Users can generate session tokens in any manner, although Google recommends using version 4 universally unique identifiers (UUIDs) for session tokens.

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places Swift SDK let center = ( 37.775061 , - 122.419400 ) let radius = 5000.0 let restriction = CircularCoordinateRegion ( center : center , radius : radius ) let filter = AutocompleteFilter ( coordinateRegionRestriction : restriction ) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let center = CLLocationCoordinate2DMake ( 37.775061 , - 122.419400 ) let radius = 5000.0 let filter = GMSAutocompleteFilter () filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ) let request = GMSAutocompleteRequest ( query : "Piz" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D center = CLLocationCoordinate2DMake ( 37.775061 , -122.419400 ); radius = 5000.0 ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; With location bias, the location serves as a bias, which means results around the specified location can be returned, including results outside the specified area.
- You can expose your Places Autocomplete session token in order to pass it to other services that are not a part of the Places SDK for iOS, such as to Address Validation : Places Swift SDK let token = AutocompleteSessionToken () let filter = AutocompleteFilter ( origin : CLLocationCoordinate2DMake ( 39.7 , - 94.5 )) let request = AutocompleteRequest ( query : "Piz" , sessionToken : token , filter : filter ) PlacesClient . shared . fetchAutocompleteSuggestions ( request : request ) { case . success ( let suggestions ): ... case . failure ( let placesError ): print ( placesError ) } // pass token's string format to use with a service that is not a part of iOS SDK. print ( "token: \( token ) " ) Objective-C GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Piz" ]; GMSAutocompleteSessionToken token = [[ GMSAutocompleteSessionToken alloc ] init ]; request . sessionToken = token ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 39.7 longitude : -94.5 ]; filter . locationBias = GMSPlaceRectangularLocationOption ( topLocation , bottomLocation ); request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback : ^ ( NSArray<GMSAutocompleteSuggestion > Nullable results , NSError Nullable error ) { ... }]; // pass token's string format to use with a service that is not a part of iOS SDK.
- This example sets the origin to the center of San Francisco: Places Swift SDK let filter = AutocompleteFilter ( origin : CLLocation ( latitude : 37.7749 , longitude : - 122.4194 )) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Amoeba" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let origin = CLLocation ( latitude : 37.7749 , longitude : - 122.4194 ) let filter = GMSAutocompleteFilter () filter . origin = origin let request = GMSAutocompleteRequest ( query : "Amoeba" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) and distance: \( String ( describing : result . placeSuggestion ?. distanceMeters )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 37.395804 longitude : -122.077023 ]; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Amoeba" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Customize content and theme Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Add a Places Autocomplete widget (full code) Places Swift SDK struct PlaceAutocompleteDemoView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { VStack { Button ( "Search for a place" ) { showWidget . toggle () } . placeAutocomplete ( show : $ showWidget , onSelection : { ( autocompletePlaceSuggestion , autocompleteSessionToken ) in Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : autocompletePlaceSuggestion . placeID , placeProperties : [. displayName , . formattedAddress ], sessionToken : autocompleteSessionToken ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) } } } Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.
- Places Swift SDK let center = ( 37.3913916 , - 122.0879074 ) let northEast = ( 37.388162 , - 122.088137 ) let southWest = ( 37.395804 , - 122.077023 ) let bias = RectangularCoordinateRegion ( northEast : northEast , southWest : southWest ) let filter = AutocompleteFilter ( types : [ . restaurant ], origin : center , coordinateRegionBias : bias ) let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): // Handle suggestions. case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let northWestBounds = CLLocationCoordinate2DMake ( 40.921628 , - 73.700051 ) let southEastBounds = CLLocationCoordinate2DMake ( 40.477398 , - 74.259087 ) let filter = GMSAutocompleteFilter () filter . types = [ kGMSPlaceTypeRestaurant ] filter . locationBias = GMSPlaceRectangularLocationOption ( northWestBounds , southEastBounds ) let request = GMSAutocompleteRequest ( query : "Spagh" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D northEast = CLLocationCoordinate2DMake ( 37.388162 , -122.088137 ); CLLocationCoordinate2D southWest = CLLocationCoordinate2DMake ( 37.395804 , -122.077023 ); GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ kGMSPlaceTypeRestaurant ] ; filter . locationBias = GMSPlaceRectangularLocationOption ( northEast , southWest ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Autocomplete (New) responses Autocomplete returns an array of up to five GMSAutocompleteSuggestion instances.

### "Autocomplete (New) and session pricing \_|\_ Places SDK for iOS \_|\_ Google\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing](https://developers.google.com/maps/documentation/places/ios-sdk/session-pricing)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Session billing Sessions terminating in a Place Details (New) Essentials request For Autocomplete (New) sessions that terminate in a request using fields from SKU: Places API Place Details Essentials : First 12 Autocomplete (New) requests : You are billed for each Autocomplete (New) request, up to a maximum of 12 requests, using the SKU: Autocomplete Requests .
- Note: If you terminate the session by making a request to Place Details (New) using the SKU: Places API Place Details Essentials (IDs Only) , then all requests to Autocomplete (New) are billed using the SKU: Autocomplete Requests , as if you did not use sessions.
- A session starts with the first Autocomplete (New) request that includes a session token, continues through each subsequent Autocomplete (New) request, and is then terminated by a request to Place Details (New) or Address Validation that uses the session token.
- Home Products Google Maps Platform Documentation iOS Places SDK for iOS Send feedback Autocomplete (New) and session pricing Stay organized with collections Save and categorize content based on your preferences.

