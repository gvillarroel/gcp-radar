---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.466Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Place Autocomplete widget"
feature_slug: "place-autocomplete-widget"
latest_feature_date: "2025-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/legacy/overview-legacy"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/overview-legacy"
keywords:
  - "place"
  - "autocomplete"
  - "widget"
  - "available"
  - "for"
  - "new"
  - "that"
  - "provides"
---

# Place Autocomplete widget

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

A widget available for Autocomplete (New) that provides place autocomplete functionality; A widget available for Autocomplete (New) that provides place autocomplete functionality.

## Extended Definition

A widget available for Autocomplete (New) that provides place autocomplete functionality; A widget available for Autocomplete (New) that provides place autocomplete functionality.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)
- [https://developers.google.com/maps/documentation/places/ios-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/ios-sdk/legacy/overview-legacy)
- [https://developers.google.com/maps/documentation/places/ios-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/ios-sdk/overview-legacy)

## Supporting Pages

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The Autocomplete (New) widget is only available in the Places Swift SDK for iOS version 10.0.0 and later.
- Note: The Autocomplete (New) widget is only available in the Places Swift SDK for iOS version 10.0.0 and later.
- This example sets the origin to the center of San Francisco: Places Swift SDK let filter = AutocompleteFilter ( origin : CLLocation ( latitude : 37.7749 , longitude : - 122.4194 )) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Amoeba" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let origin = CLLocation ( latitude : 37.7749 , longitude : - 122.4194 ) let filter = GMSAutocompleteFilter () filter . origin = origin let request = GMSAutocompleteRequest ( query : "Amoeba" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) and distance: \( String ( describing : result . placeSuggestion ?. distanceMeters )) " ) } } }) Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . origin = [[ CLLocation alloc ] initWithLatitude : 37.395804 longitude : -122.077023 ]; GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Amoeba" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; Customize content and theme Swift let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) Add a Places Autocomplete widget (full code) Places Swift SDK struct PlaceAutocompleteDemoView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { VStack { Button ( "Search for a place" ) { showWidget . toggle () } . placeAutocomplete ( show : $ showWidget , onSelection : { ( autocompletePlaceSuggestion , autocompleteSessionToken ) in Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : autocompletePlaceSuggestion . placeID , placeProperties : [. displayName , . formattedAddress ], sessionToken : autocompleteSessionToken ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) } } } Autocomplete (New) optimization This section describes best practices to help you make the most of the Autocomplete (New) service.
- Optional parameters sessionToken Session tokens are user-generated strings that track Autocomplete (New) calls—both calls made through the widget and programmatic calls—as "sessions." Autocomplete (New) uses session tokens to group the query and selection phases of a user autocomplete search into a discrete session for billing purposes.

### Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit](https://developers.google.com/maps/documentation/places/ios-sdk/basic-place-autocomplete-ui-kit)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AutocompleteUICustomization (), show : $ showWidget , onSelection : { place in guard let placeID = place . placeID else { self . placesError = . internal ( "Could not fetch place details because place ID from selected suggestion not found." ) return } Task { let placesClient = await PlacesClient . shared let fetchPlaceRequest = FetchPlaceRequest ( placeID : placeID , placeProperties : [. displayName , . formattedAddress ] ) switch await placesClient . fetchPlace ( with : fetchPlaceRequest ) { case . success ( let place ): print ( "Fetched place: \( place ) " ) self . fetchedPlace = place case . failure ( let placesError ): print ( "Failed to fetch place: \( placesError ) " ) self . placesError = placesError } } }, onError : { placesError in self . placesError = placesError } ) if let placesError = $ placesError . wrappedValue { Text ( placesError . localizedDescription ) . frame ( maxWidth : . infinity , alignment : . leading ) } else if let fetchedPlace = $ fetchedPlace . wrappedValue { Text ( " \( fetchedPlace ) " ) . frame ( maxWidth : . infinity , alignment : . leading ) } } } } Customize the theme Swift @ Environment ( \ . colorScheme ) var colorScheme var theme : PlacesMaterialTheme { if customTheme { var theme = PlacesMaterialTheme () var color = PlacesMaterialColor () color . surface = ( colorScheme == . dark ? . blue : . gray ) color . outlineDecorative = ( colorScheme == . dark ? . white : . black ) color . onSurface = ( colorScheme == . dark ? . yellow : . red ) color . onSurfaceVariant = ( colorScheme == . dark ? . white : . blue ) color . onSecondaryContainer = ( colorScheme == . dark ? . white : . red ) color . secondaryContainer = ( colorScheme == . dark ? . green : . purple ) color . positive = ( colorScheme == . dark ? . yellow : . red ) color . primary = ( colorScheme == . dark ? . yellow : . purple ) color . info = ( colorScheme == . dark ? . yellow : . purple ) var shape = PlacesMaterialShape () shape . cornerRadius = 10 var font = PlacesMaterialFont () font . labelLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 18 )) font . headlineMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyLarge = . system ( size : UIFontMetrics . default . scaledValue ( for : 15 )) font . bodyMedium = . system ( size : UIFontMetrics . default . scaledValue ( for : 12 )) font . bodySmall = . system ( size : UIFontMetrics . default . scaledValue ( for : 11 )) var attribution = PlacesMaterialAttribution () attribution . lightModeColor = . black attribution . darkModeColor = . white theme . color = color theme . shape = shape theme . font = font theme . attribution = attribution } else { return PlacesMaterialTheme () } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Swift // Note: You must provide an API key in your app entry point first. // A demo view of the basic place autocomplete widget. public struct BasicPlaceAutocompleteView : View { @ State private var fetchedPlace : Place ? @ State private var placesError : PlacesError ? @ State private var showWidget = false public var body : some View { let types : Set<PlaceType> = [. accounting ] let countries : Set<String> = [ "US" ] let origin = CLLocation ( latitude : 36.19030535579595 , longitude : - 115.25397680618019 ) let coordinateRegion = RectangularCoordinateRegion ( northEast : CLLocationCoordinate2D ( latitude : 36.25290087640495 , longitude : - 115.08025549571225 ), southWest : CLLocationCoordinate2D ( latitude : 36.06607422287787 , longitude : - 115.33431432920293 ) ) let regionCode = "US" let inputOffset = 10 let filter = AutocompleteFilter ( types : types , countries : countries , origin : origin , coordinateRegionBias : coordinateRegion , regionCode : regionCode ) let uiCustomization = AutocompleteUICustomization ( listDensity : . multiLine , listItemIcon : . noIcon , theme : PlacesMaterialTheme () ) VStack { Button ( "Search for a place" ) { showWidget . toggle () } . basicPlaceAutocomplete ( filter : filter , uiCustomization : uiCustomization ??
- Add the Basic Autocomplete component to your app Set the autocomplete filter parameters (for example, the types to return, the country to limit results to, the region coordinates for results, and distance information if the users origin is set) as you would to use Place Autocomplete (New) without the Places UI Kit.
- Select platform: Android iOS JavaScript Basic Place Autocomplete component The Basic Place Autocomplete component of the Places UI Kit lets you add an individual UI component that returns a place ID when a user selects a place.

### Places SDK (Legacy) overview \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/legacy/overview-legacy](https://developers.google.com/maps/documentation/places/ios-sdk/legacy/overview-legacy)
- Source ID: `site-docs-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Places SDK for iOS (New) Minimum SDK Version Places SDK for iOS Minimum SDK Version Place Details (New) 9.0.0 Place Details 3.0.0 Place Photo (New) 9.0.0 Place Photo 3.0.0 Text Search (New) 8.5.0 Nearby Search (New) 9.0.0 Autocomplete (New) 9.0.0 Autocomplete 3.0.0 Current Place 3.0.0 Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for iOS (New) This section covers key features added to Places SDK for iOS (New).
- New features The Places SDK for iOS (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) Simplified pricing Pricing is simplified with Places SDK for iOS (New) so that you only pay for the data you use.
- Improved performance Places SDK for iOS (New) provides improved performance, making it worthwhile to replace apps that use the existing SDK.
- This standard design brings a level of consistency across the SDKs that improve the efficiency of development with Places SDK for iOS (New).

### Places SDK (Legacy) overview \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/overview-legacy](https://developers.google.com/maps/documentation/places/ios-sdk/overview-legacy)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SDK features available in each version The following table shows which SDK and API versions are required for each SDK feature: Places SDK for iOS (New) Minimum SDK Version Places SDK for iOS Minimum SDK Version Place Details (New) 9.0.0 Place Details 3.0.0 Place Photo (New) 9.0.0 Place Photo 3.0.0 Text Search (New) 8.5.0 Nearby Search (New) 9.0.0 Autocomplete (New) 9.0.0 Autocomplete 3.0.0 Current Place 3.0.0 Migrate to the new APIs To migrate to the new APIs, see the following migration guides: Migrate to Place Details (New) Migrate to Place Photo (New) Migrate to Autocomplete (New) Enhancements in Places SDK for iOS (New) This section covers key features added to Places SDK for iOS (New).
- New features The Places SDK for iOS (New) includes the latest versions of all of the SDK features: Autocomplete (New) Place Details (New) Nearby Search (New) Place Photos (New) Text Search (New) Simplified pricing Pricing is simplified with Places SDK for iOS (New) so that you only pay for the data you use.
- Improved performance Places SDK for iOS (New) provides improved performance, making it worthwhile to replace apps that use the existing SDK.
- This standard design brings a level of consistency across the SDKs that improve the efficiency of development with Places SDK for iOS (New).

