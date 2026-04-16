---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:07.466Z"
product_name: "Places SDK for iOS"
product_slug: "places-sdk-for-ios"
feature_name: "Pure Service Area Business attribute"
feature_slug: "pure-service-area-business-attribute"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter"
  - "https://developers.google.com/maps/documentation/places/ios-sdk/text-search"
keywords:
  - "pure"
  - "area"
  - "business"
  - "attribute"
  - "an"
  - "that"
  - "indicates"
  - "whether"
---

# Pure Service Area Business attribute

Product: Places SDK for iOS
Coverage: MEDIUM

## Step 02 Summary

An attribute that indicates whether a place is a pure service area business and includes those businesses in text search and autocomplete results; An attribute that indicates whether a place is a pure service area business and includes those businesses in text search and autocomplete results.

## Extended Definition

An attribute that indicates whether a place is a pure service area business and includes those businesses in text search and autocomplete results; An attribute that indicates whether a place is a pure service area business and includes those businesses in text search and autocomplete results.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)
- [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)

## Supporting Pages

### Place Autocomplete (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete](https://developers.google.com/maps/documentation/places/ios-sdk/place-autocomplete)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- For example: Places Swift SDK let filter = AutocompleteFilter () filter . shouldIncludePureServiceAreaBusinesses = true Swift let filter = AutocompleteFilter () filter . shouldIncludePureServiceAreaBusinesses = true Objective-C GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . shouldIncludePureServiceAreaBusinesses = YES ; Add the Place Autocomplete widget To more easily provide a consistent place autocomplete experience, you can add the Place Autocomplete widget to your app.
- The parameter can affect results based on applicable law. shouldIncludePureServiceAreaBusinesses If true , returns pure service area businesses in the response array.
- A pure service area business is a business that visits or delivers to customers directly, but does not serve customers at their business address.
- The following example uses location restriction to limit the request to a circular location restriction with a 5000-meter radius centered on San Francisco: Places Swift SDK let center = ( 37.775061 , - 122.419400 ) let radius = 5000.0 let restriction = CircularCoordinateRegion ( center : center , radius : radius ) let filter = AutocompleteFilter ( coordinateRegionRestriction : restriction ) let token = AutocompleteSessionToken () let autocompleteRequest = AutocompleteRequest ( query : "Sicilian piz" , sessionToken : token , filter : filter ) switch await placesClient . fetchAutocompleteSuggestions ( with : autocompleteRequest ) { case . success ( let autocompleteSuggestions ): for suggestion in autocompleteSuggestions { switch suggestion { case . place : // Show place suggestion data. } } case . failure ( let placesError ): // Handle error. } Swift let token = GMSAutocompleteSessionToken () let center = CLLocationCoordinate2DMake ( 37.775061 , - 122.419400 ) let radius = 5000.0 let filter = GMSAutocompleteFilter () filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ) let request = GMSAutocompleteRequest ( query : "Piz" ) request . filter = filter request . sessionToken = token GMSPlacesClient . shared (). fetchAutocompleteSuggestions ( from : request , callback : { ( results , error ) in if let error = error { print ( "Autocomplete error: \( error ) " ) return } if let autocompleteResults = results { for result in autocompleteResults { print ( "Result \( String ( describing : result . placeSuggestion ?. placeID )) with \( String ( describing : result . placeSuggestion ?. attributedFullText )) " ) } } }) Objective-C CLLocationCoordinate2D center = CLLocationCoordinate2DMake ( 37.775061 , -122.419400 ); radius = 5000.0 ; GMSAutocompleteFilter filter = [[ GMSAutocompleteFilter alloc ] init ]; filter . locationRestriction = GMSPlaceCircularLocationOption ( center , radius ); GMSAutocompleteRequest request = [[ GMSAutocompleteRequest alloc ] initWithQuery : @"Sicilian piz" ]; request . sessionToken = token ; request . filter = filter ; [[ GMSPlacesClient sharedClient ] fetchAutocompleteSuggestionsFromRequest : request callback :^ ( NSArray<GMSAutocompleteSuggestion > results , NSError error ){ // Handle response for ( GMSAutocompleteSuggestion suggestion in results ) { if ( suggestion . placeSuggestion ) { // Show place suggestion data. } } }]; With location bias, the location serves as a bias, which means results around the specified location can be returned, including results outside the specified area.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSPlace)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Declaration Swift var wheelchairAccessibleEntrance : GMSBooleanPlaceAttribute { get } Objective-C @property ( nonatomic , readonly ) GMSBooleanPlaceAttribute wheelchairAccessibleEntrance ; pureServiceAreaBusiness Place Attribute indicating place is a pure service area business.
- Declaration Swift var pureServiceAreaBusiness : GMSBooleanPlaceAttribute { get } Objective-C @property ( nonatomic , readonly ) GMSBooleanPlaceAttribute pureServiceAreaBusiness ; outdoorSeating Place Attribute indicating place has outdoor seating services.
- A pure service area business is a business that visits or delivers to customers directly, but does not serve customers at their business address.
- Address descriptors include additional information that help describe a location using landmarks and areas.

### "GooglePlaces Framework Reference \_|\_ Places SDK for iOS \_|\_ Google for\

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter](https://developers.google.com/maps/documentation/places/ios-sdk/reference/objc/Classes/GMSAutocompleteFilter)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Declaration Swift var shouldIncludePureServiceAreaBusinesses : Bool { get set } Objective-C @property ( nonatomic ) BOOL shouldIncludePureServiceAreaBusinesses ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Declaration Swift var inputOffset : Int32 { get set } Objective-C @property ( nonatomic ) int32 t inputOffset ; shouldIncludePureServiceAreaBusinesses Whether pure service area businesses should be included in the results.
- A pure service area business is a business that visits or delivers to customers directly, but does not serve customers at their business address.
- Declaration Swift var regionCode : String ? { get set } Objective-C @property ( nonatomic , nullable ) NSString regionCode ; inputOffset inputOffset is the character offset of the input that indicates where the completions may start from.

### Text Search (New) \_|\_ Places SDK for iOS \_|\_ Google for Developers

- URL: [https://developers.google.com/maps/documentation/places/ios-sdk/text-search](https://developers.google.com/maps/documentation/places/ios-sdk/text-search)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- The GMSPlaceIsOpenWithRequest method requires the following fields to be set in the GMSPlace object: GMSPlacePropertyUTCOffsetMinutes GMSPlacePropertyBusinessStatus GMSPlacePropertyOpeningHours GMSPlacePropertyCurrentOpeningHours GMSPlacePropertySecondaryOpeningHours If these fields are not provided in the Place object, or if you pass a place ID, the method uses GMSPlacesClient GMSFetchPlaceRequest: to fetch them. isOpenWithRequest response isOpenWithRequest returns a GMSPlaceIsOpenResponse object containing a boolean value named status that indicates whether the business is open, closed, or if the status is unknown.
- For example: Places Swift SDK let request = SearchByTextRequest () request . shouldIncludePureServiceAreaBusinesses = true Swift let request = SearchByTextRequest () request . shouldIncludePureServiceAreaBusinesses : true Objective-C GMSPlaceSearchByTextRequest request = [[ GMSPlaceSearchByTextRequest alloc ] initWithTextQuery : @"pizza in New York" placeProperties : @[ GMSPlacePropertyAll ] ]; request . shouldIncludePureServiceAreaBusinesses = YES ; Display attributions in your app When your app displays information obtained from GMSPlacesClient , such as photos and reviews, the app must also display the required attributions.
- The parameter can affect results based on applicable law. shouldIncludePureServiceAreaBusinesses If true , returns pure service area businesses in the search results.
- A pure service area business is a business that visits or delivers to customers directly, but does not serve customers at their business address.

