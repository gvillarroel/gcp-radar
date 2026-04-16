---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.468Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Firebase App Check token support"
feature_slug: "firebase-app-check-token-support"
latest_feature_date: "2024-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/app-check"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/support"
keywords:
  - "firebase"
  - "app"
  - "check"
  - "token"
  - "for"
  - "to"
  - "help"
  - "protect"
---

# Firebase App Check token support

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

Support for Firebase App Check to help protect against malicious requests.

## Extended Definition

Support for Firebase App Check to help protect against malicious requests.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/app-check](https://developers.google.com/maps/documentation/places/ios-sdk/app-check)
- [https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens](https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/support](https://developers.google.com/maps/documentation/places/ios-sdk/support)

## Supporting Pages

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/app-check](https://developers.google.com/maps/documentation/places/ios-sdk/app-check)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the following import statements and class definition: Places Swift SDK for iOS // AppCheckTokenProvider.swift import FirebaseAppCheck import Foundation import GooglePlacesSwift struct TokenProvider : AppCheckTokenProvider { func fetchAppCheckToken () async throws - > String { return try await AppCheck . appCheck (). token ( forcingRefresh : false ). token } } Swift // AppCheckTokenProvider.swift import FirebaseAppCheck import Foundation import GooglePlaces class AppCheckTokenProvider : NSObject , GMSPlacesAppCheckTokenProvider { func fetchAppCheckToken () async throws - > String { return try await AppCheck . appCheck (). token ( forcingRefresh : false ). token } } Objective-C // AppCheckTokenProvider.h @import Foundation ; @import GooglePlaces ; @interface AppCheckTokenProvider : NSObject < GMSPlacesAppCheckTokenProvider > @end // AppCheckTokenProvider.m #import "AppCheckTokenProvider.h" @import FirebaseAppCheck ; @implementation AppCheckTokenProvider - ( void ) fetchAppCheckTokenWithCompletion: ( nonnull GMSAppCheckTokenCompletion ) completion { [[ FIRAppCheck appCheck ] tokenForcingRefresh : NO completion : ^ ( FIRAppCheckToken Nullable token , NSError Nullable error ) { if ( token ) { completion ( token . token , nil ); } else { completion ( nil , error ); } }]; } @end Step 4: Initialize the Places and App Check APIs In your AppDelegate file, initialize the Places API: Places Swift SDK for iOS PlacesClient . provideAPIKey ( "YOUR API KEY" ) Swift GMSPlacesClient . provideAPIKey ( "YOUR API KEY" ) Objective-C [ GMSPlacesClient provideAPIKey : @"YOUR API KEY" ]; Then, initialize the App Check API: Places Swift SDK for iOS PlacesClient . setAppCheckTokenProvider ( AppCheckTokenProvider ()) Swift GMSPlacesClient . setAppCheckTokenProvider ( AppCheckTokenProvider ()) Objective-C [ GMSPlacesClient setAppCheckTokenProvider : [[ AppCheckTokenProvider alloc ] init ]]; Step 5: Enable debugging (optional) If you'd like to develop and test your app locally, or run it in a continuous integration (CI) environment, you can create a debug build of your app that uses a debug secret to obtain valid App Check tokens.
- Select platform: Android iOS JavaScript Use App Check to secure your API key Firebase App Check provides protection for calls from your app to Google Maps Platform by blocking traffic that comes from sources other than legitimate apps.
- Integrating your apps with App Check helps to protect against malicious requests, so you're not charged for unauthorized API calls.
- Places Swift SDK for iOS let providerFactory = YourAppCheckProviderFactory () AppCheck . setAppCheckProviderFactory ( providerFactory ) Swift let providerFactory = YourAppCheckProviderFactory () AppCheck . setAppCheckProviderFactory ( providerFactory ) Objective-C YourAppCheckProviderFactory providerFactory = [[ YourAppCheckProviderFactory alloc ] init ]; [ FIRAppCheck setAppCheckProviderFactory : providerFactory ]; If you are using Device Check, add the following to your AppDelegate : Places Swift SDK for iOS AppCheck . setAppCheckProviderFactory ( DeviceCheckProviderFactory ()) Swift AppCheck . setAppCheckProviderFactory ( DeviceCheckProviderFactory ()) Objective-C [ FIRAppCheck setAppCheckProviderFactory : providerFactory ]; Step 3: Add the token provider Create a file called AppCheckTokenProvider (or, if you are using Objective-C, two files called AppCheckTokenProvider.h and AppCheckTokenProvider.m ) at the root level of your app.

### Use session tokens \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens](https://developers.google.com/maps/documentation/places/ios-sdk/use-session-tokens)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, an app using Project A and an app using Project B can use the same session token, but multiple apps using Project A cannot use the same session token.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],["This document details the use of session tokens with the Places API.
- As the user types, the API makes an autocomplete request every few characters, displaying a new list of potential results for each: "P" "Par" "Paris," "Paris, Fr" When the user makes a selection: All requests resulting from the query are grouped and added to the session represented by "Token A", as a single request.
- Home Products Google Maps Platform Documentation iOS Places SDK for iOS Send feedback Use session tokens Stay organized with collections Save and categorize content based on your preferences.

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- This example sets the origin to the center of San Francisco: Places Swift SDK let filter = AutocompleteFilter ( origin : CLLocation ( latitude : 37.7749 , longitude : - 122.4194 )) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Amoeba" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let origin = CLLocation ( latitude : 37.7749 , longitude : - 122.4194 ) let filter = GMSAutocompleteFilter () filter . origin = origin let request = GMSAutocompleteRequest ( query : "Amoeba" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) and distance: \( String ( describing : result . placeSuggestion ?. distanceMeters )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 37.395804 longitude : -122.077023 ]; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Amoeba" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Customize content and theme Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Add a Places Autocomplete widget (full code) Places Swift SDK struct PlaceAutocompleteDemoView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { VStack { Button ( "Search for a place" ) { showWidget . toggle () } . placeAutocomplete ( show : $ showWidget , onSelection : { ( autocompletePlaceSuggestion , autocompleteSessionToken ) in Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : autocompletePlaceSuggestion . placeID , placeProperties : [. displayName , . formattedAddress ], sessionToken : autocompleteSessionToken ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) } } } Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.
- When requesting Place Details (New) about the selected prediction, include the following parameters: The place ID from the Autocomplete (New) response The session token used in the Autocomplete (New) request The fields parameter specifying the Autocomplete (New) data fields you need No, needs only address and location Geocoding API could be a more cost-effective option than Place Details (New) for your application, depending on the performance of your Autocomplete (New) usage.
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places Swift SDK let center = ( 37.775061 , - 122.419400 ) let radius = 5000.0 let restriction = CircularCoordinateRegion ( center : center , radius : radius ) let filter = AutocompleteFilter ( coordinateRegionRestriction : restriction ) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let center = CLLocationCoordinate2DMake ( 37.775061 , - 122.419400 ) let radius = 5000.0 let filter = GMSAutocompleteFilter () filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ) let request = GMSAutocompleteRequest ( query : "Piz" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D center = CLLocationCoordinate2DMake ( 37.775061 , -122.419400 ); radius = 5000.0 ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; With location bias, the location serves as a bias, which means results around the specified location can be returned, including results outside the specified area.
- Places Swift SDK let center = ( 37.3913916 , - 122.0879074 ) let northEast = ( 37.388162 , - 122.088137 ) let southWest = ( 37.395804 , - 122.077023 ) let bias = RectangularCoordinateRegion ( northEast : northEast , southWest : southWest ) let filter = AutocompleteFilter ( types : [ . restaurant ], origin : center , coordinateRegionBias : bias ) let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): // Handle suggestions. case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let northWestBounds = CLLocationCoordinate2DMake ( 40.921628 , - 73.700051 ) let southEastBounds = CLLocationCoordinate2DMake ( 40.477398 , - 74.259087 ) let filter = GMSAutocompleteFilter () filter . types = [ kGMSPlaceTypeRestaurant ] filter . locationBias = GMSPlaceRectangularLocationOption ( northWestBounds , southEastBounds ) let request = GMSAutocompleteRequest ( query : "Spagh" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D northEast = CLLocationCoordinate2DMake ( 37.388162 , -122.088137 ); CLLocationCoordinate2D southWest = CLLocationCoordinate2DMake ( 37.395804 , -122.077023 ); GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . types = @[ kGMSPlaceTypeRestaurant ] ; filter . locationBias = GMSPlaceRectangularLocationOption ( northEast , southWest ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Autocomplete (New) responses Autocomplete returns an array of up to five GMSAutocompleteSuggestion instances.

### Support Options for Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/support](https://developers.google.com/maps/documentation/places/ios-sdk/support)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support response times Support response times are indicated in the table below (resolution times may vary): Priority level Example situations Standard Support response time Enhanced Support response time Critical Impact - Service Unusable in Production Applies only to Google Maps Platform services marked as General Availability Your situation matches all the following criteria: Your product or service is unusable in production, or business impact is critical (for example, revenue loss).
- 1 hour on weekdays, excluding regional holidays 1 hour on weekdays and weekends High Impact - Service Severely Impaired Applies only to Google Maps Platform services marked as General Availability Your product or service is degraded in production, having a noticeable rate of user-facing errors.
- Search existing questions When posting a new question, please consider the following: Be very clear about your question in the subject — it helps those trying to answer your question as well as those who may be looking for information in the future.
- Sign up for, or cancel, a support service Only Billing Administrators can change the selected support service, since it will apply to all projects linked to your current Google Cloud Billing account.

