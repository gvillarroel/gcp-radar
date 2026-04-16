---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.465Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Basic Place Autocomplete component"
feature_slug: "basic-place-autocomplete-component"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview"
keywords:
  - "basic"
  - "place"
  - "autocomplete"
  - "component"
  - "the"
  - "places"
  - "ui"
  - "kit"
---

# Basic Place Autocomplete component

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

The Places UI Kit Basic Place Autocomplete component provides a full-screen search bar with autocomplete results as users type.

## Extended Definition

The Places UI Kit Basic Place Autocomplete component provides a full-screen search bar with autocomplete results as users type.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)
- [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling)
- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview)

## Supporting Pages

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)
- Source ID: `site-docs-root`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add the Basic Autocomplete component to your app Set the autocomplete filter parameters (for example, the types to return, the country to limit results to, the region coordinates for results, and distance information if the users origin is set) as you would to use Place Autocomplete (New) without the Places UI Kit.
- Select platform: Android iOS JavaScript Basic Place Autocomplete component The Basic Place Autocomplete component of the Places UI Kit lets you add an individual UI component that returns a place ID when a user selects a place.
- Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Example Add a Basic Autocomplete component Important: Set the initial value of showWidget to false in order to have your customized component appear when the user clicks the button.
- Swift // Note: You must provide an API key in your app entry point first. // A demo view of the basic place autocomplete widget. public struct BasicPlaceAutocompleteView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { let types : Set<PlaceType> = [. accounting ] let countries : Set<String> = [ "US" ] let origin = CLLocation ( latitude : 36.19030535579595 , longitude : - 115.25397680618019 ) let coordinateRegion = RectangularCoordinateRegion ( northEast : CLLocationCoordinate2D ( latitude : 36.25290087640495 , longitude : - 115.08025549571225 ), southWest : CLLocationCoordinate2D ( latitude : 36.06607422287787 , longitude : - 115.33431432920293 ) ) let regionCode = "US" let inputOffset = 10 let filter = AutocompleteFilter ( types : types , countries : countries , origin : origin , coordinateRegionBias : coordinateRegion , regionCode : regionCode ) let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) VStack { Button ( "Search for a place" ) { showWidget . toggle () } . basicPlaceAutocomplete ( filter : filter , uiCustomization : uiCustomization ??

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-custom-styling)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Customizeable style properties Visual customization examples You can customize the colors, typography, spacing, borders, and corners of these Places UI kit components and non-UI kit features: Place Details component Place Search component Basic Place Autocomplete component Non-UI Kit Place Autocomplete widget Places UI kit offers a design system approach to visual customization roughly based on Material Design (with some Google-Maps-specific modifications).
- Swift // Same for compact and full func makeTemplateTheme ( colorScheme : ColorScheme ) - > PlacesMaterialTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . buttonBorder = ( colorScheme == . dark ? . pink : . orange ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . measurement . borderWidthButton = 1 theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution return theme } Full examples for each component or feature Place Details component styling example .
- The Places UI Kit provides a dark theme by default, so you may need to customize both dark and light themes.
- Use the Customization tool to visualize custom configurations in a Places UI Kit element.

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This example sets the origin to the center of San Francisco: Places Swift SDK let filter = AutocompleteFilter ( origin : CLLocation ( latitude : 37.7749 , longitude : - 122.4194 )) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Amoeba" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let origin = CLLocation ( latitude : 37.7749 , longitude : - 122.4194 ) let filter = GMSAutocompleteFilter () filter . origin = origin let request = GMSAutocompleteRequest ( query : "Amoeba" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) and distance: \( String ( describing : result . placeSuggestion ?. distanceMeters )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 37.395804 longitude : -122.077023 ]; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Amoeba" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Customize content and theme Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Add a Places Autocomplete widget (full code) Places Swift SDK struct PlaceAutocompleteDemoView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { VStack { Button ( "Search for a place" ) { showWidget . toggle () } . placeAutocomplete ( show : $ showWidget , onSelection : { ( autocompletePlaceSuggestion , autocompleteSessionToken ) in Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : autocompletePlaceSuggestion . placeID , placeProperties : [. displayName , . formattedAddress ], sessionToken : autocompleteSessionToken ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) } } } Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.
- Since your application requires Place Details (New), such as the place name, business status, or opening hours, your implementation of Autocomplete (New) should use a session token (programmatically or built into the JavaScript , Android , or iOS widgets) per session plus applicable Places SKUs, depending on which place data fields you request.
- Here are some general guidelines: The quickest way to develop a working user interface is to use the Maps JavaScript API Autocomplete (New) widget , Places SDK for Android Autocomplete (New) widget , or Places SDK for iOS Autocomplete (New) widget .
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places Swift SDK let center = ( 37.775061 , - 122.419400 ) let radius = 5000.0 let restriction = CircularCoordinateRegion ( center : center , radius : radius ) let filter = AutocompleteFilter ( coordinateRegionRestriction : restriction ) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let center = CLLocationCoordinate2DMake ( 37.775061 , - 122.419400 ) let radius = 5000.0 let filter = GMSAutocompleteFilter () filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ) let request = GMSAutocompleteRequest ( query : "Piz" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D center = CLLocationCoordinate2DMake ( 37.775061 , -122.419400 ); radius = 5000.0 ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; With location bias, the location serves as a bias, which means results around the specified location can be returned, including results outside the specified area.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview](https://developers.google.com/maps/documentation/places/ios-sdk/places-ui-kit-overview)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select platform: Android iOS JavaScript Places UI Kit The Places UI Kit component library lets you bring the familiar Google Maps user experience for Places to your apps and web pages, using the same data that powers the Places API.
- The Places UI Kit provides the following components for rendering Places data: Place Details renders details for a selected place.
- Places UI Kit Note: The Places UI Kit component library is only available in the PlacesSwift SDK .
- It includes an individual UI component that can be used independently, together, or in conjunction with other Google Maps Platform APIs to deliver a Places-rich experience with minimal cost and code.

